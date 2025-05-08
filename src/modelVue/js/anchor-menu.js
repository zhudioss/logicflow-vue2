export const anchorMenu = [
    {
        id: Math.random(),
        name: '开始',
        type: 'start-v',
        icon: require('@/assets/开始.png'),
    },
    {
        id: Math.random(),
        name: '知识库',
        type: 'know-v',
        icon: require('@/assets/知识库.png'),
    },
    {
        id: Math.random(),
        name: '结束',
        type: 'end-v',
        icon: require('@/assets/结束.png'),
    },
]

export function anchorPublic(e) {
    e.stopPropagation(); // 防止事件冒泡
    const menu = document.getElementById('anchor-menu');
    if (this.props.model.type === 'end-v') {
        menu.style.display = 'none';
        return
    }
    //向外派发事件
    this.props.graphModel.eventCenter.emit('custom:anchorClick', {node: this.props.model});
    window.currentNode = this;

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
