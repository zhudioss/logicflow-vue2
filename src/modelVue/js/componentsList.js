import startV from "@/modelVue/component/startV.vue";
import knowV from "@/modelVue/component/knowV.vue";
import llmV from "@/modelVue/component/llmV.vue";
import agentV from "@/modelVue/component/agentV.vue";
import knowledgeV from "@/modelVue/component/knowledgeV.vue";
import endV from "@/modelVue/component/endV.vue";
import codeV from "@/modelVue/component/codeV.vue";

export const componentsList = [
    {
        label: '开始',
        type: 'start-v',
        component: startV,
        properties: {
            width: 240,
            height: 50,
        },
        icon: require('@/assets/开始.png'),
    },
    {
        label: '知识库',
        type: 'know-v',
        component: knowV,
        properties: {
            width: 240,
            height: 50,
        },
        icon: require('@/assets/知识库.png'),
    },
    {
        label: 'LLM',
        type: 'llm-v',
        component: llmV,
        properties: {
            width: 240,
            height: 50,
        },
        icon: require('@/assets/llm.png'),
    },
    {
        label: 'Agent',
        type: 'agent-v',
        component: agentV,
        properties: {
            width: 240,
            height: 50,
        },
        icon: require('@/assets/Agent.png'),
    },
    {
        label: '知识检索',
        type: 'knowledge-v',
        component: knowledgeV,
        properties: {
            width: 240,
            height: 50,
        },
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
        icon: require('@/assets/代码执行.png'),
    },
    {
        label: '结束',
        type: 'end-v',
        component: endV,
        properties: {
            width: 240,
            height: 50,
        },
        icon: require('@/assets/结束.png'),
    }
]
