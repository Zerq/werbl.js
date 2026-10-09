import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { AnyElement, React } from "../../libs/worbl/JSX.js";
import { Route } from "../../libs/worbl/Router.js";
import { CSS } from "../../libs/worbl/CSS.js";
import { PsudoInterface } from "../../libs/worbl/PsudoInterface.js";
 

export interface TypedLike{
    $type:string;
}

export type Handler = { Revitalize: (t: TypedLike)=> any, replacer:(obj:any)=> any};

export abstract class ISerializer extends PsudoInterface{
    public constructor(){
        super();
    }

    public abstract Serialize<T extends TypedLike>(obj:T):string;
    public abstract Deserialize<T extends TypedLike>(json:string):T;

    public abstract SetHandler(type:string, handler:Handler):void;
    public abstract GetHandler(type:string): Handler;
}


export class Serialize implements ISerializer{
    
    #map = new Map<string, Handler>();

    public Serialize<T extends TypedLike>(obj: T): string {
        
        if (obj.$type && this.#map.has(obj.$type)) {
           

                 return JSON.stringify(obj,this.bork);
        }

        return JSON.stringify(obj);
    }

    public Deserialize<T extends TypedLike>(json: string): T {
    
            
        if (obj.$type && this.#map.has(obj.$type)) {
           obj = this.#map.get(obj.$type)?.replacer(obj);
        }


        return JSON.parse(json);
    }

    public SetHandler(type:string, handler:Handler):void {
        this.#map.set(type, handler);
    }

    public GetHandler(type:string): Handler {
        const result = this.#map.get(type);

        if (!result){
            throw new Error("handler not found for " + type);
        }

        return result;
    }

}


@CSS("./TestView.css", import.meta)
@Route("#test")
@Component("test-view")
export class TestView extends BaseComponent<Map<string,()=> boolean>> {
    Name ="";

    public constructor() {
        super();
        this.Model = new Map();

        this.Model.set("test1", ()=> {  
            const val = 1+1;
            return val === 2;
          })

        this.Render();
    }

    protected makeContainer(): AnyElement {
        return this.makeContainerDefault(TestView, { tagType:"dl", class: "HomeView" });
    }

    public SetParam(name: string, value: any) {
        if (this.IsInitialized) {
            this.Render();
        }
    }

    protected View(): AnyElement { 
        return  <>
            {
            ...Array.from(this.Model).map(n=> <>
                <dt>{n[0]}</dt>
                <dd className={"result_" + n[1]?.()}>{n[1]?.()}</dd>
            </>)                  
            }
        </>
    }
}
