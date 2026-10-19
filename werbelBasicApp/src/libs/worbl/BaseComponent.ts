import { IOC } from "./IOC.js";
import { AnyElement } from "./JSX.js";
import { PsudoInterface } from "./PsudoInterface.js";
import { BaseComponentLike, Ctr, IComponentRegistry } from "./types.js";

/**
 * @param queryString selector must point to a valid components container element
 * @returns instance of the component.
 */
export function GetComponent<T>(queryString: string) {
    return (document.querySelector(queryString) as any).Component as T;
}

export abstract class BaseComponent<T> implements BaseComponentLike<T> {
    public Model!: T;
    #container: AnyElement;

    #id: string | undefined;

    public get Id(): string {
        if (this.#id === undefined) {
            throw Error("Component Id not assigned before request!");
        }

        return this.#id;
    }

    public set Id(val: string) {
        this.#id = val;
    }

    public get Container(): AnyElement {
        return this.#container;
    }

    public constructor() {
        this.#container = this.makeContainer();
        (this.Container as any).Component = this
    }

    public IsInitialized: boolean = false;


    protected children: Array<AnyElement> = [];

    SetChildren(children: Array<AnyElement>): void {
        this.children = children;
    }

    protected abstract makeContainer(): AnyElement;

    protected makeContainerDefault(ctr: Ctr<BaseComponent<any>>, params: { tagType?: string; class?: string; } = { tagType: undefined, class: undefined }): AnyElement {
        this.Id = crypto.randomUUID();;
        const componentRegistry = IOC.Instance.Service(IComponentRegistry);

        /*optional params --> */
        const element = document.createElement(params.tagType ?? "div");

        if (params.class) {
            element.className = params.class;
        }
        /*<-- optional params  */
        const tag = componentRegistry.GetTag(ctr);

        if (tag === undefined) {
            throw new Error(`MakeContainrDefault could not find the specified tag "${tag}"`)
        }

        element.setAttribute("data-tagtype", tag);
        element.id = this.Id;

        return element;
    }

    public abstract SetParam(name: string, value: any): void;
    public baseSetParam(name: string, value: any) {

    }
    protected abstract View(): AnyElement;

    public readonly RenderAsync = async () => {
        (this.#container as HTMLElement).innerHTML = "";

        const view = await (this as unknown as AsyncRenderLike).ViewAsync?.() ?? undefined;

        if (view === undefined) {
            return;
        }

        if (view !== null) {
            (this.#container as HTMLElement).appendChild(view);
        }

        requestAnimationFrame(() => {
            (this as unknown as PostRenderLike).postRender?.();
        });
    }

    public Render() {
        (this.#container as HTMLElement).innerHTML = "";
        const view = this.View();
        if (view !== null) {

            if (Object.getPrototypeOf(view).constructor.name === "Array") {
                (view as unknown as Array<AnyElement>).forEach(n => {
                    (this.#container as HTMLElement).appendChild(n as unknown as HTMLElement);
                });
                return;
            }

            (this.#container as HTMLElement).appendChild(view as unknown as HTMLElement);
        }

        requestAnimationFrame(() => {
            (this as unknown as PostRenderLike).postRender?.();
        });
    }
}

export interface AsyncRenderLike {
    readonly ViewAsync: () => Promise<HTMLElement>;
}


export interface PostRenderLike {
    readonly postRender: () => void;
}