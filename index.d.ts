declare module 'local-rpc' {
    type Callable = (...args: any[]) => any;

    interface IGettable {
        [segment: string]: Callable & IGettable;
    }

    const proxy: Callable & IGettable;

    export = proxy;
}
