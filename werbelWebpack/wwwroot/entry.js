/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Views/Home/HomeView.tsx":
/*!*************************************!*\
  !*** ./src/Views/Home/HomeView.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeView": () => (/* binding */ HomeView)
/* harmony export */ });
/* harmony import */ var _libs_worbl_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/worbl/BaseComponent.js */ "./src/libs/worbl/BaseComponent.js");
/* harmony import */ var _libs_worbl_Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/worbl/Component.js */ "./src/libs/worbl/Component.js");
/* harmony import */ var _libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/worbl/JSX.js */ "./src/libs/worbl/JSX.js");
/* harmony import */ var _libs_worbl_Router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/worbl/Router.js */ "./src/libs/worbl/Router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HomeView_1;




let HomeView = HomeView_1 = class HomeView extends _libs_worbl_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    Name;
    constructor() {
        super();
        this.model = {
            checked: true,
            list: [{ burklax: 3, blarg: true, splarg: "hello" }, { burklax: 23, blarg: false, splarg: "zog zog zog" }, { burklax: 223, blarg: true, splarg: "weeee" }]
        };
        this.Render();
    }
    makeContainer() {
        return this.makeContainerDefault(HomeView_1, { class: "HomeView" });
    }
    SetParam(name, value) {
        if (name === "Name") {
            this.Name = value;
        }
    }
    changed(e) {
        console.log("checkbox changed to " + e.detail);
    }
    View() {
        return (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("div", null,
            (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("h2", null, "What is Werbl"),
            (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("p", null,
                "Its a nonsense word i came up with.",
                (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("br", null),
                "Its my low dependency frontend library.",
                (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("br", null),
                (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("br", null),
                "Basically the goal is to make things as simple as possible and ideally make the source code always avalible and very easy to read and understand.",
                (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("br", null),
                "if people look at it and go wait this is so fucking simple i could write this shit.",
                (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("br", null),
                (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("br", null),
                "that yay! that is what i was aiming for.",
                (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("br", null),
                "Ideally it should be so simple it can be re-writen from scratch in a week or two.. that may not be entierly achivable but hey best attempt.",
                (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("br", null),
                "Jquery becase redundant as web tech moved on this project is basically here to see how far of are we from making thing like react and angular redundant.",
                (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("br", null),
                (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("br", null),
                "or at least so simple to recreate yourself that its near redundant.",
                (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("br", null)));
    }
};
HomeView = HomeView_1 = __decorate([
    (0,_libs_worbl_Router_js__WEBPACK_IMPORTED_MODULE_3__.Route)("#home"),
    (0,_libs_worbl_Component_js__WEBPACK_IMPORTED_MODULE_1__.Component)("home-view"),
    __metadata("design:paramtypes", [])
], HomeView);



/***/ }),

/***/ "./src/Views/about/AboutView.tsx":
/*!***************************************!*\
  !*** ./src/Views/about/AboutView.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutView": () => (/* binding */ AboutView)
/* harmony export */ });
/* harmony import */ var _libs_worbl_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/worbl/BaseComponent.js */ "./src/libs/worbl/BaseComponent.js");
/* harmony import */ var _libs_worbl_Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/worbl/Component.js */ "./src/libs/worbl/Component.js");
/* harmony import */ var _libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/worbl/JSX.js */ "./src/libs/worbl/JSX.js");
/* harmony import */ var _libs_worbl_Router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/worbl/Router.js */ "./src/libs/worbl/Router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AboutView_1;




let AboutView = AboutView_1 = class AboutView extends _libs_worbl_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    Name;
    constructor() {
        super();
        this.Render();
    }
    makeContainer() {
        return this.makeContainerDefault(AboutView_1, { class: "AboutView" });
    }
    SetParam(name, value) {
        if (name === "page") {
            window.document.title = value;
        }
    }
    View() {
        return (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("div", null, "blarg");
    }
};
AboutView = AboutView_1 = __decorate([
    (0,_libs_worbl_Router_js__WEBPACK_IMPORTED_MODULE_3__.Route)("#about"),
    (0,_libs_worbl_Router_js__WEBPACK_IMPORTED_MODULE_3__.Route)("#about/{page}"),
    (0,_libs_worbl_Component_js__WEBPACK_IMPORTED_MODULE_1__.Component)("about-view"),
    __metadata("design:paramtypes", [])
], AboutView);



/***/ }),

/***/ "./src/libs/worbl/BaseComponent.js":
/*!*****************************************!*\
  !*** ./src/libs/worbl/BaseComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _IOC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IOC.js */ "./src/libs/worbl/IOC.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./src/libs/worbl/types.js");


class BaseComponent {
    model;
    #container;
    #id;
    get Id() {
        return this.#id;
    }
    set Id(val) {
        this.#id = val;
    }
    get Container() {
        return this.#container;
    }
    constructor() {
        this.#container = this.makeContainer();
    }
    children;
    SetChildren(children) {
        this.children = children;
    }
    makeContainerDefault(ctr, params = { tagType: undefined, class: undefined }) {
        this.Id = crypto.randomUUID();
        ;
        const componentRegistry = _IOC_js__WEBPACK_IMPORTED_MODULE_0__.IOC.Instance.Service(_types_js__WEBPACK_IMPORTED_MODULE_1__.IComponentRegistry);
        /*optional params --> */
        const element = document.createElement(params.tagType ?? "div");
        if (params.class) {
            element.className = params.class;
        }
        /*<-- optional params  */
        const tag = componentRegistry.GetTag(ctr);
        if (tag === undefined) {
            return undefined;
        }
        element.setAttribute("data-tagtype", tag);
        element.id = this.Id;
        return element;
    }
    Render() {
        this.#container.innerHTML = "";
        const view = this.View();
        if (view !== null) {
            this.#container.appendChild(view);
        }
    }
}
//# sourceMappingURL=BaseComponent.js.map

/***/ }),

