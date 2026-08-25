import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { React, Fragment } from "../../libs/worbl/JSX.js";
import { CSS } from "../../libs/worbl/CSS.js";



import { type ListView, IconSouceLikeLike, IconLike, ListViewRenderMode, FieldGetter, IconMetaDataLike } from "../ListView/ListView.js";
import { Frame } from "../../libs/worbl/frame.js";


type FsType = "File" | "Directory";

export interface FsTypeLike {
    Name: string,
    Type: FsType,
    FullName: string,
}

export interface FileInfoLike extends FsTypeLike {
    Type: "File"
    Length: number,
    Extension: string,
    Mime: string,
    CreationTime: Date,
    LastAccessTime: Date,
    LastWriteTime: Date
}

export interface DirectoryInfoLike extends FsTypeLike {
    Type: "Directory"
    Parent?: DirectoryInfoLike,
    Directories?: Array<DirectoryInfoLike>
    Files?: Array<FileInfoLike>
}


export class IconSource implements IconSouceLikeLike {
    #defaultTheme?: IconMetaDataLike = undefined;

    readonly #getDefaultTheme = async () => {
        if (!this.#defaultTheme) {
            const request = await fetch(location.origin + "/api/defaulticontheme");
            this.#defaultTheme = await request.json() as IconMetaDataLike;

            // if (this.#defaultTheme.Directory && this.#defaultTheme.Directory.MimeTypes) {
            //     this.#defaultTheme.Directory.MimeTypes.forEach(i => {
            //         if (i !== undefined && i.Name !== undefined) {
            //             this.#map.set(i.Name, i);
            //         }
            //     });
            // }

            return this.#defaultTheme;
        }

        return this.#defaultTheme;
    };


    public async Initialize() {
        await this.#getDefaultTheme();
    }


    public readonly GetIcon = async (key: string) => {
        const [section, name] = key.split("+");
        const theme = await this.#getDefaultTheme();

        if (theme.Directory === undefined) {
            throw Error("cant find theme");
        }

        if (
            theme.Directory?.[section] === undefined
            ||
            theme.Directory![section].find(n => n.Name === name) === undefined
        ) {



            const fallback = theme.Directory!.MimeTypes!.find(n => n.Name === "gnome-fs-regular.svg");
            if (!fallback) {
                throw new Error("Defalt fallback file icon not found");
            }

            return fallback;

        }

        return theme.Directory![section].find(n => n.Name === name)!;
    };

}

@CSS("./FileBrowser.css")
@Component("file-browser")
export class FileBrowser extends BaseComponent<DirectoryInfoLike> {

    public constructor() {
        super();
    }

    #iconSource = new IconSource();
    #iconPathTransformer = (path: string) => {
        return `${location.origin}/api/deficons/${encodeURIComponent(path)}`;
    };


    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(FileBrowser, { class: "FileBrowser" });
    }
    public SetParam(name: string, value: any): void {
        if (name.toLowerCase() === "model") {
            this.Model = value;
            this.RenderAsync();
        }
        if (name.toLocaleLowerCase() === "rendermode") {
            this.RenderMode = value;
            this.RenderAsync();
        }

    }

    //  #iconSource = new IconSource();
    #getters = new Array<FieldGetter<FileInfoLike | DirectoryInfoLike>>(
        {
            Title: "",
            Getter: n => n.Type === "Directory" ? `[${n?.Name}]` : n?.Name
        }
    );

    readonly #getIcon = (t: FileInfoLike | DirectoryInfoLike) => {
        if (t.Type === "Directory") {
            return "Places+folder.svg";
        }

        return "Mimetypes+" + ((t as FileInfoLike)?.Mime?.replace("\/", "_") ?? "application-x-zerosize");
    };

    public RenderMode: ListViewRenderMode = "Big";

    protected readonly ViewAsync = async () => {

        await this.#iconSource.Initialize();

        if (!this.Model) {
            return <></>;
        }


        console.log("filebrowser render list", IconSource, this.Model);
        const temp: Array<DirectoryInfoLike | FileInfoLike> = [];


        this.Model.Directories?.forEach(n => {
            if (n) {
                temp.push(n);
            }
        });

        this.Model.Files?.forEach(n => {
            if (n) { temp.push(n); }
        });

        temp.sort((a, b) => a.Type.localeCompare(b.Type) || a.Name.localeCompare(b.Name));

        return <listview
            class="listView1"
            iconsource={this.#iconSource}
            iconpathmodifier={this.#iconPathTransformer}
            rendermode={this.RenderMode}
            data={temp}
            getters={this.#getters}
            geticon={this.#getIcon}
        ></listview>;
    };

    protected View(): any {
        const load = async () => {
            await Frame();
            await this.RenderAsync();
        };
        load().then();
        return <></>;
    }

}