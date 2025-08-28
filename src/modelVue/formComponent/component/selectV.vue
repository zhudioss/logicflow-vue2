<template>
  <div class="selectVClass" style="position: relative;" ref="setClassRef">
    <div class="content-class contextClass" @click="selectOptShowClick">
      <div class="title-class" v-show="contextTags.length<=0" style="color:#98a2b2">
        {{ contextSetParams }}
      </div>
      <el-tag
          v-show="contextTags.length>0"
          v-for="tag in contextTags"
          :key="tag.name"
          closable
          :disable-transitions="true"
          size="small"
          @close="handleClose(tag)"
      >
        <el-tooltip :open-delay="500" effect="light" :content="tag.name"
                    placement="top">
          <span class="tag-class" :style="({width})">{{ tag.name }}</span>
        </el-tooltip>
      </el-tag>
      <i class="el-icon-arrow-down" ref="contextSelectRef"></i>
    </div>
    <selectPullDown
        ref="pullDownRef"
        style="width: 100%;height: 314px;top:36px;"
        :data="contextOptList"
        :title="name"
        :select="select"
        @setData="(e)=>{setData(e,'上下文')}"
        @backRotate="($refs.contextSelectRef.style.transform = 'rotate(0deg)')"
    ></selectPullDown>
  </div>
</template>

<script>
import selectPullDown from "@/modelVue/formComponent/component/selectPullDown.vue";

export default {
  name: 'selectV',
  props: ['data', 'name', 'select', 'placeholderDIY'],
  components: {
    selectPullDown,
  },
  computed: {},
  data() {
    return {
      contextSetParams: this.placeholderDIY ? this.placeholderDIY : '设置变量值',
      contextTags: [],
      searchContext: '',  // 变量搜索
      contextOptList: JSON.parse(JSON.stringify(this.data)),
      width: '',
      num: null
    }
  },
  watch: {
    contextSetParams: function (newVal) {
      if (newVal !== '设置变量值') {
        if (this.contextTags.length) {
          this.contextTags[0].name = newVal;
        } else {
          this.contextTags.push({name: newVal});
        }
      }
    }
  },
  created() {

  },
  mounted() {
    const target = this.$refs.setClassRef;
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        // console.log('宽度变化了:', entry.contentRect.width)
        // console.log('高度变化了:', entry.contentRect.height)
        this.width = `${entry.contentRect.width - 80}px`
      }
    })
    resizeObserver.observe(target)
  },
  methods: {
    selectOptShowClick() {
      if (this.contextTags.length > 0) {
        this.contextOptList.forEach(item => {
          if (item.name === this.contextTags[0].name) {
            item.select = true
          }
        })
      }
      this.$refs.pullDownRef.contextSelectShow = true
      this.$refs.contextSelectRef.style.transform = 'rotate(-180deg)'

    },
    handleClose(tag) {
      this.contextTags.splice(this.contextTags.indexOf(tag), 1);
      this.contextOptList.forEach(item => item.select = false);
      this.contextSetParams = this.placeholderDIY ? this.placeholderDIY : '设置变量值'
    },
    setData(e) {
      this.$refs.contextSelectRef.style.transform = 'rotate(0deg)'
      this.contextOptList.forEach(item => item.select = false);
      this.contextOptList[e.index].select = true
      this.contextSetParams = e.tag
      this.$emit('syncValue', e)
    },
  }
}
</script>

<style lang="scss" scoped>
.selectVClass {
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

.contextClass {
  margin-top: 0;

  &:hover {
    background: #f2f4f7 !important;
  }

  ::v-deep {
    .el-tag {
      width: 100%;
      margin: 0;

      .tag-class {
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .el-icon-close {
        position: absolute;
        top: 50%;
        right: 35px;
        transform: translateY(-50%);
      }
    }
  }
}

</style>
