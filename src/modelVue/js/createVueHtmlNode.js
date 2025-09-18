// createVueHtmlNode.js
import {HtmlNode, HtmlNodeModel, h} from "@logicflow/core";
import Vue from "vue";
import vueInstanceManager from "./vueInstanceManager";
import {componentsList} from "./componentsList";
import {anchorPublic} from "@/modelVue/js/anchor-menu";


// 默认模型类，可根据需要传入自定义
export class VueHtmlNodeModel extends HtmlNodeModel {
    async setAttributes() {
        await componentsList.forEach((item) => {
            if (this.type === item.type) {
                this.width = item.properties.width;
                this.height = item.properties.height;
                this.anchorsOffset = item.properties.anchorsOffset;
            }
        })
        this.text.editable = false;
        this.inputData = this.text.value;

    }

    getOutlineStyle() {
        const style = super.getOutlineStyle();
        style.stroke = "none";
        style.hover.stroke = "none";
        return style;
    }

    // 设置锚点数据
    getDefaultAnchor() {
        const {x, y, width, height, type, id, properties} = this;
        const left_A = x - width / 2
        const right_A = x + width / 2

        if (type === 'start-v') {
            return [
                {
                    x: right_A,
                    y,
                    show: 'block',
                    id: `right_${id}`,
                    tag: 'end',
                },
            ];
        }
        if (type !== 'start-v' && type !== 'end-v' && type !== 'branch-v') {
            return [
                {
                    x: left_A,
                    y,
                    show: properties.hideAnchor ? 'none' : 'block',
                    id: `left_${id}`,
                    tag: 'start',
                },
                {
                    x: right_A,
                    y,
                    show: 'block',
                    id: `right_${id}`,
                    tag: 'end',
                }
            ];
        }
        if (type == 'branch-v') {
            const anchors = [
                {
                    x: left_A,
                    y,
                    show: properties.hideAnchor ? 'none' : 'block',
                    id: `left_${id}`,
                    tag: 'start',
                }
            ];

            const top = y - height / 2   // 节点上边缘
            if (properties.anchorsList) {
                const n = properties.anchorsList.length
                const gap = height / (n + 1)  // 等分，保证上下留白

                properties.anchorsList.forEach((item, index) => {
                    const anchorY = top + gap * (index + 1)
                    anchors.push({
                        x: right_A,
                        y: anchorY,
                        show: 'block',
                        id: `right_${index}_${id}`,
                        tag: 'end',
                        haveEdge: item.haveEdge || '',
                        targetNodeId: item.targetNodeId || ''
                    })
                })

            } else {
                // 默认两个锚点
                const n = 2
                const gap = height / (n + 1)

                for (let i = 0; i < n; i++) {
                    const anchorY = top + gap * (i + 1)
                    anchors.push({
                        x: right_A,
                        y: anchorY,
                        show: 'block',
                        id: `right_${i}_${id}`,
                        tag: 'end',
                    })
                }
            }

            return anchors;
        }
        if (type === 'end-v') {
            return [
                {
                    x: left_A,
                    y,
                    show: properties.hideAnchor ? 'none' : 'block',
                    id: `left_${id}`,
                    tag: 'start',
                },
            ];
        }
    }

    addField(item) {
        // console.log(item)
    }

    // 连接规则
    initNodeData(data) {
        super.initNodeData(data);
        // 禁止节点文本可以编辑
        // this.text.editable = false;
        // 定义连接规则，只允许出口节点连接入口节点
        const rule1 = {
            validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
                return sourceAnchor.tag !== "start" || targetAnchor.tag !== "start"
            }
        };
        const rule2 = {
            validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
                return sourceAnchor.tag !== 'end' || targetAnchor.tag !== "end"
            }
        };
        this.sourceRules.push(rule1, rule2);
    }
}

// 工厂方法，返回 LogicFlow 注册配置
export function createVueHtmlNode({type, component, modelClass = VueHtmlNodeModel}) {
    const VueConstructor = Vue.extend(component);

    class CustomVueHtmlNode extends HtmlNode {
        constructor(props) {
            super(props);
            this.isMounted = false;
            this.props = props;
            this.id = props.model.id;

            // 创建组件实例
            this.vm = new VueConstructor({
                propsData: {
                    model: props.model,
                    properties: props.model.getProperties(),
                    text: props.model.inputData,
                    anchors: props.anchors,
                },
            });

            // 监听事件并向外转发
            this.vm.$on("btnClick", (data) => {
                props.graphModel.eventCenter.emit("custom:onBtnClick", data);
            });


            // 注册到全局管理器
            vueInstanceManager.set(this.id, {
                vm: this.vm, type,
            });
        }

        setHtml(rootEl) {
            if (!this.isMounted) {
                this.isMounted = true;
                const node = document.createElement("div");
                rootEl.appendChild(node);
                this.vm.$mount(node);
            } else {
                // 更新 props
                this.vm.properties = this.props.model.getProperties();
                this.vm.text = this.props.model.inputData;
                this.vm.model = this.props.model;
            }
        }

        getText() {
            return null;
        }

        // 自定义锚点
        getAnchorShape(anchorData) {
            const {x, y, id, show, className, tag} = anchorData;
            return h(
                'g', // 分组元素，可以放多个图形
                {key: id},
                [
                    h('image', {
                        href: require('@/assets/添加.png'),
                        background: '#fff',
                        width: 18,
                        height: 18,
                        display: show,
                        className,
                        transform: `translate(${x - 9}, ${y - 9})`,
                        style: 'cursor: pointer;transition:0.3s',
                        onclick: (e) => {
                            // this.id 为 nodeId
                            // id 为 anchorId
                            anchorPublic.call(this, e, this.id, tag, id);
                        },
                        onmouseenter: (e) => {
                            const image = e.target;
                            image.setAttribute('width', 22); // 放大
                            image.setAttribute('height', 22);
                            image.setAttribute('transform', `translate(${x - 11}, ${y - 11})`);
                        },
                        onmouseout: (e) => {
                            const image = e.target;
                            image.setAttribute('width', 18); // 还原
                            image.setAttribute('height', 18);
                            image.setAttribute('transform', `translate(${x - 9}, ${y - 9})`);
                        }
                    })
                ]
            );
        }

    }

    return {
        type,
        model: modelClass,
        view: CustomVueHtmlNode,
    };
}

