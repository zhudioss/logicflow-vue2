<template>
  <div class="warp-detail">
    <div>
      <!-- 组件 -->
      <component
          v-for="(item,index) in componentsList"
          :key="index"
          :is="item"
          v-show="detailForm.uniqueCom==item"
      ></component>

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
import startCom from '@/modelVue/formComponent/component/startCom.vue'
import llmCom from '@/modelVue/formComponent/component/llmCom.vue'
import knowledgeRet from '@/modelVue/formComponent/component/knowledgeRet.vue'
import endCom from '@/modelVue/formComponent/component/endCom.vue'
import aggCom from '@/modelVue/formComponent/component/aggCom.vue'
import domExCom from '@/modelVue/formComponent/component/domExCom.vue'
import codeCom from '@/modelVue/formComponent/component/codeCom.vue'

export default {
  name: 'branchComponent',
  props: ['detailBranchList', 'detailForm'],
  components: {
    startCom,
    llmCom,
    endCom,
    knowledgeRet,
    aggCom,
    domExCom,
    codeCom

  },
  computed: {},
  data() {
    return {
      input: '',
      componentsList: [
        'startCom',
        'llmCom',
        'knowledgeRet',
        'endCom',
        'aggCom',
        'domExCom',
        'codeCom'
      ]
    }
  },
  watch: {},
  mounted() {
    console.log(this.detailBranchList, '--=-=-=-=')
    console.log(this.detailForm, 'detailForm')
  },
  methods: {}
}
</script>
<style lang="scss">
@use "@/assets/css/detailPublic" as *;
</style>
