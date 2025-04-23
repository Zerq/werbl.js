import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { JSX } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router.js";

type TestTypeItem = { burklax: number, blarg: boolean, splarg: string };

type TestType = {
    checked: boolean,
    list: Array<TestTypeItem>;
}

@Route("#home")
@Component("home-view")
export class HomeView extends BaseComponent<TestType> {
    Name: string;

    public constructor() {
        super();
        this.model = {
            checked: true,
            list: [{ burklax: 3, blarg: true, splarg: "hello" }, { burklax: 23, blarg: false, splarg: "zog zog zog" }, { burklax: 223, blarg: true, splarg: "weeee" }]
        };
        this.Render();
    }

    protected makeContainer(): HTMLElement {
    
        return this.makeContainerDefault(HomeView,{ class: "HomeView"});
    }

    public SetParam(name: string, value: any) {
        if (name === "Name") {
            this.Name = value;
        }
    }

    changed(e: CustomEvent) {
        console.log("checkbox changed to " + e.detail);
    }

    protected View(): HTMLElement {

        return <div>
            <h2>What is Werbl</h2>
            <p>
                Its a nonsense word i came up with.<br/>
                Its my low dependency frontend library.<br/>
                <br/>
                Basically the goal is to make things as simple as possible and ideally make the source code always avalible and very easy to read and understand.<br/>
                if people look at it and go wait this is so fucking simple i could write this shit.<br/>
                <br/>
                that yay! that is what i was aiming for.<br/>
                Ideally it should be so simple it can be re-writen from scratch in a week or two.. that may not be entierly achivable but hey best attempt.<br/>
                Jquery becase redundant as web tech moved on this project is basically here to see how far of are we from making thing like react and angular redundant.<br/>
                <br/>
                or at least so simple to recreate yourself that its near redundant.<br/>
            </p>
        </div>;
    }
}
