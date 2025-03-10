import { Component } from "../../Component.js";
import { CSS } from "../../CSS.js";
import { BaseComponent, JSX } from "../../JSX.js"

export interface LinkLike {
    Name: string;
    Url: string;
}

export interface MenuDataLike {
    Items: Array<LinkLike>;
    Title: string;
}

@Component("nav-box")
@CSS("/libs/worbl/Components/NavMenu/NavMenu.css")
export class NavMenu extends BaseComponent<MenuDataLike> {
    public constructor() {
        super();
        this.model = { Title: "", Items: [] };
        this.Render();
    }
    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(NavMenu, { class:"navMenu"});
    }

    public SetParam(name: string, value: any) {
        if (name.toLowerCase() === "title") {
            this.model.Title = value;
        }
        if (name.toLowerCase() === "items") {
            this.model.Items = value;
        }
        this.Render();
    }

    protected View(): HTMLElement {
        return <header> 
            <img class="logo" src="./assets/worbl.svg" alt="logo" />
            <h1>  {this.model.Title}</h1>
            <nav>
                <ul>
                    {...this.model.Items.map(n => <li><a href={n.Url}>{n.Name}</a></li>)}
            </ul>
        </nav>
        </header >;
    }
}