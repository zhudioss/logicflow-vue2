<template>
  <div class="warpCard end-calss">
    <div class="head">
      TestComponent
    </div>
    <div style="padding:0 10px">
      <div class="title">
        <img src="../assets/直接回复.png" alt="">
        直接回复
      </div>
      <div style="color: rgba(66,66,66,0.4);font-size: 12px;">结束定义输出参数</div>
      <div style="font-weight: bold;margin-top: 15px">输出参数</div>
      <ul>
        <li>
          <div>参数名称</div>
          <div>参数值</div>
        </li>
        <li v-for="(item,index) in groupList" :key="index">
          <div>
            <el-input placeholder="请输入参数名称" style="width: 100%" v-model="item.title"></el-input>
          </div>
          <div>
            <el-select clearable placement="top" v-model="item.val" placeholder="请选择参数"
                       :popper-append-to-body="false"
                       style="width: 100%;height: 100%">
              <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressNode',
  inject: ['getNode', 'getGraph'],
  data() {
    return {
      options2: [
        {
          value: '选项1',
          label: '0'
        },
        {
          value: '选项2',
          label: '1'
        },
        {
          value: '选项3',
          label: '3'
        },
      ],
      groupList: [
        {
          title: '',
          val: ''
        },
      ]
    }
  },
  mounted() {
    this.bus.$emit('v-end', {
      type: "endNode",
      width: document.querySelector('.end-calss').offsetWidth,
      height: document.querySelector('.end-calss').offsetHeight,
    })
  },
  methods: {}
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
      width: 42%;
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
