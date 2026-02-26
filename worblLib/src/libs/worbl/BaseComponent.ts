import { IOC } from "./IOC.js";//[[ts]]
import { PsudoInterface } from "./PsudoInterface.js";//[[ts]]
import { BaseComponentLike, Ctr, IComponentRegistry } from "./types.js";//[[ts]]

/**
 * @param queryString selector must point to a valid components container element
 * @returns instance of the component.
 */
export function GetComponent<T>(queryString: string) {
    return (document.querySelector(queryString) as any).Component as T;
}

export abstract class BaseComponent<T> implements BaseComponentLike<T> {
    public Model!: T;
    #container: HTMLElement;

    #id: string | undefined;

    public get Id(): string {
        if(this.#id === undefined){
            throw Error("Component Id not assigned before request!");
        }

        return this.#id;
    }

    public set Id(val: string) {
        this.#id = val;
    }

    public get Container(): HTMLElement {
        return this.#container;
    }

    public constructor() {
        this.#container = this.makeContainer();
        (this.Container as any).Component = this
    }

    public IsInitialized: boolean = false;


    protected children: Array<string | HTMLElement> =[];

    SetChildren(children: Array<string | HTMLElement>): void {
        this.children = children;
    }

    protected abstract makeContainer(): HTMLElement;

    protected makeContainerDefault(ctr: Ctr<BaseComponent<any>>, params: { tagType?: string; class?: string; } = { tagType: undefined, class: undefined }): HTMLElement {
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

    public abstract SetParam(name: string, value: any):void;
    public baseSetParam(name: string, value: any) {

    }
    protected abstract View(): HTMLElement;

    public readonly RenderAsync = async () => {
        this.#container.innerHTML = "";

        const view = await (this as unknown as AsyncRenderLike).ViewAsync?.() ?? undefined;

        if (view === undefined) {
            return;
        }


        if (view !== null) {
            this.#container.appendChild(view);
        }

        requestAnimationFrame(() => {
            (this as unknown as PostRenderLike).postRender?.();
        });
    }

    public Render() {
        this.#container.innerHTML = "";
        const view = this.View();
        if (view !== null) {
            this.#container.appendChild(view);
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