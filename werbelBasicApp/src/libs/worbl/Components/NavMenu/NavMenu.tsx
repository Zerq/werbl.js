import { Component } from "../../Component.js";
import { CSS } from "../../CSS.js";
import { JSX } from "../../JSX.js"
import { BaseComponent } from "../../BaseComponent.js";
import { PsudoInterface } from "../../PsudoInterface.js";

export interface LinkLike {
    Name: string;
    Url?: string;
    action?: (e:Event) => void;
}

export type LogoPosition = undefined | "Before" | "After" | "Above" | "Below";
export type TitleSize = undefined | "XXS" | "XS" | "S" | "N" | "M" | "L" | "XL" | "XXL";
export type BrandingDisplayMode = undefined | "TitleOnly" | "IconOnly" | "IconAndTitle";

export interface MenuDataLike {
    Items: Array<LinkLike>;
    Title: string;
    Logo?: string;
    LogoPosition: LogoPosition;
    IconSize: string;
    TitleSize: TitleSize;
    DisplayMode: BrandingDisplayMode;
}

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
                {this.#formatBranding()}
            </div>
            <nav>
                <ul>
                    {...this.Model.Items.map(n => {
                        if (n.action) {
                            return <li><a href={location.hash} onClick={e => n.action(e)}>{n.Name}</a></li>;
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