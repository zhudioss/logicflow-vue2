const vueInstanceMap = {};

export default {
    set(id, vm) {
        vueInstanceMap[id] = vm;
    },
    get(id) {
        return vueInstanceMap[id];
    },
    remove(id) {
        delete vueInstanceMap[id];
    },
    getAll() {
        return vueInstanceMap;
    }
};
