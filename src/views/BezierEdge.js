import {BezierEdge, BezierEdgeModel} from '@logicflow/core'

// 有动画
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
        style.strokeDasharray = "3 5";
        return style;
    }

    // 箭头颜色
    getArrowStyle() {
        const style = super.getArrowStyle();
        style.stroke = '#5dc822';
        return style;
    }

    // 连接线的样式
    getEdgeStyle() {
        const style = super.getEdgeStyle();
        style.stroke = "#5dc822";
        // 虚线间隔
        style.strokeDasharray = "3 5";
        return style;
    }
}

// 默认样式
class customBezierEdgeModel extends BezierEdgeModel {
    constructor(data, graphModel) {
        super(data, graphModel);
    }

    // 箭头颜色
    getArrowStyle() {
        const style = super.getArrowStyle();
        style.stroke = '#3f58fd';
        return style;
    }

    // 连接线的样式
    getEdgeStyle() {
        const style = super.getEdgeStyle();
        style.stroke = "#3f58fd";
        // 虚线间隔
        style.strokeDasharray = "3 5";
        return style;
    }
}

export const noAnimationEdge = {
    type: 'EDGE_BEZIER',
    view: BezierEdge,
    model: customBezierEdgeModel,
}
export const animationEdge = {
    type: 'EDGE_BEZIER_A',
    view: BezierEdge,
    model: animationModel,
}
