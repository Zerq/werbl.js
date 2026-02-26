import { PsudoInterface } from "./PsudoInterface.js";

export abstract class Behaviour extends PsudoInterface {
    public abstract Apply(element: HTMLElement): void;
}
