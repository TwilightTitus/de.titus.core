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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dom-api-extension/src/Global.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-api-extension/src/Global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(Global) {
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

		let body = parser.parseFromString(arguments[0].trim(),
				arguments[1] || "text/html").find("body");
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
/* harmony import */ var _polyfill_CustomEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfill/CustomEvent */ "./node_modules/dom-api-extension/src/polyfill/CustomEvent.js");
/* harmony import */ var _polyfill_CustomEvent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_CustomEvent__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfill/Array */ "./node_modules/dom-api-extension/src/polyfill/Array.js");
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_Array__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfill/Array */ "./node_modules/dom-api-extension/src/polyfill/Array.js");
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_Array__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfill/Array */ "./node_modules/dom-api-extension/src/polyfill/Array.js");
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_Array__WEBPACK_IMPORTED_MODULE_0__);

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

/***/ "./node_modules/dom-api-extension/src/polyfill/Array.js":
/*!**************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/polyfill/Array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Array.from) {
	Array.from = function() {
		let result = [];
		if (arguments.length > 0) {
			for (let i = 0; i < arguments.length; i++) {
				let arg = arguments[i];
				if (typeof arg.length === "number") {
					for (let j = 0; j < arg.length; j++)
						if (typeof arg[j] !== "undefined")
							result.push(arg[j]);
				} else {
					Object.getOwnPropertyNames(arguments[0]).forEach(
							(function(aResult, aName) {
								try {
									parseInt(aName);
									if (typeof this[aName] !== "undefined")
										result.push(this[aName]);
								} catch (e) {
								}
							}).bind(arguments[0], result));
				}
			}
		}
		return result;
	};
};

/***/ }),

/***/ "./node_modules/dom-api-extension/src/polyfill/CustomEvent.js":
/*!********************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/polyfill/CustomEvent.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof window.CustomEvent !== "function") {
	function CustomEvent(event, params) {
		params = params || {
		    bubbles : false,
		    cancelable : false,
		    detail : null
		};
		let evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}
	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
}


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
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfill/Array */ "./node_modules/dom-api-extension/src/polyfill/Array.js");
/* harmony import */ var _polyfill_Array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_Array__WEBPACK_IMPORTED_MODULE_0__);


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
let Converter = {
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
/* harmony import */ var _node_modules_dom_api_extension_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/dom-api-extension/src/index */ "./node_modules/dom-api-extension/src/index.js");



let EventBind = function(anElement, aContext) {
	var result = {
	    preventDefault : (typeof anElement.attr("event-prevent-default") !== "undefined"),
	    stopPropagation : (typeof anElement.attr("event-stop-propagation") !== "undefined")
	};
	result.eventType = anElement.attr("event-type");
	if (typeof result.eventType === 'undefined')
		anElement.data(de.titus.core.EventBind.STATE.FINISHED, de.titus.core.EventBind.FINISHEDSTATE.FAIL);
	else {
		result.action = anElement.attr("event-action");
		result.delegation = anElement.attr("event-delegation");

		if (typeof (result.action || result.delegation) === 'undefined') {
			anElement.data(de.titus.core.EventBind.STATE.FINISHED, de.titus.core.EventBind.FINISHEDSTATE.FAIL);
			return;
		}

		result.eventData = anElement.attr("event-data");
		if (typeof result.eventData !== 'undefined' && result.eventData.length > 0)
			result.eventData = de.titus.core.EventBind.EXPRESSIONRESOLVER.resolveExpression(eventData, aContext, {});
		else if (typeof aContext !== 'undefined')
			result.eventData = $().extend({}, aContext);

		if (typeof result.eventData !== 'undefined')
			anElement.on(result.eventType, null, result.eventData, de.titus.core.EventBind.$$__execute__$$);
		else
			anElement.on(result.eventType, de.titus.core.EventBind.$$__execute__$$);
		anElement.data(de.titus.core.EventBind.STATE.FINISHED, de.titus.core.EventBind.FINISHEDSTATE.READY);
		return result;
	}
};

EventBind.EXPRESSIONRESOLVER = new de.titus.core.ExpressionResolver();
EventBind.STATE = {
	FINISHED : "$$EventBind.FINISHED$$"
};
EventBind.FINISHEDSTATE = {
    FAIL : "fail",
    READY : "ready"
};

EventBind.$$__execute__$$ = function(anEvent) {
	var element = $(this);
	var data = element.data("de.titus.core.EventBind");
	if (data.preventDefault)
		anEvent.preventDefault();
	if (data.stopPropagation)
		anEvent.stopPropagation();

	if (typeof data.action !== 'undefined') {
		var action = data.action;
		action = EventBind.EXPRESSIONRESOLVER.resolveExpression(data.action, anEvent.data, undefined);
		if (typeof action === "function") {
			var args = Array.from(arguments);
			if (args != undefined && args.length >= 1 && anEvent.data != undefined)
				args.splice(1, 0, anEvent.data);
			action.apply(action, args);
		}
	}

	if (typeof data.delegation !== 'undefined')
		element.trigger(data.delegation, typeof data.eventData !== 'undefined' ? [ data.eventData ] : undefined);

	return !anEvent.isDefaultPrevented();
};

$(document).ready(function() {
	var elements = $("[event-autorun]");
	if (typeof elements !== 'undefined' && elements.length > 0) {
		elements.de_titus_core_EventBind();
		elements.find("[event-type]").de_titus_core_EventBind();

		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				mutation.addedNodes.forEach(function(node) {
					if (node.nodetype != Node.TEXT_NODE) {
						$(node).de_titus_core_EventBind();
						$(node).find("[event-type]").de_titus_core_EventBind();
					}
				});
			});
		});

		// configuration of the observer:
		var config = {
		    attributes : true,
		    childList : true,
		    subtree : true,
		    characterData : false
		};

		// pass in the target node, as well as the observer options
		observer.observe(document.querySelector("[event-autorun]"), config);
	}
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



let ExpressionResolver = class {	
	constructor(varRegex) {
		this.regex = new _regex_Regex__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](varRegex	|| ExpressionResolver.TEXT_EXPRESSION_REGEX);
	};
		
	resolveText(aText, aDataContext, aDefaultValue) {
		let text = aText;
		let matcher = this.regex.parse(text);
		while (matcher.next()) {
			let expression = matcher.getMatch();
			let expressionResult = this.internalResolveExpression(matcher.getGroup(1), aDataContext, aDefaultValue);
			if (expressionResult != undefined)
				text = matcher.replaceAll(expressionResult, text);
		}
		return text;
	};
	
	resolveExpression(aExpression,
			aDataContext, aDefaultValue) {
		let matcher = this.regex.parse(aExpression);
		if (matcher.next())
			return this.internalResolveExpression(matcher.getGroup(1), aDataContext, aDefaultValue);
	
		return this.internalResolveExpression(aExpression, aDataContext, aDefaultValue);
	};
	
	internalResolveExpression(aExpression,
			aDataContext, aDefaultValue) {
		try {
			return de.titus.core.SpecialFunctions.doEvalWithContext(aExpression, aDataContext, aDefaultValue);
		} catch (e) {
			return aDefaultValue;
		}
	};
};

ExpressionResolver.TEXT_EXPRESSION_REGEX = "\\$\\{([^\\{\\}]+)\\}";
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
let Page = class {
	constructor() {
		this.baseTagValue = undefined;
		let baseTag = document.querySelector("base[href]");
		if (typeof baseTag !== "undefined")
			this.baseTagValue = baseTag.attributes["href"].value;
		this.files = {};
		this.data = {};
	};
	
	addJsFile(aUrl, aFunction, forceFunction) {
		if (Array.isArray(aUrl))
			return this.addJsFiles(aUrl, aFunction, forceFunction);
		
		if (typeof this.files[aUrl] === "undefined") {
			this.files[aUrl] = true;
			let element = document.createElement("script");
			element.setAttribute("type", "text/javascript");
			element.setAttribute("src", aUrl);
			document.body.append(element);
	
			if (aFunction != undefined)
				aFunction();
		} else if (forceFunction && aFunction != undefined) {
			aFunction();
		}
	};
	
	addJsFiles(aUrls, aFunction, forceFunction) {
		if (Array.isArray(aUrls)) {
			while(aUrls.length != 0){
				this.addJsFile(aUrls.shift(), (function() {
					this.addJsFiles(aUrls, aFunction, forceFunction)
				}).bind(this), true);
			}
		} else
			this.addJsFile(aUrls, aFunction, forceFunction);
	};
	
	addCssFile(aUrl) {
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
	
	addCssFiles(aUrls) {
		if (Array.isArray(aUrls)) {
			for (i = 0; i < aUrls.length; i++) {
				this.addCssFile(aUrls[i]);
			}
		}
	};
	
	getUrl() {
		return de.titus.core.URL.getCurrentUrl();
	};
	
	buildUrl(aUrl) {
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
	
	detectBrowser() {
		if (Page.BROWSER)
			return Page.BROWSER;
	
		Page.BROWSER = {};
		if (document.documentMode)
			Page.BROWSER.ie = document.documentMode;
		else
			Page.BROWSER.other = true;
	
		return Page.BROWSER;
	};
	
	setData(aKey, aValue) {
		this.data[aKey] = aValue;
	};
	
	getData(aKey) {
		return this.data[aKey];
	};
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

/***/ "./src/SpecialFunctions.js":
/*!*********************************!*\
  !*** ./src/SpecialFunctions.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DEVMODE = location.search ? (/.*devmode=true.*/ig).test(location.search) : false;
const STATEMENTS = {};
let SpecialFunctions = {
	doEval : function(aStatement, aContext, aCallback) {
		if (aCallback)
			SpecialFunctions.doEvalWithContext(aStatement, (aContext || {}),
					undefined, aCallback);
		else {
			if (typeof aStatement !== "string")
				return aStatement;

			var statement = aStatement.trim();
			if (statement.length == 0)
				return undefined;

			try {
				var evalFunction = new Function("aContext",
						"with(this){return " + aStatement + ";}");
				return evalFunction.call(aContext);
			} catch (e) {
				if (DEVMODE) {
					console.log("----------------------\n", "doEval()\n",
							"statement: \"", aStatement, "\"\n", "context: \"",
							aContext, "\"\n", "callback: \"", aCallback,
							"\"\n", "error: ", e, "\n",
							"----------------------");
				}
				throw e;
			}
		}
	},
	doEvalWithContext : function(aStatement, aContext, aDefault, aCallback) {
		if (typeof aCallback === "function") {
			window.setTimeout(function() {
				var result = SpecialFunctions.doEvalWithContext(aStatement,
						aContext, aDefault, undefined);
				aCallback(result, aContext);
			}, 1);

		} else
			try {
				var result = SpecialFunctions.doEval(aStatement, aContext);
				if (typeof result === "undefined")
					return aDefault;
				return result;
			} catch (e) {
				return aDefault;
			}
	}
};

/* harmony default export */ __webpack_exports__["a"] = (SpecialFunctions);

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

		let settings = Object(_utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "a"])({}, theSettings, DEFAULTS.trimTextLength);

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
		let settings = Object(_utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "a"])({}, theSettings ,DEFAULTS.formatToHtml);
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
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill */ "./src/polyfill/index.js");
/* harmony import */ var _Namespace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Namespace */ "./src/Namespace.js");
/* harmony import */ var _UUID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UUID */ "./src/UUID.js");
/* harmony import */ var _SpecialFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpecialFunctions */ "./src/SpecialFunctions.js");
/* harmony import */ var _ExpressionResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExpressionResolver */ "./src/ExpressionResolver.js");
/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Converter */ "./src/Converter.js");
/* harmony import */ var _PagingUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PagingUtils */ "./src/PagingUtils.js");
/* harmony import */ var _StringUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StringUtils */ "./src/StringUtils.js");
/* harmony import */ var _URL__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./URL */ "./src/URL.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Page */ "./src/Page.js");
/* harmony import */ var _EventBind__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EventBind */ "./src/EventBind.js");
/* harmony import */ var _regex_Regex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regex/Regex */ "./src/regex/Regex.js");
/* harmony import */ var _regex_Matcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regex/Matcher */ "./src/regex/Matcher.js");
// Load all polyfills


// Load top level modules











// load regex modules





// create namespace
Object(_Namespace__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])("de.titus.core", function() {
	return {
		Namespace : _Namespace__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
		UUID : _UUID__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
		SpecialFunctions : _SpecialFunctions__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
		ExpressionResolver : _ExpressionResolver__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
		Converter : _Converter__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
		StringUtils : _StringUtils__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
		URL: _URL__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
		Page: _Page__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
		EventBind: _EventBind__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
		regex : {
			Regex : _regex_Regex__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
			Matcher : _regex_Matcher__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]
		}			
	};
});

/***/ }),

