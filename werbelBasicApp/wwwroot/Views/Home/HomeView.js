var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HomeView_1;
import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { JSX } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router.js";
let HomeView = HomeView_1 = class HomeView extends BaseComponent {
    Name;
    constructor() {
        super();
        this.model = {
            checked: true,
            list: [{ burklax: 3, blarg: true, splarg: "hello" }, { burklax: 23, blarg: false, splarg: "zog zog zog" }, { burklax: 223, blarg: true, splarg: "weeee" }]
        };
        this.Render();
    }
    makeContainer() {
        return this.makeContainerDefault(HomeView_1, { class: "HomeView" });
    }
    SetParam(name, value) {
        if (name === "Name") {
            this.Name = value;
        }
    }
    changed(e) {
        console.log("checkbox changed to " + e.detail);
    }
    View() {
        return JSX("div", null,
            JSX("h2", null, "What is Werbl"),
            JSX("p", null,
                "Its a nonsense word i came up with.",
                JSX("br", null),
                "Its my low dependency frontend library.",
                JSX("br", null),
                JSX("br", null),
                "Basically the goal is to make things as simple as possible and ideally make the source code always avalible and very easy to read and understand.",
                JSX("br", null),
                "if people look at it and go wait this is so fucking simple i could write this shit.",
                JSX("br", null),
                JSX("br", null),
                "that yay! that is what i was aiming for.",
                JSX("br", null),
                "Ideally it should be so simple it can be re-writen from scratch in a week or two.. that may not be entierly achivable but hey best attempt.",
                JSX("br", null),
                "Jquery becase redundant as web tech moved on this project is basically here to see how far of are we from making thing like react and angular redundant.",
                JSX("br", null),
                JSX("br", null),
                "or at least so simple to recreate yourself that its near redundant.",
                JSX("br", null)));
    }
};
HomeView = HomeView_1 = __decorate([
    Route("#home"),
    Component("home-view"),
    __metadata("design:paramtypes", [])
], HomeView);
export { HomeView };
//# sourceMappingURL=HomeView.js.map