import { CircleNode, CircleNodeModel } from "@logicflow/core";

class LockedNode extends CircleNode {}

class LockedNodeModel extends CircleNodeModel {
    setAttributes() {
        this.r = 30;
        const lockMenu = [
            {
                className: "lf-menu-lock custom-menu",
                text: "锁定",
                icon: true,
                callback: () => {
                    this.draggable = false;
                    this.setProperties({
                        isLocked: true
                    });
                }
            },
            {
                className: "lf-menu-delete custom-menu",
                text: "删除",
                icon: true,
                callback: (node) => {
                    this.graphModel.deleteNode(node.id);
                }
            }
        ];
        const unlockMenu = [
            {
                className: "lf-menu-unlock custom-menu",
                text: "解锁",
                icon: true,
                callback: () => {
                    this.draggable = true;
                    this.setProperties({
                        isLocked: false
                    });
                }
            }
        ];
        const { isLocked } = this.properties;
        if (isLocked) {
            this.menu = unlockMenu;
        } else {
            this.menu = lockMenu;
        }
    }
    getNodeStyle() {
        const style = super.getNodeStyle();
        style.strokeWidth = 1;
        const { isLocked } = this.properties;
        if (isLocked) {
            style.fill = "#efefef";
            style.stroke = "#939495";
        }
        return style;
    }
}

export default {
    type: "LockedNode",
    view: LockedNode,
    model: LockedNodeModel
};
