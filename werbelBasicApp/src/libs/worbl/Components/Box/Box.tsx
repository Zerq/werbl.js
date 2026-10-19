import { BaseComponent } from "../../BaseComponent.js";
import { Component } from "../../Component.js";
import { AnyElement, React } from "../../JSX.js";
import { Header } from "../../CSS.js";

declare type Orientation = "Vertical" | "Horizontal" | "V" | "H";

@Header(<style id="Box.css" type="text/css">{`
.Box {
    width: 100%;
    height: 100%;
}

.Box[data-orientation=Horizontal], .Box[data-orientation=H] {
    display: flex;
    flex-direction:row;
}

.Box[data-orientation=Vertical], .Box[data-orientation=V] {
    display: flex;
    flex-direction:column;
}

.Box>* {     
    flex: auto;
}
.Box>.spring {     
    flex-grow: 100;
}
    `}</style>)
@Component("box")
export class Box extends BaseComponent<Orientation> {
    protected ViewAsync?: () => Promise<AnyElement>;
    protected makeContainer(): AnyElement {
        const defaultOrientation: Orientation = "Vertical";
        const result = this.makeContainerDefault(Box, { "class": "Box", "data-orientation": defaultOrientation } as any);
        if (result === undefined){
            throw Error("failed to make default container");
        }
        return result;

    }

    public SetParam(name: string, value: any) {
        if (name === "orientation") {
            this.Model = value as Orientation;
            (this.Container as HTMLElement).setAttribute("data-orientation", this.Model);
        }
    }

    protected View(): AnyElement {
        if (typeof (this.children) === "object" && Object.getPrototypeOf(this.children).constructor.name === "Array") {
            const collection = new Array<AnyElement>();
            this.children.forEach(n=> {
                if (typeof(n) === "object" && Object.getPrototypeOf(n).constructor.name  ==="Array"){
                    collection.push(...(n as Array<AnyElement>));
                }

                collection.push(n);
            });
            return collection;
        }

        return <></>;
    }
}