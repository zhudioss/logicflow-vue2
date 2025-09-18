<template>
  <div class="promptPublic" @click="addClass" ref="promptRef" v-click-outside-close.stop="removeClass">
    <div class="topClass">
      <div class="titleSelectClass" v-if="topTitleShow" @click="titleAlertShow=true">
        <el-tooltip :open-delay="1000" effect="light" :content="titleSelectVal"
                    placement="top">
          <p class="title">{{ titleSelectVal }}</p>
        </el-tooltip>
        <img src="../../../../assets/上下.png" alt="" height="13">
        <div v-if="titleAlertShow" class="titleAlert" v-click-outside-close="()=>{titleAlertShow=false}">
          <p v-for="(item,index) in titleAlertList" :key="index" @click.stop="titleAlertClick(item)">
            {{ item }}</p>
        </div>
      </div>
      <img v-if="starShow" @click="starClick" class="generator" src="../../../../assets/四角星.png" alt="" height="16">
      <img class="xClass" src="../../../../assets/复制.png" alt="" height="16" @click="copyClick">
      <img class="xClass" src="../../../../assets/放大.png" alt="" height="16" @click="amplifyClick">
    </div>

    <codemirror ref="cm" v-model="codeValue" :options="cmOptions"></codemirror>

    <div v-if="showTip" class="copy-tip" contenteditable="false">已复制</div>

    <el-dialog :append-to-body="true" title="代码生成器" :visible.sync="dialogTableVisible" @close="dialogClose">
      <div class="dialog-content dialogLeft">
        <p>提示词生成器使用配置的模型来优化提示词，以获得更高的质量和更好的结构。清写出清晰详细的说明。</p>
        <div class="dialogLeft-content">
          <img src="../../../../assets/模型.png" alt="" height="20">
          <div class="title-class" :title="modelTitle">{{ modelTitle }}</div>
        </div>
        <!--<el-divider content-position="left">试一试</el-divider>-->
        <!--<div class="tryClass">-->
        <!--  <div v-for="(item,index) in tryList" :key="index" @click="tryClick(item)">-->
        <!--    <img :src="item.img" alt="" height="20">-->
        <!--    <p>{{ item.text }}</p>-->
        <!--  </div>-->
        <!--</div>-->
        <p style="font-weight: bold;margin-bottom: 10px">指令</p>
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入您想要生成的代码的详细描述。"
            resize="none"
            v-model="textarea">
        </el-input>
        <el-button size="medium" type="primary" style="margin-left: auto;" @click="generateClick">
          <img src="../../../../assets/四角星-白.png" alt="" height="11" style="margin-right: 2px">
          生成
        </el-button>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="dialog-content dialogRight" v-loading="loading" element-loading-text="为您编排应用程序中..."
           element-loading-background="#fff" element-loading-spinner="el-icon-loading">
        <div class="prompt" v-if="!autoContextShow">
          <img src="../../../../assets/四角星-灰.png" alt="" height="50">
          <p>在左侧描述您的用例，</p>
          <p>编排浏览将在此处显示。</p>
        </div>
        <div class="autoContextClass" v-if="autoContextShow">
          <div class="centerClass">
            <pre>{{ autoContextValue }}</pre>
          </div>
          <div class="footerClass">
            <el-button size="medium" @click="dialogTableVisible = false" style="margin-left: auto">取消</el-button>
            <el-button size="medium" type="primary" @click="dialogTableVisible=false">应用</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {autoContextValue} from './promptPublic-contexnt'

