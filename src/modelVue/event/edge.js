import contextmenuFun from '../event/contextmenuFun'

export default (_this) => {
    // 点击edge
    _this.lf.on('edge:click', ({data}) => {
        _this.clickEdgeId = data.id;
        _this.lf.changeEdgeType(data.id, 'Highlight');
    })

    // 监听连接线右键事件
    _this.lf.on('edge:contextmenu', ({e, data}) => {
        contextmenuFun(e, data, true, _this)
    });

    // 添加连线后隐藏锚点
    _this.lf.on('edge:add', ({data}) => {
        const targetNodeId = data.targetNodeId;
        const targetNodeModel = _this.lf.getNodeModelById(targetNodeId);
        targetNodeModel.setProperties({
            hideAnchor: true
        });
    });
};
