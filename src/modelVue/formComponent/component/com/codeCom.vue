<template>
  <div>
    <!--输入变量-->
    <div class="inputField">
      <p>输入变量</p>
      <i class="el-icon-plus iPlus" @click="addVarClick('输入')"></i>
    </div>
    <div class="inputField addVarClass" style="margin-top: 5px;gap: 5px"
         v-for="(item,index) in addVarList"
         :key="item.id">
      <el-input v-model="item.name" placeholder="变量名" style="width: 130px;font-size: 13px"></el-input>
      <selectV
          ref="saveTagInput"
          style="flex: 1"
          :data="contextOptList"
          :name="'name'"
          :select="'select'"
          :defaultTags="item.defaultTags"
          @syncValue="(e)=>{syncValue(e,index)}"
      ></selectV>
      <el-button type="danger" plain icon="el-icon-delete" @click="addVarListRemove(item,index,'输入')"/>
    </div>

    <div class="content-line"></div>

    <!--提示词的输入框-->
    <div class="inputField" style="display: block">
      <codeInputBox :topTitle="'PYTHON3'" :modelTitle="'deepseek32b'"></codeInputBox>
    </div>

    <div class="content-line"></div>

    <!--输出变量-->
    <div class="inputField">
      <p>输出变量</p>
      <i class="el-icon-plus iPlus" @click="addVarClick('输出')"></i>
    </div>
    <div class="inputField addVarClass" style="margin-top: 5px;gap: 5px"
         v-for="(item,index) in outputList"
         :key="item.id">
      <el-input v-model="item.name" placeholder="变量名" style="width: 130px;font-size: 13px"></el-input>
      <el-select popper-class="my-select-dropdown" v-model="item.type" placeholder="请选择" style="flex:1">
        <el-option
            v-for="item in typeOpt"
            :key="item"
            :label="item"
            :value="item">
        </el-option>
      </el-select>
      <el-button type="danger" plain icon="el-icon-delete" @click="addVarListRemove(item,index,'输出')"/>
    </div>


    <div class="content-line"></div>

    <!--失败时重试-->
    <div class="inputField" style="justify-content: start;column-gap: 6px;">
      <p>失败时重试</p>
      <el-switch v-model="failVal" style="margin-left: auto"></el-switch>
    </div>
    <div v-if="failVal" class="inputField" style="margin-top: 5px;display: block;column-gap: 6px;">
      <div style="display: flex;align-items: center;font-size: 12px" v-for="(item,index) in failList" :key="index">
        <p style="font-weight: normal">{{ item.text }}</p>
        <el-slider
            style="margin-left: auto;width: 235px"
            v-model="item.value"
            :min="item.min"
            :max="item.max"
            :step="item.step"
            show-input>
        </el-slider>
      </div>
    </div>

    <div class="content-line"></div>

    <!--异常处理-->
    <div class="inputField" style="justify-content: start;column-gap: 6px;">
      <p>异常处理</p>
      <el-tooltip effect="light"
                  content="配置异常处理策略，当节点发生异常时触发" placement="top">
        <img src="../../../../assets/问号.png" alt="" height="13">
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
      <div v-if="abnormalVal=='默认值'">
        <p style="margin-bottom: 5px">当发生异常时，指定默认输出内容。</p>
        <p style="margin-bottom: 5px;margin-left: 5px"><span style="color: #2c3e50;font-weight:bold;font-size: 13px;">text</span>
          String</p>
        <el-input
            placeholder="请输入"
            v-model="abnormalInput">
        </el-input>
      </div>
      <div v-if="abnormalVal=='异常分支'">
        <p style="font-size: 13px;color: #2c3e50;margin-bottom: 5px">在画布自定义失败分支逻辑。</p>
        <p>当节点发生异常时，将自动执行失败分支。失败分支允许您灵活地提供错误消息、报告、修复或跳过操作。</p>
      </div>
    </div>
  </div>
</template>

<script>
import selectV from "@/modelVue/formComponent/component/utils/selectV.vue";
import codeInputBox from "@/modelVue/formComponent/component/utils/codeInputBox.vue";

export default {
  name: 'codeCom',
  props: [],
  components: {
    selectV,
    codeInputBox
  },

  computed: {},
  data() {
    return {
      modelTitle: 'deepseek32b',
      modelOptShow: false,

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
      ],
      infoList: [
        {
          id: Math.random(),
          titleSelect: false,
        },
        {
          id: Math.random(),
          titleSelect: true,
        }
      ],

      addVarShow: false,
      addVarList: [
        {
          id: Math.random(),
          name: 'sys.files',
          value: 'sys.files',
          defaultTags: [{name: 'sys.files'}]
        }
      ],

      // 输出变量
      outputList: [
        {
          id: Math.random(),
          name: 'sys.files',
          type: 'String',
        }
      ],
      typeOpt: ['String', 'Number', 'Array[Number]', 'Array[String]', 'Array[Object]', 'Object'],


    }
  },
  watch: {
    outputShow: function (newVal) {
      this.$setRotate(newVal, this.$refs.outputRef)
    },
  },
  created() {

  },
  mounted() {
  },
  methods: {
    modelOptClick() {
      this.modelOptShow = true
      // this.$refs.modelAlertRef.modelOptShow = true
    },
    // jinja判断是否显示输入变量
    jinjaClick() {
      this.addVarShow = this.$refs.promptRef.some(item => item.switchVal == true)
    },
    // jinja选中后添加输入变量内容
    jinjaSelect(e) {
      let obj = {
        id: Math.random(),
        name: e.name,
        value: '',
        defaultTags: []
      }
      this.addVarList.push(obj)
      this.$nextTick(() => {
        let refs = this.$refs.saveTagInput
        refs[refs.length - 1].contextTags = [{name: e.name}]
      })
    },
    // 输入变量选中后同步变量名
    syncValue(e, index) {
      this.addVarList[index].name = e.tag
    },

    // 输入 / 输出 - 添加
    addVarClick(text) {
      let obj = {
        id: Math.random(),
        name: '',
      }
      if (text === '输入') {
        obj.defaultTags = []
        obj.value = ''
        this.addVarList.push(obj)
      } else {
        obj.type = ''
        this.outputList.push(obj)
      }
    },

    // 输入 / 输出 - 删除
    addVarListRemove(val, index, text) {
      if (text === '输入') {
        this.addVarList.splice(index, 1)
      } else {
        this.outputList.splice(index, 1)
      }
    },

    // 添加消息
    addInfoClick() {
      let obj = {
        id: Math.random(),
        titleSelect: true,
      }
      this.infoList.push(obj)
    },
    // 消息 - 删除
    removeInfo(val, index) {
      if (this.infoList.length < 2) return
      this.infoList.splice(index, 1)
    },

  },
}
</script>

<style lang="scss" scoped>
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

.contextClass {
  margin-top: 0;

  &:hover {
    background: #f2f4f7 !important;
  }

  ::v-deep {
    .el-tag {
      margin: 0;
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
    width: 82px;
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
}
</style>
