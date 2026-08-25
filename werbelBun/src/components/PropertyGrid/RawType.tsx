import { AbsCtr } from "../../libs/worbl/types";
import { EditorBase } from "./EditorBase";




export type RawType = "undefined" | "object" | "boolean" | "number" | "bigint" | "string" | "symbol" | "function" | "object";
export const AllRawTypes: Array<RawType> = ["undefined", "object", "boolean", "number", "bigint", "string", "symbol", "function", "object"];

export interface MetaData {
    RawType: RawType;
    Type?: string;
    Properties?: Map<string, MetaData>;
    Crude?: Boolean;
    Editor?: AbsCtr<EditorBase<unknown>>;
}

export interface TypedLike {
    $type: string;
}
