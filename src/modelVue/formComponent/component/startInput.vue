<template>
  <div>
    <div class="inputField">
      <p>输入字段</p>
      <i class="el-icon-plus"></i>
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
          <div>{{ item.symbol}}</div>
          <div>{{item.name}}</div>
        </div>
        {{item.type}}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'startInput',
  props: [],
  components: {},
  computed: {},
  data() {
    return {
      varList: [
        {
          symbol:'{x}',
          name:'sys.query',
          type:'String',
        },
        {
          symbol:'{x}',
          name:'sys.query',
          type:'String',
        },
        {
          symbol:'{x}',
          name:'sys.query',
          type:'String',
        },
        {
          symbol:'{x}',
          name:'sys.query',
          type:'String',
        },
        {
          symbol:'{x}',
          name:'sys.query',
          type:'String',
        },
        {
          symbol:'{x}',
          name:'sys.query',
          type:'String',
        },
        {
          symbol:'{x}',
          name:'sys.query',
          type:'String',
        },

      ]
    }
  },
  watch: {},
  created() {

  },
  mounted() {

  },
  methods: {}
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
</style>
