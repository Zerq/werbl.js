import { Component } from "../../Component.js";
import { /*Header,*/ CSS } from "../../CSS.js";
import { React } from "../../JSX.js"//[[ts]]
import { BaseComponent } from "../../BaseComponent.js";
import {  ReactElement, ReactSVGElement } from 'react';
 

export interface LinkLike {
    Name: string;
    Url?: string;
    action?: (e: Event) => void;
}

export type LogoPosition = undefined | "Before" | "After" | "Above" | "Below";
export type TitleSize = undefined | "XXS" | "XS" | "S" | "N" | "M" | "L" | "XL" | "XXL";
export type BrandingDisplayMode = undefined | "TitleOnly" | "IconOnly" | "IconAndTitle";

export interface MenuDataLike {
    Items: Array<LinkLike>;
    Title: string;
    Logo?: string | ReactSVGElement;
    LogoPosition: LogoPosition;
    IconSize: string;
    TitleSize: TitleSize;
    DisplayMode: BrandingDisplayMode;
}



// @Header(<style id="NavMenu.css" type="text/css">{`h1.IconBelow {
//          img {
//              display: block;
//              margin-inline: auto;
//          }
//      }

//      h1.IconAbove {
//          img {
//              display: block;
//              margin-inline: auto;
//          }
//      }`}</style>)
@Component("navbox")
@CSS("./NavMenu.css", import.meta)
export class NavMenu extends BaseComponent<MenuDataLike> {
    protected ViewAsync?: () => Promise<HTMLElement>;

    public get Component(): unknown {
        return this;
    }

    public constructor() {
        super();
        this.Model = { Title: "", Items: [], "DisplayMode": undefined, "LogoPosition": undefined, "TitleSize": undefined, IconSize: "3rem" };
    }

    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(NavMenu, { class: "navMenu" });
    }

    public SetParam(name: string, value: any) {
        if (name.toLowerCase() === "title") {
            this.Model.Title = value;
        }

        if (name.toLowerCase() === "logo") {
            this.Model.Logo = value;
        }

        if (name.toLowerCase() === "displaymode") {
            this.Model.DisplayMode = value;
        }

        if (name.toLowerCase() === "position") {
            this.Model.LogoPosition = value;
        }

        if (name.toLowerCase() === "titlesize") {
            this.Model.TitleSize = value;
        }

        if (name.toLowerCase() === "items") {
            this.Model.Items = value;
        }

        if (name.toLowerCase() === "iconsize") {
            this.Model.IconSize === value;
        }
        if (this.IsInitialized) {
            this.Render();
        }
    }

    readonly #Branding = () => {
        if (typeof (this.Model?.Logo) === "string") { 
            return this.#formatBranding(); 
        }
        else { 
            return this.#formatInlineBranding() as unknown as ReactElement[];
        }
    };

    readonly #formatInlineBranding = () => {
        const size = `font_size_${this.Model.TitleSize ?? "N"}`;

        if (this.Model.DisplayMode === "IconAndTitle" && (this.Model.LogoPosition === "Before" || this.Model.LogoPosition === undefined)) {
            const logo = this.Model.Logo as unknown as SVGElement;
            logo.style.width = this.Model.IconSize;

            return <h1 class={`${size}`}>
                <img style={`width: ${this.Model.IconSize};`} src={this.Model.Logo} alt="" />
                {logo}
                {this.Model.Title}</h1>;
        }

        if (this.Model.DisplayMode === "IconAndTitle" && this.Model.LogoPosition === "Above") {
            const logo = this.Model.Logo as unknown as SVGElement;
            logo.style.width = this.Model.IconSize;
            return <h1 class={`${size} IconAbove`}>
                {logo}
                {this.Model.Title}</h1>;
        }

        if (this.Model.DisplayMode === "IconAndTitle" && this.Model.LogoPosition === "After") {
            const logo = this.Model.Logo as unknown as SVGElement;
            logo.style.width = this.Model.IconSize;
            return <h1 class={`${size}`}>{this.Model.Title}
                {logo}
            </h1>;
        }

        if (this.Model.DisplayMode === "IconAndTitle" && this.Model.LogoPosition === "Below") {
            const logo = this.Model.Logo as unknown as SVGElement;
            logo.style.width = this.Model.IconSize;
            return <h1 class={`${size} IconBelow`}>{this.Model.Title}
                {logo}
            </h1>;
        }

        if (this.Model.DisplayMode === "IconOnly") {
            const logo = this.Model.Logo as unknown as SVGElement;
            logo.style.width = this.Model.IconSize;
           return  logo;
        }

        return <h1 style={`width: ${this.Model.IconSize};`} class={size}>{this.Model.Title}</h1>;

    };

    readonly #formatBranding = () => {
        const size = `font_size_${this.Model.TitleSize ?? "N"}`;

        if (this.Model.DisplayMode === "IconAndTitle" && (this.Model.LogoPosition === "Before" || this.Model.LogoPosition === undefined)) {
            return <h1 class={`${size}`}><img style={`width: ${this.Model.IconSize};`} src={this.Model.Logo} alt="" />{this.Model.Title}</h1>;
        }
        if (this.Model.DisplayMode === "IconAndTitle" && this.Model.LogoPosition === "Above") {
            return <h1 class={`${size} IconAbove`}><img style={`width: ${this.Model.IconSize};`} src={this.Model.Logo} alt="" />{this.Model.Title}</h1>;
        }

        if (this.Model.DisplayMode === "IconAndTitle" && this.Model.LogoPosition === "After") {
            return <h1 class={`${size}`}>{this.Model.Title} <img style={`width: ${this.Model.IconSize};`} src={this.Model.Logo} alt="" /></h1>;
        }

        if (this.Model.DisplayMode === "IconAndTitle" && this.Model.LogoPosition === "Below") {
            return <h1 class={`${size} IconBelow`}>{this.Model.Title} <img style={`width: ${this.Model.IconSize};`} src={this.Model.Logo} alt="" /></h1>;
        }

        if (this.Model.DisplayMode === "IconOnly") {
            return <img style={`width: ${this.Model.IconSize};`} src={this.Model.Logo} title={this.Model.Title} alt={this.Model.Title} />;
        }

        return <h1 style={`width: ${this.Model.IconSize};`} class={size}>{this.Model.Title}</h1>;

    };

    protected View(): HTMLElement {
        return <header>
            <div class="branding">
                {this.#Branding()}
            </div>
            <nav>
                <ul>
                    {...this.Model.Items.map(n => {
                        if (n.action) {
                            return <li><a href={location.hash} onClick={(e:MouseEvent) => n.action?.(e)}>{n.Name}</a></li>;
                        }
                        if (n.Url) {
                            return <li><a href={n.Url}>{n.Name}</a></li>;
                        }
                    }
                    )}
                </ul>
            </nav>
        </header >;
    }
}