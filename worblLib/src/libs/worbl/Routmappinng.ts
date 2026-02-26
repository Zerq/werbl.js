import { ParamsObj } from "./Router.js";//[[ts]]

export class Routmappinng {
    public constructor(public ctrName: string, public func?: (params: ParamsObj) => void) { }
}