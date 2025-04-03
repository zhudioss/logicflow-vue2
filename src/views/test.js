import {HtmlNode, HtmlNodeModel} from "@logicflow/core";
import {createApp, h} from 'vue';
import VueNode from '../components/HelloWorld.vue';

class VueHtmlNode extends HtmlNode {
    constructor(props) {
        super(props)
        this.isMounted = false
        this.r = h(VueNode, {
            properties: props.model.getProperties(),
            text: props.model.inputData,
        })
        this.app = createApp({
            render: () => this.r
        })
    }

    setHtml(rootEl) {
        if (!this.isMounted) {
            this.isMounted = true
            const node = document.createElement('div')
            rootEl.appendChild(node)
            this.app.mount(node)
        } else {
            this.r.component.props.properties = this.props.model.getProperties()
        }
    }
}

class VueHtmlNodeModel extends HtmlNodeModel {
    setAttributes() {
        this.width = 300;
        this.height = 100;
        this.text.editable = false;
        this.inputData = this.text.value
    }

    getOutlineStyle() {
        const style = super.getOutlineStyle();
        style.stroke = 'none';
        style.hover.stroke = 'none';
        return style;
    }
}

export default {
    type: 'vue-html',
    model: VueHtmlNodeModel,
    view: VueHtmlNode
}