/***/ "./src/libs/worbl/BasicApproot.js":
/*!****************************************!*\
  !*** ./src/libs/worbl/BasicApproot.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicAppRoot": () => (/* binding */ BasicAppRoot)
/* harmony export */ });
/* harmony import */ var _IOC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IOC.js */ "./src/libs/worbl/IOC.js");
/* harmony import */ var _JSX_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JSX.js */ "./src/libs/worbl/JSX.js");
/* harmony import */ var _BaseComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseComponent.js */ "./src/libs/worbl/BaseComponent.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "./src/libs/worbl/types.js");




class BasicAppRoot extends _BaseComponent_js__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor() {
        super();
        window.addEventListener("hashchange", e => {
            this.#router.HandleRout(location.hash);
        });
        this.Route(this.#router);
    }
    #router = _IOC_js__WEBPACK_IMPORTED_MODULE_0__.IOC.Instance.Service(_types_js__WEBPACK_IMPORTED_MODULE_3__.IRouter);
    #componentRegistry = _IOC_js__WEBPACK_IMPORTED_MODULE_0__.IOC.Instance.Service(_types_js__WEBPACK_IMPORTED_MODULE_3__.IComponentRegistry);
    setInitialView(view) {
        requestAnimationFrame(() => {
            location.hash = view;
            this.#router.HandleRout(location.hash);
        });
    }
    renderView(view, params, children) {
        const result = this.#componentRegistry.CreateElement(view, params, children);
        this.Container.querySelector("main").innerHTML = "";
        result.Render();
        this.Container.querySelector("main").appendChild(result.Container);
    }
    makeContainer() {
        this.Id = crypto.randomUUID();
        return (0,_JSX_js__WEBPACK_IMPORTED_MODULE_1__.JSX)("div", { id: this.Id });
    }
    SetParam(name, value) { }
}
//# sourceMappingURL=BasicApproot.js.map

/***/ }),

/***/ "./src/libs/worbl/CSS.js":
/*!*******************************!*\
  !*** ./src/libs/worbl/CSS.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSS": () => (/* binding */ CSS)
/* harmony export */ });
/* harmony import */ var _JSX_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSX.js */ "./src/libs/worbl/JSX.js");

function CSS(href) {
    return (ctor) => {
        const possiblecss = document.querySelectorAll(`link[rel="stylesheet"][href="{href}"]`);
        if (possiblecss.length === 0) {
            document.head.appendChild((0,_JSX_js__WEBPACK_IMPORTED_MODULE_0__.JSX)("link", { rel: "stylesheet", href: location.origin + href }));
        }
    };
}
//# sourceMappingURL=CSS.js.map

/***/ }),

/***/ "./src/libs/worbl/Component.js":
/*!*************************************!*\
  !*** ./src/libs/worbl/Component.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _IOC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IOC.js */ "./src/libs/worbl/IOC.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./src/libs/worbl/types.js");


