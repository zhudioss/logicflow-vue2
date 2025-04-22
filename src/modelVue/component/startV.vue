<template>
  <div class="warpCard start-class">
    <div class="head">
      TestComponent
    </div>
    <div style="padding:0 10px">
      <div class="title">
        <img src="../../assets/开始.png" alt="">
        开始节点
      </div>
      <div style="color: rgba(66,66,66,0.4);font-size: 12px;">开始定义输出参数</div>
      <div style="font-weight: bold;margin-top: 15px">输出参数</div>
      <div style="color: rgba(66,66,66,0.4);font-size: 13px;margin-top: 5px">参数名称</div>
      <el-input v-model="input2" placeholder="请输入参数名称" clearable></el-input>
    </div>
  </div>
</template>

<script>

export default {
  name: 'startV',
  props: ['width', 'height', 'model'],
  computed: {},
  data() {
    return {
      input2: '',
    }
  },
  watch: {},
  mounted() {
    this.bus.$on('runChildMethod', () => this.updateNodeData())
  },
  methods: {
    updateNodeData() {
      return new Promise((resolve) => {
        const graph = this.model
        graph.setProperties({
          a: 1,
          b: 2,
          c: 3
        })
        this.bus.$emit("childMethodDone", graph.id);
        resolve();
      });
    },
  }
}
</script>
<style scoped lang="scss">
.warpCard {
  width: 300px;
  height: 189px;
  //border: 2px solid #145aef;
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

      .el-popper[x-placement^=top] .popper__arrow {
        display: none !important;
      }
    }

  }
}

::v-deep {
  .el-input__inner {
    height: 32px;
    margin-top: 5px;
    font-size: 12px;
    padding-left: 15px;
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

</style>
