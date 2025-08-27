<template>
  <div>
    <!--模型-->
    <div class="inputField">
      <p>模型</p>
    </div>
    <div class="inputField" style="display: block;margin-bottom: 10px">
      <div class="content-class" @click="modelOptClick">
        <img src="@/assets/模型.png" alt="" height="20">
        <div class="title-class" :title="modelTitle">{{ modelTitle }}</div>
        <i class="el-icon-s-operation"></i>
      </div>
      <modelAlert
          v-click-outside-close="()=>{modelOptShow=false}"
          v-if="modelOptShow"
          :modelTitle="modelTitle"
          @changeModelTitle="(e)=>modelTitle=e.value"
      ></modelAlert>

    </div>

    <!--上下文-->
    <div class="inputField" style="justify-content: start;column-gap: 6px;margin-top: 15px">
      <p>上下文</p>
      <el-tooltip effect="light" content="您可以导入知识库作为上下文"
                  placement="top">
        <img src="@/assets/问号.png" alt="" height="13">
      </el-tooltip>
    </div>
    <div class="inputField" style="display: block;margin-top: 5px">
      <selectV
          :data="contextOptList"
          :name="'name'"
          :select="'select'"
      ></selectV>
    </div>

    <!--提示词的输入框-->
    <div class="inputField" style="display: block">
      <promptPublic
          ref="promptRef"
          v-for="(item,index) in infoList"
          :key="item.id"
          style="margin-top: 10px"
          :modelTitle="modelTitle"
          :titleSelect="item.titleSelect"
          @removeInfo="removeInfo(item,index)"
          @jinjaClick="jinjaClick"
          @jinjaSelect="jinjaSelect"
      />
    </div>
    <div class="inputField">
      <div class="content-class addInfoClass" @click="addInfoClick">+ 添加消息</div>
    </div>

    <!--输入变量-->
    <div v-show="addVarShow" class="inputField" style="margin-top: 10px">
      <p>输入变量</p>
      <i class="el-icon-plus iPlus" @click="addVarClick"></i>
    </div>
    <div v-show="addVarShow" class="inputField addVarClass" style="margin-top: 5px;gap: 5px"
         v-for="(item,index) in addVarList"
         :key="item.id">
      <el-input v-model="item.name" placeholder="变量名" style="width: 130px;font-size: 13px"></el-input>
      <selectV
          ref="saveTagInput"
          style="flex: 1"
          :data="contextOptList"
          :name="'name'"
          :select="'select'"
          @syncValue="(e)=>{syncValue(e,index)}"
      ></selectV>
      <el-button type="danger" plain icon="el-icon-delete" @click="addVarListRemove(item,index)"/>
    </div>

    <div class="content-line"></div>

    <!--记忆-->
    <div class="inputField" style="justify-content: start;column-gap: 6px;margin-top: 15px">
      <p>记忆</p>
      <el-tooltip effect="light" content="聊天记忆设置" placement="top">
        <img src="@/assets/问号.png" alt="" height="13">
      </el-tooltip>
      <el-switch v-model="memoryVal" style="margin-left: auto"></el-switch>
    </div>
    <div v-if="memoryVal" class="inputField" style="margin-top: 5px;justify-content: start;column-gap: 6px;">
      <el-switch v-model="memoryWindowVal"></el-switch>
      <p style="font-weight: normal;color: #676f83;font-size: 12px">记忆窗口</p>
      <el-slider
          style="margin-left: auto;width: 235px"
          v-model="memoryNum"
          :min="1"
          :max="100"
          :step="1"
          :disabled="!memoryWindowVal"
          show-input>
      </el-slider>
    </div>

    <!--视觉-->
    <div class="inputField" style="justify-content: start;column-gap: 6px;margin-top: 15px">
      <p>视觉</p>
      <el-tooltip effect="light"
                  content="开启视觉功能将允许模型输入图片，并根据图像内容的理解回答用户问题" placement="top">
        <img src="@/assets/问号.png" alt="" height="13">
      </el-tooltip>
      <el-switch v-model="visionVal" style="margin-left: auto"></el-switch>
    </div>

    <div class="content-line"></div>

    <!--输出变量-->
    <div class="inputField" style="justify-content: start;column-gap: 6px;cursor: pointer"
         @click="outputShow=!outputShow">
      <i class="el-icon-arrow-down" ref="outputRef"></i>
      <p>输出变量</p>
    </div>
    <div v-if="outputShow" class="inputField outputVar">
      <p><strong>text</strong> String</p>
      <p>生成内容</p>
    </div>

    <!--失败时重试-->
    <div class="content-line"></div>

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
import promptPublic from "@/modelVue/formComponent/component/promptPublic.vue";
import selectV from "@/modelVue/formComponent/component/selectV.vue";
import modelAlert from "@/modelVue/formComponent/component/modelAlert.vue";

export default {
  name: 'llmCom',
  props: [],
  components: {
    selectV,
    promptPublic,
    modelAlert
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
      addVarList: []

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
        value: ''
      }
      this.addVarList.push(obj)
      this.$nextTick(() => {
        let refs = this.$refs.saveTagInput
        refs[refs.length - 1].contextTags = [{name: e.name}]
      })
    },
    // 输入变量选中后同步变量名
    syncValue(e, index) {
      console.log(e, '-=-=-=-=-=')
      console.log(this.addVarList[index])
      this.addVarList[index].name = e.tag
    },

    // 输入变量 - 添加
    addVarClick() {
      let obj = {
        id: Math.random(),
        name: '',
        value: ''
      }
      this.addVarList.push(obj)
    },
    // 输入变量 - 删除
    addVarListRemove(val, index) {
      this.addVarList.splice(index, 1)
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

.addInfoClass {
  justify-content: center;
  margin-top: 10px;
}

.addVarClass {
  ::v-deep {
    .el-input__inner {
      background: #f9fafb;
    }
  }

  .setVarClass {
    flex: 1;
    height: 30px;
    background: #f9fafb;
    cursor: pointer;
    border-radius: 8px;
    position: relative;
    display: flex;
    align-items: center;
    font-weight: normal;
    padding-left: 10px;
    color: #98a2b2;
    border: 1px solid #e4e4e4;
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
