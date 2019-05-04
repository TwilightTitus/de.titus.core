/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./src/index.js");


/***/ }),

/***/ "./node_modules/dom-api-extension/index.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-api-extension/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/dom-api-extension/src/index.js");


/***/ }),

/***/ "./node_modules/dom-api-extension/src/Global.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-api-extension/src/Global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(Global) {

	Global.de = Global.de || {};
	Global.de.titus = Global.de.titus || {};
	Global.de.titus.dom = Global.de.titus.dom || {};
	Global.de.titus.dom.api = Global.de.titus.dom.api || {};
	Global.de.titus.dom.api.extention = {
		VERSION : "2.0.0-beta1"
	};

	const parser = new DOMParser();

	Global.find = function() {
		return document.find.apply(document, arguments);
	};

	Global.ready = function() {
		return document.ready.apply(document, arguments);
	};

	Global.create = function() {
		if (typeof arguments[0] !== "string")
			throw new Error("The first argument must be a string!");

		let body = parser.parseFromString(arguments[0].trim(), arguments[1] || "text/html").find("body");
		let frag = document.createDocumentFragment();
		let nodes = body.childNodes;
		while (nodes.length != 0)
			frag.append(nodes[0]);

		return frag.childNodes;
	};
})(window || global);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/dom-api-extension/src/JQuery.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-api-extension/src/JQuery.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Global */ "./node_modules/dom-api-extension/src/Global.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom_HTMLElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/HTMLElement */ "./node_modules/dom-api-extension/src/dom/HTMLElement.js");


(function(Global) {
	/**
	 * JQuery prevent jquery
	 */
	const $ = Global.$ = Global.JQuery = Global.jQuery = Global.$ || function() {
		if (arguments.length == 0)
			return document;
		else if (arguments.length == 1) {			
			if (typeof arguments[0] === "function")
				return Global.ready.apply(Global, arguments);
			else if (typeof arguments[0] === "string") {
				if (/<[^<]+>/g.test(arguments[0]))
					return Global.create.apply(Global, arguments);
				else
					return Global.find.apply(Global, arguments);
			}
			else 
				return arguments[0];
		}
	};
})(window || global);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/Document.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/Document.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/BasicQuerySupport */ "./node_modules/dom-api-extension/src/dom/extentions/BasicQuerySupport.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/EventSupport */ "./node_modules/dom-api-extension/src/dom/extentions/EventSupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./node_modules/dom-api-extension/src/dom/extentions/ReadyEventSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Document.prototype, _extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

document.addEventListener("DOMContentLoaded", function(){
	document.trigger("ready");
});





/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/HTMLElement.js":
/*!***************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/HTMLElement.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/BasicQuerySupport */ "./node_modules/dom-api-extension/src/dom/extentions/BasicQuerySupport.js");
/* harmony import */ var _extentions_NodeQuerySupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/NodeQuerySupport */ "./node_modules/dom-api-extension/src/dom/extentions/NodeQuerySupport.js");
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./node_modules/dom-api-extension/src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extentions/EventSupport */ "./node_modules/dom-api-extension/src/dom/extentions/EventSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./node_modules/dom-api-extension/src/dom/extentions/ShowHideSupport.js");








Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLElement.prototype,_extentions_BasicQuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],_extentions_NodeQuerySupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],_extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],_extentions_EventSupport__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],_extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/HTMLInputElement.js":
/*!********************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/HTMLInputElement.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/dom-api-extension/src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLInputElement.prototype,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/HTMLSelectElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/HTMLSelectElement.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/dom-api-extension/src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLSelectElement.prototype,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/Node.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/Node.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/DataSupport */ "./node_modules/dom-api-extension/src/dom/extentions/DataSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/dom-api-extension/src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Node.prototype,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/NodeList.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/NodeList.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./node_modules/dom-api-extension/src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./node_modules/dom-api-extension/src/dom/extentions/ListSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(NodeList.prototype, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function(aFunctionName, theArguments){
	let nodes = this.values();
	let node = nodes.next();
	let results = [];
	while(node && node.value){
		node = node.value;
		if(typeof node !== "undefined" && typeof node[aFunctionName] === "function"){
			let result = node[aFunctionName].apply(node, theArguments);
			if(typeof result !== "undefined" && result != null){
				if(result instanceof Array)
					results = results.concat(result);
				else if(result instanceof NodeList)
					results = results.concat(Array.from(result));
				else
					results.push(result)
			}		
		}
		node = nodes.next();		
	}
	
	if(results.length == 0)
		return undefined;
	else if(results[0] instanceof Node)
		return NodeList.from(results);
	else
		return results;	
},NodeList.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype);


NodeList.from = function(){
	if(arguments.length == 1 && typeof arguments[0] !== "undefined" &&  arguments[0] instanceof NodeList){
		return arguments[0];		
	}
	else{
		let args = Array.from(arguments);
		let internal = {
			length: {value: 0}
		};
		
		while(args.length > 0){
			let list = Array.from(args.shift());		
			for(let i = 0; i < list.length; i++){
				if(typeof list[i] !== "undefined" && list[i] instanceof Node){
					internal[i] = {value: list[i], enumerable: true};
					internal.length.value++;
				}
			}
		}
	
		return Object.create(NodeList.prototype,internal );
	}
}

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/extentions/BasicQuerySupport.js":
/*!********************************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/extentions/BasicQuerySupport.js ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {
	const parentSelector = /:parent(\(\"([^\)]*)\"\))?/i;
	
	Prototype.find = function(aSelector) {
		let match = parentSelector.exec(aSelector);
		if(match){
			let result = this;
			if(match.index > 0){
				result = this.querySelectorAll(aSelector.substr(0, match.index));
				if(result.length == 0)
					return;
			}			
			if(typeof match[2] !== "undefined")
				result = result.parent(match[2]);
			else
				result = result.parent();
			
			if(typeof result === "undefined")
				return;
			
			let nextSelector = aSelector.substr(match.index + match[0].length).trim();
			if(nextSelector.trim().length > 0)
				return result.find(nextSelector);
			
			return result;		
		}
		else
			return this.querySelectorAll(aSelector);
	};
};
/* harmony default export */ __webpack_exports__["a"] = (support);



/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/extentions/DataSupport.js":
/*!**************************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/extentions/DataSupport.js ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {
	Prototype.data = function() {
		if (typeof this.__data === "undefined") {
			this.__data = {};
			if(typeof this.dataset !== "undefined")
				for (name in this.dataset)
					this.__data[name] = this.dataset[name];
		}

		if (arguments.length == 0)
			return this.__data;
		else if (arguments.length == 1)
			return this.__data[arguments[0]] ;
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			delete this.__data[arguments[0]];
		else
			this.__data[arguments[0]] = arguments[1];
		
		return this;
	};
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/extentions/EventSupport.js":
/*!***************************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/extentions/EventSupport.js ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {
	const WrappedEventHandler = function(aConfig, aCallback ,aEvent){
		if(typeof aConfig.filter !== "undefined" && !aEvent.target.is(aConfig.filter))		
			return;
		
		let args = [aEvent];
		if(typeof aConfig.data !== "undefined")
			args = args.concat(aConfig.data);
		
		let result = aCallback.apply(aCallback, args);
		if(aConfig.singleCall)
			this.removeEventListener(aCallback);
		
		return result;		
	};
	
	
	const addEventListener = Prototype.addEventListener;
	Prototype.addEventListener = function() {
		if (arguments.length < 2)
			throw new Error("Too less arguments!");

		this.on(arguments[0], arguments[1]);
	};	
	
	Prototype.on = function() {
		if (arguments.length < 2)
			throw new Error("Too less arguments!");
		
		if (typeof this.__callbackMap === "undefined")
			this.__callbackMap = {};

		let args = Array.from(arguments);
		let events = args.shift().split(/(\s+)|(\s*,\s*)/);
		let handlerConfig = {
			filter : (typeof args[0] === "string" ? args.shift().split(/\s*,\s*/) : undefined),
			data : (typeof args[0] !== "function" ? args.shift() : undefined)
		};
	    let callback = args.shift();
	    
	    handlerConfig.singleCall = (typeof args[0] !== "boolean" ? args.shift() : false);

		let eventMap = {};
		events.forEach((function(result, config, callback, event){
			let wrappedEventHandler = WrappedEventHandler.bind(this, config, callback);
			result[event] = wrappedEventHandler;			
			addEventListener.call(this, event, wrappedEventHandler, true);
			
		}).bind(this, eventMap, handlerConfig, callback));
		
		this.__callbackMap[callback] = eventMap;
		
		return this;
	};	
	
	const removeEventListener = Prototype.removeEventListener;
	Prototype.removeEventListener = Prototype.removeOn = function() {
		if (arguments.length != 1 || typeof this.__callbackMap === "undefined")
			return removeEventListener.apply(this, arguments);
			
		let events = undefined;
		let callback = undefined;
		if(typeof arguments[0] === "string")
			events = arguments[0].split(/(\s+)|(\s*,\s*)/);
		else if(typeof arguments[0] === "function")
			callback = arguments[0].shift();
		else
			throw new Error("Wrong argument! -> call function([event|handler])");
		
		let removalHandler = [];
		if(typeof events === "undefined"){
			eventMap = this.__callbackMap[callback];
			if(typeof eventMap !== "undefined"){
				eventMap.getOwnPropertyNames().forEach((function(result, eventMap, event){
					let handler = eventMap[event];
					if(typeof handler !== "undefined")
						result.push(handler);					
				}).bind(this, removalHandler, eventMap));
				
				delete this.__callbackMap[callback];
			}
		}
		else {
			events.forEach((function(result, event){
				Object.getPropertyNames(this.__callbackMap).forEach((function(aEvent, Callback){
					let eventMap = this.__callbackMap[Callback];
					delete eventMap[aEvent];
					if(eventMap.getOwnPropertyNames() == 0)
						delete this.__callbackMap[Callback];
				}).bind(this, event));								
			}).bind(this));
		}
		
		return this;
	};

	
	Prototype.trigger = function(){
		let event = undefined;
		if(typeof this["on" + arguments[0]] === "function"){
			event = document.createEvent("Event");
			event.initEvent(arguments[0], true, true);
		}
		else
			event = new CustomEvent(arguments[0],  { bubbles: true, cancelable: true, detail: arguments[1] });
		
		this.dispatchEvent(event);
		return this;
	};
};
/* harmony default export */ __webpack_exports__["a"] = (support);


/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/extentions/HtmlClassSupport.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/extentions/HtmlClassSupport.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {	
	
	Prototype.addClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach((function(clazz){
				this.classList.add(clazz);
			}).bind(this));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,(function(clazz){
				this.addClass(clazz);
			}).bind(this));
		
		return this;
	};
	
	Prototype.removeClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach((function(clazz){
				this.classList.remove(clazz);
			}).bind(this));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,(function(clazz){
				this.removeClass(clazz);
			}).bind(this));
		
		return this;		
	};
	
	Prototype.toggleClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach((function(clazz){
				this.classList.toggle(clazz);
			}).bind(this));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,(function(clazz){
				this.toogleClass(clazz);
			}).bind(this));
		
		return this;
	};
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/extentions/ListSupport.js":
/*!**************************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/extentions/ListSupport.js ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {		
	Prototype.indexOf = function() {
		for(let i = 0; i < this.length; i++)
			if(this[i] == arguments[0])
				return i;
		
		return -1;
	};
	
	if(typeof Prototype.forEach === "undefined")
		Prototype.forEach = function(){
			return Array.prototype.forEach.apply(this, arguments);
		};
	
	Prototype.first = function(){
		if(this.length > 0)
			return this[0];
	};	
	
	Prototype.last = function(){
		if(this.length > 0)
			return this[this.length - 1];
	};
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/extentions/ManipulationSupport.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/extentions/ManipulationSupport.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {

	Prototype.attr = function() {
		if (arguments.length == 0)
			return this.hasAttributes() ? (function() {
				let result = {};
				this.getAttributeNames().forEach((function(result, name) {
					result[name] = this.getAttribute(name);
				}).bind(this, result));
				return result;
			}).call(this) : undefined;
		else if (arguments.length == 1)
			return this.getAttribute(arguments[0]);
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			this.removeAttribute(arguments[0]);
		else
			this.setAttribute(arguments[0], arguments[1]);
		
		return this;
	};
	
	Prototype.empty = function(){
		let nodes = this.childNodes
		while(nodes.length != 0)			
			nodes[0].remove(true);
		
		return this;
	};
	
	Prototype.content = function(){
		return this.childNodes;
	};	
	
	Prototype.html = function(){
		if(arguments.length == 0)			
			return this.innerHTML;
		else if(arguments.length == 1 && typeof arguments[0] === "boolean")
			if(arguments[0])
				return this.outerHTML;
			else
				return this.innerHTML;
		else 
			Array.from(arguments).forEach((function(content){
				if(typeof content === "string")
					this.innerHTML = content;
				else if(content instanceof Element){
					this.empty();
					this.append(content);
				}
			}).bind(this));		
			
		return this;
	};
	
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/extentions/NodeQuerySupport.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/extentions/NodeQuerySupport.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {
	
	Prototype.is = function() {
		if(arguments.length == 1){
			if(typeof arguments[0] === "string")
				return this.matches(arguments[0]);
			else if(typeof arguments[0].length === "number"){
				let filter = arguments[0];
				for(let i = 0; i < filter.length; i++)
					if(this.matches(filter[i]))
						return true;
			}				
		}
		else if(arguments.length > 1)
			return this.is(Array.from(arguments));
		
		return false;
	};	
	
	Prototype.parent = function() {
		if(arguments.length == 0)
			return this.parentNode;
		else if(typeof arguments[0] === "string"){
			let parent = this.parentNode;
			while(!parent.is(arguments[0]))
				parent = parent.parent(arguments[0]);
			return parent;
		}
	};
	
	Prototype.parents = function() {
		let result = new Array();
		let parent = Prototype.parent.apply(this, arguments);
		while(parent){
			result.push(parent);
			parent = Prototype.parent.apply(parent, arguments);
		}
		
		return NodeList.from(result);
	};	

	Prototype.selector = function(){
		if(typeof this.id === "undefined" || this.id.length == 0){
			let parent = this.parent();
			if(parent instanceof Document || parent instanceof  DocumentFragment)
				parent = undefined;
			let selector = this.localName.toLowerCase();
			if(typeof parent !== "undefined"){
				let sameTagSiblings = parent.find(":scope>" + selector);			
				if (sameTagSiblings instanceof NodeList) {
					let index = sameTagSiblings.indexOf(this) + 1;
					if (index > 0)
						selector += ':nth-child(' + index + ')';
				}		
			}
			return typeof parent !== "undefined" ? parent.selector() + ">" + selector : selector;
		}
		else
			return "#" + this.id;
	};	

	Prototype.closests = function(aQuery) {
		if(this.is(aQuery))
			return this;
		else{
			let result = this.find(aQuery, true);
			if(result.length > 0)
				return result;
			
			let parent = this.parent();
			if(typeof parent !== "undefined" && parent != document)
				return parent.closest(aQuery);
		}		
	};
	
	Prototype.closest = function(aQuery){
		let result = this.closests(aQuery);
		if(typeof result !== "undefined")
			return result[0];
	};
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/extentions/ReadyEventSupport.js":
/*!********************************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/extentions/ReadyEventSupport.js ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {

	Prototype.ready = function(aFunction, once){	
		this.on("ready", aFunction, once);
		if(document.readyState == "complete")			
			this.trigger("ready");
		
		return this;
	};
	
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/extentions/ShowHideSupport.js":
/*!******************************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/extentions/ShowHideSupport.js ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {

	Prototype.show = function(){
		if(this.__ishide){
			this.style.display = this.__display || "";
			this.__ishide = false;
		}
		return this;
	};
	
	Prototype.hide = function(){
		if(!this.__ishide){
			this.__display = this.style.display;
			this.style.display = "none";
			this.__ishide = true;
		}	
		
		return this;
	};
	
	Prototype.toggleShow = function(){
		if(this.__ishide)
			return this.show();
		else
			return this.hide();
	};
	
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/extentions/ValueSupport.js":
/*!***************************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/extentions/ValueSupport.js ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const support = function(Prototype) {
	const InputTypes =[
		{
			selector : "select",
			get : function(){
				let result = [];
				this.find("option:checked", true).forEach((function(result, option){
					result.push(option.value);
				}).bind(this, result));
				
				if(typeof arguments[0] === "boolean" && arguments[0])
					return result;				
				else if(result.length == 1)
					return result[0];
				else if(result.length > 1)
					return result;				
			},
			set : function(){				
				let values = [];
				if(arguments.length == 1 && typeof arguments[0] !== "undefined")
					values = values.concat(arguments[0]);
				else if(arguments.length > 1)
					values = values.concat(Array.from(arguments));
				
				this.find("option", true).forEach((function(values, option){
					let check = values.indexOf(option.value) > -1;
					if(check)
						option.selected = true;
					else
						option.selected = false;
				}).bind(this, values));
				
				this.trigger("changed");
			}			
		},
		{
			selector : "option",
			get : function(){
				if(this.selected)
					return this.value;
			},
			set : function(aValue){
				if(typeof aValue === "boolean")
					this.selected = aValue;
				else if(typeof aValue === "string")
					this.value = aValue;
				
				this.trigger("changed");				
			}			
		},
		{
			selector : "input[type=\"checkbox\"], input[type=\"radio\"]",
			get : function(){
				if(typeof this.value === "undefined" || this.value == "on")
					return this.checked;
				else if(this.checked)
					return this.value;				
			},
			set : function(aValue){
				if(typeof aValue === "boolean")
					this.checked = aValue;
				else if(typeof aValue === "string")
					this.value = aValue;
				
				this.trigger("changed");
			}
		}
	];
	
	const DefaultInputType = {
			get : function(){
				return this.value;
			},
			set : function(aValue){
				this.value = aValue;
				this.trigger("input");
			}	
	};
	
	const getInputType = function(aElement){
		for(let i = 0; i < InputTypes.length; i++)
			if(aElement.is(InputTypes[i].selector))
				return InputTypes[i];		
		return DefaultInputType;
	};
	
	
	Prototype.val = function() {
		let type = getInputType(this);
		if(arguments.length == 0){
			return type.get.apply(this, arguments);
		}
		else{
			type.set.apply(this, arguments);
			
			return this;
		}		
	};
	
};
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-api-extension/src/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _dom_Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/Node.js */ "./node_modules/dom-api-extension/src/dom/Node.js");
/* harmony import */ var _dom_Document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Document */ "./node_modules/dom-api-extension/src/dom/Document.js");
/* harmony import */ var _dom_HTMLElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/HTMLElement */ "./node_modules/dom-api-extension/src/dom/HTMLElement.js");
/* harmony import */ var _dom_HTMLInputElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/HTMLInputElement */ "./node_modules/dom-api-extension/src/dom/HTMLInputElement.js");
/* harmony import */ var _dom_HTMLSelectElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/HTMLSelectElement */ "./node_modules/dom-api-extension/src/dom/HTMLSelectElement.js");
/* harmony import */ var _dom_NodeList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/NodeList */ "./node_modules/dom-api-extension/src/dom/NodeList.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Global */ "./node_modules/dom-api-extension/src/Global.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Global__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _JQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./JQuery */ "./node_modules/dom-api-extension/src/JQuery.js");











