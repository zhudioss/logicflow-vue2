<template>
  <div>
    <!--API-->
    <div class="inputField">
      <p>API</p>
    </div>
    <div class="inputField addVarClass" style="margin: 5px 0 10px;gap: 5px">
      <el-select popper-class="my-select-dropdown" v-model="apiType" placeholder="请选择" style="flex:1">
        <el-option
            v-for="item in apiTypeList"
            :key="item"
            :label="item"
            :value="item">
        </el-option>
      </el-select>
      <el-input v-model="apiType" placeholder="变量名" style="width: 70%;font-size: 13px"></el-input>
    </div>

    <!--HEADERS-->
    <div class="inputField">
      <p>HEADERS</p>
    </div>

    <!--PARAMS-->
    <div class="inputField">
      <p>PARAMS</p>
    </div>

    <!--BODY-->
    <div class="inputField">
      <p>BODY</p>
    </div>
    <div class="inputField" style="display: block;margin-top: 5px">
      <el-radio-group v-model="radio">
        <el-radio :label="item.label" v-for="(item,index) in radioList" :key="index">
          {{ item.label }}
        </el-radio>
      </el-radio-group>

      <!--json输出框-->
      <promptPublic
          v-if="radio=='JSON'"
          :topTitle="'JSON'"
          :jinShow="false"
          :starShow="false"
          :removeShow="false"
          :topTitleIconShow="false"
      ></promptPublic>

      <!--raw输入框-->
      <promptPublic
          v-if="radio=='raw'"
          :topTitle="'RAW TEXT'"
          :jinShow="false"
          :starShow="false"
          :removeShow="false"
          :topTitleIconShow="false"
      ></promptPublic>

      <!--binary-->
      <selectV
          v-if="radio=='binary'"
          :data="contextOptList"
          :name="'name'"
          :select="'select'"
      ></selectV>

    </div>


    <div class="content-line"></div>

    <!--超时设置-->
    <div class="inputField" style="justify-content: start;column-gap: 6px;cursor: pointer"
         @click="timeoutShow=!timeoutShow">
      <i class="el-icon-arrow-down" ref="timeoutRef"></i>
      <p>超时设置</p>
    </div>
    <div v-if="timeoutShow" class="inputField abnormalDetail" style="display: block">
      <div v-for="(item,index) in timeoutList" :key="index" style="margin-top: 5px">
        <p style="margin-left: 5px;font-weight:normal;">{{ item.name }}<span
            style="color: #667085;font-size: 13px;"> ( s )</span></p>
        <el-input-number v-model="item.num" :min="item.min" :max="item.max"></el-input-number>
      </div>
    </div>

    <div class="content-line"></div>

    <!--输出变量-->
    <div class="inputField" style="justify-content: start;column-gap: 6px;cursor: pointer"
         @click="outputShow=!outputShow">
      <i class="el-icon-arrow-down" ref="outputRef"></i>
      <p>输出变量</p>
    </div>
    <div v-if="outputShow" class="inputField outputVar">
      <div v-for="(item,index) in outputList" :key="index" style="margin-top: 5px">
        <p><strong>{{ item.name }}</strong> {{ item.type }}</p>
        <p>{{ item.text }}</p>
      </div>
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
            style="margin-bottom: 10px"
            placeholder="请输入"
            v-model="abnormalInput">
        </el-input>

        <p style="margin-left: 5px"><span style="color: #2c3e50;font-weight:bold;font-size: 13px;">status_code</span>
          Number</p>
        <el-input-number v-model="statusCodeNum" :min="0"></el-input-number>

        <p style="margin-left: 5px;margin-bottom: 3px"><span style="color: #2c3e50;font-weight:bold;font-size: 13px;">headers</span>
          Object</p>
        <codeInputBox :modeJS="true" :codeDefault="codeDefault" :starShow="false" :topTitleShow="false"
                      :topTitle="'PYTHON3'"
                      :modelTitle="'deepseek32b'"></codeInputBox>
      </div>
      <div v-if="abnormalVal=='异常分支'">
        <p style="font-size: 13px;color: #2c3e50;margin-bottom: 5px">在画布自定义失败分支逻辑。</p>
        <p>当节点发生异常时，将自动执行失败分支。失败分支允许您灵活地提供错误消息、报告、修复或跳过操作。</p>
      </div>
    </div>
  </div>
</template>

<script>
import codeInputBox from "@/modelVue/formComponent/component/utils/codeInputBox.vue";
import promptPublic from "@/modelVue/formComponent/component/utils/promptPublic.vue";
import selectV from "@/modelVue/formComponent/component/utils/selectV.vue";

export default {
  name: 'httpCom',
  props: [],
  components: {
    codeInputBox,
    promptPublic,
    selectV
  },

  computed: {},
  data() {
    return {
      apiType: 'POST',
      apiTypeList: [
        'GET',
        'POST',
        'HEAD',
        'PATCH',
        'PUT',
        'DELETE',
      ],
      radio: '',
      radioList: [
        {
          label: 'none'
        },
        {
          label: 'form-data'
        },
        {
          label: 'x-www-form-urlencoded'
        },
        {
          label: 'JSON'
        },
        {
          label: 'raw'
        },
        {
          label: 'binary'
        },
      ],
      codeDefault: '{}',
      statusCodeNum: 0,
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

      timeoutShow: false,

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

      // 超时设置
      timeoutList: [
        {
          name: '连接超时',
          num: 10,
          min: 1,
          max: 300
        },
        {
          name: '读取超时',
          num: 10,
          min: 1,
          max: 600
        },
        {
          name: '写入超时',
          num: 10,
          min: 1,
          max: 600
        },
      ],

      // 输出变量
      outputList: [
        {
          name: 'body',
          type: 'String',
          text: '响应内容'
        },
        {
          name: 'status_code',
          type: 'Number',
          text: '响应状态码'
        },
        {
          name: 'headers',
          type: 'Object',
          text: '响应头列表JSON'
        },
        {
          name: 'files',
          type: 'Array[File]',
          text: '文件列表'
        },
      ],

    }
  },
  watch: {
    outputShow: function (newVal) {
      this.$setRotate(newVal, this.$refs.outputRef)
    },
    timeoutShow: function (newVal) {
      this.$setRotate(newVal, this.$refs.timeoutRef)
    }
  },
  created() {

  },
  mounted() {
  },
  methods: {},
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

    .el-input-number {
      width: 100%;
      overflow: hidden;

      .el-input__inner {
        padding: 0 !important;
      }
    }

    .el-input-number__increase {
      width: 24px !important;
      height: 29px !important;
      top: 4px;
      line-height: 32px;
      border-radius: 0 7px 7px 0;
    }

    .el-input-number__decrease {
      width: 24px !important;
      height: 29px !important;
      top: 4px;
      line-height: 32px;
      border-radius: 7px 0 0 7px;
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
    overflow: hidden;

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

  .el-radio {
    margin-right: 16px;
    margin-bottom: 5px;
  }

  .el-radio__label {
    font-size: 13px;
    padding-left: 5px;
  }

}
</style>
