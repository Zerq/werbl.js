import { PsudoInterface } from "./PsudoInterface.ts";

export abstract class Behaviour extends PsudoInterface {
    public abstract Apply(element: HTMLElement): void;
}
