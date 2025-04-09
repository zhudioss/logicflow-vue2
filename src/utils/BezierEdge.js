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
        style.strokeDasharray = "10 5";
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

    // 箭头
    getArrowStyle() {
        const style = super.getArrowStyle();
        style.stroke = '#d0d5dc';
        return style;
    }

    // 连接线的样式
    getEdgeStyle() {
        const style = super.getEdgeStyle();
        style.stroke = "#d0d5dc";
        // 虚线间隔
        style.strokeDasharray = "10 0";
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

// 非高亮
class NotHighlightedModel extends BezierEdgeModel {
    constructor(data, graphModel) {
        super(data, graphModel);
    }

    // 连接线的样式
    getEdgeStyle() {
        const style = super.getEdgeStyle();
        style.stroke = "#d0d5dc";
        // 虚线间隔
        style.strokeDasharray = "10 0";
        return style;
    }
}

//


// 默认无动画
export const noAnimationEdge = {
    type: 'EDGE_BEZIER',
    view: BezierEdge,
    model: customBezierEdgeModel,
}

// 有动画
export const animationEdge = {
    type: 'EDGE_BEZIER_A',
    view: BezierEdge,
    model: animationModel,
}

// 滑动节点高亮
export const Highlight = {
    type: 'Highlight',
    view: BezierEdge,
    model: HighlightModel,
}

// 离开取消高亮
export const NotHighlighted = {
    type: 'NotHighlighted',
    view: BezierEdge,
    model: NotHighlightedModel,
}