/***/ }),

/***/ "./node_modules/dom-api-extension/src/utils/DelegaterBuilder.js":
/*!**********************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/utils/DelegaterBuilder.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DelegaterBuilder = function() {
	let args = Array.from(arguments);
	let callback = args.shift();
	let source = args.shift();
	args.forEach((function(aSource, aCallback, aTarget){
		Object.getOwnPropertyNames(aTarget).forEach(
				(function(aSource, aTarget,aCallback,  aName) {
					let prop = Object.getOwnPropertyDescriptor(aTarget, aName);
					if (typeof aSource[aName] === "undefined" && typeof prop.value === "function")
						aSource[aName] = function(){return aCallback.call(this, aName, arguments);};										
				}).bind(null, aSource, aTarget, aCallback));
	}).bind(null, source, callback));
	
};
/* harmony default export */ __webpack_exports__["a"] = (DelegaterBuilder);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js":
/*!*********************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/utils/ExtendPrototype.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const extendPrototype = function(){
	let args = 	Array.from(arguments);
	let prototype = args.shift(); 
	while(args.length > 0){
		let extender = args.shift();
		extender(prototype);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (extendPrototype);

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Converter.js":
/*!**************************!*\
  !*** ./src/Converter.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Converter = {
	xmlToJson : function(aNode) {
		// Create the return object
		let obj = {};
		if (aNode.nodeType == 1 || aNode.nodeType == 9) { // element
			// do attributes
			if (aNode.attributes != undefined && aNode.attributes.length > 0) {
				let attributes = {};
				for (let i = 0; i < aNode.attributes.length; i++) {
					let attribute = aNode.attributes.item(i);
					attributes[attribute.nodeName] = attribute.nodeValue;
				}
				obj["@attributes"] = attributes;
			}
		} else if (aNode.nodeType == 3 || aNode.nodeType == 4) // text
			return aNode.textContent.trim();

		// do children
		if (aNode.hasChildNodes()) {
			let textContent = undefined;
			let hasChildren = false;
			for (let i = 0; i < aNode.childNodes.length; i++) {
				let item = aNode.childNodes.item(i);
				if (item.nodeType == 1) {
					hasChildren = true;
					let nodeName = item.nodeName;
					if (typeof obj[nodeName] === "undefined") {
						obj[nodeName] = Converter.xmlToJson(item);
					} else {
						if (typeof obj[nodeName].push === "undefined") {
							let old = obj[nodeName];
							obj[nodeName] = [];
							obj[nodeName].push(old);
						}
						obj[nodeName].push(Converter.xmlToJson(item));
					}
				} else if ((item.nodeType == 3 || item.nodeType == 4)
						&& item.textContent != "")
					textContent = (textContent ? textContent + item.textContent
							: item.textContent);
			}

			if (textContent) {
				if (typeof obj["@attributes"] === "undefined" && !hasChildren)
					obj = textContent.trim();
				else
					obj.text = textContent.trim();
			}
		}
		return obj;
	}
}
/* harmony default export */ __webpack_exports__["a"] = (Converter);

/***/ }),

/***/ "./src/EventBind.js":
/*!**************************!*\
  !*** ./src/EventBind.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_dom_api_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/dom-api-extension */ "./node_modules/dom-api-extension/index.js");
/* harmony import */ var _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ObjectUtils */ "./src/utils/ObjectUtils.js");
/* harmony import */ var _ExpressionResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpressionResolver */ "./src/ExpressionResolver.js");




const expressionResolver = _ExpressionResolver__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].DEFAULT;

const STATE = {
	FINISHED : "$$eventBind.FINISHED$$",
	FAIL_DETAILS : "$$eventBind.FAIL_DETAILS$$"
};
const FINISHEDSTATE = {
    FAIL : "fail",
    READY : "ready"
};

const Executer = function(anEvent) {
	let element = anEvent.currentTarget;
	let data = element.data("de.titus.core.eventBind");
	if (data.preventDefault)
		anEvent.preventDefault();
	if (data.stopPropagation)
		anEvent.stopPropagation();

	let args = Array.from(arguments);
	if (args.length >= 1 && typeof anEvent.data !== "undefined")
		args.splice(1, 0, anEvent.data);
	
	if (typeof data.action === 'string') {
		let action = expressionResolver.resolveExpression(data.action, anEvent.data, undefined);
		if (typeof action === "function")			
			action.apply(action, args);
	}
	else if (typeof data.delegation === 'string')
		element.trigger(data.delegation, args);

	return data.preventDefault;
};


const EventBind = function(anElement, aContext) {
	if(typeof anElement === "undefined")
		return;
	
	if(typeof anElement.data("de.titus.core.eventBind") !== "undefined")
		return;
	
	if(anElement instanceof NodeList)
		return anElement.forEach((function(aContext, anElement){
			EventBind(anElement, aContext);
		}).bind(null, aContext));
	
	let data = {
	    preventDefault : anElement.attr("event-prevent-default") != null,
	    stopPropagation : anElement.attr("event-stop-propagation") != null
	};
	anElement.data("de.titus.core.eventBind", data);
	
	data.eventType = anElement.attr("event-type");
	if (typeof data.eventType !== "string"){
		data.state = FINISHEDSTATE.FAIL;
		data.details = "No event type defined!";
		return;
	}
	
	data.action = anElement.attr("event-action");
	data.delegation = anElement.attr("event-delegation");

	if (typeof data.action !== "string" && typeof data.delegation !== "string") {
		data.state = FINISHEDSTATE.FAIL;
		data.details = "No action or delegation defined!";
		return;
	}

	data.eventData = anElement.attr("event-data");
	if (typeof data.eventData === "string" && data.eventData.length > 0)
		data.eventData = expressionResolver.resolveExpression(eventData, aContext, {});
	else if (typeof aContext !== 'undefined')
		data.eventData = _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({}, aContext);
	
	if (data.eventData)
		anElement.on(data.eventType, null, data.eventData, Executer);
	else
		anElement.on(data.eventType, Executer);
	
	return this;
};

const Observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(node) {
			if (node.nodeType != Node.TEXT_NODE) {
				if(node.is("[event-type]"))
					EventBind(node);				
				EventBind(node.find("[event-type]"));
			}
		});
	});
});

// pass in the target node, as well as the observer options
Observer.observe(find("body").first(),  {
    attributes : true,
    childList : true,
    subtree : true,
    characterData : false
});

ready(function() {
	console.log("init event binds with autorun");
	EventBind(find("[event-autorun]"));
});
/* harmony default export */ __webpack_exports__["a"] = (EventBind);

/***/ }),

/***/ "./src/ExpressionResolver.js":
/*!***********************************!*\
  !*** ./src/ExpressionResolver.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _regex_Regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex/Regex */ "./src/regex/Regex.js");
/* harmony import */ var _utils_EvalUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/EvalUtils */ "./src/utils/EvalUtils.js");



const EXPRESSION_REGEX = "\\$\\{([^\\{\\}]+)\\}";


const ExpressionResolver = function(varRegex) {
	this.regex = new _regex_Regex__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](varRegex	|| TEXT_EXPRESSION_REGEX);
};

ExpressionResolver.prototype.resolve = function(aExpression, aContext, aDefault) {
	let expression = aExpression.trim();
	let matcher = this.regex.parse(expression);
	if (matcher.next())
		expression = matcher.getGroup(1).trim();
		
	return _utils_EvalUtils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].eval(expression, aContext || {}, aDefault);
};

ExpressionResolver.prototype.promise = function(aExpression, aContext, aDefault, aTimeout) {
	let expression = aExpression.trim();
	let matcher = this.regex.parse(expression);
	if (matcher.next())
		expression = matcher.getGroup(1).trim();
		
	return _utils_EvalUtils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].promiseEval(expression, aContext || {}, aDefault);
};

ExpressionResolver.prototype.text = function(aText, aContext, aDefault) {
	let hasDefault = arguments.length === 3;
	let text = aText;
	let matcher = this.regex.parse(text);
	while (matcher.next()) {
		let expression = matcher.getMatch();
		let result = _utils_EvalUtils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].eval(matcher.getGroup(1).trim(), aContext, aDefault);
		if (typeof result !== "undefined" || hasDefault)
			text = matcher.replaceAll(result, text);
	}
	return text;
};

ExpressionResolver.prototype.promiseText = function(aText, aContext, aDefault, aTimeout) {
	let action = (function(resolve){
		resolve(this.text(aText, aContext, aDefault));
	}).bind(this);
	
	if(aTimeout > 0)
		return new Promise(function(){
			setTimeout(action, aTimeout);
		});
	
	return new Promise(action);
};


ExpressionResolver.prototype.resolveText = ExpressionResolver.prototype.text;
ExpressionResolver.prototype.resolveExpression = ExpressionResolver.prototype.resolve; 
ExpressionResolver.DEFAULT = new ExpressionResolver();

/* harmony default export */ __webpack_exports__["a"] = (ExpressionResolver);


/***/ }),

/***/ "./src/Namespace.js":
/*!**************************!*\
  !*** ./src/Namespace.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {let build = function(Gobal, aNames, aCallback) {
	let name = aNames.shift();
	if (typeof Gobal[name] === "undefined")
		Gobal[name] = {};

	if (aNames.length == 0)
		Gobal[name] = aCallback() || Gobal[name];
	else
		build(Gobal[name], aNames, aCallback);
};

let Namespace = function(aNamespace, aFunction) {
	build( (window || global || {}), aNamespace.split(".") ,aFunction);
};

Namespace.create = Namespace; 
/* harmony default export */ __webpack_exports__["a"] = (Namespace);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/Page.js":
/*!*********************!*\
  !*** ./src/Page.js ***!
  \*********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let Page = function() {
	this.baseTagValue = undefined;
	let baseTag = document.querySelector("base[href]");
	if (typeof baseTag !== "undefined")
		this.baseTagValue = baseTag.attributes["href"].value;
		this.files = {};
		this.data = {};
};
	
Page.prototype.addJsFile = function(aUrl, aFunction, forceFunction) {
	if (Array.isArray(aUrl))
		return this.addJsFiles(aUrl, aFunction, forceFunction);
	
	if (typeof this.files[aUrl] === "undefined") {
		this.files[aUrl] = true;
		let element = document.createElement("script");
		element.setAttribute("type", "text/javascript");
		element.setAttribute("src", aUrl);
		document.body.append(element);
	
		if (typeof aFunction !== "undefined")
			aFunction();
	}
	else if (forceFunction && typeof aFunction !== "undefined") {
		aFunction();
	}
};

Page.prototype.addJsFiles = function(aUrls, aFunction, forceFunction) {
	if (Array.isArray(aUrls)) {
		while(aUrls.length != 0){
			this.addJsFile(aUrls.shift(), (function() {
				this.addJsFiles(aUrls, aFunction, forceFunction)
			}).bind(this), true);
		}
	} else
		this.addJsFile(aUrls, aFunction, forceFunction);
};

Page.prototype.addCssFile = function(aUrl) {
	if (Array.isArray(aUrl)) {
		this.addCssFiles(aUrl);
		return;
	}

	if (this.files[aUrl] == undefined) {
		this.files[aUrl] = true;
		let element = document.createElement("link");
		element.setAttribute("rel", "stylesheet");
		element.setAttribute("type", "text/css");
		element.setAttribute("href", aUrl);
		document.head.append(element);
	}
};

Page.prototype.addCssFiles = function(aUrls) {
	if (Array.isArray(aUrls)) {
		for (i = 0; i < aUrls.length; i++) {
			this.addCssFile(aUrls[i]);
		}
	}
};

Page.prototype.getUrl = function() {
	return de.titus.core.URL.getCurrentUrl();
};

Page.prototype.buildUrl = function(aUrl) {
	let browser = this.detectBrowser();
	if (browser.ie && browser.ie < 11) {
		let tempUrl = aUrl.toLowerCase().trim();
		if (typeof this.baseTagValue !== "undefined" && !tempUrl.indexOf("http:") == 0
				&& !tempUrl.indexOf("https:") == 0
				&& !tempUrl.indexOf("ftp:") == 0
				&& !tempUrl.indexOf("ftps:") == 0
				&& !tempUrl.indexOf("mailto:") == 0
				&& !tempUrl.indexOf("notes:") == 0
				&& !tempUrl.indexOf("/") == 0) {
			return this.baseTagValue + aUrl;
		}
	}
	return aUrl;
};

Page.prototype.detectBrowser = function() {
	if (Page.BROWSER)
		return Page.BROWSER;

	Page.BROWSER = {};
	if (document.documentMode)
		Page.BROWSER.ie = document.documentMode;
	else
		Page.BROWSER.other = true;

	return Page.BROWSER;
};

Page.prototype.setData = function(aKey, aValue) {
	this.data[aKey] = aValue;
};

Page.prototype.getData = function(aKey) {
	return this.data[aKey];
};

Page.getInstance = function() {
	if (typeof INSTANCE === "undefined") {
		Page.INSTANCE = new Page();
	}

	return Page.INSTANCE;
};

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ "./src/PagingUtils.js":
/*!****************************!*\
  !*** ./src/PagingUtils.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let PagingUtils = {
	pagerData : function(aPage, aPages, aSize) {
		let half = Math.round(aPages / 2);
		let result = {
			firstPage : 1,
			startPage : 1,
			endPage : aSize,
			lastPage : aPages,
			current : aPage,
			pageCount : aPages
		};
		if (aSize > aPages)
			result.endPage = aPages;
		else if (aPage + half > aPages) {
			result.endPage = aPages;
			result.startPage = (end - aSize) + 1;
		} else if (aPage - half > 1) {
			result.endPage = (aPage + half);
			result.startPage = (end - aSize) + 1;
		}
		result.count = result.endPage - result.startPage;
		return result;
	},

	pageArray : function(aPage, aSize, aArray) {
		return aArray.slice((aPage - 1) * aSize, aSize);
	}

};
/* unused harmony default export */ var _unused_webpack_default_export = (PagingUtils);


/***/ }),

/***/ "./src/ScreenObserver.js":
/*!*******************************!*\
  !*** ./src/ScreenObserver.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_dom_api_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/dom-api-extension */ "./node_modules/dom-api-extension/index.js");
/* harmony import */ var _ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpressionResolver */ "./src/ExpressionResolver.js");
/* harmony import */ var _UUID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UUID */ "./src/UUID.js");




const RESOLVER = _ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DEFAULT;
let TIMEOUTID = undefined;

const callHandler = function(aHandler, aScreen) {
    setTimeout((function(aHandler, aScreen) {
	    let result = RESOLVER.resolveExpression(aHandler.condition, aScreen, false);
	    if (typeof result !== 'boolean')
		    return Observer.handler[aHandler.id] == undefined;

	    if (result) {
		    aHandler.active = true;
		    aHandler.activate.call(aScreen);
		    if (typeof aHandler.deactivate !== 'function')
		    	Observer.handler[aHandler.id] == undefined;
	    } else if (aHandler.active && typeof aHandler.deactivate === 'function') {
		    aHandler.deactivate.call(aScreen);
		    aHandler.active = false;
	    }

    }).bind(null, aHandler, aScreen), 66);
};

const Observer = {
    handler : {},
    addHandler : function(aHandler) {
	    if (typeof aHandler.condition !== 'undefined' && aHandler.condition.length != 0) {
		    aHandler.id = Object(_UUID__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])("-");
		    Observer.handler[aHandler.id] = aHandler;
		    callHandler(aHandler, Observer.screenData(), this);
		    return aHandler;
	    }
    },
    screenData : function() {
	    return {
	        width : window.innerWidth,
	        height : window.innerHeight,
	        pixelRatio : window.devicePixelRatio,
	        landscape : (window.innerHeight <= window.innerWidth),
	        portrait : (window.innerHeight > window.innerWidth)
	    };
    },
    resizing : function() {
    	TIMEOUTID = undefined;
	    let screen = Observer.screenData();
	    Object.getOwnPropertyNames(Observer.handler).forEach(function(aHandlerId) {
		    callHandler(Observer.handler[aHandlerId], screen);
	    });
    }    
};

window.addEventListener('resize',  function() {
    if (TIMEOUTID)
	    clearTimeout(TIMEOUTID);
    TIMEOUTID = setTimeout(Observer.resizing, 250);
}, false);

ready(Observer.resizing);

/* harmony default export */ __webpack_exports__["a"] = (Observer);


/***/ }),

/***/ "./src/StringUtils.js":
/*!****************************!*\
  !*** ./src/StringUtils.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ObjectUtils */ "./src/utils/ObjectUtils.js");


let DEFAULTS = {
	formatToHtml : {
		"tabsize" : 4,
		"tabchar" : "&nbsp;",
		"newlineTag" : "<br/>"
	},

	trimTextLength : {
		"postfix" : "..."
	}
};
let StringUtils = {
	DEFAULTS : DEFAULTS,
	trimTextLength : function(aText, maxLength, theSettings) {
		if (aText == undefined || typeof aText !== "string" || aText == "")
			return aText;

		let settings = _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({}, theSettings, DEFAULTS.trimTextLength);

		if (aText.length > maxLength) {
			let end = maxLength - settings.postfix.length;
			if ((aText.length - end) > 0)
				return aText.substring(0, end).trim() + settings.postfix;
		}
		return aText;
	},
	formatToHtml : function(aText, theSettings) {
		if (aText == undefined || typeof aText !== "string" || aText == "")
			return aText;
		let settings = _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({}, theSettings ,DEFAULTS.formatToHtml);
		let lines = aText.replace(/\n\r/g, "\n").replace(/\r/g, "\n").split("\n");
		let text = "";
		for (let i = 0; i < lines.length; i++) {
			if (i != 0)
				text = text + settings.newlineTag;
			text = text	+ StringUtils.preventTabs(lines[i], settings.tabsize, settings.tabchar);
		}
		return text;
	},
	getTabStopMap : function(tabSize, tabString) {
		let tabstopMap = [];
		for (let i = 0; i <= tabSize; i++) {
			if (i == 0)
				tabstopMap[0] = "";
			else
				tabstopMap[i] = tabstopMap[i - 1] + tabString;
		}

		return tabstopMap;
	},
	preventTabs : function(aText, theTabStops, theTabStopChar) {
		let tabstopMap = StringUtils.getTabStopMap(theTabStops, theTabStopChar);
		let tabStops = theTabStops;
		let text = "";
		let tabs = aText.split("\t");
		for (let i = 0; i < tabs.length; i++) {
			if (tabs[i].length != 0 && i != 0) {
				let size = text.length;
				let tabSize = size % tabStops;
				text = text + tabstopMap[theTabStops - tabSize] + tabs[i];
			} else if (tabs[i].length == 0 && i != 0)
				text = text + tabstopMap[theTabStops];
			else
				text = text + tabs[i];
		}

		return text;
	},
	format : function(aText, args) {
		let objects = arguments;
		return aText.replace(/{-?[0-9]+}/g, function(item) {
			let index = parseInt(item.substring(1, item.length - 1)) + 1;
			let replace;
			if (index > 0 && index < objects.length) {
				replace = objects[index];
				if (typeof replace !== "string")
					replace = JSON.stringify(replace);
			} else if (index === -1) {
				replace = "{";
			} else if (index === -2) {
				replace = "}";
			} else {
				replace = "";
			}
			return replace;
		});
	}
};
/* harmony default export */ __webpack_exports__["a"] = (StringUtils);

