var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SourceCode_1;
import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { CSS } from "../../libs/worbl/CSS.js";
import { JSX } from "../../libs/worbl/JSX.js";
let SourceCode = SourceCode_1 = class SourceCode extends BaseComponent {
    constructor() {
        super();
        this.model = { conent: "", langage: "none" };
        this.Render();
    }
    SetParam(name, value) {
        if (name.toLowerCase() === "content") {
            this.model.conent = value;
        }
        if (name.toLowerCase() === "lang") {
            this.model.langage = value;
        }
        this.Render();
    }
    makeContainer() {
        return this.makeContainerDefault(SourceCode_1, { class: "navMenu" });
    }
    View() {
        return JSX("code", { className: "Code " + this.model.langage }, this.model.conent);
    }
};
SourceCode = SourceCode_1 = __decorate([
    Component("source-code"),
    CSS("../../components/Code/Code.css"),
    __metadata("design:paramtypes", [])
], SourceCode);
export { SourceCode };
//# sourceMappingURL=Code.js.map