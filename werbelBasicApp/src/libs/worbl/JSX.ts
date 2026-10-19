import { IOC } from "./IOC.js";
import { IComponentRegistry } from "./types.js";


/*
i am trying to mimic react rather then use the react-jsx mode since i could never figure out how to set the intrincic Element stuff but for some annoying reason i cant get Fragment to really detect... it end up being undefined for some reason..
currently i am just detecting if its undefined and if so is children not null.. and then assuming that means fragment which seam to mostly work out... this may yield a silent bug if you forget to register an element properly... maybe... need testing
recently also changed htmlelement stuff to a anyelement type... this kinda mirror the JSXElement stuff react used i suppose... but it seamed nessesary it did make things a bit more akward... might try to ommit the type where i can idk...
*/

class jsxContext {
    static nameSpace: string | undefined = undefined;
}

export const Fragment = Symbol.for("React.Fragment"); //not sure why this thing is not landing like it should.... this should be getting inserted where <></> are used in place of the tag...

export type AnyElement = string | boolean | number | bigint | Date | HTMLElement | Element | DocumentFragment | Array<AnyElement>;

const appendAny = (root: Element, elm: AnyElement) => {
    const type = typeof (elm);

    if (type === "object") {
        const proto = Object.getPrototypeOf(elm).constructor.name;
        if (proto === "Array") {
            (elm as unknown as Array<AnyElement>).forEach(n => {
                appendAny(root, n);
            });
            return;
        }

        if (proto === "Date") {
            root.appendChild(document.createTextNode((elm as Date).toString()));
            return;
        }
    }

    if (type === "string") {
        root.appendChild(document.createTextNode(elm as string));
        return;
    }

    if (type === "number") {
        root.appendChild(document.createTextNode(elm + ""));
        return;
    }

    if (type === "bigint") {
        root.appendChild(document.createTextNode(elm + ""));
        return;
    }
    if (type === "boolean") {
        root.appendChild(document.createTextNode(elm + ""));
        return;
    }

    root.appendChild((elm as HTMLElement));
};

export namespace React {

    export function createElement(tag: string, attributes: { [name: string]: any; }, ...children: Array<string | number | boolean | bigint | Date | HTMLElement>): AnyElement {
        const componentRegistry = IOC.Instance.Service(IComponentRegistry);


        if (tag === "xml-namespace") {
            jsxContext.nameSpace = children[0] as string;

            if (jsxContext.nameSpace === "") {
                jsxContext.nameSpace = undefined;
            }

            return [];
        }


        if (tag === undefined && children) { //fragment detection does not work for some reason using this work around for now... this may treat unregistered component like a fragment...  
            //   if (tag as any === Fragment) {
            const docFrag = document.createDocumentFragment();
            children.forEach(child => {
                if (!child) {
                    return;
                }
                appendAny(docFrag as unknown as HTMLElement, child);
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

        let newElement: Element | undefined;

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

            appendAny(newElement, elm);

        });
        return newElement;
    }



    export namespace JSX {
        function SetNameSpace(namespace: string) {
            jsxContext.nameSpace = namespace;
        }


        export interface IntrinsicElements {
            [name: string]: any;
        }
    }
}


export function SetNameSpace(namespace: string | undefined) {
    jsxContext.nameSpace = namespace;
}
