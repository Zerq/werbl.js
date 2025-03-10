import { ReactNode } from "react";
import { MetaDataLike } from "./MetaData.js";
import { BaseComponent } from "./JSX.js";
import { ParamsObj, Router } from "./Router.js";

export  interface RouterLike {
    defaultRouteHandler?: (tag, params: ParamsObj)=> void;
    HandleRout(hash: string):void;
} 

/** abstract class type */
export type AbsCtr<T> = Function & { prototype: T; };
/** non-abstract class type */

export interface Ctr<T> {
    new(): T;
}

export type VoidFunc = () => void;

export interface BaseComponentLike<T> {
    get Container():HTMLElement;
    SetChildren(children:  Array<string | HTMLElement>):void;
    SetParam(name: string, value: any);
    Render():void;
}

export interface ComponentRegistryLike {
    RegisterElement<T>(tag: string, ctr: Ctr<BaseComponentLike<T>>): void;
    CreateElement<T, V extends BaseComponentLike<T>>(tag: string, params: { [name: string]: any }, children:  Array<string | boolean| number | bigint | Date| HTMLElement>): BaseComponentLike<V>;
    Has(tag): boolean;
    GetTag(ctr: Ctr<BaseComponentLike<any>>):string;
    GetTagByCtrName(ctrName:string): string;
}