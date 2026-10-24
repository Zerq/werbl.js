import { React } from "./JSX.js";
import { BaseComponent } from "./BaseComponent.js";
import { Ctr } from "./types.js";
import { CSSProperties, ReactElement, ReactNode } from "react";



export function Header<V, T extends BaseComponent<V>>(element:ReactNode) {
    return (ctor: Ctr<T>) => {
        const elm = element as unknown as HTMLElement;
        const possiblecss = document.getElementById(elm.id);
        if (!possiblecss) {
            document.head.appendChild(element as unknown as HTMLElement);
        }
    };
}

export function CSS<V, T extends BaseComponent<V>>(href: string, meta?: ImportMeta) {

    if (!meta || !meta.resolve) {
        return (ctor: Ctr<T>) => {
            const possiblecss = document.querySelectorAll(`link[rel="stylesheet"][href="{href}"]`);
            if (possiblecss.length === 0) {
                document.head.appendChild(<link rel="stylesheet" href={location.origin + href} />);
            }
        };
    }

    const url = (meta as any).resolve(href) as string;

    if (url.startsWith("http")){
        return (ctor: Ctr<T>) => {
            const possiblecss = document.querySelectorAll(`link[rel="stylesheet"][href="{url}"]`);
            if (possiblecss.length === 0) {
                document.head.appendChild(<link rel="stylesheet" href={url} />);
            }
        };
    }

    return (ctor: Ctr<T>) => {
        const possiblecss = document.querySelectorAll(`link[rel="stylesheet"][href="{href}"]`);
        if (possiblecss.length === 0) {
            document.head.appendChild(<link rel="stylesheet" href={href} />);
        }
    };
}