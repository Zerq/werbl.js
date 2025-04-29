var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TechView_1;
import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { CSS } from "../../libs/worbl/CSS.js";
import { JSX } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router.js";
let TechView = TechView_1 = class TechView extends BaseComponent {
    Name;
    constructor() {
        super();
        this.Render();
    }
    makeContainer() {
        return this.makeContainerDefault(TechView_1, { class: "TechView" });
    }
    SetParam(name, value) {
        if (name === "section") {
            window.document.title = value;
        }
    }
    View() {
        return JSX("div", { class: "techStack" },
            JSX("section", null,
                JSX("h2", null, "Frontend"),
                JSX("h3", null, "Typescript"),
                JSX("h3", null, "Reactstyle templates"),
                JSX("p", null,
                    "In tsconfig.json setting",
                    JSX("br", null),
                    JSX("br", null),
                    JSX("source-code", { content: `"jsx": "react",
                        "jsxFactory": "JSX",
                        "jsxFragmentFactory": "__frag",`, lang: "json" }),
                    JSX("br", null),
                    "Allows us define our our JSX factory method.",
                    JSX("br", null),
                    JSX("br", null),
                    "In its simplest form this is a function like this",
                    JSX("br", null),
                    JSX("br", null),
                    JSX("source-code", { content: `function JSX(
                        tag: string,
                        attributes: { [name: string]: any; },
                        ...children: Array<string | number | boolean | bigint | Date | HTMLElement>): HTMLElement;`, lang: "typescript" }),
                    JSX("br", null),
                    "This function then flattens out and simplifies the dom manipulation into one method that then calls itself on children until it reaches out to all the leaf nodes."),
                JSX("h3", null, "ESM modules (either via the browser build in module support or via webpack)"),
                JSX("p", null,
                    "The native build in module loader requires that you use the ",
                    JSX("br", null),
                    JSX("source-code", { content: `import { JSX } from "./libs/worbl/JSX.js";`, lang: "typescript" }),
                    JSX("br", null),
                    "syntax and always include the file extension post transpilation."),
                JSX("h3", null, "IOC"),
                JSX("p", null,
                    "To make a IOC container solution i had to get a bit creative... interfaces in typescript lake any post-transpilation reality... pooof gone!",
                    JSX("br", null),
                    "So I utilize abstract classes which you can implement like if they where an interface i also made a psudo interface base class with a constructor that throws an error... and on top of that i also make the bloody constructor private on the extended version... (might be over kill...)"),
                JSX("source-code", { content: `export abstract class IRouter extends PsudoInterface {
    private constructor() { super(); }
    public defaultRouteHandler?: (tag, params: ParamsObj) => void;
    public abstract HandleRout(hash: string): void;
    public abstract routeMappings: Map<string, Routmappinng>;
}`, lang: "typescript" }),
                JSX("br", null),
                JSX("p", null,
                    "Part of the ida of using the psudo interface extension is also just to signal the intent.",
                    JSX("br", null),
                    JSX("br", null),
                    "I like to prefix my psudo interface is \"I\" and sufix my typescript inerfaces with \"like\" ",
                    JSX("br", null),
                    "because typescript intefaces really are not like regular interface and annot be used exactly the same way... ",
                    JSX("br", null),
                    "honestly i would have named them vaporfaces instead lol.. because they evaporate when you transpile the code...",
                    JSX("br", null),
                    JSX("br", null),
                    "All that said we can now implement our concrete implementations and use the IOC container.",
                    JSX("br", null),
                    JSX("source-code", { content: `@RegisterService(IRouter)
export class Router implements IRouter {`, lang: "typescript" }),
                    "We use the decorator to register a service to an interface ",
                    JSX("br", null),
                    "and we can then get the concrete instance via ",
                    JSX("br", null),
                    JSX("source-code", { content: `const router = IOC.Instance.Service(IRouter);`, lang: "typescript" }),
                    "The only tricky bit is we need to do a import with out deconstructor of the file the decorated class is in otherwise the decorator will not be run.",
                    JSX("br", null),
                    "Typically this is done in the entry point of the app.",
                    JSX("br", null),
                    JSX("source-code", { content: `import "./libs/worbl/Router.js";`, lang: "typescript" })),
                JSX("h3", null, "Component model and Registry"),
                JSX("p", null, "See api"),
                JSX("h3", null, "Router"),
                JSX("p", null, "See api")),
            JSX("section", null,
                JSX("h2", null, "Backend"),
                JSX("h3", null, "Dotnet9.0+")));
    }
};
TechView = TechView_1 = __decorate([
    Route("#tech"),
    Route("#tech/{section}"),
    Component("tech-view"),
    CSS("/Views/TechStack/TechStack.css"),
    __metadata("design:paramtypes", [])
], TechView);
export { TechView };
//# sourceMappingURL=TechStack.js.map