export default function clickNodeAdd(currentNode, type, properties) {
    const startEdge = this.lf.getNodeOutgoingEdge(currentNode.id); // 以当前node的为起点的线

    let x, y, newNode, tag = true
    switch (currentNode.tag) {
        case 'end':
            if (startEdge.length > 0) {
                const nodeModel = this.lf.getNodeModelById(startEdge.at(-1).targetNodeId) // 数组最后一个元素的model
                x = nodeModel.x
                y = nodeModel.y + 100

                // 如果一个节点有多个 以他终点的连线，是不允许添加的
                const lastNodeEdges = this.lf.getNodeIncomingEdge(startEdge.at(-1).targetNodeId)
                lastNodeEdges?.length > 1 && lastNodeEdges.forEach(edge => {
                    if (edge.sourceNodeId === currentNode.id) {
                        tag = false
                        return
                    }
                });
            } else {
                x = currentNode.props.model.x + 450;
                y = currentNode.props.model.y;
            }
            break
        case 'start':
            x = currentNode.props.model.x - 450;
            y = currentNode.props.model.y;
            break
    }
    if (tag) {
        newNode = this.lf.addNode({
            properties,
            type,
            x,
            y,
        });
        this.lf.addEdge({
            sourceNodeId: currentNode.tag === 'end' ? currentNode.id : newNode.id,
            targetNodeId: currentNode.tag === 'end' ? newNode.id : currentNode.id
        });
    }
    // else {
    //     this.$message({
    //         message: '下节点有多个节点连接',
    //         type: 'warning'
    //     });
    // }

}
