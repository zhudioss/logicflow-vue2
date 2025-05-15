export default function insertFormat(model, type, currentNode) {
    const {sourceNodeId, targetNodeId} = model // 当前点击线

    // 判断节点直接的距离
    const num = Number(this.lf.getNodeModelById(model.targetNodeId).x) - Number(this.lf.getNodeModelById(model.sourceNodeId).x)

    let x, y
    if (num >= 800) {
        const image = currentNode.nativeEvent.target;
        x = Number(image.getAttribute('x'))
        y = Number(image.getAttribute('y'))
    } else {
        x = this.lf.getNodeModelById(model.targetNodeId).x // 新增节点的下级节点
        y = this.lf.getNodeModelById(model.targetNodeId).y // 新增节点的下级节点
    }

    // 主要 node 和 线
    const nodes = JSON.parse(JSON.stringify(childNodeEdgesAll(this.lf, model.targetNodeId).nodes)) // 深拷贝
    const edges = JSON.parse(JSON.stringify(childNodeEdgesAll(this.lf, model.targetNodeId).edges))

    this.lf.deleteEdge(model.id)// 删除 点击边
    edges.forEach(edge => this.lf.deleteEdge(edge.id)) // 删除主要线

    if (num < 800) {
        nodes.forEach(node => {
            this.lf.getNodeModelById(node).move(320, 0)  // 移动主要 node
        })
    }

    const newNode = this.lf.addNode({  // 添加插入 node
        type,
        x,
        y,
    });

    // 绘制线
    const newNodeEdges = [
        {sourceNodeId, targetNodeId: newNode.id}, // 左
        {sourceNodeId: newNode.id, targetNodeId}, // 右
    ]
    newNodeEdges.forEach(item => this.lf.addEdge(item))
    edges.forEach(edge => {
        this.lf.addEdge({
            sourceNodeId: edge.sourceNodeId,
            targetNodeId: edge.targetNodeId,
            startPoint: {
                x: num < 800 ? edge.startPoint.x + 320 : edge.startPoint.x,
                y: edge.startPoint.y,
            },
            endPoint: {
                x: num < 800 ? edge.endPoint.x + 320 : edge.endPoint.x,
                y: edge.endPoint.y,
            }
        })
    })
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
        result.nodes.push(logicFlow.getNodeModelById(currentNodeId).id);

        // 获取以当前节点为源头的 所有 边
        const edges = logicFlow.getGraphData().edges.filter(edge => edge.sourceNodeId === currentNodeId);
        for (const edge of edges) {
            if (!visitedEdges.has(edge.id)) {
                // 记录添加 边
                visitedEdges.add(edge.id);
                result.edges.push({
                    id: edge.id,
                    sourceNodeId: edge.sourceNodeId,
                    targetNodeId: edge.targetNodeId,
                    endPoint: edge.endPoint,
                    startPoint: edge.startPoint,
                });
            }

            dfs(edge.targetNodeId);
        }
    }

    dfs(startNodeId);
    return result;
}
