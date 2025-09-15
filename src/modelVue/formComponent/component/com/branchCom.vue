<template>
  <div class="branchCom">
    <div v-for="(item,index) in ifList" :key="item.id" style="position: relative;">
      <div class="inputField" style="justify-content: start;column-gap: 6px;">
        <div class="ifClass">
          <p style="line-height: 23px;width: 55px">{{ item.title }}</p>
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
      <div class="andOrClass" v-if="item.branchList.length>1">
        <div class="line"></div>
        <el-button size="mini" type="primary" plain class="miniButton" @click="andOrButtonClick(item)">
          {{ item.andOrType }}<i class="el-icon-refresh el-icon--right"></i>
        </el-button>
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
  props: ['lf', 'nodeModelId'],
  components: {selectV},
  computed: {},
  data() {
    return {
      ifList: [
        {
          id: Math.random(),
          title: 'IF',
          andOrType: 'AND',
          branchList: [
            {
              id: Math.random(),
              varOption: '包含',
              branchVal: ''
            },
            {
              id: Math.random(),
              varOption: '包含',
              branchVal: ''
            },
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
      ],
      anchorNum: 2
    }
  },
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {
    andOrButtonClick(item) {
      if (item.andOrType === 'AND') {
        item.andOrType = 'OR'
      } else {
        item.andOrType = 'AND'
      }
    },

    addInfoClick(val, item) {
      let obj;
      if (val === 'ELIF') {
        obj = {
          id: Math.random(),
          title: 'ELIF',
          andOrType: 'AND',
          branchList: []
        }
        this.ifList.push(obj)
        this.nodeModelAddAnchor(++this.anchorNum, 30)
      } else {
        obj = {
          id: Math.random(),
          varOption: '',
          branchVal: ''
        }
        item.branchList.push(obj)
      }
    },

    // 锚点添加 / 删除
    nodeModelAddAnchor(num, step) {
      const nodeModel = this.lf.getNodeModelById(this.nodeModelId)
      const oldHeight = nodeModel.height
      const newHeight = nodeModel.height + step

      nodeModel.setProperties({
        extraAnchors: num,
        height: newHeight
      })

      nodeModel.height = newHeight
      nodeModel.y = nodeModel.y + (newHeight - oldHeight) / 2
    },

    removeClick(name, index, item) {
      if (name === 'branchList') {
        item.branchList.splice(index, 1)
      } else {
        this.ifList.splice(index, 1)
        this.nodeModelAddAnchor(--this.anchorNum, -30)
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
      width: calc(100% - 42px);
      font-weight: normal;
      margin-bottom: 8px;
      position: relative;
      background: #f2f4f7;
      border: 1px solid #f2f4f7;
      padding: 5px;
      border-radius: 10px;


      &:has(.contentDelete:hover) {
        border: 1px solid #F56C6C;
        //background: #fef3f2;
      }

      .contentDelete {
        background: transparent;
        width: 28px;
        height: 28px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -36px;
      }


      .top {
        align-items: center;
        display: flex;
        margin-bottom: 8px;
      }
    }
  }

  .andOrClass {
    width: 74px;
    height: auto;
    //background: red;
    position: absolute;
    top: 0px;
    bottom: 45px;
    overflow: hidden;

    .line {
      width: 33px;
      height: auto;
      border-radius: 10px;
      position: absolute;
      top: 25px;
      bottom: 25px;
      right: -20px;
      border: 1px solid #dddee1;
    }

    .miniButton {
      font-weight: bold;
      position: absolute;
      right: -3px;
      top: 50%;
      transform: scale(0.83) translateY(-50%);

      ::v-deep {
        .el-icon-refresh:before {
          font-weight: bold;
        }
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
