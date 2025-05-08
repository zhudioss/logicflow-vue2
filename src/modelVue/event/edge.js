import contextmenuFun from '../event/contextmenuFun'
import {anchorMenu} from "@/modelVue/js/anchor-menu";

export default (_this) => {
    // 点击edge
    _this.lf.on('edge:click', ({data, e}) => {
        const edgeModel = _this.lf.getEdgeModelById(data.id);
        console.log(data, '-=-=-=-=')
        console.log(_this.lf,'lflflflffl')
        console.log(edgeModel,'edgeModeledgeModeledgeModel')

        // _this.clickEdgeId = data.id;
        // const edgeModel = _this.lf.getEdgeModelById(data.id);
        // _this.lf.changeEdgeType(data.id, 'Highlight');
    })

    // 经过
    _this.lf.on('edge:mouseenter', ({data, e}) => {
        const edgeModel = _this.lf.getEdgeModelById(data.id);
        edgeModel.setProperties({
            showAddMark: true
        });
    })

    // // 离开
    _this.lf.on('edge:mouseleave', ({data, e}) => {
        const edgeModel = _this.lf.getEdgeModelById(data.id);
        edgeModel.setProperties({
            showAddMark: false
        });
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