function Component(tagName) {
    return (ctor) => {
        _IOC_js__WEBPACK_IMPORTED_MODULE_0__.IOC.Instance.Service(_types_js__WEBPACK_IMPORTED_MODULE_1__.IComponentRegistry).RegisterElement(tagName, ctor);
    };
}
//# sourceMappingURL=Component.js.map

/***/ }),

/***/ "./src/libs/worbl/ComponentRegistry.js":
/*!*********************************************!*\
  !*** ./src/libs/worbl/ComponentRegistry.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IOC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IOC.js */ "./src/libs/worbl/IOC.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./src/libs/worbl/types.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ComponentRegistry = class ComponentRegistry {
    GetTag(ctr) {
        if (!this.#reverseMap?.has(ctr)) {
            return undefined;
        }
        return this.#reverseMap.get(ctr);
    }
    GetTagByCtrName(ctrName) {
        let result = undefined;
        this.#reverseMap.forEach((val, key) => {
            if (key.name === ctrName) {
                result = val;
            }
        });
        return result;
    }
    #map = new Map();
    #reverseMap = new Map();
    // public Register(string, )
    static instance;
    Has(tag) {
        return this.#map.has(tag);
    }
    RegisterElement(tag, ctr) {
        this.#map.set(tag, ctr);
        this.#reverseMap.set(ctr, tag);
    }
    CreateElement(tag, params, children) {
        let ctr = this.#map.get(tag);
        if (ctr === undefined) {
            return undefined;
        }
        const newComponent = new ctr();
        for (let key in params) {
            newComponent.SetParam(key, params[key]);
        }
        newComponent.SetChildren(children);
        newComponent.Render();
        return newComponent;
    }
};
ComponentRegistry = __decorate([
    (0,_IOC_js__WEBPACK_IMPORTED_MODULE_0__.RegisterService)(_types_js__WEBPACK_IMPORTED_MODULE_1__.IComponentRegistry)
], ComponentRegistry);
//# sourceMappingURL=ComponentRegistry.js.map

/***/ }),

/***/ "./src/libs/worbl/Components/NavMenu/NavMenu.js":
/*!******************************************************!*\
  !*** ./src/libs/worbl/Components/NavMenu/NavMenu.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavMenu": () => (/* binding */ NavMenu)
/* harmony export */ });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Component.js */ "./src/libs/worbl/Component.js");
/* harmony import */ var _CSS_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CSS.js */ "./src/libs/worbl/CSS.js");
/* harmony import */ var _JSX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../JSX.js */ "./src/libs/worbl/JSX.js");
/* harmony import */ var _BaseComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../BaseComponent.js */ "./src/libs/worbl/BaseComponent.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NavMenu_1;




let NavMenu = NavMenu_1 = class NavMenu extends _BaseComponent_js__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
    constructor() {
        super();
        this.model = { Title: "", Items: [] };
        this.Render();
    }
    makeContainer() {
        return this.makeContainerDefault(NavMenu_1, { class: "navMenu" });
    }
    SetParam(name, value) {
        if (name.toLowerCase() === "title") {
            this.model.Title = value;
        }
        if (name.toLowerCase() === "items") {
            this.model.Items = value;
        }
        this.Render();
    }
    View() {
        return (0,_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("header", null,
            (0,_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("h1", null, this.model.Title),
            (0,_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("nav", null,
                (0,_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("ul", null, ...this.model.Items.map(n => (0,_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("li", null,
                    (0,_JSX_js__WEBPACK_IMPORTED_MODULE_2__.JSX)("a", { href: n.Url }, n.Name))))));
    }
};
NavMenu = NavMenu_1 = __decorate([
    (0,_Component_js__WEBPACK_IMPORTED_MODULE_0__.Component)("nav-box"),
    (0,_CSS_js__WEBPACK_IMPORTED_MODULE_1__.CSS)("/libs/worbl/Components/NavMenu/NavMenu.css"),
    __metadata("design:paramtypes", [])
], NavMenu);

//# sourceMappingURL=NavMenu.js.map

/***/ }),

/***/ "./src/libs/worbl/IOC.js":
/*!*******************************!*\
  !*** ./src/libs/worbl/IOC.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IOC": () => (/* binding */ IOC),
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
function RegisterService(abs, ...params) {
    return (ctor) => {
        IOC.Instance.RegisterService(abs, new ctor(params));
    };
}
class IOC {
    static instance;
    static get Instance() {
        if (IOC?.instance === undefined) {
            IOC.instance = new IOC();
        }
        return IOC.instance;
    }
    constructor() {
    }
    ctrs = new Map();
    RegisterCtr(abs, ctr) {
        this.ctrs.set(abs.name, ctr);
    }
    New(abs, ...params) {
        const ctr = this.ctrs.get(abs.name);
        if (ctr === undefined) {
            throw new Error(abs.name + "had no matching constructor");
        }
        return new ctr(params);
    }
    services = new Map();
    RegisterService(abs, inst) {
        this.services.set(abs.name, inst);
    }
    Service(abs) {
        return this.services.get(abs.name);
    }
}
//# sourceMappingURL=IOC.js.map

/***/ }),

