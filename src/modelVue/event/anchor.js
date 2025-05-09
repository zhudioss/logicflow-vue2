import {anchorMenu} from "@/modelVue/js/anchor-menu";

export default function anchorEvent() {
    // 点击锚点
    this.lf.on('custom:anchorClick', ({node}) => {
        const menu = document.getElementById('anchor-menu');
        if (node.BaseType === 'edge') {
            this.anchorMenu = anchorMenu.filter(item => item.type !== 'start-v' && item.type !== 'end-v');
        } else {
            this.anchorMenu = anchorMenu.filter(item => item.type !== 'start-v')
        }
        menu.style.display = 'block';
    });


    // 锚点监听
    this.lf.on('anchor:drop', ({data, nodeModel, edgeModel}) => {
        // 获取当前节点所有边
        const nodeEdgesList = this.lf.getNodeEdges(nodeModel.id);

        const seen = new Set();

        nodeEdgesList.forEach(edge => {
            const {id, targetNodeId} = edge;

            if (seen.has(targetNodeId)) {
                this.lf.deleteEdge(id); // 删除重复 edge
            } else {
                seen.add(targetNodeId); // 记录首次出现的 edge
            }
        });
    })
}
