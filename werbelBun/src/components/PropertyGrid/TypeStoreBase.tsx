import { RegisterService } from "../../libs/worbl/IOC";
import { MetaData, TypedLike } from "./RawType";


export abstract class TypeStoreBase {
    public abstract GetType(type: unknown): MetaData;
    public abstract RegisterMetaData(type: string, metadata: MetaData): void;
}

@RegisterService(TypeStoreBase)
export class TypeStore {
    #lookUp: Map<string, MetaData>;

    public constructor() {
        this.#lookUp = new Map();
    }

    public RegisterMetaData(type: string, metadata: MetaData): void {
        this.#lookUp.set(type, metadata);
    }

    public GetType(type: unknown, noDeeper = false): MetaData {
        if (type === null || type === undefined) {
            throw new Error("type argument cannot be null");
        }

        if (typeof (type) === "string" && this.#lookUp.has(type)) {
            return this.#lookUp.get(type)!;
        }

        if (typeof (type) === "object" && (type as TypedLike).$type !== undefined && this.#lookUp.has((type as TypedLike).$type)) {
            return this.#lookUp.get((type as TypedLike).$type)!;
        }


        const name = Object.getPrototypeOf(type).name;


        if (typeof (type) === "object" && this.#lookUp.has(name)) {
            return this.#lookUp.get(name)!;
        }

        //try your best....
        if (typeof (type) === "object") {
            const metadata = { RawType:  typeof (type), Type: name, Properties: new Map(), Crude: true } as MetaData;

            if (!noDeeper) {
                for (let prop in type) {
                    const val = (type as any)[prop];
                    metadata.Properties?.set(prop, this.GetType(val, true));
                }
            }

            this.#lookUp.set(metadata.Type!, metadata);
        }

        //promitives
        const primitiv = { RawType: typeof (type) } as MetaData;

        this.#lookUp.set(primitiv.Type!, primitiv);
        return primitiv;
    }
}
