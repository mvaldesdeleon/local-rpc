let fn = () => undefined;

const handler = {
    get(propsFn, prop) {
        const props = propsFn();

        return new Proxy(() => props.concat(prop), handler);
    },
    apply(propsFn, thisArg, args) {
        const props = propsFn();

        return props.length ? fn(...props, ...args) : (fn = args[0], true);
    }
};

module.exports = new Proxy(() => [], handler);
