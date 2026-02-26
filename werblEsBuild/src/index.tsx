import "./entry.js";
import { React } from "./libs/worbl/JSX.js";

(() => {
    document.addEventListener("readystatechange",()=> {
        if (document.readyState === "complete"){
            document.body.innerHTML = "";
            document.body.appendChild(<my-app></my-app>);
        }
    });
})();