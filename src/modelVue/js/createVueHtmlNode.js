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
        style.r = 6;
        style.hover.r = 10;
        style.hover.fill = "rgb(24, 125, 255)";
        style.hover.stroke = "rgb(24, 125, 255)";
        style.isShowAnchor = true;
        style.onclick = (e) => {
            console.log('点击了锚点：', this);
            const menu = document.getElementById('anchor-menu');
            if (this.type === 'end-v') {
                menu.style.display = 'none';
                return
            }
            //向外派发事件
            this.graphModel.eventCenter.emit('custom:anchorClick', {node: this});
            window.currentNode = this;

            const canvasWidth = window.innerWidth;
            const canvasHeight = window.innerHeight;

            const menuWidth = menu.offsetWidth; // 假设宽度 150px
            const menuHeight = menu.offsetHeight; // 假设高度 100px

            let left = e.clientX + 10;
            let top = e.clientY - menuHeight / 2;

            // 调整位置防止超出右边界
            if (left + menuWidth > canvasWidth) {
                left = canvasWidth - menuWidth - 10;
            }
            // 调整位置防止超出上边界
            if (top < 0) {
                top = e.clientY + 10;
            }
            // 调整位置防止超出下边界
            if (top + menuHeight > canvasHeight) {
                top = canvasHeight - menuHeight - 10;
            }

            menu.style.left = `${left}px`;
            menu.style.top = `${top}px`;
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

