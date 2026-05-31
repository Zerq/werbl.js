import { PsudoInterface } from "./PsudoInterface";

export abstract class Behaviour extends PsudoInterface {
    public abstract Apply(element: HTMLElement): void;
}
