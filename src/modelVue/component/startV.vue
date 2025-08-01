<template>
  <div class="warpCard start-class">
    <div class="title">
      <img src="@/assets/开始.png" alt="">
      开始
    </div>
  </div>
</template>

<script>

export default {
  name: 'startV',
  props: ['properties', 'model'],
  computed: {},
  data() {
    return {
      input: '',
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
          startInput: this.input
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
  width: 240px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
