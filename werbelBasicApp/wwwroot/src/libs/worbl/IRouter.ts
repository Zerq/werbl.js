import { PsudoInterface } from "./PsudoInterface.js";
import { ParamsObj } from "./Router.js";
import { Routmappinng } from "./Routmappinng.js";



export abstract class IRouter extends PsudoInterface {
    private constructor() { super(); }
    public defaultRouteHandler?: (tag, params: ParamsObj) => void;
    public abstract HandleRout(hash: string): void;
    public abstract routeMappings: Map<string, Routmappinng>;
}