/***/ "./src/polyfill/Array.js":
/*!*******************************!*\
  !*** ./src/polyfill/Array.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Array.from) {
	Array.from = function() {
		let result = [];
		if (arguments.length > 0) {
			for (let i = 0; i < arguments.length; i++) {
				let arg = arguments[i];
				if (typeof arg.length === "number") {
					for (let j = 0; j < arg.length; j++)
						if (typeof arg[j] !== "undefined")
							result.push(arg[j]);
				} else {
					Object.getOwnPropertyNames(arguments[0]).forEach(
							(function(aResult, aName) {
								try {
									parseInt(aName);
									if (typeof this[aName] !== "undefined")
										result.push(this[aName]);
								} catch (e) {
								}
							}).bind(arguments[0], result));
				}
			}
		}
		return result;
	};
};

/***/ }),

/***/ "./src/polyfill/CustomEvent.js":
/*!*************************************!*\
  !*** ./src/polyfill/CustomEvent.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof window.CustomEvent !== "function") {
	function CustomEvent(event, params) {
		params = params || {
		    bubbles : false,
		    cancelable : false,
		    detail : null
		};
		let evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}
	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
}


/***/ }),

/***/ "./src/polyfill/String.js":
/*!********************************!*\
  !*** ./src/polyfill/String.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof String.prototype.hashCode !== 'function') {
	String.prototype.hashCode = function() {
		let hash = 0, i, chr;
		if (this.length === 0)
			return hash;
		for (i = 0; i < this.length; i++) {
			chr = this.charCodeAt(i);
			hash = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	};
};


/***/ }),

/***/ "./src/polyfill/index.js":
/*!*******************************!*\
  !*** ./src/polyfill/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./src/polyfill/Array.js");
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _String__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./String */ "./src/polyfill/String.js");
/* harmony import */ var _String__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_String__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomEvent */ "./src/polyfill/CustomEvent.js");
/* harmony import */ var _CustomEvent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CustomEvent__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/regex/Matcher.js":
/*!******************************!*\
  !*** ./src/regex/Matcher.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let Matcher = class{
	constructor(aRegExp,	aText) {
	this.internalRegex = aRegExp;
	this.processingText = aText;
	this.currentMatch = undefined;
};

isMatching() {
	return this.internalRegex.test(this.processingText);
}

next() {
	this.currentMatch = this.internalRegex.exec(this.processingText);
	if (this.currentMatch != undefined) {
		this.processingText = this.processingText.replace(this.currentMatch[0],
				"");
		return true;
	}
	return false;
}

getMatch() {
	if (this.currentMatch != undefined)
		return this.currentMatch[0];
	return undefined;
}

getGroup(aGroupId) {
	if (this.currentMatch != undefined)
		return this.currentMatch[aGroupId];
	return undefined;
}

replaceAll (aReplaceValue, aText) {
	if (this.currentMatch != undefined)
		return aText.replace(this.currentMatch[0], aReplaceValue);
	return aText;
}
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



let Regex = class {
		constructor(aRegex, aOptions) {
		this.internalRegex = new RegExp(aRegex, aOptions);
	}
	
	parse(aText) {
		return new _Matcher__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](this.internalRegex, aText);
	};
};

/* harmony default export */ __webpack_exports__["a"] = (Regex);

/***/ }),

/***/ "./src/utils/ObjectUtils.js":
/*!**********************************!*\
  !*** ./src/utils/ObjectUtils.js ***!
  \**********************************/
/*! exports provided: extend */
/*! exports used: extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extend; });
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfill */ "./src/polyfill/index.js");


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







