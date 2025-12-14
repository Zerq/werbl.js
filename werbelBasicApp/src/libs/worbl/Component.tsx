import { IOC } from "./IOC.js";//[[ts]]
import { BaseComponent } from "./BaseComponent.js";//[[ts]]
import { Ctr, IComponentRegistry } from "./types.js";//[[ts]]

export function Component<V, T extends BaseComponent<V>>(tagName: string) {
    return (ctor: Ctr<T>) => {
        IOC.Instance.Service(IComponentRegistry).RegisterElement(tagName, ctor);
    };
}