<template>
  <div ref="referenceRef">
    <!--上下文-->
    <div class="inputField" style="justify-content: start;column-gap: 6px">
      <p>查询变量</p>
    </div>
    <div class="inputField" style="display: block;margin-top: 5px">
      <selectV
          :data="contextOptList"
          :name="'name'"
          :select="'select'"
      ></selectV>
    </div>

    <!--知识库-->
    <div class="inputField knowledgeBase" style="margin-top: 10px">
      <p>知识库</p>
      <el-button type="info" plain icon="el-icon-s-operation" size="mini" :disabled="varEdit.length<=0">召回设置
      </el-button>
      <i class="el-icon-plus iPlus" @click="addClick"></i>
    </div>
    <div class="inputField" style="display: block">
      <div class="set-class" v-show="varEdit.length<=0">
        点击 “+” 按钮添加知识库
      </div>
      <div class="varList-class" v-for="(item,index) in varEdit"
           :key="index"
           @mouseover="knowListHover(item,index,'滑入')"
           @mouseout="knowListHover(item,index,'离开')"
      >
        <div class="left">
          <img src="@/assets/文件夹.png" alt="" height="20">
          <div>{{ item.name }}</div>
        </div>
        <div class="knowTag" v-show="!item.deleteShow">{{ item.tagName ? item.tagName : '高质量·混合检索' }}</div>
        <el-button
            type="danger"
            plain
            v-show="item.deleteShow"
            icon="el-icon-delete"
            @click="remove(index,'编辑')"
        />
      </div>
    </div>
    <el-dialog :append-to-body="true" title="选择引用知识库" :visible.sync="dialogFormVisible"
               @close="closeDialog">
      <div :class="item.activeClass?'activeClass':'varList-class'" v-for="(item,index) in knowledgeList"
           :key="index"
           @click="knowledgeClick(item,index)"
      >
        <div class="left">
          <img src="@/assets/文件夹.png" alt="" height="20">
          <div>{{ item.name }}</div>
        </div>
        <div class="knowTag" v-show="!item.deleteShow">{{ item.tagName ? item.tagName : '高质量·混合检索' }}</div>
        <el-button
            type="danger"
            plain
            v-show="item.deleteShow"
            icon="el-icon-delete"
            @click="remove(index,'编辑')"
        />
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium" @click="dialogFormVisible = false" style="margin-left: auto">取消</el-button>
        <el-button size="medium" type="primary" @click="enterClick">添加</el-button>
      </div>
    </el-dialog>

    <!--元数据过滤-->
    <div class="inputField" style="justify-content: start;column-gap: 6px;margin-top: 10px">
      <p>元数据过滤</p>
      <el-tooltip :open-delay="500" effect="light"
                  content="元数据过滤是使用元数据属性（例如标签、类别或者访问权限）来细化和控制系统内相关的检索过程"
                  placement="top">
        <img src="@/assets/问号.png" alt="" height="13">
      </el-tooltip>
      <el-select popper-class="my-select-dropdown" v-model="abnormalVal" placeholder="请选择" style="margin-left: auto">
        <el-option
            v-for="item in abnormalOpt"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="inputField abnormalDetail" style="display: block;font-weight: normal;font-size: 12px;color: #676f83">
      <div v-if="abnormalVal=='自动'">
        <p style="margin-bottom: 5px">当发生异常时，指定默认输出内容。</p>
        <p style="margin-bottom: 5px;margin-left: 5px"><span style="color: #2c3e50;font-weight:bold;font-size: 13px;">text</span>
          String</p>
        <el-input
            placeholder="请输入"
            v-model="abnormalInput">
        </el-input>
      </div>
      <div v-if="abnormalVal=='手动'">
        <p style="font-size: 13px;color: #2c3e50;margin-bottom: 5px">在画布自定义失败分支逻辑。</p>
        <p>当节点发生异常时，将自动执行失败分支。失败分支允许您灵活地提供错误消息、报告、修复或跳过操作。</p>
      </div>
    </div>

    <div class="content-line"></div>

    <!--输出变量-->
    <div class="inputField" style="justify-content: start;column-gap: 6px;cursor: pointer"
         @click="outputShow=!outputShow">
      <i class="el-icon-arrow-down" ref="outputRef"></i>
      <p>输出变量</p>
    </div>
    <div v-if="outputShow" class="inputField"
         style="display: block;font-weight: normal;line-height: 23px;color:#676f83;font-size: 12px">
      <p><span style="color: #2c3e50;font-weight:bold;font-size: 13px">text</span> String</p>
      <p>生成内容</p>
    </div>
  </div>
</template>

<script>
import selectV from "@/modelVue/formComponent/component/selectV.vue";
import knowledgeRet from "@/modelVue/formComponent/component/knowledgeRet.vue";

