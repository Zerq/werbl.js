import { LinkLike } from "./Components/NavMenu/NavMenu.js";
import { BaseComponent, JSX } from "./JSX.js";
import { Router } from "./Router.js";
import { RouterLike } from "./types.js";

export abstract class BasicAppRoot extends BaseComponent<unknown> {
    public constructor() {
        super();
        window.addEventListener("hashchange", e => {
            Router.Instance.HandleRout(location.hash);
        });
        this.Route(Router.Instance);
    }

    protected setInitialView(view: string) {
        requestAnimationFrame(() => {
            location.hash = view
            Router.Instance.HandleRout(location.hash);
        });
    }

    public abstract Route(router: RouterLike);

    public renderView(view: string, params: { [name: string]: any }, children: Array<string | HTMLElement>) {

        const result = window.Omnicatz.Components.CreateElement(view, params, children);
        this.Container.querySelector("main").innerHTML = "";
        result.Render();
        this.Container.querySelector("main").appendChild(result.Container);
    }

    protected abstract menuItems: Array<LinkLike>;

    protected makeContainer(): HTMLElement {
        this.Id = crypto.randomUUID();
        return <div id={this.Id}></div>;
    }

    public SetParam(name: string, value: any) { }
}