export default {
  name: 'promptPublic',
  props: {
    modelTitle: {
      type: String,
      default: ''
    },
    topTitleShow: {
      type: Boolean,
      default: true
    },
    starShow: {
      type: Boolean,
      default: true
    },
    topTitle: {
      type: String,
      default: 'SYSTEM'
    },
    codeDefault: {
      type: String,
      default: ''
    },
    modeJS: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  computed: {},
  data() {
    return {
      codeValue: this.codeDefault ? this.codeDefault : '',
      cmOptions: {
        mode: this.modeJS ? 'javascript' : 'python',
        theme: 'dracula',
        lineNumbers: true,
      },
      switchVal: false,
      amplifyTag: false,
      showHoverMenu: false,
      xInsertTag: false,
      showTip: false,
      hoverMenuStyle: {},

      dialogTableVisible: false,
      tryList: [
        {
          img: require('@/assets/代码助手.png'),
          text: 'Python 代码助手',
          value: '一个帮你写和纠错程序的机器人'
        },
        {
          img: require('@/assets/翻译.png'),
          text: '翻译机器人',
          value: '一个可以翻译多种语言的翻译器'
        },
        {
          img: require('@/assets/会议.png'),
          text: '总结会议纪要',
          value: '将会议内容提炼总结，包括讨论主题、关键要点和待办事项'
        },
        {
          img: require('@/assets/文章.png'),
          text: '润色文章',
          value: '用地道的编辑技巧改进我的文章'
        },
        {
          img: require('@/assets/职业分析师.png'),
          text: '职业分析师',
          value: '从长篇报告中提取洞察、识别风险并提炼关键信息'
        },
        {
          img: require('@/assets/excel.png'),
          text: 'Excel 公式专家',
          value: '一个可以让小白用户理解、使用和创建 Excel 公式的对话机器人'
        },
        {
          img: require('@/assets/规划.png'),
          text: '旅行规划助手',
          value: '旅行规划助手是一个智能工具，旨在帮助用户轻松规划他们的旅行'
        },
        {
          img: require('@/assets/SQL.png'),
          text: 'SQL 生成',
          value: '把自然语言转换成 SQL 查询语句'
        },
        {
          img: require('@/assets/git.png'),
          text: 'Git 大师',
          value: '从用户提供的版本管理需求生成合适的 Git 命令'
        },
      ],
      textarea: '',

      autoContextShow: false,
      autoContextValue,
      loading: false,

      titleSelectVal: this.topTitle ? this.topTitle : 'PYTHON3',
      titleAlertShow: false,
      titleAlertList: [
        'PYTHON3',
        'JAVASCRIPT',
      ],

    }
  },
  watch: {},
  created() {

  },
  mounted() {
  },
  methods: {
    titleAlertClick(val) {
      this.codeValue = ''
      if (val === 'PYTHON3') {
        this.cmOptions.mode = 'python'
      } else {
        this.cmOptions.mode = 'javascript'
      }
      this.titleSelectVal = val
      this.titleAlertShow = false
    },
    // 四角星
    starClick() {
      this.dialogTableVisible = true
    },

    // 复制
    copyClick() {
      // 获取编辑器实例
      const cm = this.$refs.cm.codemirror
      const value = cm.getValue() // 获取代码内容
      navigator.clipboard.writeText(value).then(() => {
        this.showTip = true
        setTimeout(() => {
          this.showTip = false
        }, 500)
      }).catch(() => {
        this.showTip = false
      })
    },

    // 放大
    amplifyClick() {
      if (this.amplifyTag) {
        this.$refs.cm.$el.querySelector('.CodeMirror').style.height = '170px'
        this.$refs.promptRef.style.height = '200px'
      } else {
        this.$refs.cm.$el.querySelector('.CodeMirror').style.height = '370px'
        this.$refs.promptRef.style.height = '400px'
      }
      this.amplifyTag = !this.amplifyTag;
    },


    // 点击有整体的边框效果
    addClass() {
      const el = this.$refs.promptRef;
      el.classList.add('active');
    },
    removeClass() {
      const el = this.$refs.promptRef;
      el.classList.remove('active');
    },


    // 试一试
    tryClick(val) {
      this.textarea = val.value
    },

    generateClick() {
      if (!this.textarea) {
        this.$notify({
          title: '指令 为必填项',
          type: 'warning',
        });
        return
      }
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.autoContextShow = true
      }, 2000)
    },

    dialogClose() {
      this.loading = false
      this.autoContextShow = false
    }


  },
  beforeDestroy() {
  },
}
</script>

