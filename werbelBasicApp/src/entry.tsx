
import { IOC } from "./libs/worbl/IOC.js";
import "./libs/worbl/MetaData.js";
import "./libs/worbl/ComponentRegistry.js";
import "./libs/worbl/Router.js";
import "./libs/worbl/JSX.js"

import { JSX, __frag } from "./libs/worbl/JSX.js"
import { CSS } from "./libs/worbl/CSS.js"

import { Component } from "./libs/worbl/Component.js";
import "./libs/worbl/Components/NavMenu/NavMenu.js";
import "./libs/worbl/Components/Box/Box.js";
import "./libs/worbl/Components/TabView/TabView.js";


import { LinkLike, LogoPosition, BrandingDisplayMode, TitleSize } from "./libs/worbl/Components/NavMenu/NavMenu.js";

import "./components/FormatCode/FormatCode.js";

import { BasicAppRoot } from "./libs/worbl/BasicApproot.js";
import "./Views/Home/HomeView.js";
import "./Views/Components/ComponentsView.js";
import "./Views/NameSpaceShifting/NameSpaceShifting.js";


import { IRouter } from "./libs/worbl/types.js";

@CSS("/layout.css")
@Component("my-app")
export class AppComponent extends BasicAppRoot {
    public Route(router: IRouter) {
    }

    protected menuItems: LinkLike[] =
        [
            { Name: "Home", Url: "#home" },
            { Name: "Namespace changing", Url: "#changens" },
            { Name: "Components", Url: "#components" },
            {
                Name: "Invert", action: (e: Event) => {
                    e.preventDefault();
                    if (document.body.style.filter === "") {
                        document.body.style.filter = "invert()";
                    } else {
                        document.body.style.filter = "";
                    }
                }
            },
            {
                Name: "Sepia", action: (e: Event) => {
                    e.preventDefault();
                    if (document.body.style.filter === "") {
                        document.body.style.filter = "sepia(1)";
                    } else {
                        document.body.style.filter = "";
                    }
                }
            }
        ];

    public constructor() {
        super();
        this.setInitialView("#home")
        IOC.Instance.Service(IRouter).defaultRouteHandler = (tag, params) => {
            this.renderView(tag, params, []);
        };
    }

    protected View(): HTMLElement {
        const displaymode: BrandingDisplayMode = "IconOnly"
        const position: LogoPosition = "Below";
        const titlesize: TitleSize = "N";

        return <>
            <navbox
                displaymode={displaymode}
                position={position}
                titlesize={titlesize}
                title="My Test App"
                logo="./assets/worbl.svg"
                items={this.menuItems} ></navbox>
            <main class="MyApp">
            </main>
        </>
    }
}

(() => {
    document.body.appendChild(<my-app></my-app>);
})();