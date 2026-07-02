import { React } from "../../libs/worbl/JSX.js";
import { BaseComponent, GetComponent } from "../../libs/worbl/BaseComponent.js";
import { Route } from "../../libs/worbl/Router.js";
import { FieldGetter, IconLike, IconSouceLikeLike } from "../../components/ListView/ListView.js";
import { ListViewRenderMode } from '../../components/ListView/ListView.js';
import { Component } from "../../libs/worbl/Component.js";
import { type ListView } from "../../components/ListView/ListView.js";

import { ChangeEvent } from "react";
import { DirectoryInfoLike, FileBrowser, Frame } from "../../components/FileBrowser/FileBrowser.js";


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
export class ListViewTest extends BaseComponent<DirectoryInfoLike> {

    public constructor() {
        super();
        this.#getFileTest().then();

    }


    readonly #getFileTest = async () => {
        const url = location.origin + "/api/files/" + encodeURIComponent("/home/arch/Downloads");
        const request = await fetch(url);
        const json = await request.json();

        this.Model = json as DirectoryInfoLike;

        const fileList = GetComponent<FileList>(".fileView1");
        await Frame();
        this.Render();

    };

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


    public readonly onChange = async (e: ChangeEvent) => {
        const select = e.target as HTMLSelectElement;
        const list = GetComponent<ListView<Bork>>(".listView1");
        const fileList = GetComponent<FileBrowser>(".FileBrowser");




        if (list !== null) {
            list.Model.RenderMode = select.value as ListViewRenderMode;
            await list.RenderAsync();
        }

        if (fileList !== null) {
            fileList.RenderMode =  select.value as ListViewRenderMode;
            await fileList.RenderAsync();
        }
    };






    protected View(): HTMLElement {
        return <>
            <select id="listStyle" onchange={this.onChange}>
                <option value="Big" selected>Big</option>
                <option value="Small" >Small</option>
                <option value="List" >List</option>
            </select>
            <listview
                class="listView1"
                iconsource={this.#iconSource}
                rendermode={("Big" as ListViewRenderMode)}
                data={this.#data}
                getters={this.#getters}
                geticon={this.#getIcon}
            ></listview>
            <file-browser class="fileView1" model={this.Model}>

            </file-browser>


        </>
    }

}