import { BaseComponent } from "../../BaseComponent.js";
import { Component } from "../../Component.js";
import { React } from "../../JSX.js";
import { CSS } from "../../CSS.js";

export interface IconLike {
    Vector?: string;
    Icon16?: string;
    Icon32?: string;
    Icon48?: string;
    Icon64?: string;
    Icon128?: string;
    Icon256?: string;
    Alt: string;
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

export interface ListViewModelLike<T> {
    IconSource: IconSouceLikeLike;
    RenderMode: ListViewRenderMode;
    Data: Array<T>;
    Getters: Array<FieldGetter<T>>;
    Selection: Selection;
    GetIcon: (item: T) => string;
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

    public SetParam(name: string, value: any) {

        if (name.toLowerCase() === "id") {
            this.Container.id = value;
        }
        
        if (name.toLowerCase() === "class") {
            this.Container.className = value;
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
                    const iconPath = icon.Vector ?? icon.Icon256 ?? icon.Icon128 ?? icon.Icon64 ?? icon.Icon48 ?? icon.Icon32 ?? icon.Icon16;
                    return <li>
                        <img class="icon" src={iconPath} alt={icon.Alt} />
                        <dl>
                            {...this.Model.Getters.map(x => {
                                const title = x.Title;
                                const content = x.Getter(n).toString();

                                return <>
                                    <dt>{title}:</dt>
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
                    let iconPath = icon.Vector ?? icon.Icon48 ?? icon.Icon32 ?? icon.Icon16;
                    return <li>
                        <img class="icon" src={iconPath} alt={icon.Alt} />
                        <dl>
                            {...this.Model.Getters.map(x => {
                                const title = x.Title;
                                const content = x.Getter(n).toString();

                                return <>
                                    <dt>{title}:</dt>
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