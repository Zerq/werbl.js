import { JSX, __frag } from "./libs/worbl/JSX.js"
import { CSS } from "./libs/worbl/CSS.js"
import "./libs/worbl/types.js"
import "./libs/worbl/JSX.js"
import "./libs/worbl/Router.js";
import "./libs/worbl/MetaData.js";
import { RouterLike } from "./libs/worbl/types.js";
import { Component } from "./libs/worbl/Component.js";
import "./libs/worbl/Components/NavMenu/NavMenu.js";
import { LinkLike } from "./libs/worbl/Components/NavMenu/NavMenu.js";
import { BasicAppRoot } from "./libs/worbl/BasicApproot.js";
import "./Views/Home/HomeView.js";
import "./Views/about/AboutView.js";
import { Router } from "./libs/worbl/Router.js";

@CSS("/layout.css")
@Component("my-app")
export class AppComponent extends BasicAppRoot {
    public Route(router: RouterLike) {
    }

    protected menuItems: LinkLike[] = [{ Name: "Home", Url: "#home" }, { Name: "About", Url: "#about" }]

    public constructor() {
        super();
        this.setInitialView("#home")
        Router.Instance.defaultRouteHandler = (tag, params) => {
            this.renderView(tag, params, []);
        };
    }

    protected View(): HTMLElement {
        return <>
            <nav-box title="My Test App" items={this.menuItems}></nav-box>
            <main class="MyApp">
            </main>
        </>;
    }
}

(() => {
    document.body.appendChild(<my-app></my-app>);
})();