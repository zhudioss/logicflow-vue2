<template>
  <div>
    <div class="inputField">
      <p>模型</p>
    </div>
    <div class="inputField" style="display: block;">
      <div class="set-class" @click="modelOptClick">
        <div class="content-class">
          <img src="@/assets/模型.png" alt="" height="20">
          <div class="title-class" :title="modelTitle">{{ modelTitle }}</div>
          <i class="el-icon-s-operation"></i>
        </div>

        <!--设置弹窗-->
        <div v-click-outside-close="()=>{modelOptShow=false}" class="modelOpt-class" v-if="modelOptShow">
          <div>模型</div>
          <div class="content-class" style="width: auto" @click="optSelect" ref="optSelectRef">
            <img src="@/assets/模型.png" alt="" height="20">
            <div class="title-class" :title="modelTitle">{{ modelTitle }}</div>
            <i class="el-icon-arrow-down" ref="selectIRef"></i>
          </div>
          <div v-if="selectListShow" v-click-outside-close="()=>{selectListShow=false}">
            1212121
          </div>
          <div class="content-line" style="width: auto"></div>
          <div>参数</div>
          <div class="paramsContent" v-for="(item,index) in paramsContentList" :key="index">
            <el-switch v-model="item.switchVal" style="margin-right: 10px"></el-switch>
            <div style="margin-right: 2px">{{ item.name }}</div>
            <el-tooltip popper-class="custom-tooltip" class="item" :content="item.content" placement="top">
              <img src="@/assets/问号.png" alt="" height="13">
            </el-tooltip>
            <el-slider
                style="margin-left: auto;width: 235px"
                v-model="item.sliderVal"
                :min="item.min"
                :max="item.max"
                :step="item.step"
                show-input>
            </el-slider>
          </div>
          <div class="params-foot">
            <div>
              <p>
                停止序列
                <el-tooltip style="transform: translateY(3px)"
                            content="API 将停止生成更多的 token 。返回的文本将不包含停止序列" placement="top">
                  <img src="@/assets/问号.png" alt="" height="13">
                </el-tooltip>
              </p>
              <p>输入序列（最多四个）</p>
            </div>
            <div style="flex: 1">
              <el-tag
                  :key="tag"
                  v-for="tag in dynamicTags"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)">
                {{ tag }}
              </el-tag>
              <el-input
                  class="input-new-tag"
                  v-show="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm"
              >
              </el-input>
              <el-button v-show="!inputVisible" class="button-new-tag" size="small" @click="showInput">
                输入序列
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'llmCom',
  props: [],
  components: {},
  computed: {},
  data() {
    return {
      modelTitle: 'deepseedsfdsfdsfdsfdsfsfsdk32b',
      modelOptShow: true,
      options: [
        {
          value: 'qwen72b',
          label: 'qwen72b'
        }
      ],
      selectListShow: false,

      dynamicTags: [],
      inputVisible: false,
      inputValue: '',

      paramsContentList: [
        {
          name: '气温',
          switchVal: false,
          content: '核采样阈值。用于决定结果随机性，取值越高随机性越强即相同的问题得到的不同答案的可能性越高',
          sliderVal: 0,
          max: 2,
          min: 0,
          step: 0.1
        },
        {
          name: 'Top P',
          switchVal: false,
          content: '生活过程中核采样方法概率阈值。取值越大，生成的随机性越高；取值越小，生成的确定性越高。',
          sliderVal: 0,
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
          content: '',
          sliderVal: 0,
          max: 409600,
          min: 1,
          step: 1
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
    modelOptClick() {
      this.modelOptShow = true
    },
    optSelect() {
      this.selectListShow = true
    },

    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
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
    }
  }
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background: #e9ebf0;
    }

    i {
      transition: 0.5s;
      transform: rotate(0deg);
    }
  }


  img {
    margin-right: 6px;
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

      ::v-deep {
        .el-input__inner {
          height: 32px;
          border: 1px solid #e4e4e4;
          padding: 0;

          &:hover {
            filter: none;
          }
        }

        .el-input__icon {
          line-height: 32px;
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

        .el-input-number {
          width: 110px;
        }

        .el-slider__runway.show-input {
          margin-right: 120px;
        }

        .el-slider__button {
          width: 5px;
          border-radius: 3px;
        }

        .el-input-number__increase {
          width: 24px;
        }

        .el-input-number__decrease {
          width: 24px;
        }
      }
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
      //transform: translateY(1px);
      border: 1px dashed #DCDFE6 !important;
    }
  }

}
</style>
