import { EditorBase } from "../EditorBase.js";
import { React } from "../../../libs/worbl/JSX.js";


export class ExampleUser {
    public Name: string = "";
    public Age: number = 0;
    public ShoeSize: number = 0;
}


export class DateEditor extends EditorBase<ExampleUser> {
    metaDataRef = "ExampleUser";


    public readonly SaveLogic = (initialValue: ExampleUser): ExampleUser => {

        const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
        const ageInput = document.querySelector<HTMLInputElement>("#ageInput");
        const shoeSizeInput = document.querySelector<HTMLInputElement>("#shoeSizeInput");

        if (!this.newValue) {
            throw Error("new Value should not be undefined or null here...");
        }
        
        this.newValue.Name = nameInput ? nameInput.value : "";
        this.newValue.Age = ageInput ? Number.parseInt(ageInput.value) : 0;
        this.newValue.ShoeSize = shoeSizeInput ? Number.parseInt(shoeSizeInput.value) : 0;

        return this.newValue;
    };

    override SetParam(name: string, value: any): void {
        super.SetParam(name, value);
    }

    protected async DialogView(): Promise<HTMLElement> {
        return <>
            <dl>
                <dd>Name:</dd><dt><input id="nameInput" value={this.newValue?.Name} /></dt>
                <dd>Age:</dd><dt><input id="ageInput" value={this.newValue?.Age} /></dt>
                <dd>ShoeSize:</dd><dt><input id="shoeSizeInput" value={this.newValue?.ShoeSize} /></dt>
            </dl>

        </>

    }

    protected makeContainer(): HTMLElement {
        return this.makeEditorContainer(DateEditor);
    }


}