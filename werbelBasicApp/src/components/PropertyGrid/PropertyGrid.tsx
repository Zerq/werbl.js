import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { Frame } from "../../libs/worbl/frame.js";
import { React } from "../../libs/worbl/JSX.js";
import { CSS } from "../../libs/worbl/CSS.js";
import { EditorBase } from "./EditorBase.js";



@CSS("./PropertyGrid.css", import.meta)
@Component("property-grid")
export class PropertyGrid extends BaseComponent<Object> {
    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(PropertyGrid, { class: "PropertyGrid" });
    }

    public Editors: Map<string, EditorBase<unknown>> = new Map();

    public SetParam(name: string, value: any): void {
        if (name.toLocaleLowerCase() === "model") {
            this.Model = value;
        }
        if (name.toLocaleLowerCase() === "editors") {
            this.Model = value;
        }


    }


    protected readonly ViewAsync = async () => {

    };

    protected View(): HTMLElement {

        const run = async () => {
            await Frame();
            await this.RenderAsync();
        };

        run().then();

        return <></>;
    }

}