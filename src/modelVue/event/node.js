// 全局注册管理器 函数工厂
import vueInstanceManager from "@/modelVue/js/vueInstanceManager";
import contextmenuFun from '../event/contextmenuFun'

export default (_this) => {

    // 经过node
    _this.lf.on('node:mouseenter', ({data}) => {
        const nodeId = data.id;
        // 元素置顶
        _this.lf.toFront(nodeId);

        const edges = _this.lf.graphModel.edges;
        edges.forEach(edge => {
            if ((edge.sourceNodeId === nodeId || edge.targetNodeId === nodeId) && edge.type !== 'EDGE_BEZIER_A') {
                _this.lf.changeEdgeType(edge.id, 'Highlight');
            }
        });
    });

    // 离开node
    _this.lf.on('node:mouseleave', ({data}) => {
        const nodeId = data.id;
        const edges = _this.lf.graphModel.edges;
        edges.forEach(edge => {
            if ((edge.sourceNodeId === nodeId || edge.targetNodeId === nodeId) && edge.type !== 'EDGE_BEZIER_A') {
                _this.lf.changeEdgeType(edge.id, 'EDGE_BEZIER');
                _this.clickEdgeId ? _this.lf.changeEdgeType(_this.clickEdgeId, 'Highlight') : null
            }
        });
    });

    // 点击node
    _this.lf.on('node:click', ({data}) => {
        _this.rightMenuShow = false
        const nodeId = data.id;
        const vueManager = vueInstanceManager.getAll()
        vueManager.forEach(item => {
            if (item.id === nodeId) {
                item.vm.$el.style.border = '1.5px solid #3f58fd'
            } else {
                item.vm.$el.style.border = 'none'
            }
        })
    });

    // 点击空白区域
    _this.lf.on('blank:click', () => {
        _this.rightMenuShow = false
        _this.clickEdgeId ? _this.lf.changeEdgeType(_this.clickEdgeId, 'EDGE_BEZIER') : null
        _this.clickEdgeId = null
    })

    // 空白处右键也可以监听
    _this.lf.on('blank:contextmenu', ({e}) => {
        contextmenuFun(e, null, false, _this)
    });

    // 监听节点右键事件
    _this.lf.on('node:contextmenu', ({e, data}) => {
        contextmenuFun(e, data, true, _this)
    });
};
