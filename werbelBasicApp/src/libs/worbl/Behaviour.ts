import { PsudoInterface } from "./PsudoInterface.js";//[[ts]]

export abstract class Behaviour extends PsudoInterface {
    public abstract Apply(element: HTMLElement): void;
}
