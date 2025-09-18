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

        // 处理用户随意连接导致顺序父子节点颠倒问题
        if (data.tag === 'start') {
            // 1、处理源头和目标节点和锚点颠倒
            const sourceNodeId = edgeModel.targetNodeId // 节点
            const targetNodeId = edgeModel.sourceNodeId
            const sourceAnchorId = edgeModel.targetAnchorId // 锚点
            const targetAnchorId = edgeModel.sourceAnchorId
            // 2、删除颠倒后的线
            this.lf.deleteEdge(edgeModel.id)
            // 3、重新绘制线
            this.lf.addEdge({
                sourceNodeId,
                targetNodeId,
                sourceAnchorId,
                targetAnchorId
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
