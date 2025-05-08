export default function contextmenuFun(e, data, show) {
    e.preventDefault();
    const menu = document.querySelector('#custom-menu')

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    const menuWidth = menu.offsetWidth;
    const menuHeight = menu.offsetHeight;

    let x = e.clientX;
    let y = e.clientY;
    // 调整位置防止超出右边界
    if (x + menuWidth > canvasWidth) {
        x = canvasWidth - menuWidth - 10;
    }
    // 调整位置防止超出上边界
    if (y < 0) {
        y = e.clientY + 10;
    }
    // 调整位置防止超出下边界
    if (y + menuHeight > canvasHeight) {
        y = canvasHeight - menuHeight - 10;
    }

    this.currentNode = data;
    this.menuPosition = {x, y};
    this.rightMenuShow = show
}
