import { BaseComponent } from "./JSX.js";
import { Ctr } from "./types";
export type ParamsObj = { [key: string]: string };

export class Routmappinng {
    public constructor(public ctrName: string, public func?: (params: ParamsObj) => void) { }
}

export class Router {
    public static instance: Router;

    public static get Instance(): Router {
        if (!Router.instance) {
            Router.instance = new Router()
        }
        return Router.instance;
    }
    private Parse(format: string, data: string): ParamsObj {
        const rex = /({([^^}]*)})(.?)/g;
        const formatRex = new RegExp(format.replace(rex, "(?<$2>[^\\$3])$3").replace("[^\\]", ".*"), "g");
        const matches = formatRex.exec(data)
        return matches?.groups;
    }

    public defaultRouteHandler?: (tag, params: ParamsObj) => void;

    public HandleRout(hash: string) {
        this.routeMappings.forEach((val: Routmappinng, key: string) => {
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
    };

    public routeMappings: Map<string, Routmappinng> = new Map();
}

export function Route<V, T extends BaseComponent<V>>(path: string) {
    return (ctor: Ctr<T>) => {
        Router.Instance.routeMappings.set(path, new Routmappinng(ctor.name));
    };
}
