<template>
  <div class="warpCard start-class" :style="`width:${properties.width}px;height:${properties.height}px`">
    <div class="title">
      <img src="../../assets/文档提取.png" alt="">
      文档提取
    </div>
  </div>
</template>

<script>
export default {
  name: 'domExV',
  props: ['properties', 'model'],
  computed: {},
  data() {
    return {
      input: '',
    }
  },
  watch: {},
  mounted() {
    // console.log(this.properties, this.model,'-=-=-=-=-=====-=-=')
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

</style>

