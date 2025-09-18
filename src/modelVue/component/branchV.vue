<template>
  <div class="warpCard start-class"
       :style="`width:${properties.width}px;height:${properties.height}px`">
    <div class="title">
      <img src="@/assets/条件分支.png" alt="">
      条件分支
    </div>
    <div class="judgment">
      <div v-for="(item,index) in properties.judgmentList" :key="index">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'branchV',
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
    handleClick() {
      // const dom = document.querySelector('.warpCard')
      // console.log(dom,'////')
      // dom.style.border = '1.5px solid #3f58fd'
      // console.log('点击的是真实画布上的 HtmlNode:', this.properties.id);
      // 在这里调用业务逻辑，比如修改边框
    }
  }
}
</script>

<style scoped lang="scss">
.warpCard {
  position: relative;

  .judgment {
    height: auto;
    position: absolute;
    right: 15px;
    font-size: 12px;
    font-weight: bold;
    top: 22px;
    bottom: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    div {
      text-align: right;
    }
  }
}


</style>

