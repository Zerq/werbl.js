import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { AnyElement, React } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router.js";
import { CSS } from "../../libs/worbl/CSS.js";
import { PsudoInterface } from "../../libs/worbl/PsudoInterface.js";
import { IOC, RegisterService } from "../../libs/worbl/IOC.js";
import { Ctr, ISerializer } from "../../libs/worbl/types.js";

export function RegisterHandler<T>(handler: (obj: any) => T) {
    return (ctor: Ctr<T>) => {
        IOC.Instance.Service(ISerializer).RegisterTypeHandler(ctor.name, handler);
    };
}

@RegisterHandler(n => Object.assign(new Bork(), n))
export class Bork {
    public $type = Bork.name;
    public Nr: number = 0;
    public Increment() {
        this.Nr++;
    }
}


export interface TestDataLike {
    Zog: string;
    Börk: Bork;
};

class TestNode {
    public constructor(public Name: string) { }
    public Parent?: TestNode = undefined;
    public Children: Array<TestNode> = [];
}

@CSS("./TestView.css", import.meta)
@Route("#test")
@Component("test-view")
export class TestView extends BaseComponent<Map<string, () => boolean>> {
    Name = "";

    public constructor() {
        super();
        this.Model = new Map();

        this.Model.set("circularrefernce test", () => {
            const root = new TestNode("Root");

            const rootChild1 = new TestNode("RootChild1");
            rootChild1.Parent = root;

            const rootChild2 = new TestNode("RootChild2");
            rootChild2.Parent = root;

            const childOfChild1 = new TestNode("Child of Child");
            childOfChild1.Parent = rootChild1;

            rootChild1.Children.push(childOfChild1);

            root.Children.push(rootChild1);
            root.Children.push(rootChild2);

            const ser = IOC.Instance.Service(ISerializer);
            const json = ser.Serialize(root);

            const andBackAgain = ser.Deserialize<TestNode>(json);
            return andBackAgain?.Children[0]?.Children[0]?.Name === "Child of Child";
        });

        this.Model.set("I can serialize and deserialize and revive prototypes", () => {
            const test1Data = {
                Zog: "bork",
                Börk: new Bork()
            };
            test1Data.Börk.Increment();
            test1Data.Börk.Increment();
            test1Data.Börk.Increment();
            const ser = IOC.Instance.Service(ISerializer);
            const x = ser.Serialize(test1Data);
            const y = ser.Deserialize<TestDataLike>(x);
            y.Börk.Increment();
            return y.Börk.Nr === 4;
        });

        this.Render();
    }

    protected makeContainer(): AnyElement {
        return this.makeContainerDefault(TestView, { tagType: "dl", class: "HomeView" });
    }

    public SetParam(name: string, value: any) {
        if (this.IsInitialized) {
            this.Render();
        }
    }

    protected View(): AnyElement {
        return <>
            {
                ...Array.from(this.Model).map(n => {
                    const desc = n[0];
                    const result = n[1]() + "";
                    return <>
                        <dt>{desc}</dt>
                        <dd className={"result_" + result}>{result}</dd>
                    </>
                })
            }
        </>
    }
}
