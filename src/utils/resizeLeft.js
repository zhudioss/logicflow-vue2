// src/directives/resizeLeft.js
export default {
    bind(el) {

        const resizer = document.createElement('div');
        resizer.style.width = '5px';
        resizer.style.height = '30px';
        resizer.style.position = 'absolute';
        resizer.style.left = '-10px';
        resizer.style.top = '50%';
        resizer.style.transform = 'translateY(-50%)';
        resizer.style.cursor = 'ew-resize';
        resizer.style.background = 'rgba(16,24,40,0.3)';
        resizer.style.boxSizing = 'border-box';
        resizer.style.borderRadius = '10px';
        el.appendChild(resizer);

        let dragging = false;
        let startX = 0;
        let startWidth = 0;

        function onMouseDown(e) {
            e.preventDefault();
            dragging = true;
            startX = e.clientX;
            startWidth = el.offsetWidth;

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        }

        function onMouseMove(e) {
            if (!dragging) return;

            // 计算宽度
            let deltaX = startX - e.clientX;
            let newWidth = startWidth + deltaX;

            // const minWidth = window.innerWidth * 0.3; // 最小宽度 = 33%
            const minWidth = 400; // 最小宽度 = 33%
            const maxWidth = window.innerWidth * 0.5;  // 最大宽度 = 50%

            if (newWidth < minWidth) {
                newWidth = minWidth;
            } else if (newWidth > maxWidth) {
                newWidth = maxWidth;
            }

            el.style.width = newWidth + 'px';
        }

        function onMouseUp() {
            dragging = false;
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        }

        resizer.addEventListener('mousedown', onMouseDown);

        el.__resize_left_cleanup__ = () => {
            resizer.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    },
    unbind(el) {
        if (el.__resize_left_cleanup__) {
            el.__resize_left_cleanup__();
            delete el.__resize_left_cleanup__;
        }
    }
};
