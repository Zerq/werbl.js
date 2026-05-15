import { React } from "../../libs/worbl/JSX.js";
import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Route } from "../../libs/worbl/Router.js";
import { FieldGetter, IconLike, IconSouceLikeLike } from "../../libs/worbl/Components/ListView/ListView.js";
import { ListViewRenderMode } from '../../libs/worbl/Components/ListView/ListView.js';
import { Component } from "../../libs/worbl/Component.js";

export class IconList123 implements IconSouceLikeLike {
    Icons: Map<string, IconLike> = new Map();
    GetIcon(key: string): Promise<IconLike> {
        return new Promise((resolve, reject) => {
            resolve({
                Vector: "./assets/worbl.svg"
            } as IconLike);
        });
    }

}


type Bork = {
    icon: string,
    title: string,
    bork: boolean
}

type KVP<k, v> = {
    key: k;
    value: v;
};


@Component("list-view-test")
@Route("#listview")
export class ListViewTest extends BaseComponent<void> {

    #data = new Array<Bork>(
        { icon: "zog", title: "borkator", bork: false },
        { icon: "zag", title: "torgator", bork: true },
    );

    #getters = new Array<FieldGetter<Bork>>(
        {
            Title: "icon",
            Getter: n => n.icon
        },
        {
            Title: "title",
            Getter: n => n.title
        },
        {
            Title: "bork",
            Getter: n => n.bork
        },
    );

    readonly #getIcon = (T: Bork) => {
        return T.icon;
    };

    #iconSource = new IconList123();
  


    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(ListViewTest);
    }


    public SetParam(name: string, value: any): void {

    }


    protected View(): HTMLElement {
        return <listview
            iconsource={this.#iconSource}
            rendermode={("Big" as ListViewRenderMode)}
            data={this.#data}
            getters={this.#getters}
            geticon={this.#getIcon}

        ></listview>;
    }

}