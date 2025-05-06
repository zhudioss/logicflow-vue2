import {anchorMenu} from "@/modelVue/js/anchor-menu";

export default (_this) => {
    // 点击锚点
    _this.lf.on('custom:anchorClick', ({node}) => {
        const menu = document.getElementById('anchor-menu');
        _this.anchorMenu = anchorMenu.filter(item => item.type !== 'start-v')
        if (node.type === "start-v") {
            _this.anchorMenu = anchorMenu.filter(item => item.type !== 'start-v')
        } else {
            _this.anchorMenu = anchorMenu.filter(item => item.type !== 'start-v' && item.type !== node.type)
        }
        menu.style.display = 'block';
    });


    // 锚点监听
    _this.lf.on('anchor:drop', ({data, nodeModel, edgeModel}) => {
        // 获取当前节点所有边
        const nodeEdgesList = _this.lf.getNodeEdges(nodeModel.id);

        const seen = new Set();

        nodeEdgesList.forEach(edge => {
            const {id, targetNodeId} = edge;

            if (seen.has(targetNodeId)) {
                _this.lf.deleteEdge(id); // 删除重复 edge
            } else {
                seen.add(targetNodeId); // 记录首次出现的 edge
            }
        });
    })
};
