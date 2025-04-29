var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ApiView_1;
import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { JSX, __frag } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router.js";
let ApiView = ApiView_1 = class ApiView extends BaseComponent {
    Name;
    #data;
    constructor() {
        super();
        this.load().then(data => {
            this.#data = data;
            ;
            console.log(data);
            this.Render();
        });
    }
    async load() {
        const request = await fetch(location.origin + "/doc.json");
        return await request.json();
    }
    makeContainer() {
        return this.makeContainerDefault(ApiView_1, { class: "ApiView" });
    }
    SetParam(name, value) {
        if (name === "section") {
            window.document.title = value;
        }
    }
    View() {
        if (!this.#data)
            return JSX("div", null);
        const presentProperties = (n) => {
            if (!n.children || n.children.length === 0) {
                return JSX(__frag, null);
            }
            return JSX("ul", null, ...n.children.map(n => JSX("li", null,
                n.flags.isPublic ? "public " : "",
                n.flags.isProtected ? "protected " : "",
                n.flags.isPrivate ? "private " : "",
                n.flags.isAbstract ? " abstract " : "",
                n.name)));
        };
        const presentClass = (n) => {
            if (!n.children || n.children.length === 0) {
                return JSX(__frag, null);
            }
            return JSX("ul", null, ...n.children.map(n => JSX("li", null,
                n.name,
                " ",
                presentProperties(n))));
        };
        const presentFile = (n) => {
            return JSX("li", null,
                n.name,
                " from ",
                n.sources.map(n => n.fileName).join(","),
                presentClass(n));
        };
        return JSX("ul", null,
            " ",
            ...this.#data?.children?.map(n => presentFile(n)));
    }
};
ApiView = ApiView_1 = __decorate([
    Route("#api"),
    Route("#api/{section}"),
    Component("api-view"),
    __metadata("design:paramtypes", [])
], ApiView);
export { ApiView };
//# sourceMappingURL=ApiView.js.map