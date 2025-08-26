<template>
  <div>
    <div class="inputField">
      <p>输入字段</p>
      <i class="el-icon-plus iPlus" @click="addClick"></i>
    </div>
    <div class="inputField" style="display: block">
      <div class="set-class" v-if="varEdit.length<=0">
        设置的输入可在工作流程中使用
      </div>

      <div class="varList-class" v-for="(item,index) in varEdit" :key="index" style="margin: 5px 0 0">
        <div class="left">
          <div>{{ item.symbol }}</div>
          <div>{{ item.varName }}.{{ item.showName }}</div>
        </div>
        <div>
          <el-button
              plain
              icon="el-icon-edit"
              @click="editClick(item)"
          />
          <el-button
              type="danger"
              plain
              icon="el-icon-delete"
              @click="remove(index,'编辑')"
          />
        </div>
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
    <el-dialog :append-to-body="true" title="添加变量" :visible.sync="dialogFormVisible" @close="closeDialog">
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item label="字段类型" prop="fieldName">
          <el-radio-group v-model="form.fieldName">
            <el-radio-button :label="item.text" v-for="(item,index) in fieldList" :key="index">
              <i :class="item.icon"></i>
              {{ item.text }}
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="变量名称" prop="varName">
          <el-input v-model="form.varName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="显示名称" prop="showName">
          <el-input v-model="form.showName" placeholder="请输入"
                    @focus="form.showName?null:form.showName=form.varName"></el-input>
        </el-form-item>
        <el-form-item label="最大长度" prop="maxLang" v-if="form.fieldName=='文本'||form.fieldName=='段落'">
          <el-input-number v-model="form.maxLang" :min="1" :max="256"></el-input-number>
        </el-form-item>
        <el-form-item label="选项" v-if="form.fieldName=='下拉选项'" prop="selectList">
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
                    @click="remove(index,'选项')"
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
        </el-form-item>
        <el-form-item label="支持的文件类型" v-if="form.fieldName=='单文件'||form.fieldName=='文件列表'"
                      prop="checkboxGroup">
          <el-checkbox-group v-model="form.checkboxGroup">
            <el-checkbox
                :label="item.label"
                border v-for="(item,index) in checkboxList" :key="index"
                @change="checkboxClick(item.label)"
            >
              <img :src="item.img" alt="" height="20">
              <div style="flex: 1">
                <p style="color: #101828">{{ item.label }}</p>
                <p style="font-size: 12px;margin-top: 5px;line-height: 14px">{{ item.refer }}</p>
              </div>
              <div v-if="item.label=='其他文件类型'&&otherTagShow"
                   style="width: 100%;text-wrap: wrap;margin-top: 9px;line-height: 40px">
                <el-tag
                    :key="tag"
                    v-for="tag in form.dynamicTags"
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
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                >
                </el-input>
                <el-button v-show="!inputVisible" class="button-new-tag" size="small" @click="showInput">+ 文件扩展名，例如.doc
                </el-button>
              </div>
            </el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="上传文件类型" v-if="form.fieldName=='单文件'||form.fieldName=='文件列表'" prop="fileType">
          <el-radio-group v-model="form.fileType">
            <el-radio-button :label="item.text" v-for="(item,index) in fileTypeList" :key="index" style="height: 32px">
              {{ item.text }}
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="最大上传数" v-if="form.fieldName=='文件列表'" prop="sliderVal">
          <p style="font-size: 13px;margin-bottom: 5px">{{
              '文档 < 15.00MB，图片 < 10.00MB，音频 < 50.00MB，视频 < 100.00MB'
            }}</p>
          <el-slider
              class="slider-class"
              v-model="form.sliderVal"
              :min="1"
              :max="10"
              show-input>
          </el-slider>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium" @click="dialogFormVisible = false" style="margin-left: auto">取消</el-button>
        <el-button size="medium" type="primary" @click="saveClick()">保存</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import draggable from 'vuedraggable'

