import { BaseComponent } from "../../BaseComponent.js";
import { Component } from "../../Component.js";
import { React } from "../../JSX.js";
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
    protected ViewAsync?: () => Promise<HTMLElement>;
    protected makeContainer(): HTMLElement {
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
            this.Container.setAttribute("data-orientation", this.Model);
        }
    }

    protected View(): HTMLElement {
        if (typeof (this.children) === "object" && Object.getPrototypeOf(this.children).constructor.name === "Array") {
            return <>{...this.children}</>;
        }

        return <div></div>;
    }
}