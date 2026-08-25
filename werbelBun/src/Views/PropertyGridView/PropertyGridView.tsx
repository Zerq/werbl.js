import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { React } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router.js";
import { ExampleUser, ExampleUserEditor } from "./editors/ExampleUserEditor.js";
import { EditorBase } from '../../components/PropertyGrid/EditorBase';
import { Ctr } from "../../libs/worbl/types.js";

export class Brok{
    public Name:string ="";
    public Title:string = "";
    public User?: ExampleUser;

}


@Route("#propGrid")
@Component("propgrid-view")
export class PropertyGridView extends BaseComponent<Brok>{

    public constructor(){
        super();
        this.Model = new Brok();
        this.Model.Name = "Zog";
        this.Model.Title = "Umbrella salesman";
        this.Model.User = new ExampleUser();
        this.Model.User.Age = 41;
        this.Model.User.Name ="Zog Zogson";
        this.Model.User.ShoeSize = 42;
        this.#editors = new Map<string, Ctr<EditorBase<unknown>>>();
 
        this.#editors.set(ExampleUser.name, ExampleUserEditor as Ctr<EditorBase<unknown>>);

    }

   #editors:Map<string, Ctr<EditorBase<unknown>>>;

    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(PropertyGridView,{class: "propertyGridView"});
    }




    public SetParam(name: string, value: any): void {
    }

    protected View(): HTMLElement {
        return <>
            <property-grid model={this.Model} editors={this.#editors} ></property-grid>
        </>;
    }
    
}