import { BaseComponent } from "../../BaseComponent.js";
import { Component } from "../../Component.js";
import { __frag, JSX } from "../../JSX.js";
import { CSS } from "../../CSS.js";

@CSS("./TabView.css", import.meta)
@Component("tabview")
export class TabView extends BaseComponent<number> {
    protected ViewAsync?: () => Promise<HTMLElement>;
    public constructor() {
        super();
        this.Model = 0;
    }

    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(TabView, { "class": "TabView" } as any);
    }
    
    public SetParam(name: string, value: any) {
        if (name === "index") {
            this.Model = value;
        }
    }

    readonly #click = (index: number) => {
        this.Model = index;
        this.Render();
    };

    protected View(): HTMLElement {

        if (typeof (this.children) === "object" && Object.getPrototypeOf(this.children).constructor.name === "Array") {
            return <>
                <ul>
                    {...this.children.map((n, index) => 
                    {
                        if (index === this.Model){
                         return  <li class="selected" onClick={e => this.#click(index)}>{(n as HTMLElement).title}</li>;
                        }else {
                             return  <li onClick={e => this.#click(index)}>{(n as HTMLElement).title}</li>;
                        }
                    }
                   )}
                </ul>
                <div class="content">
                {this.children[this.Model]}
                </div>
            </>;
        }
        return <></>;
    }
}