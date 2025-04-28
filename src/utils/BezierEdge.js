import {BezierEdgeModel, BezierEdge, h} from '@logicflow/core'

// 线的 view
class CustomEdge extends BezierEdge {
    getEndArrow() {
        const {stroke} = this.props.model.getArrowStyle();
        return h("path", {
            stroke,
            fill: stroke,
            d: 'M0 0 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0',
            transform: `translate(2,0)`, // 🔥 加固定旋转
        });
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







