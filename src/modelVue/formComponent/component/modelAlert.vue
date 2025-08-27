<template>
  <div ref="box" class="modelAlertClass">
    <div>模型</div>
    <div class="content-class" @click="optSelect" ref="optSelectRef">
      <img src="@/assets/模型.png" alt="" height="20">
      <div class="title-class" :title="modelTitle">{{ modelTitle }}</div>
      <i class="el-icon-arrow-down" ref="selectIRef"></i>
    </div>
    <div class="modelSelectClass" v-if="selectListShow" v-click-outside-close="()=>{selectListShow=false}">
      <el-input
          placeholder="搜索模型"
          prefix-icon="el-icon-search"
          @input="searchInput"
          v-model="searchModel">
      </el-input>
      <p style="color:#676f83">OpenAI-API-compatible</p>
      <div style="flex: 1;overflow-y: auto">
        <div class="selectOpt-class" @click.stop="selectOptClick(item)"
             v-for="(item,index) in selectOptList"
             :key="index">
          <img src="@/assets/模型.png" alt="" height="20">
          <div class="title-class">{{ item.value }}</div>
          <img src="@/assets/对勾.png" alt="" height="20" v-show="item.select">
        </div>
      </div>
    </div>

    <div class="content-line" style="width: auto"></div>

    <div>参数</div>
    <div class="paramsContent" v-for="(item,index) in paramsContentList" :key="index">
      <el-switch v-model="item.switchVal" style="margin-right: 10px"></el-switch>
      <div style="margin-right: 2px">{{ item.name }}</div>
      <el-tooltip effect="light" :content="item.content"
                  placement="top">
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
          <el-tooltip effect="light" style="transform: translateY(3px)"
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
</template>

<script>
export default {
  name: 'modelAlert',
  props: {
    modelTitle: {
      type: String,
      default: ''
    },
  },
  components: {},
  computed: {},
  data() {
    return {
      searchModel: '',  // 模型搜索
      selectListShow: false,
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

      dynamicTags: [],
      inputVisible: false,

      inputValue: '',
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
      ], // 参数

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
    this.setPotions()
  },
  methods: {
    setPotions() {
      const el = this.$refs.box
      if (el) {
        const rect = el.getBoundingClientRect()

        const info = {
          bottom: rect.bottom,
          distanceBottom: window.innerHeight - rect.bottom
        }
        if (info.distanceBottom < 0) {
          el.style.transform = `translateY(${info.distanceBottom - 10}px)`
        } else {
          el.style.transform = `translateY(-55%)`
        }
      }
    },

    optSelect() {
      this.selectListShow = true
      this.selectOptList.forEach(item => {
        item.value == this.modelTitle ? item.select = true : null
      })
      this.selectOptList_copy = JSON.parse(JSON.stringify(this.selectOptList))
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
    },

    // 搜索模型
    searchInput(e) {
      if (e) {
        this.selectOptList = this.selectOptList_copy.filter(item => item.value.includes(e));
      } else {
        this.selectOptList = this.selectOptList_copy;
      }
    },

    // 点击模型选项
    selectOptClick(val) {
      this.selectOptList.forEach(item => item.select = false)
      val.select = true
      this.$emit('changeModelTitle', val)
      this.selectListShow = false

    },
  }
}
</script>

<style lang="scss" scoped>
.modelAlertClass {
  position: absolute;
  width: 400px;
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
        background: #f9fafb;
        font-size: 13px;
        border-radius: 8px;
        padding-left: 30px;
      }

      .el-input__icon {
        line-height: 32px;
      }
    }
  }
}


</style>
