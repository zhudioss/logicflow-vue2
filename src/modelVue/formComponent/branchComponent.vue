<template>
  <div class="warp-detail">
    <div>
      <!-- 组件 -->
      <component :is="detailForm.uniqueCom"></component>

      <div class="line-class"></div>
      <div class="inputField">
        <p>下一步</p>
      </div>
      <div class="next-content">
        <p class="describe-class">添加此工作流程中的下一个节点</p>
        <div class="nodeBranch-class">
          <div class="left">
            <div class="start-class">
              <img src="@/assets/开始.png" alt="">
            </div>
            <div class="edge">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="right">
            <div class="right-content" v-for="item in detailBranchList" :key="item.id">
              <img :src="item.componentsData.icon" alt="">
              {{ item.componentsData.label }}
            </div>
            <div class="right-content addNode-class">
              <div style="width:22px;height: 22px;text-align: center;margin-right: 10px;line-height: 22px;">
                <i class="el-icon-plus"></i>
              </div>
              添加分支
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import startCom from '@/modelVue/formComponent/component/com/startCom.vue'
import llmCom from '@/modelVue/formComponent/component/com/llmCom.vue'
import knowledgeCom from '@/modelVue/formComponent/component/com/knowledgeCom.vue'
import endCom from '@/modelVue/formComponent/component/com/endCom.vue'
import aggCom from '@/modelVue/formComponent/component/com/aggCom.vue'
import domExCom from '@/modelVue/formComponent/component/com/domExCom.vue'
import codeCom from '@/modelVue/formComponent/component/com/codeCom.vue'
import httpCom from '@/modelVue/formComponent/component/com/httpCom.vue'
import branchCom from '@/modelVue/formComponent/component/com/branchCom.vue'

export default {
  name: 'branchComponent',
  props: ['detailBranchList', 'detailForm'],
  components: {
    startCom,
    llmCom,
    endCom,
    knowledgeCom,
    aggCom,
    domExCom,
    codeCom,
    httpCom,
    branchCom

  },
  computed: {},
  data() {
    return {
      input: '',
    }
  },
  watch: {},
  mounted() {
    console.log(this.detailBranchList, 'detailBranchList')
    console.log(this.detailForm, 'detailForm')
  },
  methods: {}
}
</script>
<style lang="scss">
@use "@/assets/css/detailPublic" as *;
</style>