/***/ }),

/***/ "./src/URL.js":
/*!********************!*\
  !*** ./src/URL.js ***!
  \********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let URL = class {
	constructor(aProtocol, aDomain, aPort, aPath, theParameter, aMarker) {	
		this.protocol = aProtocol || "http";
		this.domain = aDomain;
		this.port = aPort;
		this.path = aPath;
		this.parameters = theParameter;
		this.marker = aMarker	
	};
	
	getParameter(aKey) {
		let value = this.parameters[aKey];
		if (typeof value !== "undefined")
			return Array.isArray(value) ? value[0] : value;
	};
	
	getParameters(aKey) {
		return this.parameters[aKey];
	};
	
	addParameter(aKey, aValue, append) {
		if (typeof this.parameters[aKey] === "undefined") 
			this.parameters[aKey] = [];
		if (!append && typeof aValue === "undefined") 
			this.parameters[aKey] = undefined;
		 else if (!append && typeof aValue !== "undefined" && typeof aValue.length !== "undefined")
			this.parameters[aKey] = aValue;
		 else if (append && typeof aValue !== "undefined" && typeof aValue.length !== "undefined")
			$.merge(this.parameters[aKey], aValue);// @TODO $.merge entfernen
		 else if (!append && typeof aValue !== "undefined")
			this.parameters[aKey] = [ aValue ];
		 else if (append && typeof aValue !== "undefined") 
			this.parameters[aKey].push(aValue);		
	};
	
	getQueryString() {
		if (typeof this.parameters !== "undefined") {
			let result = "?";
			let isFirstParameter = true;
			for (let propertyName in this.parameters) {
				if (!isFirstParameter) {
					result = result + "&";
				} else {
					isFirstParameter = false;
				}
				let parameterValues = this.parameters[propertyName];
				if (typeof parameterValues.length === "undefined")
					result = result + encodeURIComponent(propertyName) + "="
							+ encodeURIComponent(parameterValues);
				else {
					for (j = 0; j < parameterValues.length; j++) {
						if (j > 0) {
							result = result + "&";
						}
						result = result + encodeURIComponent(propertyName) + "="
								+ encodeURIComponent(parameterValues[j]);
					}
				}
			}
			return result;
		} else {
			return "";
		}
	};
	
	getMarkerString() {
		if (typeof this.marker !== "undefined")
			return "#" + this.marker	
		return "";
	};
	
	asString() {
		let result = this.protocol + "://" + this.domain + ":" + this.port;	
		if (typeof this.path !== "undefined")
			result = result + this.path;
	
		result = result + this.getQueryString() + this.getMarkerString();
	
		return result;
	};
	
	toString() {
		return this.asString();
	};	
};

URL.fromString = function(aUrlString) {
	let tempUrl = aUrlString;
	let protocol = "http";
	let host = undefined;
	let port = 80;
	let path = "/";
	let marker = "";
	let parameterString = undefined;
	let splitIndex = -1;
	let parameter = {};

	let match = new RegExp("\\?([^#]*)").exec(tempUrl);
	if (typeof match !== "undefined")
		parameterString = match[1];

	match = new RegExp("#([^\\?#]*)").exec(tempUrl);
	if (typeof match !== "undefined")
		marker = decodeURIComponent(match[1]);

	splitIndex = tempUrl.indexOf("://");
	if (splitIndex > 0) {
		protocol = tempUrl.substr(0, splitIndex);
		tempUrl = tempUrl.substr(splitIndex + 3);
	}

	match = new RegExp("([^\/:\\?#]*)").exec(tempUrl);
	if (typeof match !== "undefined")
		host = match[1];

	match = new RegExp(":([^\\/\\?#]*)").exec(tempUrl);
	if (typeof match !== "undefined")
		port = match[1];
	else if (protocol.toLowerCase() == "https")
		port = 443;
	else if (protocol.toLowerCase() == "ftp")
		port = 21;
	else if (protocol.toLowerCase() == "ftps")
		port = 21;

	match = new RegExp("(/[^\\?#]*)").exec(tempUrl);
	if (typeof match !== "undefined")
		path = match[1];

	let regex = new RegExp("([^&\\?#=]*)=([^&\\?#=]*)");
	if (typeof parameterString !== "undefined" && "" != parameterString) {
		let parameterEntries = parameterString.split("&");
		for (i = 0; i < parameterEntries.length; i++) {
			let match = regex.exec(parameterEntries[i]);
			let pName = decodeURIComponent(match[1]);
			let pValue = decodeURIComponent(match[2]);
			parameter[pName] ? parameter[pName].push(pValue)
					: parameter[pName] = [ pValue ];
		}
	}

	return new URL(protocol, host, port, path, parameter, marker);
};

URL.getCurrentUrl = function() {
	if (URL.STATIC__CURRENTURL == undefined) {
		URL.STATIC__CURRENTURL = URL.fromString(location.href);
	}

	return URL.STATIC__CURRENTURL;
};

/* harmony default export */ __webpack_exports__["a"] = (URL);


/***/ }),

/***/ "./src/UUID.js":
/*!*********************!*\
  !*** ./src/UUID.js ***!
  \*********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let UUID = function() {	
	let spacer = arguments.length == 1 ? arguments[0] : "-";
	let template = 'xxxxxxxx' + spacer + 'xxxx' + spacer + '4xxx' + spacer + 'yxxx' + spacer + 'xxxxxxxxxxxx';	
	return template.replace(/[xy]/g, function(c) {
		let r = Math.random() * 16 | 0
		let v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
};
/* harmony default export */ __webpack_exports__["a"] = (UUID);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Namespace */ "./src/Namespace.js");
/* harmony import */ var _UUID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UUID */ "./src/UUID.js");
/* harmony import */ var _ExpressionResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpressionResolver */ "./src/ExpressionResolver.js");
/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Converter */ "./src/Converter.js");
/* harmony import */ var _PagingUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PagingUtils */ "./src/PagingUtils.js");
/* harmony import */ var _StringUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StringUtils */ "./src/StringUtils.js");
/* harmony import */ var _URL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./URL */ "./src/URL.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Page */ "./src/Page.js");
/* harmony import */ var _EventBind__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EventBind */ "./src/EventBind.js");
/* harmony import */ var _ScreenObserver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ScreenObserver */ "./src/ScreenObserver.js");
/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regex */ "./src/regex/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony import */ var _jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jquery */ "./src/jquery/index.js");
//modules












// load packages






// externalize libs for browser
Object(_Namespace__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("de.titus.core", function() {
	return {
		VERSION : "2.0.0-beta1",
		//packages
		utils : _utils__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
		regex : _regex__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
		jquery : _jquery__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"],
		
		//modules
		Namespace : _Namespace__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
		UUID : _UUID__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
		SpecialFunctions : SpecialFunctions,
		ExpressionResolver : _ExpressionResolver__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
		Converter : _Converter__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
		StringUtils : _StringUtils__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
		URL: _URL__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
		Page: _Page__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
		EventBind: _EventBind__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
		ScreenObserver : _ScreenObserver__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]
	};
});

/***/ }),

/***/ "./src/jquery/Component.js":
/*!*********************************!*\
  !*** ./src/jquery/Component.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const buildFunctionName = function(aName) {
	return aName.replace(/\./g, "_");
};
const createInstance = function(aName, aFunctionName, aConstructor, aData) {	
	return function(){
		if (this.length == 0)
			return;
		else if (this.length > 1) {
			debugger;
			let result = [];
			this.each((function(aElement) {
				this.push(aElement[aFunctionName](aData));
			}).bind(result));
			return result;
		} else {
			let component = this.data(aName);
			if (!component) {
				component = new aConstructor(this, aData);
				this.data(aName, component);
			}
	
			return component;
			}
		};
};

const Component = function(aName, aConstructor) {
	if(typeof $ !== "undefined"){
		let functionName = buildFunctionName(aName);		
		$.fn[functionName] = createInstance(aName, functionName, aConstructor);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Component);


/***/ }),

/***/ "./src/jquery/EventBind.js":
/*!*********************************!*\
  !*** ./src/jquery/EventBind.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/jquery/Component.js");
/* harmony import */ var _EventBind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventBind */ "./src/EventBind.js");



Object(_Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("de.titus.core.EventBind", function(anElement, aContext) {	
	return Object(_EventBind__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(anElement[0], aContext);	
});


/***/ }),

/***/ "./src/jquery/Selector.js":
/*!********************************!*\
  !*** ./src/jquery/Selector.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof $ !== "undefined")
	$.fn.Selector = function() {		
		if (this.length > 1) {
			let result = [];
			this.each(function(aElement) {
				result.push(this.selector());
			});
			return result;
		} else if (this.length == 1)
			return this[0].selector();
	};

/***/ }),

/***/ "./src/jquery/Tagname.js":
/*!*******************************!*\
  !*** ./src/jquery/Tagname.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof $ !== "undefined")
	$.fn.tagName = function() {
		if (this.length > 1) {
			let result = [];
			this.each(function() {
				result.push(this.tagName.toLowerCase());
			});
			return result;
		} else if(this.length == 1)
			return $(this)[0].tagName.toLowerCase();
	};


/***/ }),

/***/ "./src/jquery/index.js":
/*!*****************************!*\
  !*** ./src/jquery/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./src/jquery/Component.js");
/* harmony import */ var _EventBind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventBind */ "./src/jquery/EventBind.js");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Selector */ "./src/jquery/Selector.js");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Selector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tagname__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tagname */ "./src/jquery/Tagname.js");
/* harmony import */ var _Tagname__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Tagname__WEBPACK_IMPORTED_MODULE_3__);





const jquery = {
	Component : _Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
	Components : {
		asComponent : _Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
	}
};

/* harmony default export */ __webpack_exports__["a"] = (jquery);

/***/ }),

/***/ "./src/regex/Matcher.js":
/*!******************************!*\
  !*** ./src/regex/Matcher.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let Matcher = function (aRegExp, aText) {
	
	this.internalRegex = aRegExp; 
	this.processingText = aText;
	this.currentMatch = undefined;
};

Matcher.prototype.isMatching = function() {
	return this.internalRegex.test(this.processingText);
};

Matcher.prototype.next = function() {
	this.currentMatch = this.internalRegex.exec(this.processingText);
	if (this.currentMatch instanceof Array) {
		this.processingText = this.processingText.replace(this.currentMatch[0],	"");
		return true;
	}
	return false;
};

Matcher.prototype.getMatch = function() {
	if (this.currentMatch instanceof Array)
		return this.currentMatch[0];
	return undefined;
};

Matcher.prototype.getGroup = function(aGroupId) {
	if (this.currentMatch instanceof Array)
		return this.currentMatch[aGroupId];
	return undefined;
};

Matcher.prototype.replaceAll = function(aReplaceValue, aText) {
	if (this.currentMatch instanceof Array)
		return aText.replace(this.currentMatch[0], aReplaceValue);
	return aText;
};

/* harmony default export */ __webpack_exports__["a"] = (Matcher);

/***/ }),

/***/ "./src/regex/Regex.js":
/*!****************************!*\
  !*** ./src/regex/Regex.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Matcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matcher */ "./src/regex/Matcher.js");


const Regex = function(aRegex, aOptions) {
	this.internalRegex = new RegExp(aRegex, aOptions);
};	
Regex.prototype.parse = function(aText) {
	return new _Matcher__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](this.internalRegex, aText);
};
/* harmony default export */ __webpack_exports__["a"] = (Regex);

/***/ }),

/***/ "./src/regex/index.js":
/*!****************************!*\
  !*** ./src/regex/index.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Regex */ "./src/regex/Regex.js");
/* harmony import */ var _Matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matcher */ "./src/regex/Matcher.js");



const regex = {
	Regex : _Regex__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
	Matcher : _Matcher__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
};

/* harmony default export */ __webpack_exports__["a"] = (regex);

/***/ }),

/***/ "./src/utils/EvalUtils.js":
/*!********************************!*\
  !*** ./src/utils/EvalUtils.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const EvalUtils = {
	eval : function(aStatement, aContext, aDefault){	
		if (typeof aStatement !== "string")
			return aStatement;
		
		let statement = aStatement.trim(); 
		if(statement.length === 0)
			return aDefault;
		
		try {		
			let result = (new Function("c","with(c){return " + aStatement + ";}")).call(aContext || {});
			return result || aDefault
		} catch (e) {
			throw e;
		}	
	},
	promiseEval : function(aStatement, aContext, aDefault, timeaTimeoutout){
		let action = function(resolve, reject){
			let result = EvalUtils.eval(aStatement, aContext, aDefault);
			if(result instanceof Error)
				reject(result);
			
			resolve(result);
		};
		
		if(aTimeout > 0)
			return new Promise(function(){setTimeout(action,aTimeout);});
		else
			return new Promise(action);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (EvalUtils);

/***/ }),

/***/ "./src/utils/ObjectUtils.js":
/*!**********************************!*\
  !*** ./src/utils/ObjectUtils.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let extend = function(){
	if(arguments.length == 0)
		return;	
	if(arguments.length == 1)
		return arguments[0];

	let args = Array.from(arguments);	
	let deep = typeof args[0] === "boolean" ? args.shift() : false;
	let target = args.shift();
	while(args.length != 0){
		let source = args.shift();
		if(typeof source !== "undefined"){
			Object.getOwnPropertyNames(source).forEach((function(aSource, aTarget, isDeep, aName){
				let source = aSource[aName];
				if(typeof source !== "undefined" && source != null){
					let target = aTarget[aName];
					if(typeof target === "undefined" || target == null)
						aTarget[aName] = source;
					else if(deep && Array.isArray(target) && Array.isArray(source))
						value.concat(aSource[aName]);
					else if(deep && typeof target !== "string" && typeof target === typeof source)
						extend(true, target, source);				
				}
			}).bind(null, source, target, deep));
		}
	}
	return target;
};

const ObjectUtils = {
		extend : extend
};

/* harmony default export */ __webpack_exports__["a"] = (ObjectUtils);




/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _EvalUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EvalUtils */ "./src/utils/EvalUtils.js");
/* harmony import */ var _ObjectUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectUtils */ "./src/utils/ObjectUtils.js");




const utils = {
		EvalUtils : _EvalUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
		ObjectUtils: _ObjectUtils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
};

