let fn = () => void 0;

const handler = {
    get(propsFn, prop) {
        return new Proxy(() => propsFn().concat(prop), handler);
    },
    apply(propsFn, thisArg, args) {
		const props = propsFn();

        return props.length ? fn(...props, ...args) : (fn = args[0], true);
    }
};

module.exports = new Proxy(() => [], handler);
