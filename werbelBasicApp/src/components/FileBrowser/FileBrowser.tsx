import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { React, Fragment } from "../../libs/worbl/JSX.js";
import { CSS } from "../../libs/worbl/CSS.js";

export function Frame(): Promise<void> {
    return new Promise((resolve, reject) => {
        requestAnimationFrame(() => {
            resolve();
        });
    });
}

import { type ListView, IconSouceLikeLike, IconLike } from "../../libs/worbl/Components/ListView/ListView.js";




export interface FileInfoLike {
    Name: string,
    FullName: string,
    Length: number,
    Extension: string,
    Mime: string,
    CreationTime: Date,
    LastAccessTime: Date,
    LastWriteTime: Date
}

export interface DirectoryInfoLike {
    Name: string,
    FullName: string,
    Parent?: DirectoryInfoLike,
    Directories?: Array<DirectoryInfoLike>
    Files?: Array<FileInfoLike>
}


export class IconSource implements IconSouceLikeLike {
    #map = new Map<string, IconLike>();

    #defaultTheme?: string = undefined;

    readonly #getDefaultTheme = async () => {
        if (!this.#defaultTheme) {
            const request = await fetch(location.origin + "/default-icons/default");
            this.#defaultTheme = await request.text();
            return this.#defaultTheme;
        }
        return this.#defaultTheme;
    };


 


    public readonly GetIcon = async (key: string) => {

        const theme = await this.#getDefaultTheme();





        if (this.#map.has(key)) {
            return this.#map!.get(key)!;
        }

        await Frame();

        return {} as unknown as IconLike;


    };

}


@Component("file-browser")
export class FileBrowser extends BaseComponent<DirectoryInfoLike> {

    public constructor() {
        super();




    }

    #iconSource = new IconSource();


    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(FileBrowser, { class: "FileBrowser" });
    }
    public SetParam(name: string, value: any): void {
        if (name === "model") {
            this.Model = value;
            this.RenderAsync();
        }

    }

    //  #iconSource = new IconSource();

    protected readonly ViewAsync = async () => {

        if (this.Model) {

            return <list-view>
                iconsource={this.#iconSource}
            </list-view>;


        }

        return <></>;
    };








    protected View(): any {


        const load = async () => {
            await Frame();



            const request = await fetch(location.origin + "/files/%2Fhome%2Farch%2Ffirestorm");
            this.Model = await request.json() as DirectoryInfoLike;
            await this.RenderAsync();
        };

        load().then();


        return <></>;
    }

}