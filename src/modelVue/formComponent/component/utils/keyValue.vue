<template>
  <div class="keyValueClass">
    <div class="header">
      <p style="flex: 1">键</p>
      <p v-if="typeShow" style="width: 57px">类型</p>
      <p style="flex: 1">值</p>
      <i class="el-icon-plus iPlus" @click="addClick"></i>
    </div>
    <div class="addVarClass" style="margin-top: 6px;gap: 5px"
         v-for="(item,index) in addList"
         :key="item.id">
      <el-input v-model="item.key" placeholder="请输入键名" style="flex: 1;font-size: 13px"></el-input>
      <el-select popper-class="my-select-dropdown" v-if="typeShow" v-model="item.select"
                 style="width: 57px;font-size: 13px">
        <el-option label="text" value="text"></el-option>
        <el-option label="file" value="file"></el-option>
      </el-select>
      <el-input v-if="item.select==='text'" v-model="item.value" placeholder="请输入键值" style="flex: 1"></el-input>
      <selectV
          v-else
          style="flex: 1"
          :data="contextOptList"
          :name="'name'"
          :select="'select'"
      ></selectV>
      <el-button type="danger" plain icon="el-icon-delete" @click="removeList(index)"/>
    </div>
  </div>
</template>

<script>
import selectV from "@/modelVue/formComponent/component/utils/selectV.vue";

export default {
  name: 'keyValue',
  props: {
    listLength: {
      type: Number,
      default: 1
    },
    typeShow: {
      type: Boolean,
      default: false
    }
  },
  components: {
    selectV,
  },
  computed: {},
  data() {
    return {
      addList: [],
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

    }
  },
  watch: {},
  created() {

  },
  mounted() {
    this.defaultLength(this.listLength);
  },
  methods: {
    removeList(index) {
      this.addList.splice(index, 1)
    },
    addClick() {
      let obj = {
        id: Math.random(),
        key: '',
        select: 'text',
        value: ''
      }
      this.addList.push(obj)
    },
    // 默认展示多少数据框
    defaultLength(num) {
      [...Array(num)].forEach((_) => {
        this.addClick()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.keyValueClass {
  padding: 6px;
  width: 100%;
  border: 1px solid #ecedee;
  border-radius: 8px;
  font-weight: normal;

  .header {
    display: flex;
    column-gap: 6px;
    align-items: center;
    padding-right: 3px;

    p {
      padding-left: 5px;
    }
  }

  .addVarClass {
    display: flex;
  }

}


</style>
