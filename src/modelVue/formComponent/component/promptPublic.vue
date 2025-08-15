<template>
  <div class="promptPublic" ref="promptRef">
    <div class="topClass">
      <p style="font-weight: bold">SYSTEM</p>
      <el-tooltip effect="light" content="为对话提供高层指导"
                  placement="top">
        <img src="@/assets/问号.png" alt="" height="13">
      </el-tooltip>
      <img class="generator" src="@/assets/四角星.png" alt="" height="16">
      <el-divider direction="vertical"></el-divider>
      <el-tooltip effect="light" content="开启支持 Jinja 模版" placement="top">
        <div>
          <span>Jinja</span>
          <el-switch v-model="switchVal"></el-switch>
        </div>
      </el-tooltip>
      <el-tooltip effect="light" content="快速插入" placement="top">
        <div class="xClass">{𝓧}</div>
      </el-tooltip>
      <img class="xClass" src="@/assets/删除.png" alt="" height="20">
      <img class="xClass" src="@/assets/复制.png" alt="" height="16" @click="copyClick">
      <img class="xClass" src="@/assets/放大.png" alt="" height="16" @click="amplifyClick">
    </div>

  </div>
</template>

<script>
export default {
  name: 'promptPublic',
  props: ['promptData'],
  components: {},
  computed: {},
  data() {
    return {
      switchVal: false,
      amplifyTag: false,
    }
  },
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {
    copyClick() {

    },
    amplifyClick() {
      if (this.amplifyTag) {
        this.$refs.promptRef.style.height = '100px'
      } else {
        this.$refs.promptRef.style.height = '300px'
      }
      this.amplifyTag = !this.amplifyTag;

    }
  }
}
</script>

<style lang="scss" scoped>
.promptPublic {
  width: 100%;
  height: 100px;
  background: #f2f4f7;
  border-radius: 8px;
  padding: 10px;

  .topClass {
    display: flex;
    align-items: center;
    column-gap: 6px;
    font-weight: normal;

    .generator, .xClass {
      cursor: pointer;
      padding: 5px;
      border-radius: 8px;
      margin-left: auto;

      &:hover {
        background-color: #d5e7ff;
      }
    }

    .xClass {
      margin: 0;

      &:hover {
        background: #e9ebf0;
      }
    }
  }
}

::v-deep {
  .topClass {
    .el-switch__core {
      transform: scale(0.8);
    }
  }
}
</style>
