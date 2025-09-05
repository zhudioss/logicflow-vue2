<template>
  <div class="inputField" style="display: block">
    <promptPublic
        :jinShow="false"
        :starShow="false"
        :removeShow="false"
        :topTitleIconShow="false"
        :topTitle="'回复'"
    ></promptPublic>
  </div>
</template>

<script>
import promptPublic from "@/modelVue/formComponent/component/utils/promptPublic.vue";

export default {
  name: 'endCom',
  props: [],
  components: {
    promptPublic
  },
  computed: {},
  data() {
    return {}
  },
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
