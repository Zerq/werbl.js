import { SourceCode } from "../../components/Code/Code.js";
import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { CSS } from "../../libs/worbl/CSS.js";
import { JSX } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router.js";

@Route("#tech")
@Route("#tech/{section}")
@Component("tech-view")
@CSS("/Views/TechStack/TechStack.css")
export class TechView extends BaseComponent<unknown> {
    Name: string;
    public constructor() {
        super();

        this.Render();
    }

    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(TechView, { class: "TechView" });
    }

    public SetParam(name: string, value: any) {
        if (name === "section") {
            window.document.title = value;
        }
    }

    protected View(): HTMLElement {
        return <div class="techStack">
            <section>
                <h2>Frontend</h2>
                <h3>Typescript</h3>
                <h3>Reactstyle templates</h3>
                <p>
                    In tsconfig.json setting<br />
                    <br />
                    <source-code content={`"jsx": "react",
                        "jsxFactory": "JSX",
                        "jsxFragmentFactory": "__frag",`} lang="json" />
                    <br />
                    Allows us define our our JSX factory method.<br />
                    <br />
                    In its simplest form this is a function like this<br />
                    <br />
                    <source-code content={`function JSX(
                        tag: string,
                        attributes: { [name: string]: any; },
                        ...children: Array<string | number | boolean | bigint | Date | HTMLElement>): HTMLElement;`} lang="typescript" /><br />

                    This function then flattens out and simplifies the dom manipulation into one method that then calls itself on children until it reaches out to all the leaf nodes.

                </p>
                <h3>ESM modules (either via the browser build in module support or via webpack)</h3>
                <p>
                    The native build in module loader requires that you use the <br />
                    <source-code content={`import { JSX } from "./libs/worbl/JSX.js";`} lang="typescript" /><br />
                    syntax and always include the file extension post transpilation.
                </p>


                <h3>IOC</h3>
                <p>
                    To make a IOC container solution i had to get a bit creative... interfaces in typescript lake any post-transpilation reality... pooof gone!<br />
                    So I utilize abstract classes which you can implement like if they where an interface i also made a psudo interface base class with a constructor that throws an error... and on top of that i also make the bloody constructor private on the extended version... (might be over kill...)
                </p>
                <source-code content={`export abstract class IRouter extends PsudoInterface {
    private constructor() { super(); }
    public defaultRouteHandler?: (tag, params: ParamsObj) => void;
    public abstract HandleRout(hash: string): void;
    public abstract routeMappings: Map<string, Routmappinng>;
}`} lang="typescript" /><br />
                <p>
                    Part of the ida of using the psudo interface extension is also just to signal the intent.<br />
                    <br />
                    I like to prefix my psudo interface is "I" and sufix my typescript inerfaces with "like" <br />
                    because typescript intefaces really are not like regular interface and annot be used exactly the same way... <br />
                    honestly i would have named them vaporfaces instead lol.. because they evaporate when you transpile the code...<br />
                    <br />
                    All that said we can now implement our concrete implementations and use the IOC container.<br />


                    

<source-code content={`@RegisterService(IRouter)
export class Router implements IRouter {`} lang="typescript" />
We use the decorator to register a service to an interface <br/>
and we can then get the concrete instance via <br/>

                    <source-code content={`const router = IOC.Instance.Service(IRouter);`} lang="typescript" />

                    The only tricky bit is we need to do a import with out deconstructor of the file the decorated class is in otherwise the decorator will not be run.<br/>
                    Typically this is done in the entry point of the app.<br/>
                 
                    <source-code content={`import "./libs/worbl/Router.js";`} lang="typescript" />

                </p>
                <h3>Component model and Registry</h3>
                <p>See api</p>
                <h3>Router</h3>
                <p>See api</p>
            </section>

            <section>
                <h2>Backend</h2>
                <h3>Dotnet9.0+</h3>

            </section>
        </div>;
    }
}
