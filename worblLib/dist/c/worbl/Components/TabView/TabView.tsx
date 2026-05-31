import { BaseComponent } from "../../BaseComponent.js";
import { Component } from "../../Component.js";
import { React } from "../../JSX.js";
import { Header } from "../../CSS.js";

@Header(<style id="TabView.css" type="text/css">{`.TabView {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: var(--back);
    color: var(--fore);
    
    ul {
        margin: 0rem;
        padding: 0rem;
        list-style: none;
        display: flex;
        flex-direction: row;
        background-color: var(--pageBg);

        li {
            width: fit-content;
            padding: 0.4rem;
            background-color: var(--back2);
            border-radius: 0.5rem;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            background-color: var(--backDarker);
            border: solid 0.1rem black;
            border-bottom: 0;
        }

    }

    .selected {
        background-color: var(--back);
        border: solid 0.1rem var(--backDarker);
        border-bottom: 0;
    }

    .content{
      border: solid 0.1rem black;
    }
}`}</style>)
//@CSS("/libs/worbl/Components/TabView/TabView.css")
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
                         return  <li class="selected" onClick={(e:MouseEvent) => this.#click(index)}>{(n as HTMLElement).title}</li>;
                        }else {
                             return  <li onClick={(e:MouseEvent) => this.#click(index)}>{(n as HTMLElement).title}</li>;
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