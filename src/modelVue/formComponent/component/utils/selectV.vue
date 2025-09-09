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
import selectPullDown from "@/modelVue/formComponent/component/utils/selectPullDown.vue";

export default {
  name: 'selectV',
  props: ['data', 'name', 'select', 'placeholderDIY', 'defaultTags'],
  components: {
    selectPullDown,
  },
  computed: {},
  data() {
    return {
      contextSetParams: this.placeholderDIY ? this.placeholderDIY : '设置变量值',
      contextTags: this.defaultTags ? this.defaultTags : [],
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
    const target = this.$refs.setClassRef
    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        requestAnimationFrame(() => {
          const newWidth = `${entry.contentRect.width - 80}px`
          if (this.width !== newWidth) {
            this.width = newWidth
          }
        })
      }
    })
    this.resizeObserver.observe(target)
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
  },
  beforeDestroy() {
    this.resizeObserver && this.resizeObserver.disconnect()
  }
}
</script>

<style lang="scss" scoped>
.contextClass {
  margin-top: 0;

  .title-class {
    max-width: 80% !important;
  }

  &:hover {
    background: #f2f4f7 !important;
  }

  ::v-deep {
    .el-tag {
      width: 100%;
      margin: 0;
      border-radius: 8px;

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