/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9KUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vSFRNTEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vSFRNTElucHV0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9IVE1MU2VsZWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9Ob2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL05vZGVMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvQmFzaWNRdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL0V2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9Ob2RlUXVlcnlTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL3BvbHlmaWxsL0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvcG9seWZpbGwvQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvdXRpbHMvRXh0ZW5kUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRCaW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbWVzcGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnaW5nVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NwZWNpYWxGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0cmluZ1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9VUkwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VVSUQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbC9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwvQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxsL1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZ2V4L01hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZ2V4L1JlZ2V4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9PYmplY3RVdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9E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LjAuMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiKGZ1bmN0aW9uKEdsb2JhbCkge1xyXG5cdGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuXHJcblx0R2xvYmFsLmZpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5maW5kLmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdEdsb2JhbC5yZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LnJlYWR5LmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdEdsb2JhbC5jcmVhdGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0eXBlb2YgYXJndW1lbnRzWzBdICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyFcIik7XHJcblxyXG5cdFx0bGV0IGJvZHkgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGFyZ3VtZW50c1swXS50cmltKCksXHJcblx0XHRcdFx0YXJndW1lbnRzWzFdIHx8IFwidGV4dC9odG1sXCIpLmZpbmQoXCJib2R5XCIpO1xyXG5cdFx0bGV0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHRsZXQgbm9kZXMgPSBib2R5LmNoaWxkTm9kZXM7XHJcblx0XHR3aGlsZSAobm9kZXMubGVuZ3RoICE9IDApXHJcblx0XHRcdGZyYWcuYXBwZW5kKG5vZGVzWzBdKTtcclxuXHJcblx0XHRyZXR1cm4gZnJhZy5jaGlsZE5vZGVzO1xyXG5cdH07XHJcbn0pKHdpbmRvdyB8fCBnbG9iYWwpOyIsImltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxFbGVtZW50XCI7XHJcbihmdW5jdGlvbihHbG9iYWwpIHtcclxuXHQvKipcclxuXHQgKiBKUXVlcnkgcHJldmVudCBqcXVlcnlcclxuXHQgKi9cclxuXHRjb25zdCAkID0gR2xvYmFsLiQgPSBHbG9iYWwuSlF1ZXJ5ID0gR2xvYmFsLmpRdWVyeSA9IEdsb2JhbC4kIHx8IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIGRvY3VtZW50O1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7XHRcdFx0XHJcblx0XHRcdGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0cmV0dXJuIEdsb2JhbC5yZWFkeS5hcHBseShHbG9iYWwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRpZiAoLzxbXjxdKz4vZy50ZXN0KGFyZ3VtZW50c1swXSkpXHJcblx0XHRcdFx0XHRyZXR1cm4gR2xvYmFsLmNyZWF0ZS5hcHBseShHbG9iYWwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmV0dXJuIEdsb2JhbC5maW5kLmFwcGx5KEdsb2JhbCwgYXJndW1lbnRzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJldHVybiBhcmd1bWVudHNbMF07XHJcblx0XHR9XHJcblx0fTtcclxufSkod2luZG93IHx8IGdsb2JhbCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBCYXNpY1F1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0Jhc2ljUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnRcIjtcclxuaW1wb3J0IFJlYWR5RXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudC5wcm90b3R5cGUsIEJhc2ljUXVlcnlTdXBwb3J0LCBFdmVudFN1cHBvcnQsIFJlYWR5RXZlbnRTdXBwb3J0KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcblx0ZG9jdW1lbnQudHJpZ2dlcihcInJlYWR5XCIpO1xyXG59KTtcclxuXHJcblxyXG4iLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEJhc2ljUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQmFzaWNRdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IE5vZGVRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9Ob2RlUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBIdG1sQ2xhc3NTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvSHRtbENsYXNzU3VwcG9ydFwiO1xyXG5pbXBvcnQgRXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0XCI7XHJcbmltcG9ydCBTaG93SGlkZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTEVsZW1lbnQucHJvdG90eXBlLEJhc2ljUXVlcnlTdXBwb3J0LE5vZGVRdWVyeVN1cHBvcnQsSHRtbENsYXNzU3VwcG9ydCxFdmVudFN1cHBvcnQsU2hvd0hpZGVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxTZWxlY3RFbGVtZW50LnByb3RvdHlwZSxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGF0YVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlLnByb3RvdHlwZSxEYXRhU3VwcG9ydCxNYW5pcHVsYXRpb25TdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IERlbGVnYXRlckJ1aWxkZXIgZnJvbSBcIi4uL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXJcIjtcclxuaW1wb3J0IExpc3RTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTGlzdFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlTGlzdC5wcm90b3R5cGUsIExpc3RTdXBwb3J0KTtcclxuXHJcbkRlbGVnYXRlckJ1aWxkZXIoZnVuY3Rpb24oYUZ1bmN0aW9uTmFtZSwgdGhlQXJndW1lbnRzKXtcclxuXHRsZXQgbm9kZXMgPSB0aGlzLnZhbHVlcygpO1xyXG5cdGxldCBub2RlID0gbm9kZXMubmV4dCgpO1xyXG5cdGxldCByZXN1bHRzID0gW107XHJcblx0d2hpbGUobm9kZSAmJiBub2RlLnZhbHVlKXtcclxuXHRcdG5vZGUgPSBub2RlLnZhbHVlO1xyXG5cdFx0aWYodHlwZW9mIG5vZGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGxldCByZXN1bHQgPSBub2RlW2FGdW5jdGlvbk5hbWVdLmFwcGx5KG5vZGUsIHRoZUFyZ3VtZW50cyk7XHJcblx0XHRcdGlmKHR5cGVvZiByZXN1bHQgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0ICE9IG51bGwpe1xyXG5cdFx0XHRcdGlmKHJlc3VsdCBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0XHRcdFx0cmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KHJlc3VsdCk7XHJcblx0XHRcdFx0ZWxzZSBpZihyZXN1bHQgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdFx0XHRcdHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChBcnJheS5mcm9tKHJlc3VsdCkpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpXHJcblx0XHRcdH1cdFx0XHJcblx0XHR9XHJcblx0XHRub2RlID0gbm9kZXMubmV4dCgpO1x0XHRcclxuXHR9XHJcblx0XHJcblx0aWYocmVzdWx0cy5sZW5ndGggPT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHJlc3VsdHMpO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiByZXN1bHRzO1x0XHJcbn0sTm9kZUxpc3QucHJvdG90eXBlLCBOb2RlLnByb3RvdHlwZSwgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUpO1xyXG5cclxuXHJcbk5vZGVMaXN0LmZyb20gPSBmdW5jdGlvbigpe1xyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSBcInVuZGVmaW5lZFwiICYmICBhcmd1bWVudHNbMF0gaW5zdGFuY2VvZiBOb2RlTGlzdCl7XHJcblx0XHRyZXR1cm4gYXJndW1lbnRzWzBdO1x0XHRcclxuXHR9XHJcblx0ZWxzZXtcclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGludGVybmFsID0ge1xyXG5cdFx0XHRsZW5ndGg6IHt2YWx1ZTogMH1cclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRcdGxldCBsaXN0ID0gQXJyYXkuZnJvbShhcmdzLnNoaWZ0KCkpO1x0XHRcclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBsaXN0W2ldICE9PSBcInVuZGVmaW5lZFwiICYmIGxpc3RbaV0gaW5zdGFuY2VvZiBOb2RlKXtcclxuXHRcdFx0XHRcdGludGVybmFsW2ldID0ge3ZhbHVlOiBsaXN0W2ldLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0XHRcdGludGVybmFsLmxlbmd0aC52YWx1ZSsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFxyXG5cdFx0cmV0dXJuIE9iamVjdC5jcmVhdGUoTm9kZUxpc3QucHJvdG90eXBlLGludGVybmFsICk7XHJcblx0fVxyXG59IiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdGNvbnN0IHBhcmVudFNlbGVjdG9yID0gLzpwYXJlbnQoXFwoXFxcIihbXlxcKV0qKVxcXCJcXCkpPy9pO1xyXG5cdFxyXG5cdFByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24oYVNlbGVjdG9yKSB7XHJcblx0XHRsZXQgbWF0Y2ggPSBwYXJlbnRTZWxlY3Rvci5leGVjKGFTZWxlY3Rvcik7XHJcblx0XHRpZihtYXRjaCl7XHJcblx0XHRcdGxldCByZXN1bHQgPSB0aGlzO1xyXG5cdFx0XHRpZihtYXRjaC5pbmRleCA+IDApe1xyXG5cdFx0XHRcdHJlc3VsdCA9IHRoaXMucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3Iuc3Vic3RyKDAsIG1hdGNoLmluZGV4KSk7XHJcblx0XHRcdFx0aWYocmVzdWx0Lmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRcdGlmKHR5cGVvZiBtYXRjaFsyXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucGFyZW50KG1hdGNoWzJdKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQoKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKHR5cGVvZiByZXN1bHQgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG5leHRTZWxlY3RvciA9IGFTZWxlY3Rvci5zdWJzdHIobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpLnRyaW0oKTtcclxuXHRcdFx0aWYobmV4dFNlbGVjdG9yLnRyaW0oKS5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQuZmluZChuZXh0U2VsZWN0b3IpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcdFx0XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yKTtcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG5cclxuIiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdFByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX19kYXRhID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHRoaXMuX19kYXRhID0ge307XHJcblx0XHRcdGlmKHR5cGVvZiB0aGlzLmRhdGFzZXQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0Zm9yIChuYW1lIGluIHRoaXMuZGF0YXNldClcclxuXHRcdFx0XHRcdHRoaXMuX19kYXRhW25hbWVdID0gdGhpcy5kYXRhc2V0W25hbWVdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLl9fZGF0YTtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19kYXRhW2FyZ3VtZW50c1swXV0gO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhcmd1bWVudHNbMV0gPT0gbnVsbClcclxuXHRcdFx0ZGVsZXRlIHRoaXMuX19kYXRhW2FyZ3VtZW50c1swXV07XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuX19kYXRhW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi4vLi4vcG9seWZpbGwvQ3VzdG9tRXZlbnRcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRjb25zdCBXcmFwcGVkRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oYUNvbmZpZywgYUNhbGxiYWNrICxhRXZlbnQpe1xyXG5cdFx0aWYodHlwZW9mIGFDb25maWcuZmlsdGVyICE9PSBcInVuZGVmaW5lZFwiICYmICFhRXZlbnQudGFyZ2V0LmlzKGFDb25maWcuZmlsdGVyKSlcdFx0XHJcblx0XHRcdHJldHVybjtcclxuXHRcdFxyXG5cdFx0bGV0IGFyZ3MgPSBbYUV2ZW50XTtcclxuXHRcdGlmKHR5cGVvZiBhQ29uZmlnLmRhdGEgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGFyZ3MgPSBhcmdzLmNvbmNhdChhQ29uZmlnLmRhdGEpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0ID0gYUNhbGxiYWNrLmFwcGx5KGFDYWxsYmFjaywgYXJncyk7XHJcblx0XHRpZihhQ29uZmlnLnNpbmdsZUNhbGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihhQ2FsbGJhY2spO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gcmVzdWx0O1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdGNvbnN0IGFkZEV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcclxuXHRQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUb28gbGVzcyBhcmd1bWVudHMhXCIpO1xyXG5cclxuXHRcdHRoaXMub24oYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHRcdFxyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl9fY2FsbGJhY2tNYXAgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMuX19jYWxsYmFja01hcCA9IHt9O1xyXG5cclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGV2ZW50cyA9IGFyZ3Muc2hpZnQoKS5zcGxpdCgvKFxccyspfChcXHMqLFxccyopLyk7XHJcblx0XHRsZXQgaGFuZGxlckNvbmZpZyA9IHtcclxuXHRcdFx0ZmlsdGVyIDogKHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJncy5zaGlmdCgpLnNwbGl0KC9cXHMqLFxccyovKSA6IHVuZGVmaW5lZCksXHJcblx0XHRcdGRhdGEgOiAodHlwZW9mIGFyZ3NbMF0gIT09IFwiZnVuY3Rpb25cIiA/IGFyZ3Muc2hpZnQoKSA6IHVuZGVmaW5lZClcclxuXHRcdH07XHJcblx0ICAgIGxldCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHQgICAgXHJcblx0ICAgIGhhbmRsZXJDb25maWcuc2luZ2xlQ2FsbCA9ICh0eXBlb2YgYXJnc1swXSAhPT0gXCJib29sZWFuXCIgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZSk7XHJcblxyXG5cdFx0bGV0IGV2ZW50TWFwID0ge307XHJcblx0XHRldmVudHMuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBjb25maWcsIGNhbGxiYWNrLCBldmVudCl7XHJcblx0XHRcdGxldCB3cmFwcGVkRXZlbnRIYW5kbGVyID0gV3JhcHBlZEV2ZW50SGFuZGxlci5iaW5kKHRoaXMsIGNvbmZpZywgY2FsbGJhY2spO1xyXG5cdFx0XHRyZXN1bHRbZXZlbnRdID0gd3JhcHBlZEV2ZW50SGFuZGxlcjtcdFx0XHRcclxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50LCB3cmFwcGVkRXZlbnRIYW5kbGVyLCB0cnVlKTtcclxuXHRcdFx0XHJcblx0XHR9KS5iaW5kKHRoaXMsIGV2ZW50TWFwLCBoYW5kbGVyQ29uZmlnLCBjYWxsYmFjaykpO1xyXG5cdFx0XHJcblx0XHR0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdID0gZXZlbnRNYXA7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxuXHRcclxuXHRjb25zdCByZW1vdmVFdmVudExpc3RlbmVyID0gUHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XHJcblx0UHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUucmVtb3ZlT24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDEgfHwgdHlwZW9mIHRoaXMuX19jYWxsYmFja01hcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0cmV0dXJuIHJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHJcblx0XHRsZXQgZXZlbnRzID0gdW5kZWZpbmVkO1xyXG5cdFx0bGV0IGNhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG5cdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0ZXZlbnRzID0gYXJndW1lbnRzWzBdLnNwbGl0KC8oXFxzKyl8KFxccyosXFxzKikvKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRjYWxsYmFjayA9IGFyZ3VtZW50c1swXS5zaGlmdCgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBhcmd1bWVudCEgLT4gY2FsbCBmdW5jdGlvbihbZXZlbnR8aGFuZGxlcl0pXCIpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmVtb3ZhbEhhbmRsZXIgPSBbXTtcclxuXHRcdGlmKHR5cGVvZiBldmVudHMgPT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRldmVudE1hcCA9IHRoaXMuX19jYWxsYmFja01hcFtjYWxsYmFja107XHJcblx0XHRcdGlmKHR5cGVvZiBldmVudE1hcCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdFx0ZXZlbnRNYXAuZ2V0T3duUHJvcGVydHlOYW1lcygpLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgZXZlbnRNYXAsIGV2ZW50KXtcclxuXHRcdFx0XHRcdGxldCBoYW5kbGVyID0gZXZlbnRNYXBbZXZlbnRdO1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIGhhbmRsZXIgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGhhbmRsZXIpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHJlbW92YWxIYW5kbGVyLCBldmVudE1hcCkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0ZXZlbnRzLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgZXZlbnQpe1xyXG5cdFx0XHRcdE9iamVjdC5nZXRQcm9wZXJ0eU5hbWVzKHRoaXMuX19jYWxsYmFja01hcCkuZm9yRWFjaCgoZnVuY3Rpb24oYUV2ZW50LCBDYWxsYmFjayl7XHJcblx0XHRcdFx0XHRsZXQgZXZlbnRNYXAgPSB0aGlzLl9fY2FsbGJhY2tNYXBbQ2FsbGJhY2tdO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIGV2ZW50TWFwW2FFdmVudF07XHJcblx0XHRcdFx0XHRpZihldmVudE1hcC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCkgPT0gMClcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX19jYWxsYmFja01hcFtDYWxsYmFja107XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCBldmVudCkpO1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdFxyXG5cdFByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBldmVudCA9IHVuZGVmaW5lZDtcclxuXHRcdGlmKHR5cGVvZiB0aGlzW1wib25cIiArIGFyZ3VtZW50c1swXV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuXHRcdFx0ZXZlbnQuaW5pdEV2ZW50KGFyZ3VtZW50c1swXSwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGFyZ3VtZW50c1swXSwgIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgZGV0YWlsOiBhcmd1bWVudHNbMV0gfSk7XHJcblx0XHRcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRcclxuXHRQcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmFkZENsYXNzKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcdFx0XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLnRvb2dsZUNsYXNzKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHRcclxuXHRQcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdGlmKHRoaXNbaV0gPT0gYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fTtcclxuXHRcclxuXHRpZih0eXBlb2YgUHJvdG90eXBlLmZvckVhY2ggPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRQcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1swXTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi4vLi4vcG9seWZpbGwvQXJyYXlcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHJcblx0UHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZXMoKSA/IChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0ge307XHJcblx0XHRcdFx0dGhpcy5nZXRBdHRyaWJ1dGVOYW1lcygpLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgbmFtZSkge1xyXG5cdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCByZXN1bHQpKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9KS5jYWxsKHRoaXMpIDogdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwidW5kZWZpbmVkXCIgfHwgYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IG5vZGVzID0gdGhpcy5jaGlsZE5vZGVzXHJcblx0XHR3aGlsZShub2Rlcy5sZW5ndGggIT0gMClcdFx0XHRcclxuXHRcdFx0bm9kZXNbMF0ucmVtb3ZlKHRydWUpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5jb250ZW50ID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdGlmKGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5vdXRlckhUTUw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIFxyXG5cdFx0XHRBcnJheS5mcm9tKGFyZ3VtZW50cykuZm9yRWFjaCgoZnVuY3Rpb24oY29udGVudCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblx0XHRcdFx0ZWxzZSBpZihjb250ZW50IGluc3RhbmNlb2YgRWxlbWVudCl7XHJcblx0XHRcdFx0XHR0aGlzLmVtcHR5KCk7XHJcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChjb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1x0XHRcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBcIi4uLy4uL3BvbHlmaWxsL0FycmF5XCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0XHJcblx0UHJvdG90eXBlLmlzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpe1xyXG5cdFx0XHRpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm1hdGNoZXMoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdLmxlbmd0aCA9PT0gXCJudW1iZXJcIil7XHJcblx0XHRcdFx0bGV0IGZpbHRlciA9IGFyZ3VtZW50c1swXTtcclxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZmlsdGVyLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdFx0aWYodGhpcy5tYXRjaGVzKGZpbHRlcltpXSkpXHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHRcdFx0XHRcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLmlzKEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLnBhcmVudCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdFx0d2hpbGUoIXBhcmVudC5pcyhhcmd1bWVudHNbMF0pKVxyXG5cdFx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnQoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0cmV0dXJuIHBhcmVudDtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgcmVzdWx0ID0gbmV3IEFycmF5KCk7XHJcblx0XHRsZXQgcGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0d2hpbGUocGFyZW50KXtcclxuXHRcdFx0cmVzdWx0LnB1c2gocGFyZW50KTtcclxuXHRcdFx0cGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseShwYXJlbnQsIGFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tKHJlc3VsdCk7XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuc2VsZWN0b3IgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodHlwZW9mIHRoaXMuaWQgPT09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy5pZC5sZW5ndGggPT0gMCl7XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCgpO1xyXG5cdFx0XHRpZihwYXJlbnQgaW5zdGFuY2VvZiBEb2N1bWVudCB8fCBwYXJlbnQgaW5zdGFuY2VvZiAgRG9jdW1lbnRGcmFnbWVudClcclxuXHRcdFx0XHRwYXJlbnQgPSB1bmRlZmluZWQ7XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMubG9jYWxOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGlmKHR5cGVvZiBwYXJlbnQgIT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRcdGxldCBzYW1lVGFnU2libGluZ3MgPSBwYXJlbnQuZmluZChcIjpzY29wZT5cIiArIHNlbGVjdG9yKTtcdFx0XHRcclxuXHRcdFx0XHRpZiAoc2FtZVRhZ1NpYmxpbmdzIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IHNhbWVUYWdTaWJsaW5ncy5pbmRleE9mKHRoaXMpICsgMTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApXHJcblx0XHRcdFx0XHRcdHNlbGVjdG9yICs9ICc6bnRoLWNoaWxkKCcgKyBpbmRleCArICcpJztcclxuXHRcdFx0XHR9XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0eXBlb2YgcGFyZW50ICE9PSBcInVuZGVmaW5lZFwiID8gcGFyZW50LnNlbGVjdG9yKCkgKyBcIj5cIiArIHNlbGVjdG9yIDogc2VsZWN0b3I7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBcIiNcIiArIHRoaXMuaWQ7XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuY2xvc2VzdHMgPSBmdW5jdGlvbihhUXVlcnkpIHtcclxuXHRcdGlmKHRoaXMuaXMoYVF1ZXJ5KSlcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRlbHNle1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gdGhpcy5maW5kKGFRdWVyeSwgdHJ1ZSk7XHJcblx0XHRcdGlmKHJlc3VsdC5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcclxuXHRcdFx0aWYodHlwZW9mIHBhcmVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwYXJlbnQgIT0gZG9jdW1lbnQpXHJcblx0XHRcdFx0cmV0dXJuIHBhcmVudC5jbG9zZXN0KGFRdWVyeSk7XHJcblx0XHR9XHRcdFxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihhUXVlcnkpe1xyXG5cdFx0bGV0IHJlc3VsdCA9IHRoaXMuY2xvc2VzdHMoYVF1ZXJ5KTtcclxuXHRcdGlmKHR5cGVvZiByZXN1bHQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHJldHVybiByZXN1bHRbMF07XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblxyXG5cdFByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uKGFGdW5jdGlvbiwgb25jZSl7XHRcclxuXHRcdHRoaXMub24oXCJyZWFkeVwiLCBhRnVuY3Rpb24sIG9uY2UpO1xyXG5cdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcInJlYWR5XCIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHJcblx0UHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5fX2lzaGlkZSl7XHJcblx0XHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IHRoaXMuX19kaXNwbGF5IHx8IFwiXCI7XHJcblx0XHRcdHRoaXMuX19pc2hpZGUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoIXRoaXMuX19pc2hpZGUpe1xyXG5cdFx0XHR0aGlzLl9fZGlzcGxheSA9IHRoaXMuc3R5bGUuZGlzcGxheTtcclxuXHRcdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdHRoaXMuX19pc2hpZGUgPSB0cnVlO1xyXG5cdFx0fVx0XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnRvZ2dsZVNob3cgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5fX2lzaGlkZSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdygpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5oaWRlKCk7XHJcblx0fTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgXCIuLi8uLi9wb2x5ZmlsbC9BcnJheVwiO1xyXG5jb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0Y29uc3QgSW5wdXRUeXBlcyA9W1xyXG5cdFx0e1xyXG5cdFx0XHRzZWxlY3RvciA6IFwic2VsZWN0XCIsXHJcblx0XHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHRcdHRoaXMuZmluZChcIm9wdGlvbjpjaGVja2VkXCIsIHRydWUpLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgb3B0aW9uKXtcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCByZXN1bHQpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImJvb2xlYW5cIiAmJiBhcmd1bWVudHNbMF0pXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1x0XHRcdFx0XHJcblx0XHRcdFx0ZWxzZSBpZihyZXN1bHQubGVuZ3RoID09IDEpXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0WzBdO1xyXG5cdFx0XHRcdGVsc2UgaWYocmVzdWx0Lmxlbmd0aCA+IDEpXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1x0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldCA6IGZ1bmN0aW9uKCl7XHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdmFsdWVzID0gW107XHJcblx0XHRcdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHR2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0XHRcdHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIiwgdHJ1ZSkuZm9yRWFjaCgoZnVuY3Rpb24odmFsdWVzLCBvcHRpb24pe1xyXG5cdFx0XHRcdFx0bGV0IGNoZWNrID0gdmFsdWVzLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+IC0xO1xyXG5cdFx0XHRcdFx0aWYoY2hlY2spXHJcblx0XHRcdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgdmFsdWVzKSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0c2VsZWN0b3IgOiBcIm9wdGlvblwiLFxyXG5cdFx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmKHRoaXMuc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgYVZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWQgPSBhVmFsdWU7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgYVZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1x0XHRcdFx0XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHNlbGVjdG9yIDogXCJpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdXCIsXHJcblx0XHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIHRoaXMudmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy52YWx1ZSA9PSBcIm9uXCIpXHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja2VkO1xyXG5cdFx0XHRcdGVsc2UgaWYodGhpcy5jaGVja2VkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgYVZhbHVlID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZTtcclxuXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBhVmFsdWUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gYVZhbHVlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRdO1xyXG5cdFxyXG5cdGNvbnN0IERlZmF1bHRJbnB1dFR5cGUgPSB7XHJcblx0XHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJpbnB1dFwiKTtcclxuXHRcdFx0fVx0XHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBnZXRJbnB1dFR5cGUgPSBmdW5jdGlvbihhRWxlbWVudCl7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgSW5wdXRUeXBlcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0aWYoYUVsZW1lbnQuaXMoSW5wdXRUeXBlc1tpXS5zZWxlY3RvcikpXHJcblx0XHRcdFx0cmV0dXJuIElucHV0VHlwZXNbaV07XHRcdFxyXG5cdFx0cmV0dXJuIERlZmF1bHRJbnB1dFR5cGU7XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRQcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdHlwZSA9IGdldElucHV0VHlwZSh0aGlzKTtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMCl7XHJcblx0XHRcdHJldHVybiB0eXBlLmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dHlwZS5zZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVx0XHRcclxuXHR9O1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsIlxyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlLmpzXCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxJbnB1dEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFNlbGVjdEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZUxpc3RcIjtcclxuaW1wb3J0IFwiLi9HbG9iYWxcIjtcclxuaW1wb3J0IFwiLi9KUXVlcnlcIjtcclxuIiwiaWYgKCFBcnJheS5mcm9tKSB7XHJcblx0QXJyYXkuZnJvbSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGFyZy5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIGFyZ1tqXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRcdFx0XHRyZXN1bHQucHVzaChhcmdbal0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcmd1bWVudHNbMF0pLmZvckVhY2goXHJcblx0XHRcdFx0XHRcdFx0KGZ1bmN0aW9uKGFSZXN1bHQsIGFOYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXJzZUludChhTmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdGhpc1thTmFtZV0gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnB1c2godGhpc1thTmFtZV0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pLmJpbmQoYXJndW1lbnRzWzBdLCByZXN1bHQpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxufTsiLCJpZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCAhPT0gXCJmdW5jdGlvblwiKSB7XHJcblx0ZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xyXG5cdFx0cGFyYW1zID0gcGFyYW1zIHx8IHtcclxuXHRcdCAgICBidWJibGVzIDogZmFsc2UsXHJcblx0XHQgICAgY2FuY2VsYWJsZSA6IGZhbHNlLFxyXG5cdFx0ICAgIGRldGFpbCA6IG51bGxcclxuXHRcdH07XHJcblx0XHRsZXQgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcblx0XHRldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xyXG5cdFx0cmV0dXJuIGV2dDtcclxuXHR9XHJcblx0Q3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcclxuXHR3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcclxufVxyXG4iLCJjb25zdCBEZWxlZ2F0ZXJCdWlsZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdGxldCBzb3VyY2UgPSBhcmdzLnNoaWZ0KCk7XHJcblx0YXJncy5mb3JFYWNoKChmdW5jdGlvbihhU291cmNlLCBhQ2FsbGJhY2ssIGFUYXJnZXQpe1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYVRhcmdldCkuZm9yRWFjaChcclxuXHRcdFx0XHQoZnVuY3Rpb24oYVNvdXJjZSwgYVRhcmdldCxhQ2FsbGJhY2ssICBhTmFtZSkge1xyXG5cdFx0XHRcdFx0bGV0IHByb3AgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFUYXJnZXQsIGFOYW1lKTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgYVNvdXJjZVthTmFtZV0gPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb3AudmFsdWUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRcdFx0YVNvdXJjZVthTmFtZV0gPSBmdW5jdGlvbigpe3JldHVybiBhQ2FsbGJhY2suY2FsbCh0aGlzLCBhTmFtZSwgYXJndW1lbnRzKTt9O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSkuYmluZChudWxsLCBhU291cmNlLCBhVGFyZ2V0LCBhQ2FsbGJhY2spKTtcclxuXHR9KS5iaW5kKG51bGwsIHNvdXJjZSwgY2FsbGJhY2spKTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGVsZWdhdGVyQnVpbGRlcjsiLCJpbXBvcnQgXCIuLi9wb2x5ZmlsbC9BcnJheVwiO1xyXG5cclxuY29uc3QgZXh0ZW5kUHJvdG90eXBlID0gZnVuY3Rpb24oKXtcclxuXHRsZXQgYXJncyA9IFx0QXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGxldCBwcm90b3R5cGUgPSBhcmdzLnNoaWZ0KCk7IFxyXG5cdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRsZXQgZXh0ZW5kZXIgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRleHRlbmRlcihwcm90b3R5cGUpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4dGVuZFByb3RvdHlwZTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJsZXQgQ29udmVydGVyID0ge1xyXG5cdHhtbFRvSnNvbiA6IGZ1bmN0aW9uKGFOb2RlKSB7XHJcblx0XHQvLyBDcmVhdGUgdGhlIHJldHVybiBvYmplY3RcclxuXHRcdGxldCBvYmogPSB7fTtcclxuXHRcdGlmIChhTm9kZS5ub2RlVHlwZSA9PSAxIHx8IGFOb2RlLm5vZGVUeXBlID09IDkpIHsgLy8gZWxlbWVudFxyXG5cdFx0XHQvLyBkbyBhdHRyaWJ1dGVzXHJcblx0XHRcdGlmIChhTm9kZS5hdHRyaWJ1dGVzICE9IHVuZGVmaW5lZCAmJiBhTm9kZS5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRsZXQgYXR0cmlidXRlcyA9IHt9O1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYU5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0bGV0IGF0dHJpYnV0ZSA9IGFOb2RlLmF0dHJpYnV0ZXMuaXRlbShpKTtcclxuXHRcdFx0XHRcdGF0dHJpYnV0ZXNbYXR0cmlidXRlLm5vZGVOYW1lXSA9IGF0dHJpYnV0ZS5ub2RlVmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG9ialtcIkBhdHRyaWJ1dGVzXCJdID0gYXR0cmlidXRlcztcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChhTm9kZS5ub2RlVHlwZSA9PSAzIHx8IGFOb2RlLm5vZGVUeXBlID09IDQpIC8vIHRleHRcclxuXHRcdFx0cmV0dXJuIGFOb2RlLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcblx0XHQvLyBkbyBjaGlsZHJlblxyXG5cdFx0aWYgKGFOb2RlLmhhc0NoaWxkTm9kZXMoKSkge1xyXG5cdFx0XHRsZXQgdGV4dENvbnRlbnQgPSB1bmRlZmluZWQ7XHJcblx0XHRcdGxldCBoYXNDaGlsZHJlbiA9IGZhbHNlO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFOb2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgaXRlbSA9IGFOb2RlLmNoaWxkTm9kZXMuaXRlbShpKTtcclxuXHRcdFx0XHRpZiAoaXRlbS5ub2RlVHlwZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRoYXNDaGlsZHJlbiA9IHRydWU7XHJcblx0XHRcdFx0XHRsZXQgbm9kZU5hbWUgPSBpdGVtLm5vZGVOYW1lO1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBvYmpbbm9kZU5hbWVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRcdG9ialtub2RlTmFtZV0gPSBDb252ZXJ0ZXIueG1sVG9Kc29uKGl0ZW0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBvYmpbbm9kZU5hbWVdLnB1c2ggPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgb2xkID0gb2JqW25vZGVOYW1lXTtcclxuXHRcdFx0XHRcdFx0XHRvYmpbbm9kZU5hbWVdID0gW107XHJcblx0XHRcdFx0XHRcdFx0b2JqW25vZGVOYW1lXS5wdXNoKG9sZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0b2JqW25vZGVOYW1lXS5wdXNoKENvbnZlcnRlci54bWxUb0pzb24oaXRlbSkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoKGl0ZW0ubm9kZVR5cGUgPT0gMyB8fCBpdGVtLm5vZGVUeXBlID09IDQpXHJcblx0XHRcdFx0XHRcdCYmIGl0ZW0udGV4dENvbnRlbnQgIT0gXCJcIilcclxuXHRcdFx0XHRcdHRleHRDb250ZW50ID0gKHRleHRDb250ZW50ID8gdGV4dENvbnRlbnQgKyBpdGVtLnRleHRDb250ZW50XHJcblx0XHRcdFx0XHRcdFx0OiBpdGVtLnRleHRDb250ZW50KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRleHRDb250ZW50KSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBvYmpbXCJAYXR0cmlidXRlc1wiXSA9PT0gXCJ1bmRlZmluZWRcIiAmJiAhaGFzQ2hpbGRyZW4pXHJcblx0XHRcdFx0XHRvYmogPSB0ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0b2JqLnRleHQgPSB0ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBvYmo7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbnZlcnRlcjsiLCJpbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2luZGV4XCI7XHJcblxyXG5cclxubGV0IEV2ZW50QmluZCA9IGZ1bmN0aW9uKGFuRWxlbWVudCwgYUNvbnRleHQpIHtcclxuXHR2YXIgcmVzdWx0ID0ge1xyXG5cdCAgICBwcmV2ZW50RGVmYXVsdCA6ICh0eXBlb2YgYW5FbGVtZW50LmF0dHIoXCJldmVudC1wcmV2ZW50LWRlZmF1bHRcIikgIT09IFwidW5kZWZpbmVkXCIpLFxyXG5cdCAgICBzdG9wUHJvcGFnYXRpb24gOiAodHlwZW9mIGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtc3RvcC1wcm9wYWdhdGlvblwiKSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHR9O1xyXG5cdHJlc3VsdC5ldmVudFR5cGUgPSBhbkVsZW1lbnQuYXR0cihcImV2ZW50LXR5cGVcIik7XHJcblx0aWYgKHR5cGVvZiByZXN1bHQuZXZlbnRUeXBlID09PSAndW5kZWZpbmVkJylcclxuXHRcdGFuRWxlbWVudC5kYXRhKGRlLnRpdHVzLmNvcmUuRXZlbnRCaW5kLlNUQVRFLkZJTklTSEVELCBkZS50aXR1cy5jb3JlLkV2ZW50QmluZC5GSU5JU0hFRFNUQVRFLkZBSUwpO1xyXG5cdGVsc2Uge1xyXG5cdFx0cmVzdWx0LmFjdGlvbiA9IGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtYWN0aW9uXCIpO1xyXG5cdFx0cmVzdWx0LmRlbGVnYXRpb24gPSBhbkVsZW1lbnQuYXR0cihcImV2ZW50LWRlbGVnYXRpb25cIik7XHJcblxyXG5cdFx0aWYgKHR5cGVvZiAocmVzdWx0LmFjdGlvbiB8fCByZXN1bHQuZGVsZWdhdGlvbikgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGFuRWxlbWVudC5kYXRhKGRlLnRpdHVzLmNvcmUuRXZlbnRCaW5kLlNUQVRFLkZJTklTSEVELCBkZS50aXR1cy5jb3JlLkV2ZW50QmluZC5GSU5JU0hFRFNUQVRFLkZBSUwpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0cmVzdWx0LmV2ZW50RGF0YSA9IGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtZGF0YVwiKTtcclxuXHRcdGlmICh0eXBlb2YgcmVzdWx0LmV2ZW50RGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVzdWx0LmV2ZW50RGF0YS5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXN1bHQuZXZlbnREYXRhID0gZGUudGl0dXMuY29yZS5FdmVudEJpbmQuRVhQUkVTU0lPTlJFU09MVkVSLnJlc29sdmVFeHByZXNzaW9uKGV2ZW50RGF0YSwgYUNvbnRleHQsIHt9KTtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBhQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRcdHJlc3VsdC5ldmVudERhdGEgPSAkKCkuZXh0ZW5kKHt9LCBhQ29udGV4dCk7XHJcblxyXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQuZXZlbnREYXRhICE9PSAndW5kZWZpbmVkJylcclxuXHRcdFx0YW5FbGVtZW50Lm9uKHJlc3VsdC5ldmVudFR5cGUsIG51bGwsIHJlc3VsdC5ldmVudERhdGEsIGRlLnRpdHVzLmNvcmUuRXZlbnRCaW5kLiQkX19leGVjdXRlX18kJCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGFuRWxlbWVudC5vbihyZXN1bHQuZXZlbnRUeXBlLCBkZS50aXR1cy5jb3JlLkV2ZW50QmluZC4kJF9fZXhlY3V0ZV9fJCQpO1xyXG5cdFx0YW5FbGVtZW50LmRhdGEoZGUudGl0dXMuY29yZS5FdmVudEJpbmQuU1RBVEUuRklOSVNIRUQsIGRlLnRpdHVzLmNvcmUuRXZlbnRCaW5kLkZJTklTSEVEU1RBVEUuUkVBRFkpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcbn07XHJcblxyXG5FdmVudEJpbmQuRVhQUkVTU0lPTlJFU09MVkVSID0gbmV3IGRlLnRpdHVzLmNvcmUuRXhwcmVzc2lvblJlc29sdmVyKCk7XHJcbkV2ZW50QmluZC5TVEFURSA9IHtcclxuXHRGSU5JU0hFRCA6IFwiJCRFdmVudEJpbmQuRklOSVNIRUQkJFwiXHJcbn07XHJcbkV2ZW50QmluZC5GSU5JU0hFRFNUQVRFID0ge1xyXG4gICAgRkFJTCA6IFwiZmFpbFwiLFxyXG4gICAgUkVBRFkgOiBcInJlYWR5XCJcclxufTtcclxuXHJcbkV2ZW50QmluZC4kJF9fZXhlY3V0ZV9fJCQgPSBmdW5jdGlvbihhbkV2ZW50KSB7XHJcblx0dmFyIGVsZW1lbnQgPSAkKHRoaXMpO1xyXG5cdHZhciBkYXRhID0gZWxlbWVudC5kYXRhKFwiZGUudGl0dXMuY29yZS5FdmVudEJpbmRcIik7XHJcblx0aWYgKGRhdGEucHJldmVudERlZmF1bHQpXHJcblx0XHRhbkV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0aWYgKGRhdGEuc3RvcFByb3BhZ2F0aW9uKVxyXG5cdFx0YW5FdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0aWYgKHR5cGVvZiBkYXRhLmFjdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdHZhciBhY3Rpb24gPSBkYXRhLmFjdGlvbjtcclxuXHRcdGFjdGlvbiA9IEV2ZW50QmluZC5FWFBSRVNTSU9OUkVTT0xWRVIucmVzb2x2ZUV4cHJlc3Npb24oZGF0YS5hY3Rpb24sIGFuRXZlbnQuZGF0YSwgdW5kZWZpbmVkKTtcclxuXHRcdGlmICh0eXBlb2YgYWN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0dmFyIGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRcdGlmIChhcmdzICE9IHVuZGVmaW5lZCAmJiBhcmdzLmxlbmd0aCA+PSAxICYmIGFuRXZlbnQuZGF0YSAhPSB1bmRlZmluZWQpXHJcblx0XHRcdFx0YXJncy5zcGxpY2UoMSwgMCwgYW5FdmVudC5kYXRhKTtcclxuXHRcdFx0YWN0aW9uLmFwcGx5KGFjdGlvbiwgYXJncyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAodHlwZW9mIGRhdGEuZGVsZWdhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRlbGVtZW50LnRyaWdnZXIoZGF0YS5kZWxlZ2F0aW9uLCB0eXBlb2YgZGF0YS5ldmVudERhdGEgIT09ICd1bmRlZmluZWQnID8gWyBkYXRhLmV2ZW50RGF0YSBdIDogdW5kZWZpbmVkKTtcclxuXHJcblx0cmV0dXJuICFhbkV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xyXG59O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0dmFyIGVsZW1lbnRzID0gJChcIltldmVudC1hdXRvcnVuXVwiKTtcclxuXHRpZiAodHlwZW9mIGVsZW1lbnRzICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcblx0XHRlbGVtZW50cy5kZV90aXR1c19jb3JlX0V2ZW50QmluZCgpO1xyXG5cdFx0ZWxlbWVudHMuZmluZChcIltldmVudC10eXBlXVwiKS5kZV90aXR1c19jb3JlX0V2ZW50QmluZCgpO1xyXG5cclxuXHRcdHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xyXG5cdFx0XHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtdXRhdGlvbikge1xyXG5cdFx0XHRcdG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XHJcblx0XHRcdFx0XHRpZiAobm9kZS5ub2RldHlwZSAhPSBOb2RlLlRFWFRfTk9ERSkge1xyXG5cdFx0XHRcdFx0XHQkKG5vZGUpLmRlX3RpdHVzX2NvcmVfRXZlbnRCaW5kKCk7XHJcblx0XHRcdFx0XHRcdCQobm9kZSkuZmluZChcIltldmVudC10eXBlXVwiKS5kZV90aXR1c19jb3JlX0V2ZW50QmluZCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGNvbmZpZ3VyYXRpb24gb2YgdGhlIG9ic2VydmVyOlxyXG5cdFx0dmFyIGNvbmZpZyA9IHtcclxuXHRcdCAgICBhdHRyaWJ1dGVzIDogdHJ1ZSxcclxuXHRcdCAgICBjaGlsZExpc3QgOiB0cnVlLFxyXG5cdFx0ICAgIHN1YnRyZWUgOiB0cnVlLFxyXG5cdFx0ICAgIGNoYXJhY3RlckRhdGEgOiBmYWxzZVxyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBwYXNzIGluIHRoZSB0YXJnZXQgbm9kZSwgYXMgd2VsbCBhcyB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xyXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2V2ZW50LWF1dG9ydW5dXCIpLCBjb25maWcpO1xyXG5cdH1cclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRCaW5kOyIsImltcG9ydCBSZWdleCBmcm9tIFwiLi9yZWdleC9SZWdleFwiO1xyXG5cclxuXHJcbmxldCBFeHByZXNzaW9uUmVzb2x2ZXIgPSBjbGFzcyB7XHRcclxuXHRjb25zdHJ1Y3Rvcih2YXJSZWdleCkge1xyXG5cdFx0dGhpcy5yZWdleCA9IG5ldyBSZWdleCh2YXJSZWdleFx0fHwgRXhwcmVzc2lvblJlc29sdmVyLlRFWFRfRVhQUkVTU0lPTl9SRUdFWCk7XHJcblx0fTtcclxuXHRcdFxyXG5cdHJlc29sdmVUZXh0KGFUZXh0LCBhRGF0YUNvbnRleHQsIGFEZWZhdWx0VmFsdWUpIHtcclxuXHRcdGxldCB0ZXh0ID0gYVRleHQ7XHJcblx0XHRsZXQgbWF0Y2hlciA9IHRoaXMucmVnZXgucGFyc2UodGV4dCk7XHJcblx0XHR3aGlsZSAobWF0Y2hlci5uZXh0KCkpIHtcclxuXHRcdFx0bGV0IGV4cHJlc3Npb24gPSBtYXRjaGVyLmdldE1hdGNoKCk7XHJcblx0XHRcdGxldCBleHByZXNzaW9uUmVzdWx0ID0gdGhpcy5pbnRlcm5hbFJlc29sdmVFeHByZXNzaW9uKG1hdGNoZXIuZ2V0R3JvdXAoMSksIGFEYXRhQ29udGV4dCwgYURlZmF1bHRWYWx1ZSk7XHJcblx0XHRcdGlmIChleHByZXNzaW9uUmVzdWx0ICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0ZXh0ID0gbWF0Y2hlci5yZXBsYWNlQWxsKGV4cHJlc3Npb25SZXN1bHQsIHRleHQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fTtcclxuXHRcclxuXHRyZXNvbHZlRXhwcmVzc2lvbihhRXhwcmVzc2lvbixcclxuXHRcdFx0YURhdGFDb250ZXh0LCBhRGVmYXVsdFZhbHVlKSB7XHJcblx0XHRsZXQgbWF0Y2hlciA9IHRoaXMucmVnZXgucGFyc2UoYUV4cHJlc3Npb24pO1xyXG5cdFx0aWYgKG1hdGNoZXIubmV4dCgpKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnRlcm5hbFJlc29sdmVFeHByZXNzaW9uKG1hdGNoZXIuZ2V0R3JvdXAoMSksIGFEYXRhQ29udGV4dCwgYURlZmF1bHRWYWx1ZSk7XHJcblx0XHJcblx0XHRyZXR1cm4gdGhpcy5pbnRlcm5hbFJlc29sdmVFeHByZXNzaW9uKGFFeHByZXNzaW9uLCBhRGF0YUNvbnRleHQsIGFEZWZhdWx0VmFsdWUpO1xyXG5cdH07XHJcblx0XHJcblx0aW50ZXJuYWxSZXNvbHZlRXhwcmVzc2lvbihhRXhwcmVzc2lvbixcclxuXHRcdFx0YURhdGFDb250ZXh0LCBhRGVmYXVsdFZhbHVlKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRyZXR1cm4gZGUudGl0dXMuY29yZS5TcGVjaWFsRnVuY3Rpb25zLmRvRXZhbFdpdGhDb250ZXh0KGFFeHByZXNzaW9uLCBhRGF0YUNvbnRleHQsIGFEZWZhdWx0VmFsdWUpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRyZXR1cm4gYURlZmF1bHRWYWx1ZTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5cclxuRXhwcmVzc2lvblJlc29sdmVyLlRFWFRfRVhQUkVTU0lPTl9SRUdFWCA9IFwiXFxcXCRcXFxceyhbXlxcXFx7XFxcXH1dKylcXFxcfVwiO1xyXG5FeHByZXNzaW9uUmVzb2x2ZXIuREVGQVVMVCA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cHJlc3Npb25SZXNvbHZlcjtcclxuIiwibGV0IGJ1aWxkID0gZnVuY3Rpb24oR29iYWwsIGFOYW1lcywgYUNhbGxiYWNrKSB7XG5cdGxldCBuYW1lID0gYU5hbWVzLnNoaWZ0KCk7XG5cdGlmICh0eXBlb2YgR29iYWxbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0R29iYWxbbmFtZV0gPSB7fTtcblxuXHRpZiAoYU5hbWVzLmxlbmd0aCA9PSAwKVxuXHRcdEdvYmFsW25hbWVdID0gYUNhbGxiYWNrKCkgfHwgR29iYWxbbmFtZV07XG5cdGVsc2Vcblx0XHRidWlsZChHb2JhbFtuYW1lXSwgYU5hbWVzLCBhQ2FsbGJhY2spO1xufTtcblxubGV0IE5hbWVzcGFjZSA9IGZ1bmN0aW9uKGFOYW1lc3BhY2UsIGFGdW5jdGlvbikge1xuXHRidWlsZCggKHdpbmRvdyB8fCBnbG9iYWwgfHwge30pLCBhTmFtZXNwYWNlLnNwbGl0KFwiLlwiKSAsYUZ1bmN0aW9uKTtcbn07XG5cbk5hbWVzcGFjZS5jcmVhdGUgPSBOYW1lc3BhY2U7IFxuZXhwb3J0IGRlZmF1bHQgTmFtZXNwYWNlO1xuIiwibGV0IFBhZ2UgPSBjbGFzcyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmJhc2VUYWdWYWx1ZSA9IHVuZGVmaW5lZDtcclxuXHRcdGxldCBiYXNlVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VbaHJlZl1cIik7XHJcblx0XHRpZiAodHlwZW9mIGJhc2VUYWcgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMuYmFzZVRhZ1ZhbHVlID0gYmFzZVRhZy5hdHRyaWJ1dGVzW1wiaHJlZlwiXS52YWx1ZTtcclxuXHRcdHRoaXMuZmlsZXMgPSB7fTtcclxuXHRcdHRoaXMuZGF0YSA9IHt9O1xyXG5cdH07XHJcblx0XHJcblx0YWRkSnNGaWxlKGFVcmwsIGFGdW5jdGlvbiwgZm9yY2VGdW5jdGlvbikge1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYVVybCkpXHJcblx0XHRcdHJldHVybiB0aGlzLmFkZEpzRmlsZXMoYVVybCwgYUZ1bmN0aW9uLCBmb3JjZUZ1bmN0aW9uKTtcclxuXHRcdFxyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmZpbGVzW2FVcmxdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHRoaXMuZmlsZXNbYVVybF0gPSB0cnVlO1xyXG5cdFx0XHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvamF2YXNjcmlwdFwiKTtcclxuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYVVybCk7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsZW1lbnQpO1xyXG5cdFxyXG5cdFx0XHRpZiAoYUZ1bmN0aW9uICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHRhRnVuY3Rpb24oKTtcclxuXHRcdH0gZWxzZSBpZiAoZm9yY2VGdW5jdGlvbiAmJiBhRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGFGdW5jdGlvbigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0YWRkSnNGaWxlcyhhVXJscywgYUZ1bmN0aW9uLCBmb3JjZUZ1bmN0aW9uKSB7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShhVXJscykpIHtcclxuXHRcdFx0d2hpbGUoYVVybHMubGVuZ3RoICE9IDApe1xyXG5cdFx0XHRcdHRoaXMuYWRkSnNGaWxlKGFVcmxzLnNoaWZ0KCksIChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRoaXMuYWRkSnNGaWxlcyhhVXJscywgYUZ1bmN0aW9uLCBmb3JjZUZ1bmN0aW9uKVxyXG5cdFx0XHRcdH0pLmJpbmQodGhpcyksIHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2VcclxuXHRcdFx0dGhpcy5hZGRKc0ZpbGUoYVVybHMsIGFGdW5jdGlvbiwgZm9yY2VGdW5jdGlvbik7XHJcblx0fTtcclxuXHRcclxuXHRhZGRDc3NGaWxlKGFVcmwpIHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFVcmwpKSB7XHJcblx0XHRcdHRoaXMuYWRkQ3NzRmlsZXMoYVVybCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcclxuXHRcdGlmICh0aGlzLmZpbGVzW2FVcmxdID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLmZpbGVzW2FVcmxdID0gdHJ1ZTtcclxuXHRcdFx0bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xyXG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcclxuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGFVcmwpO1xyXG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChlbGVtZW50KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdGFkZENzc0ZpbGVzKGFVcmxzKSB7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShhVXJscykpIHtcclxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGFVcmxzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5hZGRDc3NGaWxlKGFVcmxzW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0Z2V0VXJsKCkge1xyXG5cdFx0cmV0dXJuIGRlLnRpdHVzLmNvcmUuVVJMLmdldEN1cnJlbnRVcmwoKTtcclxuXHR9O1xyXG5cdFxyXG5cdGJ1aWxkVXJsKGFVcmwpIHtcclxuXHRcdGxldCBicm93c2VyID0gdGhpcy5kZXRlY3RCcm93c2VyKCk7XHJcblx0XHRpZiAoYnJvd3Nlci5pZSAmJiBicm93c2VyLmllIDwgMTEpIHtcclxuXHRcdFx0bGV0IHRlbXBVcmwgPSBhVXJsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuYmFzZVRhZ1ZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmICF0ZW1wVXJsLmluZGV4T2YoXCJodHRwOlwiKSA9PSAwXHJcblx0XHRcdFx0XHQmJiAhdGVtcFVybC5pbmRleE9mKFwiaHR0cHM6XCIpID09IDBcclxuXHRcdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJmdHA6XCIpID09IDBcclxuXHRcdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJmdHBzOlwiKSA9PSAwXHJcblx0XHRcdFx0XHQmJiAhdGVtcFVybC5pbmRleE9mKFwibWFpbHRvOlwiKSA9PSAwXHJcblx0XHRcdFx0XHQmJiAhdGVtcFVybC5pbmRleE9mKFwibm90ZXM6XCIpID09IDBcclxuXHRcdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCIvXCIpID09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5iYXNlVGFnVmFsdWUgKyBhVXJsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYVVybDtcclxuXHR9O1xyXG5cdFxyXG5cdGRldGVjdEJyb3dzZXIoKSB7XHJcblx0XHRpZiAoUGFnZS5CUk9XU0VSKVxyXG5cdFx0XHRyZXR1cm4gUGFnZS5CUk9XU0VSO1xyXG5cdFxyXG5cdFx0UGFnZS5CUk9XU0VSID0ge307XHJcblx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRNb2RlKVxyXG5cdFx0XHRQYWdlLkJST1dTRVIuaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XHJcblx0XHRlbHNlXHJcblx0XHRcdFBhZ2UuQlJPV1NFUi5vdGhlciA9IHRydWU7XHJcblx0XHJcblx0XHRyZXR1cm4gUGFnZS5CUk9XU0VSO1xyXG5cdH07XHJcblx0XHJcblx0c2V0RGF0YShhS2V5LCBhVmFsdWUpIHtcclxuXHRcdHRoaXMuZGF0YVthS2V5XSA9IGFWYWx1ZTtcclxuXHR9O1xyXG5cdFxyXG5cdGdldERhdGEoYUtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YVthS2V5XTtcclxuXHR9O1xyXG59O1xyXG5cclxuUGFnZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0eXBlb2YgSU5TVEFOQ0UgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFBhZ2UuSU5TVEFOQ0UgPSBuZXcgUGFnZSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFBhZ2UuSU5TVEFOQ0U7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImxldCBQYWdpbmdVdGlscyA9IHtcclxuXHRwYWdlckRhdGEgOiBmdW5jdGlvbihhUGFnZSwgYVBhZ2VzLCBhU2l6ZSkge1xyXG5cdFx0bGV0IGhhbGYgPSBNYXRoLnJvdW5kKGFQYWdlcyAvIDIpO1xyXG5cdFx0bGV0IHJlc3VsdCA9IHtcclxuXHRcdFx0Zmlyc3RQYWdlIDogMSxcclxuXHRcdFx0c3RhcnRQYWdlIDogMSxcclxuXHRcdFx0ZW5kUGFnZSA6IGFTaXplLFxyXG5cdFx0XHRsYXN0UGFnZSA6IGFQYWdlcyxcclxuXHRcdFx0Y3VycmVudCA6IGFQYWdlLFxyXG5cdFx0XHRwYWdlQ291bnQgOiBhUGFnZXNcclxuXHRcdH07XHJcblx0XHRpZiAoYVNpemUgPiBhUGFnZXMpXHJcblx0XHRcdHJlc3VsdC5lbmRQYWdlID0gYVBhZ2VzO1xyXG5cdFx0ZWxzZSBpZiAoYVBhZ2UgKyBoYWxmID4gYVBhZ2VzKSB7XHJcblx0XHRcdHJlc3VsdC5lbmRQYWdlID0gYVBhZ2VzO1xyXG5cdFx0XHRyZXN1bHQuc3RhcnRQYWdlID0gKGVuZCAtIGFTaXplKSArIDE7XHJcblx0XHR9IGVsc2UgaWYgKGFQYWdlIC0gaGFsZiA+IDEpIHtcclxuXHRcdFx0cmVzdWx0LmVuZFBhZ2UgPSAoYVBhZ2UgKyBoYWxmKTtcclxuXHRcdFx0cmVzdWx0LnN0YXJ0UGFnZSA9IChlbmQgLSBhU2l6ZSkgKyAxO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0LmNvdW50ID0gcmVzdWx0LmVuZFBhZ2UgLSByZXN1bHQuc3RhcnRQYWdlO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9LFxyXG5cclxuXHRwYWdlQXJyYXkgOiBmdW5jdGlvbihhUGFnZSwgYVNpemUsIGFBcnJheSkge1xyXG5cdFx0cmV0dXJuIGFBcnJheS5zbGljZSgoYVBhZ2UgLSAxKSAqIGFTaXplLCBhU2l6ZSk7XHJcblx0fVxyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5nVXRpbHM7XHJcbiIsImNvbnN0IERFVk1PREUgPSBsb2NhdGlvbi5zZWFyY2ggPyAoLy4qZGV2bW9kZT10cnVlLiovaWcpLnRlc3QobG9jYXRpb24uc2VhcmNoKSA6IGZhbHNlO1xuY29uc3QgU1RBVEVNRU5UUyA9IHt9O1xubGV0IFNwZWNpYWxGdW5jdGlvbnMgPSB7XG5cdGRvRXZhbCA6IGZ1bmN0aW9uKGFTdGF0ZW1lbnQsIGFDb250ZXh0LCBhQ2FsbGJhY2spIHtcblx0XHRpZiAoYUNhbGxiYWNrKVxuXHRcdFx0U3BlY2lhbEZ1bmN0aW9ucy5kb0V2YWxXaXRoQ29udGV4dChhU3RhdGVtZW50LCAoYUNvbnRleHQgfHwge30pLFxuXHRcdFx0XHRcdHVuZGVmaW5lZCwgYUNhbGxiYWNrKTtcblx0XHRlbHNlIHtcblx0XHRcdGlmICh0eXBlb2YgYVN0YXRlbWVudCAhPT0gXCJzdHJpbmdcIilcblx0XHRcdFx0cmV0dXJuIGFTdGF0ZW1lbnQ7XG5cblx0XHRcdHZhciBzdGF0ZW1lbnQgPSBhU3RhdGVtZW50LnRyaW0oKTtcblx0XHRcdGlmIChzdGF0ZW1lbnQubGVuZ3RoID09IDApXG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBldmFsRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oXCJhQ29udGV4dFwiLFxuXHRcdFx0XHRcdFx0XCJ3aXRoKHRoaXMpe3JldHVybiBcIiArIGFTdGF0ZW1lbnQgKyBcIjt9XCIpO1xuXHRcdFx0XHRyZXR1cm4gZXZhbEZ1bmN0aW9uLmNhbGwoYUNvbnRleHQpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRpZiAoREVWTU9ERSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblwiLCBcImRvRXZhbCgpXFxuXCIsXG5cdFx0XHRcdFx0XHRcdFwic3RhdGVtZW50OiBcXFwiXCIsIGFTdGF0ZW1lbnQsIFwiXFxcIlxcblwiLCBcImNvbnRleHQ6IFxcXCJcIixcblx0XHRcdFx0XHRcdFx0YUNvbnRleHQsIFwiXFxcIlxcblwiLCBcImNhbGxiYWNrOiBcXFwiXCIsIGFDYWxsYmFjayxcblx0XHRcdFx0XHRcdFx0XCJcXFwiXFxuXCIsIFwiZXJyb3I6IFwiLCBlLCBcIlxcblwiLFxuXHRcdFx0XHRcdFx0XHRcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGRvRXZhbFdpdGhDb250ZXh0IDogZnVuY3Rpb24oYVN0YXRlbWVudCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhQ2FsbGJhY2spIHtcblx0XHRpZiAodHlwZW9mIGFDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IFNwZWNpYWxGdW5jdGlvbnMuZG9FdmFsV2l0aENvbnRleHQoYVN0YXRlbWVudCxcblx0XHRcdFx0XHRcdGFDb250ZXh0LCBhRGVmYXVsdCwgdW5kZWZpbmVkKTtcblx0XHRcdFx0YUNhbGxiYWNrKHJlc3VsdCwgYUNvbnRleHQpO1xuXHRcdFx0fSwgMSk7XG5cblx0XHR9IGVsc2Vcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBTcGVjaWFsRnVuY3Rpb25zLmRvRXZhbChhU3RhdGVtZW50LCBhQ29udGV4dCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiKVxuXHRcdFx0XHRcdHJldHVybiBhRGVmYXVsdDtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIGFEZWZhdWx0O1xuXHRcdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVjaWFsRnVuY3Rpb25zOyIsImltcG9ydCB7ZXh0ZW5kfSBmcm9tIFwiLi91dGlscy9PYmplY3RVdGlsc1wiO1xyXG5cclxubGV0IERFRkFVTFRTID0ge1xyXG5cdGZvcm1hdFRvSHRtbCA6IHtcclxuXHRcdFwidGFic2l6ZVwiIDogNCxcclxuXHRcdFwidGFiY2hhclwiIDogXCImbmJzcDtcIixcclxuXHRcdFwibmV3bGluZVRhZ1wiIDogXCI8YnIvPlwiXHJcblx0fSxcclxuXHJcblx0dHJpbVRleHRMZW5ndGggOiB7XHJcblx0XHRcInBvc3RmaXhcIiA6IFwiLi4uXCJcclxuXHR9XHJcbn07XHJcbmxldCBTdHJpbmdVdGlscyA9IHtcclxuXHRERUZBVUxUUyA6IERFRkFVTFRTLFxyXG5cdHRyaW1UZXh0TGVuZ3RoIDogZnVuY3Rpb24oYVRleHQsIG1heExlbmd0aCwgdGhlU2V0dGluZ3MpIHtcclxuXHRcdGlmIChhVGV4dCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIGFUZXh0ICE9PSBcInN0cmluZ1wiIHx8IGFUZXh0ID09IFwiXCIpXHJcblx0XHRcdHJldHVybiBhVGV4dDtcclxuXHJcblx0XHRsZXQgc2V0dGluZ3MgPSBleHRlbmQoe30sIHRoZVNldHRpbmdzLCBERUZBVUxUUy50cmltVGV4dExlbmd0aCk7XHJcblxyXG5cdFx0aWYgKGFUZXh0Lmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG5cdFx0XHRsZXQgZW5kID0gbWF4TGVuZ3RoIC0gc2V0dGluZ3MucG9zdGZpeC5sZW5ndGg7XHJcblx0XHRcdGlmICgoYVRleHQubGVuZ3RoIC0gZW5kKSA+IDApXHJcblx0XHRcdFx0cmV0dXJuIGFUZXh0LnN1YnN0cmluZygwLCBlbmQpLnRyaW0oKSArIHNldHRpbmdzLnBvc3RmaXg7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYVRleHQ7XHJcblx0fSxcclxuXHRmb3JtYXRUb0h0bWwgOiBmdW5jdGlvbihhVGV4dCwgdGhlU2V0dGluZ3MpIHtcclxuXHRcdGlmIChhVGV4dCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIGFUZXh0ICE9PSBcInN0cmluZ1wiIHx8IGFUZXh0ID09IFwiXCIpXHJcblx0XHRcdHJldHVybiBhVGV4dDtcclxuXHRcdGxldCBzZXR0aW5ncyA9IGV4dGVuZCh7fSwgdGhlU2V0dGluZ3MgLERFRkFVTFRTLmZvcm1hdFRvSHRtbCk7XHJcblx0XHRsZXQgbGluZXMgPSBhVGV4dC5yZXBsYWNlKC9cXG5cXHIvZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpLnNwbGl0KFwiXFxuXCIpO1xyXG5cdFx0bGV0IHRleHQgPSBcIlwiO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoaSAhPSAwKVxyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgc2V0dGluZ3MubmV3bGluZVRhZztcclxuXHRcdFx0dGV4dCA9IHRleHRcdCsgU3RyaW5nVXRpbHMucHJldmVudFRhYnMobGluZXNbaV0sIHNldHRpbmdzLnRhYnNpemUsIHNldHRpbmdzLnRhYmNoYXIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fSxcclxuXHRnZXRUYWJTdG9wTWFwIDogZnVuY3Rpb24odGFiU2l6ZSwgdGFiU3RyaW5nKSB7XHJcblx0XHRsZXQgdGFic3RvcE1hcCA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gdGFiU2l6ZTsgaSsrKSB7XHJcblx0XHRcdGlmIChpID09IDApXHJcblx0XHRcdFx0dGFic3RvcE1hcFswXSA9IFwiXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0YWJzdG9wTWFwW2ldID0gdGFic3RvcE1hcFtpIC0gMV0gKyB0YWJTdHJpbmc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRhYnN0b3BNYXA7XHJcblx0fSxcclxuXHRwcmV2ZW50VGFicyA6IGZ1bmN0aW9uKGFUZXh0LCB0aGVUYWJTdG9wcywgdGhlVGFiU3RvcENoYXIpIHtcclxuXHRcdGxldCB0YWJzdG9wTWFwID0gU3RyaW5nVXRpbHMuZ2V0VGFiU3RvcE1hcCh0aGVUYWJTdG9wcywgdGhlVGFiU3RvcENoYXIpO1xyXG5cdFx0bGV0IHRhYlN0b3BzID0gdGhlVGFiU3RvcHM7XHJcblx0XHRsZXQgdGV4dCA9IFwiXCI7XHJcblx0XHRsZXQgdGFicyA9IGFUZXh0LnNwbGl0KFwiXFx0XCIpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICh0YWJzW2ldLmxlbmd0aCAhPSAwICYmIGkgIT0gMCkge1xyXG5cdFx0XHRcdGxldCBzaXplID0gdGV4dC5sZW5ndGg7XHJcblx0XHRcdFx0bGV0IHRhYlNpemUgPSBzaXplICUgdGFiU3RvcHM7XHJcblx0XHRcdFx0dGV4dCA9IHRleHQgKyB0YWJzdG9wTWFwW3RoZVRhYlN0b3BzIC0gdGFiU2l6ZV0gKyB0YWJzW2ldO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRhYnNbaV0ubGVuZ3RoID09IDAgJiYgaSAhPSAwKVxyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgdGFic3RvcE1hcFt0aGVUYWJTdG9wc107XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0ZXh0ID0gdGV4dCArIHRhYnNbaV07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fSxcclxuXHRmb3JtYXQgOiBmdW5jdGlvbihhVGV4dCwgYXJncykge1xyXG5cdFx0bGV0IG9iamVjdHMgPSBhcmd1bWVudHM7XHJcblx0XHRyZXR1cm4gYVRleHQucmVwbGFjZSgvey0/WzAtOV0rfS9nLCBmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdGxldCBpbmRleCA9IHBhcnNlSW50KGl0ZW0uc3Vic3RyaW5nKDEsIGl0ZW0ubGVuZ3RoIC0gMSkpICsgMTtcclxuXHRcdFx0bGV0IHJlcGxhY2U7XHJcblx0XHRcdGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBvYmplY3RzLmxlbmd0aCkge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBvYmplY3RzW2luZGV4XTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcGxhY2UgIT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHRyZXBsYWNlID0gSlNPTi5zdHJpbmdpZnkocmVwbGFjZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XHJcblx0XHRcdFx0cmVwbGFjZSA9IFwie1wiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAtMikge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBcIn1cIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXBsYWNlID0gXCJcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVwbGFjZTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nVXRpbHM7IiwibGV0IFVSTCA9IGNsYXNzIHtcclxuXHRjb25zdHJ1Y3RvcihhUHJvdG9jb2wsIGFEb21haW4sIGFQb3J0LCBhUGF0aCwgdGhlUGFyYW1ldGVyLCBhTWFya2VyKSB7XHRcclxuXHRcdHRoaXMucHJvdG9jb2wgPSBhUHJvdG9jb2wgfHwgXCJodHRwXCI7XHJcblx0XHR0aGlzLmRvbWFpbiA9IGFEb21haW47XHJcblx0XHR0aGlzLnBvcnQgPSBhUG9ydDtcclxuXHRcdHRoaXMucGF0aCA9IGFQYXRoO1xyXG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gdGhlUGFyYW1ldGVyO1xyXG5cdFx0dGhpcy5tYXJrZXIgPSBhTWFya2VyXHRcclxuXHR9O1xyXG5cdFxyXG5cdGdldFBhcmFtZXRlcihhS2V5KSB7XHJcblx0XHRsZXQgdmFsdWUgPSB0aGlzLnBhcmFtZXRlcnNbYUtleV07XHJcblx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZVswXSA6IHZhbHVlO1xyXG5cdH07XHJcblx0XHJcblx0Z2V0UGFyYW1ldGVycyhhS2V5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJhbWV0ZXJzW2FLZXldO1xyXG5cdH07XHJcblx0XHJcblx0YWRkUGFyYW1ldGVyKGFLZXksIGFWYWx1ZSwgYXBwZW5kKSB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMucGFyYW1ldGVyc1thS2V5XSA9PT0gXCJ1bmRlZmluZWRcIikgXHJcblx0XHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IFtdO1xyXG5cdFx0aWYgKCFhcHBlbmQgJiYgdHlwZW9mIGFWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgXHJcblx0XHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IHVuZGVmaW5lZDtcclxuXHRcdCBlbHNlIGlmICghYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGFWYWx1ZS5sZW5ndGggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IGFWYWx1ZTtcclxuXHRcdCBlbHNlIGlmIChhcHBlbmQgJiYgdHlwZW9mIGFWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgYVZhbHVlLmxlbmd0aCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0JC5tZXJnZSh0aGlzLnBhcmFtZXRlcnNbYUtleV0sIGFWYWx1ZSk7Ly8gQFRPRE8gJC5tZXJnZSBlbnRmZXJuZW5cclxuXHRcdCBlbHNlIGlmICghYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IFsgYVZhbHVlIF07XHJcblx0XHQgZWxzZSBpZiAoYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIFxyXG5cdFx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0ucHVzaChhVmFsdWUpO1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdGdldFF1ZXJ5U3RyaW5nKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnBhcmFtZXRlcnMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IFwiP1wiO1xyXG5cdFx0XHRsZXQgaXNGaXJzdFBhcmFtZXRlciA9IHRydWU7XHJcblx0XHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiB0aGlzLnBhcmFtZXRlcnMpIHtcclxuXHRcdFx0XHRpZiAoIWlzRmlyc3RQYXJhbWV0ZXIpIHtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdCArIFwiJlwiO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpc0ZpcnN0UGFyYW1ldGVyID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBwYXJhbWV0ZXJWYWx1ZXMgPSB0aGlzLnBhcmFtZXRlcnNbcHJvcGVydHlOYW1lXTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHBhcmFtZXRlclZhbHVlcy5sZW5ndGggPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQgKyBlbmNvZGVVUklDb21wb25lbnQocHJvcGVydHlOYW1lKSArIFwiPVwiXHJcblx0XHRcdFx0XHRcdFx0KyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyVmFsdWVzKTtcclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBwYXJhbWV0ZXJWYWx1ZXMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKGogPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICsgXCImXCI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICsgZW5jb2RlVVJJQ29tcG9uZW50KHByb3BlcnR5TmFtZSkgKyBcIj1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0KyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyVmFsdWVzW2pdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0Z2V0TWFya2VyU3RyaW5nKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1hcmtlciAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0cmV0dXJuIFwiI1wiICsgdGhpcy5tYXJrZXJcdFxyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblx0fTtcclxuXHRcclxuXHRhc1N0cmluZygpIHtcclxuXHRcdGxldCByZXN1bHQgPSB0aGlzLnByb3RvY29sICsgXCI6Ly9cIiArIHRoaXMuZG9tYWluICsgXCI6XCIgKyB0aGlzLnBvcnQ7XHRcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5wYXRoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQgKyB0aGlzLnBhdGg7XHJcblx0XHJcblx0XHRyZXN1bHQgPSByZXN1bHQgKyB0aGlzLmdldFF1ZXJ5U3RyaW5nKCkgKyB0aGlzLmdldE1hcmtlclN0cmluZygpO1xyXG5cdFxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cdFxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXNTdHJpbmcoKTtcclxuXHR9O1x0XHJcbn07XHJcblxyXG5VUkwuZnJvbVN0cmluZyA9IGZ1bmN0aW9uKGFVcmxTdHJpbmcpIHtcclxuXHRsZXQgdGVtcFVybCA9IGFVcmxTdHJpbmc7XHJcblx0bGV0IHByb3RvY29sID0gXCJodHRwXCI7XHJcblx0bGV0IGhvc3QgPSB1bmRlZmluZWQ7XHJcblx0bGV0IHBvcnQgPSA4MDtcclxuXHRsZXQgcGF0aCA9IFwiL1wiO1xyXG5cdGxldCBtYXJrZXIgPSBcIlwiO1xyXG5cdGxldCBwYXJhbWV0ZXJTdHJpbmcgPSB1bmRlZmluZWQ7XHJcblx0bGV0IHNwbGl0SW5kZXggPSAtMTtcclxuXHRsZXQgcGFyYW1ldGVyID0ge307XHJcblxyXG5cdGxldCBtYXRjaCA9IG5ldyBSZWdFeHAoXCJcXFxcPyhbXiNdKilcIikuZXhlYyh0ZW1wVXJsKTtcclxuXHRpZiAodHlwZW9mIG1hdGNoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0cGFyYW1ldGVyU3RyaW5nID0gbWF0Y2hbMV07XHJcblxyXG5cdG1hdGNoID0gbmV3IFJlZ0V4cChcIiMoW15cXFxcPyNdKilcIikuZXhlYyh0ZW1wVXJsKTtcclxuXHRpZiAodHlwZW9mIG1hdGNoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0bWFya2VyID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzFdKTtcclxuXHJcblx0c3BsaXRJbmRleCA9IHRlbXBVcmwuaW5kZXhPZihcIjovL1wiKTtcclxuXHRpZiAoc3BsaXRJbmRleCA+IDApIHtcclxuXHRcdHByb3RvY29sID0gdGVtcFVybC5zdWJzdHIoMCwgc3BsaXRJbmRleCk7XHJcblx0XHR0ZW1wVXJsID0gdGVtcFVybC5zdWJzdHIoc3BsaXRJbmRleCArIDMpO1xyXG5cdH1cclxuXHJcblx0bWF0Y2ggPSBuZXcgUmVnRXhwKFwiKFteXFwvOlxcXFw/I10qKVwiKS5leGVjKHRlbXBVcmwpO1xyXG5cdGlmICh0eXBlb2YgbWF0Y2ggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRob3N0ID0gbWF0Y2hbMV07XHJcblxyXG5cdG1hdGNoID0gbmV3IFJlZ0V4cChcIjooW15cXFxcL1xcXFw/I10qKVwiKS5leGVjKHRlbXBVcmwpO1xyXG5cdGlmICh0eXBlb2YgbWF0Y2ggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRwb3J0ID0gbWF0Y2hbMV07XHJcblx0ZWxzZSBpZiAocHJvdG9jb2wudG9Mb3dlckNhc2UoKSA9PSBcImh0dHBzXCIpXHJcblx0XHRwb3J0ID0gNDQzO1xyXG5cdGVsc2UgaWYgKHByb3RvY29sLnRvTG93ZXJDYXNlKCkgPT0gXCJmdHBcIilcclxuXHRcdHBvcnQgPSAyMTtcclxuXHRlbHNlIGlmIChwcm90b2NvbC50b0xvd2VyQ2FzZSgpID09IFwiZnRwc1wiKVxyXG5cdFx0cG9ydCA9IDIxO1xyXG5cclxuXHRtYXRjaCA9IG5ldyBSZWdFeHAoXCIoL1teXFxcXD8jXSopXCIpLmV4ZWModGVtcFVybCk7XHJcblx0aWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHBhdGggPSBtYXRjaFsxXTtcclxuXHJcblx0bGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihbXiZcXFxcPyM9XSopPShbXiZcXFxcPyM9XSopXCIpO1xyXG5cdGlmICh0eXBlb2YgcGFyYW1ldGVyU3RyaW5nICE9PSBcInVuZGVmaW5lZFwiICYmIFwiXCIgIT0gcGFyYW1ldGVyU3RyaW5nKSB7XHJcblx0XHRsZXQgcGFyYW1ldGVyRW50cmllcyA9IHBhcmFtZXRlclN0cmluZy5zcGxpdChcIiZcIik7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgcGFyYW1ldGVyRW50cmllcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgbWF0Y2ggPSByZWdleC5leGVjKHBhcmFtZXRlckVudHJpZXNbaV0pO1xyXG5cdFx0XHRsZXQgcE5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMV0pO1xyXG5cdFx0XHRsZXQgcFZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzJdKTtcclxuXHRcdFx0cGFyYW1ldGVyW3BOYW1lXSA/IHBhcmFtZXRlcltwTmFtZV0ucHVzaChwVmFsdWUpXHJcblx0XHRcdFx0XHQ6IHBhcmFtZXRlcltwTmFtZV0gPSBbIHBWYWx1ZSBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ldyBVUkwocHJvdG9jb2wsIGhvc3QsIHBvcnQsIHBhdGgsIHBhcmFtZXRlciwgbWFya2VyKTtcclxufTtcclxuXHJcblVSTC5nZXRDdXJyZW50VXJsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKFVSTC5TVEFUSUNfX0NVUlJFTlRVUkwgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRVUkwuU1RBVElDX19DVVJSRU5UVVJMID0gVVJMLmZyb21TdHJpbmcobG9jYXRpb24uaHJlZik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gVVJMLlNUQVRJQ19fQ1VSUkVOVFVSTDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVSTDtcclxuIiwibGV0IFVVSUQgPSBmdW5jdGlvbigpIHtcdFxyXG5cdGxldCBzcGFjZXIgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyBhcmd1bWVudHNbMF0gOiBcIi1cIjtcclxuXHRsZXQgdGVtcGxhdGUgPSAneHh4eHh4eHgnICsgc3BhY2VyICsgJ3h4eHgnICsgc3BhY2VyICsgJzR4eHgnICsgc3BhY2VyICsgJ3l4eHgnICsgc3BhY2VyICsgJ3h4eHh4eHh4eHh4eCc7XHRcclxuXHRyZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XHJcblx0XHRsZXQgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDBcclxuXHRcdGxldCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG5cdFx0cmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG5cdH0pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBVVUlEOyIsIi8vIExvYWQgYWxsIHBvbHlmaWxsc1xyXG5pbXBvcnQgXCIuL3BvbHlmaWxsXCI7XHJcblxyXG4vLyBMb2FkIHRvcCBsZXZlbCBtb2R1bGVzXHJcbmltcG9ydCBOYW1lc3BhY2UgZnJvbSBcIi4vTmFtZXNwYWNlXCI7XHJcbmltcG9ydCBVVUlEIGZyb20gXCIuL1VVSURcIjtcclxuaW1wb3J0IFNwZWNpYWxGdW5jdGlvbnMgZnJvbSBcIi4vU3BlY2lhbEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCIuL0V4cHJlc3Npb25SZXNvbHZlclwiO1xyXG5pbXBvcnQgQ29udmVydGVyIGZyb20gXCIuL0NvbnZlcnRlclwiO1xyXG5pbXBvcnQgUGFnaW5nVXRpbHMgZnJvbSBcIi4vUGFnaW5nVXRpbHNcIjtcclxuaW1wb3J0IFN0cmluZ1V0aWxzIGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCBVUkwgZnJvbSBcIi4vVVJMXCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIjtcclxuaW1wb3J0IEV2ZW50QmluZCBmcm9tIFwiLi9FdmVudEJpbmRcIjtcclxuXHJcbi8vIGxvYWQgcmVnZXggbW9kdWxlc1xyXG5pbXBvcnQgUmVnZXggZnJvbSBcIi4vcmVnZXgvUmVnZXhcIjtcclxuaW1wb3J0IE1hdGNoZXIgZnJvbSBcIi4vcmVnZXgvTWF0Y2hlclwiO1xyXG5cclxuXHJcblxyXG4vLyBjcmVhdGUgbmFtZXNwYWNlXHJcbk5hbWVzcGFjZShcImRlLnRpdHVzLmNvcmVcIiwgZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdE5hbWVzcGFjZSA6IE5hbWVzcGFjZSxcclxuXHRcdFVVSUQgOiBVVUlELFxyXG5cdFx0U3BlY2lhbEZ1bmN0aW9ucyA6IFNwZWNpYWxGdW5jdGlvbnMsXHJcblx0XHRFeHByZXNzaW9uUmVzb2x2ZXIgOiBFeHByZXNzaW9uUmVzb2x2ZXIsXHJcblx0XHRDb252ZXJ0ZXIgOiBDb252ZXJ0ZXIsXHJcblx0XHRTdHJpbmdVdGlscyA6IFN0cmluZ1V0aWxzLFxyXG5cdFx0VVJMOiBVUkwsXHJcblx0XHRQYWdlOiBQYWdlLFxyXG5cdFx0RXZlbnRCaW5kOiBFdmVudEJpbmQsXHJcblx0XHRyZWdleCA6IHtcclxuXHRcdFx0UmVnZXggOiBSZWdleCxcclxuXHRcdFx0TWF0Y2hlciA6IE1hdGNoZXJcclxuXHRcdH1cdFx0XHRcclxuXHR9O1xyXG59KTsiLCJpZiAoIUFycmF5LmZyb20pIHtcclxuXHRBcnJheS5mcm9tID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgcmVzdWx0ID0gW107XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgYXJnLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBhcmcubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgYXJnW2pdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGFyZ1tqXSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFyZ3VtZW50c1swXSkuZm9yRWFjaChcclxuXHRcdFx0XHRcdFx0XHQoZnVuY3Rpb24oYVJlc3VsdCwgYU5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlSW50KGFOYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzW2FOYW1lXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucHVzaCh0aGlzW2FOYW1lXSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSkuYmluZChhcmd1bWVudHNbMF0sIHJlc3VsdCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG59OyIsImlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XHJcblx0XHRwYXJhbXMgPSBwYXJhbXMgfHwge1xyXG5cdFx0ICAgIGJ1YmJsZXMgOiBmYWxzZSxcclxuXHRcdCAgICBjYW5jZWxhYmxlIDogZmFsc2UsXHJcblx0XHQgICAgZGV0YWlsIDogbnVsbFxyXG5cdFx0fTtcclxuXHRcdGxldCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuXHRcdGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XHJcblx0XHRyZXR1cm4gZXZ0O1xyXG5cdH1cclxuXHRDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xyXG5cdHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xyXG59XHJcbiIsImlmICh0eXBlb2YgU3RyaW5nLnByb3RvdHlwZS5oYXNoQ29kZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG5cdFN0cmluZy5wcm90b3R5cGUuaGFzaENvZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBoYXNoID0gMCwgaSwgY2hyO1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gaGFzaDtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNociA9IHRoaXMuY2hhckNvZGVBdChpKTtcclxuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hyO1xyXG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGhhc2g7XHJcblx0fTtcclxufTtcclxuIiwiaW1wb3J0IFwiLi9BcnJheVwiO1xyXG5pbXBvcnQgXCIuL1N0cmluZ1wiO1xyXG5pbXBvcnQgXCIuL0N1c3RvbUV2ZW50XCI7IiwibGV0IE1hdGNoZXIgPSBjbGFzc3tcclxuXHRjb25zdHJ1Y3RvcihhUmVnRXhwLFx0YVRleHQpIHtcclxuXHR0aGlzLmludGVybmFsUmVnZXggPSBhUmVnRXhwO1xyXG5cdHRoaXMucHJvY2Vzc2luZ1RleHQgPSBhVGV4dDtcclxuXHR0aGlzLmN1cnJlbnRNYXRjaCA9IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmlzTWF0Y2hpbmcoKSB7XHJcblx0cmV0dXJuIHRoaXMuaW50ZXJuYWxSZWdleC50ZXN0KHRoaXMucHJvY2Vzc2luZ1RleHQpO1xyXG59XHJcblxyXG5uZXh0KCkge1xyXG5cdHRoaXMuY3VycmVudE1hdGNoID0gdGhpcy5pbnRlcm5hbFJlZ2V4LmV4ZWModGhpcy5wcm9jZXNzaW5nVGV4dCk7XHJcblx0aWYgKHRoaXMuY3VycmVudE1hdGNoICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5wcm9jZXNzaW5nVGV4dCA9IHRoaXMucHJvY2Vzc2luZ1RleHQucmVwbGFjZSh0aGlzLmN1cnJlbnRNYXRjaFswXSxcclxuXHRcdFx0XHRcIlwiKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmdldE1hdGNoKCkge1xyXG5cdGlmICh0aGlzLmN1cnJlbnRNYXRjaCAhPSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50TWF0Y2hbMF07XHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZ2V0R3JvdXAoYUdyb3VwSWQpIHtcclxuXHRpZiAodGhpcy5jdXJyZW50TWF0Y2ggIT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudE1hdGNoW2FHcm91cElkXTtcclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5yZXBsYWNlQWxsIChhUmVwbGFjZVZhbHVlLCBhVGV4dCkge1xyXG5cdGlmICh0aGlzLmN1cnJlbnRNYXRjaCAhPSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm4gYVRleHQucmVwbGFjZSh0aGlzLmN1cnJlbnRNYXRjaFswXSwgYVJlcGxhY2VWYWx1ZSk7XHJcblx0cmV0dXJuIGFUZXh0O1xyXG59XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRjaGVyOyIsImltcG9ydCBNYXRjaGVyIGZyb20gXCIuL01hdGNoZXJcIjtcclxuXHJcblxyXG5sZXQgUmVnZXggPSBjbGFzcyB7XHJcblx0XHRjb25zdHJ1Y3RvcihhUmVnZXgsIGFPcHRpb25zKSB7XHJcblx0XHR0aGlzLmludGVybmFsUmVnZXggPSBuZXcgUmVnRXhwKGFSZWdleCwgYU9wdGlvbnMpO1xyXG5cdH1cclxuXHRcclxuXHRwYXJzZShhVGV4dCkge1xyXG5cdFx0cmV0dXJuIG5ldyBNYXRjaGVyKHRoaXMuaW50ZXJuYWxSZWdleCwgYVRleHQpO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdleDsiLCJpbXBvcnQgXCIuLi9wb2x5ZmlsbFwiO1xyXG5cclxubGV0IGV4dGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0cmV0dXJuO1x0XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0cmV0dXJuIGFyZ3VtZW50c1swXTtcclxuXHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHRcclxuXHRsZXQgZGVlcCA9IHR5cGVvZiBhcmdzWzBdID09PSBcImJvb2xlYW5cIiA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xyXG5cdGxldCB0YXJnZXQgPSBhcmdzLnNoaWZ0KCk7XHJcblx0d2hpbGUoYXJncy5sZW5ndGggIT0gMCl7XHJcblx0XHRsZXQgc291cmNlID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0aWYodHlwZW9mIHNvdXJjZSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaCgoZnVuY3Rpb24oYVNvdXJjZSwgYVRhcmdldCwgaXNEZWVwLCBhTmFtZSl7XHJcblx0XHRcdFx0bGV0IHNvdXJjZSA9IGFTb3VyY2VbYU5hbWVdO1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBzb3VyY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlICE9IG51bGwpe1xyXG5cdFx0XHRcdFx0bGV0IHRhcmdldCA9IGFUYXJnZXRbYU5hbWVdO1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIHRhcmdldCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0YXJnZXQgPT0gbnVsbClcclxuXHRcdFx0XHRcdFx0YVRhcmdldFthTmFtZV0gPSBzb3VyY2U7XHJcblx0XHRcdFx0XHRlbHNlIGlmKGRlZXAgJiYgQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIEFycmF5LmlzQXJyYXkoc291cmNlKSlcclxuXHRcdFx0XHRcdFx0dmFsdWUuY29uY2F0KGFTb3VyY2VbYU5hbWVdKTtcclxuXHRcdFx0XHRcdGVsc2UgaWYoZGVlcCAmJiB0eXBlb2YgdGFyZ2V0ICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB0YXJnZXQgPT09IHR5cGVvZiBzb3VyY2UpXHJcblx0XHRcdFx0XHRcdGV4dGVuZCh0cnVlLCB0YXJnZXQsIHNvdXJjZSk7XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLmJpbmQobnVsbCwgc291cmNlLCB0YXJnZXQsIGRlZXApKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcblxyXG5leHBvcnQgeyBleHRlbmQgfTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9