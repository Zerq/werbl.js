import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { JSX } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router.js";

@Route("#about")
@Route("#about/{page}")
@Component("about-view")
export class AboutView extends BaseComponent<unknown> {
    Name: string;
    public constructor() {
        super();

        this.Render();
    }

    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(AboutView,{ class: "AboutView"});
    }

    public SetParam(name: string, value: any) {
        if (name === "page"){
            window.document.title = value;
        }
    }

    protected View(): HTMLElement {
        return <div>blarg blarg blarg blarg blarg blarg
             blarg blarg blarg blarg blarg blarg blarg blarg
              blarg blarg blarg blarg blarg blarg blarg blarg 
              blarg blarg blarg blarg blarg blarg blarg blarg blarg
               blarg blarg blarg blarg blarg blarg blarg blarg blarg 
               blarg blarg blarg blarg blarg blarg blarg blarg blarg 
               blarg blarg blarg blarg blarg blarg blarg blarg blarg 
               blarg blarg blarg blarg blarg blarg blarg blarg
                blarg blarg blarg blarg blarg blarg blarg blarg 
                blarg blarg blarg blarg blarg blarg blarg blarg blarg
                 blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                 blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                 blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                 blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                 blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                 blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                 blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                 blarg blarg blarg blarg blarg blarg blarg blarg
                  blarg blarg blarg blarg blarg blarg blarg blarg blarg
                   blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                   blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                   blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                   blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                   blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                   blarg blarg blarg blarg blarg blarg blarg
                    blarg blarg blarg blarg blarg blarg blarg 
                    blarg blarg blarg blarg blarg blarg blarg 
                    blarg blarg blarg blarg blarg blarg blarg 
                    blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                    blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg
                     blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg
                      blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg
                       blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blar
                       g blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg bla
                       rg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg bl
                       arg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg b
                       larg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                       blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg
                        blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg bla
                        rg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                        blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg bla
                        rg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                        blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg bla
                        rg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                        blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg bla
                        rg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                        blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg bla
                        rg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                        blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg bla
                        rg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                        blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg bla
                        rg blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                        blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blar
                         g blarg blarg blarg blarg blarg blarg blarg blarg blarg bl
                         arg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blar
                         g blarg blarg blarg blarg blarg blarg blarg blarg blarg bl
                         arg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blar
                         g blarg blarg blarg blarg blarg blarg blarg blarg blarg bl
                         arg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg blarg blarg 
                         blarg blarg blarg blarg blarg blarg blarg blarg
                          blarg blarg blarg </div>;
    }
}
