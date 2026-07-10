import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Ctr } from "../../libs/worbl/types.js";
import { React } from "../../libs/worbl/JSX.js";


export abstract class EditorBase<T> extends BaseComponent<T> {
    abstract metaDataRef: string;

    #cancel?: () => void;
    #save?: () => void;
    newValue?: T;
    protected newConstructor?: Ctr<T>;

    public SetParam(name: string, value: any): void {
        if (name.toLowerCase() === "model") {
            this.Model = value;
        }
        if (name.toLocaleLowerCase() === "constructor") {
            this.constructor = value;
        }

    }

    public abstract SaveLogic: (initialValue: T) => T;

    public readonly Show = (initialValue: T): Promise<T> => {

        return new Promise((resolve, reject) => {
            this.#save = () => {
                resolve(this.SaveLogic(this.newValue!));
                (this.Container as HTMLDialogElement).close();
            };

            this.#cancel = () => {
                this.newValue = undefined;
                (this.Container as HTMLDialogElement).close();
            };

            if (!this.Model) {

                if (!this.newConstructor) {
                    throw new Error("no constructor or model avalible");
                }

                this.newValue = new this.newConstructor();
            }
            else {
                this.newValue = Object.assign(this.Model, {}) as T;
            }


            this.RenderAsync().then(() => {
                (this.Container as HTMLDialogElement).showModal();
            });
        });
    };

    protected readonly ViewAsync = async (): Promise<HTMLElement> => {
        return <>
            {await this.DialogView()}
            <div>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </>
    };

    protected abstract DialogView(): Promise<HTMLElement>;

    protected readonly View = (): HTMLElement => {
        return <></>;
    };


    protected makeEditorContainer(ctr: Ctr<EditorBase<T>>) {
        return this.makeContainerDefault(ctr, { tagType: "dialog", class: "editorDialog " + ctr.name }); HTMLElement;
    }
}
