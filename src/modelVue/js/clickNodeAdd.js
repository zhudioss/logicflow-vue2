export default function clickNodeAdd(currentNode, type, properties) {
    console.log(currentNode, '-=-=-=-=-=-==-=-=-=')
    const startEdge = this.lf.getNodeOutgoingEdge(currentNode.id); // 以当前node的为起点的线

    const anchorId = currentNode.anchorId;
    const startEdgesFromAnchor = startEdge.filter(
        edge => edge.sourceAnchorId === anchorId
    );

    console.log('该锚点的出边:', startEdgesFromAnchor);
    let x, y, newNode, tag = true
    switch (currentNode.tag) {
        case 'end':
            if (startEdgesFromAnchor.length > 0) {
                const nodeModel = this.lf.getNodeModelById(startEdgesFromAnchor.at(-1).targetNodeId) // 数组最后一个元素的model
                x = nodeModel.x
                y = nodeModel.y + 100

                // 如果一个节点有多个 以他终点的连线，是不允许添加的
                const lastNodeEdges = this.lf.getNodeIncomingEdge(startEdgesFromAnchor.at(-1).targetNodeId)
                lastNodeEdges?.length > 1 && lastNodeEdges.forEach(edge => {
                    if (edge.sourceNodeId === currentNode.id) {
                        tag = false
                        return
                    }
                });
            } else {
                x = currentNode.props.model.x + 450;
                if (currentNode.props.model.type === 'branch-v') {
                    const anchors = currentNode.props.model.anchors.filter(item => item.tag === 'end')
                    const count = anchors.length;
                    const spacing = count * 50;
                    anchors.forEach((item, index) => {
                        if (item.id === currentNode.anchorId) {
                            if (count == 2) {
                                y = index === 0 ? item.y - spacing : item.y + spacing;
                            } else {
                                const middle = Math.floor((count - 1) / 2);
                                y = item.y + (index - middle) * spacing;
                            }

                        }
                    })
                } else {
                    y = currentNode.props.model.y;
                }
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
            sourceNodeId: currentNode.tag === 'end' ? currentNode.id : newNode.id, // 起始节点
            targetNodeId: currentNode.tag === 'end' ? newNode.id : currentNode.id, // 目标节点
            sourceAnchorId: currentNode.anchorId, // 起始锚点
        });
    }
    // else {
    //     this.$message({
    //         message: '下节点有多个节点连接',
    //         type: 'warning'
    //     });
    // }

}
