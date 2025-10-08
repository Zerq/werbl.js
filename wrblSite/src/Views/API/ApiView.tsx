import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { JSX, __frag } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router.js";


@Route("#api")
@Route("#api/{section}")
@Component("api-view")
export class ApiView extends BaseComponent<unknown> {
    Name: string;
    #data: any;
    public constructor() {
        super();

        this.load().then(data => {
            this.#data = data;;
            console.log(data);
            this.Render();
        });
    }

    private async load(): Promise<unknown> {
        const request = await fetch(location.origin + "/doc.json");
        return await request.json();
    }

    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(ApiView, { class: "ApiView" });
    }

    public SetParam(name: string, value: any) {
        if (name === "section") {
            window.document.title = value;
        }
    }

    protected View(): HTMLElement {
        if (!this.#data) return <div></div>;


 

        const presentProperties = (n: { children: Array<{ name: string, flags:{isPublic?:boolean, isProtected?:boolean, isPrivate?:boolean, isAbstract?:boolean, isStatic?:boolean},  children: any }> }) => {

            if (!n.children || n.children.length === 0) {
                return <></>;
            }

            return  <ul>{ ...n.children.map(n => 
            <li>
                {n.flags.isPublic?"public ": ""}
                {n.flags.isProtected?"protected ": ""}
                {n.flags.isPrivate?"private ": ""}
                {n.flags.isAbstract?" abstract ": ""}

                {n.name}
                
                </li>) }</ul>;
        };



        const presentClass = (n: { children: Array<{ name: string, children: any }> }) => {

            if (!n.children || n.children.length === 0) {
                return <></>;
            }

            return  <ul>{ ...n.children.map(n => <li>{n.name} {presentProperties(n)}</li>) }</ul>;
        };


        const presentFile = (n: { name: string, children: Array<any>, sources: Array<{ fileName: string }> }) => {
            return <li>{n.name} from {(n.sources.map(n => n.fileName) as Array<string>).join(",")}
                {presentClass(n)}

            </li>;
        };

        return <ul> {...this.#data?.children?.map(n => presentFile(n))}</ul>;
    }
}
