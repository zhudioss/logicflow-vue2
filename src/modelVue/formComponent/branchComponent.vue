<template>
  <div class="warp-detail">
    <div>
      <div class="inputField">
        <p>输入字段</p>
        <i class="el-icon-plus"></i>
      </div>
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

export default {
  name: 'branchComponent',
  props: ['detailBranchList'],
  computed: {},
  data() {
    return {
      input: ''
    }
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>
<style scoped lang="scss">
@use "@/assets/css/detailPublic" as *;
</style>
