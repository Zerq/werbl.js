import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { Frame } from "../../libs/worbl/frame.js";
import { React } from "../../libs/worbl/JSX.js";
import { CSS } from "../../libs/worbl/CSS.js";
import { EditorBase } from "./EditorBase.js";
import { AbsCtr, IComponentRegistry } from "../../libs/worbl/types.js";
import { IOC } from "../../libs/worbl/IOC.js";



@CSS("./PropertyGrid.css", import.meta)
@Component("property-grid")
export class PropertyGrid extends BaseComponent<any> {
    #componentRegistry = IOC.Instance.Service(IComponentRegistry);

    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(PropertyGrid, { class: "PropertyGrid" });
    }

    public Editors: Map<string, AbsCtr<EditorBase<unknown>>> = new Map();

    public SetParam(name: string, value: any): void {
        if (name.toLocaleLowerCase() === "model") {
            this.Model = value;
        }
        if (name.toLocaleLowerCase() === "editors" && typeof value === "object" && Object.getPrototypeOf(value) === Map.prototype) {
            this.Editors = value;
        }


        this.RenderAsync().then;

    }


    protected readonly ViewAsync = async () => {
        if (this.Editors && this.Model) {

            let items: Array<{ Name: string, Value: unknown, Type: string }> = [];
            for (let prop in this.Model) {
                let val = this.Model[prop];
                let type = typeof (val);

                if (type === "object") {
                    type = Object.getPrototypeOf(val).constructor.name;
                }
                items.push({ Name: prop, Value: val, Type: type });
            }

            return <dl>
                {...items.map((n, index) => {


                    //this is ugly refactor later to be less hadockeny
                    if (this.Editors.has(n.Type)) {
                        const editorName = this.Editors.get(n.Type)!.name;
                        const tagName = this.#componentRegistry.GetTagByCtrName(editorName);
                        if (tagName) {
                            const tag = this.#componentRegistry.CreateElement(tagName, { Model: n.Value, id: n.Type + "_" + index }, []);
                            if (tag){
                                return <><dt>{n.Name}</dt><dd>{tag.Render()}</dd></>;
                            }
                        }
                    }

                    switch (n.Type) {
                        case "string": return <><dt>{n.Name}</dt><dd><input key={index} name={n.Name} value={n.Value} /></dd></>;
                        case "number": return <><dt>{n.Name}</dt><dd><input type="number" key={index} name={n.Name} value={n.Value} /></dd></>;
                        case "checkbox": return <><dt>{n.Name}</dt><dd><input type="boolean" key={index} name={n.Name} value={n.Value} /></dd></>;
                        case "date": return <><dt>{n.Name}</dt><dd><input key={index} name={n.Name} value={n.Value} /></dd></>;
                        case "BigInt": return <><dt>{n.Name}</dt><dd><input type="number" key={index} name={n.Name} value={n.Value} /></dd></>;
                    }

                    return <></>;
                })}
            </dl>;

        }


        return <dl>

        </dl>;


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