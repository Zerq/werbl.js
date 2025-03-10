export class Routmappinng {
    ctrName;
    func;
    constructor(ctrName, func) {
        this.ctrName = ctrName;
        this.func = func;
    }
}
export class Router {
    static instance;
    static get Instance() {
        if (!Router.instance) {
            Router.instance = new Router();
        }
        return Router.instance;
    }
    Parse(format, data) {
        const rex = /({([^^}]*)})(.?)/g;
        const formatRex = new RegExp(format.replace(rex, "(?<$2>[^\\$3])$3").replace("[^\\]", ".*"), "g");
        const matches = formatRex.exec(data);
        return matches?.groups;
    }
    defaultRouteHandler;
    HandleRout(hash) {
        this.routeMappings.forEach((val, key) => {
            if (new RegExp(key).test(hash)) {
                const params = this.Parse(key, hash);
                const route = this.routeMappings.get(key);
                const func = route.func;
                if (func) {
                    func(params ? params : {});
                }
                else {
                    const tag = window.Omnicatz.Components.GetTagByCtrName(route.ctrName);
                    this.defaultRouteHandler(tag, params ? params : {});
                }
            }
        });
    }
    ;
    routeMappings = new Map();
}
export function Route(path) {
    return (ctor) => {
        Router.Instance.routeMappings.set(path, new Routmappinng(ctor.name));
    };
}
//# sourceMappingURL=Router.js.map