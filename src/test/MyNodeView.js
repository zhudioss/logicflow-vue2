import {HtmlNode, HtmlNodeModel} from "@logicflow/core";
import Vue from 'vue';
import VueNode from './MyNode.vue';
import vueInstanceManager from './vueInstanceManager'

class VueHtmlNode extends HtmlNode {
    constructor(props) {
        super(props);
        this.isMounted = false;
        this.props = props;

        this.id = props.model.id; // 唯一标识符

        // 创建一个 Vue 组件构造器
        this.VueConstructor = Vue.extend(VueNode);

        // 实例化 Vue 组件
        this.vm = new this.VueConstructor({
            propsData: {
                properties: props.model.getProperties(),
                text: props.model.inputData,
                model: props.model,
                anchors: props.anchors,
            },
        });

        // 监听子组件的事件并转发出去
        this.vm.$on('btnClick', (i) => {
            props.graphModel.eventCenter.emit('custom:onBtnClick', i);
        });

        // 注册到全局管理器
        vueInstanceManager.set(this.id, this.vm);
    }

    setHtml(rootEl) {
        if (!this.isMounted) {
            this.isMounted = true;
            const node = document.createElement('div');
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


class VueHtmlNodeModel extends HtmlNodeModel {
    setAttributes() {
        this.width = 300;
        this.height = 189;
        this.text.editable = false;
        this.inputData = this.text.value;
        console.log(this, '0=-=-=-=ppppppp')
        this.anchorsOffset = [
            // 中心点为圆点
            // [0, -this.height / 2],              // top
            [this.width / 2, 0],                // right
            // [0, this.height / 2],               // bottom
            // [-this.width / 2, 0],               // left
        ];
    }

    getOutlineStyle() {
        const style = super.getOutlineStyle();
        style.stroke = 'none';
        style.hover.stroke = 'none';
        return style;
    }

    getAnchorStyle(anchorInfo) {
        const style = super.getAnchorStyle(anchorInfo);
        style.stroke = "rgb(24, 125, 255)";
        style.r = 3;
        style.hover.r = 8;
        style.hover.fill = "rgb(24, 125, 255)";
        style.hover.stroke = "rgb(24, 125, 255)";
        style.isShowAnchor = true
        return style;
    }

    getAnchors() {
        return [
            {
                x: this.x + this.width / 2,
                y: this.y,
                id: `${this.id}_right`,
                type: 'out' // 可选：入点 or 出点
            }
        ];
    }

}

export default {
    type: 'vue-html',
    model: VueHtmlNodeModel,
    view: VueHtmlNode,
};
