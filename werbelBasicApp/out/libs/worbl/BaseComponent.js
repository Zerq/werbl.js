"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _BaseComponent_container, _BaseComponent_id;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = void 0;
exports.GetComponent = GetComponent;
const IOC_js_1 = require("./IOC.js");
const types_js_1 = require("./types.js");
/**
 * @param queryString selector must point to a valid components container element
 * @returns instance of the component.
 */
function GetComponent(queryString) {
    const item = document.querySelector(queryString);
    if (!item) {
        return null;
    }
    if (item.Component === undefined) {
        return item;
    }
    return item.Component;
}
class BaseComponent {
    get Id() {
        if (__classPrivateFieldGet(this, _BaseComponent_id, "f") === undefined) {
            throw Error("Component Id not assigned before request!");
        }
        return __classPrivateFieldGet(this, _BaseComponent_id, "f");
    }
    set Id(val) {
        __classPrivateFieldSet(this, _BaseComponent_id, val, "f");
    }
    get Container() {
        return __classPrivateFieldGet(this, _BaseComponent_container, "f");
    }
    constructor() {
        _BaseComponent_container.set(this, void 0);
        _BaseComponent_id.set(this, void 0);
        this.IsInitialized = false;
        this.children = [];
        this.RenderAsync = async () => {
            __classPrivateFieldGet(this, _BaseComponent_container, "f").innerHTML = "";
            const view = await this.ViewAsync?.() ?? undefined;
            if (view === undefined) {
                return;
            }
            if (view !== null) {
                __classPrivateFieldGet(this, _BaseComponent_container, "f").appendChild(view);
            }
            requestAnimationFrame(() => {
                this.postRender?.();
            });
        };
        __classPrivateFieldSet(this, _BaseComponent_container, this.makeContainer(), "f");
        this.Container.Component = this;
    }
    SetChildren(children) {
        this.children = children;
    }
    makeContainerDefault(ctr, params = { tagType: undefined, class: undefined }) {
        this.Id = crypto.randomUUID();
        ;
        const componentRegistry = IOC_js_1.IOC.Instance.Service(types_js_1.IComponentRegistry);
        /*optional params --> */
        const element = document.createElement(params.tagType ?? "div");
        if (params.class) {
            element.className = params.class;
        }
        /*<-- optional params  */
        const tag = componentRegistry.GetTag(ctr);
        if (tag === undefined) {
            throw new Error(`MakeContainrDefault could not find the specified tag "${tag}"`);
        }
        element.setAttribute("data-tagtype", tag);
        element.id = this.Id;
        return element;
    }
    baseSetParam(name, value) {
    }
    Render() {
        __classPrivateFieldGet(this, _BaseComponent_container, "f").innerHTML = "";
        const view = this.View();
        if (view !== null) {
            __classPrivateFieldGet(this, _BaseComponent_container, "f").appendChild(view);
        }
        requestAnimationFrame(() => {
            this.postRender?.();
        });
    }
}
exports.BaseComponent = BaseComponent;
_BaseComponent_container = new WeakMap(), _BaseComponent_id = new WeakMap();