/***/ "./src/libs/worbl/JSX.js":
/*!*******************************!*\
  !*** ./src/libs/worbl/JSX.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSX": () => (/* binding */ JSX),
/* harmony export */   "__frag": () => (/* binding */ __frag)
/* harmony export */ });
/* harmony import */ var _IOC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IOC.js */ "./src/libs/worbl/IOC.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./src/libs/worbl/types.js");


const __frag = "__frag";
function JSX(tag, attributes, ...children) {
    const metaData = _IOC_js__WEBPACK_IMPORTED_MODULE_0__.IOC.Instance.Service(_types_js__WEBPACK_IMPORTED_MODULE_1__.IMetaDataService);
    const componentRegistry = _IOC_js__WEBPACK_IMPORTED_MODULE_0__.IOC.Instance.Service(_types_js__WEBPACK_IMPORTED_MODULE_1__.IComponentRegistry);
    // let contexts = {    ...(attributes[ContexTagtName] || {}) };
    // if (tag === ContexTagtName){
    // }
    if (tag === __frag) {
        const docFrag = document.createDocumentFragment();
        children.forEach(child => {
            const type = metaData.Get(child);
            if (type.Name === "string") {
                docFrag.appendChild(document.createTextNode(child));
                return;
            }
            if (type.Name === "number") {
                docFrag.appendChild(document.createTextNode(child + ""));
                return;
            }
            if (type.Name === "bigint") {
                docFrag.appendChild(document.createTextNode(child + ""));
                return;
            }
            if (type.Name === "boolean") {
                docFrag.appendChild(document.createTextNode(child + ""));
                return;
            }
            if (type.Name === "Date") {
                docFrag.appendChild(document.createTextNode(child.toString()));
                return;
            }
            docFrag.appendChild(child);
        });
        return docFrag;
    }
    if (componentRegistry.Has(tag)) {
        const newElement = componentRegistry.CreateElement(tag, attributes, children);
        if (newElement === undefined) {
            throw new Error("");
        }
        return newElement.Container;
    }
    const newElement = document.createElement(tag);
    for (const key in attributes) {
        if (key.startsWith("on")) {
            newElement.addEventListener(key.substring(2).toLowerCase(), attributes[key]);
            continue;
        }
        newElement.setAttribute(key, attributes[key]);
    }
    children.forEach(elm => {
        if (!elm) {
            return;
        }
        const type = metaData.Get(elm);
        if (type.Name === "string") {
            newElement.appendChild(document.createTextNode(elm));
            return;
        }
        if (type.Name === "number") {
            newElement.appendChild(document.createTextNode(elm + ""));
            return;
        }
        if (type.Name === "bigint") {
            newElement.appendChild(document.createTextNode(elm + ""));
            return;
        }
        if (type.Name === "boolean") {
            newElement.appendChild(document.createTextNode(elm + ""));
            return;
        }
        if (type.Name === "Date") {
            newElement.appendChild(document.createTextNode(elm.toString()));
            return;
        }
        newElement.appendChild(elm);
    });
    return newElement;
}
//# sourceMappingURL=JSX.js.map

/***/ }),

