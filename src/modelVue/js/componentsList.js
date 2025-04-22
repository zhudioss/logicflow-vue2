import StartV from "@/modelVue/component/startV.vue";
import KnowV from "@/modelVue/component/knowV.vue";
import endV from "@/modelVue/component/endV.vue";

export const componentsList = [
    {
        label: '开始',
        type: 'start-v',
        component: StartV,
        properties: {
            width: 300,
            height: 189,
            anchorsOffset: [
                // [ x ,y ]
                [300 / 2, 0],
            ]
        },
        icon: require('@/assets/开始.png'),
    },
    {
        label: '知识库',
        type: 'know-v',
        component: KnowV,
        properties: {
            width: 300,
            height: 600,
            anchorsOffset: [
                // [ x ,y ]
                [-300 / 2, 0],
                [300 / 2, 0],
            ]
        },
        icon: require('@/assets/知识库.png'),
    },
    {
        label: '结束',
        type: 'end-v',
        component: endV,
        properties: {
            width: 300,
            height: 189,
            anchorsOffset: [
                // [ x ,y ]
                [-300 / 2, 0],
            ]
        },
        icon: require('@/assets/结束.png'),
    }
]
