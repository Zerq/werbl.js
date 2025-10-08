import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { JSX } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router.js";
import { CSS } from "../../libs/worbl/CSS.js";
import { PsudoInterface } from "../../libs/worbl/PsudoInterface.js";
import { FormatCode } from "../../components/FormatCode/FormatCode.js";
import { IRouter } from "../../libs/worbl/types.js";

type TestTypeItem = { burklax: number, blarg: boolean, splarg: string };

type TestType = {
    checked: boolean,
    list: Array<TestTypeItem>;
}

@CSS("./HomeView.css", import.meta)
@Route("#home")
@Component("home-view")
export class HomeView extends BaseComponent<TestType> {
    Name: string;

    public constructor() {
        super();
        this.Model = {
            checked: true,
            list: [{ burklax: 3, blarg: true, splarg: "hello" }, { burklax: 23, blarg: false, splarg: "zog zog zog" }, { burklax: 223, blarg: true, splarg: "weeee" }]
        };
        this.Render();
    }

    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(HomeView, { class: "HomeView" });
    }

    public SetParam(name: string, value: any) {
        if (name === "Name") {
            this.Name = value;

        }
        if (this.IsInitialized) {
            this.Render();
        }
    }

    changed(e: CustomEvent) {
        console.log("checkbox changed to " + e.detail)  
    }

    protected View(): HTMLElement {
        return <div>
            <h2>What is werbl.js</h2>
            <p>
                Werbl.js is an experimental fortned framework designed initially as an experiment to see how few depedencies on can utilize to get a modern conveient SPA development experience.<br />
                <br />
                the logic goes that JQuesry is now virtually obsolete because the core ecmascript api has advenced so far.. <br />
                So how close are we do doing that to all the existing frameworks out there.
                <br /><br />
                <h3>Werbl.js is composed of the following components</h3>
                <ol>
                    <li>
                        <strong>JSX factory: this is basically a function.</strong>

                        <format-code text={`function JSX(tag: string, attributes: { [name: string]: any; }; , ...children: Array&lt;string | number | boolean | bigint | Date | HTMLElement&gt;)`} ></format-code>

                        if configured propery typescript will translate tsx templates into calls for this function.
                        <br />
                        My implementation plugs this in to my custom component model.
                        <br /><br />
                        I would just used webcomponents and i have tried that previously but that technology is ultimately a bit of a dead end since it does not allow for proper tab ordering.
                    </li>
                    <li>
                        <strong>Inversion of control container (IOC)</strong>.
                        Typescipt annoying has rather flimsy purely fictional interfaces...
                        <br />
                        this made it rather hard to come up with a ioc container that did not rely on magic strings.
                        <br /><br />
                        that is until i realized that hey i can treat a class like an interface..
                        <br /><br />
                        I use a psudo interface class for this an abstract base class i inhereit from that also sabotages the constructor which i also set to private for good messure.
                        <br />
                        Basically go pound sand you looser your not instantiating this shit XD

                        <format-code text={`export abstract class SomethingLike extends PsudoInterface {
    private constructor() {
        super(); //a bit of overkill but if constructed it throws an error
    }

    abstract DoSometing(): Promise<boolean>;
    abstract SomethingSomething: number;
};

export class Something implements SomethingLike {
    public DoSometing(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });
    }

    public SomethingSomething: number;
}
`}>



                        </format-code>
                        <strong>IOC container API</strong>

                        <format-code text={`
IOC.Instance.RegisterCtr<T extends PsudoInterface>(abs: AbsCtr<T>, ctr: Ctr<T>):T;
IOC.Instance.RegisterService<T>(abs: AbsCtr<T>, inst: T): void;
IOC.Instance.New<T>(abs: AbsCtr<T>, ...params: unknown[]): T;
IOC.Instance.Service<T>(abs: AbsCtr<T>): T;`}></format-code>

                        AbsCtr represents an abstract constructor type.<br />
                        Ctr represent a constructor type.




                        <format-code text={`
    IOC.Instance.Service(IComponentRegistry)  //returns  ComponentRegistry instance

    //the component registry has the following methods
 
    RegisterElement<T>(tag: string, ctr: Ctr<BaseComponentLike<T>>): void;
  
    CreateElement<T, V extends BaseComponentLike<T>>(tag: string, params: { [name: string]: any; }, children: Array<string | boolean | number | bigint | Date | HTMLElement>): BaseComponentLike<V>| undefined;
   
    Has(tag): boolean;
   
    GetTag(ctr: Ctr<BaseComponentLike<any>>): string|undefined;
    
    GetTagByCtrName(ctrName: string): string|undefined;    
    `}></format-code>

                        Rather then calling the component Registry to register a component you would use the component decorator before the class
                        <br />

                        <format-code text={`@Component("home-view")`}></format-code>
                        @Component("home-view") <br /><br />
                        In this case registering the component name home-view i.e you would use a
                        <format-code text={`<home-view></home-view> // tag`}></format-code>

                    </li>
                    <li>

                        <format-code text={`@Route("#home")`}></format-code>
                        is used much like the component decorator but instead registers routes this also support parameter i.e

                        <format-code text={`#home/{id}`}></format-code>

                        which then feed into the

                        <format-code text={`SetParam(name: string, value: any)`}></format-code>
                        method which exist as part of the standard BaseComponent and its very much modled on how webcomponents work,<br />
                        I.e you identify the the name of the attribute being changed and then the value to be set...<br />

                        <format-code  text={`@CSS("./test.css", import.meta)
@Component("test")
export class testComponent extends BaseComponent<{ name?: string, age?: number }> {
    public constructor() {
        super();
        this.Model = {};
    }
    
    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(testComponent, { tagType: "div", class: "test123" })
    }
   
    public SetParam(name: string, value: any) {
        if (name === "name") {
            this.Model.name = value;
        }

        if (name === "age") {
            this.Model.name = value;
        }

        if (this.IsInitialized) {
            this.Render(); //technically this will render once on 
                           // the first render before this when its initialized... 
                           // but this is needed to make sure it updates after that
                           // That is not ideal but its how it currently works...
        }

    }

    protected View(): HTMLElement {
        return <> // <-- use a fragment here since this is getting grouped under the container defined in makeContainer
          Name: <input value={this.Model.name} /><br/>
          Age: <input value={this.Model.age} />
        </>;
    }
}

`}></format-code >

                    </li>
                </ol>



            </p>

        </div>;
    }
}
