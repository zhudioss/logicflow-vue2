<template>
  <div class="home">
    <!-- 左侧拖拽面板 -->
    <div class="drag-panel" style="position: fixed;z-index: 999999999999;">
      <div v-for="(item,index) in componentsList" :key="index" draggable="true"
           @dragstart="onDragStart($event, JSON.stringify(item))">
        <img :src="item.icon" alt="" draggable="false">
        <p>{{ item.label }}</p>
      </div>
    </div>

    <div class="container" ref="container" @drop="onDrop" @dragover.prevent="onDragOver"></div>
    <el-button @click="exportButton" style="position: fixed;right: 10px;top: 70px;z-index: 9999999">导出数据
    </el-button>
    <el-button @click="changeLineColor" style="position: fixed;right: 10px;top: 125px;z-index: 9999999">Edge - A
    </el-button>
  </div>
</template>

<script>
import LogicFlow from "@logicflow/core";
import {Control} from "@logicflow/extension";

LogicFlow.use(Control);
import {register} from '@logicflow/vue-node-registry'
import {Menu} from "@logicflow/extension";
import "@logicflow/core/lib/style/index.css";

import {DndPanel} from '@logicflow/extension';
import "@logicflow/extension/lib/style/index.css";

// 组件引入
import vStartNode from '@/components/v-startNode.vue'
import vKnowNode from '@/components/v-knowNode.vue'
import vEndNode from '@/components/v-endNode.vue'

