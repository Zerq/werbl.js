import { CSS } from "../../libs/worbl/CSS.js";
import { Component } from "../../libs/worbl/Component.js";
import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { JSX, __frag } from "../../libs/worbl/JSX.js";

@CSS("./FormatCode.css", import.meta)
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