/***/ "./src/libs/worbl/MetaData.js":
/*!************************************!*\
  !*** ./src/libs/worbl/MetaData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IOC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IOC.js */ "./src/libs/worbl/IOC.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./src/libs/worbl/types.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MetaDataService = class MetaDataService {
    #annotations = new Map();
    GetAnnotate(typeName) {
        return this.#annotations.get(typeName);
    }
    Annotate(type, annotationData) {
        if (this.#annotations.has(type)) {
            this.#annotations.set(type, []);
        }
        const list = this.#annotations.get(type);
        if (list === undefined) {
            throw new Error("could not get annotation list");
        }
        if (list.indexOf(annotationData) === -1) {
            list.push(annotationData);
        }
    }
    Remove(type, annotationData) {
        if (this.#annotations.has(type)) {
            this.#annotations.set(type, []);
        }
        const list = this.#annotations.get(type);
        if (list === undefined) {
            throw new Error("could not get annotation list");
        }
        const index = list.indexOf(annotationData);
        if (index !== -1) {
            list.splice(index, 1);
        }
    }
    Get(object) {
        let result = typeof object;
        if (result !== "object") {
            return { Name: result, IsPrimitive: true };
        }
        result = Object.getPrototypeOf(object).constructor.name;
        return { Name: result, IsPrimitive: false };
    }
};
MetaDataService = __decorate([
    (0,_IOC_js__WEBPACK_IMPORTED_MODULE_0__.RegisterService)(_types_js__WEBPACK_IMPORTED_MODULE_1__.IMetaDataService)
], MetaDataService);
//# sourceMappingURL=MetaData.js.map

/***/ }),

/***/ "./src/libs/worbl/PsudoInterface.js":
/*!******************************************!*\
  !*** ./src/libs/worbl/PsudoInterface.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PsudoInterface": () => (/* binding */ PsudoInterface)
/* harmony export */ });
class PsudoInterface {
    constructor() {
        throw new Error("Do not extend PsudoInterface based class it intended to be implemented and treated as an interface the class should be abstract and the constructor private");
    }
}
//# sourceMappingURL=PsudoInterface.js.map

/***/ }),

/***/ "./src/libs/worbl/Router.js":
/*!**********************************!*\
  !*** ./src/libs/worbl/Router.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route),
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _IOC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IOC.js */ "./src/libs/worbl/IOC.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./src/libs/worbl/types.js");
/* harmony import */ var _Routmappinng_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Routmappinng.js */ "./src/libs/worbl/Routmappinng.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Router = class Router {
    componentRegistry = _IOC_js__WEBPACK_IMPORTED_MODULE_0__.IOC.Instance.Service(_types_js__WEBPACK_IMPORTED_MODULE_1__.IComponentRegistry);
    Parse(format, data) {
        const rex = /({([^^}]*)})(.?)/g;
        const formatRex = new RegExp(format.replace(rex, "(?<$2>[^\\$3])$3").replace("[^\\]", ".*"), "g");
        const matches = formatRex.exec(data);
        return matches?.groups;
    }
    defaultRouteHandler;
    HandleRout(hash) {
        this.routeMappings.forEach((val, key) => {
            if (new RegExp(key).test(hash)) {
                const params = this.Parse(key, hash);
                const route = this.routeMappings.get(key);
                const func = route?.func;
                if (func) {
                    func(params ? params : {});
                }
                else {
                    if (route === undefined) {
                        throw new Error("Route not defined");
                    }
                    const tag = this.componentRegistry.GetTagByCtrName(route.ctrName);
                    this.defaultRouteHandler?.(tag, params ? params : {});
                }
            }
        });
    }
    ;
    routeMappings = new Map();
};
Router = __decorate([
    (0,_IOC_js__WEBPACK_IMPORTED_MODULE_0__.RegisterService)(_types_js__WEBPACK_IMPORTED_MODULE_1__.IRouter)
], Router);

function Route(path) {
    return (ctor) => {
        const service = _IOC_js__WEBPACK_IMPORTED_MODULE_0__.IOC.Instance.Service(_types_js__WEBPACK_IMPORTED_MODULE_1__.IRouter);
        service.routeMappings.set(path, new _Routmappinng_js__WEBPACK_IMPORTED_MODULE_2__.Routmappinng(ctor.name));
    };
}
//# sourceMappingURL=Router.js.map

/***/ }),

/***/ "./src/libs/worbl/Routmappinng.js":
/*!****************************************!*\
  !*** ./src/libs/worbl/Routmappinng.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routmappinng": () => (/* binding */ Routmappinng)
/* harmony export */ });
class Routmappinng {
    ctrName;
    func;
    constructor(ctrName, func) {
        this.ctrName = ctrName;
        this.func = func;
    }
}
//# sourceMappingURL=Routmappinng.js.map

