import { nanoid } from 'nanoid'
export const anchorMenu = [
    {
        id:nanoid(),
        name: '开始',
        type: 'start-v',
        icon: require('@/assets/开始.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    // {
    //     id: nanoid(),
    //     name: '知识库',
    //     type: 'know-v',
    //     icon: require('@/assets/知识库.png'),
    // },
    {
        id: nanoid(),
        name: 'LLM',
        type: 'llm-v',
        icon: require('@/assets/llm.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    // {
    //     id: nanoid(),
    //     name: 'Agent',
    //     type: 'agent-v',
    //     icon: require('@/assets/Agent.png'),
    // },
    {
        id: nanoid(),
        name: '知识检索',
        type: 'knowledge-v',
        icon: require('@/assets/知识检索.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    {
        id: nanoid(),
        name: '代码执行',
        type: 'code-v',
        icon: require('@/assets/代码执行.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    // {
    //     id: nanoid(),
    //     name: '模版转换',
    //     type: 'template-v',
    //     icon: require('@/assets/模版转换.png'),
    // },
    {
        id: nanoid(),
        name: 'http请求',
        type: 'http-v',
        icon: require('@/assets/http请求.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    {
        id: nanoid(),
        name: '条件分支',
        type: 'branch-v',
        icon: require('@/assets/条件分支.png'),
        properties: {
            width: 240,
            height: 100,
            judgmentList: [
                {
                    name: 'IF'
                },
                {
                    name: 'ELSE',
                }
            ]
        },
    },
    // {
    //     id: nanoid(),
    //     name: '迭代',
    //     type: 'update-v',
    //     icon: require('@/assets/迭代.png'),
    // },
    // {
    //     id: nanoid(),
    //     name: '列表操作',
    //     type: 'list-v',
    //     icon: require('@/assets/列表操作.png'),
    // },
    {
        id: nanoid(),
        name: '变量聚合',
        type: 'agg-v',
        icon: require('@/assets/变量聚合.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    {
        id: nanoid(),
        name: '文档提取',
        type: 'domEx-v',
        icon: require('@/assets/文档提取.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    {
        id: nanoid(),
        name: '直接回复',
        type: 'end-v',
        icon: require('@/assets/直接回复.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
]

export function anchorPublic(e, id, tag, anchorId) {
    e.stopPropagation(); // 防止事件冒泡
    const menu = document.getElementById('anchor-menu');

    //向外派发事件
    this.props.graphModel.eventCenter.emit('custom:anchorClick', {node: this.props.model, tag});
    window.currentNode = {...this, ...e, id, tag, anchorId};

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    const menuWidth = menu.offsetWidth; // 假设宽度 150px
    const menuHeight = menu.offsetHeight; // 假设高度 100px

    let left = e.clientX + 15;
    let top = e.clientY - menuHeight / 2;

    // 调整位置防止超出右边界
    if (left + menuWidth > canvasWidth) {
        left = canvasWidth - menuWidth - 10;
    }
    // 调整位置防止超出上边界
    if (top < 0) {
        top = e.clientY + 10;
    }
    // 调整位置防止超出下边界
    if (top + menuHeight > canvasHeight) {
        top = canvasHeight - menuHeight - 10;
    }

    menu.style.left = `${left}px`;
    menu.style.top = `${top}px`;
}
