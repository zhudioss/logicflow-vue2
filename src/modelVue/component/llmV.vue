<template>
  <div :class="`warpCard start-class class_${model.id}`" :style="`width:${properties.width}px;height:${properties.height}px`">
    <div class="title">
      <img src="@/assets/llm.png" alt="">
      LLM
    </div>
  </div>
</template>

<script>

export default {
  name: 'llmV',
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
