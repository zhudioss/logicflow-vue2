export const anchorMenu = [
    {
        id: Math.random(),
        name: '开始',
        type: 'start-v',
        icon: require('@/assets/开始.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    // {
    //     id: Math.random(),
    //     name: '知识库',
    //     type: 'know-v',
    //     icon: require('@/assets/知识库.png'),
    // },
    {
        id: Math.random(),
        name: 'LLM',
        type: 'llm-v',
        icon: require('@/assets/llm.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    // {
    //     id: Math.random(),
    //     name: 'Agent',
    //     type: 'agent-v',
    //     icon: require('@/assets/Agent.png'),
    // },
    {
        id: Math.random(),
        name: '知识检索',
        type: 'knowledge-v',
        icon: require('@/assets/知识检索.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    {
        id: Math.random(),
        name: '代码执行',
        type: 'code-v',
        icon: require('@/assets/代码执行.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    // {
    //     id: Math.random(),
    //     name: '模版转换',
    //     type: 'template-v',
    //     icon: require('@/assets/模版转换.png'),
    // },
    {
        id: Math.random(),
        name: 'http请求',
        type: 'http-v',
        icon: require('@/assets/http请求.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    {
        id: Math.random(),
        name: '条件分支',
        type: 'branch-v',
        icon: require('@/assets/条件分支.png'),
        properties: {
            width: 240,
            height: 100,
        },
    },
    // {
    //     id: Math.random(),
    //     name: '迭代',
    //     type: 'update-v',
    //     icon: require('@/assets/迭代.png'),
    // },
    // {
    //     id: Math.random(),
    //     name: '列表操作',
    //     type: 'list-v',
    //     icon: require('@/assets/列表操作.png'),
    // },
    {
        id: Math.random(),
        name: '变量聚合',
        type: 'agg-v',
        icon: require('@/assets/变量聚合.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    {
        id: Math.random(),
        name: '文档提取',
        type: 'domEx-v',
        icon: require('@/assets/文档提取.png'),
        properties: {
            width: 240,
            height: 50,
        },
    },
    {
        id: Math.random(),
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
