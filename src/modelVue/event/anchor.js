import {anchorMenu} from "@/modelVue/js/anchor-menu";

export default function anchorEvent() {
    // 点击锚点
    this.lf.on('custom:anchorClick', ({node, tag}) => {
        const menu = document.getElementById('anchor-menu');

        let baseTypeList = []

        // 整合判断
        const handlers = {
            edge: () => ['start-v', 'end-v'],
            node: () => tag === 'start' ? ['end-v'] : ['start-v']
        }
        baseTypeList = handlers[node.BaseType]?.() || []

        this.anchorMenu = anchorMenu.filter(item => !baseTypeList.includes(item.type))
        menu.style.display = 'block';
    });


    // 锚点监听
    this.lf.on('anchor:drop', ({data, nodeModel, edgeModel}) => {
        // console.log(this.lf.getNodeIncomingEdge(edgeModel.targetNodeId),'获取目标的所有上一级节点')
        // console.log(this.lf.getNodeOutgoingEdge(nodeModel.id).length ,'获取节点所有的下一级节点')
        this.lf.getNodeIncomingEdge(edgeModel.targetNodeId).length > 1 &&
        this.lf.getNodeOutgoingEdge(nodeModel.id).length > 1 ? this.lf.deleteEdge(edgeModel.id) : null

        if (data.tag === 'start') {
            const sourceNodeId = edgeModel.targetNodeId
            const targetNodeId = edgeModel.sourceNodeId
            this.lf.deleteEdge(edgeModel.id)
            this.lf.addEdge({
                sourceNodeId,
                targetNodeId
            });

        }
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
