<template>
  <div class="branchCom">
    <div v-for="(item,index) in ifList" :key="item.id">
      <div class="inputField" style="justify-content: start;column-gap: 6px;">
        <div class="ifClass">
          <p style="line-height: 23px;width: 50px">{{ item.title }}</p>
          <div style="flex: 1">
            <div class="branchListClass addVarClass" v-for="(itt,inn) in item.branchList" :key="itt.id">
              <div class="top">
                <selectV
                    :data="contextOptList"
                    :name="'name'"
                    :select="'select'"
                    style="flex: 1"
                ></selectV>
                <el-divider direction="vertical"></el-divider>
                <el-select style="width: 75px" popper-class="my-select-dropdown" v-model="itt.varOption"
                           placeholder="请选择">
                  <el-option
                      v-for="item in options"
                      :key="item"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </div>
              <el-input v-model="itt.branchVal" placeholder="请输入值" style="flex: 1;font-size: 13px"></el-input>
              <el-button
                  class="contentDelete"
                  type="danger"
                  plain
                  icon="el-icon-delete"
                  @click="removeClick('branchList',inn,item)">
              </el-button>
            </div>
            <div style="display: flex;justify-content: space-between;align-items: center">
              <el-button @click="addInfoClick('添加条件',item)" class="miniButton" style="margin: revert;"
                         type="primary" plain
                         icon="el-icon-plus" size="mini">
                添加条件
              </el-button>
              <div class="addVarClass bottomDelete" style="margin-left: auto" v-if="index!==0">
                <el-button
                    type="danger"
                    plain
                    icon="el-icon-delete"
                    @click="removeClick('ifList',index)">移除
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-line"></div>
    </div>

    <div class="inputField" style="display: block">
      <div class="content-class addInfoClass" @click="addInfoClick('ELIF')">+ ELIF</div>
    </div>
  </div>
</template>

<script>
import selectV from "@/modelVue/formComponent/component/utils/selectV.vue";

export default {
  name: 'branchCom',
  props: [],
  components: {selectV},
  computed: {},
  data() {
    return {
      ifList: [
        {
          id: Math.random(),
          title: 'IF',
          branchList: [
            {
              id: Math.random(),
              varOption: '包含',
              branchVal: ''
            }
          ]
        }
      ],
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
      options: [
        '包含',
        '不包含',
        '开始是',
        '结束是',
        '是',
        '不是',
        '为空',
        '不为空',
      ]
    }
  },
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {
    addInfoClick(val, item) {
      let obj;
      if (val === 'ELIF') {
        obj = {
          id: Math.random(),
          title: 'ELIF',
          branchList: []
        }
        this.ifList.push(obj)
      } else {
        obj = {
          id: Math.random(),
          varOption: '',
          branchVal: ''
        }
        item.branchList.push(obj)
      }
    },
    removeClick(name, index, item) {
      if (name === 'branchList') {
        item.branchList.splice(index, 1)
      } else {
        this.ifList.splice(index, 1)
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.branchCom {
  .ifClass {
    padding: 5px;
    width: 100%;
    display: flex;
    border-radius: 8px;

    &:has(.bottomDelete .el-button--danger:hover) {
      background-color: #fef3f2;
    }

    .branchListClass {
      width: calc(100% - 60px);
      font-weight: normal;
      margin-bottom: 8px;
      position: relative;
      background: #667085;
      //border: 1px solid #ccc;
      padding: 5px;
      border-radius: 10px;


      &:has(.contentDelete:hover) {
        background: #F56C6C;
      }

      .contentDelete {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -48px;
      }


      .top {
        align-items: center;
        display: flex;
        margin-bottom: 8px;
      }
    }
  }

  ::v-deep {
    .bottomDelete .el-button--danger {
      width: auto;
      height: 28px;
      font-size: 12px;
      background: #fff;

      i {
        font-size: 12px
      }
    }
  }
}
</style>
