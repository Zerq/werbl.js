import { ReactNode } from "react";
import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { CSS } from "../../libs/worbl/CSS.js";
import { JSX } from "../../libs/worbl/JSX.js";
type CodeModel = { conent:string, langage:string };


export declare type Code = (content:string, lang:string)=> ReactNode;

@Component("source-code")
@CSS("../../components/Code/Code.css")
export class SourceCode extends BaseComponent<CodeModel> {
    public constructor() {
        super();
        this.model = { conent:"", langage: "none" };
        this.Render();
    }

    public SetParam(name: string, value: any) {
        if (name.toLowerCase() === "content") {
            this.model.conent = value;
        }
        if (name.toLowerCase() === "lang") {
            this.model.langage = value;
        }
        this.Render();
    }

    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(SourceCode, { class:"navMenu"});
    }

    protected View(): HTMLElement {
        return <code className={"Code " + this.model.langage}>{this.model.conent}</code>;
    }
}