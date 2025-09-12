<template>
  <div class="branchCom">
    <div v-for="(item,index) in ifList" :key="item.id">
      <div class="inputField" style="justify-content: start;column-gap: 6px;">
        <div class="ifClass">
          <p style="line-height: 23px;width: 60px">{{ item.title }}</p>
          <div style="flex: 1">
            <div class="branchListClass" v-for="(itt) in item.branchList" :key="itt.id">

            </div>
            <div style="display: flex;justify-content: space-between;align-items: center">
              <el-button @click="addInfoClick('添加条件',item)" class="miniButton" style="margin: revert;"
                         type="primary" plain
                         icon="el-icon-plus" size="mini">
                添加条件
              </el-button>
              <div class="addVarClass" style="margin-left: auto" v-if="index!==0">
                <el-button
                    type="danger" plain
                    icon="el-icon-delete"
                    @click="removeClick(index)">移除
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
export default {
  name: 'branchCom',
  props: [],
  components: {},
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
            }
          ]
        }
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
          id: Math.random()
        }
        item.branchList.push(obj)
      }
    },
    removeClick(index) {
      this.ifList.splice(index, 1)
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

    &:has(.addVarClass .el-button--danger:hover) {
      background-color: #fef3f2;
    }

    .branchListClass {
      height: 50px;
      font-weight: normal;
      margin-bottom: 10px;
    }
  }

  ::v-deep {
    .addVarClass .el-button--danger {
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
