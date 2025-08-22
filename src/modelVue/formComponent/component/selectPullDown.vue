<template>
  <div class="selectPullDownClass" v-if="contextSelectShow"
       v-click-outside-close="outside">
    <el-input
        placeholder="搜索变量"
        prefix-icon="el-icon-search"
        @input="searchInput"
        v-model="searchContext">
    </el-input>
    <p style="color:#676f83">开始</p>
    <div style="flex: 1;overflow-y: auto">
      <div class="selectOpt-class" @click.stop="selectOptClick(item)"
           v-for="(item,index) in  options"
           :key="index">
        <span style="color:#3f58fd;font-weight: bold">{𝓧}</span>
        <el-tooltip :open-delay="500" effect="light" placement="left" :content="item.name">
          <div class="title-class">{{ item.name }}</div>
        </el-tooltip>
        <img src="@/assets/对勾.png" alt="" height="20" v-show="item.select">
        <span style="margin-left: auto">{{ item.type }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectPullDown',
  props: ['data', 'title', 'select'],
  components: {},
  computed: {},
  data() {
    return {
      contextSelectShow: false,
      searchContext: '',
      options: JSON.parse(JSON.stringify(this.data)),
    }
  },
  watch: {},
  created() {

  },
  mounted() {
    console.log(1)
  },
  methods: {
    // 搜索模型
    searchInput(val) {
      if (val) {
        this.options = this.data.filter(item => item[this.title].includes(val));
      } else {
        this.options = this.data;
      }
    },

    // 点击模型选项
    selectOptClick(val) {
      this.options.forEach(item => item[this.select] = false)
      val[this.select] = true
      const index = this.data.findIndex(item => item[this.title] === val[this.title])
      const tag = val[this.title]
      this.$emit('setData', {index, tag})
      this.outside()
    },

    outside() {
      this.contextSelectShow = false;
      this.searchContext = '';
      this.options = this.data
      this.$emit('backRotate')
    }
  }
}
</script>

<style lang="scss" scoped>
.selectPullDownClass {
  width: calc(100% - 75px);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 250px;
  background: #fff;
  padding: 13px;
  position: absolute;
  top: 74px;
  z-index: 99999;
  border-radius: 8px;
  border: 1px solid #e4e4e4;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

  .title-class {
    max-width: 50%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 400;
  }

  p {
    margin: 10px 0 3px;
    font-size: 12px;
  }

  .selectOpt-class {
    border-radius: 8px;
    height: 32px;
    font-weight: normal;
    color: #354052;
    cursor: pointer;
    padding: 0 5px;
    display: flex;
    align-items: center;
    column-gap: 6px;

    &:hover {
      background: #f1f3f6;
    }
  }

  ::v-deep {
    .el-input__inner {
      height: 32px;
      background: #f9fafb;
      font-size: 13px;
      border-radius: 8px;
      padding-left: 30px;
    }

    .el-input__icon {
      line-height: 32px;
    }
  }
}
</style>
