<template>
  <div ref="referenceRef">
    <!--变量赋值-->
    <div v-for="(itt,ind) in groupList" :key="itt.id" style="margin-bottom: 10px"
         @mouseenter="groupListHover(itt,'滑入')"
         @mouseleave="groupListHover(itt,'离开')">
      <div class="inputField" style="justify-content: start">
        <p>{{ aggGroupSwitch ? `Group${ind + 1}` : '变量赋值'}}</p>
        <div style="position: relative">
          <el-button
              type="danger"
              v-if="itt.removeShow"
              class="noBackRemove"
              @click="removeGroupList(ind)"
              style="left: 0px;position: absolute;top:50%;transform:translateY(-50%) scale(0.8)"
              plain
              icon="el-icon-delete"
          />
        </div>
        <i class="el-icon-plus iPlus" @click="addClick(itt)" style="margin-left: auto;"></i>
      </div>
      <div class="inputField" style="display: block">
        <div class="set-class" v-show="itt.variableList.length<=0">
          添加需要赋值的变量
        </div>
        <div v-show="itt.variableList.length>0" class="variableListClass" v-for="(item,index) in itt.variableList"
             :key="item.id">
          <selectV
              :data="contextOptList"
              :name="'name'"
              :select="'select'"
              style="flex: 1"
          ></selectV>
          <el-button class="backRemove" type="danger" plain icon="el-icon-delete"
                     @click="variableListRemove(itt,index)"/>
        </div>
      </div>
    </div>
    <div class="inputField" style="display: block" v-if="aggGroupSwitch">
      <div class="content-class addInfoClass" style=" margin-top: 10px;" @click="addGroupClick">
        + 添加分组
      </div>
    </div>
    <div class="content-line"></div>

    <!--聚合分组-->
    <div class="inputField" style="justify-content: start;column-gap: 6px;margin-top: 15px">
      <p>聚合分组</p>
      <el-tooltip effect="light"
                  content="开启该功能后，变量聚合器内可以同时聚合多组变量" placement="top">
        <img src="@/assets/问号.png" alt="" height="13">
      </el-tooltip>
      <el-switch v-model="aggGroupSwitch" style="margin-left: auto" @change="switchClick"></el-switch>
    </div>

    <div class="content-line" v-if="aggGroupSwitch"></div>

    <!--输出变量-->
    <div v-if="aggGroupSwitch" class="inputField" style="justify-content: start;column-gap: 6px;cursor: pointer"
         @click="outputShow=!outputShow">
      <i class="el-icon-arrow-down" ref="outputRef"></i>
      <p>输出变量</p>
    </div>
    <div v-if="outputShow" class="inputField outputVar">
      <div v-for="(item,index) in groupOutputList" :key="index" style="margin-top: 5px">
        <p><strong>{{ item.name }}</strong> {{ item.type }}</p>
        <p style="margin-bottom: 5px">{{ item.value }}</p>
      </div>

    </div>
  </div>
</template>

<script>
import selectV from "@/modelVue/formComponent/component/selectV.vue";

export default {
  name: 'aggCom',
  props: [],
  components: {
    selectV
  },
  computed: {},
  data() {
    return {
      aggGroupSwitch: false,
      groupList: [
        {
          id: Math.random(),
          removeShow: false,
          variableList: []
        }
      ],
      groupOutputList: [
        {
          name: 'Group1.output',
          type: 'Any',
          value: 'Group1的输出量'
        },
      ],

      // 下拉选择需要的数据
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

      outputShow: false,
    }
  },
  watch: {
    outputShow: function (newVal) {
      if (newVal) {
        this.$refs.outputRef.style.transform = 'rotate(-180deg)'
      } else {
        this.$refs.outputRef.style.transform = 'rotate(0deg)'
      }
    },
  },
  created() {

  },
  mounted() {

  },
  methods: {
    addGroupClick() {
      let obj = {
        id: Math.random(),
        removeShow: false,
        variableList: [],
      }
      this.groupList.push(obj)
    },

    variableListRemove(val, index) {
      val.variableList.splice(index, 1)
    },

    addClick(val) {
      let obj = {
        id: Math.random(),
      }
      val.variableList.push(obj)
    },

    groupListHover(val, text) {
      if (text === '滑入' && this.aggGroupSwitch && this.groupList.length > 1) {
        this.groupList.forEach(item => item.removeShow = false)
        val.removeShow = true
      } else {
        this.groupList.forEach(item => item.removeShow = false)
      }
    },
    removeGroupList(index) {
      this.groupList.splice(index, 1)
    },

    switchClick(e) {
      if (e === false) {
        this.groupList = [
          {
            id: Math.random(),
            removeShow: false,
            variableList: [],
          }
        ]
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.variableListClass {
  display: flex;
  column-gap: 6px;
  margin-top: 10px;
}

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

::v-deep {

}
</style>
