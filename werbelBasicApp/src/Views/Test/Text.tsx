import { BaseComponent } from "../../libs/worbl/BaseComponent.js";
import { React } from "../../libs/worbl/JSX.js";
import { CSS, Header } from "../../libs/worbl/CSS.js";
import { IOC } from "../../libs/worbl/IOC.js";
import { HomeView } from "../Home/HomeView.js";
import { Route } from "../../libs/worbl/Router.js";
import { Component } from "../../libs/worbl/Component.js";
import { IComponentRegistry } from "../../libs/worbl/types.js";
import { useCallback } from "react";



export class DualMap<A, B> {

    #map: Map<A | undefined, B | undefined> = new Map();
    #imap: Map<B | undefined, A | undefined> = new Map();

    public KeyOf(value: B | undefined) {
        return this.#imap.get(value);
    }
    public ValueOf(key: A | undefined) {
        return this.#map.get(key);
    }


    public Set(key: A, value: B) {
        this.#map.set(key, value);
        this.#imap.set(value, key);
    }

    public DeleteKey(key: A) {
        const value = this.#map.get(key);
        this.#map.delete(key);
        this.#imap.delete(value);
    }

    public DeleteValue(value: any) {
        const key = this.#imap.get(value);
        this.#map.delete(key);
        this.#imap.delete(value);
    }

    public HasKey(key: A) {
        return this.#map.has(key);
    }

    public hasValue(obj: B) {
        return this.#imap.has(obj);
    }

    public forEach(callback: (val: A | undefined, key: B | undefined) => void) {
        this.#imap.forEach(callback);
    }

    public Count(callback: (val: A | undefined, key: B | undefined) => boolean) {
        let result = 0;

        this.forEach((a, b) => {
            if (callback(a, b)) {
                result++;
            }
        })

        return result;
    }

    public Where(callback: (val: A | undefined, key: B | undefined) => boolean) {
        const map: Map<A | undefined, B | undefined> = new Map();
        this.forEach((a, b) => {
            if (callback(a, b)) {
                map.set(a, b);
            }
        })
        return map;
    }

    public Select<T>(callback: (val: A | undefined, key: B | undefined) => T): Array<T> {
        const result: Array<T> = [];
        this.forEach((a, b) => {
            result.push(callback(a, b));
        })
        return result;
    }

}

export class Serializer {
    private constructor() { }
    static #instance: Serializer;
    public static get Instance() {
        if (!this.#instance) {
            this.#instance = new Serializer();
        }
        return this.#instance;
    }

    public TypeHandlers = new Map<string, (obj: any) => any>();

    private circularReplacer() {

        const map = new DualMap<String, any>();

        return (key: string, value: any) => {
            if (typeof value === "object" && value !== null) {

                if (value?.$type) {
                    const handler = this.TypeHandlers.get(value.$type);
                    if (handler) {
                        value = handler(value);
                    }
                }

                if (!map.hasValue(value)) {
                    value.$id = crypto.randomUUID();
                    map.Set(value.$id, value);
                    return value;
                }
                else {
                    return { $ref: map.KeyOf(value) }
                }

            }
            return value;
        };
    }

    private reviver(me: any, key: string, value: any, instances: Map<string, any>) {

        if (key === "$id") {
            instances.set(value, me);
        }

        if (key === "$ref") {

            me = instances.get(value);
        }

        return value;
    }

    public Serialize<T>(obj: T): string {
        return JSON.stringify(obj, this.circularReplacer());
    }


    public Deserialize<T>(val: string): T {
        const temp = new Map<string, any>();
        return JSON.parse(val, function (key: string, value: any) {
            this.reviver(this, key, value, temp);
        }) as T;
    }
}


class TestNode {
    $type = TestNode.name;
    parent?: TestNode = undefined;
    Name: string = "";
    Created: Date = new Date();
    Children: Array<TestNode> = [];
}
Serializer.Instance.TypeHandlers.set(TestNode.name, o => {

    return o;
});


@Route("#test")
@Component("test-view")
@CSS("./Test.css", import.meta)
export class Test extends BaseComponent<void> {
    protected makeContainer(): HTMLElement {
        return this.makeContainerDefault(Test);
    }

    public constructor() {
        super();
    }

    public SetParam(name: string, value: any): void {

    }

    protected View(): HTMLElement {

        const result = (result: boolean) => {
            if (result) {
                return <span class="testPass">Passed</span>
            } else {
                return <span class="testFailed">Failed</span>
            }
        };

        const testNode = new TestNode();
        testNode.Name = "root";

        const tn2 = new TestNode();
        tn2.Name = "t2";
        tn2.parent = testNode;


        const tn3 = new TestNode();
        tn3.Name = "t2";
        tn3.parent = testNode;



        const tn2_1 = new TestNode();
        tn2_1.Name = "tn2_1";
        tn2.Children.push(tn2_1);
        tn2_1.parent = tn2;


        const tn2_2 = new TestNode();
        tn2_2.Name = "tn2_2";
        tn2.Children.push(tn2_2);
        tn2.parent = tn2_2;

        testNode.Children.push(
            tn2, tn3
        )

        const serializerTest = () => {
            const json = Serializer.Instance.Serialize(testNode);
            return result(json.indexOf("$ref") != -1);
        };
        const json = Serializer.Instance.Serialize(testNode);


        const obj = Serializer.Instance.Deserialize(json);



        return <div class="testList">
            <header>Tests</header>
            <dl>
                <dt><span class="padded">$ref found</span></dt>
                <dd>
                    {result(json.indexOf("$ref") != -1)}
                </dd>
                <dt><span class="padded">$type found</span></dt>
                <dd>
                    {result(json.indexOf("$type") != -1)}
                </dd>
            </dl>
        </div>;
    }
}