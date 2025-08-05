export default {
    inserted(el, binding) {
        // 延迟绑定，确保当前点击不触发
        el.__ClickOutsideHandler__ = function (e) {
            if (!el.contains(e.target)) {
                binding.value(e); // 执行传入的方法，如关闭弹窗
            }
        };

        el.__ClickOutsideTimer__ = setTimeout(() => {
            document.addEventListener('click', el.__ClickOutsideHandler__);
        }, 0);
    },

    unbind(el) {
        clearTimeout(el.__ClickOutsideTimer__);
        document.removeEventListener('click', el.__ClickOutsideHandler__);
        el.__ClickOutsideHandler__ = null;
    }
};
