import { LinkLike } from "./Components/NavMenu/NavMenu.js";//[[tsx]]
import { IOC } from "./IOC.js";//[[ts]]
import { JSX } from "./JSX.js";//[[ts]]
import { BaseComponent } from "./BaseComponent.js";//[[ts]]
import { IComponentRegistry, IRouter } from "./types.js";//[[ts]]

export abstract class BasicAppRoot extends BaseComponent<unknown> {
    public constructor() {
        super();
        window.addEventListener("hashchange", e => {
            this.#router.HandleRoute(location.hash);
        });

    }

    public get router(): IRouter {
        return this.#router;
    }

    #router = IOC.Instance.Service(IRouter);
    #componentRegistry = IOC.Instance.Service(IComponentRegistry);

    protected setInitialView(view: string) {
        requestAnimationFrame(() => {
            location.hash = view
            this.#router.HandleRoute(location.hash);
        });
    }


    public renderView(view: string, params: { [name: string]: any }, children: Array<string | HTMLElement>) {
        const result = this.#componentRegistry.CreateElement(view, params, children);

        if (this.Container.querySelector("main") != undefined) {
            this.Container.querySelector("main").innerHTML = "";
            result.Render();
            this.Container.querySelector("main").appendChild(result.Container);
        }
    }

    protected abstract menuItems: Array<LinkLike>;

    protected makeContainer(): HTMLElement {
        this.Id = crypto.randomUUID();
        return <div class="appContainer" id={this.Id}></div>;
    }

    public SetParam(name: string, value: any) { }
}