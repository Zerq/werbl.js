import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { JSX } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router.js";

@Route("#components")
@Route("#components/{tab}")
@Component("components-view")
export class ComponentsView extends BaseComponent<unknown> {
    Name: string;
    public constructor() {
        super();

        this.Render();
    }

    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(ComponentsView, { class: "AboutView" });
    }

    public SetParam(name: string, value: any) {
        if (name === "tab") {
            window.document.title = value;
        }
    }

    protected View(): HTMLElement {
        return <tabview>
            <article title="tabview Code">
                <format-code text={`<tabview>
    <article title="tabview Code">
        test 123
    </article>

    <article title="box ui">
        123 test
    </article>
</tabview>`}></format-code>
            </article>

            <article title="box ui example 1">
                <box orientation="W">
                    <box orientation="H"><div>item1</div><div>item2</div><div>item3</div></box>
                    <format-code text={`<box orientation="H">
    <div>item1</div>
    <div>item2</div>
    <div>item3</div>
</box>`}></format-code>
                </box>
            </article>

<article title="box ui example 2">
                <box orientation="W">
                    <box orientation="H"><div>item1</div><div>item2</div><div class="spring">item3</div></box>
                    <format-code text={`<box orientation="H">
    <div>item1</div>
    <div>item2</div>
    <div class="spring">item3</div>
</box>`}></format-code>
                </box>
            </article>

            <article title="box ui example 3">
                         <box orientation="W">
                            <div>item1</div>
                            <div>item1</div>
                            <div>item1</div>
                         </box>
                        <format-code text={`<box orientation="W">
    <div>item1</div>
    <div>item2</div>
    <div>item3</div>
</box>`}></format-code>
            </article>
        </tabview>
    }
}




