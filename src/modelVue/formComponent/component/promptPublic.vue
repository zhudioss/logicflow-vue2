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
    <div class="wangClass" @click="focusEditor" ref="wangClassRef">
      <Editor
          :style="{width,height}"
          v-model="html"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="onCreated"
          @onChange="onChange"
          @onFocus="onFocus"
      />

    </div>
    <!-- 自定义悬浮菜单 -->

    <div class="modelSelectClass hover-menu" v-show="showHoverMenu"
         :style="hoverMenuStyle"
         v-click-outside-close.stop="()=>{showHoverMenu=false}">
      <div class="context-class" @click="selectOptClick('上下文')">
        <img src="@/assets/上下文.png" alt="" height="17">
        <p>上下文</p>
      </div>
      <p style="color:#676f83">开始</p>
      <div style="flex: 1;overflow-y: auto">
        <div class="selectOpt-class" @click.stop="selectOptClick(item)"
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
import {Editor} from '@wangeditor/editor-for-vue'

export default {
  name: 'promptPublic',
  props: ['promptData'],
  components: {
    Editor,
  },
  computed: {},
  data() {
    return {
      switchVal: false,
      amplifyTag: false,
      textarea: '',
      editor: null,
      html: '',
      mode: 'default',
      editorConfig: {
        autoFocus: false,
        menus: ['head', 'bold', 'italic', 'underline', 'list', 'quote'],
        showMenuTool: false,  // 禁用选区工具栏
        placeholder: '在这里写你的提示词，输入 \'{\' 插入变量、输入 \'/\' 插入提示内容块'
      },
      width: '',
      height: '',
      showHoverMenu: true,
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
  watch: {
    // html(newVal) {
    //   console.log('编辑器内容变化：', newVal)
    // }
  },
  created() {

  },
  mounted() {
    this.autoGetSize()

  },
  methods: {
    // 复制
    copyClick() {

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

    // 自动获取宽高
    autoGetSize() {
      const el = this.$refs.wangClassRef
      this.resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const {width, height} = entry.contentRect
          console.log("宽度：", width, "高度：", height)
          // 你可以在这里更新数据
          this.width = `${width}px`
          this.height = `${height}px`
        }
      })
      this.resizeObserver.observe(el)
    },

    onCreated(editor) {
      this.editor = Object.seal(editor)
    },
    // 点击任意位置聚焦 wang
    focusEditor() {
      if (this.editor) {
        this.editor.focus()
      }
    },
    onFocus() {
      console.log(12121221)
    },
    onChange(editor) {
      this.showHoverMenu = false
      const sel = window.getSelection();
      this.$nextTick(() => {

        const anchorOffset = sel.anchorOffset
        const text = sel.focusNode.textContent

        if (text[anchorOffset - 1] === '/' || text[anchorOffset - 1] === '{') {
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

    // 点击模型选项
    selectOptClick(val) {
      this.showHoverMenu = false
      console.log(val,'=-=-=-=')
    },


  },
  beforeDestroy() {
    if (this.editor) this.editor.destroy()
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
  },
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang="scss" scoped>
.promptPublic {
  width: 100%;
  height: 100px;
  background: #f2f4f7;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;

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
}

.wangClass {
  flex: 1;
  font-weight: normal;
  overflow: hidden;

  ::v-deep {
    .w-e-text-container [data-slate-editor] {
      background: #f2f4f7;
      padding: 0px;
    }

    .w-e-text-container [data-slate-editor] p {
      margin: 0;
    }

    w-e-textarea-1 {
      font-size: 12px;
    }

    .w-e-text-placeholder {
      top: 0;
      left: 0;
      width: 100%;
      font-weight: normal;
      color: #98a2b2;
      font-size: 12px;
      font-style: normal;
    }

    .w-e-text-container .w-e-scroll {
      background: #f2f4f7;
    }

    .w-e-hover-bar {
      display: none;
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
}
</style>

