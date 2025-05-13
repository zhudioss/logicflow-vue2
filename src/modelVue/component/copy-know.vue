<template>
  <div class="warpCard know-class">
    <div class="head">
      TestComponent
    </div>
    <div style="padding:0 10px">
      <div class="title">
        <img src="@/assets/知识库.png" alt="">
        知识库
      </div>
      <div style="color: rgba(66,66,66,0.4);font-size: 12px;">通过知识库获取内容</div>
      <div style="font-weight: bold;margin-top: 15px">输入参数</div>
      <div style="color: rgba(66,66,66,0.4);font-size: 13px;margin-top: 5px">参数名称</div>
      <el-input v-model="input1" placeholder="请输入参数" clearable></el-input>
      <!--      <div style="font-weight: bold;margin-top: 15px">知识库设置</div>-->
      <!--      <div style="color: rgba(66,66,66,0.4);font-size: 13px;margin-top: 5px">知识库</div>-->
      <!--      <el-select v-model="value" placeholder="请选择知识库" :popper-append-to-body="false" clearable>-->
      <!--        <el-option-->
      <!--            v-for="item in options1"-->
      <!--            :key="item.value"-->
      <!--            :label="item.label"-->
      <!--            :value="item.value">-->
      <!--        </el-option>-->
      <!--      </el-select>-->
      <!--      <div style="color: rgba(66,66,66,0.4);font-size: 13px;margin-top: 5px">获取数据量</div>-->
      <!--      <el-input v-model="input2" placeholder="搜索的数据条数" clearable></el-input>-->
      <!--      <div style="font-weight: bold;margin-top: 15px">输出参数</div>-->
      <!--      <ul>-->
      <!--        <li>-->
      <!--          <div>参数名称</div>-->
      <!--          <div>参数类型</div>-->
      <!--        </li>-->
      <!--        <li v-for="(item,index) in groupList" :key="index">-->
      <!--          <div>-->
      <!--            <el-input :placeholder="item.title" style="width: 100%" disabled></el-input>-->
      <!--          </div>-->
      <!--          <div>-->
      <!--            <el-select clearable placement="top" v-model="item.val" placeholder="请选择参数"-->
      <!--                       :popper-append-to-body="false"-->
      <!--                       style="width: 100%;height: 100%">-->
      <!--              <el-option-->
      <!--                  v-for="item in options2"-->
      <!--                  :key="item.value"-->
      <!--                  :label="item.label"-->
      <!--                  :value="item.value">-->
      <!--              </el-option>-->
      <!--            </el-select>-->
      <!--          </div>-->
      <!--        </li>-->
      <!--      </ul>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'knowV',
  props: ['width', 'height', 'model'],
  data() {
    return {
      input1: '',
      input2: '',
      value: '',
      options1: [
        {
          value: '选项1',
          label: 'Legalised'
        },
        {
          value: '选项2',
          label: 'OpenScience Framework (OSF)'
        },
        {
          value: '选项3',
          label: 'Khan Academy Knowledge Base'
        },
        {
          value: '选项4',
          label: 'IEEE Standards Association'
        },
        {
          value: '选项5',
          label: 'arXiv.org'
        }
      ],
      options2: [
        {
          value: '选项1',
          label: 'Array'
        },
        {
          value: '选项2',
          label: 'String'
        },
        {
          value: '选项3',
          label: 'Number'
        },
        {
          value: '选项4',
          label: 'Boolean'
        }
      ],
      groupList: [
        {
          title: 'document',
          val: '选项2'
        },
        {
          title: 'title',
          val: '选项2'
        },
        {
          title: 'content',
          val: '选项2'
        },
        {
          title: 'documentId',
          val: '选项3'
        },
        {
          title: 'list',
          val: '选项1'
        },
        {
          title: 'status',
          val: '选项4'
        },

      ]
    }
  },
  mounted() {
    this.bus.$on('runChildMethod', () => this.updateNodeData())
  },
  methods: {
    updateNodeData() {
      return new Promise((resolve) => {
        const graph = this.model
        graph.setProperties({
          input1:this.input1,
          input2:this.input2,
          value:this.value,
          groupList:this.groupList,
        })
        this.bus.$emit("childMethodDone", graph.id);
        resolve();
      });
    },
  }
}
</script>
<style scoped lang="scss">
.warpCard {
  width: 300px;
  height: 189px;
  padding-bottom: 5px;
  overflow-y: auto;
}

ul {
  margin-top: 5px;

  li {
    display: flex;

    div {
      font-size: 12px;
      color: #515151;
    }

    div:nth-of-type(1) {
      width: 35%;
      padding-right: 5px;
    }

    div:nth-of-type(2) {
      flex: 1;
    }

    ::v-deep {
      .el-select-dropdown {
        width: 100%;
        top: auto !important;
        bottom: 100% !important;
      }

      .el-popper[x-placement^=bottom] .popper__arrow {
        display: none !important;
      }

      .el-popper[x-placement^=top] .popper__arrow {
        display: none !important;
      }
    }

  }
}

::v-deep {
  .el-input__inner {
    height: 32px;
    margin-top: 5px;
    font-size: 12px;
    padding-left: 15px;
  }

  .el-select {
    width: 100%;
    margin-top: 0;
  }

  .el-input__suffix {
    height: 111%;
  }

  .el-select-dropdown {
    width: 100%;

  }

  .el-select-dropdown__item {
    span {
      font-size: 12px !important;
    }
  }
}
</style>
