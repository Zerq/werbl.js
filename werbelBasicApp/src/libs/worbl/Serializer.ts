import { RegisterService } from "./IOC.js";
import { ISerializer } from "./types.js";

export function GetConstructorName(obj: any): string | null {
    const generalType = typeof obj;

    switch (generalType) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "symbol":
        case "undefined":
        case "function": return null;
    }

    if (obj.$type) {
        return obj.$type;
    }

    return Object.getPrototypeOf(obj).constructor.name;
}


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

@RegisterService(ISerializer)
export class Serializer implements ISerializer {


    #typeHandlers = new Map<string, (obj: any) => any>();


    public RegisterTypeHandler(name: string, handler: (obj: any) => any): void {
        this.#typeHandlers.set(name, handler);
    }

    private circularReplacer() {

        const map = new DualMap<String, any>();

        return (key: string, value: any) => {
            if (typeof value === "object" && value !== null) {

                if (value?.$type) {
                    const handler = this.#typeHandlers.get(value.$type);
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

    private reviver(key: string, value: any, instances: Map<string, any>) {

        if (value.$type !== undefined) {
            const handler = this.#typeHandlers.get(value.$type);
            if (handler) {
                value = handler(value);
            }
        }

        if (value.$id !== undefined) {
            instances.set(value.$id, value);
        }

        if (value.$ref !== undefined) {
            value = instances.get(value.$ref);
        }

        return value;
    }

    public Serialize<T>(obj: T): string {
        return JSON.stringify(obj, this.circularReplacer());
    }


    public Deserialize<T>(val: string): T {
        const temp = new Map<string, any>();

        return JSON.parse(val, (key: string, value: any) => {
            return this.reviver(key, value, temp);
        }) as T;
    }
}
