<template>
  <div class="warpCard start-class" :style="`width:${properties.width}px;height:${properties.height}px`">
    <div class="title">
      <img src="@/assets/模版转换.png" alt="">
      模版转换
    </div>
  </div>
</template>
<script>

export default {
  name: 'templateV',
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

</style>

