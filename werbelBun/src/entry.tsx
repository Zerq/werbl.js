
import { IOC } from "./libs/worbl/IOC.js";
import "./libs/worbl/MetaData.js";
import "./libs/worbl/ComponentRegistry.js";
import "./libs/worbl/Router.js";
import "./libs/worbl/JSX.js"

import { React } from "./libs/worbl/JSX.js"
import { CSS } from "./libs/worbl/CSS.js"

import { Component } from "./libs/worbl/Component.js";
import "./components/NavMenu/NavMenu.js";
import "./components/Box/Box.js";
import "./components/TabView/TabView.js";
import "./components/ListView/ListView.js";
import "./components/FileBrowser/FileBrowser.js";
import "./components/PropertyGrid/PropertyGrid.js"


 import "./Views/PropertyGridView/editors/ExampleUserEditor.js"

import { LinkLike, LogoPosition, BrandingDisplayMode, TitleSize } from "./components/NavMenu/NavMenu.js";

import "./components/FormatCode/FormatCode.js";

import { BasicAppRoot } from "./libs/worbl/BasicApproot.js";
import "./Views/Home/HomeView.js";
import "./Views/Components/ComponentsView.js";
import "./Views/NameSpaceShifting/NameSpaceShifting.js";
import "./Views/ListViewTest/ListViewTest.js";
import "./Views/PropertyGridView/PropertyGridView.js"

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
            { Name: "ListView test", Url: "#listview" },
            { Name: "Propertygrid test", Url: "#propGrid" },
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
            <div id="dialogContainer">
            </div>
        </>
    }
}

(() => {
    document.body.appendChild(<my-app></my-app>);
})();