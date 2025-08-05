<template>
  <div>
    <div class="inputField">
      <p>输入字段</p>
      <i class="el-icon-plus" @click="dialogFormVisible=true"></i>
    </div>
    <div class="inputField">
      <div class="set-class">
        设置的输入可在工作流程中使用
      </div>
    </div>
    <div class="content-line"></div>
    <div class="inputField" style="display: block">
      <div class="varList-class" v-for="(item,index) in varList" :key="index">
        <div class="left">
          <div>{{ item.symbol }}</div>
          <div>{{ item.name }}</div>
        </div>
        {{ item.type }}
      </div>
    </div>
    <el-dialog :append-to-body="true" title="添加变量" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <div>
          <p class="title">字段类型</p>
          <el-radio-group v-model="form.radio">
            <el-radio-button :label="item.text" v-for="(item,index) in radioList" :key="index">
              <i :class="item.icon"></i>
              {{ item.text }}
            </el-radio-button>
          </el-radio-group>
        </div>
        <div>
          <p class="title">变量名称</p>
          <el-input v-model="form.varName" placeholder="请输入"></el-input>
        </div>
        <div>
          <p class="title">显示名称</p>
          <el-input v-model="form.showName" placeholder="请输入"></el-input>
        </div>
        <div v-if="form.radio=='文本'||form.radio=='段落'">
          <p class="title">最大长度</p>
          <el-input-number v-model="form.maxLang" :min="1" :max="256"></el-input-number>
        </div>
        <div v-if="form.radio=='下拉选项'">
          <p class="title">选项</p>
          <draggable v-model="form.selectList" handle=".drag-handle" animation="200">
            <transition-group>
              <div
                  v-for="(item, index) in form.selectList"
                  :key="item.id"
                  class="drag-item"
              >

                <img src="@/assets/拖拽.png" alt="" class="drag-handle" height="23" style="cursor: move;">
                <el-input
                    v-model="item.value"
                    placeholder="请输入内容"
                    class="input-box"
                />
                <el-button
                    type="danger"
                    plain
                    icon="el-icon-delete"
                    @click="remove(index)"
                />
              </div>
            </transition-group>
          </draggable>
          <div class="addNode-class" @click="selectAdd">
            <div style="width:22px;height: 22px;text-align: center;margin-right: 5px;line-height: 22px;">
              <i class="el-icon-plus"></i>
            </div>
            添加选项
          </div>
        </div>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium" @click="dialogFormVisible = false" style="margin-left: auto">取 消</el-button>
        <el-button size="medium" type="primary" @click="dialogFormVisible = false">保 存</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'startInput',
  props: [],
  components: {
    draggable
  },
  computed: {},
  data() {
    return {
      varList: [
        {
          symbol: '{x}',
          name: 'sys.query',
          type: 'String',
        },
        {
          symbol: '{x}',
          name: 'sys.query',
          type: 'String',
        },
        {
          symbol: '{x}',
          name: 'sys.query',
          type: 'String',
        },
        {
          symbol: '{x}',
          name: 'sys.query',
          type: 'String',
        },
        {
          symbol: '{x}',
          name: 'sys.query',
          type: 'String',
        },
        {
          symbol: '{x}',
          name: 'sys.query',
          type: 'String',
        },
        {
          symbol: '{x}',
          name: 'sys.query',
          type: 'String',
        },

      ],
      dialogFormVisible: false,
      form: {
        radio: '文本',
        varName: '',
        showName: '',
        maxLang: '',
        selectList: [
          {id: 1, value: ''},
        ]
      },
      formLabelWidth: '120px',

      radioList: [
        {
          icon: 'el-icon-edit-outline',
          text: '文本'
        },
        {
          icon: 'el-icon-s-fold',
          text: '段落'
        },
        {
          icon: 'el-icon-check',
          text: '下拉选项'
        },
        {
          icon: 'el-icon-pie-chart',
          text: '数字'
        },
        {
          icon: 'el-icon-document',
          text: '单文件'
        },
        {
          icon: 'el-icon-document-copy',
          text: '文件列表'
        },
      ],

      nextId: 2,

    }
  },
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {
    selectAdd() {
      this.form.selectList.push({id: this.nextId++, value: ''})
    },
    remove(index) {
      this.form.selectList.splice(index, 1)
    },
  }
}
</script>

<style lang="scss" scoped>
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

.varList-class {
  display: flex;
  border-radius: 8px;
  border: 1px solid #eaecf0;
  padding: 0 10px;
  height: 32px;
  align-items: center;
  color: #667085;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 5px;

  &:hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .left {
    display: flex;
    align-items: center;

    div:nth-of-type(1) {
      color: #3f58fd;
      margin-right: 5px;
    }

    div:nth-of-type(2) {

    }
  }
}

.addNode-class {
  height: 38px;
  display: flex;
  background: #f2f4f7;
  color: #667085;
  cursor: pointer;
  border-radius: 8px;
  align-items: center;
  padding-left: 15px;

  i {
    font-weight: bold;
  }
}

.drag-item {
  background: #fff;
  display: flex;
  padding: 0 7px 0 10px;
  margin-bottom: 5px;
  border: 1px solid #DCDFE6;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;

  ::v-deep {

    .el-input__inner {
      flex: 1;
      border: 0 !important;
    }

    .el-button--danger {
      border: 0;
      background: #fff;
      padding: 8px;
      border-radius: 8px;


      i {
        font-weight: bold;
        font-size: 15px;

      }
    }

    .el-button--danger.is-plain {
      color: #667085;

      &:hover {
        color: #fff;
      }
    }
  }
}

::v-deep {
  .el-dialog {
    margin: 0 auto !important;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
    width: 36%;

    .title {
      margin-top: 12px;
      margin-bottom: 8px;
      font-weight: 600;
      font-size: 15px;
      color: #354052
    }
  }

  .dialog-footer {
    text-align: right;

    .el-button {
      font-weight: normal;
      border-radius: 8px;
    }
  }

  .el-dialog__title {
    font-weight: bold;
  }

  .el-dialog__header {
    padding: 20px 20px 0
  }

  .el-dialog__headerbtn {
    display: none;
  }

  .el-dialog__body {
    padding: 0 20px;
    max-height: calc(100vh - 170px);
    overflow-y: auto;
  }

  .el-dialog__footer {
    padding: 20px;
  }

  // 单选框
  .el-radio-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .el-radio-button {
    width: calc((100% - 20px) / 3) !important;
    height: 60px;
  }

  .el-radio-button__inner {
    font-weight: normal;
    border: none;
    border: 1px solid #e3e3e3 !important;
    border-radius: 8px !important;
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: #fcfcfd;

    &:hover {
      color: #409eff;
      border: 1px solid #409eff !important;
    }
  }


  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    background-color: #ecf5ff;
    box-shadow: none;
    color: #409eff;
    border: 1px solid #409eff !important;
  }

  .el-input__inner {
    border-radius: 8px !important;
  }

  .el-input-number__decrease {
    width: 30%;
    border-radius: 8px 0 0 8px;
  }

  .el-input-number__increase {
    width: 30%;
    border-radius: 0 8px 8px 0;
  }

  .el-input-number {
    width: 100%;
  }

}
</style>
