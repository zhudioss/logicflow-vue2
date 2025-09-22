<template>
  <div :class="`warpCard start-class class_${model.id}`" :style="`width:${properties.width}px;height:${properties.height}px`">
    <div class="title">
      <img src="@/assets/http请求.png" alt="">
      http请求
    </div>
  </div>
</template>

<script>
export default {
  name: 'httpV',
  props: ['properties', 'model'],
  computed: {},
  data() {
    return {
      input: '',
    }
  },
  watch: {},
  mounted() {
    this.model.setProperties({
      className: `class_${this.model.id}`
    })
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

