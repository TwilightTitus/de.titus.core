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
/* harmony import */ var _node_modules_dom_api_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/dom-api-extension */ "./node_modules/dom-api-extension/index.js");
/* harmony import */ var _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ObjectUtils */ "./src/utils/ObjectUtils.js");
/* harmony import */ var _ExpressionResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpressionResolver */ "./src/ExpressionResolver.js");




const expressionResolver = _ExpressionResolver__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].DEFAULT;

const STATE = {
	FINISHED : "$$eventBind.FINISHED$$"
};
const FINISHEDSTATE = {
    FAIL : "fail",
    READY : "ready"
};

const Executer = function(anEvent) {
	console.log(arguments);	
	let element = anEvent.currentTarget;
	let data = element.data("de.titus.core.eventBind");
	if (data.preventDefault)
		anEvent.preventDefault();
	if (data.stopPropagation)
		anEvent.stopPropagation();

	let args = Array.from(arguments);
	if (typeof args !== "undefined" && args.length >= 1 && typeof anEvent.data !== "undefined")
		args.splice(1, 0, anEvent.data);
	
	if (typeof data.action !== 'undefined') {
		let action = expressionResolver.resolveExpression(data.action, anEvent.data, undefined);
		if (typeof action === "function")			
			action.apply(action, args);
	}
	else if (typeof data.delegation !== 'undefined')
		element.trigger(data.delegation, args);

	return !anEvent.isDefaultPrevented();
};


let eventBind = function(anElement, aContext) {
	if(typeof anElement === "undefined" || (anElement instanceof NodeList && anElement.length == 0))
		return;
	
	let result = {
	    preventDefault : (typeof anElement.attr("event-prevent-default") !== "undefined"),
	    stopPropagation : (typeof anElement.attr("event-stop-propagation") !== "undefined")
	};
	result.eventType = anElement.attr("event-type");
	if (typeof result.eventType === 'undefined'){
		anElement.data(STATE.FINISHED, FINISHEDSTATE.FAIL);
		return;
	}
	
	result.action = anElement.attr("event-action");
	result.delegation = anElement.attr("event-delegation");

	if (typeof (result.action || result.delegation) === 'undefined') {
		anElement.data(STATE.FINISHED, FINISHEDSTATE.FAIL);
		return;
	}

	result.eventData = anElement.attr("event-data");
	if (typeof result.eventData !== 'undefined' && result.eventData.length > 0)
		result.eventData = expressionResolver.resolveExpression(eventData, aContext, {});
	else if (typeof aContext !== 'undefined')
		result.eventData = Object(_utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__["default"])({}, aContext);

	if (typeof result.eventData !== 'undefined')
		anElement.on(result.eventType, null, result.eventData, Executer);
	else
		anElement.on(result.eventType, Executer);
	
	anElement.data(STATE.FINISHED, FINISHEDSTATE.READY);
	return result;
};

let observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(node) {
			if (node.nodetype != Node.TEXT_NODE) {
				if(node.is("[event-type]"))
					eventBind(node);				
				eventBind(node.find("[event-type]"));
			}
		});
	});
});

// pass in the target node, as well as the observer options
observer.observe(find("[event-autorun]"),  {
    attributes : true,
    childList : true,
    subtree : true,
    characterData : false
});

