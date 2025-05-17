import { PsudoInterface } from "./PsudoInterface.js";
import { AbsCtr, Ctr } from "./types.js";

export function RegisterService<A>(abs: AbsCtr<A>, ...params: unknown[]) {
    return (ctor: Ctr<A>) => {
        IOC.Instance.RegisterService(abs, new ctor(params));
    };
}

export function RegisterLocalized<A>(abs: AbsCtr<A>, lang: LangCode, country:string = "", fallback?:boolean) {
    return (ctor: Ctr<A>) => {
        IOC.Instance.RegisterLocalized(abs, ctor,lang, country, fallback);
    };
}


export class LocalizedLookup {
    public whiteList: Array<{Language:string, Country:string, fallback?:boolean}> = [];
    public Localized = new Map<string,any>();
}

export type LangCode = "zu" | "za" | "yo" | "yi" | "xh" | "wo" | "fy" | "cy" | "wa" | "vo" | "vi" | "ve" | "uz" | "ur" |
    "uk" | "ug" | "tw" | "tk" | "tr" | "tn" | "ts" | "to" | "ti" | "bo" | "th" | "te" | "tt" | "ta" | "tg" | "ty" | "tl" |
    "sv" | "ss" | "sw" | "su" | "es" | "st" | "nr" | "so" | "sl" | "sk" | "si" | "sd" | "ii" | "sn" | "sr" | "sc" | "sa" |
    "sg" | "sm" | "ru" | "rn" | "rm" | "ro" | "qu" | "pa" | "pt" | "pl" | "fa" | "ps" | "pi" | "os" | "om" | "or" | "oj" |
    "oc" | "nn" | "nb" | "no" | "se" | "nd" | "ne" | "ng" | "nv" | "na" | "mn" | "mh" | "mr" | "mi" | "gv" | "mt" | "ml" |
    "ms" | "mg" | "mk" | "lb" | "lu" | "lt" | "ln" | "li" | "lv" | "la" | "lo" | "ky" | "ku" | "kj" | "ko" | "kg" | "kv" |
    "rw" | "ki" | "kk" | "ks" | "kr" | "kn" | "kl" | "jv" | "ja" | "it" | "ga" | "ik" | "iu" | "ie" | "ia" | "id" | "ig" |
    "io" | "is" | "hu" | "ho" | "hi" | "hz" | "he" | "ha" | "ht" | "gu" | "gn" | "el" | "de" | "ka" | "lg" | "gl" | "gd" |
    "ff" | "fr" | "fi" | "fj" | "fo" | "ee" | "et" | "eo" | "en" | "dz" | "nl" | "dv" | "da" | "cs" | "hr" | "cr" | "co" |
    "kw" | "cv" | "cu" | "zh" | "ny" | "ce" | "ch" | "km" | "ca" | "my" | "bg" | "br" | "bs" | "bi" | "bn" | "be" | "eu" |
    "ba" | "bm" | "az" | "ay" | "ae" | "av" | "as" | "hy" | "an" | "ar" | "am" | "sq" | "ak" | "af" | "aa" | "ab";


export class IOC {
    private static instance: IOC;
    public static get Instance(): IOC {
        if (IOC?.instance === undefined) {
            IOC.instance = new IOC();
        }
        return IOC.instance;
    }

    private constructor() {

    }
    
    public localized = new Map<string, LocalizedLookup>();
    
    public RegisterLocalized<T extends PsudoInterface>(abs: AbsCtr<T>, ctr: Ctr<T>, lang: LangCode, country:string = "", fallback?:boolean){
        let collection: LocalizedLookup;
        if (!this.localized.has(abs.name)){
            collection = new LocalizedLookup();
            collection.whiteList.push({Language:lang, Country: country, fallback: fallback});
            collection.Localized.set(`${lang}-${country}`, new ctr());
            this.localized.set(abs.name, collection)
        }
        else {
            let collection = this.localized.get(abs.name);
            collection.whiteList.push({Language:lang, Country: country, fallback: fallback});
            collection.Localized.set(`${lang}-${country}`, new ctr());
        }
    }

    public GetLocalized<T, V extends AbsCtr<T>>(abs:V,  lang: LangCode, country:string = ""){
        if (!this.localized.has(abs.name)){
            throw new Error(abs.name + " is not registered");
        }

        if(this.localized.get(abs.name).Localized.has(`${lang}-${country}`)){
            return this.localized.get(abs.name).Localized.has(`${lang}-${country}`);
        }else {
            const x = this.localized.get(abs.name);
            const fallback = x.whiteList.find(n=> n.fallback);
            return this.localized.get(abs.name).Localized.has(`${fallback.Language}-${fallback.Country}`);
        }
    }


    private ctrs = new Map<string, Ctr<unknown>>();

    public RegisterCtr<T extends PsudoInterface>(abs: AbsCtr<T>, ctr: Ctr<T>) {
        this.ctrs.set(abs.name, ctr);
    }

    public New<T>(abs: AbsCtr<T>, ...params: unknown[]): T {
        const ctr = this.ctrs.get(abs.name);

        if (ctr === undefined){
            throw new Error(abs.name + "had no matching constructor");
        }

        return new ctr(params) as T;
    }

    private services = new Map<string, unknown>();

    public RegisterService<T>(abs: AbsCtr<T>, inst: T) {
        this.services.set(abs.name, inst);
    }

    public Service<T>(abs: AbsCtr<T>): T {
        return this.services.get(abs.name) as T;
    }
}