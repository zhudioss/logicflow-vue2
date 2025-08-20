<template>
  <div class="promptPublic" @click="addClass" ref="promptRef" v-click-outside-close.stop="removeClass">
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
        <div class="xClass" @click="xInsert">{𝓧}</div>
      </el-tooltip>
      <img class="xClass" src="@/assets/删除.png" alt="" height="20">
      <img class="xClass" src="@/assets/复制.png" alt="" height="16" @click="copyClick">
      <img class="xClass" src="@/assets/放大.png" alt="" height="16" @click="amplifyClick">
    </div>
    <div contenteditable="true" class="editableDivClass" ref="editableDiv" @input="onChange">

    </div>
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
    }
  },
  watch: {},
  created() {

  },
  mounted() {
// 监听页面全局的 selectionchange
    document.addEventListener('selectionchange', this.onChange)
  },
  methods: {
    // 复制
    copyClick() {
      const editableDiv = this.$refs.editableDiv
      if (!editableDiv) return

      // 获取纯文本
      const text = editableDiv.innerText || editableDiv.textContent

      // 写入剪贴板
      navigator.clipboard.writeText(text).then(() => {
        this.showTip = true
        setTimeout(() => {
          this.showTip = false
        }, 500)
      }).catch(err => {
        this.showTip = false
      })
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

      wrapper.querySelector('.tag-close').addEventListener('click', (e) => {
        e.stopPropagation()
        wrapper.remove()
      })

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
      console.log('startContainer.textContent', startContainer.textContent)
      console.log('startOffset', startOffset)
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
    }

  },
  beforeDestroy() {
  },
}
</script>

<style lang="scss" scoped>
.promptPublic {
  width: 100%;
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


::v-deep {
  .topClass {
    .el-switch__core {
      transform: scale(0.8);
    }
  }

  .el-textarea__inner {
    height: 100% !important;
    border-radius: 8px;
    font-size: 13px;
  }

  .el-tag {
    margin: 0 !important;
  }
}

.active {
  background: #f9fafb;
  border: 2px solid #409eff;
}


</style>