ready(function() {
	eventBind(find("[event-autorun]"));
});
/* harmony default export */ __webpack_exports__["a"] = (eventBind);

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

		let settings = Object(_utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "b"])({}, theSettings, DEFAULTS.trimTextLength);

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
		let settings = Object(_utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "b"])({}, theSettings ,DEFAULTS.formatToHtml);
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
/*! exports used: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return extend; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvSlF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0hUTUxJbnB1dEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vSFRNTFNlbGVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL0Jhc2ljUXVlcnlTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvRGF0YVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvTm9kZVF1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9wb2x5ZmlsbC9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL3BvbHlmaWxsL0N1c3RvbUV2ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvdXRpbHMvRGVsZWdhdGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL3V0aWxzL0V4dGVuZFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Db252ZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50QmluZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9OYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2luZ1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9TcGVjaWFsRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9TdHJpbmdVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVVJMLmpzIiwid2VicGFjazovLy8uL3NyYy9VVUlELmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxsL0N1c3RvbUV2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbC9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWdleC9NYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWdleC9SZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvT2JqZWN0VXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdD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RUEsa0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7O0FBR2tCIiwiZmlsZSI6ImRlLnRpdHVzLmNvcmUtMi4wLjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zcmMvaW5kZXhcIjsiLCJpbXBvcnQgXCIuL3NyYy9pbmRleFwiOyIsIihmdW5jdGlvbihHbG9iYWwpIHtcclxuXHRjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcblxyXG5cdEdsb2JhbC5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuZmluZC5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cclxuXHRHbG9iYWwucmVhZHkgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5yZWFkeS5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cclxuXHRHbG9iYWwuY3JlYXRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmchXCIpO1xyXG5cclxuXHRcdGxldCBib2R5ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhhcmd1bWVudHNbMF0udHJpbSgpLFxyXG5cdFx0XHRcdGFyZ3VtZW50c1sxXSB8fCBcInRleHQvaHRtbFwiKS5maW5kKFwiYm9keVwiKTtcclxuXHRcdGxldCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cdFx0bGV0IG5vZGVzID0gYm9keS5jaGlsZE5vZGVzO1xyXG5cdFx0d2hpbGUgKG5vZGVzLmxlbmd0aCAhPSAwKVxyXG5cdFx0XHRmcmFnLmFwcGVuZChub2Rlc1swXSk7XHJcblxyXG5cdFx0cmV0dXJuIGZyYWcuY2hpbGROb2RlcztcclxuXHR9O1xyXG59KSh3aW5kb3cgfHwgZ2xvYmFsKTsiLCJpbXBvcnQgXCIuL0dsb2JhbFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MRWxlbWVudFwiO1xyXG4oZnVuY3Rpb24oR2xvYmFsKSB7XHJcblx0LyoqXHJcblx0ICogSlF1ZXJ5IHByZXZlbnQganF1ZXJ5XHJcblx0ICovXHJcblx0Y29uc3QgJCA9IEdsb2JhbC4kID0gR2xvYmFsLkpRdWVyeSA9IEdsb2JhbC5qUXVlcnkgPSBHbG9iYWwuJCB8fCBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiBkb2N1bWVudDtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1x0XHRcdFxyXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdHJldHVybiBHbG9iYWwucmVhZHkuYXBwbHkoR2xvYmFsLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0aWYgKC88W148XSs+L2cudGVzdChhcmd1bWVudHNbMF0pKVxyXG5cdFx0XHRcdFx0cmV0dXJuIEdsb2JhbC5jcmVhdGUuYXBwbHkoR2xvYmFsLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJldHVybiBHbG9iYWwuZmluZC5hcHBseShHbG9iYWwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXR1cm4gYXJndW1lbnRzWzBdO1xyXG5cdFx0fVxyXG5cdH07XHJcbn0pKHdpbmRvdyB8fCBnbG9iYWwpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgQmFzaWNRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9CYXNpY1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgRXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQucHJvdG90eXBlLCBCYXNpY1F1ZXJ5U3VwcG9ydCwgRXZlbnRTdXBwb3J0LCBSZWFkeUV2ZW50U3VwcG9ydCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xyXG5cdGRvY3VtZW50LnRyaWdnZXIoXCJyZWFkeVwiKTtcclxufSk7XHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBCYXNpY1F1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0Jhc2ljUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBOb2RlUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTm9kZVF1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgSHRtbENsYXNzU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnRcIjtcclxuaW1wb3J0IEV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0V2ZW50U3VwcG9ydFwiO1xyXG5pbXBvcnQgU2hvd0hpZGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxFbGVtZW50LnByb3RvdHlwZSxCYXNpY1F1ZXJ5U3VwcG9ydCxOb2RlUXVlcnlTdXBwb3J0LEh0bWxDbGFzc1N1cHBvcnQsRXZlbnRTdXBwb3J0LFNob3dIaWRlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsVmFsdWVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MU2VsZWN0RWxlbWVudC5wcm90b3R5cGUsVmFsdWVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IERhdGFTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRGF0YVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZS5wcm90b3R5cGUsRGF0YVN1cHBvcnQsTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEZWxlZ2F0ZXJCdWlsZGVyIGZyb20gXCIuLi91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCBMaXN0U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZUxpc3QucHJvdG90eXBlLCBMaXN0U3VwcG9ydCk7XHJcblxyXG5EZWxlZ2F0ZXJCdWlsZGVyKGZ1bmN0aW9uKGFGdW5jdGlvbk5hbWUsIHRoZUFyZ3VtZW50cyl7XHJcblx0bGV0IG5vZGVzID0gdGhpcy52YWx1ZXMoKTtcclxuXHRsZXQgbm9kZSA9IG5vZGVzLm5leHQoKTtcclxuXHRsZXQgcmVzdWx0cyA9IFtdO1xyXG5cdHdoaWxlKG5vZGUgJiYgbm9kZS52YWx1ZSl7XHJcblx0XHRub2RlID0gbm9kZS52YWx1ZTtcclxuXHRcdGlmKHR5cGVvZiBub2RlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBub2RlW2FGdW5jdGlvbk5hbWVdID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gbm9kZVthRnVuY3Rpb25OYW1lXS5hcHBseShub2RlLCB0aGVBcmd1bWVudHMpO1xyXG5cdFx0XHRpZih0eXBlb2YgcmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiICYmIHJlc3VsdCAhPSBudWxsKXtcclxuXHRcdFx0XHRpZihyZXN1bHQgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdFx0XHRcdHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChyZXN1bHQpO1xyXG5cdFx0XHRcdGVsc2UgaWYocmVzdWx0IGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KVxyXG5cdFx0XHR9XHRcdFxyXG5cdFx0fVxyXG5cdFx0bm9kZSA9IG5vZGVzLm5leHQoKTtcdFx0XHJcblx0fVxyXG5cdFxyXG5cdGlmKHJlc3VsdHMubGVuZ3RoID09IDApXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdGVsc2UgaWYocmVzdWx0c1swXSBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHRzKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gcmVzdWx0cztcdFxyXG59LE5vZGVMaXN0LnByb3RvdHlwZSwgTm9kZS5wcm90b3R5cGUsIEhUTUxFbGVtZW50LnByb3RvdHlwZSwgSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsIEVsZW1lbnQucHJvdG90eXBlKTtcclxuXHJcblxyXG5Ob2RlTGlzdC5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiAgYXJndW1lbnRzWzBdIGluc3RhbmNlb2YgTm9kZUxpc3Qpe1xyXG5cdFx0cmV0dXJuIGFyZ3VtZW50c1swXTtcdFx0XHJcblx0fVxyXG5cdGVsc2V7XHJcblx0XHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGxldCBpbnRlcm5hbCA9IHtcclxuXHRcdFx0bGVuZ3RoOiB7dmFsdWU6IDB9XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRsZXQgbGlzdCA9IEFycmF5LmZyb20oYXJncy5zaGlmdCgpKTtcdFx0XHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgbGlzdFtpXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsaXN0W2ldIGluc3RhbmNlb2YgTm9kZSl7XHJcblx0XHRcdFx0XHRpbnRlcm5hbFtpXSA9IHt2YWx1ZTogbGlzdFtpXSwgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdFx0XHRpbnRlcm5hbC5sZW5ndGgudmFsdWUrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcclxuXHRcdHJldHVybiBPYmplY3QuY3JlYXRlKE5vZGVMaXN0LnByb3RvdHlwZSxpbnRlcm5hbCApO1xyXG5cdH1cclxufSIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRjb25zdCBwYXJlbnRTZWxlY3RvciA9IC86cGFyZW50KFxcKFxcXCIoW15cXCldKilcXFwiXFwpKT8vaTtcclxuXHRcclxuXHRQcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uKGFTZWxlY3Rvcikge1xyXG5cdFx0bGV0IG1hdGNoID0gcGFyZW50U2VsZWN0b3IuZXhlYyhhU2VsZWN0b3IpO1xyXG5cdFx0aWYobWF0Y2gpe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gdGhpcztcclxuXHRcdFx0aWYobWF0Y2guaW5kZXggPiAwKXtcclxuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yLnN1YnN0cigwLCBtYXRjaC5pbmRleCkpO1xyXG5cdFx0XHRcdGlmKHJlc3VsdC5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0XHRpZih0eXBlb2YgbWF0Y2hbMl0gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnBhcmVudChtYXRjaFsyXSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucGFyZW50KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZih0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBuZXh0U2VsZWN0b3IgPSBhU2VsZWN0b3Iuc3Vic3RyKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKS50cmltKCk7XHJcblx0XHRcdGlmKG5leHRTZWxlY3Rvci50cmltKCkubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0LmZpbmQobmV4dFNlbGVjdG9yKTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHRcdFxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvcik7XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuXHJcbiIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRQcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl9fZGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHR0aGlzLl9fZGF0YSA9IHt9O1xyXG5cdFx0XHRpZih0eXBlb2YgdGhpcy5kYXRhc2V0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdGZvciAobmFtZSBpbiB0aGlzLmRhdGFzZXQpXHJcblx0XHRcdFx0XHR0aGlzLl9fZGF0YVtuYW1lXSA9IHRoaXMuZGF0YXNldFtuYW1lXTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2RhdGE7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLl9fZGF0YVthcmd1bWVudHNbMF1dIDtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwidW5kZWZpbmVkXCIgfHwgYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdGRlbGV0ZSB0aGlzLl9fZGF0YVthcmd1bWVudHNbMF1dO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLl9fZGF0YVthcmd1bWVudHNbMF1dID0gYXJndW1lbnRzWzFdO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBcIi4uLy4uL3BvbHlmaWxsL0N1c3RvbUV2ZW50XCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0Y29uc3QgV3JhcHBlZEV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uKGFDb25maWcsIGFDYWxsYmFjayAsYUV2ZW50KXtcclxuXHRcdGlmKHR5cGVvZiBhQ29uZmlnLmZpbHRlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhYUV2ZW50LnRhcmdldC5pcyhhQ29uZmlnLmZpbHRlcikpXHRcdFxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRcclxuXHRcdGxldCBhcmdzID0gW2FFdmVudF07XHJcblx0XHRpZih0eXBlb2YgYUNvbmZpZy5kYXRhICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRhcmdzID0gYXJncy5jb25jYXQoYUNvbmZpZy5kYXRhKTtcclxuXHRcdFxyXG5cdFx0bGV0IHJlc3VsdCA9IGFDYWxsYmFjay5hcHBseShhQ2FsbGJhY2ssIGFyZ3MpO1xyXG5cdFx0aWYoYUNvbmZpZy5zaW5nbGVDYWxsKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoYUNhbGxiYWNrKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcdFx0XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRjb25zdCBhZGRFdmVudExpc3RlbmVyID0gUHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XHJcblx0UHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHJcblx0XHR0aGlzLm9uKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLm9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRvbyBsZXNzIGFyZ3VtZW50cyFcIik7XHJcblx0XHRcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5fX2NhbGxiYWNrTWFwID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHR0aGlzLl9fY2FsbGJhY2tNYXAgPSB7fTtcclxuXHJcblx0XHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGxldCBldmVudHMgPSBhcmdzLnNoaWZ0KCkuc3BsaXQoLyhcXHMrKXwoXFxzKixcXHMqKS8pO1xyXG5cdFx0bGV0IGhhbmRsZXJDb25maWcgPSB7XHJcblx0XHRcdGZpbHRlciA6ICh0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IGFyZ3Muc2hpZnQoKS5zcGxpdCgvXFxzKixcXHMqLykgOiB1bmRlZmluZWQpLFxyXG5cdFx0XHRkYXRhIDogKHR5cGVvZiBhcmdzWzBdICE9PSBcImZ1bmN0aW9uXCIgPyBhcmdzLnNoaWZ0KCkgOiB1bmRlZmluZWQpXHJcblx0XHR9O1xyXG5cdCAgICBsZXQgY2FsbGJhY2sgPSBhcmdzLnNoaWZ0KCk7XHJcblx0ICAgIFxyXG5cdCAgICBoYW5kbGVyQ29uZmlnLnNpbmdsZUNhbGwgPSAodHlwZW9mIGFyZ3NbMF0gIT09IFwiYm9vbGVhblwiID8gYXJncy5zaGlmdCgpIDogZmFsc2UpO1xyXG5cclxuXHRcdGxldCBldmVudE1hcCA9IHt9O1xyXG5cdFx0ZXZlbnRzLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgY29uZmlnLCBjYWxsYmFjaywgZXZlbnQpe1xyXG5cdFx0XHRsZXQgd3JhcHBlZEV2ZW50SGFuZGxlciA9IFdyYXBwZWRFdmVudEhhbmRsZXIuYmluZCh0aGlzLCBjb25maWcsIGNhbGxiYWNrKTtcclxuXHRcdFx0cmVzdWx0W2V2ZW50XSA9IHdyYXBwZWRFdmVudEhhbmRsZXI7XHRcdFx0XHJcblx0XHRcdGFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCwgd3JhcHBlZEV2ZW50SGFuZGxlciwgdHJ1ZSk7XHJcblx0XHRcdFxyXG5cdFx0fSkuYmluZCh0aGlzLCBldmVudE1hcCwgaGFuZGxlckNvbmZpZywgY2FsbGJhY2spKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5fX2NhbGxiYWNrTWFwW2NhbGxiYWNrXSA9IGV2ZW50TWFwO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1x0XHJcblx0XHJcblx0Y29uc3QgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IFByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xyXG5cdFByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gUHJvdG90eXBlLnJlbW92ZU9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAxIHx8IHR5cGVvZiB0aGlzLl9fY2FsbGJhY2tNYXAgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHJldHVybiByZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0bGV0IGV2ZW50cyA9IHVuZGVmaW5lZDtcclxuXHRcdGxldCBjYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuXHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdGV2ZW50cyA9IGFyZ3VtZW50c1swXS5zcGxpdCgvKFxccyspfChcXHMqLFxccyopLyk7XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0Y2FsbGJhY2sgPSBhcmd1bWVudHNbMF0uc2hpZnQoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgYXJndW1lbnQhIC0+IGNhbGwgZnVuY3Rpb24oW2V2ZW50fGhhbmRsZXJdKVwiKTtcclxuXHRcdFxyXG5cdFx0bGV0IHJlbW92YWxIYW5kbGVyID0gW107XHJcblx0XHRpZih0eXBlb2YgZXZlbnRzID09PSBcInVuZGVmaW5lZFwiKXtcclxuXHRcdFx0ZXZlbnRNYXAgPSB0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xyXG5cdFx0XHRpZih0eXBlb2YgZXZlbnRNYXAgIT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRcdGV2ZW50TWFwLmdldE93blByb3BlcnR5TmFtZXMoKS5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIGV2ZW50TWFwLCBldmVudCl7XHJcblx0XHRcdFx0XHRsZXQgaGFuZGxlciA9IGV2ZW50TWFwW2V2ZW50XTtcclxuXHRcdFx0XHRcdGlmKHR5cGVvZiBoYW5kbGVyICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQucHVzaChoYW5kbGVyKTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCByZW1vdmFsSGFuZGxlciwgZXZlbnRNYXApKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5fX2NhbGxiYWNrTWFwW2NhbGxiYWNrXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGV2ZW50cy5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIGV2ZW50KXtcclxuXHRcdFx0XHRPYmplY3QuZ2V0UHJvcGVydHlOYW1lcyh0aGlzLl9fY2FsbGJhY2tNYXApLmZvckVhY2goKGZ1bmN0aW9uKGFFdmVudCwgQ2FsbGJhY2spe1xyXG5cdFx0XHRcdFx0bGV0IGV2ZW50TWFwID0gdGhpcy5fX2NhbGxiYWNrTWFwW0NhbGxiYWNrXTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBldmVudE1hcFthRXZlbnRdO1xyXG5cdFx0XHRcdFx0aWYoZXZlbnRNYXAuZ2V0T3duUHJvcGVydHlOYW1lcygpID09IDApXHJcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLl9fY2FsbGJhY2tNYXBbQ2FsbGJhY2tdO1xyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgZXZlbnQpKTtcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRcclxuXHRQcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgZXZlbnQgPSB1bmRlZmluZWQ7XHJcblx0XHRpZih0eXBlb2YgdGhpc1tcIm9uXCIgKyBhcmd1bWVudHNbMF1dID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XHJcblx0XHRcdGV2ZW50LmluaXRFdmVudChhcmd1bWVudHNbMF0sIHRydWUsIHRydWUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRldmVudCA9IG5ldyBDdXN0b21FdmVudChhcmd1bWVudHNbMF0sICB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogYXJndW1lbnRzWzFdIH0pO1xyXG5cdFx0XHJcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuIiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5hZGRDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHRcdFxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy50b29nbGVDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcdFx0XHJcblx0UHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRpZih0aGlzW2ldID09IGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH07XHJcblx0XHJcblx0aWYodHlwZW9mIFByb3RvdHlwZS5mb3JFYWNoID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0UHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZvckVhY2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbMF07XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBcIi4uLy4uL3BvbHlmaWxsL0FycmF5XCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblxyXG5cdFByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGVzKCkgPyAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IHt9O1xyXG5cdFx0XHRcdHRoaXMuZ2V0QXR0cmlidXRlTmFtZXMoKS5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIG5hbWUpIHtcclxuXHRcdFx0XHRcdHJlc3VsdFtuYW1lXSA9IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpO1xyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgcmVzdWx0KSk7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSkuY2FsbCh0aGlzKSA6IHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBub2RlcyA9IHRoaXMuY2hpbGROb2Rlc1xyXG5cdFx0d2hpbGUobm9kZXMubGVuZ3RoICE9IDApXHRcdFx0XHJcblx0XHRcdG5vZGVzWzBdLnJlbW92ZSh0cnVlKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuY29udGVudCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUuaHRtbCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHRcdFx0XHJcblx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRpZihhcmd1bWVudHNbMF0pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMub3V0ZXJIVE1MO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBcclxuXHRcdFx0QXJyYXkuZnJvbShhcmd1bWVudHMpLmZvckVhY2goKGZ1bmN0aW9uKGNvbnRlbnQpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0dGhpcy5pbm5lckhUTUwgPSBjb250ZW50O1xyXG5cdFx0XHRcdGVsc2UgaWYoY29udGVudCBpbnN0YW5jZW9mIEVsZW1lbnQpe1xyXG5cdFx0XHRcdFx0dGhpcy5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQoY29udGVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcdFx0XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgXCIuLi8uLi9wb2x5ZmlsbC9BcnJheVwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdFxyXG5cdFByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKXtcclxuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYXRjaGVzKGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXS5sZW5ndGggPT09IFwibnVtYmVyXCIpe1xyXG5cdFx0XHRcdGxldCBmaWx0ZXIgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGZpbHRlci5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRcdGlmKHRoaXMubWF0Y2hlcyhmaWx0ZXJbaV0pKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIil7XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRcdHdoaWxlKCFwYXJlbnQuaXMoYXJndW1lbnRzWzBdKSlcclxuXHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50KGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucGFyZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xyXG5cdFx0bGV0IHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHdoaWxlKHBhcmVudCl7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHBhcmVudCk7XHJcblx0XHRcdHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHQpO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLnNlbGVjdG9yID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHR5cGVvZiB0aGlzLmlkID09PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMuaWQubGVuZ3RoID09IDApe1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcclxuXHRcdFx0aWYocGFyZW50IGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgIERvY3VtZW50RnJhZ21lbnQpXHJcblx0XHRcdFx0cGFyZW50ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLmxvY2FsTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRpZih0eXBlb2YgcGFyZW50ICE9PSBcInVuZGVmaW5lZFwiKXtcclxuXHRcdFx0XHRsZXQgc2FtZVRhZ1NpYmxpbmdzID0gcGFyZW50LmZpbmQoXCI6c2NvcGU+XCIgKyBzZWxlY3Rvcik7XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNhbWVUYWdTaWJsaW5ncyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBzYW1lVGFnU2libGluZ3MuaW5kZXhPZih0aGlzKSArIDE7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPiAwKVxyXG5cdFx0XHRcdFx0XHRzZWxlY3RvciArPSAnOm50aC1jaGlsZCgnICsgaW5kZXggKyAnKSc7XHJcblx0XHRcdFx0fVx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHBhcmVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IHBhcmVudC5zZWxlY3RvcigpICsgXCI+XCIgKyBzZWxlY3RvciA6IHNlbGVjdG9yO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gXCIjXCIgKyB0aGlzLmlkO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLmNsb3Nlc3RzID0gZnVuY3Rpb24oYVF1ZXJ5KSB7XHJcblx0XHRpZih0aGlzLmlzKGFRdWVyeSkpXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0ZWxzZXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IHRoaXMuZmluZChhUXVlcnksIHRydWUpO1xyXG5cdFx0XHRpZihyZXN1bHQubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50KCk7XHJcblx0XHRcdGlmKHR5cGVvZiBwYXJlbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgcGFyZW50ICE9IGRvY3VtZW50KVxyXG5cdFx0XHRcdHJldHVybiBwYXJlbnQuY2xvc2VzdChhUXVlcnkpO1xyXG5cdFx0fVx0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24oYVF1ZXJ5KXtcclxuXHRcdGxldCByZXN1bHQgPSB0aGlzLmNsb3Nlc3RzKGFRdWVyeSk7XHJcblx0XHRpZih0eXBlb2YgcmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0WzBdO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cclxuXHRQcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbihhRnVuY3Rpb24sIG9uY2Upe1x0XHJcblx0XHR0aGlzLm9uKFwicmVhZHlcIiwgYUZ1bmN0aW9uLCBvbmNlKTtcclxuXHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKVx0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJyZWFkeVwiKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblxyXG5cdFByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMuX19pc2hpZGUpe1xyXG5cdFx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9fZGlzcGxheSB8fCBcIlwiO1xyXG5cdFx0XHR0aGlzLl9faXNoaWRlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKCF0aGlzLl9faXNoaWRlKXtcclxuXHRcdFx0dGhpcy5fX2Rpc3BsYXkgPSB0aGlzLnN0eWxlLmRpc3BsYXk7XHJcblx0XHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHR0aGlzLl9faXNoaWRlID0gdHJ1ZTtcclxuXHRcdH1cdFxyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS50b2dnbGVTaG93ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMuX19pc2hpZGUpXHJcblx0XHRcdHJldHVybiB0aGlzLnNob3coKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMuaGlkZSgpO1xyXG5cdH07XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi4vLi4vcG9seWZpbGwvQXJyYXlcIjtcclxuY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdGNvbnN0IElucHV0VHlwZXMgPVtcclxuXHRcdHtcclxuXHRcdFx0c2VsZWN0b3IgOiBcInNlbGVjdFwiLFxyXG5cdFx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBbXTtcclxuXHRcdFx0XHR0aGlzLmZpbmQoXCJvcHRpb246Y2hlY2tlZFwiLCB0cnVlKS5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIG9wdGlvbil7XHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaChvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgcmVzdWx0KSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIgJiYgYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcdFx0XHRcdFxyXG5cdFx0XHRcdGVsc2UgaWYocmVzdWx0Lmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdFswXTtcclxuXHRcdFx0XHRlbHNlIGlmKHJlc3VsdC5sZW5ndGggPiAxKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQgOiBmdW5jdGlvbigpe1x0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHZhbHVlcyA9IFtdO1xyXG5cdFx0XHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdChhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdFx0XHR2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5maW5kKFwib3B0aW9uXCIsIHRydWUpLmZvckVhY2goKGZ1bmN0aW9uKHZhbHVlcywgb3B0aW9uKXtcclxuXHRcdFx0XHRcdGxldCBjaGVjayA9IHZhbHVlcy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPiAtMTtcclxuXHRcdFx0XHRcdGlmKGNoZWNrKVxyXG5cdFx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHZhbHVlcykpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHNlbGVjdG9yIDogXCJvcHRpb25cIixcclxuXHRcdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpZih0aGlzLnNlbGVjdGVkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkID0gYVZhbHVlO1xyXG5cdFx0XHRcdGVsc2UgaWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcdFx0XHRcdFxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRzZWxlY3RvciA6IFwiaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXVwiLFxyXG5cdFx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiB0aGlzLnZhbHVlID09PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMudmFsdWUgPT0gXCJvblwiKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tlZDtcclxuXHRcdFx0XHRlbHNlIGlmKHRoaXMuY2hlY2tlZClcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1x0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWU7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgYVZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XTtcclxuXHRcclxuXHRjb25zdCBEZWZhdWx0SW5wdXRUeXBlID0ge1xyXG5cdFx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiaW5wdXRcIik7XHJcblx0XHRcdH1cdFxyXG5cdH07XHJcblx0XHJcblx0Y29uc3QgZ2V0SW5wdXRUeXBlID0gZnVuY3Rpb24oYUVsZW1lbnQpe1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IElucHV0VHlwZXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdGlmKGFFbGVtZW50LmlzKElucHV0VHlwZXNbaV0uc2VsZWN0b3IpKVxyXG5cdFx0XHRcdHJldHVybiBJbnB1dFR5cGVzW2ldO1x0XHRcclxuXHRcdHJldHVybiBEZWZhdWx0SW5wdXRUeXBlO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHR5cGUgPSBnZXRJbnB1dFR5cGUodGhpcyk7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRyZXR1cm4gdHlwZS5nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHR5cGUuc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cdFx0XHJcblx0fTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJcclxuaW1wb3J0IFwiLi9kb20vTm9kZS5qc1wiO1xyXG5pbXBvcnQgXCIuL2RvbS9Eb2N1bWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MSW5wdXRFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxTZWxlY3RFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVMaXN0XCI7XHJcbmltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbmltcG9ydCBcIi4vSlF1ZXJ5XCI7XHJcbiIsImlmICghQXJyYXkuZnJvbSkge1xyXG5cdEFycmF5LmZyb20gPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCByZXN1bHQgPSBbXTtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGxldCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBhcmcubGVuZ3RoID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGFyZy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBhcmdbal0gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goYXJnW2pdKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJndW1lbnRzWzBdKS5mb3JFYWNoKFxyXG5cdFx0XHRcdFx0XHRcdChmdW5jdGlvbihhUmVzdWx0LCBhTmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFyc2VJbnQoYU5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIHRoaXNbYU5hbWVdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKHRoaXNbYU5hbWVdKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KS5iaW5kKGFyZ3VtZW50c1swXSwgcmVzdWx0KSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcbn07IiwiaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgIT09IFwiZnVuY3Rpb25cIikge1xyXG5cdGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcclxuXHRcdHBhcmFtcyA9IHBhcmFtcyB8fCB7XHJcblx0XHQgICAgYnViYmxlcyA6IGZhbHNlLFxyXG5cdFx0ICAgIGNhbmNlbGFibGUgOiBmYWxzZSxcclxuXHRcdCAgICBkZXRhaWwgOiBudWxsXHJcblx0XHR9O1xyXG5cdFx0bGV0IGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG5cdFx0ZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcclxuXHRcdHJldHVybiBldnQ7XHJcblx0fVxyXG5cdEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XHJcblx0d2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XHJcbn1cclxuIiwiY29uc3QgRGVsZWdhdGVyQnVpbGRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGxldCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHRsZXQgc291cmNlID0gYXJncy5zaGlmdCgpO1xyXG5cdGFyZ3MuZm9yRWFjaCgoZnVuY3Rpb24oYVNvdXJjZSwgYUNhbGxiYWNrLCBhVGFyZ2V0KXtcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFUYXJnZXQpLmZvckVhY2goXHJcblx0XHRcdFx0KGZ1bmN0aW9uKGFTb3VyY2UsIGFUYXJnZXQsYUNhbGxiYWNrLCAgYU5hbWUpIHtcclxuXHRcdFx0XHRcdGxldCBwcm9wID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhVGFyZ2V0LCBhTmFtZSk7XHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIGFTb3VyY2VbYU5hbWVdID09PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBwcm9wLnZhbHVlID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0XHRcdGFTb3VyY2VbYU5hbWVdID0gZnVuY3Rpb24oKXtyZXR1cm4gYUNhbGxiYWNrLmNhbGwodGhpcywgYU5hbWUsIGFyZ3VtZW50cyk7fTtcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pLmJpbmQobnVsbCwgYVNvdXJjZSwgYVRhcmdldCwgYUNhbGxiYWNrKSk7XHJcblx0fSkuYmluZChudWxsLCBzb3VyY2UsIGNhbGxiYWNrKSk7XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERlbGVnYXRlckJ1aWxkZXI7IiwiaW1wb3J0IFwiLi4vcG9seWZpbGwvQXJyYXlcIjtcclxuXHJcbmNvbnN0IGV4dGVuZFByb3RvdHlwZSA9IGZ1bmN0aW9uKCl7XHJcblx0bGV0IGFyZ3MgPSBcdEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgcHJvdG90eXBlID0gYXJncy5zaGlmdCgpOyBcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0bGV0IGV4dGVuZGVyID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0ZXh0ZW5kZXIocHJvdG90eXBlKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHRlbmRQcm90b3R5cGU7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibGV0IENvbnZlcnRlciA9IHtcclxuXHR4bWxUb0pzb24gOiBmdW5jdGlvbihhTm9kZSkge1xyXG5cdFx0Ly8gQ3JlYXRlIHRoZSByZXR1cm4gb2JqZWN0XHJcblx0XHRsZXQgb2JqID0ge307XHJcblx0XHRpZiAoYU5vZGUubm9kZVR5cGUgPT0gMSB8fCBhTm9kZS5ub2RlVHlwZSA9PSA5KSB7IC8vIGVsZW1lbnRcclxuXHRcdFx0Ly8gZG8gYXR0cmlidXRlc1xyXG5cdFx0XHRpZiAoYU5vZGUuYXR0cmlidXRlcyAhPSB1bmRlZmluZWQgJiYgYU5vZGUuYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0bGV0IGF0dHJpYnV0ZXMgPSB7fTtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFOb2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCBhdHRyaWJ1dGUgPSBhTm9kZS5hdHRyaWJ1dGVzLml0ZW0oaSk7XHJcblx0XHRcdFx0XHRhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5ub2RlTmFtZV0gPSBhdHRyaWJ1dGUubm9kZVZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRvYmpbXCJAYXR0cmlidXRlc1wiXSA9IGF0dHJpYnV0ZXM7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoYU5vZGUubm9kZVR5cGUgPT0gMyB8fCBhTm9kZS5ub2RlVHlwZSA9PSA0KSAvLyB0ZXh0XHJcblx0XHRcdHJldHVybiBhTm9kZS50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG5cdFx0Ly8gZG8gY2hpbGRyZW5cclxuXHRcdGlmIChhTm9kZS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuXHRcdFx0bGV0IHRleHRDb250ZW50ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRsZXQgaGFzQ2hpbGRyZW4gPSBmYWxzZTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhTm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IGl0ZW0gPSBhTm9kZS5jaGlsZE5vZGVzLml0ZW0oaSk7XHJcblx0XHRcdFx0aWYgKGl0ZW0ubm9kZVR5cGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0aGFzQ2hpbGRyZW4gPSB0cnVlO1xyXG5cdFx0XHRcdFx0bGV0IG5vZGVOYW1lID0gaXRlbS5ub2RlTmFtZTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2Ygb2JqW25vZGVOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdFx0XHRvYmpbbm9kZU5hbWVdID0gQ29udmVydGVyLnhtbFRvSnNvbihpdGVtKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmICh0eXBlb2Ygb2JqW25vZGVOYW1lXS5wdXNoID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IG9sZCA9IG9ialtub2RlTmFtZV07XHJcblx0XHRcdFx0XHRcdFx0b2JqW25vZGVOYW1lXSA9IFtdO1xyXG5cdFx0XHRcdFx0XHRcdG9ialtub2RlTmFtZV0ucHVzaChvbGQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdG9ialtub2RlTmFtZV0ucHVzaChDb252ZXJ0ZXIueG1sVG9Kc29uKGl0ZW0pKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKChpdGVtLm5vZGVUeXBlID09IDMgfHwgaXRlbS5ub2RlVHlwZSA9PSA0KVxyXG5cdFx0XHRcdFx0XHQmJiBpdGVtLnRleHRDb250ZW50ICE9IFwiXCIpXHJcblx0XHRcdFx0XHR0ZXh0Q29udGVudCA9ICh0ZXh0Q29udGVudCA/IHRleHRDb250ZW50ICsgaXRlbS50ZXh0Q29udGVudFxyXG5cdFx0XHRcdFx0XHRcdDogaXRlbS50ZXh0Q29udGVudCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0ZXh0Q29udGVudCkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2Ygb2JqW1wiQGF0dHJpYnV0ZXNcIl0gPT09IFwidW5kZWZpbmVkXCIgJiYgIWhhc0NoaWxkcmVuKVxyXG5cdFx0XHRcdFx0b2JqID0gdGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG9iai50ZXh0ID0gdGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb2JqO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb252ZXJ0ZXI7IiwiaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBleHRlbmQgZnJvbSBcIi4vdXRpbHMvT2JqZWN0VXRpbHNcIjtcclxuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiLi9FeHByZXNzaW9uUmVzb2x2ZXJcIjtcclxuXHJcbmNvbnN0IGV4cHJlc3Npb25SZXNvbHZlciA9IEV4cHJlc3Npb25SZXNvbHZlci5ERUZBVUxUO1xyXG5cclxuY29uc3QgU1RBVEUgPSB7XHJcblx0RklOSVNIRUQgOiBcIiQkZXZlbnRCaW5kLkZJTklTSEVEJCRcIlxyXG59O1xyXG5jb25zdCBGSU5JU0hFRFNUQVRFID0ge1xyXG4gICAgRkFJTCA6IFwiZmFpbFwiLFxyXG4gICAgUkVBRFkgOiBcInJlYWR5XCJcclxufTtcclxuXHJcbmNvbnN0IEV4ZWN1dGVyID0gZnVuY3Rpb24oYW5FdmVudCkge1xyXG5cdGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XHRcclxuXHRsZXQgZWxlbWVudCA9IGFuRXZlbnQuY3VycmVudFRhcmdldDtcclxuXHRsZXQgZGF0YSA9IGVsZW1lbnQuZGF0YShcImRlLnRpdHVzLmNvcmUuZXZlbnRCaW5kXCIpO1xyXG5cdGlmIChkYXRhLnByZXZlbnREZWZhdWx0KVxyXG5cdFx0YW5FdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGlmIChkYXRhLnN0b3BQcm9wYWdhdGlvbilcclxuXHRcdGFuRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGlmICh0eXBlb2YgYXJncyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcmdzLmxlbmd0aCA+PSAxICYmIHR5cGVvZiBhbkV2ZW50LmRhdGEgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRhcmdzLnNwbGljZSgxLCAwLCBhbkV2ZW50LmRhdGEpO1xyXG5cdFxyXG5cdGlmICh0eXBlb2YgZGF0YS5hY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRsZXQgYWN0aW9uID0gZXhwcmVzc2lvblJlc29sdmVyLnJlc29sdmVFeHByZXNzaW9uKGRhdGEuYWN0aW9uLCBhbkV2ZW50LmRhdGEsIHVuZGVmaW5lZCk7XHJcblx0XHRpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJmdW5jdGlvblwiKVx0XHRcdFxyXG5cdFx0XHRhY3Rpb24uYXBwbHkoYWN0aW9uLCBhcmdzKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRhdGEuZGVsZWdhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRlbGVtZW50LnRyaWdnZXIoZGF0YS5kZWxlZ2F0aW9uLCBhcmdzKTtcclxuXHJcblx0cmV0dXJuICFhbkV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xyXG59O1xyXG5cclxuXHJcbmxldCBldmVudEJpbmQgPSBmdW5jdGlvbihhbkVsZW1lbnQsIGFDb250ZXh0KSB7XHJcblx0aWYodHlwZW9mIGFuRWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAoYW5FbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgJiYgYW5FbGVtZW50Lmxlbmd0aCA9PSAwKSlcclxuXHRcdHJldHVybjtcclxuXHRcclxuXHRsZXQgcmVzdWx0ID0ge1xyXG5cdCAgICBwcmV2ZW50RGVmYXVsdCA6ICh0eXBlb2YgYW5FbGVtZW50LmF0dHIoXCJldmVudC1wcmV2ZW50LWRlZmF1bHRcIikgIT09IFwidW5kZWZpbmVkXCIpLFxyXG5cdCAgICBzdG9wUHJvcGFnYXRpb24gOiAodHlwZW9mIGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtc3RvcC1wcm9wYWdhdGlvblwiKSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHR9O1xyXG5cdHJlc3VsdC5ldmVudFR5cGUgPSBhbkVsZW1lbnQuYXR0cihcImV2ZW50LXR5cGVcIik7XHJcblx0aWYgKHR5cGVvZiByZXN1bHQuZXZlbnRUeXBlID09PSAndW5kZWZpbmVkJyl7XHJcblx0XHRhbkVsZW1lbnQuZGF0YShTVEFURS5GSU5JU0hFRCwgRklOSVNIRURTVEFURS5GQUlMKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0XHJcblx0cmVzdWx0LmFjdGlvbiA9IGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtYWN0aW9uXCIpO1xyXG5cdHJlc3VsdC5kZWxlZ2F0aW9uID0gYW5FbGVtZW50LmF0dHIoXCJldmVudC1kZWxlZ2F0aW9uXCIpO1xyXG5cclxuXHRpZiAodHlwZW9mIChyZXN1bHQuYWN0aW9uIHx8IHJlc3VsdC5kZWxlZ2F0aW9uKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdGFuRWxlbWVudC5kYXRhKFNUQVRFLkZJTklTSEVELCBGSU5JU0hFRFNUQVRFLkZBSUwpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0cmVzdWx0LmV2ZW50RGF0YSA9IGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtZGF0YVwiKTtcclxuXHRpZiAodHlwZW9mIHJlc3VsdC5ldmVudERhdGEgIT09ICd1bmRlZmluZWQnICYmIHJlc3VsdC5ldmVudERhdGEubGVuZ3RoID4gMClcclxuXHRcdHJlc3VsdC5ldmVudERhdGEgPSBleHByZXNzaW9uUmVzb2x2ZXIucmVzb2x2ZUV4cHJlc3Npb24oZXZlbnREYXRhLCBhQ29udGV4dCwge30pO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBhQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRyZXN1bHQuZXZlbnREYXRhID0gZXh0ZW5kKHt9LCBhQ29udGV4dCk7XHJcblxyXG5cdGlmICh0eXBlb2YgcmVzdWx0LmV2ZW50RGF0YSAhPT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRhbkVsZW1lbnQub24ocmVzdWx0LmV2ZW50VHlwZSwgbnVsbCwgcmVzdWx0LmV2ZW50RGF0YSwgRXhlY3V0ZXIpO1xyXG5cdGVsc2VcclxuXHRcdGFuRWxlbWVudC5vbihyZXN1bHQuZXZlbnRUeXBlLCBFeGVjdXRlcik7XHJcblx0XHJcblx0YW5FbGVtZW50LmRhdGEoU1RBVEUuRklOSVNIRUQsIEZJTklTSEVEU1RBVEUuUkVBRFkpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcclxuXHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtdXRhdGlvbikge1xyXG5cdFx0bXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcclxuXHRcdFx0aWYgKG5vZGUubm9kZXR5cGUgIT0gTm9kZS5URVhUX05PREUpIHtcclxuXHRcdFx0XHRpZihub2RlLmlzKFwiW2V2ZW50LXR5cGVdXCIpKVxyXG5cdFx0XHRcdFx0ZXZlbnRCaW5kKG5vZGUpO1x0XHRcdFx0XHJcblx0XHRcdFx0ZXZlbnRCaW5kKG5vZGUuZmluZChcIltldmVudC10eXBlXVwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8vIHBhc3MgaW4gdGhlIHRhcmdldCBub2RlLCBhcyB3ZWxsIGFzIHRoZSBvYnNlcnZlciBvcHRpb25zXHJcbm9ic2VydmVyLm9ic2VydmUoZmluZChcIltldmVudC1hdXRvcnVuXVwiKSwgIHtcclxuICAgIGF0dHJpYnV0ZXMgOiB0cnVlLFxyXG4gICAgY2hpbGRMaXN0IDogdHJ1ZSxcclxuICAgIHN1YnRyZWUgOiB0cnVlLFxyXG4gICAgY2hhcmFjdGVyRGF0YSA6IGZhbHNlXHJcbn0pO1xyXG5cclxucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0ZXZlbnRCaW5kKGZpbmQoXCJbZXZlbnQtYXV0b3J1bl1cIikpO1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRCaW5kOyIsImltcG9ydCBSZWdleCBmcm9tIFwiLi9yZWdleC9SZWdleFwiO1xyXG5cclxuXHJcbmxldCBFeHByZXNzaW9uUmVzb2x2ZXIgPSBjbGFzcyB7XHRcclxuXHRjb25zdHJ1Y3Rvcih2YXJSZWdleCkge1xyXG5cdFx0dGhpcy5yZWdleCA9IG5ldyBSZWdleCh2YXJSZWdleFx0fHwgRXhwcmVzc2lvblJlc29sdmVyLlRFWFRfRVhQUkVTU0lPTl9SRUdFWCk7XHJcblx0fTtcclxuXHRcdFxyXG5cdHJlc29sdmVUZXh0KGFUZXh0LCBhRGF0YUNvbnRleHQsIGFEZWZhdWx0VmFsdWUpIHtcclxuXHRcdGxldCB0ZXh0ID0gYVRleHQ7XHJcblx0XHRsZXQgbWF0Y2hlciA9IHRoaXMucmVnZXgucGFyc2UodGV4dCk7XHJcblx0XHR3aGlsZSAobWF0Y2hlci5uZXh0KCkpIHtcclxuXHRcdFx0bGV0IGV4cHJlc3Npb24gPSBtYXRjaGVyLmdldE1hdGNoKCk7XHJcblx0XHRcdGxldCBleHByZXNzaW9uUmVzdWx0ID0gdGhpcy5pbnRlcm5hbFJlc29sdmVFeHByZXNzaW9uKG1hdGNoZXIuZ2V0R3JvdXAoMSksIGFEYXRhQ29udGV4dCwgYURlZmF1bHRWYWx1ZSk7XHJcblx0XHRcdGlmIChleHByZXNzaW9uUmVzdWx0ICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0ZXh0ID0gbWF0Y2hlci5yZXBsYWNlQWxsKGV4cHJlc3Npb25SZXN1bHQsIHRleHQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fTtcclxuXHRcclxuXHRyZXNvbHZlRXhwcmVzc2lvbihhRXhwcmVzc2lvbixcclxuXHRcdFx0YURhdGFDb250ZXh0LCBhRGVmYXVsdFZhbHVlKSB7XHJcblx0XHRsZXQgbWF0Y2hlciA9IHRoaXMucmVnZXgucGFyc2UoYUV4cHJlc3Npb24pO1xyXG5cdFx0aWYgKG1hdGNoZXIubmV4dCgpKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnRlcm5hbFJlc29sdmVFeHByZXNzaW9uKG1hdGNoZXIuZ2V0R3JvdXAoMSksIGFEYXRhQ29udGV4dCwgYURlZmF1bHRWYWx1ZSk7XHJcblx0XHJcblx0XHRyZXR1cm4gdGhpcy5pbnRlcm5hbFJlc29sdmVFeHByZXNzaW9uKGFFeHByZXNzaW9uLCBhRGF0YUNvbnRleHQsIGFEZWZhdWx0VmFsdWUpO1xyXG5cdH07XHJcblx0XHJcblx0aW50ZXJuYWxSZXNvbHZlRXhwcmVzc2lvbihhRXhwcmVzc2lvbixcclxuXHRcdFx0YURhdGFDb250ZXh0LCBhRGVmYXVsdFZhbHVlKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRyZXR1cm4gZGUudGl0dXMuY29yZS5TcGVjaWFsRnVuY3Rpb25zLmRvRXZhbFdpdGhDb250ZXh0KGFFeHByZXNzaW9uLCBhRGF0YUNvbnRleHQsIGFEZWZhdWx0VmFsdWUpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRyZXR1cm4gYURlZmF1bHRWYWx1ZTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5cclxuRXhwcmVzc2lvblJlc29sdmVyLlRFWFRfRVhQUkVTU0lPTl9SRUdFWCA9IFwiXFxcXCRcXFxceyhbXlxcXFx7XFxcXH1dKylcXFxcfVwiO1xyXG5FeHByZXNzaW9uUmVzb2x2ZXIuREVGQVVMVCA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cHJlc3Npb25SZXNvbHZlcjtcclxuIiwibGV0IGJ1aWxkID0gZnVuY3Rpb24oR29iYWwsIGFOYW1lcywgYUNhbGxiYWNrKSB7XG5cdGxldCBuYW1lID0gYU5hbWVzLnNoaWZ0KCk7XG5cdGlmICh0eXBlb2YgR29iYWxbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0R29iYWxbbmFtZV0gPSB7fTtcblxuXHRpZiAoYU5hbWVzLmxlbmd0aCA9PSAwKVxuXHRcdEdvYmFsW25hbWVdID0gYUNhbGxiYWNrKCkgfHwgR29iYWxbbmFtZV07XG5cdGVsc2Vcblx0XHRidWlsZChHb2JhbFtuYW1lXSwgYU5hbWVzLCBhQ2FsbGJhY2spO1xufTtcblxubGV0IE5hbWVzcGFjZSA9IGZ1bmN0aW9uKGFOYW1lc3BhY2UsIGFGdW5jdGlvbikge1xuXHRidWlsZCggKHdpbmRvdyB8fCBnbG9iYWwgfHwge30pLCBhTmFtZXNwYWNlLnNwbGl0KFwiLlwiKSAsYUZ1bmN0aW9uKTtcbn07XG5cbk5hbWVzcGFjZS5jcmVhdGUgPSBOYW1lc3BhY2U7IFxuZXhwb3J0IGRlZmF1bHQgTmFtZXNwYWNlO1xuIiwibGV0IFBhZ2UgPSBjbGFzcyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmJhc2VUYWdWYWx1ZSA9IHVuZGVmaW5lZDtcclxuXHRcdGxldCBiYXNlVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VbaHJlZl1cIik7XHJcblx0XHRpZiAodHlwZW9mIGJhc2VUYWcgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMuYmFzZVRhZ1ZhbHVlID0gYmFzZVRhZy5hdHRyaWJ1dGVzW1wiaHJlZlwiXS52YWx1ZTtcclxuXHRcdHRoaXMuZmlsZXMgPSB7fTtcclxuXHRcdHRoaXMuZGF0YSA9IHt9O1xyXG5cdH07XHJcblx0XHJcblx0YWRkSnNGaWxlKGFVcmwsIGFGdW5jdGlvbiwgZm9yY2VGdW5jdGlvbikge1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYVVybCkpXHJcblx0XHRcdHJldHVybiB0aGlzLmFkZEpzRmlsZXMoYVVybCwgYUZ1bmN0aW9uLCBmb3JjZUZ1bmN0aW9uKTtcclxuXHRcdFxyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmZpbGVzW2FVcmxdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHRoaXMuZmlsZXNbYVVybF0gPSB0cnVlO1xyXG5cdFx0XHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvamF2YXNjcmlwdFwiKTtcclxuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYVVybCk7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsZW1lbnQpO1xyXG5cdFxyXG5cdFx0XHRpZiAoYUZ1bmN0aW9uICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHRhRnVuY3Rpb24oKTtcclxuXHRcdH0gZWxzZSBpZiAoZm9yY2VGdW5jdGlvbiAmJiBhRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGFGdW5jdGlvbigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0YWRkSnNGaWxlcyhhVXJscywgYUZ1bmN0aW9uLCBmb3JjZUZ1bmN0aW9uKSB7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShhVXJscykpIHtcclxuXHRcdFx0d2hpbGUoYVVybHMubGVuZ3RoICE9IDApe1xyXG5cdFx0XHRcdHRoaXMuYWRkSnNGaWxlKGFVcmxzLnNoaWZ0KCksIChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRoaXMuYWRkSnNGaWxlcyhhVXJscywgYUZ1bmN0aW9uLCBmb3JjZUZ1bmN0aW9uKVxyXG5cdFx0XHRcdH0pLmJpbmQodGhpcyksIHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2VcclxuXHRcdFx0dGhpcy5hZGRKc0ZpbGUoYVVybHMsIGFGdW5jdGlvbiwgZm9yY2VGdW5jdGlvbik7XHJcblx0fTtcclxuXHRcclxuXHRhZGRDc3NGaWxlKGFVcmwpIHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFVcmwpKSB7XHJcblx0XHRcdHRoaXMuYWRkQ3NzRmlsZXMoYVVybCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcclxuXHRcdGlmICh0aGlzLmZpbGVzW2FVcmxdID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLmZpbGVzW2FVcmxdID0gdHJ1ZTtcclxuXHRcdFx0bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xyXG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcclxuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGFVcmwpO1xyXG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChlbGVtZW50KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdGFkZENzc0ZpbGVzKGFVcmxzKSB7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShhVXJscykpIHtcclxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGFVcmxzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5hZGRDc3NGaWxlKGFVcmxzW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0Z2V0VXJsKCkge1xyXG5cdFx0cmV0dXJuIGRlLnRpdHVzLmNvcmUuVVJMLmdldEN1cnJlbnRVcmwoKTtcclxuXHR9O1xyXG5cdFxyXG5cdGJ1aWxkVXJsKGFVcmwpIHtcclxuXHRcdGxldCBicm93c2VyID0gdGhpcy5kZXRlY3RCcm93c2VyKCk7XHJcblx0XHRpZiAoYnJvd3Nlci5pZSAmJiBicm93c2VyLmllIDwgMTEpIHtcclxuXHRcdFx0bGV0IHRlbXBVcmwgPSBhVXJsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuYmFzZVRhZ1ZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmICF0ZW1wVXJsLmluZGV4T2YoXCJodHRwOlwiKSA9PSAwXHJcblx0XHRcdFx0XHQmJiAhdGVtcFVybC5pbmRleE9mKFwiaHR0cHM6XCIpID09IDBcclxuXHRcdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJmdHA6XCIpID09IDBcclxuXHRcdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJmdHBzOlwiKSA9PSAwXHJcblx0XHRcdFx0XHQmJiAhdGVtcFVybC5pbmRleE9mKFwibWFpbHRvOlwiKSA9PSAwXHJcblx0XHRcdFx0XHQmJiAhdGVtcFVybC5pbmRleE9mKFwibm90ZXM6XCIpID09IDBcclxuXHRcdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCIvXCIpID09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5iYXNlVGFnVmFsdWUgKyBhVXJsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYVVybDtcclxuXHR9O1xyXG5cdFxyXG5cdGRldGVjdEJyb3dzZXIoKSB7XHJcblx0XHRpZiAoUGFnZS5CUk9XU0VSKVxyXG5cdFx0XHRyZXR1cm4gUGFnZS5CUk9XU0VSO1xyXG5cdFxyXG5cdFx0UGFnZS5CUk9XU0VSID0ge307XHJcblx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRNb2RlKVxyXG5cdFx0XHRQYWdlLkJST1dTRVIuaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XHJcblx0XHRlbHNlXHJcblx0XHRcdFBhZ2UuQlJPV1NFUi5vdGhlciA9IHRydWU7XHJcblx0XHJcblx0XHRyZXR1cm4gUGFnZS5CUk9XU0VSO1xyXG5cdH07XHJcblx0XHJcblx0c2V0RGF0YShhS2V5LCBhVmFsdWUpIHtcclxuXHRcdHRoaXMuZGF0YVthS2V5XSA9IGFWYWx1ZTtcclxuXHR9O1xyXG5cdFxyXG5cdGdldERhdGEoYUtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YVthS2V5XTtcclxuXHR9O1xyXG59O1xyXG5cclxuUGFnZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0eXBlb2YgSU5TVEFOQ0UgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFBhZ2UuSU5TVEFOQ0UgPSBuZXcgUGFnZSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFBhZ2UuSU5TVEFOQ0U7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImxldCBQYWdpbmdVdGlscyA9IHtcclxuXHRwYWdlckRhdGEgOiBmdW5jdGlvbihhUGFnZSwgYVBhZ2VzLCBhU2l6ZSkge1xyXG5cdFx0bGV0IGhhbGYgPSBNYXRoLnJvdW5kKGFQYWdlcyAvIDIpO1xyXG5cdFx0bGV0IHJlc3VsdCA9IHtcclxuXHRcdFx0Zmlyc3RQYWdlIDogMSxcclxuXHRcdFx0c3RhcnRQYWdlIDogMSxcclxuXHRcdFx0ZW5kUGFnZSA6IGFTaXplLFxyXG5cdFx0XHRsYXN0UGFnZSA6IGFQYWdlcyxcclxuXHRcdFx0Y3VycmVudCA6IGFQYWdlLFxyXG5cdFx0XHRwYWdlQ291bnQgOiBhUGFnZXNcclxuXHRcdH07XHJcblx0XHRpZiAoYVNpemUgPiBhUGFnZXMpXHJcblx0XHRcdHJlc3VsdC5lbmRQYWdlID0gYVBhZ2VzO1xyXG5cdFx0ZWxzZSBpZiAoYVBhZ2UgKyBoYWxmID4gYVBhZ2VzKSB7XHJcblx0XHRcdHJlc3VsdC5lbmRQYWdlID0gYVBhZ2VzO1xyXG5cdFx0XHRyZXN1bHQuc3RhcnRQYWdlID0gKGVuZCAtIGFTaXplKSArIDE7XHJcblx0XHR9IGVsc2UgaWYgKGFQYWdlIC0gaGFsZiA+IDEpIHtcclxuXHRcdFx0cmVzdWx0LmVuZFBhZ2UgPSAoYVBhZ2UgKyBoYWxmKTtcclxuXHRcdFx0cmVzdWx0LnN0YXJ0UGFnZSA9IChlbmQgLSBhU2l6ZSkgKyAxO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0LmNvdW50ID0gcmVzdWx0LmVuZFBhZ2UgLSByZXN1bHQuc3RhcnRQYWdlO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9LFxyXG5cclxuXHRwYWdlQXJyYXkgOiBmdW5jdGlvbihhUGFnZSwgYVNpemUsIGFBcnJheSkge1xyXG5cdFx0cmV0dXJuIGFBcnJheS5zbGljZSgoYVBhZ2UgLSAxKSAqIGFTaXplLCBhU2l6ZSk7XHJcblx0fVxyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5nVXRpbHM7XHJcbiIsImNvbnN0IERFVk1PREUgPSBsb2NhdGlvbi5zZWFyY2ggPyAoLy4qZGV2bW9kZT10cnVlLiovaWcpLnRlc3QobG9jYXRpb24uc2VhcmNoKSA6IGZhbHNlO1xuY29uc3QgU1RBVEVNRU5UUyA9IHt9O1xubGV0IFNwZWNpYWxGdW5jdGlvbnMgPSB7XG5cdGRvRXZhbCA6IGZ1bmN0aW9uKGFTdGF0ZW1lbnQsIGFDb250ZXh0LCBhQ2FsbGJhY2spIHtcblx0XHRpZiAoYUNhbGxiYWNrKVxuXHRcdFx0U3BlY2lhbEZ1bmN0aW9ucy5kb0V2YWxXaXRoQ29udGV4dChhU3RhdGVtZW50LCAoYUNvbnRleHQgfHwge30pLFxuXHRcdFx0XHRcdHVuZGVmaW5lZCwgYUNhbGxiYWNrKTtcblx0XHRlbHNlIHtcblx0XHRcdGlmICh0eXBlb2YgYVN0YXRlbWVudCAhPT0gXCJzdHJpbmdcIilcblx0XHRcdFx0cmV0dXJuIGFTdGF0ZW1lbnQ7XG5cblx0XHRcdHZhciBzdGF0ZW1lbnQgPSBhU3RhdGVtZW50LnRyaW0oKTtcblx0XHRcdGlmIChzdGF0ZW1lbnQubGVuZ3RoID09IDApXG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBldmFsRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oXCJhQ29udGV4dFwiLFxuXHRcdFx0XHRcdFx0XCJ3aXRoKHRoaXMpe3JldHVybiBcIiArIGFTdGF0ZW1lbnQgKyBcIjt9XCIpO1xuXHRcdFx0XHRyZXR1cm4gZXZhbEZ1bmN0aW9uLmNhbGwoYUNvbnRleHQpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRpZiAoREVWTU9ERSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblwiLCBcImRvRXZhbCgpXFxuXCIsXG5cdFx0XHRcdFx0XHRcdFwic3RhdGVtZW50OiBcXFwiXCIsIGFTdGF0ZW1lbnQsIFwiXFxcIlxcblwiLCBcImNvbnRleHQ6IFxcXCJcIixcblx0XHRcdFx0XHRcdFx0YUNvbnRleHQsIFwiXFxcIlxcblwiLCBcImNhbGxiYWNrOiBcXFwiXCIsIGFDYWxsYmFjayxcblx0XHRcdFx0XHRcdFx0XCJcXFwiXFxuXCIsIFwiZXJyb3I6IFwiLCBlLCBcIlxcblwiLFxuXHRcdFx0XHRcdFx0XHRcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGRvRXZhbFdpdGhDb250ZXh0IDogZnVuY3Rpb24oYVN0YXRlbWVudCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhQ2FsbGJhY2spIHtcblx0XHRpZiAodHlwZW9mIGFDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IFNwZWNpYWxGdW5jdGlvbnMuZG9FdmFsV2l0aENvbnRleHQoYVN0YXRlbWVudCxcblx0XHRcdFx0XHRcdGFDb250ZXh0LCBhRGVmYXVsdCwgdW5kZWZpbmVkKTtcblx0XHRcdFx0YUNhbGxiYWNrKHJlc3VsdCwgYUNvbnRleHQpO1xuXHRcdFx0fSwgMSk7XG5cblx0XHR9IGVsc2Vcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBTcGVjaWFsRnVuY3Rpb25zLmRvRXZhbChhU3RhdGVtZW50LCBhQ29udGV4dCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiKVxuXHRcdFx0XHRcdHJldHVybiBhRGVmYXVsdDtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIGFEZWZhdWx0O1xuXHRcdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVjaWFsRnVuY3Rpb25zOyIsImltcG9ydCB7ZXh0ZW5kfSBmcm9tIFwiLi91dGlscy9PYmplY3RVdGlsc1wiO1xyXG5cclxubGV0IERFRkFVTFRTID0ge1xyXG5cdGZvcm1hdFRvSHRtbCA6IHtcclxuXHRcdFwidGFic2l6ZVwiIDogNCxcclxuXHRcdFwidGFiY2hhclwiIDogXCImbmJzcDtcIixcclxuXHRcdFwibmV3bGluZVRhZ1wiIDogXCI8YnIvPlwiXHJcblx0fSxcclxuXHJcblx0dHJpbVRleHRMZW5ndGggOiB7XHJcblx0XHRcInBvc3RmaXhcIiA6IFwiLi4uXCJcclxuXHR9XHJcbn07XHJcbmxldCBTdHJpbmdVdGlscyA9IHtcclxuXHRERUZBVUxUUyA6IERFRkFVTFRTLFxyXG5cdHRyaW1UZXh0TGVuZ3RoIDogZnVuY3Rpb24oYVRleHQsIG1heExlbmd0aCwgdGhlU2V0dGluZ3MpIHtcclxuXHRcdGlmIChhVGV4dCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIGFUZXh0ICE9PSBcInN0cmluZ1wiIHx8IGFUZXh0ID09IFwiXCIpXHJcblx0XHRcdHJldHVybiBhVGV4dDtcclxuXHJcblx0XHRsZXQgc2V0dGluZ3MgPSBleHRlbmQoe30sIHRoZVNldHRpbmdzLCBERUZBVUxUUy50cmltVGV4dExlbmd0aCk7XHJcblxyXG5cdFx0aWYgKGFUZXh0Lmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG5cdFx0XHRsZXQgZW5kID0gbWF4TGVuZ3RoIC0gc2V0dGluZ3MucG9zdGZpeC5sZW5ndGg7XHJcblx0XHRcdGlmICgoYVRleHQubGVuZ3RoIC0gZW5kKSA+IDApXHJcblx0XHRcdFx0cmV0dXJuIGFUZXh0LnN1YnN0cmluZygwLCBlbmQpLnRyaW0oKSArIHNldHRpbmdzLnBvc3RmaXg7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYVRleHQ7XHJcblx0fSxcclxuXHRmb3JtYXRUb0h0bWwgOiBmdW5jdGlvbihhVGV4dCwgdGhlU2V0dGluZ3MpIHtcclxuXHRcdGlmIChhVGV4dCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIGFUZXh0ICE9PSBcInN0cmluZ1wiIHx8IGFUZXh0ID09IFwiXCIpXHJcblx0XHRcdHJldHVybiBhVGV4dDtcclxuXHRcdGxldCBzZXR0aW5ncyA9IGV4dGVuZCh7fSwgdGhlU2V0dGluZ3MgLERFRkFVTFRTLmZvcm1hdFRvSHRtbCk7XHJcblx0XHRsZXQgbGluZXMgPSBhVGV4dC5yZXBsYWNlKC9cXG5cXHIvZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpLnNwbGl0KFwiXFxuXCIpO1xyXG5cdFx0bGV0IHRleHQgPSBcIlwiO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoaSAhPSAwKVxyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgc2V0dGluZ3MubmV3bGluZVRhZztcclxuXHRcdFx0dGV4dCA9IHRleHRcdCsgU3RyaW5nVXRpbHMucHJldmVudFRhYnMobGluZXNbaV0sIHNldHRpbmdzLnRhYnNpemUsIHNldHRpbmdzLnRhYmNoYXIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fSxcclxuXHRnZXRUYWJTdG9wTWFwIDogZnVuY3Rpb24odGFiU2l6ZSwgdGFiU3RyaW5nKSB7XHJcblx0XHRsZXQgdGFic3RvcE1hcCA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gdGFiU2l6ZTsgaSsrKSB7XHJcblx0XHRcdGlmIChpID09IDApXHJcblx0XHRcdFx0dGFic3RvcE1hcFswXSA9IFwiXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0YWJzdG9wTWFwW2ldID0gdGFic3RvcE1hcFtpIC0gMV0gKyB0YWJTdHJpbmc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRhYnN0b3BNYXA7XHJcblx0fSxcclxuXHRwcmV2ZW50VGFicyA6IGZ1bmN0aW9uKGFUZXh0LCB0aGVUYWJTdG9wcywgdGhlVGFiU3RvcENoYXIpIHtcclxuXHRcdGxldCB0YWJzdG9wTWFwID0gU3RyaW5nVXRpbHMuZ2V0VGFiU3RvcE1hcCh0aGVUYWJTdG9wcywgdGhlVGFiU3RvcENoYXIpO1xyXG5cdFx0bGV0IHRhYlN0b3BzID0gdGhlVGFiU3RvcHM7XHJcblx0XHRsZXQgdGV4dCA9IFwiXCI7XHJcblx0XHRsZXQgdGFicyA9IGFUZXh0LnNwbGl0KFwiXFx0XCIpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICh0YWJzW2ldLmxlbmd0aCAhPSAwICYmIGkgIT0gMCkge1xyXG5cdFx0XHRcdGxldCBzaXplID0gdGV4dC5sZW5ndGg7XHJcblx0XHRcdFx0bGV0IHRhYlNpemUgPSBzaXplICUgdGFiU3RvcHM7XHJcblx0XHRcdFx0dGV4dCA9IHRleHQgKyB0YWJzdG9wTWFwW3RoZVRhYlN0b3BzIC0gdGFiU2l6ZV0gKyB0YWJzW2ldO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRhYnNbaV0ubGVuZ3RoID09IDAgJiYgaSAhPSAwKVxyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgdGFic3RvcE1hcFt0aGVUYWJTdG9wc107XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0ZXh0ID0gdGV4dCArIHRhYnNbaV07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fSxcclxuXHRmb3JtYXQgOiBmdW5jdGlvbihhVGV4dCwgYXJncykge1xyXG5cdFx0bGV0IG9iamVjdHMgPSBhcmd1bWVudHM7XHJcblx0XHRyZXR1cm4gYVRleHQucmVwbGFjZSgvey0/WzAtOV0rfS9nLCBmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdGxldCBpbmRleCA9IHBhcnNlSW50KGl0ZW0uc3Vic3RyaW5nKDEsIGl0ZW0ubGVuZ3RoIC0gMSkpICsgMTtcclxuXHRcdFx0bGV0IHJlcGxhY2U7XHJcblx0XHRcdGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBvYmplY3RzLmxlbmd0aCkge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBvYmplY3RzW2luZGV4XTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcGxhY2UgIT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHRyZXBsYWNlID0gSlNPTi5zdHJpbmdpZnkocmVwbGFjZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XHJcblx0XHRcdFx0cmVwbGFjZSA9IFwie1wiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAtMikge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBcIn1cIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXBsYWNlID0gXCJcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVwbGFjZTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nVXRpbHM7IiwibGV0IFVSTCA9IGNsYXNzIHtcclxuXHRjb25zdHJ1Y3RvcihhUHJvdG9jb2wsIGFEb21haW4sIGFQb3J0LCBhUGF0aCwgdGhlUGFyYW1ldGVyLCBhTWFya2VyKSB7XHRcclxuXHRcdHRoaXMucHJvdG9jb2wgPSBhUHJvdG9jb2wgfHwgXCJodHRwXCI7XHJcblx0XHR0aGlzLmRvbWFpbiA9IGFEb21haW47XHJcblx0XHR0aGlzLnBvcnQgPSBhUG9ydDtcclxuXHRcdHRoaXMucGF0aCA9IGFQYXRoO1xyXG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gdGhlUGFyYW1ldGVyO1xyXG5cdFx0dGhpcy5tYXJrZXIgPSBhTWFya2VyXHRcclxuXHR9O1xyXG5cdFxyXG5cdGdldFBhcmFtZXRlcihhS2V5KSB7XHJcblx0XHRsZXQgdmFsdWUgPSB0aGlzLnBhcmFtZXRlcnNbYUtleV07XHJcblx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZVswXSA6IHZhbHVlO1xyXG5cdH07XHJcblx0XHJcblx0Z2V0UGFyYW1ldGVycyhhS2V5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJhbWV0ZXJzW2FLZXldO1xyXG5cdH07XHJcblx0XHJcblx0YWRkUGFyYW1ldGVyKGFLZXksIGFWYWx1ZSwgYXBwZW5kKSB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMucGFyYW1ldGVyc1thS2V5XSA9PT0gXCJ1bmRlZmluZWRcIikgXHJcblx0XHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IFtdO1xyXG5cdFx0aWYgKCFhcHBlbmQgJiYgdHlwZW9mIGFWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgXHJcblx0XHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IHVuZGVmaW5lZDtcclxuXHRcdCBlbHNlIGlmICghYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGFWYWx1ZS5sZW5ndGggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IGFWYWx1ZTtcclxuXHRcdCBlbHNlIGlmIChhcHBlbmQgJiYgdHlwZW9mIGFWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgYVZhbHVlLmxlbmd0aCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0JC5tZXJnZSh0aGlzLnBhcmFtZXRlcnNbYUtleV0sIGFWYWx1ZSk7Ly8gQFRPRE8gJC5tZXJnZSBlbnRmZXJuZW5cclxuXHRcdCBlbHNlIGlmICghYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IFsgYVZhbHVlIF07XHJcblx0XHQgZWxzZSBpZiAoYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIFxyXG5cdFx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0ucHVzaChhVmFsdWUpO1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdGdldFF1ZXJ5U3RyaW5nKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnBhcmFtZXRlcnMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IFwiP1wiO1xyXG5cdFx0XHRsZXQgaXNGaXJzdFBhcmFtZXRlciA9IHRydWU7XHJcblx0XHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiB0aGlzLnBhcmFtZXRlcnMpIHtcclxuXHRcdFx0XHRpZiAoIWlzRmlyc3RQYXJhbWV0ZXIpIHtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdCArIFwiJlwiO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpc0ZpcnN0UGFyYW1ldGVyID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBwYXJhbWV0ZXJWYWx1ZXMgPSB0aGlzLnBhcmFtZXRlcnNbcHJvcGVydHlOYW1lXTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHBhcmFtZXRlclZhbHVlcy5sZW5ndGggPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQgKyBlbmNvZGVVUklDb21wb25lbnQocHJvcGVydHlOYW1lKSArIFwiPVwiXHJcblx0XHRcdFx0XHRcdFx0KyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyVmFsdWVzKTtcclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBwYXJhbWV0ZXJWYWx1ZXMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKGogPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICsgXCImXCI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICsgZW5jb2RlVVJJQ29tcG9uZW50KHByb3BlcnR5TmFtZSkgKyBcIj1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0KyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyVmFsdWVzW2pdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0Z2V0TWFya2VyU3RyaW5nKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1hcmtlciAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0cmV0dXJuIFwiI1wiICsgdGhpcy5tYXJrZXJcdFxyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblx0fTtcclxuXHRcclxuXHRhc1N0cmluZygpIHtcclxuXHRcdGxldCByZXN1bHQgPSB0aGlzLnByb3RvY29sICsgXCI6Ly9cIiArIHRoaXMuZG9tYWluICsgXCI6XCIgKyB0aGlzLnBvcnQ7XHRcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5wYXRoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQgKyB0aGlzLnBhdGg7XHJcblx0XHJcblx0XHRyZXN1bHQgPSByZXN1bHQgKyB0aGlzLmdldFF1ZXJ5U3RyaW5nKCkgKyB0aGlzLmdldE1hcmtlclN0cmluZygpO1xyXG5cdFxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cdFxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXNTdHJpbmcoKTtcclxuXHR9O1x0XHJcbn07XHJcblxyXG5VUkwuZnJvbVN0cmluZyA9IGZ1bmN0aW9uKGFVcmxTdHJpbmcpIHtcclxuXHRsZXQgdGVtcFVybCA9IGFVcmxTdHJpbmc7XHJcblx0bGV0IHByb3RvY29sID0gXCJodHRwXCI7XHJcblx0bGV0IGhvc3QgPSB1bmRlZmluZWQ7XHJcblx0bGV0IHBvcnQgPSA4MDtcclxuXHRsZXQgcGF0aCA9IFwiL1wiO1xyXG5cdGxldCBtYXJrZXIgPSBcIlwiO1xyXG5cdGxldCBwYXJhbWV0ZXJTdHJpbmcgPSB1bmRlZmluZWQ7XHJcblx0bGV0IHNwbGl0SW5kZXggPSAtMTtcclxuXHRsZXQgcGFyYW1ldGVyID0ge307XHJcblxyXG5cdGxldCBtYXRjaCA9IG5ldyBSZWdFeHAoXCJcXFxcPyhbXiNdKilcIikuZXhlYyh0ZW1wVXJsKTtcclxuXHRpZiAodHlwZW9mIG1hdGNoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0cGFyYW1ldGVyU3RyaW5nID0gbWF0Y2hbMV07XHJcblxyXG5cdG1hdGNoID0gbmV3IFJlZ0V4cChcIiMoW15cXFxcPyNdKilcIikuZXhlYyh0ZW1wVXJsKTtcclxuXHRpZiAodHlwZW9mIG1hdGNoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0bWFya2VyID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzFdKTtcclxuXHJcblx0c3BsaXRJbmRleCA9IHRlbXBVcmwuaW5kZXhPZihcIjovL1wiKTtcclxuXHRpZiAoc3BsaXRJbmRleCA+IDApIHtcclxuXHRcdHByb3RvY29sID0gdGVtcFVybC5zdWJzdHIoMCwgc3BsaXRJbmRleCk7XHJcblx0XHR0ZW1wVXJsID0gdGVtcFVybC5zdWJzdHIoc3BsaXRJbmRleCArIDMpO1xyXG5cdH1cclxuXHJcblx0bWF0Y2ggPSBuZXcgUmVnRXhwKFwiKFteXFwvOlxcXFw/I10qKVwiKS5leGVjKHRlbXBVcmwpO1xyXG5cdGlmICh0eXBlb2YgbWF0Y2ggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRob3N0ID0gbWF0Y2hbMV07XHJcblxyXG5cdG1hdGNoID0gbmV3IFJlZ0V4cChcIjooW15cXFxcL1xcXFw/I10qKVwiKS5leGVjKHRlbXBVcmwpO1xyXG5cdGlmICh0eXBlb2YgbWF0Y2ggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRwb3J0ID0gbWF0Y2hbMV07XHJcblx0ZWxzZSBpZiAocHJvdG9jb2wudG9Mb3dlckNhc2UoKSA9PSBcImh0dHBzXCIpXHJcblx0XHRwb3J0ID0gNDQzO1xyXG5cdGVsc2UgaWYgKHByb3RvY29sLnRvTG93ZXJDYXNlKCkgPT0gXCJmdHBcIilcclxuXHRcdHBvcnQgPSAyMTtcclxuXHRlbHNlIGlmIChwcm90b2NvbC50b0xvd2VyQ2FzZSgpID09IFwiZnRwc1wiKVxyXG5cdFx0cG9ydCA9IDIxO1xyXG5cclxuXHRtYXRjaCA9IG5ldyBSZWdFeHAoXCIoL1teXFxcXD8jXSopXCIpLmV4ZWModGVtcFVybCk7XHJcblx0aWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHBhdGggPSBtYXRjaFsxXTtcclxuXHJcblx0bGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihbXiZcXFxcPyM9XSopPShbXiZcXFxcPyM9XSopXCIpO1xyXG5cdGlmICh0eXBlb2YgcGFyYW1ldGVyU3RyaW5nICE9PSBcInVuZGVmaW5lZFwiICYmIFwiXCIgIT0gcGFyYW1ldGVyU3RyaW5nKSB7XHJcblx0XHRsZXQgcGFyYW1ldGVyRW50cmllcyA9IHBhcmFtZXRlclN0cmluZy5zcGxpdChcIiZcIik7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgcGFyYW1ldGVyRW50cmllcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgbWF0Y2ggPSByZWdleC5leGVjKHBhcmFtZXRlckVudHJpZXNbaV0pO1xyXG5cdFx0XHRsZXQgcE5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMV0pO1xyXG5cdFx0XHRsZXQgcFZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzJdKTtcclxuXHRcdFx0cGFyYW1ldGVyW3BOYW1lXSA/IHBhcmFtZXRlcltwTmFtZV0ucHVzaChwVmFsdWUpXHJcblx0XHRcdFx0XHQ6IHBhcmFtZXRlcltwTmFtZV0gPSBbIHBWYWx1ZSBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ldyBVUkwocHJvdG9jb2wsIGhvc3QsIHBvcnQsIHBhdGgsIHBhcmFtZXRlciwgbWFya2VyKTtcclxufTtcclxuXHJcblVSTC5nZXRDdXJyZW50VXJsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKFVSTC5TVEFUSUNfX0NVUlJFTlRVUkwgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRVUkwuU1RBVElDX19DVVJSRU5UVVJMID0gVVJMLmZyb21TdHJpbmcobG9jYXRpb24uaHJlZik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gVVJMLlNUQVRJQ19fQ1VSUkVOVFVSTDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVSTDtcclxuIiwibGV0IFVVSUQgPSBmdW5jdGlvbigpIHtcdFxyXG5cdGxldCBzcGFjZXIgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyBhcmd1bWVudHNbMF0gOiBcIi1cIjtcclxuXHRsZXQgdGVtcGxhdGUgPSAneHh4eHh4eHgnICsgc3BhY2VyICsgJ3h4eHgnICsgc3BhY2VyICsgJzR4eHgnICsgc3BhY2VyICsgJ3l4eHgnICsgc3BhY2VyICsgJ3h4eHh4eHh4eHh4eCc7XHRcclxuXHRyZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XHJcblx0XHRsZXQgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDBcclxuXHRcdGxldCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG5cdFx0cmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG5cdH0pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBVVUlEOyIsIi8vIExvYWQgYWxsIHBvbHlmaWxsc1xyXG5pbXBvcnQgXCIuL3BvbHlmaWxsXCI7XHJcblxyXG4vLyBMb2FkIHRvcCBsZXZlbCBtb2R1bGVzXHJcbmltcG9ydCBOYW1lc3BhY2UgZnJvbSBcIi4vTmFtZXNwYWNlXCI7XHJcbmltcG9ydCBVVUlEIGZyb20gXCIuL1VVSURcIjtcclxuaW1wb3J0IFNwZWNpYWxGdW5jdGlvbnMgZnJvbSBcIi4vU3BlY2lhbEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCIuL0V4cHJlc3Npb25SZXNvbHZlclwiO1xyXG5pbXBvcnQgQ29udmVydGVyIGZyb20gXCIuL0NvbnZlcnRlclwiO1xyXG5pbXBvcnQgUGFnaW5nVXRpbHMgZnJvbSBcIi4vUGFnaW5nVXRpbHNcIjtcclxuaW1wb3J0IFN0cmluZ1V0aWxzIGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCBVUkwgZnJvbSBcIi4vVVJMXCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIjtcclxuaW1wb3J0IEV2ZW50QmluZCBmcm9tIFwiLi9FdmVudEJpbmRcIjtcclxuXHJcbi8vIGxvYWQgcmVnZXggbW9kdWxlc1xyXG5pbXBvcnQgUmVnZXggZnJvbSBcIi4vcmVnZXgvUmVnZXhcIjtcclxuaW1wb3J0IE1hdGNoZXIgZnJvbSBcIi4vcmVnZXgvTWF0Y2hlclwiO1xyXG5cclxuXHJcblxyXG4vLyBjcmVhdGUgbmFtZXNwYWNlXHJcbk5hbWVzcGFjZShcImRlLnRpdHVzLmNvcmVcIiwgZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdE5hbWVzcGFjZSA6IE5hbWVzcGFjZSxcclxuXHRcdFVVSUQgOiBVVUlELFxyXG5cdFx0U3BlY2lhbEZ1bmN0aW9ucyA6IFNwZWNpYWxGdW5jdGlvbnMsXHJcblx0XHRFeHByZXNzaW9uUmVzb2x2ZXIgOiBFeHByZXNzaW9uUmVzb2x2ZXIsXHJcblx0XHRDb252ZXJ0ZXIgOiBDb252ZXJ0ZXIsXHJcblx0XHRTdHJpbmdVdGlscyA6IFN0cmluZ1V0aWxzLFxyXG5cdFx0VVJMOiBVUkwsXHJcblx0XHRQYWdlOiBQYWdlLFxyXG5cdFx0RXZlbnRCaW5kOiBFdmVudEJpbmQsXHJcblx0XHRyZWdleCA6IHtcclxuXHRcdFx0UmVnZXggOiBSZWdleCxcclxuXHRcdFx0TWF0Y2hlciA6IE1hdGNoZXJcclxuXHRcdH1cdFx0XHRcclxuXHR9O1xyXG59KTsiLCJpZiAoIUFycmF5LmZyb20pIHtcclxuXHRBcnJheS5mcm9tID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgcmVzdWx0ID0gW107XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgYXJnLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBhcmcubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgYXJnW2pdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGFyZ1tqXSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFyZ3VtZW50c1swXSkuZm9yRWFjaChcclxuXHRcdFx0XHRcdFx0XHQoZnVuY3Rpb24oYVJlc3VsdCwgYU5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlSW50KGFOYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzW2FOYW1lXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucHVzaCh0aGlzW2FOYW1lXSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSkuYmluZChhcmd1bWVudHNbMF0sIHJlc3VsdCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG59OyIsImlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XHJcblx0XHRwYXJhbXMgPSBwYXJhbXMgfHwge1xyXG5cdFx0ICAgIGJ1YmJsZXMgOiBmYWxzZSxcclxuXHRcdCAgICBjYW5jZWxhYmxlIDogZmFsc2UsXHJcblx0XHQgICAgZGV0YWlsIDogbnVsbFxyXG5cdFx0fTtcclxuXHRcdGxldCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuXHRcdGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XHJcblx0XHRyZXR1cm4gZXZ0O1xyXG5cdH1cclxuXHRDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xyXG5cdHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xyXG59XHJcbiIsImlmICh0eXBlb2YgU3RyaW5nLnByb3RvdHlwZS5oYXNoQ29kZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG5cdFN0cmluZy5wcm90b3R5cGUuaGFzaENvZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBoYXNoID0gMCwgaSwgY2hyO1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gaGFzaDtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNociA9IHRoaXMuY2hhckNvZGVBdChpKTtcclxuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hyO1xyXG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGhhc2g7XHJcblx0fTtcclxufTtcclxuIiwiaW1wb3J0IFwiLi9BcnJheVwiO1xyXG5pbXBvcnQgXCIuL1N0cmluZ1wiO1xyXG5pbXBvcnQgXCIuL0N1c3RvbUV2ZW50XCI7IiwibGV0IE1hdGNoZXIgPSBjbGFzc3tcclxuXHRjb25zdHJ1Y3RvcihhUmVnRXhwLFx0YVRleHQpIHtcclxuXHR0aGlzLmludGVybmFsUmVnZXggPSBhUmVnRXhwO1xyXG5cdHRoaXMucHJvY2Vzc2luZ1RleHQgPSBhVGV4dDtcclxuXHR0aGlzLmN1cnJlbnRNYXRjaCA9IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmlzTWF0Y2hpbmcoKSB7XHJcblx0cmV0dXJuIHRoaXMuaW50ZXJuYWxSZWdleC50ZXN0KHRoaXMucHJvY2Vzc2luZ1RleHQpO1xyXG59XHJcblxyXG5uZXh0KCkge1xyXG5cdHRoaXMuY3VycmVudE1hdGNoID0gdGhpcy5pbnRlcm5hbFJlZ2V4LmV4ZWModGhpcy5wcm9jZXNzaW5nVGV4dCk7XHJcblx0aWYgKHRoaXMuY3VycmVudE1hdGNoICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5wcm9jZXNzaW5nVGV4dCA9IHRoaXMucHJvY2Vzc2luZ1RleHQucmVwbGFjZSh0aGlzLmN1cnJlbnRNYXRjaFswXSxcclxuXHRcdFx0XHRcIlwiKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmdldE1hdGNoKCkge1xyXG5cdGlmICh0aGlzLmN1cnJlbnRNYXRjaCAhPSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50TWF0Y2hbMF07XHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZ2V0R3JvdXAoYUdyb3VwSWQpIHtcclxuXHRpZiAodGhpcy5jdXJyZW50TWF0Y2ggIT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudE1hdGNoW2FHcm91cElkXTtcclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5yZXBsYWNlQWxsIChhUmVwbGFjZVZhbHVlLCBhVGV4dCkge1xyXG5cdGlmICh0aGlzLmN1cnJlbnRNYXRjaCAhPSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm4gYVRleHQucmVwbGFjZSh0aGlzLmN1cnJlbnRNYXRjaFswXSwgYVJlcGxhY2VWYWx1ZSk7XHJcblx0cmV0dXJuIGFUZXh0O1xyXG59XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRjaGVyOyIsImltcG9ydCBNYXRjaGVyIGZyb20gXCIuL01hdGNoZXJcIjtcclxuXHJcblxyXG5sZXQgUmVnZXggPSBjbGFzcyB7XHJcblx0XHRjb25zdHJ1Y3RvcihhUmVnZXgsIGFPcHRpb25zKSB7XHJcblx0XHR0aGlzLmludGVybmFsUmVnZXggPSBuZXcgUmVnRXhwKGFSZWdleCwgYU9wdGlvbnMpO1xyXG5cdH1cclxuXHRcclxuXHRwYXJzZShhVGV4dCkge1xyXG5cdFx0cmV0dXJuIG5ldyBNYXRjaGVyKHRoaXMuaW50ZXJuYWxSZWdleCwgYVRleHQpO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdleDsiLCJpbXBvcnQgXCIuLi9wb2x5ZmlsbFwiO1xyXG5cclxubGV0IGV4dGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0cmV0dXJuO1x0XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0cmV0dXJuIGFyZ3VtZW50c1swXTtcclxuXHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHRcclxuXHRsZXQgZGVlcCA9IHR5cGVvZiBhcmdzWzBdID09PSBcImJvb2xlYW5cIiA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xyXG5cdGxldCB0YXJnZXQgPSBhcmdzLnNoaWZ0KCk7XHJcblx0d2hpbGUoYXJncy5sZW5ndGggIT0gMCl7XHJcblx0XHRsZXQgc291cmNlID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0aWYodHlwZW9mIHNvdXJjZSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaCgoZnVuY3Rpb24oYVNvdXJjZSwgYVRhcmdldCwgaXNEZWVwLCBhTmFtZSl7XHJcblx0XHRcdFx0bGV0IHNvdXJjZSA9IGFTb3VyY2VbYU5hbWVdO1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBzb3VyY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlICE9IG51bGwpe1xyXG5cdFx0XHRcdFx0bGV0IHRhcmdldCA9IGFUYXJnZXRbYU5hbWVdO1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIHRhcmdldCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0YXJnZXQgPT0gbnVsbClcclxuXHRcdFx0XHRcdFx0YVRhcmdldFthTmFtZV0gPSBzb3VyY2U7XHJcblx0XHRcdFx0XHRlbHNlIGlmKGRlZXAgJiYgQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIEFycmF5LmlzQXJyYXkoc291cmNlKSlcclxuXHRcdFx0XHRcdFx0dmFsdWUuY29uY2F0KGFTb3VyY2VbYU5hbWVdKTtcclxuXHRcdFx0XHRcdGVsc2UgaWYoZGVlcCAmJiB0eXBlb2YgdGFyZ2V0ICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB0YXJnZXQgPT09IHR5cGVvZiBzb3VyY2UpXHJcblx0XHRcdFx0XHRcdGV4dGVuZCh0cnVlLCB0YXJnZXQsIHNvdXJjZSk7XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLmJpbmQobnVsbCwgc291cmNlLCB0YXJnZXQsIGRlZXApKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcblxyXG5leHBvcnQgeyBleHRlbmQgfTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9