/***/ }),

/***/ "./src/libs/worbl/types.js":
/*!*********************************!*\
  !*** ./src/libs/worbl/types.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IComponentRegistry": () => (/* binding */ IComponentRegistry),
/* harmony export */   "IMetaDataService": () => (/* binding */ IMetaDataService),
/* harmony export */   "IRouter": () => (/* binding */ IRouter)
/* harmony export */ });
/* harmony import */ var _PsudoInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PsudoInterface.js */ "./src/libs/worbl/PsudoInterface.js");

class IComponentRegistry extends _PsudoInterface_js__WEBPACK_IMPORTED_MODULE_0__.PsudoInterface {
    constructor() { super(); }
}
class IMetaDataService extends _PsudoInterface_js__WEBPACK_IMPORTED_MODULE_0__.PsudoInterface {
    constructor() { super(); }
}
class IRouter extends _PsudoInterface_js__WEBPACK_IMPORTED_MODULE_0__.PsudoInterface {
    constructor() { super(); }
    defaultRouteHandler;
}
//# sourceMappingURL=types.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/entry.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _libs_worbl_IOC_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/worbl/IOC.js */ "./src/libs/worbl/IOC.js");
/* harmony import */ var _libs_worbl_MetaData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/worbl/MetaData.js */ "./src/libs/worbl/MetaData.js");
/* harmony import */ var _libs_worbl_ComponentRegistry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/worbl/ComponentRegistry.js */ "./src/libs/worbl/ComponentRegistry.js");
/* harmony import */ var _libs_worbl_Router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/worbl/Router.js */ "./src/libs/worbl/Router.js");
/* harmony import */ var _libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/worbl/JSX.js */ "./src/libs/worbl/JSX.js");
/* harmony import */ var _libs_worbl_CSS_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libs/worbl/CSS.js */ "./src/libs/worbl/CSS.js");
/* harmony import */ var _libs_worbl_Component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libs/worbl/Component.js */ "./src/libs/worbl/Component.js");
/* harmony import */ var _libs_worbl_Components_NavMenu_NavMenu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./libs/worbl/Components/NavMenu/NavMenu.js */ "./src/libs/worbl/Components/NavMenu/NavMenu.js");
/* harmony import */ var _libs_worbl_BasicApproot_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./libs/worbl/BasicApproot.js */ "./src/libs/worbl/BasicApproot.js");
/* harmony import */ var _Views_Home_HomeView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Views/Home/HomeView.js */ "./src/Views/Home/HomeView.tsx");
/* harmony import */ var _Views_about_AboutView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Views/about/AboutView.js */ "./src/Views/about/AboutView.tsx");
/* harmony import */ var _libs_worbl_types_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./libs/worbl/types.js */ "./src/libs/worbl/types.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













let AppComponent = class AppComponent extends _libs_worbl_BasicApproot_js__WEBPACK_IMPORTED_MODULE_8__.BasicAppRoot {
    Route(router) {
    }
    menuItems = [{ Name: "Home", Url: "#home" }, { Name: "About", Url: "#about" }];
    constructor() {
        super();
        this.setInitialView("#home");
        _libs_worbl_IOC_js__WEBPACK_IMPORTED_MODULE_0__.IOC.Instance.Service(_libs_worbl_types_js__WEBPACK_IMPORTED_MODULE_11__.IRouter).defaultRouteHandler = (tag, params) => {
            this.renderView(tag, params, []);
        };
    }
    View() {
        return (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_4__.JSX)(_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_4__.__frag, null,
            (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_4__.JSX)("nav-box", { title: "My Test App", items: this.menuItems }),
            (0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_4__.JSX)("main", { class: "MyApp" }));
    }
};
AppComponent = __decorate([
    (0,_libs_worbl_CSS_js__WEBPACK_IMPORTED_MODULE_5__.CSS)("/layout.css"),
    (0,_libs_worbl_Component_js__WEBPACK_IMPORTED_MODULE_6__.Component)("my-app"),
    __metadata("design:paramtypes", [])
], AppComponent);

(() => {
    document.body.appendChild((0,_libs_worbl_JSX_js__WEBPACK_IMPORTED_MODULE_4__.JSX)("my-app", null));
})();

})();

/******/ })()
;
//# sourceMappingURL=entry.js.map