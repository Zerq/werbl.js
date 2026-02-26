import { Header } from "../../libs/worbl/CSS.js";
import { Component } from "../../libs/worbl/Component.js";
import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { React } from "../../libs/worbl/JSX.js";;

@Header(<style type="text/css">{`
.formatedCode {
    white-space: pre-wrap;
    background-color: var(--darkBoxBg);
    color: var(--darkBoxfore);
    display: block;
    width: fit-content;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-block: 0.5rem;

    
}`}</style>)
@Component("format-code")
export class FormatCode extends BaseComponent<string> {
    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(FormatCode, { tagType: "code", class: "formatedCode" });
    }

    public SetParam(name: string, value: any) {
        if (name === "text") {
            this.Model = value;
        }

        if (this.IsInitialized) {
            this.Render();
        }
    }

    protected View(): HTMLElement {
        if (!this.Model) {
            return <span></span>;
        }

        return <>{this.Model}</>;
    }
}
