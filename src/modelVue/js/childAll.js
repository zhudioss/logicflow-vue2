export default function childAll() {
    const childAll = this.lf.getNodeOutgoingNode(this.backClickNodeId) // 所有子节点
    this.detailBranchList = childAll.map(child => {
        return ({
            ...child,
            componentsData: this.componentsList.find(item => item.type === child.type)
        })
    })
}
