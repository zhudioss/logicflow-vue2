<template>
  <div id="app" class="home">
    <div class="drag-panel" style="position: fixed;z-index: 999999999999;">
      <div v-for="(item,index) in componentsList" :key="index" draggable="true"
           @dragstart="onDragStart($event, JSON.stringify(item))">
        <img :src="item.icon" alt="" draggable="false">
        <p>{{ item.label }}</p>
      </div>
    </div>
    <div id="lf-container" style="width: 100%; height:100vh;overflow: hidden" @drop="onDrop"
         @dragover.prevent="onDragOver"></div>
    <el-button @click="exportButton" style="position: fixed;right: 10px;top: 67px;right: 5px;z-index: 9999999">导出数据
    </el-button>
    <el-button @click="changeLineColor" style="position: fixed;right: 10px;top: 116px;right: 5px;z-index: 9999999">Edge
      - A
    </el-button>
    <div id="anchor-menu">
      <div class="content" v-for="item in anchorMenu" :key="item.id"
           @click="addNodeClick(item.type)">
        <img :src="item.icon" alt="" draggable="false">
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import LogicFlow from '@logicflow/core';
import {Control} from "@logicflow/extension";

LogicFlow.use(Control);
import {Menu} from "@logicflow/extension";
import "@logicflow/core/lib/style/index.css";
import {DndPanel} from '@logicflow/extension';
import "@logicflow/extension/lib/style/index.css"

import {noAnimationEdge, animationEdge, Highlight, NotHighlighted} from '@/utils/BezierEdge'

// 全局注册管理器 函数工厂
import vueInstanceManager from '@/modelVue/js/vueInstanceManager';
import {createVueHtmlNode} from "./js/createVueHtmlNode";

import {componentsList} from "./js/componentsList";
import {nodeData} from "./js/nodeData";
import {anchorMenu} from "./js/anchor-menu";

