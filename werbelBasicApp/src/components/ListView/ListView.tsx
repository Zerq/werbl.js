import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { React } from "../../libs/worbl/JSX.js";
import { CSS } from "../../libs/worbl/CSS.js";

export interface IconLike {
    Name?: string,
    Vector?: string;
    Icon8?: string;
    Icon16?: string;
    Icon22?: string;
    Icon32?: string;
    Icon48?: string;
    Icon64?: string;
    Icon128?: string;
    Icon256?: string;
    Alt: string;
}

export interface IconMetaDataLike {
    Name?: string;
    Comment?: string;
    Inherits?: string;
    FollowsColorScheme?: boolean;
    KdeExtensions?: string;
    DisplayDepth?: number;
    DesktopDefault?: number;
    DesktopSizes?: Array<number>
    ToolbarDefault?: number;
    ToolbarSizes?: Array<number>;
    MainToolbarDefault?: number;
    MainToolbarSizes?: Array<number>;
    SmallDefault?: number;
    SmallSizes?: Array<number>;
    PanelDefault?: number;
    PanelSizes?: Array<number>;
    DialogDefault?: number;
    DialogSizes?: Array<number>;
    Directory?: { [name: string]: Array<IconLike> };
}



export interface ListViewModelLike<T> {
    IconSource: IconSouceLikeLike;
    RenderMode: ListViewRenderMode;
    Data: Array<T>;
    Getters: Array<FieldGetter<T>>;
    Selection: Selection;
    GetIcon: (item: T) => string;
}



export interface IconSouceLikeLike {
    GetIcon(key: string): Promise<IconLike>;
}

export type ListViewRenderMode = "Big" | "Small" | "List";
export function IsValidRenederMode(val: unknown) {
    return val === "Big" || val === "Small" || val === "List";
}

export interface Seleciton {
    Start?: number;
    End?: number;
    Indexes?: Array<number>;
}

export interface FieldGetter<T> {
    Title: string;
    Getter: (item: T) => any;
}



// @Header(<style id="listview.css" type="text/css">{`
//     `}</style>)
@CSS("./ListView.css", import.meta)
@Component("listview")
export class ListView<T> extends BaseComponent<ListViewModelLike<T>> {

    public constructor() {
        super();
        this.Model = {} as ListViewModelLike<T>;
        this.Model.RenderMode = "List";
    }

    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(ListView, { "class": "ListView" } as any);
    }

    public set  IconSource(source:IconSouceLikeLike){
        if (!this.Model){
            throw new Error("model not defined");            
        }
        this.Model.IconSource = source;
    }

    public IconPathModifier = (path:string)=> path;

    public SetParam(name: string, value: any) {

        if (name.toLowerCase() === "id") {
            this.Container.id = value;
        }

        if (name.toLowerCase() === "class") {
            this.Container.className = value;
        }

        if (name.toLocaleLowerCase() === "iconpathmodifier"){
            this.IconPathModifier = value;
        }

        if (name.toLowerCase() === "data" && typeof (value) === "object" && Object.getPrototypeOf(value).constructor.name === "Array") {
            this.Model!.Data = value;
        }

        if (name.toLowerCase() === "iconsource" && typeof (value) === "object") {
            this.Model!.IconSource = value;
        }

        if (name.toLowerCase() === "geticon" && typeof (value) === "function") {
            this.Model!.GetIcon = value;
        }

        if (name.toLowerCase() === "getters" && typeof (value) === "object" && Object.getPrototypeOf(value).constructor.name === "Array") {
            this.Model!.Getters = value;
        }

        if (name.toLowerCase() === "selection" && typeof (value) === "object") {
            this.Model!.Selection = value;
        }
        if (name.toLowerCase() === "rendermode" && IsValidRenederMode(value)) {
            this.Model!.RenderMode = value;
        }


        if (this.Model !== undefined && this.Model.GetIcon !== undefined && this.Model.Getters !== undefined && this.Model.IconSource !== undefined && this.Model.RenderMode !== undefined) {
            this.RenderAsync().then();
        }
    }

    protected readonly ViewAsync = async () => {
        if (!this.Model || !this.Model.Data || !this.Model.GetIcon || !this.Model.IconSource) {
            return <></>;
        }

        if (this.Model.RenderMode === "Big") {
            return <ul class="BigList">
                {... await this.Model.Data.map(async n => {
                    const key = this.Model.GetIcon(n);
                    const icon = await this.Model.IconSource.GetIcon(key);
                    const iconPath = this.IconPathModifier(icon.Vector ?? icon.Icon256 ?? icon.Icon128 ?? icon.Icon64 ?? icon.Icon48 ?? icon.Icon32 ?? icon.Icon16?? "");
                    return <li>
                        <img class="icon" src={iconPath} alt={icon.Alt} />
                        <dl>
                            {...this.Model.Getters.map(x => {
                                const title = x.Title;
                                const content = x.Getter(n).toString();

                                const titleHider:any = {};
                                if (title === ""){
                                    titleHider.style ="display:none";
                                }
                                 

                                return <>
                                    <dt {...titleHider}>{title}:</dt>
                                    <dd>{content}</dd>
                                </>;
                            })}
                        </dl>
                    </li>;
                })}
            </ul>
        }

        if (this.Model.RenderMode === "Small") {
            return <ul class="SmallList">
                {...await this.Model.Data.map(async n => {
                    let key = this.Model.GetIcon(n);
                    let icon = await this.Model.IconSource.GetIcon(key);
                    let iconPath = this.IconPathModifier(icon.Vector ?? icon.Icon48 ?? icon.Icon32 ?? icon.Icon16 ?? "");
                    return <li>
                        <img class="icon" src={iconPath} alt={icon.Alt} />
                        <dl>
                            {...this.Model.Getters.map(x => {
                                const title = x.Title;
                                const content = x.Getter(n).toString();

                                const titleHider:any = {};
                                if (title === ""){
                                    titleHider.style ="display:none";
                                }
                                 

                                return <>
                                    <dt {...titleHider}>{title}:</dt>
                                    <dd>{content}</dd>
                                </>;
                            })}
                        </dl>
                    </li>;
                })}
            </ul>;
        }

        if (this.Model.RenderMode === "List") {
            return <table class="List">
                <thead>
                    <tr>
                        {...this.Model.Getters.map(x => {
                            const title = x.Title;
                            return <td>
                                {title}
                            </td>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {...this.Model.Data.map(n => {
                        return <tr>
                            {...this.Model.Getters.map(x => {
                                const content = x.Getter(n).toString();

                                return <td>
                                    {content}
                                </td>;
                            })}
                        </tr>;
                    })}
                </tbody>
            </table>;
        }

        return <></>;
    };


    protected View(): HTMLElement {




        return <></>;
    }
}