// 全局注册管理器 函数工厂
import vueInstanceManager from "@/modelVue/js/vueInstanceManager";
import childAll from "@/modelVue/js/childAll";
import contextmenuFun from '../event/contextmenuFun'

function getClassName(el) {
    if (!el) return '';
    if (typeof el.className === 'string') {
        return el.className;
    } else if (el.className && typeof el.className.baseVal === 'string') {
        return el.className.baseVal; // SVG 元素
    }
    return '';
}

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
    // this.lf.on('node:click', ({data, e}) => {
    //     const _this = this
    //
    //     this.rightMenuShow = false
    //     const nodeId = data.id;
    //     this.nodeModelId = data.id;
    //     const vueManager = vueInstanceManager.getAll()
    //     vueManager.forEach((item, index) => {
    //
    //         if (item.id === nodeId) {
    //
    //             // 点击节点，添加边框颜色
    //             const domAll = document.getElementsByClassName('warpCard')
    //             Array.from(domAll).forEach(dom => {
    //                 dom.style.border = 'none';
    //             });
    //
    //             const targetCls = getClassName(e.target);
    //             const parentCls = getClassName(e.target.parentNode);
    //
    //             if (targetCls.includes('warpCard')) {
    //                 e.target.style.border = '2px solid #3f58fd';
    //             }
    //             if (parentCls.includes('warpCard')) {
    //                 e.target.parentNode.style.border = '2px solid #3f58fd';
    //             }
    //             // 小地图中的边框
    //             item.vm.$el.style.border = '2px solid #3f58fd'
    //
    //
    //             const {
    //                 label,
    //                 icon,
    //                 uniqueCom
    //             } = this.componentsList.find(item => item.type === data.type)
    //             _this.detailForm.label = label
    //             _this.detailForm.icon = icon
    //             _this.detailForm.uniqueCom = uniqueCom
    //
    //             this.backClickNodeId = data.id;
    //
    //             childAll.call(this) // 同步详情页面子节点列表
    //             this.drawer = true
    //         }
    //     })
    // });

    this.lf.on('node:click', ({data, e}) => {
        const _this = this
        this.rightMenuShow = false
        const nodeId = data.id
        this.nodeModelId = data.id

        const vueManager = vueInstanceManager.getAll()
        vueManager.forEach((item) => {
            if (item.id === nodeId) {
                // 清除所有边框
                const domAll = document.getElementsByClassName('warpCard')
                Array.from(domAll).forEach(dom => {
                    dom.style.border = 'none'
                })

                let targetDom = null
                if (e) {
                    // 用户真实点击
                    const targetCls = getClassName(e.target)
                    const parentCls = getClassName(e.target.parentNode)
                    if (targetCls.includes('warpCard')) targetDom = e.target
                    if (parentCls.includes('warpCard')) targetDom = e.target.parentNode
                } else {
                    // js触发
                    targetDom = document.querySelector(`.${data.properties.className}`)
                }

                if (targetDom) {
                    targetDom.style.border = '2px solid #3f58fd'
                }

                // 小地图中的边框
                item.vm.$el.style.border = '2px solid #3f58fd'

                const {label, icon, uniqueCom} = this.componentsList.find(it => it.type === data.type)
                _this.detailForm.label = label
                _this.detailForm.icon = icon
                _this.detailForm.uniqueCom = uniqueCom
                this.backClickNodeId = data.id

                childAll.call(this) // 同步详情页面子节点列表
                this.drawer = true
            }
        })
    })


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