<style lang="scss" scoped>
.promptPublic {
  height: 200px;
  background: #f2f4f7;
  border-radius: 8px;
  padding: 5px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid #f2f4f7;
  position: relative;

  .topClass {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 6px;
    font-weight: normal;
    margin-bottom: 5px;

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

    ::v-deep {
      .el-divider {
        background: #DCDFE6;
      }
    }
  }

  .copy-tip {
    width: calc(100% - 20px);
    height: calc(100% - 47px);
    position: absolute;
    color: #fff;
    background: #000000a1;
    top: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 12px;
  }
}

.hover-menu {
  position: fixed;
  width: 300px;
  height: 308px;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e4e4e4;

  .context-class {
    display: flex;
    align-items: center;
    column-gap: 5px;
    background: #f1f3f6;
    padding: 0 5px;
    cursor: pointer;
    height: 32px;
    border-radius: 8px;

    p {
      font-size: 13px !important;
      margin: 0
    }
  }
}

.modelSelectClass {

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
}

.active {
  background: #f9fafb;
  border: 2px solid #409eff;
}

.dialog-content {
  width: 50%;
  font-size: 13px !important;
  color: #676f83 !important;

  ::v-deep {
    .el-button {
      margin-top: 20px;
      font-weight: normal;
      border-radius: 8px;
      display: block;
    }
  }
}

.dialogLeft {
  padding-top: 10px;
  padding-right: 13px;

  .dialogLeft-content {
    margin: 26px 0 30px;
    font-weight: normal;
    color: #101828;
    font-size: 13px;
    display: flex;
    align-items: center;
    column-gap: 6px;
  }

  .tryClass {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #354052;
    padding: 5px 0px 10px;
    gap: 10px;
    margin-bottom: 10px;

    div {
      display: flex;
      align-items: center;
      column-gap: 6px;
      cursor: pointer;
      padding: 5px 5px;
      border-radius: 8px;

      &:hover {
        background: #f2f4f7;
      }
    }
  }
}

.dialogRight {
  position: relative;
  padding-left: 11px;

  .prompt {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    img {
      margin-bottom: 5px;
    }

    p {
      line-height: 20px;
      text-align: center;
    }

  }

  .autoContextClass {
    height: 100%;
    display: flex;
    flex-direction: column;

    .centerClass {
      height: calc(100% - 80px);
      border-radius: 8px;
      border: 2px solid #409eff;
      padding: 10px;
      display: flex;

      pre {
        flex: 1;
        overflow-y: auto;
        white-space: pre-wrap;
      }
    }

    .footerClass {
      display: flex;
    }
  }

}

.titleSelectClass {
  position: relative;
  cursor: pointer;
  padding: 2px 1px 2px 4px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-weight: bold;

  .titleAlert {
    position: absolute;
    bottom: -69px;
    z-index: 9999;
    background: #fff;
    font-weight: normal;
    padding: 5px;
    border-radius: 8px;
    border: 1px solid #e4e4e4;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

    p {
      padding: 5px 10px;
      font-size: 12px;
    }

    p:hover {
      border-radius: 8px;
      background: #f2f4f7;
    }

  }

  &:hover {
    background: #e6e8ea;
  }
}

.title {
  max-width: 120px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

::v-deep {
  .topClass {
    .el-switch__core {
      transform: scale(0.8);
    }
  }

  .el-dialog {
    width: 75%;
  }

  .el-dialog__body {
    display: flex;
    padding-bottom: 20px;
    min-height: 60vh;

    .el-divider--vertical {
      height: auto;
    }
  }

  .el-dialog__title {
    color: #409eff;
  }

  .el-dialog__headerbtn {
    display: block;
  }

  .el-divider--horizontal {
    margin: 36px 0 15px;
  }

  .el-divider__text.is-left {
    left: -20px;
    color: #676f83;
  }


  .el-loading-spinner .el-loading-text {
    text-align: center;
    margin-top: 10px;
  }

  .el-icon-loading:before {
    font-size: 30px;
  }

  .CodeMirror {
    box-sizing: border-box;
    flex: 1;
    height: 170px;
    padding-top: 3px;
    padding-right: 5px;
    border-radius: 8px;
  }

}

</style>

