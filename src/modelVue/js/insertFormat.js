export default function insertFormat(model, type) {
    const {sourceNodeId, targetNodeId} = model // 当前点击线
    const {x, y} = this.lf.getNodeModelById(model.targetNodeId) // 新增节点的下级节点

    //主要 node 和 线
    const {nodes, edges} = childNodeEdgesAll(this.lf, model.targetNodeId);
    nodes.forEach(node => {
        this.lf.getNodeModelById(node.id).move(450, 0)  // 移动主要 node
    })
    const newNode = this.lf.addNode({  // 添加插入 node
        type,
        x,
        y,
    });

    this.lf.deleteEdge(model.id)// 删除 点击边
    edges.forEach(edge => this.lf.deleteEdge(edge.id)) // 删除主要线

    const otherEdges = this.lf.getGraphData().edges  // 其他线
    otherEdges.forEach(edge => this.lf.deleteEdge(edge.id)) // 删除其他线

    // 绘制线
    const newNodeEdges = [
        {sourceNodeId, targetNodeId: newNode.id}, // 左
        {sourceNodeId: newNode.id, targetNodeId}, // 右
    ]
    newNodeEdges.forEach(item => this.lf.addEdge(item))
    edges.concat(otherEdges).forEach(edge => this.lf.addEdge({
        sourceNodeId: edge.sourceNodeId,
        targetNodeId: edge.targetNodeId
    }))
}

function childNodeEdgesAll(logicFlow, startNodeId) {
    const visitedNodes = new Set();
    const visitedEdges = new Set();

    const result = {
        nodes: [],
        edges: [],
    };

    function dfs(currentNodeId) {
        if (visitedNodes.has(currentNodeId)) return;

        // 记录添加 node
        visitedNodes.add(currentNodeId);
        result.nodes.push(logicFlow.getNodeModelById(currentNodeId));

        // 获取以当前节点为源头的 所有 边
        const edges = logicFlow.getGraphData().edges.filter(edge => edge.sourceNodeId === currentNodeId);
        for (const edge of edges) {
            if (!visitedEdges.has(edge.id)) {
                // 记录添加 边
                visitedEdges.add(edge.id);
                result.edges.push(edge);
            }

            dfs(edge.targetNodeId);
        }
    }

    dfs(startNodeId);
    return result;
}