export default {
  name: 'App',
  data() {
    return {
      lf: '',

      // 渲染数据
      nodeData,

      // vue组件组册
      componentsList,

      // 导出数据 记录vue组件完成情况
      childIds: [],

      // 自定义菜单
      anchorMenu,

      menuDom: null,

    }
  },
  created() {
  },

  mounted() {
    this.init()
    this.menuDom = document.getElementById('anchor-menu')
    window.addEventListener('click', () => this.menuDom.style.display = 'none')
  },
  methods: {
    init() {
      this.lf = new LogicFlow({
        container: document.querySelector('#lf-container'),
        edgeType: 'bezier', // line 直线、polyline 折线、 bezier 曲线
        plugins: [Menu, DndPanel],
        grid: {
          size: 15, // 点的密集程度
          visible: true,
          type: 'dot', // 'dot' | 'mesh'
          config: {
            color: '#e2e4ed', // 点的颜色
            thickness: 1, // 点的大小
          },

        },
        nodeTextEdit: false,// 禁止修改内容
        stopScrollGraph: true, // 禁止鼠标滚动画布
        stopZoomGraph: true, // 禁止缩放画布
        adjustEdge: false, // 禁止用户拖动中间点
      });

      // vue model 组件组册
      this.componentsList.forEach(item => {
        this.lf.register(createVueHtmlNode({
          type: item.type, // 节点类型
          component: item.component,
          properties: item.properties
        }))
      })
      // 普通model 注册
      this.lf.register(noAnimationEdge)
      this.lf.register(animationEdge)
      this.lf.register(Highlight)
      this.lf.register(NotHighlighted)
      // 设置全局默认dege样式
      this.lf.setDefaultEdgeType('EDGE_BEZIER');

      // 滑动
      this.lf.on('node:mouseenter', ({data}) => {
        const nodeId = data.id;
        const edges = this.lf.graphModel.edges;
        edges.forEach(edge => {
          if ((edge.sourceNodeId === nodeId || edge.targetNodeId === nodeId) && edge.type !== 'EDGE_BEZIER_A') {
            this.lf.changeEdgeType(edge.id, 'Highlight');
          }
        });
      });
      this.lf.on('node:mouseleave', ({data}) => {
        const nodeId = data.id;
        const edges = this.lf.graphModel.edges;
        edges.forEach(edge => {
          if ((edge.sourceNodeId === nodeId || edge.targetNodeId === nodeId) && edge.type !== 'EDGE_BEZIER_A') {
            this.lf.changeEdgeType(edge.id, 'NotHighlighted');
          }
        });
      });

      this.lf.on('node:click', ({data}) => {
        console.log(data, '---------')
        const nodeId = data.id;
        const vueManager = vueInstanceManager.getAll()
        vueManager.forEach(item => {
          if (item.id === nodeId) {
            item.vm.$el.style.border = '1.5px solid #3f58fd'
          } else {
            item.vm.$el.style.border = 'none'
          }
        })
      });

      this.lf.on('anchor:dragstart', ({data}) => {
        console.log('锚点被点击/开始连线：', data);
        // data.nodeId, data.anchorId, data.type ('source' 或 'target')
      });

      // 配置菜单
      this.lf.setMenuConfig({
        // 连接线
        edgeMenu: [
          {
            text: "删除",
            callback: (edge) => {
              console.log(edge, '------')
              this.lf.deleteEdge(edge.id);
            }
          }
        ],
        // 节点
        nodeMenu: [
          {
            text: "删除",
            callback: (node) => {
              vueInstanceManager.remove(node.id)
              this.lf.deleteNode(node.id);
            },
          },
        ], // 覆盖默认的节点右键菜单
        graphMenu: [], // 覆盖默认的边右键菜单，与false表现一样
      });

      this.lf.render(this.nodeData);

    },

    onDragStart(event, data) {
      event.dataTransfer.setData("nodeData", data);
    },
    onDrop(event) {
      const nodeData = event.dataTransfer.getData("nodeData");
      let resData = JSON.parse(nodeData);
      if (!resData) return;

      // 针对画布放大缩小平移后拖拽位置有偏移处理
      const {SCALE_X, SCALE_Y, TRANSLATE_X, TRANSLATE_Y} = this.lf.getTransform();
      const {offsetX, offsetY} = event;
      this.lf.addNode({
        type: resData.type,
        x: (offsetX - TRANSLATE_X) / SCALE_X,
        y: (offsetY - TRANSLATE_Y) / SCALE_Y,
        properties: resData.properties
      });
    },
    onDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move"; // 让鼠标不会出现“复制”加号
    },

    // 导出
    async exportButton() {
      let graph = this.lf.getGraphData()
      this.childIds = graph.nodes.map(item => item.id);

      const promises = this.childIds.map(
          (id) =>
              new Promise((resolve) => {
                const handler = (childId) => {
                  if (childId === id) {
                    this.bus.$off("childMethodDone", handler);
                    resolve();
                  }
                };
                this.bus.$on("childMethodDone", handler);
              })
      );

      this.bus.$emit("runChildMethod");
      await Promise.all(promises);

      let values = this.lf.getGraphData()// getGraphRawData()获取原始数据，getGraphData()获取加工后的数据
      console.log(values, '+++++++++++')
    },

    // 修改链接线颜色
    changeLineColor() {
      this.lf.changeEdgeType('5d7482d7-9a0f-438f-ab56-b83062ffc6dc', 'EDGE_BEZIER_A');
    },

    // 添加节点
    addNodeClick(type) {
      const currentNode = window.currentNode;
      if (!currentNode) return;

      const graphModel = currentNode.graphModel;
      const x = currentNode.x + 450;
      const y = currentNode.y;

      const newNode = graphModel.addNode({
        type,
        x,
        y,
        properties: {}
      });

      graphModel.addEdge({
        sourceNodeId: currentNode.id,
        targetNodeId: newNode.id,
      });

      // 关闭菜单
      this.menuDom.style.display = 'none';
    }
  }

};
</script>
<style scoped lang="scss">
@use "@/assets/css/index.scss" as *;
</style>
