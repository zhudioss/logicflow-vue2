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

    <!--    锚点菜单-->
    <div id="anchor-menu">
      <div class="content" v-for="item in anchorMenu" :key="item.id"
           @click="addNodeClick(item.type)">
        <img :src="item.icon" alt="" draggable="false">
        <p>{{ item.name }}</p>
      </div>
    </div>

    <!--    右键菜单-->
    <div id="custom-menu" v-show="rightMenuShow" :style="{ top: menuPosition.y + 'px', left: menuPosition.x + 'px' }">
      <div class="content" v-for="item in rightMenuShowList" :key="item.id"
           @click="handleMenuClick('delete')">
        <img :src="item.icon" alt="" draggable="false">
        <p>{{ item.name }}</p>
      </div>
    </div>


  </div>
</template>

<script>
import LogicFlow from '@logicflow/core';
import {Control, DndPanel} from "@logicflow/extension";

LogicFlow.use(Control);

import "@logicflow/core/lib/style/index.css";
import "@logicflow/extension/lib/style/index.css"

import {defaultEdge, animationEdge, Highlight} from '@/utils/BezierEdge'

// 全局注册管理器 函数工厂
import vueInstanceManager from '@/modelVue/js/vueInstanceManager';
import {createVueHtmlNode} from "./js/createVueHtmlNode";

import {componentsList} from "./js/componentsList";
import {nodeData} from "./js/nodeData";
import {anchorMenu} from "./js/anchor-menu";

// node edge anchor 事件导入
import nodeEvent from './event/node'
import edgeEvent from './event/edge'
import anchorEvent from './event/anchor'

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

      clickEdgeId: null,

      menuDom: null,
      rightMenuShow: false,

      rightMenuShowList: [
        {
          id: Math.random(),
          name: '删除',
          icon: require('@/assets/删除.png'),
        },
      ],

      menuPosition: {x: 0, y: 0},
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
        // edgeType: 'bezier', // line 直线、polyline 折线、 bezier 曲线
        plugins: [DndPanel],
        grid: {
          size: 15, // 点的密集程度
          visible: true,
          type: 'dot', // 'dot' | 'mesh'
          config: {
            color: '#e2e4ed', // 点的颜色
            thickness: 1, // 点的大小
          },
        },
        nodeTextEdit: false,// 禁止修改node内容
        edgeTextEdit: false,// 禁止修改edge内容
        stopScrollGraph: true, // 禁止鼠标滚动画布
        stopZoomGraph: true, // 禁止缩放画布
        adjustEdge: false, // 禁止用户拖动中间
        // 取消连线边框
        edgeSelectedOutline: false,
        hoverOutline: false
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
      this.lf.register(defaultEdge)
      this.lf.register(animationEdge)
      this.lf.register(Highlight)

      // 设置全局默认dege样式
      this.lf.setDefaultEdgeType('EDGE_BEZIER');

      this.lf.render(this.nodeData);

      // 全局控制，点击edge线变色
      this.lf.setTheme({
        bezier: {
          onClick: (e) => {
            e.stopPropagation()
            e.target.setAttribute('stroke', '#3f58fd'); // 放大
          }
        }
      });

      // node edge anchor 事件
      nodeEvent.call(this)
      edgeEvent.call(this)
      anchorEvent.call(this)
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
      this.lf.changeEdgeType('edges1', 'EDGE_BEZIER_A');
    },

    // 添加节点
    addNodeClick(type) {
      console.log(window.currentNode, '-=-=-=-=-=-=-=')
      const currentNode = window.currentNode;
      if (!currentNode) return;

      const graphModel = currentNode.props.graphModel;
      const model = window.currentNode.props.model

      const x = currentNode.props.model.x + 450;
      const y = currentNode.props.model.y;

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
    },

    // 右键菜单点击
    handleMenuClick(name) {
      if (name === 'delete') {
        if (this.currentNode.sourceNodeId && this.currentNode.targetNodeId) {
          const targetNodeModel = this.lf.getNodeModelById(this.currentNode.targetNodeId); // 下级model
          targetNodeModel.setProperties({hideAnchor: false});
        } else {
          const targetNodeModel = this.lf.getNodeOutgoingEdge(this.currentNode.id); // 所有下级edge
          targetNodeModel.forEach(edge => {
            const edgeModel = this.lf.getNodeModelById(edge.targetNodeId); // 下级model
            edgeModel.setProperties({hideAnchor: false});
          });
        }
        this.lf.deleteNode(this.currentNode.id) || this.lf.deleteEdge(this.currentNode.id);
      }
      this.rightMenuShow = false
    },
  }

};
</script>
<style scoped lang="scss">
@use "@/assets/css/index.scss" as *;
</style>
