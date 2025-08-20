<template>
  <div>
    <div class="inputField">
      <promptPublic/>
    </div>
  </div>
</template>

<script>
import promptPublic from "@/modelVue/formComponent/component/promptPublic.vue";

export default {
  name: 'llmCom',
  props: [],
  components: {
    promptPublic
  },
  computed: {},
  data() {
    return {
      modelTitle: 'deepseek32b',
      modelOptShow: false,
      selectOptList: [
        {
          value: 'qwen72b',
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
      selectOptList_copy: [], // 深拷贝

      selectListShow: false,
      searchModel: '',  // 模型搜索

      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      selectValue: '',
      paramsContentList: [
        {
          name: '气温',
          switchVal: false,
          content: '核采样阈值。用于决定结果随机性，取值越高随机性越强即相同的问题得到的不同答案的可能性越高',
          sliderVal: 0.7,
          max: 2,
          min: 0,
          step: 0.1
        },
        {
          name: 'Top P',
          switchVal: false,
          content: '生活过程中核采样方法概率阈值。取值越大，生成的随机性越高；取值越小，生成的确定性越高。',
          sliderVal: 1,
          max: 1,
          min: 0,
          step: 0.1
        },
        {
          name: '频率惩罚',
          switchVal: false,
          content: '用于控制模型已使用字词的重复率。提高此项可以降低模型在输出中重复相同字词的重复度',
          sliderVal: 0,
          max: 2,
          min: -2,
          step: 0.1
        },
        {
          name: '存在惩罚',
          switchVal: false,
          content: '用于控制模型生成时的重复度。提高此项可以降低模型生成的重复度。',
          sliderVal: 0,
          max: 2,
          min: -2,
          step: 0.1
        },
        {
          name: '最大标记',
          switchVal: false,
          content: '模型回答的 tokens 的最大长度',
          sliderVal: 512,
          max: 409600,
          min: 1,
          step: 1
        },
      ],

      contextSetParams: '设置变量值',
      contextSelectShow: false,
      contextTags: [],
      searchContext: '',  // 变量搜索
      contextOptList: [
        {
          name: 'sys.query',
          type: 'String',
          select: false
        },
        {
          name: 'sys.dialogue_count',
          type: 'Number',
          select: false
        },
        {
          name: 'sys.conversation_id',
          type: 'String',
          select: false
        },
        {
          name: 'sys.user_id',
          type: 'String',
          select: false
        },
        {
          name: 'sys.files',
          type: 'String',
          select: false
        },
        {
          name: 'sys.app_id',
          type: 'String',
          select: false
        },
        {
          name: 'sys.workflow_id',
          type: 'String',
          select: false
        },
      ],
      contextOptList_copy: [], // 深拷贝

      memoryVal: true,
      memoryWindowVal: false,
      memoryNum: 57,

      outputShow: false,
      visionVal: false,

      failVal: false,
      failList: [
        {
          text: '最大重试次数',
          value: 3,
          step: 1,
          min: 1,
          max: 10
        },
        {
          text: '重试间隔（毫秒）',
          value: 1000,
          step: 1,
          min: 100,
          max: 5000
        },
      ],

      abnormalInput: '',
      abnormalVal: '无',
      abnormalOpt: [
        {
          label: '无',
          value: '无'
        },
        {
          label: '默认值',
          value: '默认值'
        },
        {
          label: '异常分支',
          value: '异常分支'
        }
      ]

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
    contextSelectShow: function (newVal) {
      if (newVal) {
        this.$refs.contextSelectRef.style.transform = 'rotate(-180deg)'
      } else {
        this.$refs.contextSelectRef.style.transform = 'rotate(0deg)'
      }
    },
    outputShow: function (newVal) {
      if (newVal) {
        this.$refs.outputRef.style.transform = 'rotate(-180deg)'
      } else {
        this.$refs.outputRef.style.transform = 'rotate(0deg)'
      }
    },
    contextSetParams: function (newVal) {
      if (newVal !== '设置变量值') {
        if (this.contextTags.length) {
          this.contextTags[0].name = newVal;
        } else {
          this.contextTags.push({name: newVal});
        }
      }
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    modelOptClick() {
      this.modelOptShow = true
    },
    optSelect() {
      this.selectListShow = true
      this.selectOptList.forEach(item => {
        item.value == this.modelTitle ? item.select = true : null
      })
      this.selectOptList_copy = JSON.parse(JSON.stringify(this.selectOptList))
    },

    handleClose(tag, name) {
      const config = {
        '上下文': {list: 'contextTags'},
        '停止': {list: 'dynamicTags'}
      }
      const target = config[name]
      this[target.list].splice(this[target.list].indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        if (this.dynamicTags.length < 4) {
          this.dynamicTags.push(inputValue);
        }
      }
      this.inputVisible = false;
      this.inputValue = '';
    },

    // 搜索模型
    searchInput(val, name) {
      const config = {
        '模型': {list: 'selectOptList', copy: 'selectOptList_copy', key: 'value'},
        '变量': {list: 'contextOptList', copy: 'contextOptList_copy', key: 'name'}
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
        '变量': {list: 'contextOptList', key: 'name', show: 'contextSelectShow', title: 'contextSetParams'}
      }
      const target = config[name];
      this[target.list].forEach(item => item.select = false)
      val.select = true
      this[target.title] = val[target.key]
      this[target.show] = false
    },

    contextClick() {
      this.contextSelectShow = true
      this.contextOptList.forEach(item => {
        item.name == this.contextSetParams ? item.select = true : null
      })
      this.contextOptList_copy = JSON.parse(JSON.stringify(this.contextOptList))
    },
  },
}
</script>

<style lang="scss" scoped>
.set-class {
  display: flex;
  align-items: center;

  .content-class {
    margin-top: 5px;
    background: #f2f4f7;
    border-radius: 8px;
    height: 32px;
    font-weight: normal;
    color: #101828;
    font-size: 13px;
    cursor: pointer;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 6px;
    width: 100%;

    &:hover {
      background: #e9ebf0;
    }

    i {
      transition: 0.5s;
      transform: rotate(0deg);
    }
  }

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

  .modelOpt-class {
    position: absolute;
    width: 400px;
    top: -30px;
    z-index: 99;
    left: -423px;
    background: #fff;
    border-radius: 15px;
    border: 1px solid #e4e4e4;
    padding: 12px 16px;
    color: #2c3e50;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

    .paramsContent {
      margin-top: 5px;
      display: flex;
      font-weight: normal;
      align-items: center;
      font-size: 12px;
    }

    .params-foot {
      margin-top: 5px;
      display: flex;
      font-weight: normal;
      align-items: center;
      font-size: 12px;
      column-gap: 42px;
    }
  }

  .modelSelectClass {
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
        background: #f1f3f6;
        border: 0;
        font-size: 13px;
        border-radius: 8px;
        padding-left: 30px;
      }

      .el-input__icon {
        line-height: 32px;
      }

      .el-input__inner::placeholder {
        font-size: 13px;
        color: #98a2b3; /* 你想要的颜色 */
      }
    }
  }
}

.abnormalDetail {
  ::v-deep {
    .el-input__inner {
      height: 32px;
      background: #f1f3f6;
      border: 0;
      font-size: 13px;
      border-radius: 8px;
      padding-left: 10px;
    }

    .el-input__icon {
      line-height: 32px;
    }

    .el-input__inner::placeholder {
      font-size: 13px;
      color: #98a2b3; /* 你想要的颜色 */
    }
  }
}

.contextClass {
  &:hover {
    background: #f2f4f7 !important;
  }

  ::v-deep {
    .el-tag {
      margin: 0;
      //border-radius: 5px;
      //height: 20px;
      //padding: 0;
      //font-size: 12px;
    }
  }
}

::v-deep {
  .el-tag {
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 8px;
  }

  .button-new-tag {
    height: 32px;
    width: 100%;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 8px;
    border: 1px dashed #DCDFE6 !important;
    color: #bec4ce;
    filter: none !important;

    &:hover {
      background-color: #fff;
      color: #667085 !important;
      border-color: #bec4ce !important;
    }
  }

  .input-new-tag {
    width: 100%;

    .el-input__inner {
      height: 32px;
      border-radius: 8px;
      padding: 0 10px;
      //transform: translateY(1px);
      border: 1px dashed #DCDFE6 !important;
    }
  }

  .el-switch__core {
    width: 28px !important;
    height: 16px;
    border-radius: 5px;

    &:after {
      width: 12px;
      height: 12px;
      border-radius: 3px;
    }
  }

  .el-switch.is-checked .el-switch__core::after {
    margin-left: -13px;
  }

  .el-slider__runway.show-input {
    margin-right: 120px;
  }

  .el-slider__button {
    width: 5px;
    border-radius: 3px;
  }

  .el-input__inner {
    height: 32px;
    border: 1px solid #e4e4e4;
    padding: 0;
    border-radius: 8px;

    &:hover {
      filter: none;
    }
  }

  .el-input__icon {
    line-height: 32px;
  }

  .el-input-number {
    width: 110px;
  }

  .el-input-number__increase {
    width: 24px !important;
    border-radius: 0 7px 7px 0;
  }

  .el-input-number__decrease {
    width: 24px !important;
    border-radius: 7px 0 0 7px;
  }

  .el-icon-arrow-down {
    transition: 0.5s;
  }

  .el-input--suffix .el-input__inner {
    width: 96px;
    padding-left: 16px;
    font-size: 12px;
  }

}
</style>
