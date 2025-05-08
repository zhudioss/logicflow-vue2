import contextmenuFun from '../event/contextmenuFun'

export default function edgeEvent() {
    // 点击edge
    // this.lf.on('edge:click', ({data, e}) => {
    //     const edgeModel = this.lf.getEdgeModelById(data.id);
    //     // this.clickEdgeId = data.id;
    //     // const edgeModel = this.lf.getEdgeModelById(data.id);
    //     // this.lf.changeEdgeType(data.id, 'Highlight');
    // })

    // 经过
    this.lf.on('edge:mouseenter', ({data, e}) => {
        const edgeModel = this.lf.getEdgeModelById(data.id);
        edgeModel.setProperties({
            showAddMark: true
        });
    })

    // // 离开
    this.lf.on('edge:mouseleave', ({data, e}) => {
        const edgeModel = this.lf.getEdgeModelById(data.id);
        edgeModel.setProperties({
            showAddMark: false
        });
    })

    // 监听连接线右键事件
    this.lf.on('edge:contextmenu', ({e, data}) => {
        contextmenuFun.call(this, e, data, true)
    });

    // 添加连线后隐藏锚点
    this.lf.on('edge:add', ({data}) => {
        const targetNodeId = data.targetNodeId;
        const targetNodeModel = this.lf.getNodeModelById(targetNodeId);
        targetNodeModel.setProperties({
            hideAnchor: true
        });
    });
}
