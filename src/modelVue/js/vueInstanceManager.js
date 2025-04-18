const map = new Map();

export default {
    // 设置 Vue 实例
    set(id, data) {
        map.set(id, data);
    },

    // 获取 Vue 实例
    get(id) {
        return map.get(id);
    },

    // 删除 Vue 实例
    remove(id) {
        map.delete(id);
    },

    // 调用 Vue 实例的方法
    call(id, method, ...args) {
        const inst = map.get(id);
        if (inst?.vm && typeof inst.vm[method] === "function") {
            inst.vm[method](...args);
        }
    },

    // 获取所有 Vue 实例
    getAll() {
        return Array.from(map.entries()).map(([id, data]) => ({
            id,
            ...data,
        }));
    },

    // 获取所有 id
    keys() {
        return Array.from(map.keys());
    },

    // 清空所有
    clear() {
        map.clear();
    },
};