import {noAnimationEdge, animationEdge} from '../utils/BezierEdge'

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      lf: null,

      // vue组件组册
      componentsList: [
        {
          label: '开始',
          type: 'startNode',
          component: vStartNode,
          properties: {
            width: 0,
            height: 0,
          },
          icon: require('@/assets/运行.png'),
        },
        {
          label: '知识库',
          type: 'knowNode',
          component: vKnowNode,
          properties: {
            width: 0,
            height: 0,
          },
          icon: require('@/assets/知识库.png'),
        },
        {
          label: '结束',
          type: 'endNode',
          component: vEndNode,
          properties: {
            width: 0,
            height: 0,
          },
          icon: require('@/assets/结束.png'),
        }
      ],

      // 默认渲染数据
      nodesData: {
        "nodes": [
          {
            "id": "node_id_1",
            "type": "endNode",
            "x": 1142,
            "y": 354,
            "properties": {
              "width": 300,
              "height": 189,
            },
          },
          {
            "id": "7d7a085e-d7c2-4c31-9662-b92b20620c34",
            "type": "knowNode",
            "x": 718,
            "y": 354,
            "properties": {
              "width": 300,
              "height": 600
            }
          },
          {
            "id": "c42407f4-a189-410d-b3d8-072f21177355",
            "type": "startNode",
            "x": 280,
            "y": 353,
            "properties": {
              "width": 300,
              "height": 189,
              "text": 'Hello LogicFlow'
            }
          },
        ],
        "edges": [
          {
            "id": "55c88f3a-75d5-49ae-9db2-c0e2af484090",
            "type": "EDGE_BEZIER",
            // "type": "bezier",
            "properties": {},
            "sourceNodeId": "c42407f4-a189-410d-b3d8-072f21177355",
            "targetNodeId": "7d7a085e-d7c2-4c31-9662-b92b20620c34",
            "sourceAnchorId": "c42407f4-a189-410d-b3d8-072f21177355_1",
            "targetAnchorId": "7d7a085e-d7c2-4c31-9662-b92b20620c34_3",
            "startPoint": {
              "x": 430,
              "y": 353
            },
            "endPoint": {
              "x": 568,
              "y": 354
            },
            "pointsList": [
              {
                "x": 430,
                "y": 353
              },
              {
                "x": 530,
                "y": 353
              },
              {
                "x": 468,
                "y": 354
              },
              {
                "x": 568,
                "y": 354
              }
            ]
          },
          {
            "id": "5dad7b6d-3b20-438e-815d-5ff606a8e196",
            "type": "EDGE_BEZIER",
            "properties": {},
            "sourceNodeId": "7d7a085e-d7c2-4c31-9662-b92b20620c34",
            "targetNodeId": "node_id_1",
            "sourceAnchorId": "7d7a085e-d7c2-4c31-9662-b92b20620c34_1",
            "targetAnchorId": "node_id_1_3",
            "startPoint": {
              "x": 868,
              "y": 354
            },
            "endPoint": {
              "x": 992,
              "y": 354
            },
            "pointsList": [
              {
                "x": 868,
                "y": 354
              },
              {
                "x": 968,
                "y": 354
              },
              {
                "x": 892,
                "y": 354
              },
              {
                "x": 992,
                "y": 354
              }
            ]
          }
        ]
      },

      childIds: []
    }
  },
  mounted() {
    // 开始
    this.bus.$on('v-start', (res) => {
      this.setWidthHeight(res)
    })

    // 知识库
    this.bus.$on('v-know', (res) => {
      this.setWidthHeight(res)
    })

    // 结束
    this.bus.$on('v-end', (res) => {
      this.setWidthHeight(res)
    })

    this.$nextTick(() => {
      this.logicFlowInit()
    })

  },
  methods: {
    // 注册logicFlow
    logicFlowInit() {
      let _this = this;
      _this.lf = new LogicFlow({
        container: _this.$refs.container,
        edgeType: 'bezier', // line 直线、polyline 折线、 bezier 曲线
        plugins: [Menu, DndPanel],
        grid: {
          size: 30,
          visible: true,
          type: 'dot',
          config: {
            color: '#dddddd', // 点的颜色
            thickness: 1,
          },
        },
        nodeTextEdit: false,// 禁止修改内容
        stopScrollGraph: true, // 禁止鼠标滚动画布
        stopZoomGraph: true, // 禁止缩放画布
      });

      this.lf.register(noAnimationEdge);
      this.lf.register(animationEdge);
      // 设置全局默认dege样式
      this.lf.setDefaultEdgeType('EDGE_BEZIER');

      // 注册自定义vue组件
      this.componentsList.forEach(item => {
        register(
            {
              type: item.type,
              component: item.component,
            },
            _this.lf,
        )
      })

      // 默认渲染
      _this.lf.render(this.nodesData);

      // 配置菜单
      _this.lf.setMenuConfig({
        // 连接线
        edgeMenu: [
          {
            text: "删除",
            callback(edge) {
              _this.lf.deleteEdge(edge.id);
            }
          }
        ],
        // 节点
        nodeMenu: [
          {
            text: "删除",
            callback(node) {
              _this.lf.deleteNode(node.id);
            },
          },
        ], // 覆盖默认的节点右键菜单
        graphMenu: [], // 覆盖默认的边右键菜单，与false表现一样
      });
    },

    // 导出
    async exportButton() {
      // let graph = this.lf.getGraphData()
      // this.childIds = graph.nodes.map(item => item.id);

      this.childIds = ['c42407f4-a189-410d-b3d8-072f21177355'];
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

    // 自适应vue组件宽高
    setWidthHeight(res) {
      this.componentsList.forEach(item => {
        if (item.type === res.type) {
          item.properties.width = res.width
          item.properties.height = res.height
        }
      })
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

    // 修改链接线颜色
    changeLineColor() {
      this.lf.changeEdgeType('55c88f3a-75d5-49ae-9db2-c0e2af484090', 'EDGE_BEZIER_A');
    }
  }
}
</script>
<style>
.warpCard {
  * {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 14px;
    list-style: none;
  }

  background: #fff;
  box-sizing: border-box;
  border: 1px solid rgba(66, 66, 66, 0.15);
  border-radius: 8px;
  overflow: hidden;

  .head {
    padding: 7px;
    background: rgba(66, 66, 66, 0.15);
    font-size: 12px;
    font-weight: bold;
    color: #575757;
    text-align: left;
  }

  .title {
    padding-top: 10px;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 14px;
    font-weight: bold;

    img {
      height: 20px;
      margin-right: 5px;
    }
  }

  .el-input__inner {
    height: 32px;
    margin-top: 5px;
    font-size: 12px;
  }

  .el-select {
    width: 100%;
    margin-top: 0;
  }

  .el-input__suffix {
    height: 111%;
  }

  .el-select-dropdown {
    width: 100%;

  }

  .el-select-dropdown__item {
    span {
      font-size: 12px !important;
    }
  }

}

::-webkit-scrollbar {
  display: none;
}
</style>
<style scoped lang="scss">
.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.container {
  width: 100%;
  height: 100%;
}

.drag-panel {
  width: 120px;
  height: 200px;
  margin: 5px;

  div {
    height: 34px;
    background: #fff;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;

    img {
      height: 20px;
      margin-right: 5px;
    }
  }

}

::v-deep {
  .lf-dndpanel {
    padding: 0;
  }

  .lf-dnd-item {
    margin: 0;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .lf-dnd-shape {
    background-size: 30px;
    margin: 0 10px 0 0;
  }
}
</style>
