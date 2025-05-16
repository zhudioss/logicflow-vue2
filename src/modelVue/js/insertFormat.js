export default function insertFormat(model, type, currentNode) {
    const {sourceNodeId, targetNodeId} = model;
    const lf = this.lf;

    const getAnchorByTag = (nodeId, tag) =>
        lf.getNodeModelById(nodeId).anchors.find(item => item.tag === tag);

    const pointerEnd = getAnchorByTag(sourceNodeId, 'end');
    const pointerStart = getAnchorByTag(targetNodeId, 'start');

    const horizontalGap = Number(pointerStart.x) - Number(pointerEnd.x);
    const isWideEnough = Math.abs(horizontalGap) >= 800;

    // 计算新节点位置
    let x, y;
    if (isWideEnough) {
        const image = currentNode.nativeEvent.target;
        x = Number(image.getAttribute('x'));
        y = Number(image.getAttribute('y'));
    } else {
        const targetNodeModel = lf.getNodeModelById(targetNodeId);
        x = targetNodeModel.x;
        y = targetNodeModel.y;
    }

    // 获取目标节点及其所有子节点和边（深拷贝）
    const {nodes, edges} = JSON.parse(
        JSON.stringify(childNodeEdgesAll(lf, targetNodeId))
    );

    // 删除原始连接线和子边
    lf.deleteEdge(model.id);
    edges.forEach(edge => lf.deleteEdge(edge.id));

    // 向右移动子节点（如果间距不足）
    if (!isWideEnough) {
        nodes.forEach(nodeId => {
            lf.getNodeModelById(nodeId).move(320, 0);
        });
    }

    // 添加插入节点
    const newNode = lf.addNode({type, x, y});

    // 添加两条连接新节点的边
    const sourceEnd = getAnchorByTag(sourceNodeId, 'end');
    const targetStart = getAnchorByTag(targetNodeId, 'start');
    lf.addEdge({
        sourceNodeId,
        targetNodeId: newNode.id,
        startPoint: {x: sourceEnd.x, y: sourceEnd.y},
        endPoint: {x: newNode.anchors[0].x, y: newNode.anchors[0].y},
    });

    lf.addEdge({
        sourceNodeId: newNode.id,
        targetNodeId,
        startPoint: {x: newNode.anchors[1].x, y: newNode.anchors[1].y},
        endPoint: {x: targetStart.x, y: targetStart.y},
    });

    // 重新添加原边（根据是否需要偏移）
    edges.forEach(edge => {
        lf.addEdge({
            sourceNodeId: edge.sourceNodeId,
            targetNodeId: edge.targetNodeId,
            startPoint: {
                x: isWideEnough ? edge.startPoint.x : edge.startPoint.x + 320,
                y: edge.startPoint.y,
            },
            endPoint: {
                x: isWideEnough ? edge.endPoint.x : edge.endPoint.x + 320,
                y: edge.endPoint.y,
            },
        });
    });
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