/* harmony default export */ __webpack_exports__["a"] = (utils);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvSlF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0hUTUxJbnB1dEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vSFRNTFNlbGVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL0Jhc2ljUXVlcnlTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvRGF0YVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvTm9kZVF1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvdXRpbHMvRXh0ZW5kUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRCaW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbWVzcGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnaW5nVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NjcmVlbk9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9TdHJpbmdVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVVJMLmpzIiwid2VicGFjazovLy8uL3NyYy9VVUlELmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5L0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5L0V2ZW50QmluZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5L1NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcXVlcnkvVGFnbmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWdleC9NYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWdleC9SZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0V2YWxVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvT2JqZWN0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7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QUFDbkI7QUFDZSw4REFBSyxFOzs7Ozs7Ozs7Ozs7O0FDUnBCO0FBQUE7QUFBNEI7QUFDSTs7QUFFaEM7QUFDQSxTQUFTLHNEQUFLO0FBQ2QsV0FBVyx3REFBTztBQUNsQjs7QUFFZSw4REFBSyxFOzs7Ozs7Ozs7Ozs7O0FDUnBCO0FBQ0EsaUQ7QUFDQTtBQUNBOztBQUVBLG9DO0FBQ0E7QUFDQTs7QUFFQSxPO0FBQ0EsMkNBQTJDLDJCQUEyQix1QkFBdUI7QUFDN0Y7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyw2QkFBNkI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsa0VBQVMsRTs7Ozs7Ozs7Ozs7OztBQ2hDeEI7QUFDQTtBQUNBLFM7QUFDQTtBQUNBOztBQUVBLGtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG9FQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzNCO0FBQUE7QUFBb0M7QUFDSTs7O0FBR3hDO0FBQ0EsY0FBYywwREFBUztBQUN2QixlQUFlLDREQUFXO0FBQzFCOztBQUVlLDhEQUFLLEUiLCJmaWxlIjoiZGUudGl0dXMuY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3NyYy9pbmRleFwiOyIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwiKGZ1bmN0aW9uKEdsb2JhbCkge1xyXG5cclxuXHRHbG9iYWwuZGUgPSBHbG9iYWwuZGUgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzID0gR2xvYmFsLmRlLnRpdHVzIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cy5kb20gPSBHbG9iYWwuZGUudGl0dXMuZG9tIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cy5kb20uYXBpID0gR2xvYmFsLmRlLnRpdHVzLmRvbS5hcGkgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzLmRvbS5hcGkuZXh0ZW50aW9uID0ge1xyXG5cdFx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiXHJcblx0fTtcclxuXHJcblx0Y29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG5cclxuXHRHbG9iYWwuZmluZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmZpbmQuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHJcblx0R2xvYmFsLnJlYWR5ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQucmVhZHkuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHJcblx0R2xvYmFsLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcclxuXHJcblx0XHRsZXQgYm9keSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoYXJndW1lbnRzWzBdLnRyaW0oKSwgYXJndW1lbnRzWzFdIHx8IFwidGV4dC9odG1sXCIpLmZpbmQoXCJib2R5XCIpO1xyXG5cdFx0bGV0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHRsZXQgbm9kZXMgPSBib2R5LmNoaWxkTm9kZXM7XHJcblx0XHR3aGlsZSAobm9kZXMubGVuZ3RoICE9IDApXHJcblx0XHRcdGZyYWcuYXBwZW5kKG5vZGVzWzBdKTtcclxuXHJcblx0XHRyZXR1cm4gZnJhZy5jaGlsZE5vZGVzO1xyXG5cdH07XHJcbn0pKHdpbmRvdyB8fCBnbG9iYWwpO1xyXG4iLCJpbXBvcnQgXCIuL0dsb2JhbFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MRWxlbWVudFwiO1xyXG4oZnVuY3Rpb24oR2xvYmFsKSB7XHJcblx0LyoqXHJcblx0ICogSlF1ZXJ5IHByZXZlbnQganF1ZXJ5XHJcblx0ICovXHJcblx0Y29uc3QgJCA9IEdsb2JhbC4kID0gR2xvYmFsLkpRdWVyeSA9IEdsb2JhbC5qUXVlcnkgPSBHbG9iYWwuJCB8fCBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiBkb2N1bWVudDtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1x0XHRcdFxyXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdHJldHVybiBHbG9iYWwucmVhZHkuYXBwbHkoR2xvYmFsLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0aWYgKC88W148XSs+L2cudGVzdChhcmd1bWVudHNbMF0pKVxyXG5cdFx0XHRcdFx0cmV0dXJuIEdsb2JhbC5jcmVhdGUuYXBwbHkoR2xvYmFsLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJldHVybiBHbG9iYWwuZmluZC5hcHBseShHbG9iYWwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXR1cm4gYXJndW1lbnRzWzBdO1xyXG5cdFx0fVxyXG5cdH07XHJcbn0pKHdpbmRvdyB8fCBnbG9iYWwpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgQmFzaWNRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9CYXNpY1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgRXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQucHJvdG90eXBlLCBCYXNpY1F1ZXJ5U3VwcG9ydCwgRXZlbnRTdXBwb3J0LCBSZWFkeUV2ZW50U3VwcG9ydCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xyXG5cdGRvY3VtZW50LnRyaWdnZXIoXCJyZWFkeVwiKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgQmFzaWNRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9CYXNpY1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgTm9kZVF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL05vZGVRdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IEh0bWxDbGFzc1N1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0XCI7XHJcbmltcG9ydCBFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnRcIjtcclxuaW1wb3J0IFNob3dIaWRlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MRWxlbWVudC5wcm90b3R5cGUsQmFzaWNRdWVyeVN1cHBvcnQsTm9kZVF1ZXJ5U3VwcG9ydCxIdG1sQ2xhc3NTdXBwb3J0LEV2ZW50U3VwcG9ydCxTaG93SGlkZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFNlbGVjdEVsZW1lbnQucHJvdG90eXBlLFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEYXRhU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0RhdGFTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGUucHJvdG90eXBlLERhdGFTdXBwb3J0LE1hbmlwdWxhdGlvblN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGVMaXN0LnByb3RvdHlwZSwgTGlzdFN1cHBvcnQpO1xyXG5cclxuRGVsZWdhdGVyQnVpbGRlcihmdW5jdGlvbihhRnVuY3Rpb25OYW1lLCB0aGVBcmd1bWVudHMpe1xyXG5cdGxldCBub2RlcyA9IHRoaXMudmFsdWVzKCk7XHJcblx0bGV0IG5vZGUgPSBub2Rlcy5uZXh0KCk7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcclxuXHR3aGlsZShub2RlICYmIG5vZGUudmFsdWUpe1xyXG5cdFx0bm9kZSA9IG5vZGUudmFsdWU7XHJcblx0XHRpZih0eXBlb2Ygbm9kZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygbm9kZVthRnVuY3Rpb25OYW1lXSA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYodHlwZW9mIHJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiByZXN1bHQgIT0gbnVsbCl7XHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgQXJyYXkpXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQocmVzdWx0KTtcclxuXHRcdFx0XHRlbHNlIGlmKHJlc3VsdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0XHRcdFx0cmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KEFycmF5LmZyb20ocmVzdWx0KSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdClcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHRcdG5vZGUgPSBub2Rlcy5uZXh0KCk7XHRcdFxyXG5cdH1cclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRlbHNlIGlmKHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20ocmVzdWx0cyk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHRcclxufSxOb2RlTGlzdC5wcm90b3R5cGUsIE5vZGUucHJvdG90eXBlLCBIVE1MRWxlbWVudC5wcm90b3R5cGUsIEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZSk7XHJcblxyXG5cclxuTm9kZUxpc3QuZnJvbSA9IGZ1bmN0aW9uKCl7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwidW5kZWZpbmVkXCIgJiYgIGFyZ3VtZW50c1swXSBpbnN0YW5jZW9mIE5vZGVMaXN0KXtcclxuXHRcdHJldHVybiBhcmd1bWVudHNbMF07XHRcdFxyXG5cdH1cclxuXHRlbHNle1xyXG5cdFx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRsZXQgaW50ZXJuYWwgPSB7XHJcblx0XHRcdGxlbmd0aDoge3ZhbHVlOiAwfVxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdFx0bGV0IGxpc3QgPSBBcnJheS5mcm9tKGFyZ3Muc2hpZnQoKSk7XHRcdFxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGxpc3RbaV0gIT09IFwidW5kZWZpbmVkXCIgJiYgbGlzdFtpXSBpbnN0YW5jZW9mIE5vZGUpe1xyXG5cdFx0XHRcdFx0aW50ZXJuYWxbaV0gPSB7dmFsdWU6IGxpc3RbaV0sIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRcdFx0aW50ZXJuYWwubGVuZ3RoLnZhbHVlKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHJcblx0XHRyZXR1cm4gT2JqZWN0LmNyZWF0ZShOb2RlTGlzdC5wcm90b3R5cGUsaW50ZXJuYWwgKTtcclxuXHR9XHJcbn0iLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0Y29uc3QgcGFyZW50U2VsZWN0b3IgPSAvOnBhcmVudChcXChcXFwiKFteXFwpXSopXFxcIlxcKSk/L2k7XHJcblx0XHJcblx0UHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbihhU2VsZWN0b3IpIHtcclxuXHRcdGxldCBtYXRjaCA9IHBhcmVudFNlbGVjdG9yLmV4ZWMoYVNlbGVjdG9yKTtcclxuXHRcdGlmKG1hdGNoKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IHRoaXM7XHJcblx0XHRcdGlmKG1hdGNoLmluZGV4ID4gMCl7XHJcblx0XHRcdFx0cmVzdWx0ID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvci5zdWJzdHIoMCwgbWF0Y2guaW5kZXgpKTtcclxuXHRcdFx0XHRpZihyZXN1bHQubGVuZ3RoID09IDApXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdFx0aWYodHlwZW9mIG1hdGNoWzJdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQobWF0Y2hbMl0pO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnBhcmVudCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYodHlwZW9mIHJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgbmV4dFNlbGVjdG9yID0gYVNlbGVjdG9yLnN1YnN0cihtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCkudHJpbSgpO1xyXG5cdFx0XHRpZihuZXh0U2VsZWN0b3IudHJpbSgpLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdC5maW5kKG5leHRTZWxlY3Rvcik7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1x0XHRcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3IpO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcblxyXG4iLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0UHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5fX2RhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0dGhpcy5fX2RhdGEgPSB7fTtcclxuXHRcdFx0aWYodHlwZW9mIHRoaXMuZGF0YXNldCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdGhpcy5kYXRhc2V0KVxyXG5cdFx0XHRcdFx0dGhpcy5fX2RhdGFbbmFtZV0gPSB0aGlzLmRhdGFzZXRbbmFtZV07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19kYXRhO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2RhdGFbYXJndW1lbnRzWzBdXSA7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRkZWxldGUgdGhpcy5fX2RhdGFbYXJndW1lbnRzWzBdXTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5fX2RhdGFbYXJndW1lbnRzWzBdXSA9IGFyZ3VtZW50c1sxXTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0Y29uc3QgV3JhcHBlZEV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uKGFDb25maWcsIGFDYWxsYmFjayAsYUV2ZW50KXtcclxuXHRcdGlmKHR5cGVvZiBhQ29uZmlnLmZpbHRlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhYUV2ZW50LnRhcmdldC5pcyhhQ29uZmlnLmZpbHRlcikpXHRcdFxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRcclxuXHRcdGxldCBhcmdzID0gW2FFdmVudF07XHJcblx0XHRpZih0eXBlb2YgYUNvbmZpZy5kYXRhICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRhcmdzID0gYXJncy5jb25jYXQoYUNvbmZpZy5kYXRhKTtcclxuXHRcdFxyXG5cdFx0bGV0IHJlc3VsdCA9IGFDYWxsYmFjay5hcHBseShhQ2FsbGJhY2ssIGFyZ3MpO1xyXG5cdFx0aWYoYUNvbmZpZy5zaW5nbGVDYWxsKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoYUNhbGxiYWNrKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcdFx0XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRjb25zdCBhZGRFdmVudExpc3RlbmVyID0gUHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XHJcblx0UHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHJcblx0XHR0aGlzLm9uKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLm9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRvbyBsZXNzIGFyZ3VtZW50cyFcIik7XHJcblx0XHRcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5fX2NhbGxiYWNrTWFwID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHR0aGlzLl9fY2FsbGJhY2tNYXAgPSB7fTtcclxuXHJcblx0XHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGxldCBldmVudHMgPSBhcmdzLnNoaWZ0KCkuc3BsaXQoLyhcXHMrKXwoXFxzKixcXHMqKS8pO1xyXG5cdFx0bGV0IGhhbmRsZXJDb25maWcgPSB7XHJcblx0XHRcdGZpbHRlciA6ICh0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IGFyZ3Muc2hpZnQoKS5zcGxpdCgvXFxzKixcXHMqLykgOiB1bmRlZmluZWQpLFxyXG5cdFx0XHRkYXRhIDogKHR5cGVvZiBhcmdzWzBdICE9PSBcImZ1bmN0aW9uXCIgPyBhcmdzLnNoaWZ0KCkgOiB1bmRlZmluZWQpXHJcblx0XHR9O1xyXG5cdCAgICBsZXQgY2FsbGJhY2sgPSBhcmdzLnNoaWZ0KCk7XHJcblx0ICAgIFxyXG5cdCAgICBoYW5kbGVyQ29uZmlnLnNpbmdsZUNhbGwgPSAodHlwZW9mIGFyZ3NbMF0gIT09IFwiYm9vbGVhblwiID8gYXJncy5zaGlmdCgpIDogZmFsc2UpO1xyXG5cclxuXHRcdGxldCBldmVudE1hcCA9IHt9O1xyXG5cdFx0ZXZlbnRzLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgY29uZmlnLCBjYWxsYmFjaywgZXZlbnQpe1xyXG5cdFx0XHRsZXQgd3JhcHBlZEV2ZW50SGFuZGxlciA9IFdyYXBwZWRFdmVudEhhbmRsZXIuYmluZCh0aGlzLCBjb25maWcsIGNhbGxiYWNrKTtcclxuXHRcdFx0cmVzdWx0W2V2ZW50XSA9IHdyYXBwZWRFdmVudEhhbmRsZXI7XHRcdFx0XHJcblx0XHRcdGFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCwgd3JhcHBlZEV2ZW50SGFuZGxlciwgdHJ1ZSk7XHJcblx0XHRcdFxyXG5cdFx0fSkuYmluZCh0aGlzLCBldmVudE1hcCwgaGFuZGxlckNvbmZpZywgY2FsbGJhY2spKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5fX2NhbGxiYWNrTWFwW2NhbGxiYWNrXSA9IGV2ZW50TWFwO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1x0XHJcblx0XHJcblx0Y29uc3QgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IFByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xyXG5cdFByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gUHJvdG90eXBlLnJlbW92ZU9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAxIHx8IHR5cGVvZiB0aGlzLl9fY2FsbGJhY2tNYXAgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHJldHVybiByZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0bGV0IGV2ZW50cyA9IHVuZGVmaW5lZDtcclxuXHRcdGxldCBjYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuXHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdGV2ZW50cyA9IGFyZ3VtZW50c1swXS5zcGxpdCgvKFxccyspfChcXHMqLFxccyopLyk7XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0Y2FsbGJhY2sgPSBhcmd1bWVudHNbMF0uc2hpZnQoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgYXJndW1lbnQhIC0+IGNhbGwgZnVuY3Rpb24oW2V2ZW50fGhhbmRsZXJdKVwiKTtcclxuXHRcdFxyXG5cdFx0bGV0IHJlbW92YWxIYW5kbGVyID0gW107XHJcblx0XHRpZih0eXBlb2YgZXZlbnRzID09PSBcInVuZGVmaW5lZFwiKXtcclxuXHRcdFx0ZXZlbnRNYXAgPSB0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xyXG5cdFx0XHRpZih0eXBlb2YgZXZlbnRNYXAgIT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRcdGV2ZW50TWFwLmdldE93blByb3BlcnR5TmFtZXMoKS5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIGV2ZW50TWFwLCBldmVudCl7XHJcblx0XHRcdFx0XHRsZXQgaGFuZGxlciA9IGV2ZW50TWFwW2V2ZW50XTtcclxuXHRcdFx0XHRcdGlmKHR5cGVvZiBoYW5kbGVyICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQucHVzaChoYW5kbGVyKTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCByZW1vdmFsSGFuZGxlciwgZXZlbnRNYXApKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5fX2NhbGxiYWNrTWFwW2NhbGxiYWNrXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGV2ZW50cy5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIGV2ZW50KXtcclxuXHRcdFx0XHRPYmplY3QuZ2V0UHJvcGVydHlOYW1lcyh0aGlzLl9fY2FsbGJhY2tNYXApLmZvckVhY2goKGZ1bmN0aW9uKGFFdmVudCwgQ2FsbGJhY2spe1xyXG5cdFx0XHRcdFx0bGV0IGV2ZW50TWFwID0gdGhpcy5fX2NhbGxiYWNrTWFwW0NhbGxiYWNrXTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBldmVudE1hcFthRXZlbnRdO1xyXG5cdFx0XHRcdFx0aWYoZXZlbnRNYXAuZ2V0T3duUHJvcGVydHlOYW1lcygpID09IDApXHJcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLl9fY2FsbGJhY2tNYXBbQ2FsbGJhY2tdO1xyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgZXZlbnQpKTtcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRcclxuXHRQcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgZXZlbnQgPSB1bmRlZmluZWQ7XHJcblx0XHRpZih0eXBlb2YgdGhpc1tcIm9uXCIgKyBhcmd1bWVudHNbMF1dID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XHJcblx0XHRcdGV2ZW50LmluaXRFdmVudChhcmd1bWVudHNbMF0sIHRydWUsIHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRldmVudCA9IG5ldyBDdXN0b21FdmVudChhcmd1bWVudHNbMF0sICB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogYXJndW1lbnRzWzFdIH0pO1xyXG5cdFx0XHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuIiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHRcdFxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy50b29nbGVDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcdFx0XHJcblx0UHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRpZih0aGlzW2ldID09IGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH07XHJcblx0XHJcblx0aWYodHlwZW9mIFByb3RvdHlwZS5mb3JFYWNoID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0UHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZvckVhY2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbMF07XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHJcblx0UHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZXMoKSA/IChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0ge307XHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyaWJ1dGVOYW1lcygpLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgbmFtZSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCByZXN1bHQpKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9KS5jYWxsKHRoaXMpIDogdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwidW5kZWZpbmVkXCIgfHwgYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IG5vZGVzID0gdGhpcy5jaGlsZE5vZGVzXHJcblx0XHR3aGlsZShub2Rlcy5sZW5ndGggIT0gMClcdFx0XHRcclxuXHRcdFx0bm9kZXNbMF0ucmVtb3ZlKHRydWUpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5jb250ZW50ID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdGlmKGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5vdXRlckhUTUw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIFxyXG5cdFx0XHRBcnJheS5mcm9tKGFyZ3VtZW50cykuZm9yRWFjaCgoZnVuY3Rpb24oY29udGVudCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZSBpZihjb250ZW50IGluc3RhbmNlb2YgRWxlbWVudCl7XHJcblx0XHRcdFx0XHR0aGlzLmVtcHR5KCk7XHJcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChjb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1x0XHRcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRcclxuXHRQcm90b3R5cGUuaXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSl7XHJcblx0XHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubWF0Y2hlcyhhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0ubGVuZ3RoID09PSBcIm51bWJlclwiKXtcclxuXHRcdFx0XHRsZXQgZmlsdGVyID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWx0ZXIubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHRpZih0aGlzLm1hdGNoZXMoZmlsdGVyW2ldKSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuaXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUucGFyZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpe1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0XHR3aGlsZSghcGFyZW50LmlzKGFyZ3VtZW50c1swXSkpXHJcblx0XHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudChhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnBhcmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCByZXN1bHQgPSBuZXcgQXJyYXkoKTtcclxuXHRcdGxldCBwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR3aGlsZShwYXJlbnQpe1xyXG5cdFx0XHRyZXN1bHQucHVzaChwYXJlbnQpO1xyXG5cdFx0XHRwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHBhcmVudCwgYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20ocmVzdWx0KTtcclxuXHR9O1x0XHJcblxyXG5cdFByb3RvdHlwZS5zZWxlY3RvciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0eXBlb2YgdGhpcy5pZCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0aGlzLmlkLmxlbmd0aCA9PSAwKXtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50KCk7XHJcblx0XHRcdGlmKHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50IHx8IHBhcmVudCBpbnN0YW5jZW9mICBEb2N1bWVudEZyYWdtZW50KVxyXG5cdFx0XHRcdHBhcmVudCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gdGhpcy5sb2NhbE5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0aWYodHlwZW9mIHBhcmVudCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdFx0bGV0IHNhbWVUYWdTaWJsaW5ncyA9IHBhcmVudC5maW5kKFwiOnNjb3BlPlwiICsgc2VsZWN0b3IpO1x0XHRcdFxyXG5cdFx0XHRcdGlmIChzYW1lVGFnU2libGluZ3MgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gc2FtZVRhZ1NpYmxpbmdzLmluZGV4T2YodGhpcykgKyAxO1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID4gMClcclxuXHRcdFx0XHRcdFx0c2VsZWN0b3IgKz0gJzpudGgtY2hpbGQoJyArIGluZGV4ICsgJyknO1xyXG5cdFx0XHRcdH1cdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBwYXJlbnQgIT09IFwidW5kZWZpbmVkXCIgPyBwYXJlbnQuc2VsZWN0b3IoKSArIFwiPlwiICsgc2VsZWN0b3IgOiBzZWxlY3RvcjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcclxuXHR9O1x0XHJcblxyXG5cdFByb3RvdHlwZS5jbG9zZXN0cyA9IGZ1bmN0aW9uKGFRdWVyeSkge1xyXG5cdFx0aWYodGhpcy5pcyhhUXVlcnkpKVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdGVsc2V7XHJcblx0XHRcdGxldCByZXN1bHQgPSB0aGlzLmZpbmQoYVF1ZXJ5LCB0cnVlKTtcclxuXHRcdFx0aWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCgpO1xyXG5cdFx0XHRpZih0eXBlb2YgcGFyZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHBhcmVudCAhPSBkb2N1bWVudClcclxuXHRcdFx0XHRyZXR1cm4gcGFyZW50LmNsb3Nlc3QoYVF1ZXJ5KTtcclxuXHRcdH1cdFx0XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uKGFRdWVyeSl7XHJcblx0XHRsZXQgcmVzdWx0ID0gdGhpcy5jbG9zZXN0cyhhUXVlcnkpO1xyXG5cdFx0aWYodHlwZW9mIHJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0cmV0dXJuIHJlc3VsdFswXTtcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHJcblx0UHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24oYUZ1bmN0aW9uLCBvbmNlKXtcdFxyXG5cdFx0dGhpcy5vbihcInJlYWR5XCIsIGFGdW5jdGlvbiwgb25jZSk7XHJcblx0XHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIilcdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwicmVhZHlcIik7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cclxuXHRQcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLl9faXNoaWRlKXtcclxuXHRcdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fX2Rpc3BsYXkgfHwgXCJcIjtcclxuXHRcdFx0dGhpcy5fX2lzaGlkZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZighdGhpcy5fX2lzaGlkZSl7XHJcblx0XHRcdHRoaXMuX19kaXNwbGF5ID0gdGhpcy5zdHlsZS5kaXNwbGF5O1xyXG5cdFx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0dGhpcy5fX2lzaGlkZSA9IHRydWU7XHJcblx0XHR9XHRcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUudG9nZ2xlU2hvdyA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLl9faXNoaWRlKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLmhpZGUoKTtcclxuXHR9O1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRjb25zdCBJbnB1dFR5cGVzID1bXHJcblx0XHR7XHJcblx0XHRcdHNlbGVjdG9yIDogXCJzZWxlY3RcIixcclxuXHRcdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gW107XHJcblx0XHRcdFx0dGhpcy5maW5kKFwib3B0aW9uOmNoZWNrZWRcIiwgdHJ1ZSkuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBvcHRpb24pe1xyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gob3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHJlc3VsdCkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiYm9vbGVhblwiICYmIGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XHRcdFx0XHRcclxuXHRcdFx0XHRlbHNlIGlmKHJlc3VsdC5sZW5ndGggPT0gMSlcclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHRbMF07XHJcblx0XHRcdFx0ZWxzZSBpZihyZXN1bHQubGVuZ3RoID4gMSlcclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0IDogZnVuY3Rpb24oKXtcdFx0XHRcdFxyXG5cdFx0XHRcdGxldCB2YWx1ZXMgPSBbXTtcclxuXHRcdFx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRcdHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdChBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiLCB0cnVlKS5mb3JFYWNoKChmdW5jdGlvbih2YWx1ZXMsIG9wdGlvbil7XHJcblx0XHRcdFx0XHRsZXQgY2hlY2sgPSB2YWx1ZXMuaW5kZXhPZihvcHRpb24udmFsdWUpID4gLTE7XHJcblx0XHRcdFx0XHRpZihjaGVjaylcclxuXHRcdFx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCB2YWx1ZXMpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRzZWxlY3RvciA6IFwib3B0aW9uXCIsXHJcblx0XHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aWYodGhpcy5zZWxlY3RlZClcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBhVmFsdWUgPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZCA9IGFWYWx1ZTtcclxuXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBhVmFsdWUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gYVZhbHVlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHRcdFx0XHRcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0c2VsZWN0b3IgOiBcImlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl1cIixcclxuXHRcdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgdGhpcy52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0aGlzLnZhbHVlID09IFwib25cIilcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrZWQ7XHJcblx0XHRcdFx0ZWxzZSBpZih0aGlzLmNoZWNrZWQpXHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBhVmFsdWUgPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRcdFx0dGhpcy5jaGVja2VkID0gYVZhbHVlO1xyXG5cdFx0XHRcdGVsc2UgaWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdF07XHJcblx0XHJcblx0Y29uc3QgRGVmYXVsdElucHV0VHlwZSA9IHtcclxuXHRcdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gYVZhbHVlO1xyXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihcImlucHV0XCIpO1xyXG5cdFx0XHR9XHRcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IGdldElucHV0VHlwZSA9IGZ1bmN0aW9uKGFFbGVtZW50KXtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBJbnB1dFR5cGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRpZihhRWxlbWVudC5pcyhJbnB1dFR5cGVzW2ldLnNlbGVjdG9yKSlcclxuXHRcdFx0XHRyZXR1cm4gSW5wdXRUeXBlc1tpXTtcdFx0XHJcblx0XHRyZXR1cm4gRGVmYXVsdElucHV0VHlwZTtcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdFByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB0eXBlID0gZ2V0SW5wdXRUeXBlKHRoaXMpO1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdFx0cmV0dXJuIHR5cGUuZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHR0eXBlLnNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHRcdFxyXG5cdH07XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiXHJcbmltcG9ydCBcIi4vZG9tL05vZGUuanNcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTElucHV0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MU2VsZWN0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlTGlzdFwiO1xyXG5pbXBvcnQgXCIuL0dsb2JhbFwiO1xyXG5pbXBvcnQgXCIuL0pRdWVyeVwiO1xyXG4iLCJjb25zdCBEZWxlZ2F0ZXJCdWlsZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdGxldCBzb3VyY2UgPSBhcmdzLnNoaWZ0KCk7XHJcblx0YXJncy5mb3JFYWNoKChmdW5jdGlvbihhU291cmNlLCBhQ2FsbGJhY2ssIGFUYXJnZXQpe1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYVRhcmdldCkuZm9yRWFjaChcclxuXHRcdFx0XHQoZnVuY3Rpb24oYVNvdXJjZSwgYVRhcmdldCxhQ2FsbGJhY2ssICBhTmFtZSkge1xyXG5cdFx0XHRcdFx0bGV0IHByb3AgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFUYXJnZXQsIGFOYW1lKTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgYVNvdXJjZVthTmFtZV0gPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb3AudmFsdWUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRcdFx0YVNvdXJjZVthTmFtZV0gPSBmdW5jdGlvbigpe3JldHVybiBhQ2FsbGJhY2suY2FsbCh0aGlzLCBhTmFtZSwgYXJndW1lbnRzKTt9O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSkuYmluZChudWxsLCBhU291cmNlLCBhVGFyZ2V0LCBhQ2FsbGJhY2spKTtcclxuXHR9KS5iaW5kKG51bGwsIHNvdXJjZSwgY2FsbGJhY2spKTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGVsZWdhdGVyQnVpbGRlcjsiLCJjb25zdCBleHRlbmRQcm90b3R5cGUgPSBmdW5jdGlvbigpe1xyXG5cdGxldCBhcmdzID0gXHRBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IHByb3RvdHlwZSA9IGFyZ3Muc2hpZnQoKTsgXHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGxldCBleHRlbmRlciA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGV4dGVuZGVyKHByb3RvdHlwZSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kUHJvdG90eXBlOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0IENvbnZlcnRlciA9IHtcclxuXHR4bWxUb0pzb24gOiBmdW5jdGlvbihhTm9kZSkge1xyXG5cdFx0Ly8gQ3JlYXRlIHRoZSByZXR1cm4gb2JqZWN0XHJcblx0XHRsZXQgb2JqID0ge307XHJcblx0XHRpZiAoYU5vZGUubm9kZVR5cGUgPT0gMSB8fCBhTm9kZS5ub2RlVHlwZSA9PSA5KSB7IC8vIGVsZW1lbnRcclxuXHRcdFx0Ly8gZG8gYXR0cmlidXRlc1xyXG5cdFx0XHRpZiAoYU5vZGUuYXR0cmlidXRlcyAhPSB1bmRlZmluZWQgJiYgYU5vZGUuYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0bGV0IGF0dHJpYnV0ZXMgPSB7fTtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFOb2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCBhdHRyaWJ1dGUgPSBhTm9kZS5hdHRyaWJ1dGVzLml0ZW0oaSk7XHJcblx0XHRcdFx0XHRhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5ub2RlTmFtZV0gPSBhdHRyaWJ1dGUubm9kZVZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRvYmpbXCJAYXR0cmlidXRlc1wiXSA9IGF0dHJpYnV0ZXM7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoYU5vZGUubm9kZVR5cGUgPT0gMyB8fCBhTm9kZS5ub2RlVHlwZSA9PSA0KSAvLyB0ZXh0XHJcblx0XHRcdHJldHVybiBhTm9kZS50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG5cdFx0Ly8gZG8gY2hpbGRyZW5cclxuXHRcdGlmIChhTm9kZS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuXHRcdFx0bGV0IHRleHRDb250ZW50ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRsZXQgaGFzQ2hpbGRyZW4gPSBmYWxzZTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhTm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IGl0ZW0gPSBhTm9kZS5jaGlsZE5vZGVzLml0ZW0oaSk7XHJcblx0XHRcdFx0aWYgKGl0ZW0ubm9kZVR5cGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0aGFzQ2hpbGRyZW4gPSB0cnVlO1xyXG5cdFx0XHRcdFx0bGV0IG5vZGVOYW1lID0gaXRlbS5ub2RlTmFtZTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2Ygb2JqW25vZGVOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdFx0XHRvYmpbbm9kZU5hbWVdID0gQ29udmVydGVyLnhtbFRvSnNvbihpdGVtKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmICh0eXBlb2Ygb2JqW25vZGVOYW1lXS5wdXNoID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IG9sZCA9IG9ialtub2RlTmFtZV07XHJcblx0XHRcdFx0XHRcdFx0b2JqW25vZGVOYW1lXSA9IFtdO1xyXG5cdFx0XHRcdFx0XHRcdG9ialtub2RlTmFtZV0ucHVzaChvbGQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdG9ialtub2RlTmFtZV0ucHVzaChDb252ZXJ0ZXIueG1sVG9Kc29uKGl0ZW0pKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKChpdGVtLm5vZGVUeXBlID09IDMgfHwgaXRlbS5ub2RlVHlwZSA9PSA0KVxyXG5cdFx0XHRcdFx0XHQmJiBpdGVtLnRleHRDb250ZW50ICE9IFwiXCIpXHJcblx0XHRcdFx0XHR0ZXh0Q29udGVudCA9ICh0ZXh0Q29udGVudCA/IHRleHRDb250ZW50ICsgaXRlbS50ZXh0Q29udGVudFxyXG5cdFx0XHRcdFx0XHRcdDogaXRlbS50ZXh0Q29udGVudCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0ZXh0Q29udGVudCkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2Ygb2JqW1wiQGF0dHJpYnV0ZXNcIl0gPT09IFwidW5kZWZpbmVkXCIgJiYgIWhhc0NoaWxkcmVuKVxyXG5cdFx0XHRcdFx0b2JqID0gdGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG9iai50ZXh0ID0gdGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb2JqO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb252ZXJ0ZXI7IiwiaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBPYmplY3RVdGlscyBmcm9tIFwiLi91dGlscy9PYmplY3RVdGlsc1wiO1xyXG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCIuL0V4cHJlc3Npb25SZXNvbHZlclwiO1xyXG5cclxuY29uc3QgZXhwcmVzc2lvblJlc29sdmVyID0gRXhwcmVzc2lvblJlc29sdmVyLkRFRkFVTFQ7XHJcblxyXG5jb25zdCBTVEFURSA9IHtcclxuXHRGSU5JU0hFRCA6IFwiJCRldmVudEJpbmQuRklOSVNIRUQkJFwiLFxyXG5cdEZBSUxfREVUQUlMUyA6IFwiJCRldmVudEJpbmQuRkFJTF9ERVRBSUxTJCRcIlxyXG59O1xyXG5jb25zdCBGSU5JU0hFRFNUQVRFID0ge1xyXG4gICAgRkFJTCA6IFwiZmFpbFwiLFxyXG4gICAgUkVBRFkgOiBcInJlYWR5XCJcclxufTtcclxuXHJcbmNvbnN0IEV4ZWN1dGVyID0gZnVuY3Rpb24oYW5FdmVudCkge1xyXG5cdGxldCBlbGVtZW50ID0gYW5FdmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cdGxldCBkYXRhID0gZWxlbWVudC5kYXRhKFwiZGUudGl0dXMuY29yZS5ldmVudEJpbmRcIik7XHJcblx0aWYgKGRhdGEucHJldmVudERlZmF1bHQpXHJcblx0XHRhbkV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0aWYgKGRhdGEuc3RvcFByb3BhZ2F0aW9uKVxyXG5cdFx0YW5FdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0aWYgKGFyZ3MubGVuZ3RoID49IDEgJiYgdHlwZW9mIGFuRXZlbnQuZGF0YSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdGFyZ3Muc3BsaWNlKDEsIDAsIGFuRXZlbnQuZGF0YSk7XHJcblx0XHJcblx0aWYgKHR5cGVvZiBkYXRhLmFjdGlvbiA9PT0gJ3N0cmluZycpIHtcclxuXHRcdGxldCBhY3Rpb24gPSBleHByZXNzaW9uUmVzb2x2ZXIucmVzb2x2ZUV4cHJlc3Npb24oZGF0YS5hY3Rpb24sIGFuRXZlbnQuZGF0YSwgdW5kZWZpbmVkKTtcclxuXHRcdGlmICh0eXBlb2YgYWN0aW9uID09PSBcImZ1bmN0aW9uXCIpXHRcdFx0XHJcblx0XHRcdGFjdGlvbi5hcHBseShhY3Rpb24sIGFyZ3MpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgZGF0YS5kZWxlZ2F0aW9uID09PSAnc3RyaW5nJylcclxuXHRcdGVsZW1lbnQudHJpZ2dlcihkYXRhLmRlbGVnYXRpb24sIGFyZ3MpO1xyXG5cclxuXHRyZXR1cm4gZGF0YS5wcmV2ZW50RGVmYXVsdDtcclxufTtcclxuXHJcblxyXG5jb25zdCBFdmVudEJpbmQgPSBmdW5jdGlvbihhbkVsZW1lbnQsIGFDb250ZXh0KSB7XHJcblx0aWYodHlwZW9mIGFuRWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybjtcclxuXHRcclxuXHRpZih0eXBlb2YgYW5FbGVtZW50LmRhdGEoXCJkZS50aXR1cy5jb3JlLmV2ZW50QmluZFwiKSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybjtcclxuXHRcclxuXHRpZihhbkVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdHJldHVybiBhbkVsZW1lbnQuZm9yRWFjaCgoZnVuY3Rpb24oYUNvbnRleHQsIGFuRWxlbWVudCl7XHJcblx0XHRcdEV2ZW50QmluZChhbkVsZW1lbnQsIGFDb250ZXh0KTtcclxuXHRcdH0pLmJpbmQobnVsbCwgYUNvbnRleHQpKTtcclxuXHRcclxuXHRsZXQgZGF0YSA9IHtcclxuXHQgICAgcHJldmVudERlZmF1bHQgOiBhbkVsZW1lbnQuYXR0cihcImV2ZW50LXByZXZlbnQtZGVmYXVsdFwiKSAhPSBudWxsLFxyXG5cdCAgICBzdG9wUHJvcGFnYXRpb24gOiBhbkVsZW1lbnQuYXR0cihcImV2ZW50LXN0b3AtcHJvcGFnYXRpb25cIikgIT0gbnVsbFxyXG5cdH07XHJcblx0YW5FbGVtZW50LmRhdGEoXCJkZS50aXR1cy5jb3JlLmV2ZW50QmluZFwiLCBkYXRhKTtcclxuXHRcclxuXHRkYXRhLmV2ZW50VHlwZSA9IGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtdHlwZVwiKTtcclxuXHRpZiAodHlwZW9mIGRhdGEuZXZlbnRUeXBlICE9PSBcInN0cmluZ1wiKXtcclxuXHRcdGRhdGEuc3RhdGUgPSBGSU5JU0hFRFNUQVRFLkZBSUw7XHJcblx0XHRkYXRhLmRldGFpbHMgPSBcIk5vIGV2ZW50IHR5cGUgZGVmaW5lZCFcIjtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0XHJcblx0ZGF0YS5hY3Rpb24gPSBhbkVsZW1lbnQuYXR0cihcImV2ZW50LWFjdGlvblwiKTtcclxuXHRkYXRhLmRlbGVnYXRpb24gPSBhbkVsZW1lbnQuYXR0cihcImV2ZW50LWRlbGVnYXRpb25cIik7XHJcblxyXG5cdGlmICh0eXBlb2YgZGF0YS5hY3Rpb24gIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGRhdGEuZGVsZWdhdGlvbiAhPT0gXCJzdHJpbmdcIikge1xyXG5cdFx0ZGF0YS5zdGF0ZSA9IEZJTklTSEVEU1RBVEUuRkFJTDtcclxuXHRcdGRhdGEuZGV0YWlscyA9IFwiTm8gYWN0aW9uIG9yIGRlbGVnYXRpb24gZGVmaW5lZCFcIjtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGRhdGEuZXZlbnREYXRhID0gYW5FbGVtZW50LmF0dHIoXCJldmVudC1kYXRhXCIpO1xyXG5cdGlmICh0eXBlb2YgZGF0YS5ldmVudERhdGEgPT09IFwic3RyaW5nXCIgJiYgZGF0YS5ldmVudERhdGEubGVuZ3RoID4gMClcclxuXHRcdGRhdGEuZXZlbnREYXRhID0gZXhwcmVzc2lvblJlc29sdmVyLnJlc29sdmVFeHByZXNzaW9uKGV2ZW50RGF0YSwgYUNvbnRleHQsIHt9KTtcclxuXHRlbHNlIGlmICh0eXBlb2YgYUNvbnRleHQgIT09ICd1bmRlZmluZWQnKVxyXG5cdFx0ZGF0YS5ldmVudERhdGEgPSBPYmplY3RVdGlscy5leHRlbmQoe30sIGFDb250ZXh0KTtcclxuXHRcclxuXHRpZiAoZGF0YS5ldmVudERhdGEpXHJcblx0XHRhbkVsZW1lbnQub24oZGF0YS5ldmVudFR5cGUsIG51bGwsIGRhdGEuZXZlbnREYXRhLCBFeGVjdXRlcik7XHJcblx0ZWxzZVxyXG5cdFx0YW5FbGVtZW50Lm9uKGRhdGEuZXZlbnRUeXBlLCBFeGVjdXRlcik7XHJcblx0XHJcblx0cmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5jb25zdCBPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xyXG5cdG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG11dGF0aW9uKSB7XHJcblx0XHRtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xyXG5cdFx0XHRpZiAobm9kZS5ub2RlVHlwZSAhPSBOb2RlLlRFWFRfTk9ERSkge1xyXG5cdFx0XHRcdGlmKG5vZGUuaXMoXCJbZXZlbnQtdHlwZV1cIikpXHJcblx0XHRcdFx0XHRFdmVudEJpbmQobm9kZSk7XHRcdFx0XHRcclxuXHRcdFx0XHRFdmVudEJpbmQobm9kZS5maW5kKFwiW2V2ZW50LXR5cGVdXCIpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuLy8gcGFzcyBpbiB0aGUgdGFyZ2V0IG5vZGUsIGFzIHdlbGwgYXMgdGhlIG9ic2VydmVyIG9wdGlvbnNcclxuT2JzZXJ2ZXIub2JzZXJ2ZShmaW5kKFwiYm9keVwiKS5maXJzdCgpLCAge1xyXG4gICAgYXR0cmlidXRlcyA6IHRydWUsXHJcbiAgICBjaGlsZExpc3QgOiB0cnVlLFxyXG4gICAgc3VidHJlZSA6IHRydWUsXHJcbiAgICBjaGFyYWN0ZXJEYXRhIDogZmFsc2VcclxufSk7XHJcblxyXG5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRjb25zb2xlLmxvZyhcImluaXQgZXZlbnQgYmluZHMgd2l0aCBhdXRvcnVuXCIpO1xyXG5cdEV2ZW50QmluZChmaW5kKFwiW2V2ZW50LWF1dG9ydW5dXCIpKTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50QmluZDsiLCJpbXBvcnQgUmVnZXggZnJvbSBcIi4vcmVnZXgvUmVnZXhcIjtcclxuaW1wb3J0IEV2YWxVdGlscyBmcm9tIFwiLi91dGlscy9FdmFsVXRpbHNcIjtcclxuXHJcbmNvbnN0IEVYUFJFU1NJT05fUkVHRVggPSBcIlxcXFwkXFxcXHsoW15cXFxce1xcXFx9XSspXFxcXH1cIjtcclxuXHJcblxyXG5jb25zdCBFeHByZXNzaW9uUmVzb2x2ZXIgPSBmdW5jdGlvbih2YXJSZWdleCkge1xyXG5cdHRoaXMucmVnZXggPSBuZXcgUmVnZXgodmFyUmVnZXhcdHx8IFRFWFRfRVhQUkVTU0lPTl9SRUdFWCk7XHJcbn07XHJcblxyXG5FeHByZXNzaW9uUmVzb2x2ZXIucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbihhRXhwcmVzc2lvbiwgYUNvbnRleHQsIGFEZWZhdWx0KSB7XHJcblx0bGV0IGV4cHJlc3Npb24gPSBhRXhwcmVzc2lvbi50cmltKCk7XHJcblx0bGV0IG1hdGNoZXIgPSB0aGlzLnJlZ2V4LnBhcnNlKGV4cHJlc3Npb24pO1xyXG5cdGlmIChtYXRjaGVyLm5leHQoKSlcclxuXHRcdGV4cHJlc3Npb24gPSBtYXRjaGVyLmdldEdyb3VwKDEpLnRyaW0oKTtcclxuXHRcdFxyXG5cdHJldHVybiBFdmFsVXRpbHMuZXZhbChleHByZXNzaW9uLCBhQ29udGV4dCB8fCB7fSwgYURlZmF1bHQpO1xyXG59O1xyXG5cclxuRXhwcmVzc2lvblJlc29sdmVyLnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24oYUV4cHJlc3Npb24sIGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpIHtcclxuXHRsZXQgZXhwcmVzc2lvbiA9IGFFeHByZXNzaW9uLnRyaW0oKTtcclxuXHRsZXQgbWF0Y2hlciA9IHRoaXMucmVnZXgucGFyc2UoZXhwcmVzc2lvbik7XHJcblx0aWYgKG1hdGNoZXIubmV4dCgpKVxyXG5cdFx0ZXhwcmVzc2lvbiA9IG1hdGNoZXIuZ2V0R3JvdXAoMSkudHJpbSgpO1xyXG5cdFx0XHJcblx0cmV0dXJuIEV2YWxVdGlscy5wcm9taXNlRXZhbChleHByZXNzaW9uLCBhQ29udGV4dCB8fCB7fSwgYURlZmF1bHQpO1xyXG59O1xyXG5cclxuRXhwcmVzc2lvblJlc29sdmVyLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24oYVRleHQsIGFDb250ZXh0LCBhRGVmYXVsdCkge1xyXG5cdGxldCBoYXNEZWZhdWx0ID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMztcclxuXHRsZXQgdGV4dCA9IGFUZXh0O1xyXG5cdGxldCBtYXRjaGVyID0gdGhpcy5yZWdleC5wYXJzZSh0ZXh0KTtcclxuXHR3aGlsZSAobWF0Y2hlci5uZXh0KCkpIHtcclxuXHRcdGxldCBleHByZXNzaW9uID0gbWF0Y2hlci5nZXRNYXRjaCgpO1xyXG5cdFx0bGV0IHJlc3VsdCA9IEV2YWxVdGlscy5ldmFsKG1hdGNoZXIuZ2V0R3JvdXAoMSkudHJpbSgpLCBhQ29udGV4dCwgYURlZmF1bHQpO1xyXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgIT09IFwidW5kZWZpbmVkXCIgfHwgaGFzRGVmYXVsdClcclxuXHRcdFx0dGV4dCA9IG1hdGNoZXIucmVwbGFjZUFsbChyZXN1bHQsIHRleHQpO1xyXG5cdH1cclxuXHRyZXR1cm4gdGV4dDtcclxufTtcclxuXHJcbkV4cHJlc3Npb25SZXNvbHZlci5wcm90b3R5cGUucHJvbWlzZVRleHQgPSBmdW5jdGlvbihhVGV4dCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1xyXG5cdGxldCBhY3Rpb24gPSAoZnVuY3Rpb24ocmVzb2x2ZSl7XHJcblx0XHRyZXNvbHZlKHRoaXMudGV4dChhVGV4dCwgYUNvbnRleHQsIGFEZWZhdWx0KSk7XHJcblx0fSkuYmluZCh0aGlzKTtcclxuXHRcclxuXHRpZihhVGltZW91dCA+IDApXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oKXtcclxuXHRcdFx0c2V0VGltZW91dChhY3Rpb24sIGFUaW1lb3V0KTtcclxuXHRcdH0pO1xyXG5cdFxyXG5cdHJldHVybiBuZXcgUHJvbWlzZShhY3Rpb24pO1xyXG59O1xyXG5cclxuXHJcbkV4cHJlc3Npb25SZXNvbHZlci5wcm90b3R5cGUucmVzb2x2ZVRleHQgPSBFeHByZXNzaW9uUmVzb2x2ZXIucHJvdG90eXBlLnRleHQ7XHJcbkV4cHJlc3Npb25SZXNvbHZlci5wcm90b3R5cGUucmVzb2x2ZUV4cHJlc3Npb24gPSBFeHByZXNzaW9uUmVzb2x2ZXIucHJvdG90eXBlLnJlc29sdmU7IFxyXG5FeHByZXNzaW9uUmVzb2x2ZXIuREVGQVVMVCA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cHJlc3Npb25SZXNvbHZlcjtcclxuIiwibGV0IGJ1aWxkID0gZnVuY3Rpb24oR29iYWwsIGFOYW1lcywgYUNhbGxiYWNrKSB7XG5cdGxldCBuYW1lID0gYU5hbWVzLnNoaWZ0KCk7XG5cdGlmICh0eXBlb2YgR29iYWxbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0R29iYWxbbmFtZV0gPSB7fTtcblxuXHRpZiAoYU5hbWVzLmxlbmd0aCA9PSAwKVxuXHRcdEdvYmFsW25hbWVdID0gYUNhbGxiYWNrKCkgfHwgR29iYWxbbmFtZV07XG5cdGVsc2Vcblx0XHRidWlsZChHb2JhbFtuYW1lXSwgYU5hbWVzLCBhQ2FsbGJhY2spO1xufTtcblxubGV0IE5hbWVzcGFjZSA9IGZ1bmN0aW9uKGFOYW1lc3BhY2UsIGFGdW5jdGlvbikge1xuXHRidWlsZCggKHdpbmRvdyB8fCBnbG9iYWwgfHwge30pLCBhTmFtZXNwYWNlLnNwbGl0KFwiLlwiKSAsYUZ1bmN0aW9uKTtcbn07XG5cbk5hbWVzcGFjZS5jcmVhdGUgPSBOYW1lc3BhY2U7IFxuZXhwb3J0IGRlZmF1bHQgTmFtZXNwYWNlO1xuIiwibGV0IFBhZ2UgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmJhc2VUYWdWYWx1ZSA9IHVuZGVmaW5lZDtcclxuXHRsZXQgYmFzZVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlW2hyZWZdXCIpO1xyXG5cdGlmICh0eXBlb2YgYmFzZVRhZyAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHRoaXMuYmFzZVRhZ1ZhbHVlID0gYmFzZVRhZy5hdHRyaWJ1dGVzW1wiaHJlZlwiXS52YWx1ZTtcclxuXHRcdHRoaXMuZmlsZXMgPSB7fTtcclxuXHRcdHRoaXMuZGF0YSA9IHt9O1xyXG59O1xyXG5cdFxyXG5QYWdlLnByb3RvdHlwZS5hZGRKc0ZpbGUgPSBmdW5jdGlvbihhVXJsLCBhRnVuY3Rpb24sIGZvcmNlRnVuY3Rpb24pIHtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShhVXJsKSlcclxuXHRcdHJldHVybiB0aGlzLmFkZEpzRmlsZXMoYVVybCwgYUZ1bmN0aW9uLCBmb3JjZUZ1bmN0aW9uKTtcclxuXHRcclxuXHRpZiAodHlwZW9mIHRoaXMuZmlsZXNbYVVybF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdHRoaXMuZmlsZXNbYVVybF0gPSB0cnVlO1xyXG5cdFx0bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9qYXZhc2NyaXB0XCIpO1xyXG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYVVybCk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChlbGVtZW50KTtcclxuXHRcclxuXHRcdGlmICh0eXBlb2YgYUZ1bmN0aW9uICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRhRnVuY3Rpb24oKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZm9yY2VGdW5jdGlvbiAmJiB0eXBlb2YgYUZ1bmN0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRhRnVuY3Rpb24oKTtcclxuXHR9XHJcbn07XHJcblxyXG5QYWdlLnByb3RvdHlwZS5hZGRKc0ZpbGVzID0gZnVuY3Rpb24oYVVybHMsIGFGdW5jdGlvbiwgZm9yY2VGdW5jdGlvbikge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGFVcmxzKSkge1xyXG5cdFx0d2hpbGUoYVVybHMubGVuZ3RoICE9IDApe1xyXG5cdFx0XHR0aGlzLmFkZEpzRmlsZShhVXJscy5zaGlmdCgpLCAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhpcy5hZGRKc0ZpbGVzKGFVcmxzLCBhRnVuY3Rpb24sIGZvcmNlRnVuY3Rpb24pXHJcblx0XHRcdH0pLmJpbmQodGhpcyksIHRydWUpO1xyXG5cdFx0fVxyXG5cdH0gZWxzZVxyXG5cdFx0dGhpcy5hZGRKc0ZpbGUoYVVybHMsIGFGdW5jdGlvbiwgZm9yY2VGdW5jdGlvbik7XHJcbn07XHJcblxyXG5QYWdlLnByb3RvdHlwZS5hZGRDc3NGaWxlID0gZnVuY3Rpb24oYVVybCkge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGFVcmwpKSB7XHJcblx0XHR0aGlzLmFkZENzc0ZpbGVzKGFVcmwpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKHRoaXMuZmlsZXNbYVVybF0gPT0gdW5kZWZpbmVkKSB7XHJcblx0XHR0aGlzLmZpbGVzW2FVcmxdID0gdHJ1ZTtcclxuXHRcdGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XHJcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcclxuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBhVXJsKTtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKGVsZW1lbnQpO1xyXG5cdH1cclxufTtcclxuXHJcblBhZ2UucHJvdG90eXBlLmFkZENzc0ZpbGVzID0gZnVuY3Rpb24oYVVybHMpIHtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShhVXJscykpIHtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCBhVXJscy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLmFkZENzc0ZpbGUoYVVybHNbaV0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblBhZ2UucHJvdG90eXBlLmdldFVybCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBkZS50aXR1cy5jb3JlLlVSTC5nZXRDdXJyZW50VXJsKCk7XHJcbn07XHJcblxyXG5QYWdlLnByb3RvdHlwZS5idWlsZFVybCA9IGZ1bmN0aW9uKGFVcmwpIHtcclxuXHRsZXQgYnJvd3NlciA9IHRoaXMuZGV0ZWN0QnJvd3NlcigpO1xyXG5cdGlmIChicm93c2VyLmllICYmIGJyb3dzZXIuaWUgPCAxMSkge1xyXG5cdFx0bGV0IHRlbXBVcmwgPSBhVXJsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmJhc2VUYWdWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGVtcFVybC5pbmRleE9mKFwiaHR0cDpcIikgPT0gMFxyXG5cdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJodHRwczpcIikgPT0gMFxyXG5cdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJmdHA6XCIpID09IDBcclxuXHRcdFx0XHQmJiAhdGVtcFVybC5pbmRleE9mKFwiZnRwczpcIikgPT0gMFxyXG5cdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJtYWlsdG86XCIpID09IDBcclxuXHRcdFx0XHQmJiAhdGVtcFVybC5pbmRleE9mKFwibm90ZXM6XCIpID09IDBcclxuXHRcdFx0XHQmJiAhdGVtcFVybC5pbmRleE9mKFwiL1wiKSA9PSAwKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmJhc2VUYWdWYWx1ZSArIGFVcmw7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBhVXJsO1xyXG59O1xyXG5cclxuUGFnZS5wcm90b3R5cGUuZGV0ZWN0QnJvd3NlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmIChQYWdlLkJST1dTRVIpXHJcblx0XHRyZXR1cm4gUGFnZS5CUk9XU0VSO1xyXG5cclxuXHRQYWdlLkJST1dTRVIgPSB7fTtcclxuXHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRNb2RlKVxyXG5cdFx0UGFnZS5CUk9XU0VSLmllID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xyXG5cdGVsc2VcclxuXHRcdFBhZ2UuQlJPV1NFUi5vdGhlciA9IHRydWU7XHJcblxyXG5cdHJldHVybiBQYWdlLkJST1dTRVI7XHJcbn07XHJcblxyXG5QYWdlLnByb3RvdHlwZS5zZXREYXRhID0gZnVuY3Rpb24oYUtleSwgYVZhbHVlKSB7XHJcblx0dGhpcy5kYXRhW2FLZXldID0gYVZhbHVlO1xyXG59O1xyXG5cclxuUGFnZS5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uKGFLZXkpIHtcclxuXHRyZXR1cm4gdGhpcy5kYXRhW2FLZXldO1xyXG59O1xyXG5cclxuUGFnZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0eXBlb2YgSU5TVEFOQ0UgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFBhZ2UuSU5TVEFOQ0UgPSBuZXcgUGFnZSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFBhZ2UuSU5TVEFOQ0U7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImxldCBQYWdpbmdVdGlscyA9IHtcclxuXHRwYWdlckRhdGEgOiBmdW5jdGlvbihhUGFnZSwgYVBhZ2VzLCBhU2l6ZSkge1xyXG5cdFx0bGV0IGhhbGYgPSBNYXRoLnJvdW5kKGFQYWdlcyAvIDIpO1xyXG5cdFx0bGV0IHJlc3VsdCA9IHtcclxuXHRcdFx0Zmlyc3RQYWdlIDogMSxcclxuXHRcdFx0c3RhcnRQYWdlIDogMSxcclxuXHRcdFx0ZW5kUGFnZSA6IGFTaXplLFxyXG5cdFx0XHRsYXN0UGFnZSA6IGFQYWdlcyxcclxuXHRcdFx0Y3VycmVudCA6IGFQYWdlLFxyXG5cdFx0XHRwYWdlQ291bnQgOiBhUGFnZXNcclxuXHRcdH07XHJcblx0XHRpZiAoYVNpemUgPiBhUGFnZXMpXHJcblx0XHRcdHJlc3VsdC5lbmRQYWdlID0gYVBhZ2VzO1xyXG5cdFx0ZWxzZSBpZiAoYVBhZ2UgKyBoYWxmID4gYVBhZ2VzKSB7XHJcblx0XHRcdHJlc3VsdC5lbmRQYWdlID0gYVBhZ2VzO1xyXG5cdFx0XHRyZXN1bHQuc3RhcnRQYWdlID0gKGVuZCAtIGFTaXplKSArIDE7XHJcblx0XHR9IGVsc2UgaWYgKGFQYWdlIC0gaGFsZiA+IDEpIHtcclxuXHRcdFx0cmVzdWx0LmVuZFBhZ2UgPSAoYVBhZ2UgKyBoYWxmKTtcclxuXHRcdFx0cmVzdWx0LnN0YXJ0UGFnZSA9IChlbmQgLSBhU2l6ZSkgKyAxO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0LmNvdW50ID0gcmVzdWx0LmVuZFBhZ2UgLSByZXN1bHQuc3RhcnRQYWdlO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9LFxyXG5cclxuXHRwYWdlQXJyYXkgOiBmdW5jdGlvbihhUGFnZSwgYVNpemUsIGFBcnJheSkge1xyXG5cdFx0cmV0dXJuIGFBcnJheS5zbGljZSgoYVBhZ2UgLSAxKSAqIGFTaXplLCBhU2l6ZSk7XHJcblx0fVxyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5nVXRpbHM7XHJcbiIsImltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCIuL0V4cHJlc3Npb25SZXNvbHZlclwiO1xyXG5pbXBvcnQgVVVJRCBmcm9tIFwiLi9VVUlEXCI7XHJcblxyXG5jb25zdCBSRVNPTFZFUiA9IEV4cHJlc3Npb25SZXNvbHZlci5ERUZBVUxUO1xyXG5sZXQgVElNRU9VVElEID0gdW5kZWZpbmVkO1xyXG5cclxuY29uc3QgY2FsbEhhbmRsZXIgPSBmdW5jdGlvbihhSGFuZGxlciwgYVNjcmVlbikge1xyXG4gICAgc2V0VGltZW91dCgoZnVuY3Rpb24oYUhhbmRsZXIsIGFTY3JlZW4pIHtcclxuXHQgICAgbGV0IHJlc3VsdCA9IFJFU09MVkVSLnJlc29sdmVFeHByZXNzaW9uKGFIYW5kbGVyLmNvbmRpdGlvbiwgYVNjcmVlbiwgZmFsc2UpO1xyXG5cdCAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ2Jvb2xlYW4nKVxyXG5cdFx0ICAgIHJldHVybiBPYnNlcnZlci5oYW5kbGVyW2FIYW5kbGVyLmlkXSA9PSB1bmRlZmluZWQ7XHJcblxyXG5cdCAgICBpZiAocmVzdWx0KSB7XHJcblx0XHQgICAgYUhhbmRsZXIuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdCAgICBhSGFuZGxlci5hY3RpdmF0ZS5jYWxsKGFTY3JlZW4pO1xyXG5cdFx0ICAgIGlmICh0eXBlb2YgYUhhbmRsZXIuZGVhY3RpdmF0ZSAhPT0gJ2Z1bmN0aW9uJylcclxuXHRcdCAgICBcdE9ic2VydmVyLmhhbmRsZXJbYUhhbmRsZXIuaWRdID09IHVuZGVmaW5lZDtcclxuXHQgICAgfSBlbHNlIGlmIChhSGFuZGxlci5hY3RpdmUgJiYgdHlwZW9mIGFIYW5kbGVyLmRlYWN0aXZhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdCAgICBhSGFuZGxlci5kZWFjdGl2YXRlLmNhbGwoYVNjcmVlbik7XHJcblx0XHQgICAgYUhhbmRsZXIuYWN0aXZlID0gZmFsc2U7XHJcblx0ICAgIH1cclxuXHJcbiAgICB9KS5iaW5kKG51bGwsIGFIYW5kbGVyLCBhU2NyZWVuKSwgNjYpO1xyXG59O1xyXG5cclxuY29uc3QgT2JzZXJ2ZXIgPSB7XHJcbiAgICBoYW5kbGVyIDoge30sXHJcbiAgICBhZGRIYW5kbGVyIDogZnVuY3Rpb24oYUhhbmRsZXIpIHtcclxuXHQgICAgaWYgKHR5cGVvZiBhSGFuZGxlci5jb25kaXRpb24gIT09ICd1bmRlZmluZWQnICYmIGFIYW5kbGVyLmNvbmRpdGlvbi5sZW5ndGggIT0gMCkge1xyXG5cdFx0ICAgIGFIYW5kbGVyLmlkID0gVVVJRChcIi1cIik7XHJcblx0XHQgICAgT2JzZXJ2ZXIuaGFuZGxlclthSGFuZGxlci5pZF0gPSBhSGFuZGxlcjtcclxuXHRcdCAgICBjYWxsSGFuZGxlcihhSGFuZGxlciwgT2JzZXJ2ZXIuc2NyZWVuRGF0YSgpLCB0aGlzKTtcclxuXHRcdCAgICByZXR1cm4gYUhhbmRsZXI7XHJcblx0ICAgIH1cclxuICAgIH0sXHJcbiAgICBzY3JlZW5EYXRhIDogZnVuY3Rpb24oKSB7XHJcblx0ICAgIHJldHVybiB7XHJcblx0ICAgICAgICB3aWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG5cdCAgICAgICAgaGVpZ2h0IDogd2luZG93LmlubmVySGVpZ2h0LFxyXG5cdCAgICAgICAgcGl4ZWxSYXRpbyA6IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLFxyXG5cdCAgICAgICAgbGFuZHNjYXBlIDogKHdpbmRvdy5pbm5lckhlaWdodCA8PSB3aW5kb3cuaW5uZXJXaWR0aCksXHJcblx0ICAgICAgICBwb3J0cmFpdCA6ICh3aW5kb3cuaW5uZXJIZWlnaHQgPiB3aW5kb3cuaW5uZXJXaWR0aClcclxuXHQgICAgfTtcclxuICAgIH0sXHJcbiAgICByZXNpemluZyA6IGZ1bmN0aW9uKCkge1xyXG4gICAgXHRUSU1FT1VUSUQgPSB1bmRlZmluZWQ7XHJcblx0ICAgIGxldCBzY3JlZW4gPSBPYnNlcnZlci5zY3JlZW5EYXRhKCk7XHJcblx0ICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9ic2VydmVyLmhhbmRsZXIpLmZvckVhY2goZnVuY3Rpb24oYUhhbmRsZXJJZCkge1xyXG5cdFx0ICAgIGNhbGxIYW5kbGVyKE9ic2VydmVyLmhhbmRsZXJbYUhhbmRsZXJJZF0sIHNjcmVlbik7XHJcblx0ICAgIH0pO1xyXG4gICAgfSAgICBcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoVElNRU9VVElEKVxyXG5cdCAgICBjbGVhclRpbWVvdXQoVElNRU9VVElEKTtcclxuICAgIFRJTUVPVVRJRCA9IHNldFRpbWVvdXQoT2JzZXJ2ZXIucmVzaXppbmcsIDI1MCk7XHJcbn0sIGZhbHNlKTtcclxuXHJcbnJlYWR5KE9ic2VydmVyLnJlc2l6aW5nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9ic2VydmVyO1xyXG4iLCJpbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSBcIi4vdXRpbHMvT2JqZWN0VXRpbHNcIjtcclxuXHJcbmxldCBERUZBVUxUUyA9IHtcclxuXHRmb3JtYXRUb0h0bWwgOiB7XHJcblx0XHRcInRhYnNpemVcIiA6IDQsXHJcblx0XHRcInRhYmNoYXJcIiA6IFwiJm5ic3A7XCIsXHJcblx0XHRcIm5ld2xpbmVUYWdcIiA6IFwiPGJyLz5cIlxyXG5cdH0sXHJcblxyXG5cdHRyaW1UZXh0TGVuZ3RoIDoge1xyXG5cdFx0XCJwb3N0Zml4XCIgOiBcIi4uLlwiXHJcblx0fVxyXG59O1xyXG5sZXQgU3RyaW5nVXRpbHMgPSB7XHJcblx0REVGQVVMVFMgOiBERUZBVUxUUyxcclxuXHR0cmltVGV4dExlbmd0aCA6IGZ1bmN0aW9uKGFUZXh0LCBtYXhMZW5ndGgsIHRoZVNldHRpbmdzKSB7XHJcblx0XHRpZiAoYVRleHQgPT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBhVGV4dCAhPT0gXCJzdHJpbmdcIiB8fCBhVGV4dCA9PSBcIlwiKVxyXG5cdFx0XHRyZXR1cm4gYVRleHQ7XHJcblxyXG5cdFx0bGV0IHNldHRpbmdzID0gT2JqZWN0VXRpbHMuZXh0ZW5kKHt9LCB0aGVTZXR0aW5ncywgREVGQVVMVFMudHJpbVRleHRMZW5ndGgpO1xyXG5cclxuXHRcdGlmIChhVGV4dC5sZW5ndGggPiBtYXhMZW5ndGgpIHtcclxuXHRcdFx0bGV0IGVuZCA9IG1heExlbmd0aCAtIHNldHRpbmdzLnBvc3RmaXgubGVuZ3RoO1xyXG5cdFx0XHRpZiAoKGFUZXh0Lmxlbmd0aCAtIGVuZCkgPiAwKVxyXG5cdFx0XHRcdHJldHVybiBhVGV4dC5zdWJzdHJpbmcoMCwgZW5kKS50cmltKCkgKyBzZXR0aW5ncy5wb3N0Zml4O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFUZXh0O1xyXG5cdH0sXHJcblx0Zm9ybWF0VG9IdG1sIDogZnVuY3Rpb24oYVRleHQsIHRoZVNldHRpbmdzKSB7XHJcblx0XHRpZiAoYVRleHQgPT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBhVGV4dCAhPT0gXCJzdHJpbmdcIiB8fCBhVGV4dCA9PSBcIlwiKVxyXG5cdFx0XHRyZXR1cm4gYVRleHQ7XHJcblx0XHRsZXQgc2V0dGluZ3MgPSBPYmplY3RVdGlscy5leHRlbmQoe30sIHRoZVNldHRpbmdzICxERUZBVUxUUy5mb3JtYXRUb0h0bWwpO1xyXG5cdFx0bGV0IGxpbmVzID0gYVRleHQucmVwbGFjZSgvXFxuXFxyL2csIFwiXFxuXCIpLnJlcGxhY2UoL1xcci9nLCBcIlxcblwiKS5zcGxpdChcIlxcblwiKTtcclxuXHRcdGxldCB0ZXh0ID0gXCJcIjtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGkgIT0gMClcclxuXHRcdFx0XHR0ZXh0ID0gdGV4dCArIHNldHRpbmdzLm5ld2xpbmVUYWc7XHJcblx0XHRcdHRleHQgPSB0ZXh0XHQrIFN0cmluZ1V0aWxzLnByZXZlbnRUYWJzKGxpbmVzW2ldLCBzZXR0aW5ncy50YWJzaXplLCBzZXR0aW5ncy50YWJjaGFyKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0ZXh0O1xyXG5cdH0sXHJcblx0Z2V0VGFiU3RvcE1hcCA6IGZ1bmN0aW9uKHRhYlNpemUsIHRhYlN0cmluZykge1xyXG5cdFx0bGV0IHRhYnN0b3BNYXAgPSBbXTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IHRhYlNpemU7IGkrKykge1xyXG5cdFx0XHRpZiAoaSA9PSAwKVxyXG5cdFx0XHRcdHRhYnN0b3BNYXBbMF0gPSBcIlwiO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGFic3RvcE1hcFtpXSA9IHRhYnN0b3BNYXBbaSAtIDFdICsgdGFiU3RyaW5nO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0YWJzdG9wTWFwO1xyXG5cdH0sXHJcblx0cHJldmVudFRhYnMgOiBmdW5jdGlvbihhVGV4dCwgdGhlVGFiU3RvcHMsIHRoZVRhYlN0b3BDaGFyKSB7XHJcblx0XHRsZXQgdGFic3RvcE1hcCA9IFN0cmluZ1V0aWxzLmdldFRhYlN0b3BNYXAodGhlVGFiU3RvcHMsIHRoZVRhYlN0b3BDaGFyKTtcclxuXHRcdGxldCB0YWJTdG9wcyA9IHRoZVRhYlN0b3BzO1xyXG5cdFx0bGV0IHRleHQgPSBcIlwiO1xyXG5cdFx0bGV0IHRhYnMgPSBhVGV4dC5zcGxpdChcIlxcdFwiKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAodGFic1tpXS5sZW5ndGggIT0gMCAmJiBpICE9IDApIHtcclxuXHRcdFx0XHRsZXQgc2l6ZSA9IHRleHQubGVuZ3RoO1xyXG5cdFx0XHRcdGxldCB0YWJTaXplID0gc2l6ZSAlIHRhYlN0b3BzO1xyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgdGFic3RvcE1hcFt0aGVUYWJTdG9wcyAtIHRhYlNpemVdICsgdGFic1tpXTtcclxuXHRcdFx0fSBlbHNlIGlmICh0YWJzW2ldLmxlbmd0aCA9PSAwICYmIGkgIT0gMClcclxuXHRcdFx0XHR0ZXh0ID0gdGV4dCArIHRhYnN0b3BNYXBbdGhlVGFiU3RvcHNdO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGV4dCA9IHRleHQgKyB0YWJzW2ldO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0ZXh0O1xyXG5cdH0sXHJcblx0Zm9ybWF0IDogZnVuY3Rpb24oYVRleHQsIGFyZ3MpIHtcclxuXHRcdGxldCBvYmplY3RzID0gYXJndW1lbnRzO1xyXG5cdFx0cmV0dXJuIGFUZXh0LnJlcGxhY2UoL3stP1swLTldK30vZywgZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRsZXQgaW5kZXggPSBwYXJzZUludChpdGVtLnN1YnN0cmluZygxLCBpdGVtLmxlbmd0aCAtIDEpKSArIDE7XHJcblx0XHRcdGxldCByZXBsYWNlO1xyXG5cdFx0XHRpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgb2JqZWN0cy5sZW5ndGgpIHtcclxuXHRcdFx0XHRyZXBsYWNlID0gb2JqZWN0c1tpbmRleF07XHJcblx0XHRcdFx0aWYgKHR5cGVvZiByZXBsYWNlICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0cmVwbGFjZSA9IEpTT04uc3RyaW5naWZ5KHJlcGxhY2UpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBcIntcIjtcclxuXHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gLTIpIHtcclxuXHRcdFx0XHRyZXBsYWNlID0gXCJ9XCI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVwbGFjZSA9IFwiXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlcGxhY2U7XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFN0cmluZ1V0aWxzOyIsImxldCBVUkwgPSBjbGFzcyB7XHJcblx0Y29uc3RydWN0b3IoYVByb3RvY29sLCBhRG9tYWluLCBhUG9ydCwgYVBhdGgsIHRoZVBhcmFtZXRlciwgYU1hcmtlcikge1x0XHJcblx0XHR0aGlzLnByb3RvY29sID0gYVByb3RvY29sIHx8IFwiaHR0cFwiO1xyXG5cdFx0dGhpcy5kb21haW4gPSBhRG9tYWluO1xyXG5cdFx0dGhpcy5wb3J0ID0gYVBvcnQ7XHJcblx0XHR0aGlzLnBhdGggPSBhUGF0aDtcclxuXHRcdHRoaXMucGFyYW1ldGVycyA9IHRoZVBhcmFtZXRlcjtcclxuXHRcdHRoaXMubWFya2VyID0gYU1hcmtlclx0XHJcblx0fTtcclxuXHRcclxuXHRnZXRQYXJhbWV0ZXIoYUtleSkge1xyXG5cdFx0bGV0IHZhbHVlID0gdGhpcy5wYXJhbWV0ZXJzW2FLZXldO1xyXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWVbMF0gOiB2YWx1ZTtcclxuXHR9O1xyXG5cdFxyXG5cdGdldFBhcmFtZXRlcnMoYUtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGFyYW1ldGVyc1thS2V5XTtcclxuXHR9O1xyXG5cdFxyXG5cdGFkZFBhcmFtZXRlcihhS2V5LCBhVmFsdWUsIGFwcGVuZCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnBhcmFtZXRlcnNbYUtleV0gPT09IFwidW5kZWZpbmVkXCIpIFxyXG5cdFx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0gPSBbXTtcclxuXHRcdGlmICghYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIFxyXG5cdFx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0gPSB1bmRlZmluZWQ7XHJcblx0XHQgZWxzZSBpZiAoIWFwcGVuZCAmJiB0eXBlb2YgYVZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBhVmFsdWUubGVuZ3RoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0gPSBhVmFsdWU7XHJcblx0XHQgZWxzZSBpZiAoYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGFWYWx1ZS5sZW5ndGggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdCQubWVyZ2UodGhpcy5wYXJhbWV0ZXJzW2FLZXldLCBhVmFsdWUpOy8vIEBUT0RPICQubWVyZ2UgZW50ZmVybmVuXHJcblx0XHQgZWxzZSBpZiAoIWFwcGVuZCAmJiB0eXBlb2YgYVZhbHVlICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0gPSBbIGFWYWx1ZSBdO1xyXG5cdFx0IGVsc2UgaWYgKGFwcGVuZCAmJiB0eXBlb2YgYVZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSBcclxuXHRcdFx0dGhpcy5wYXJhbWV0ZXJzW2FLZXldLnB1c2goYVZhbHVlKTtcdFx0XHJcblx0fTtcclxuXHRcclxuXHRnZXRRdWVyeVN0cmluZygpIHtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5wYXJhbWV0ZXJzICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBcIj9cIjtcclxuXHRcdFx0bGV0IGlzRmlyc3RQYXJhbWV0ZXIgPSB0cnVlO1xyXG5cdFx0XHRmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gdGhpcy5wYXJhbWV0ZXJzKSB7XHJcblx0XHRcdFx0aWYgKCFpc0ZpcnN0UGFyYW1ldGVyKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQgKyBcIiZcIjtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aXNGaXJzdFBhcmFtZXRlciA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgcGFyYW1ldGVyVmFsdWVzID0gdGhpcy5wYXJhbWV0ZXJzW3Byb3BlcnR5TmFtZV07XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBwYXJhbWV0ZXJWYWx1ZXMubGVuZ3RoID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICsgZW5jb2RlVVJJQ29tcG9uZW50KHByb3BlcnR5TmFtZSkgKyBcIj1cIlxyXG5cdFx0XHRcdFx0XHRcdCsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtZXRlclZhbHVlcyk7XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgcGFyYW1ldGVyVmFsdWVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChqID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdCArIFwiJlwiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdCArIGVuY29kZVVSSUNvbXBvbmVudChwcm9wZXJ0eU5hbWUpICsgXCI9XCJcclxuXHRcdFx0XHRcdFx0XHRcdCsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtZXRlclZhbHVlc1tqXSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdGdldE1hcmtlclN0cmluZygpIHtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5tYXJrZXIgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHJldHVybiBcIiNcIiArIHRoaXMubWFya2VyXHRcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdH07XHJcblx0XHJcblx0YXNTdHJpbmcoKSB7XHJcblx0XHRsZXQgcmVzdWx0ID0gdGhpcy5wcm90b2NvbCArIFwiOi8vXCIgKyB0aGlzLmRvbWFpbiArIFwiOlwiICsgdGhpcy5wb3J0O1x0XHJcblx0XHRpZiAodHlwZW9mIHRoaXMucGF0aCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0cmVzdWx0ID0gcmVzdWx0ICsgdGhpcy5wYXRoO1xyXG5cdFxyXG5cdFx0cmVzdWx0ID0gcmVzdWx0ICsgdGhpcy5nZXRRdWVyeVN0cmluZygpICsgdGhpcy5nZXRNYXJrZXJTdHJpbmcoKTtcclxuXHRcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHRcclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiB0aGlzLmFzU3RyaW5nKCk7XHJcblx0fTtcdFxyXG59O1xyXG5cclxuVVJMLmZyb21TdHJpbmcgPSBmdW5jdGlvbihhVXJsU3RyaW5nKSB7XHJcblx0bGV0IHRlbXBVcmwgPSBhVXJsU3RyaW5nO1xyXG5cdGxldCBwcm90b2NvbCA9IFwiaHR0cFwiO1xyXG5cdGxldCBob3N0ID0gdW5kZWZpbmVkO1xyXG5cdGxldCBwb3J0ID0gODA7XHJcblx0bGV0IHBhdGggPSBcIi9cIjtcclxuXHRsZXQgbWFya2VyID0gXCJcIjtcclxuXHRsZXQgcGFyYW1ldGVyU3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cdGxldCBzcGxpdEluZGV4ID0gLTE7XHJcblx0bGV0IHBhcmFtZXRlciA9IHt9O1xyXG5cclxuXHRsZXQgbWF0Y2ggPSBuZXcgUmVnRXhwKFwiXFxcXD8oW14jXSopXCIpLmV4ZWModGVtcFVybCk7XHJcblx0aWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHBhcmFtZXRlclN0cmluZyA9IG1hdGNoWzFdO1xyXG5cclxuXHRtYXRjaCA9IG5ldyBSZWdFeHAoXCIjKFteXFxcXD8jXSopXCIpLmV4ZWModGVtcFVybCk7XHJcblx0aWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdG1hcmtlciA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFsxXSk7XHJcblxyXG5cdHNwbGl0SW5kZXggPSB0ZW1wVXJsLmluZGV4T2YoXCI6Ly9cIik7XHJcblx0aWYgKHNwbGl0SW5kZXggPiAwKSB7XHJcblx0XHRwcm90b2NvbCA9IHRlbXBVcmwuc3Vic3RyKDAsIHNwbGl0SW5kZXgpO1xyXG5cdFx0dGVtcFVybCA9IHRlbXBVcmwuc3Vic3RyKHNwbGl0SW5kZXggKyAzKTtcclxuXHR9XHJcblxyXG5cdG1hdGNoID0gbmV3IFJlZ0V4cChcIihbXlxcLzpcXFxcPyNdKilcIikuZXhlYyh0ZW1wVXJsKTtcclxuXHRpZiAodHlwZW9mIG1hdGNoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0aG9zdCA9IG1hdGNoWzFdO1xyXG5cclxuXHRtYXRjaCA9IG5ldyBSZWdFeHAoXCI6KFteXFxcXC9cXFxcPyNdKilcIikuZXhlYyh0ZW1wVXJsKTtcclxuXHRpZiAodHlwZW9mIG1hdGNoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0cG9ydCA9IG1hdGNoWzFdO1xyXG5cdGVsc2UgaWYgKHByb3RvY29sLnRvTG93ZXJDYXNlKCkgPT0gXCJodHRwc1wiKVxyXG5cdFx0cG9ydCA9IDQ0MztcclxuXHRlbHNlIGlmIChwcm90b2NvbC50b0xvd2VyQ2FzZSgpID09IFwiZnRwXCIpXHJcblx0XHRwb3J0ID0gMjE7XHJcblx0ZWxzZSBpZiAocHJvdG9jb2wudG9Mb3dlckNhc2UoKSA9PSBcImZ0cHNcIilcclxuXHRcdHBvcnQgPSAyMTtcclxuXHJcblx0bWF0Y2ggPSBuZXcgUmVnRXhwKFwiKC9bXlxcXFw/I10qKVwiKS5leGVjKHRlbXBVcmwpO1xyXG5cdGlmICh0eXBlb2YgbWF0Y2ggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRwYXRoID0gbWF0Y2hbMV07XHJcblxyXG5cdGxldCByZWdleCA9IG5ldyBSZWdFeHAoXCIoW14mXFxcXD8jPV0qKT0oW14mXFxcXD8jPV0qKVwiKTtcclxuXHRpZiAodHlwZW9mIHBhcmFtZXRlclN0cmluZyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBcIlwiICE9IHBhcmFtZXRlclN0cmluZykge1xyXG5cdFx0bGV0IHBhcmFtZXRlckVudHJpZXMgPSBwYXJhbWV0ZXJTdHJpbmcuc3BsaXQoXCImXCIpO1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IHBhcmFtZXRlckVudHJpZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IG1hdGNoID0gcmVnZXguZXhlYyhwYXJhbWV0ZXJFbnRyaWVzW2ldKTtcclxuXHRcdFx0bGV0IHBOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzFdKTtcclxuXHRcdFx0bGV0IHBWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFsyXSk7XHJcblx0XHRcdHBhcmFtZXRlcltwTmFtZV0gPyBwYXJhbWV0ZXJbcE5hbWVdLnB1c2gocFZhbHVlKVxyXG5cdFx0XHRcdFx0OiBwYXJhbWV0ZXJbcE5hbWVdID0gWyBwVmFsdWUgXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXcgVVJMKHByb3RvY29sLCBob3N0LCBwb3J0LCBwYXRoLCBwYXJhbWV0ZXIsIG1hcmtlcik7XHJcbn07XHJcblxyXG5VUkwuZ2V0Q3VycmVudFVybCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmIChVUkwuU1RBVElDX19DVVJSRU5UVVJMID09IHVuZGVmaW5lZCkge1xyXG5cdFx0VVJMLlNUQVRJQ19fQ1VSUkVOVFVSTCA9IFVSTC5mcm9tU3RyaW5nKGxvY2F0aW9uLmhyZWYpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFVSTC5TVEFUSUNfX0NVUlJFTlRVUkw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVUkw7XHJcbiIsImxldCBVVUlEID0gZnVuY3Rpb24oKSB7XHRcclxuXHRsZXQgc3BhY2VyID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gYXJndW1lbnRzWzBdIDogXCItXCI7XHJcblx0bGV0IHRlbXBsYXRlID0gJ3h4eHh4eHh4JyArIHNwYWNlciArICd4eHh4JyArIHNwYWNlciArICc0eHh4JyArIHNwYWNlciArICd5eHh4JyArIHNwYWNlciArICd4eHh4eHh4eHh4eHgnO1x0XHJcblx0cmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xyXG5cdFx0bGV0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwXHJcblx0XHRsZXQgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuXHRcdHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuXHR9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVVVJRDsiLCIvL21vZHVsZXNcclxuaW1wb3J0IE5hbWVzcGFjZSBmcm9tIFwiLi9OYW1lc3BhY2VcIjtcclxuaW1wb3J0IFVVSUQgZnJvbSBcIi4vVVVJRFwiO1xyXG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCIuL0V4cHJlc3Npb25SZXNvbHZlclwiO1xyXG5pbXBvcnQgQ29udmVydGVyIGZyb20gXCIuL0NvbnZlcnRlclwiO1xyXG5pbXBvcnQgUGFnaW5nVXRpbHMgZnJvbSBcIi4vUGFnaW5nVXRpbHNcIjtcclxuaW1wb3J0IFN0cmluZ1V0aWxzIGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCBVUkwgZnJvbSBcIi4vVVJMXCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIjtcclxuaW1wb3J0IEV2ZW50QmluZCBmcm9tIFwiLi9FdmVudEJpbmRcIjtcclxuaW1wb3J0IFNjcmVlbk9ic2VydmVyIGZyb20gXCIuL1NjcmVlbk9ic2VydmVyXCI7XHJcblxyXG5cclxuLy8gbG9hZCBwYWNrYWdlc1xyXG5pbXBvcnQgcmVnZXggZnJvbSBcIi4vcmVnZXhcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCBqcXVlcnkgZnJvbSBcIi4vanF1ZXJ5XCI7XHJcblxyXG5cclxuXHJcbi8vIGV4dGVybmFsaXplIGxpYnMgZm9yIGJyb3dzZXJcclxuTmFtZXNwYWNlKFwiZGUudGl0dXMuY29yZVwiLCBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdFx0Ly9wYWNrYWdlc1xyXG5cdFx0dXRpbHMgOiB1dGlscyxcclxuXHRcdHJlZ2V4IDogcmVnZXgsXHJcblx0XHRqcXVlcnkgOiBqcXVlcnksXHJcblx0XHRcclxuXHRcdC8vbW9kdWxlc1xyXG5cdFx0TmFtZXNwYWNlIDogTmFtZXNwYWNlLFxyXG5cdFx0VVVJRCA6IFVVSUQsXHJcblx0XHRTcGVjaWFsRnVuY3Rpb25zIDogU3BlY2lhbEZ1bmN0aW9ucyxcclxuXHRcdEV4cHJlc3Npb25SZXNvbHZlciA6IEV4cHJlc3Npb25SZXNvbHZlcixcclxuXHRcdENvbnZlcnRlciA6IENvbnZlcnRlcixcclxuXHRcdFN0cmluZ1V0aWxzIDogU3RyaW5nVXRpbHMsXHJcblx0XHRVUkw6IFVSTCxcclxuXHRcdFBhZ2U6IFBhZ2UsXHJcblx0XHRFdmVudEJpbmQ6IEV2ZW50QmluZCxcclxuXHRcdFNjcmVlbk9ic2VydmVyIDogU2NyZWVuT2JzZXJ2ZXJcclxuXHR9O1xyXG59KTsiLCJjb25zdCBidWlsZEZ1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uKGFOYW1lKSB7XHJcblx0cmV0dXJuIGFOYW1lLnJlcGxhY2UoL1xcLi9nLCBcIl9cIik7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUluc3RhbmNlID0gZnVuY3Rpb24oYU5hbWUsIGFGdW5jdGlvbk5hbWUsIGFDb25zdHJ1Y3RvciwgYURhdGEpIHtcdFxyXG5cdHJldHVybiBmdW5jdGlvbigpe1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGVsc2UgaWYgKHRoaXMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHR0aGlzLmVhY2goKGZ1bmN0aW9uKGFFbGVtZW50KSB7XHJcblx0XHRcdFx0dGhpcy5wdXNoKGFFbGVtZW50W2FGdW5jdGlvbk5hbWVdKGFEYXRhKSk7XHJcblx0XHRcdH0pLmJpbmQocmVzdWx0KSk7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgY29tcG9uZW50ID0gdGhpcy5kYXRhKGFOYW1lKTtcclxuXHRcdFx0aWYgKCFjb21wb25lbnQpIHtcclxuXHRcdFx0XHRjb21wb25lbnQgPSBuZXcgYUNvbnN0cnVjdG9yKHRoaXMsIGFEYXRhKTtcclxuXHRcdFx0XHR0aGlzLmRhdGEoYU5hbWUsIGNvbXBvbmVudCk7XHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0cmV0dXJuIGNvbXBvbmVudDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxufTtcclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IGZ1bmN0aW9uKGFOYW1lLCBhQ29uc3RydWN0b3IpIHtcclxuXHRpZih0eXBlb2YgJCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRsZXQgZnVuY3Rpb25OYW1lID0gYnVpbGRGdW5jdGlvbk5hbWUoYU5hbWUpO1x0XHRcclxuXHRcdCQuZm5bZnVuY3Rpb25OYW1lXSA9IGNyZWF0ZUluc3RhbmNlKGFOYW1lLCBmdW5jdGlvbk5hbWUsIGFDb25zdHJ1Y3Rvcik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgRXZlbnRCaW5kIGZyb20gXCIuLi9FdmVudEJpbmRcIjtcclxuXHJcbkNvbXBvbmVudChcImRlLnRpdHVzLmNvcmUuRXZlbnRCaW5kXCIsIGZ1bmN0aW9uKGFuRWxlbWVudCwgYUNvbnRleHQpIHtcdFxyXG5cdHJldHVybiBFdmVudEJpbmQoYW5FbGVtZW50WzBdLCBhQ29udGV4dCk7XHRcclxufSk7XHJcbiIsImlmICh0eXBlb2YgJCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHQkLmZuLlNlbGVjdG9yID0gZnVuY3Rpb24oKSB7XHRcdFxyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gW107XHJcblx0XHRcdHRoaXMuZWFjaChmdW5jdGlvbihhRWxlbWVudCkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKHRoaXMuc2VsZWN0b3IoKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1swXS5zZWxlY3RvcigpO1xyXG5cdH07IiwiaWYgKHR5cGVvZiAkICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdCQuZm4udGFnTmFtZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gW107XHJcblx0XHRcdHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaCh0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSBlbHNlIGlmKHRoaXMubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiAkKHRoaXMpWzBdLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHR9O1xyXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgRXZlbnRCaW5kIGZyb20gXCIuL0V2ZW50QmluZFwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IFRhZ25hbWUgZnJvbSBcIi4vVGFnbmFtZVwiO1xyXG5cclxuY29uc3QganF1ZXJ5ID0ge1xyXG5cdENvbXBvbmVudCA6IENvbXBvbmVudCxcclxuXHRDb21wb25lbnRzIDoge1xyXG5cdFx0YXNDb21wb25lbnQgOiBDb21wb25lbnRcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBqcXVlcnk7IiwibGV0IE1hdGNoZXIgPSBmdW5jdGlvbiAoYVJlZ0V4cCwgYVRleHQpIHtcclxuXHRcclxuXHR0aGlzLmludGVybmFsUmVnZXggPSBhUmVnRXhwOyBcclxuXHR0aGlzLnByb2Nlc3NpbmdUZXh0ID0gYVRleHQ7XHJcblx0dGhpcy5jdXJyZW50TWF0Y2ggPSB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5NYXRjaGVyLnByb3RvdHlwZS5pc01hdGNoaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuaW50ZXJuYWxSZWdleC50ZXN0KHRoaXMucHJvY2Vzc2luZ1RleHQpO1xyXG59O1xyXG5cclxuTWF0Y2hlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY3VycmVudE1hdGNoID0gdGhpcy5pbnRlcm5hbFJlZ2V4LmV4ZWModGhpcy5wcm9jZXNzaW5nVGV4dCk7XHJcblx0aWYgKHRoaXMuY3VycmVudE1hdGNoIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdHRoaXMucHJvY2Vzc2luZ1RleHQgPSB0aGlzLnByb2Nlc3NpbmdUZXh0LnJlcGxhY2UodGhpcy5jdXJyZW50TWF0Y2hbMF0sXHRcIlwiKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5NYXRjaGVyLnByb3RvdHlwZS5nZXRNYXRjaCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0aGlzLmN1cnJlbnRNYXRjaCBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudE1hdGNoWzBdO1xyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5NYXRjaGVyLnByb3RvdHlwZS5nZXRHcm91cCA9IGZ1bmN0aW9uKGFHcm91cElkKSB7XHJcblx0aWYgKHRoaXMuY3VycmVudE1hdGNoIGluc3RhbmNlb2YgQXJyYXkpXHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50TWF0Y2hbYUdyb3VwSWRdO1xyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5NYXRjaGVyLnByb3RvdHlwZS5yZXBsYWNlQWxsID0gZnVuY3Rpb24oYVJlcGxhY2VWYWx1ZSwgYVRleHQpIHtcclxuXHRpZiAodGhpcy5jdXJyZW50TWF0Y2ggaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdHJldHVybiBhVGV4dC5yZXBsYWNlKHRoaXMuY3VycmVudE1hdGNoWzBdLCBhUmVwbGFjZVZhbHVlKTtcclxuXHRyZXR1cm4gYVRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRjaGVyOyIsImltcG9ydCBNYXRjaGVyIGZyb20gXCIuL01hdGNoZXJcIjtcclxuXHJcbmNvbnN0IFJlZ2V4ID0gZnVuY3Rpb24oYVJlZ2V4LCBhT3B0aW9ucykge1xyXG5cdHRoaXMuaW50ZXJuYWxSZWdleCA9IG5ldyBSZWdFeHAoYVJlZ2V4LCBhT3B0aW9ucyk7XHJcbn07XHRcclxuUmVnZXgucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oYVRleHQpIHtcclxuXHRyZXR1cm4gbmV3IE1hdGNoZXIodGhpcy5pbnRlcm5hbFJlZ2V4LCBhVGV4dCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2V4OyIsImltcG9ydCBSZWdleCBmcm9tIFwiLi9SZWdleFwiO1xyXG5pbXBvcnQgTWF0Y2hlciBmcm9tIFwiLi9NYXRjaGVyXCI7XHJcblxyXG5jb25zdCByZWdleCA9IHtcclxuXHRSZWdleCA6IFJlZ2V4LFxyXG5cdE1hdGNoZXIgOiBNYXRjaGVyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdleDsiLCJjb25zdCBFdmFsVXRpbHMgPSB7XHJcblx0ZXZhbCA6IGZ1bmN0aW9uKGFTdGF0ZW1lbnQsIGFDb250ZXh0LCBhRGVmYXVsdCl7XHRcclxuXHRcdGlmICh0eXBlb2YgYVN0YXRlbWVudCAhPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cmV0dXJuIGFTdGF0ZW1lbnQ7XHJcblx0XHRcclxuXHRcdGxldCBzdGF0ZW1lbnQgPSBhU3RhdGVtZW50LnRyaW0oKTsgXHJcblx0XHRpZihzdGF0ZW1lbnQubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gYURlZmF1bHQ7XHJcblx0XHRcclxuXHRcdHRyeSB7XHRcdFxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gKG5ldyBGdW5jdGlvbihcImNcIixcIndpdGgoYyl7cmV0dXJuIFwiICsgYVN0YXRlbWVudCArIFwiO31cIikpLmNhbGwoYUNvbnRleHQgfHwge30pO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0IHx8IGFEZWZhdWx0XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHRocm93IGU7XHJcblx0XHR9XHRcclxuXHR9LFxyXG5cdHByb21pc2VFdmFsIDogZnVuY3Rpb24oYVN0YXRlbWVudCwgYUNvbnRleHQsIGFEZWZhdWx0LCB0aW1lYVRpbWVvdXRvdXQpe1xyXG5cdFx0bGV0IGFjdGlvbiA9IGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcblx0XHRcdGxldCByZXN1bHQgPSBFdmFsVXRpbHMuZXZhbChhU3RhdGVtZW50LCBhQ29udGV4dCwgYURlZmF1bHQpO1xyXG5cdFx0XHRpZihyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcilcclxuXHRcdFx0XHRyZWplY3QocmVzdWx0KTtcclxuXHRcdFx0XHJcblx0XHRcdHJlc29sdmUocmVzdWx0KTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdGlmKGFUaW1lb3V0ID4gMClcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKCl7c2V0VGltZW91dChhY3Rpb24sYVRpbWVvdXQpO30pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoYWN0aW9uKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmFsVXRpbHM7IiwibGV0IGV4dGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0cmV0dXJuO1x0XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0cmV0dXJuIGFyZ3VtZW50c1swXTtcclxuXHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHRcclxuXHRsZXQgZGVlcCA9IHR5cGVvZiBhcmdzWzBdID09PSBcImJvb2xlYW5cIiA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xyXG5cdGxldCB0YXJnZXQgPSBhcmdzLnNoaWZ0KCk7XHJcblx0d2hpbGUoYXJncy5sZW5ndGggIT0gMCl7XHJcblx0XHRsZXQgc291cmNlID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0aWYodHlwZW9mIHNvdXJjZSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaCgoZnVuY3Rpb24oYVNvdXJjZSwgYVRhcmdldCwgaXNEZWVwLCBhTmFtZSl7XHJcblx0XHRcdFx0bGV0IHNvdXJjZSA9IGFTb3VyY2VbYU5hbWVdO1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBzb3VyY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlICE9IG51bGwpe1xyXG5cdFx0XHRcdFx0bGV0IHRhcmdldCA9IGFUYXJnZXRbYU5hbWVdO1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIHRhcmdldCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0YXJnZXQgPT0gbnVsbClcclxuXHRcdFx0XHRcdFx0YVRhcmdldFthTmFtZV0gPSBzb3VyY2U7XHJcblx0XHRcdFx0XHRlbHNlIGlmKGRlZXAgJiYgQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIEFycmF5LmlzQXJyYXkoc291cmNlKSlcclxuXHRcdFx0XHRcdFx0dmFsdWUuY29uY2F0KGFTb3VyY2VbYU5hbWVdKTtcclxuXHRcdFx0XHRcdGVsc2UgaWYoZGVlcCAmJiB0eXBlb2YgdGFyZ2V0ICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB0YXJnZXQgPT09IHR5cGVvZiBzb3VyY2UpXHJcblx0XHRcdFx0XHRcdGV4dGVuZCh0cnVlLCB0YXJnZXQsIHNvdXJjZSk7XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLmJpbmQobnVsbCwgc291cmNlLCB0YXJnZXQsIGRlZXApKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcbmNvbnN0IE9iamVjdFV0aWxzID0ge1xyXG5cdFx0ZXh0ZW5kIDogZXh0ZW5kXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPYmplY3RVdGlscztcclxuXHJcblxyXG4iLCJpbXBvcnQgRXZhbFV0aWxzIGZyb20gXCIuL0V2YWxVdGlsc1wiO1xyXG5pbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSBcIi4vT2JqZWN0VXRpbHNcIjtcclxuXHJcblxyXG5jb25zdCB1dGlscyA9IHtcclxuXHRcdEV2YWxVdGlscyA6IEV2YWxVdGlscyxcclxuXHRcdE9iamVjdFV0aWxzOiBPYmplY3RVdGlsc1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==