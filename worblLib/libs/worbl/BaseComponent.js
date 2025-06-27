import { IOC } from "./IOC.js";
import { IComponentRegistry } from "./types.js";
export function GetComponent(queryString) {
    return document.querySelector(queryString).Component;
}
export class BaseComponent {
    Model;
    #container;
    #id;
    get Id() {
        return this.#id;
    }
    set Id(val) {
        this.#id = val;
    }
    get Container() {
        return this.#container;
    }
    constructor() {
        this.#container = this.makeContainer();
        this.Container.Component = this;
    }
    IsInitialized = false;
    children;
    SetChildren(children) {
        this.children = children;
    }
    makeContainerDefault(ctr, params = { tagType: undefined, class: undefined }) {
        this.Id = crypto.randomUUID();
        ;
        const componentRegistry = IOC.Instance.Service(IComponentRegistry);
        /*optional params --> */
        const element = document.createElement(params.tagType ?? "div");
        if (params.class) {
            element.className = params.class;
        }
        /*<-- optional params  */
        const tag = componentRegistry.GetTag(ctr);
        if (tag === undefined) {
            throw Error("Tag is undefined failed to create container");
        }
        element.setAttribute("data-tagtype", tag);
        element.id = this.Id;
        return element;
    }
    baseSetParam(name, value) {
    }
    Render() {
        this.#container.innerHTML = "";
        const view = this.View();
        if (view !== null) {
            this.#container.appendChild(view);
        }
    }
}
//# sourceMappingURL=BaseComponent.js.map