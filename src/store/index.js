import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        moreAlertAbout: [
            {
                name: '开始',
                text: '定义一个 workflow 流程启动的初始参数'
            },
            {
                name: 'LLM',
                text: '调用大语言模型回答问题或者对自然语言进行处理'
            },
            {
                name: '知识检索',
                text: '允许你从知识库中查询与用户问题相关的文本内容'
            },
            {
                name: '代码执行',
                text: '执行一段 Python 或 NodeJS 代码实现自定义逻辑'
            },
            {
                name: 'http请求',
                text: '允许通过 HTTP 协议发送服务器请求'
            },
            {
                name: '条件分支',
                text: '允许你根据 if/else 条件将 workflow 拆分成两个分支'
            },
            {
                name: '变量聚合',
                text: '将多路分支的变量聚合为一个变量，以实现下游节点统一配置'
            },
            {
                name: '文档提取',
                text: '用于将用户上传的文档解析为 LlmCom 便于理解的文本内容'
            },
            {
                name: '直接回复',
                text: '定义一个聊天对话的回复内容'
            }
        ]
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
