import startV from "@/modelVue/component/startV.vue";
import knowV from "@/modelVue/component/knowV.vue";
import llmV from "@/modelVue/component/llmV.vue";
import agentV from "@/modelVue/component/agentV.vue";
import knowledgeV from "@/modelVue/component/knowledgeV.vue";
import endV from "@/modelVue/component/endV.vue";
import codeV from "@/modelVue/component/codeV.vue";
import templateV from "@/modelVue/component/templateV.vue";
import httpV from "@/modelVue/component/httpV.vue";
import branchV from "@/modelVue/component/branchV.vue";
import updateV from "@/modelVue/component/updateV.vue";
import listV from "@/modelVue/component/listV.vue";
import aggV from "@/modelVue/component/aggV.vue";
import domExV from "@/modelVue/component/domExV.vue";

export const componentsList = [
    {
        label: '开始',
        type: 'start-v',
        component: startV,
        properties: {
            width: 240,
            height: 50,
        },
        uniqueCom: 'startCom',
        icon: require('@/assets/开始.png'),
    },
    // {
    //     label: '知识库',
    //     type: 'know-v',
    //     component: knowV,
    //     properties: {
    //         width: 240,
    //         height: 50,
    //     },
    //     icon: require('@/assets/知识库.png'),
    // },
    {
        label: 'LLM',
        type: 'llm-v',
        component: llmV,
        properties: {
            width: 240,
            height: 50,
        },
        uniqueCom: 'llmCom',
        icon: require('@/assets/llm.png'),
    },
    // {
    //     label: 'Agent',
    //     type: 'agent-v',
    //     component: agentV,
    //     properties: {
    //         width: 240,
    //         height: 50,
    //     },
    //     icon: require('@/assets/Agent.png'),
    // },
    {
        label: '知识检索',
        type: 'knowledge-v',
        component: knowledgeV,
        properties: {
            width: 240,
            height: 50,
        },
        uniqueCom: 'knowledgeCom',
        icon: require('@/assets/知识检索.png'),
    },
    {
        label: '代码执行',
        type: 'code-v',
        component: codeV,
        properties: {
            width: 240,
            height: 50,
        },
        uniqueCom: 'codeCom',
        icon: require('@/assets/代码执行.png'),
    },
    // {
    //     label: '模版转换',
    //     type: 'template-v',
    //     component: templateV,
    //     properties: {
    //         width: 240,
    //         height: 50,
    //     },
    //     icon: require('@/assets/模版转换.png'),
    // },
    {
        label: 'http请求',
        type: 'http-v',
        component: httpV,
        properties: {
            width: 240,
            height: 50,
        },
        uniqueCom: 'httpCom',
        icon: require('@/assets/http请求.png'),
    },
    {
        label: '条件分支',
        type: 'branch-v',
        component: branchV,
        properties: {
            width: 240,
            height: 50,
        },
        uniqueCom: '',
        icon: require('@/assets/条件分支.png'),
    },
    // {
    //     label: '迭代',
    //     type: 'update-v',
    //     component: updateV,
    //     properties: {
    //         width: 240,
    //         height: 50,
    //     },
    //     icon: require('@/assets/迭代.png'),
    // },
    // {
    //     label: '列表操作',
    //     type: 'list-v',
    //     component: listV,
    //     properties: {
    //         width: 240,
    //         height: 50,
    //     },
    //     icon: require('@/assets/列表操作.png'),
    // },
    {
        label: '变量聚合',
        type: 'agg-v',
        component: aggV,
        properties: {
            width: 240,
            height: 50,
        },
        uniqueCom: 'aggCom',
        icon: require('@/assets/变量聚合.png'),
    },
    {
        label: '文档提取',
        type: 'domEx-v',
        component: domExV,
        properties: {
            width: 240,
            height: 50,
        },
        uniqueCom: 'domExCom',
        icon: require('@/assets/文档提取.png'),
    },
    {
        label: '直接回复',
        type: 'end-v',
        component: endV,
        properties: {
            width: 240,
            height: 50,
        },
        uniqueCom: 'endCom',
        icon: require('@/assets/直接回复.png'),
    },
]