export default {
  name: 'knowledgeRet',
  props: [],
  components: {
    selectV,
  },
  computed: {
    knowledgeRet() {
      return knowledgeRet
    }
  },
  data() {
    return {
      varEdit: [
        // {
        //   name: '技术标准数字化知识加工',
        //   tagName: '高质量·混合检索',
        //   deleteShow: false
        // },

      ],
      knowledgeList: [
        {
          name: '0825',
          tagName: '',
          activeClass: ''
        },
        {
          name: '技术标准数字化知识加工',
          tagName: '',
          activeClass: ''
        },
        {
          name: '设备技术标准标精准检索与智能问答',
          tagName: '',
          activeClass: ''
        },
        {
          name: '测试20250714',
          tagName: '',
          activeClass: ''
        },
        {
          name: '测试20250715',
          tagName: '',
          activeClass: ''
        }
      ],
      dialogFormVisible: false,

      // 下拉选择需要的数据
      contextOptList: [
        {
          name: 'sys.query',
          type: 'String',
          select: false
        },
        {
          name: 'sys.dialogue_countfdfdsafdsfafdsafsdafdsaklffdsafdsaqqqeqwqfdsfdsadafdsa',
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

      outputShow: false,

      abnormalInput: '',
      abnormalVal: '禁用',
      abnormalOpt: [
        {
          label: '禁用',
          value: '禁用'
        },
        {
          label: '自动',
          value: '自动'
        },
        {
          label: '手动',
          value: '手动'
        }
      ],
    }
  },
  watch: {
    outputShow: function (newVal) {
      if (newVal) {
        this.$refs.outputRef.style.transform = 'rotate(-180deg)'
      } else {
        this.$refs.outputRef.style.transform = 'rotate(0deg)'
      }
    },
  },
  created() {

  },
  mounted() {

  },
  methods: {
    knowListHover(val, index, text) {
      if (text === '滑入') {
        this.varEdit.forEach(item => item.deleteShow = false)
        this.varEdit[index].deleteShow = true
      } else {
        this.varEdit.forEach(item => item.deleteShow = false)
      }
    },

    remove(index) {
      this.varEdit.splice(index, 1)
    },

    addClick() {
      this.knowledgeList.forEach((item) => {
        const match = this.varEdit.find(v => v.name === item.name)
        if (match) {
          item.activeClass = 'activeClass'
        }
      })
      this.dialogFormVisible = true
    },

    knowledgeClick(item) {
      if (item.activeClass) {
        item.activeClass = ''
      } else {
        item.activeClass = 'activeClass'
      }
    },

    enterClick() {
      this.varEdit = []
      this.knowledgeList.forEach(item => {
        if (item.activeClass) {
          this.varEdit.push({
            name: item.name,
            tagName: item.tagName,
            deleteShow: false
          })
        }
      })
      this.dialogFormVisible = false
    },

    closeDialog() {
      this.knowledgeList.forEach(item => item.activeClass = '')
    }

  },
}
</script>

<style lang="scss" scoped>
.varList-class, .activeClass {
  display: flex;
  border-radius: 8px;
  border: 1px solid #eaecf0;
  padding: 8px 10px;
  align-items: center;
  color: #667085;
  justify-content: space-between;
  cursor: pointer;
  margin: 5px 0 0;

  &:hover {
    background: #f9fafb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .left {
    width: 70%;
    overflow: hidden;
    display: flex;
    align-items: center;
    column-gap: 6px;

    div:nth-of-type(1) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      //color: #3f58fd;
      margin-right: 5px;
    }

    div:nth-of-type(2) {

    }
  }

  .knowTag {
    margin-left: auto;
    padding: 3px 5px;
    border-radius: 8px;
    border: 1px solid #eaecf0;
    font-size: 12px;
    font-weight: normal;
  }

  ::v-deep {

    .el-button--danger.is-plain, .el-button {
      color: #667085;
      background: #fff;
      padding: 0;
      box-shadow: none;
      filter: none;
      height: 25px !important;
      width: 25px !important;
      margin-left: auto;

      &:hover {
        background: #fff;
      }
    }

    .el-button--danger i {
      font-size: 13px;
    }

    .el-button--danger.is-plain {
      background: #fee4e2 !important;
      color: #d92d20;
    }
  }
}

.activeClass {
  background: #ecf5ff;
  border: 1px solid #409eff;

  &:hover {
    background: #ecf5ff;
    box-shadow: none
  }
}

.knowledgeBase {
  column-gap: 6px;
  margin-left: auto;

  .iPlus {
    padding: 6px !important;
    border-radius: 6px !important;
  }

  ::v-deep {


    .el-button {
      padding: 6px 8px;
      border-radius: 6px;
      margin-left: auto;
    }
  }

  //& div:nth-of-type(1) {
  //  display: flex;
  //  color: #10182840;
  //  align-items: center;
  //  font-weight: normal;
  //}
}

.set-class {
  margin-top: 5px;
  background: #f9fafb;
  border-radius: 5px;
  width: 100%;
  height: 42px;
  line-height: 42px;
  text-align: center;
  font-weight: normal;
  color: #667085;
  font-size: 12px;
}


.abnormalDetail {
  ::v-deep {
    .el-input__inner {
      height: 32px;
      background: #f9fafb;
      //border: 0;
      font-size: 13px;
      border-radius: 8px;
      padding-left: 10px;
    }

    .el-input__icon {
      line-height: 32px;
    }
  }
}


::v-deep {
  .el-tag {
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 8px;
  }

  .el-dialog {
    width: 50%;
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
    width: 60px;
    padding-left: 9px;
    padding-right: 24px;
    font-size: 12px;
    height: 28px;
  }

  .el-select .el-input .el-select__caret {
    width: 20px;
    line-height: 28px;
  }

  .el-button--danger {
    border: 0;
    background: #f2f4f7 !important;
    padding: 7px;
    height: 32px;
    width: 32px !important;
    border-radius: 8px;
    box-shadow: none;


    i {
      font-weight: bold;
      font-size: 15px;
    }
  }

  .el-button--danger.is-plain {
    color: #667085;

    &:hover {
      background: #fee4e2 !important;
      color: #d92d20;
    }
  }

  .el-input__inner::placeholder {
    font-size: 13px;
  }

  .el-dialog__header {
    padding-bottom: 5px;
  }
}
</style>