const source = {
  fieldName: '文本',
  varName: '',
  showName: '',
  maxLang: 48,
  selectList: [
    {id: 1, value: ''},
  ],
  fileType: '两者',
  sliderVal: 5,
  checkboxGroup: ['图片'],
  otherCheck: false,
  dynamicTags: [],
}
export default {
  name: 'startCom',
  props: [],
  components: {
    draggable
  },
  computed: {},
  data() {
    return {
      varList: [
        {
          symbol: '{𝓧}',
          name: 'sys.query',
          type: 'String',
        },
        {
          symbol: '{𝓧}',
          name: 'sys.query',
          type: 'String',
        },
        {
          symbol: '{𝓧}',
          name: 'sys.query',
          type: 'String',
        },
        {
          symbol: '{𝓧}',
          name: 'sys.query',
          type: 'String',
        },
        {
          symbol: '{𝓧}',
          name: 'sys.query',
          type: 'String',
        },
        {
          symbol: '{𝓧}',
          name: 'sys.query',
          type: 'String',
        },
        {
          symbol: '{𝓧}',
          name: 'sys.query',
          type: 'String',
        },

      ],
      varEdit: [],
      dialogFormVisible: false,
      form: JSON.parse(JSON.stringify(source)),
      formLabelWidth: '120px',
      fieldList: [
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
      checkboxList: [
        {
          label: '文档',
          img: require('@/assets/文档.png'),
          refer: 'TXT,MD,MDX,MARKDOWN,PDF,HTML,XLSX,XLS,DOC,DOCX,CSV,EML,MSG,PPTX,PPT,XML,EPUB'
        },
        {
          label: '图片',
          img: require('@/assets/图片.png'),
          refer: 'JPG,JPEG,PNG,GIF,WEBP,SVG'
        },
        {
          label: '音频',
          img: require('@/assets/音频.png'),
          refer: 'MP3,M4A,WAV,WEBM,AMR,MPGA'
        },
        {
          label: '视频',
          img: require('@/assets/视频.png'),
          refer: 'MP4,MOV,MPEG,MPGA'
        },
        {
          label: '其他文件类型',
          img: require('@/assets/其他文件.png'),
          refer: '指定其他文件类型'
        },
      ],
      fileTypeList: [
        {
          text: '本地上传'
        },
        {
          text: 'URL'
        },
        {
          text: '两者'
        },
      ],
      nextId: 2,
      otherTagShow: false,
      inputVisible: false,
      inputValue: '',
      rules: {
        fieldName: [
          {required: true, message: '请选择字段类型', trigger: 'change'}
        ],
        varName: [
          {required: true, message: '请输入变量名称', trigger: 'blur'},
        ],
        showName: [
          {required: true, message: '请输入显示名称', trigger: 'blur'},
        ],
        selectList: [
          {
            validator: (rule, value, callback) => {
              if (!Array.isArray(value) || value.length === 0) {
                return callback(new Error('请添加至少一个选项'));
              }
              const empty = value.some(item => !item.value || item.value.trim() === '');
              if (empty) {
                return callback(new Error('选项内容不能为空'));
              }
              callback(); // 验证通过
            },
            trigger: 'blur',
          }
        ],
        checkboxGroup: [
          {required: true, message: '请选择支持的文件类型', trigger: 'change'},
        ]
      }
    }
  },
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {
    addClick() {
      this.dialogFormVisible = true
      this.form = JSON.parse(JSON.stringify(source))
    },
    editClick() {
      this.dialogFormVisible = true
    },
    closeDialog() {
      this.$refs.formRef.resetFields()
    },
    saveClick() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          // console.log('验证通过，提交表单');
          let obj = {
            symbol: '{𝓧}',
            ...this.form
          }
          this.varEdit.push(obj)

          this.dialogFormVisible = false
        } else {
          // console.warn('表单校验失败');
          return false;
        }
      });
    },
    selectAdd() {
      this.form.selectList.push({id: this.nextId++, value: ''})
    },
    remove(index, val) {
      switch (val) {
        case '编辑':
          this.varEdit.splice(index, 1)
          break
        case '选项':
          this.form.selectList.splice(index, 1)
          break
      }
    },
    checkboxClick(val) {
      if (val === '其他文件类型') {
        this.form.checkboxGroup = ['其他文件类型']
        this.otherTagShow = true
      } else {
        this.form.checkboxGroup = this.form.checkboxGroup.filter(item => item !== '其他文件类型')
        this.otherTagShow = false
      }
    },


    handleClose(tag) {
      this.form.dynamicTags.splice(this.form.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput[0].focus()
      })
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.form.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
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

  ::v-deep {

    .el-button--danger.is-plain, .el-button {
      color: #667085;
      background: #fff;
      padding: 0;
      box-shadow: none;
      filter: none;

      &:hover {
        background: #fff;
      }
    }

    .el-button--danger.is-plain:hover {
      color: #d92d20;
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
      background: #fff;
      border: 0;
    }

    .el-button--danger {
      border: 0;
      background: #fff;
      padding: 7px;
      border-radius: 8px;


      i {
        font-weight: bold;
        font-size: 15px;
      }
    }

    .el-button--danger.is-plain {
      color: #667085;

      &:hover {
        background: #fee4e2;
        color: #d92d20;
      }
    }
  }
}

.slider-class {
  ::v-deep {
    .el-input-number {
      width: 30%;
    }
  }
}

::v-deep {
  .el-form-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    .el-form-item__label {
      text-align: left;
      font-size: 15px;
      font-weight: bold;
    }
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
    background: #f9fafb;
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

  .el-checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 5px;
  }

  .el-checkbox {
    margin: 0 !important;
  }

  .el-checkbox__input {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }

  .el-checkbox.is-bordered {
    height: auto;
    padding: 0 15px;
    border-radius: 8px;
  }

  .el-checkbox__label {
    padding: 0;
    display: flex;
    align-items: center;
    width: calc(100% - 35px);
    column-gap: 15px;
    padding: 9px 0;
    font-weight: normal !important;
    flex-wrap: wrap;

    p {
      text-wrap: wrap;
    }

  }

  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #667085;
  }

  .el-tag {
    margin-right: 10px;
    border-radius: 8px;
  }

  .button-new-tag {
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 8px;
    border-style: dashed;
    color: #bec4ce;
    font-weight: normal;

    &:hover {
      background-color: #fff;
      color: #667085 !important;
      border-color: #bec4ce;
    }
  }

  .input-new-tag {
    width: 161px;

    .el-input__inner {
      height: 32px;
      transform: translateY(1px);
      border-style: dashed;
    }
  }

}
</style>
