<template>
  <div class="warpCard start-class">
    <div class="head">
      TestComponent
    </div>
    <div style="padding:0 10px">
      <div class="title" @click="getNodeData">
        <img src="../assets/运行.png" alt="">
        开始节点
      </div>
      <div style="color: rgba(66,66,66,0.4);font-size: 12px;">结束定义输出参数</div>
      <div style="font-weight: bold;margin-top: 15px">输出参数</div>
      <div style="color: rgba(66,66,66,0.4);font-size: 13px;margin-top: 5px">参数名称</div>
      <el-input v-model="input2" placeholder="请输入参数名称" clearable></el-input>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vStartNode',
  inject: ['getNode', 'getGraph'],
  computed: {},
  data() {
    return {
      input2: '',
    }
  },
  watch: {
    // properties: {
    //   handler(newVal) {
    //     this.inputValue = newVal.text;
    //   },
    //   deep: true
    // }
  },
  mounted() {
    this.bus.$on('runChildMethod', () => this.updateNodeData())

    this.bus.$emit('v-start', {
      type: "startNode",
      width: document.querySelector('.start-class').offsetWidth,
      height: document.querySelector('.start-class').offsetHeight,
    })
  },
  methods: {
    getNodeData() {
      console.log(this.getNode(), '--------');
    },
    updateNodeData() {
      return new Promise((resolve) => {
        const graph = this.getNode()
        graph.setProperty('obj', {
          a: 1,
          b: 2
        })
        this.bus.$emit("childMethodDone", graph.id);
        resolve();
      });
    }
  }
}
</script>
<style scoped lang="scss">
.warpCard {
  width: 300px;
  height: 189px;
  padding-bottom: 5px;
  overflow-y: auto;
}

ul {
  margin-top: 5px;

  li {
    display: flex;

    div {
      font-size: 12px;
      color: #515151;
    }

    div:nth-of-type(1) {
      width: 35%;
      padding-right: 5px;
    }

    div:nth-of-type(2) {
      flex: 1;
    }

    ::v-deep {
      .el-select-dropdown {
        width: 100%;
        top: auto !important;
        bottom: 100% !important;
      }

      .el-popper[x-placement^=bottom] .popper__arrow {
        display: none !important;
      }
      .el-popper[x-placement^=top] .popper__arrow{
        display: none !important;
      }
    }

  }
}


</style>
