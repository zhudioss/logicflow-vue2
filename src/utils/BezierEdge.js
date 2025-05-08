import {BezierEdgeModel, BezierEdge, h} from '@logicflow/core'
import {anchorPublic} from "@/modelVue/js/anchor-menu";

// 线的 view
class CustomEdge extends BezierEdge {
    getStartArrow() {
        return h("path", {
            stroke: '#ccc',
            fill: '#3f58fd',
            d: 'M0 0 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0',
            transform: `translate(-2,0)`, // 🔥 加固定旋转
        });
    }

    getEndArrow() {
        return h("path", {
            stroke: '#ccc',
            fill: '#3f58fd',
            d: 'M0 0 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0',
            transform: `translate(2,0)`, // 🔥 加固定旋转
        });
    }


    getShape() {
        const path = super.getShape(); // 默认贝塞尔路径
        const {startPoint, endPoint, id} = this.props.model;
        // 计算中点（近似）
        const x = (startPoint.x + endPoint.x) / 2;
        const y = (startPoint.y + endPoint.y) / 2;
        // 构造 path 路径（和 super.getShape() 一致的路径）
        const pathD = `M ${startPoint.x} ${startPoint.y} L ${endPoint.x} ${endPoint.y}`;

        return h('g', {}, [
            h('path', {
                d: pathD,
                stroke: 'transparent',
                strokeWidth: 50,
                fill: 'none',
            }),
            path,
            h('image', {
                href: require('@/assets/添加.png'),
                x: x - 10,
                y: y - 10,
                className: 'edgeMarkClass',
                display: this.props.model.properties.showAddMark ? 'block' : 'none',
                width: 18,
                height: 18,
                pointerEvents: 'all',
                style: 'cursor: pointer;transition:0.3s',
                onclick: (e) => {
                    anchorPublic.call(this, e)
                    console.log('点击了 logo 图片！');
                },
                onmouseover: (e) => {
                    const image = e.target;
                    image.setAttribute('width', 22); // 放大
                    image.setAttribute('height', 22);
                    image.setAttribute('x', x - 12);
                    image.setAttribute('y', y - 12);
                },
                onmouseout: (e) => {
                    const image = e.target;
                    image.setAttribute('width', 18); // 还原
                    image.setAttribute('height', 18);
                    image.setAttribute('x', x - 10);
                    image.setAttribute('y', y - 10);
                }
            })
        ]);
    }
}

// 默认
class defaultBezierEdgeModel extends BezierEdgeModel {
    constructor(data, graphModel) {
        super(data, graphModel);
    }

    // 连接线的样式
    getEdgeStyle() {
        const style = super.getEdgeStyle();
        style.stroke = "#d0d5dc";
        style.cursor = 'pointer'
        // 虚线间隔
        style.strokeDasharray = "10 0";
        return style;
    }
}

// 动画
class animationModel extends BezierEdgeModel {
    constructor(data, graphModel) {
        super(data, graphModel);
        // 启动动画
        this.isAnimation = true;
    }

    // 自定义边动画样式
    getEdgeAnimationStyle() {
        const style = super.getEdgeAnimationStyle();
        style.stroke = '#5dc822';
        style.animationDuration = '30s';
        style.animationDirection = 'normal';
        style.strokeDasharray = "10 5";
        return style;
    }
}

// 高亮
class HighlightModel extends BezierEdgeModel {
    constructor(data, graphModel) {
        super(data, graphModel);
    }

    // 连接线的样式
    getEdgeStyle() {
        const style = super.getEdgeStyle();
        style.stroke = "#3f58fd";
        // 虚线间隔
        style.strokeDasharray = "10 0";
        return style;
    }
}


// 默认 - 导出
export const defaultEdge = {
    type: 'EDGE_BEZIER',
    view: CustomEdge,
    model: defaultBezierEdgeModel,
}
// 动画 - 导出
export const animationEdge = {
    type: 'EDGE_BEZIER_A',
    view: CustomEdge,
    model: animationModel,
}
// 高亮 - 导出
export const Highlight = {
    type: 'Highlight',
    view: CustomEdge,
    model: HighlightModel,
}







