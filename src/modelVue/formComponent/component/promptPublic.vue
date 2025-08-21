<template>
  <div class="promptPublic" @click="addClass" ref="promptRef" v-click-outside-close.stop="removeClass">
    <div class="topClass">
      <p style="font-weight: bold">SYSTEM</p>
      <el-tooltip effect="light" content="为对话提供高层指导"
                  placement="top">
        <img src="@/assets/问号.png" alt="" height="13">
      </el-tooltip>
      <img @click="starClick" class="generator" src="@/assets/四角星.png" alt="" height="16">
      <el-divider direction="vertical"></el-divider>
      <el-tooltip effect="light" content="开启支持 Jinja 模版" placement="top">
        <div>
          <span>Jinja</span>
          <el-switch v-model="switchVal"></el-switch>
        </div>
      </el-tooltip>

      <el-tooltip effect="light" content="快速插入" placement="top">
        <div class="xClass" @click="xInsert">{𝓧}</div>
      </el-tooltip>
      <img class="xClass" src="@/assets/删除.png" alt="" height="20" @click="removeInfo">
      <img class="xClass" src="@/assets/复制.png" alt="" height="16" @click="copyClick">
      <img class="xClass" src="@/assets/放大.png" alt="" height="16" @click="amplifyClick">
    </div>
    <div contenteditable="true" class="editableDivClass" ref="editableDiv" @input="onChange"></div>
    <div v-if="showTip" class="copy-tip" contenteditable="false">已复制</div>
    <!-- 自定义悬浮菜单 -->

    <div class="modelSelectClass hover-menu" v-show="showHoverMenu"
         :style="hoverMenuStyle"
         v-click-outside-close.stop="()=>{showHoverMenu=false,xInsertTag = false}">
      <div class="context-class" @click="insertTagHTML({name:'上下文'})">
        <img src="@/assets/上下文.png" alt="" height="17">
        <p>上下文</p>
      </div>
      <p style="color:#676f83">开始</p>
      <div style="flex: 1;overflow-y: auto">
        <div class="selectOpt-class" @click.stop="insertTagHTML(item)"
             v-for="(item,index) in  contextOptList"
             :key="index">
          <span style="color:#3f58fd;font-weight: bold">{𝓧}</span>
          <div class="title-class">{{ item.name }}</div>
          <img src="@/assets/对勾.png" alt="" height="20" v-show="item.select">
          <span style="margin-left: auto">{{ item.type }}</span>
        </div>
      </div>
    </div>

    <el-dialog :append-to-body="true" title="提示词生成器" :visible.sync="dialogTableVisible" @close="dialogClose">
      <div class="dialog-content dialogLeft">
        <p>提示词生成器使用配置的模型来优化提示词，以获得更高的质量和更好的结构。清写出清晰详细的说明。</p>
        <div class="content-class">
          <img src="@/assets/模型.png" alt="" height="20">
          <div class="title-class" :title="promptData.modelTitle">{{ promptData.modelTitle }}</div>
        </div>
        <el-divider content-position="left">试一试</el-divider>
        <div class="tryClass">
          <div v-for="(item,index) in tryList" :key="index" @click="tryClick(item)">
            <img :src="item.img" alt="" height="20">
            <p>{{ item.text }}</p>
          </div>
        </div>
        <p style="font-weight: bold;margin-bottom: 10px">指令</p>
        <el-input
            type="textarea"
            :rows="5"
            placeholder="写下清晰、具体的说明"
            resize="none"
            v-model="textarea">
        </el-input>
        <el-button size="medium" type="primary" style="margin-left: auto;" @click="generateClick">
          <img src="@/assets/四角星-白.png" alt="" height="11" style="margin-right: 2px">
          生成
        </el-button>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="dialog-content dialogRight" v-loading="loading" element-loading-text="为您编排应用程序中..."
           element-loading-background="#fff" element-loading-spinner="el-icon-loading">
        <div class="prompt" v-if="!autoContextShow">
          <img src="@/assets/四角星-灰.png" alt="" height="50">
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
  props: ['promptData'],
  components: {},
  computed: {},
  data() {
    return {
      switchVal: false,
      amplifyTag: false,
      showHoverMenu: false,
      xInsertTag: false,
      showTip: false,
      hoverMenuStyle: {},
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
          type: 'Array[file]',
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
      loading: false
      // autoContextValue: '',
    }
  },
  watch: {},
  created() {

  },
  mounted() {

    const editable = document.querySelector('.editableDivClass')
    // 监听页面全局的 selectionchange
    editable.addEventListener('selectionchange', this.onChange)

    editable.addEventListener('input', () => {
      if (editable.innerHTML === '<br>') {
        editable.innerHTML = ''
      }
    })

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('tag-close')) {
        e.stopPropagation()
        e.target.closest('.custom-tag')?.remove()
      }
    })
  },
  methods: {
    // 四角星
    starClick() {
      this.dialogTableVisible = true
    },

    // 删除
    removeInfo() {
      this.$emit('removeInfo')
    },

    // 复制
    copyClick() {
      const editableDiv = this.$refs.editableDiv
      if (!editableDiv) return

      // 获取 HTML 和 纯文本
      const html = editableDiv.innerHTML
      const text = editableDiv.innerText

      if (navigator.clipboard && window.ClipboardItem) {
        // ✅ 同时写入 HTML 和 纯文本
        const clipboardItem = new ClipboardItem({
          "text/html": new Blob([html], {type: "text/html"}),
          "text/plain": new Blob([text], {type: "text/plain"})
        })

        navigator.clipboard.write([clipboardItem]).then(() => {
          this.showTip = true
          setTimeout(() => {
            this.showTip = false
          }, 500)
        }).catch(err => {
          console.error("复制失败：", err)
          this.showTip = false
        })
      } else {
        // 不支持 ClipboardItem 的旧浏览器 fallback → 只能复制纯文本
        navigator.clipboard.writeText(text)
      }
    },

    xInsert() {
      this.xInsertTag = true
      this.$refs.editableDiv.focus()
      this.onChange()
    },
    // 放大
    amplifyClick() {
      if (this.amplifyTag) {
        this.$refs.promptRef.style.height = '100px'
      } else {
        this.$refs.promptRef.style.height = '300px'
      }
      this.amplifyTag = !this.amplifyTag;
    },

    onChange() {
      this.showHoverMenu = false
      const sel = window.getSelection();
      if (sel.focusNode) {
        this.$nextTick(() => {
          const anchorOffset = sel.anchorOffset
          const text = sel.focusNode.textContent

          if (text[anchorOffset - 1] === '/' || text[anchorOffset - 1] === '{' || this.xInsertTag) {
            if (sel.rangeCount === 0) return;

            const rect = this.getCursorRect(sel);
            if (!rect) return;

            const pageWidth = document.documentElement.clientWidth || window.innerWidth;
            const top = rect.top + rect.height;
            const left = rect.left;

            this.hoverMenuStyle = {
              top: top + 'px',
              left: pageWidth - left > 300 ? `${left}px` : `${left - 300}px`,
            };
            setTimeout(() => {
              this.showHoverMenu = true;
            }, 100)

          }
        })
      }
    },

    getCursorRect(selection) {
      if (!selection.rangeCount) return null;

      const range = selection.getRangeAt(0).cloneRange();
      range.collapse(true);

      let rect = range.getBoundingClientRect();

      // 光标在空行或空节点时，插入零宽空格测量
      if (rect.top === 0 && rect.left === 0) {
        const span = document.createElement('span');
        span.textContent = '\u200b';
        range.insertNode(span);
        rect = span.getBoundingClientRect();
        span.remove();
      }

      return rect;
    },

    // 选择上下文
    insertTagHTML(val) {
      const editableDiv = this.$refs.editableDiv
      if (!editableDiv) return

      const sel = window.getSelection()
      if (!sel || sel.rangeCount === 0) return
      const range = sel.getRangeAt(0)


      // 创建可交互的标签 HTML
      const wrapper = document.createElement('div')
      wrapper.className = 'custom-tag'
      wrapper.setAttribute('contenteditable', 'false')
      wrapper.innerHTML = `${val.name} <span class="tag-close">x</span>`
      wrapper.style.userSelect = 'none'
      wrapper.style.display = 'inline-block'
      wrapper.style.margin = '0 2px'

      // 因为复制功能这里换成全局监听了
      // wrapper.querySelector('.tag-close').addEventListener('click', (e) => {
      //   e.stopPropagation()
      //   wrapper.remove()
      // })

      range.insertNode(wrapper)

      // 光标移到标签后面
      const newRange = document.createRange()
      newRange.setStartAfter(wrapper)
      newRange.collapse(true)
      sel.removeAllRanges()
      sel.addRange(newRange)

      this.content = editableDiv.innerHTML

      // 删除光标左侧的 '/' 或 '{'
      const startContainer = range.startContainer
      const startOffset = range.startOffset
      if (startContainer.nodeType === 3 && startOffset > 0) {
        const text = startContainer.textContent
        const char = text[startOffset - 1]
        if (char === '/' || char === '{') {
          startContainer.textContent = text.slice(0, startOffset - 1)
        }
      }
      this.showHoverMenu = false
    },


    addClass() {
      const el = this.$refs.promptRef;
      el.classList.add('active');
    },
    removeClass() {
      const el = this.$refs.promptRef;
      el.classList.remove('active');
    },

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
  height: 100px;
  background: #f2f4f7;
  border-radius: 8px;
  padding: 10px;
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

.editableDivClass {
  flex: 1;
  font-weight: normal;
  overflow-y: auto;
  white-space: pre-wrap; /* 保持换行 */
  word-break: break-word; /* 新标准 */
  overflow-wrap: break-word; /* 兼容老浏览器 */
  outline: none;
  position: relative;
  line-height: 26px;

  &:empty::before {
    content: "这里写你的提示词，输入 ' { ' 插入变量、输入 ' / ' 插入提示内容块";
    color: #aaa;
    pointer-events: none; /* 不阻止点击 */
  }

  ::v-deep {
    .custom-tag {
      padding: 0px 6px;
      height: 20px;
      line-height: 20px;
      background-color: #ecf5ff;
      border-radius: 8px;
      font-size: 12px;
      color: #409eff;
      border: 1px solid #d9ecff;
    }

    .custom-tag .tag-close {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background: transparent;
      cursor: pointer;
      margin-left: 3px;
      color: #409eff;
      text-align: center;
      line-height: 11px;
      //background: #409eff;
      //color: #ffffff;
    }

    .custom-tag .tag-close:hover {
      background: #409eff;
      color: #ffffff;
    }
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

  .content-class {
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
    left: -21px;
    color: #676f83;
  }

  .el-textarea__inner {
    background: #f1f3f6;
    font-size: 13px !important;
  }

  .el-loading-spinner .el-loading-text {
    text-align: center;
    margin-top: 10px;
  }

  .el-icon-loading:before {
    font-size: 30px;
  }
}

</style>

