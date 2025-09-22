<template>
  <div id="app" class="home">
    <div class="drag-panel" style="position: absolute;z-index:999;">
      <div v-for="(item,index) in componentsList" :key="index" draggable="true"
           @dragstart="onDragStart($event, JSON.stringify(item))">
        <img :src="item.icon" alt="" draggable="false">
        <p>{{ item.label }}</p>
      </div>
    </div>
    <div id="lf-container" style="width: 100%; height:100vh;overflow: hidden" @drop="onDrop"
         @dragover.prevent="onDragOver"></div>

    <!--浏览、功能、更新、发布-->
    <div class="functionalArea">
      <el-button icon="el-icon-video-play" @click="changeLineColor" size="mini">预览</el-button>
      <el-button icon="el-icon-menu" size="mini">功能</el-button>
      <el-button class="blueButton" icon="el-icon-refresh" size="mini">更新</el-button>
      <el-button class="blueButton" icon="el-icon-s-promotion" @click="exportButton" size="mini">发布</el-button>

    </div>

    <!-- 锚点菜单-->
    <div id="anchor-menu">
      <div class="content" v-for="item in anchorMenu" :key="item.id"
           @click="addNodeClick(item.type,item.properties)">
        <img :src="item.icon" alt="" draggable="false">
        <p>{{ item.name }}</p>
      </div>
    </div>

    <!-- 右键菜单-->
    <div id="custom-menu" v-show="rightMenuShow"
         :style="{ top: this.menuPosition.y + 'px', left: this.menuPosition.x + 'px' }">
      <div class="content" v-for="item in rightMenuShowList" :key="item.id"
           @click="handleMenuClick('delete')">
        <img :src="item.icon" alt="" draggable="false">
        <p>{{ item.name }}</p>
      </div>
    </div>

    <!--小地图和control工具栏-->
    <div class="controlClass">
      <el-button
          v-for="(item,index) in controlList"
          :key="index"
          :title="item.name"
          :disabled="item.disabled"
          :icon="item.icon"
          size="mini"
          @click="controlClick(item.name)"
      ></el-button>
    </div>

    <!--  弹窗-->
    <transition enter-active-class="animate__animated animate__fadeInRight animate__faster"
                leave-active-class="animate__animated animate__fadeOut animate__faster">
      <div v-resize-left class="drawer-class" v-show="drawer" ref="drawer">
        <div class="drawer-header">
          <div class="title">
            <img :src="detailForm.icon" alt="">
            {{ detailForm.label }}
          </div>
          <!--关闭关于更多-->
          <div style="display: flex;align-items: center;column-gap: 10px;position: relative">
            <el-button plain icon="el-icon-more" @click="moreAlertShow=true"></el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button plain type="danger" icon="el-icon-close" @click="handlerClose"></el-button>
            <div class="moreAlert-class" v-if="moreAlertShow" v-click-outside-close="()=>{moreAlertShow=false}"
                 ref="moreAlertRef">
              <div>
                <p style="margin-bottom: 5px;color:#667085;">关于</p>
                <p>
                  {{ moreAlertAbout.find(item => item.name === detailForm.label)?.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style="padding:0 10px" class="describe">
          <el-input ref="describe_ref" v-model="describeInput" placeholder="添加描述..."></el-input>
        </div>
        <div class="line-class"></div>
        <branchComponent
            :lf="lf"
            :detailBranchList="detailBranchList"
            :nodeModelId="nodeModelId"
            :detailForm="detailForm"
            style="flex: 1;overflow-y: auto;"/>
      </div>
    </transition>
  </div>
</template>

<script>
import LogicFlow from '@logicflow/core';
import {MiniMap} from "@logicflow/extension";

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

// 插入节点
import insertFormat from './js/insertFormat'
import clickNodeAdd from './js/clickNodeAdd'

import branchComponent from './formComponent/branchComponent.vue'

import {mapState} from 'vuex'
import childAll from "@/modelVue/js/childAll";


export default {
  name: 'App',
  components: {
    branchComponent,
  },
  computed: {
    ...mapState(['moreAlertAbout'])  // 自动映射 this.moreAlertAbout 到 store 中
  },
  data() {
    return {
      controlList: [
        {
          name: '放大',
          icon: "el-icon-zoom-in",
          disabled: false,
        },
        {
          name: '缩小',
          icon: "el-icon-zoom-out",
          disabled: false,
        },
        {
          name: '自适应',
          icon: "el-icon-place",
          disabled: false,
        },
        {
          name: '上一步',
          icon: "el-icon-back",
          disabled: true,
        },
        {
          name: '下一步',
          icon: "el-icon-right",
          disabled: true,
        },
      ],
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
          id: this.$nanoid(),
          name: '删除',
          icon: require('@/assets/删除.png'),
        },
      ],

      menuPosition: {x: 0, y: 0},

      drawer: false,

      detailForm: {
        label: '',
        icon: '',
      },
      nodeModelId: '',
      detailBranchList: [],
      describeInput: '',
      moreAlertShow: false,
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
    controlClick(name) {
      switch (name) {
        case '放大':
          this.lf.zoom(true);
          break
        case '缩小':
          this.lf.zoom(false);
          break
        case '自适应':
          this.lf.fitView()
          this.lf.zoom(0.78) // 默认
          this.lf.translateCenter() // 居中
          break
        case '上一步':
          this.lf.history.undoAble() ? this.lf.undo() : null
          break
        case '下一步':
          this.lf.history.redoAble() ? this.lf.redo() : null
          break
      }
    },
    init() {
      this.lf = new LogicFlow({
        container: document.querySelector('#lf-container'),
        // edgeType: 'bezier', // line 直线、polyline 折线、 bezier 曲线
        plugins: [MiniMap],
        pluginsOptions: {
          miniMap: {
            width: 200,
            height: 100,
            showEdge: true,
            leftPosition: 10,
            bottomPosition: 52,
          },
        },
        grid: {
          size: 15, // 点的密集程度
          visible: true,
          type: 'dot', // 'dot' | 'mesh'
          config: {
            color: '#e2e4ec', // 点的颜色
            thickness: 2, // 点的大小
          },
        },
        nodeTextEdit: false,// 禁止修改node内容
        edgeTextEdit: false,// 禁止修改edge内容
        stopScrollGraph: true, // 禁止鼠标滚动画布
        // stopZoomGraph: true, // 禁止缩放画布
        adjustEdge: false, // 禁止用户拖动中间
        // 取消连线边框
        edgeSelectedOutline: false,
        hoverOutline: false,
        snapline: false,// 禁用辅助线
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

      // 缩放
      this.lf.setZoomMaxSize(2);  // 缩放最大
      this.lf.setZoomMiniSize(0.5); // 最小
      this.lf.zoom(0.78) // 默认
      this.lf.translateCenter() // 居中

      // 全局控制，点击edge线变色
      this.lf.setTheme({
        bezier: {
          onClick: (e) => {
            e.stopPropagation()
            e.target.setAttribute('stroke', '#3f58fd');
          }
        }
      });

      // node edge anchor 事件
      nodeEvent.call(this)
      edgeEvent.call(this)
      anchorEvent.call(this)

      // 监听 history 状态变化
      this.lf.on('history:change', ({data}) => {
        const canUndo = this.lf.history.undoAble()
        const canRedo = this.lf.history.redoAble()
        canUndo ? this.controlList[3].disabled = false : null
        canUndo ? this.controlList[4].disabled = false : null
      })

      this.lf.extension.miniMap.show()  // 小地图
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
      const {nodes} = this.lf.getGraphData();
      let outEdges
      nodes.forEach(item => {
        if (item.type === 'start-v') {
          outEdges = this.lf.getNodeOutgoingEdge(item.id)
        }
      })
      outEdges.forEach(edge => {
        this.lf.changeEdgeType(edge.id, 'EDGE_BEZIER_A')
      })
    },

    // 添加节点
    addNodeClick(type, properties) {
      const currentNode = window.currentNode;
      if (!currentNode) return;
      const model = window.currentNode.props.model

      if (model.BaseType === 'node') {  // 判断点击的 node 或 edge
        clickNodeAdd.call(this, currentNode, type, properties);
      } else {
        insertFormat.call(this, model, type, currentNode, properties)
      }

      // 关闭菜单
      this.menuDom.style.display = 'none';
    },

    // 右键菜单点击
    handleMenuClick(name) {
      if (name === 'delete') {
        // 线删除
        if (this.currentNode.sourceNodeId && this.currentNode.targetNodeId) {
          const targetNodeModel = this.lf.getNodeModelById(this.currentNode.targetNodeId); // 下级model
          this.lf.getNodeIncomingEdge(targetNodeModel.id).length < 2 ? targetNodeModel.setProperties({hideAnchor: false}) : null
        } else {
          // node删除
          const targetNodeModel = this.lf.getNodeOutgoingEdge(this.currentNode.id); // 所有下级edge
          targetNodeModel.forEach(edge => {
            const edgeModel = this.lf.getNodeModelById(edge.targetNodeId); // 下级model
            edgeModel.setProperties({hideAnchor: false});
          });
        }
        this.lf.deleteNode(this.currentNode.id) || this.lf.deleteEdge(this.currentNode.id);

        childAll.call(this) // 同步详情页面子节点列表 // 同步详情页面子节点列表
      }
      this.rightMenuShow = false
    },

    handlerClose() {
      this.drawer = false
    },
  },

};
</script>

<style scoped lang="scss">
@use "@/assets/css/index.scss" as *;
</style>
