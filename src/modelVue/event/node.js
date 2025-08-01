// 全局注册管理器 函数工厂
import vueInstanceManager from "@/modelVue/js/vueInstanceManager";
import contextmenuFun from '../event/contextmenuFun'

export default function nodeEvent() {
    // 经过node
    this.lf.on('node:mouseenter', ({data}) => {
        const nodeId = data.id;
        // 元素置顶
        this.lf.toFront(nodeId);

        const edges = this.lf.graphModel.edges;
        edges.forEach(edge => {
            if ((edge.sourceNodeId === nodeId || edge.targetNodeId === nodeId) && edge.type !== 'EDGE_BEZIER_A') {
                this.lf.changeEdgeType(edge.id, 'Highlight');
            }
        });
    });

    // 离开node
    this.lf.on('node:mouseleave', ({data}) => {
        const nodeId = data.id;
        const edges = this.lf.graphModel.edges;
        edges.forEach(edge => {
            if ((edge.sourceNodeId === nodeId || edge.targetNodeId === nodeId) && edge.type !== 'EDGE_BEZIER_A') {
                this.lf.changeEdgeType(edge.id, 'EDGE_BEZIER');
                this.clickEdgeId ? this.lf.changeEdgeType(this.clickEdgeId, 'Highlight') : null
            }
        });
    });

    // 点击node
    this.lf.on('node:click', ({data}) => {
        this.rightMenuShow = false
        const nodeId = data.id;
        const vueManager = vueInstanceManager.getAll()
        vueManager.forEach(item => {
            if (item.id === nodeId) {
                item.vm.$el.style.border = '1.5px solid #3f58fd'

                const {
                    label,
                    icon,
                } = this.componentsList.find(item => item.type === data.type)
                this.detailForm.label = label
                this.detailForm.icon = icon
                const childAll = this.lf.getNodeOutgoingNode(data.id) // 所有子节点
                this.detailBranchList = childAll.map(child => {
                    return ({
                        ...child,
                        componentsData: this.componentsList.find(item => item.type === child.type)
                    })
                })

                this.drawer = true
            } else {
                item.vm.$el.style.border = 'none'
            }
        })
    });

    // 点击空白区域
    this.lf.on('blank:click', () => {
        this.rightMenuShow = false
        this.clickEdgeId ? this.lf.changeEdgeType(this.clickEdgeId, 'EDGE_BEZIER') : null
        this.clickEdgeId = null
    })


    // 空白处右键也可以监听
    this.lf.on('blank:contextmenu', ({e}) => {
        contextmenuFun.call(this, e, null, false)
    });

    // 监听节点右键事件
    this.lf.on('node:contextmenu', ({e, data}) => {
        contextmenuFun.call(this, e, data, true)
    });
}
