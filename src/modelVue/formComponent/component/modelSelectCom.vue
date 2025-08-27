<template>
  <div class="modelSelectCom">
    <div class="content-class" style="width: auto" @click="optSelect" ref="optSelectRef">
      <img src="@/assets/模型.png" alt="" height="20">
      <div class="title-class" :title="modelTitle">{{ modelTitle }}</div>
      <i class="el-icon-arrow-down" ref="selectIRef"></i>
    </div>
    <div class="modelSelectClass" v-if="selectListShow" v-click-outside-close="()=>{selectListShow=false}">
      <el-input
          placeholder="搜索模型"
          prefix-icon="el-icon-search"
          @input="e=>searchInput(e,'模型')"
          v-model="searchModel">
      </el-input>
      <p style="color:#676f83">OpenAI-API-compatible</p>
      <div style="flex: 1;overflow-y: auto">
        <div class="selectOpt-class" @click.stop="selectOptClick(item,'模型')"
             v-for="(item,index) in  selectOptList"
             :key="index">
          <img src="@/assets/模型.png" alt="" height="20">
          <div class="title-class">{{ item.value }}</div>
          <img src="@/assets/对勾.png" alt="" height="20" v-show="item.select">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modelSelectCom',
  props: ['propsModelTitle'],
  components: {},
  computed: {},
  data() {
    return {
      modelTitle: this.propsModelTitle ? this.propsModelTitle : '',
      selectListShow: false,
      searchModel: '',
      selectOptList: [
        {
          value: 'rerank',
          select: false,
        },
        {
          value: 'qwen32b',
          select: false,
        },
        {
          value: 'deepseek32b',
          select: false,
        },
        {
          value: 'deepseek671b',
          select: false,
        },
        {
          value: 'qwen325b',
          select: false,
        },
      ],
    }
  },
  watch: {
    selectListShow: function (newVal) {
      if (newVal) {
        this.$refs.selectIRef.style.transform = 'rotate(-180deg)'
      } else {
        this.$refs.selectIRef.style.transform = 'rotate(0deg)'
      }
    },
  },
  created() {

  },
  mounted() {

  },
  methods: {
    optSelect() {
      this.selectListShow = true
      this.selectOptList.forEach(item => {
        item.value == this.modelTitle ? item.select = true : null
      })
      this.selectOptList_copy = JSON.parse(JSON.stringify(this.selectOptList))
    },
    // 搜索模型
    searchInput(val, name) {
      const config = {
        '模型': {list: 'selectOptList', copy: 'selectOptList_copy', key: 'value'},
      };

      const target = config[name];

      if (val) {
        this[target.list] = this[target.copy].filter(item => item[target.key].includes(val));
      } else {
        this[target.list] = [...this[target.copy]];
      }
    },
    // 点击模型选项
    selectOptClick(val, name) {
      const config = {
        '模型': {list: 'selectOptList', key: 'value', show: 'selectListShow', title: 'modelTitle'},
      }
      const target = config[name];
      this[target.list].forEach(item => item.select = false)
      val.select = true
      this[target.title] = val[target.key]
      this[target.show] = false
    },

  }
}
</script>

<style lang="scss" scoped>
.modelSelectCom {
  i {
    margin-left: auto;
  }

  .title-class {
    max-width: 50%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 400;
  }

  .modelSelectClass {
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 250px;
    background: #fff;
    padding: 13px;
    position: absolute;
    top: 62px;
    z-index: 99999;
    border-radius: 8px;
    border: 1px solid #e4e4e4;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

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
}


</style>
