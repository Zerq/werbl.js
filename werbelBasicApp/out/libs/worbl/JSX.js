"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.React = exports.Fragment = void 0;
exports.SetNameSpace = SetNameSpace;
const IOC_js_1 = require("./IOC.js");
const types_js_1 = require("./types.js");
class jsxContext {
}
jsxContext.nameSpace = undefined;
exports.Fragment = Symbol.for("react.fragment");
var React;
(function (React) {
    function createElement(tag, attributes, ...children) {
        const metaData = IOC_js_1.IOC.Instance.Service(types_js_1.IMetaDataService);
        const componentRegistry = IOC_js_1.IOC.Instance.Service(types_js_1.IComponentRegistry);
        if (tag === "xml-namespace") {
            jsxContext.nameSpace = children[0];
            if (jsxContext.nameSpace === "") {
                jsxContext.nameSpace = undefined;
            }
            return;
        }
        if (tag === exports.Fragment) {
            const docFrag = document.createDocumentFragment();
            children.forEach(child => {
                if (!child) {
                    return;
                }
                const type = metaData.Get(child);
                if (type.Name === "string") {
                    docFrag.appendChild(document.createTextNode(child));
                    return;
                }
                if (type.Name === "number") {
                    docFrag.appendChild(document.createTextNode(child + ""));
                    return;
                }
                if (type.Name === "bigint") {
                    docFrag.appendChild(document.createTextNode(child + ""));
                    return;
                }
                if (type.Name === "boolean") {
                    docFrag.appendChild(document.createTextNode(child + ""));
                    return;
                }
                if (type.Name === "Date") {
                    docFrag.appendChild(document.createTextNode(child.toString()));
                    return;
                }
                docFrag.appendChild(child);
            });
            return docFrag;
        }
        if (componentRegistry.Has(tag)) {
            const newElement = componentRegistry.CreateElement(tag, attributes, children);
            if (newElement === undefined) {
                throw new Error("");
            }
            return newElement.Container;
        }
        let newElement;
        if (jsxContext.nameSpace === undefined) {
            newElement = document.createElement(tag);
        }
        if (jsxContext.nameSpace !== undefined) {
            newElement = document.createElementNS(jsxContext.nameSpace, tag);
        }
        if (newElement === undefined) {
            throw new Error("could not create element");
        }
        for (const key in attributes) {
            if (key.startsWith("on")) {
                newElement.addEventListener(key.substring(2).toLowerCase(), attributes[key]);
                continue;
            }
            newElement.setAttribute(key, attributes[key]);
        }
        children.forEach(elm => {
            if (!elm) {
                return;
            }
            const type = metaData.Get(elm);
            if (type.Name === "string") {
                let txt = elm.replace(`
`, "\n");
                newElement.appendChild(document.createTextNode(txt));
                return;
            }
            if (type.Name === "number") {
                newElement.appendChild(document.createTextNode(elm + ""));
                return;
            }
            if (type.Name === "bigint") {
                newElement.appendChild(document.createTextNode(elm + ""));
                return;
            }
            if (type.Name === "boolean") {
                newElement.appendChild(document.createTextNode(elm + ""));
                return;
            }
            if (type.Name === "Date") {
                newElement.appendChild(document.createTextNode(elm.toString()));
                return;
            }
            if ((elm.then) !== undefined) {
                elm.then((x) => {
                    newElement.appendChild(x);
                });
            }
            else {
                newElement.appendChild(elm);
            }
        });
        return newElement;
    }
    React.createElement = createElement;
    let JSX;
    (function (JSX) {
        function SetNameSpace(namespace) {
            jsxContext.nameSpace = namespace;
        }
    })(JSX = React.JSX || (React.JSX = {}));
})(React || (exports.React = React = {}));
function SetNameSpace(namespace) {
    jsxContext.nameSpace = namespace;
}
