import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { Component } from "../../libs/worbl/Component.js";
import { JSX, __frag } from "../../libs/worbl/JSX.js";
import { CSS } from "../../libs/worbl/CSS.js";
import { Epub } from "../../epub.js";


type ProcessedEbook = { title: string, authorx: string, description: string, content: Array<Array<{ title: string, content: Array<string> }>> };

@CSS(import.meta.resolve("./EpubReader.css"))
@Component("epub-reader")
export class EpubReader extends BaseComponent<ProcessedEbook> {
    private Name: string;
    private content: Array<string> = [];

    public constructor() {
        super();
        this.getDirectory("/home/arch/Downloads/the-trials-and-tribulations-of-my-next-life-as-a-noblewoman-volume-1.epub").then((model) => {
            this.model = model;
            this.Render();
        });
    }

    private async getDirectory(path): Promise<ProcessedEbook> {


        const request = await fetch(`${location.origin}/read-content?path=${path}`)
        const model = await request.json() as Epub;

        const groupGroupArray = [];

        model.navigation.map(n => {
            const groupArray = [];
            n.nestedItems.map((data: any) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data.htmlContentFile.content, data.htmlContentFile.contentMimeType);
                const txt = doc.documentElement.querySelector("body").textContent;

                const ary = txt.split(/([!.?]+\n)/);


                const x = this.partSize - ary.length % this.partSize;

                for (let i = 0; i < x; i++) {
                    ary.push("");
                }

                const content = [];

                while (ary.length > 0) {
                    let str = "";
                    for (let i = 0; i < this.partSize; i++) {
                        const x = ary.shift();
                        str += x;
                    }

                    if (str.trim() !== "") {
                        content.push(str.trim());
                    }
                }

                if (content.length > 0) {
                    groupArray.push({ title: data.title, content: content });
                }

            });
            groupGroupArray.push(groupArray);
        });

        return { title: model.title, authorx: model.author, description: model.description, content: groupGroupArray };
    }

    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(EpubReader, { class: "epubViewer" });
    }

    public SetParam(name: string, value: any) {

        if (this.IsInitialized) {
            this.Render();
        }
    }

    private readonly open = (e: MouseEvent, dir: string) => {

    };

    private partSize = 10;

    click(n: number) {
        console.log(n)
    }

    click2(n: number, n2: number) {
        console.log(n)
    }


    protected View(): HTMLElement {
        if (this.model !== undefined) {
            return <div>
                <nav class="tableOfContent">
                    <ul>
                        {...this.model.content.map((n, i) => n.map(y => <li onClick={b => this.click(i)}>{y.title}
                                    <ul>
                                        {...y.content.map((x, i2) => <li click2={b => this.click2(i, i2)} > part{i2}</li>)}
                                    </ul>
                            </li>))
                        }
                    </ul>
                </nav>
                <div class="BookText">
                    {...this.content.map(n => <pre>{n}</pre>)}
                </div>
            </div>;
        }

        return <div>test</div>
    }
}