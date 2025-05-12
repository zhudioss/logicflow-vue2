export default function insertFormat(model, type) {
    console.log(model, '-=-=-=-=-0000')
    const {sourceNodeId, targetNodeId} = model
    const outgoingEdge = this.lf.getEdgeDataById(model.id) // 当前edge的model

    const beforeEdge = this.lf.getNodeIncomingEdge(outgoingEdge.targetNodeId) // 新增节点的下级节点的所有上级线
    const {x, y} = this.lf.getNodeModelById(outgoingEdge.targetNodeId) // 新增节点的下级节点


    // 重新定义所有上级线要连接的位置，因为布局是依次想向右推进，所以开始位置不变，结束位置只调整 x 轴
    const beforePointer = beforeEdge.map(edge => ({
        sourceNodeId: edge.sourceNodeId,
        targetNodeId: edge.targetNodeId,
        endPoint: {
            ...edge.endPoint,
            x: edge.endPoint.x + 450
        },
    }))
    beforeEdge.forEach(edge => this.lf.deleteEdge(edge.id)) // 删除 上级线

    const {nodes, edges} = childNodeEdgesAll(this.lf, outgoingEdge.targetNodeId);
    const edgesPointer = edges.map(edge => ({
        sourceNodeId: edge.sourceNodeId,
        targetNodeId: edge.targetNodeId,
        endPoint: {
            ...edge.endPoint,
            x: edge.endPoint.x + 450
        },
    }))
    edges.forEach(edge => this.lf.deleteEdge(edge.id)) // 删除 下级线

    nodes.forEach(node => {
        this.lf.getNodeModelById(node.id).move(450, 0)
    })

    const newNode = this.lf.addNode({
        type,
        x,
        y,
    });
    this.lf.addEdge({
        sourceNodeId,
        targetNodeId: newNode.id
    });
    this.lf.addEdge({
        sourceNodeId: newNode.id,
        targetNodeId
    });

    // edgesPointer.concat(beforePointer).forEach(item => this.lf.addEdge(item))  // 重新绘制移动后的线
    edgesPointer.forEach(item => this.lf.addEdge(item))  // 重新绘制移动后的线
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
