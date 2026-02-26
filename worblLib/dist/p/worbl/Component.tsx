import { IOC } from "./IOC";
import { BaseComponent } from "./BaseComponent";
import { Ctr, IComponentRegistry } from "./types";

export function Component<V, T extends BaseComponent<V>>(tagName: string) {
    return (ctor: Ctr<T>) => {
        IOC.Instance.Service(IComponentRegistry).RegisterElement(tagName, ctor);
    };
}