// createVueHtmlNode.js
import {HtmlNode, HtmlNodeModel} from "@logicflow/core";
import Vue from "vue";
import vueInstanceManager from "./vueInstanceManager";
import {componentsList} from "./componentsList";

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

    getAnchorStyle(anchorInfo) {
        const style = super.getAnchorStyle(anchorInfo);
        style.stroke = "rgb(24, 125, 255)";
        style.r = 3;
        style.hover.r = 8;
        style.hover.fill = "rgb(24, 125, 255)";
        style.hover.stroke = "rgb(24, 125, 255)";
        style.isShowAnchor = true;
        style.onclick = (e) => {
            console.log('点击了锚点：', this);
            if (this.type === 'end-v') return
            window.currentNode = this;
            const menu = document.getElementById('anchor-menu');
            // 显示菜单
            menu.style.display = 'flex';
            menu.style.left = `${e.clientX + 10}px`;
            menu.style.top = `${e.clientY - 150}px`;
        }
        return style;
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
    }

    return {
        type,
        model: modelClass,
        view: CustomVueHtmlNode,
    };
}

