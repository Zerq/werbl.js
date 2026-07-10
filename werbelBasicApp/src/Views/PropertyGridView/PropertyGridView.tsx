import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { React } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router";





@Route("#propGrid")
@Component("propgrid-view")
export class PropertyGridView extends BaseComponent<Object>{
    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(PropertyGridView,{class: "propertyGridView"});
    }




    public SetParam(name: string, value: any): void {
    }

    protected View(): HTMLElement {
        return <></>;
    }
    
}