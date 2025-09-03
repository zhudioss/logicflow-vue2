<template>
  <div>
    <!--输入变量-->
    <div class="inputField" style="justify-content: start">
      <p>输入变量</p>
    </div>
    <div class="inputField" style="display: block;margin-top: 5px;">
      <selectV
          :data="contextOptList"
          :name="'name'"
          :select="'select'"
      ></selectV>
    </div>
    <div class="inputField" style="font-weight: normal;color:#676f83;margin-top: 5px;font-size: 12px;padding-left: 20px;">
      支持的文件类型：txt、markdown、mdx、pdf、html、xlsx、xls、docx、csv、md、htm。
    </div>

    <div class="content-line"></div>

    <!--输出变量-->
    <div class="inputField" style="justify-content: start;column-gap: 6px;cursor: pointer"
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
  name: 'domExCom',
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
          name: 'text',
          type: 'String',
          value: '提取的文本'
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
      this.$setRotate(newVal,this.$refs.outputRef)
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
