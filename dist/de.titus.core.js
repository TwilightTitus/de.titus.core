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
	FINISHED : "$$eventBind.FINISHED$$"
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
	
	if (typeof data.action !== 'undefined') {
		let action = expressionResolver.resolveExpression(data.action, anEvent.data, undefined);
		if (typeof action === "function")			
			action.apply(action, args);
	}
	else if (typeof data.delegation !== 'undefined')
		element.trigger(data.delegation, args);

	return !anEvent.isDefaultPrevented();
};


const EventBind = function(anElement, aContext) {
	if(typeof anElement === "undefined")
		return;
	
	if(anElement instanceof NodeList)
		return anElement.forEach((function(aContext, anElement){
			EventBind(anElement, aContext);
		}).bind(null, aContext));
	
	let result = {
	    preventDefault : (typeof anElement.attr("event-prevent-default") !== "undefined"),
	    stopPropagation : (typeof anElement.attr("event-stop-propagation") !== "undefined")
	};
	result.eventType = anElement.attr("event-type");
	if (result.eventType){
		anElement.data(STATE.FINISHED, FINISHEDSTATE.FAIL);
		return;
	}
	
	result.action = anElement.attr("event-action");
	result.delegation = anElement.attr("event-delegation");

	if (!(result.action || result.delegation)) {
		anElement.data(STATE.FINISHED, FINISHEDSTATE.FAIL);
		return;
	}

	result.eventData = anElement.attr("event-data");
	if (!result.eventData && result.eventData.length > 0)
		result.eventData = expressionResolver.resolveExpression(eventData, aContext, {});
	else if (typeof aContext !== 'undefined')
		result.eventData = _utils_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({}, aContext);
	
	if (result.eventData)
		anElement.on(result.eventType, null, result.eventData, Executer);
	else
		anElement.on(result.eventType, Executer);
	
	anElement.data(STATE.FINISHED, FINISHEDSTATE.READY);
	return result;
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
/* harmony import */ var _jquery_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jquery/index */ "./src/jquery/index.js");
/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regex */ "./src/regex/index.js");
// Load all polyfills


// Load top level modules












// load regex modules




// create namespace
Object(_Namespace__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])("de.titus.core", function() {
	return {
		VERSION : "2.0.0-beta1",
		Namespace : _Namespace__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
		UUID : _UUID__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
		SpecialFunctions : _SpecialFunctions__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
		ExpressionResolver : _ExpressionResolver__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
		Converter : _Converter__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
		StringUtils : _StringUtils__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
		URL: _URL__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
		Page: _Page__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
		EventBind: _EventBind__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
		regex : _regex__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"],
		jquery : _jquery_index__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]
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
	if (this.length == 0)
		return;
	else if (this.length > 1) {
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

const Component = function(aName, aConstructor) {
	if(!$){
		let functionName = buildFunctionName(aName);
		$.fn[functionName] = createInstance.bind(aName, functionName, aConstructor);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Component);


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


const JQuery = {
	Component : _Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
	Components : {
		asComponent : _Component__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
	}
};

/* harmony default export */ __webpack_exports__["a"] = (JQuery);

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
let Matcher = function (aRegExp, aText) {
	
	this.internalRegex = typeof aRegExp; 
	this.processingText = aText;
	this.currentMatch = undefined;
};

Matcher.prototype.isMatching = function() {
	return this.internalRegex.test(this.processingText);
};

Matcher.prototype.next = function() {
	this.currentMatch = this.internalRegex.exec(this.processingText);
	if (typeof this.currentMatch !== "undefined") {
		this.processingText = this.processingText.replace(this.currentMatch[0],	"");
		return true;
	}
	return false;
};

Matcher.prototype.getMatch = function() {
	if (typeof this.currentMatch !== "undefined")
		return this.currentMatch[0];
	return undefined;
};

Matcher.prototype.getGroup = function(aGroupId) {
	if (typeof this.currentMatch !== "undefined")
		return this.currentMatch[aGroupId];
	return undefined;
};

Matcher.prototype.replaceAll = function(aReplaceValue, aText) {
	if (typeof this.currentMatch !== "undefined")
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



const pack = {
	Regex : _Regex__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
	Matcher : _Matcher__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
};

/* harmony default export */ __webpack_exports__["a"] = (pack);

/***/ }),

/***/ "./src/utils/ObjectUtils.js":
/*!**********************************!*\
  !*** ./src/utils/ObjectUtils.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

const ObjectUtils = {
		extend : extend
};

/* harmony default export */ __webpack_exports__["a"] = (ObjectUtils);




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvSlF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0hUTUxFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0hUTUxJbnB1dEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vSFRNTFNlbGVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL0Jhc2ljUXVlcnlTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvRGF0YVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvTGlzdFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvTm9kZVF1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9wb2x5ZmlsbC9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL3BvbHlmaWxsL0N1c3RvbUV2ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvdXRpbHMvRGVsZWdhdGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL3V0aWxzL0V4dGVuZFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Db252ZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50QmluZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9OYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhZ2luZ1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9TcGVjaWFsRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9TdHJpbmdVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVVJMLmpzIiwid2VicGFjazovLy8uL3NyYy9VVUlELmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5L0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbC9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwvQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxsL1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZ2V4L01hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZ2V4L1JlZ2V4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvT2JqZWN0VXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQjtBQUNDOzs7Ozs7Ozs7Ozs7OztBQ0RsQjs7QUFFQSxxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxnRUFBTyxFOzs7Ozs7Ozs7Ozs7O0FDdEN0QjtBQUFnQzs7QUFFaEM7QUFDQTtBQUNBLEU7QUFDQTtBQUNBLFlBQVksd0RBQU87QUFDbkI7QUFDZSw4REFBSyxFOzs7Ozs7Ozs7Ozs7O0FDUnBCO0FBQUE7QUFBNEI7QUFDSTs7QUFFaEM7QUFDQSxTQUFTLHNEQUFLO0FBQ2QsV0FBVyx3REFBTztBQUNsQjs7QUFFZSw2REFBSSxFOzs7Ozs7Ozs7Ozs7O0FDUm5CO0FBQXFCOztBQUVyQjtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7O0FBRUEsa0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsb0VBQVcsRUFBQyIsImZpbGUiOiJkZS50aXR1cy5jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwiaW1wb3J0IFwiLi9zcmMvaW5kZXhcIjsiLCIoZnVuY3Rpb24oR2xvYmFsKSB7XHJcblx0Y29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG5cclxuXHRHbG9iYWwuZmluZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmZpbmQuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHJcblx0R2xvYmFsLnJlYWR5ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQucmVhZHkuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHJcblx0R2xvYmFsLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcclxuXHJcblx0XHRsZXQgYm9keSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoYXJndW1lbnRzWzBdLnRyaW0oKSxcclxuXHRcdFx0XHRhcmd1bWVudHNbMV0gfHwgXCJ0ZXh0L2h0bWxcIikuZmluZChcImJvZHlcIik7XHJcblx0XHRsZXQgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHRcdGxldCBub2RlcyA9IGJvZHkuY2hpbGROb2RlcztcclxuXHRcdHdoaWxlIChub2Rlcy5sZW5ndGggIT0gMClcclxuXHRcdFx0ZnJhZy5hcHBlbmQobm9kZXNbMF0pO1xyXG5cclxuXHRcdHJldHVybiBmcmFnLmNoaWxkTm9kZXM7XHJcblx0fTtcclxufSkod2luZG93IHx8IGdsb2JhbCk7IiwiaW1wb3J0IFwiLi9HbG9iYWxcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTEVsZW1lbnRcIjtcclxuKGZ1bmN0aW9uKEdsb2JhbCkge1xyXG5cdC8qKlxyXG5cdCAqIEpRdWVyeSBwcmV2ZW50IGpxdWVyeVxyXG5cdCAqL1xyXG5cdGNvbnN0ICQgPSBHbG9iYWwuJCA9IEdsb2JhbC5KUXVlcnkgPSBHbG9iYWwualF1ZXJ5ID0gR2xvYmFsLiQgfHwgZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQ7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHtcdFx0XHRcclxuXHRcdFx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRyZXR1cm4gR2xvYmFsLnJlYWR5LmFwcGx5KEdsb2JhbCwgYXJndW1lbnRzKTtcclxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdGlmICgvPFtePF0rPi9nLnRlc3QoYXJndW1lbnRzWzBdKSlcclxuXHRcdFx0XHRcdHJldHVybiBHbG9iYWwuY3JlYXRlLmFwcGx5KEdsb2JhbCwgYXJndW1lbnRzKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXR1cm4gR2xvYmFsLmZpbmQuYXBwbHkoR2xvYmFsLCBhcmd1bWVudHMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmV0dXJuIGFyZ3VtZW50c1swXTtcclxuXHRcdH1cclxuXHR9O1xyXG59KSh3aW5kb3cgfHwgZ2xvYmFsKTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEJhc2ljUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQmFzaWNRdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IEV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0V2ZW50U3VwcG9ydFwiO1xyXG5pbXBvcnQgUmVhZHlFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9SZWFkeUV2ZW50U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKERvY3VtZW50LnByb3RvdHlwZSwgQmFzaWNRdWVyeVN1cHBvcnQsIEV2ZW50U3VwcG9ydCwgUmVhZHlFdmVudFN1cHBvcnQpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuXHRkb2N1bWVudC50cmlnZ2VyKFwicmVhZHlcIik7XHJcbn0pO1xyXG5cclxuXHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgQmFzaWNRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9CYXNpY1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgTm9kZVF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL05vZGVRdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IEh0bWxDbGFzc1N1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0XCI7XHJcbmltcG9ydCBFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnRcIjtcclxuaW1wb3J0IFNob3dIaWRlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MRWxlbWVudC5wcm90b3R5cGUsQmFzaWNRdWVyeVN1cHBvcnQsTm9kZVF1ZXJ5U3VwcG9ydCxIdG1sQ2xhc3NTdXBwb3J0LEV2ZW50U3VwcG9ydCxTaG93SGlkZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFNlbGVjdEVsZW1lbnQucHJvdG90eXBlLFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEYXRhU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0RhdGFTdXBwb3J0XCI7XHJcbmltcG9ydCBNYW5pcHVsYXRpb25TdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTWFuaXB1bGF0aW9uU3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGUucHJvdG90eXBlLERhdGFTdXBwb3J0LE1hbmlwdWxhdGlvblN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGVMaXN0LnByb3RvdHlwZSwgTGlzdFN1cHBvcnQpO1xyXG5cclxuRGVsZWdhdGVyQnVpbGRlcihmdW5jdGlvbihhRnVuY3Rpb25OYW1lLCB0aGVBcmd1bWVudHMpe1xyXG5cdGxldCBub2RlcyA9IHRoaXMudmFsdWVzKCk7XHJcblx0bGV0IG5vZGUgPSBub2Rlcy5uZXh0KCk7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcclxuXHR3aGlsZShub2RlICYmIG5vZGUudmFsdWUpe1xyXG5cdFx0bm9kZSA9IG5vZGUudmFsdWU7XHJcblx0XHRpZih0eXBlb2Ygbm9kZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygbm9kZVthRnVuY3Rpb25OYW1lXSA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYodHlwZW9mIHJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiByZXN1bHQgIT0gbnVsbCl7XHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgQXJyYXkpXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQocmVzdWx0KTtcclxuXHRcdFx0XHRlbHNlIGlmKHJlc3VsdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0XHRcdFx0cmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KEFycmF5LmZyb20ocmVzdWx0KSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdClcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHRcdG5vZGUgPSBub2Rlcy5uZXh0KCk7XHRcdFxyXG5cdH1cclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRlbHNlIGlmKHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20ocmVzdWx0cyk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHRcclxufSxOb2RlTGlzdC5wcm90b3R5cGUsIE5vZGUucHJvdG90eXBlLCBIVE1MRWxlbWVudC5wcm90b3R5cGUsIEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZSk7XHJcblxyXG5cclxuTm9kZUxpc3QuZnJvbSA9IGZ1bmN0aW9uKCl7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwidW5kZWZpbmVkXCIgJiYgIGFyZ3VtZW50c1swXSBpbnN0YW5jZW9mIE5vZGVMaXN0KXtcclxuXHRcdHJldHVybiBhcmd1bWVudHNbMF07XHRcdFxyXG5cdH1cclxuXHRlbHNle1xyXG5cdFx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRsZXQgaW50ZXJuYWwgPSB7XHJcblx0XHRcdGxlbmd0aDoge3ZhbHVlOiAwfVxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdFx0bGV0IGxpc3QgPSBBcnJheS5mcm9tKGFyZ3Muc2hpZnQoKSk7XHRcdFxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGxpc3RbaV0gIT09IFwidW5kZWZpbmVkXCIgJiYgbGlzdFtpXSBpbnN0YW5jZW9mIE5vZGUpe1xyXG5cdFx0XHRcdFx0aW50ZXJuYWxbaV0gPSB7dmFsdWU6IGxpc3RbaV0sIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRcdFx0aW50ZXJuYWwubGVuZ3RoLnZhbHVlKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHJcblx0XHRyZXR1cm4gT2JqZWN0LmNyZWF0ZShOb2RlTGlzdC5wcm90b3R5cGUsaW50ZXJuYWwgKTtcclxuXHR9XHJcbn0iLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0Y29uc3QgcGFyZW50U2VsZWN0b3IgPSAvOnBhcmVudChcXChcXFwiKFteXFwpXSopXFxcIlxcKSk/L2k7XHJcblx0XHJcblx0UHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbihhU2VsZWN0b3IpIHtcclxuXHRcdGxldCBtYXRjaCA9IHBhcmVudFNlbGVjdG9yLmV4ZWMoYVNlbGVjdG9yKTtcclxuXHRcdGlmKG1hdGNoKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IHRoaXM7XHJcblx0XHRcdGlmKG1hdGNoLmluZGV4ID4gMCl7XHJcblx0XHRcdFx0cmVzdWx0ID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvci5zdWJzdHIoMCwgbWF0Y2guaW5kZXgpKTtcclxuXHRcdFx0XHRpZihyZXN1bHQubGVuZ3RoID09IDApXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdFx0aWYodHlwZW9mIG1hdGNoWzJdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5wYXJlbnQobWF0Y2hbMl0pO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnBhcmVudCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYodHlwZW9mIHJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgbmV4dFNlbGVjdG9yID0gYVNlbGVjdG9yLnN1YnN0cihtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCkudHJpbSgpO1xyXG5cdFx0XHRpZihuZXh0U2VsZWN0b3IudHJpbSgpLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdC5maW5kKG5leHRTZWxlY3Rvcik7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1x0XHRcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChhU2VsZWN0b3IpO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcblxyXG4iLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0UHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5fX2RhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0dGhpcy5fX2RhdGEgPSB7fTtcclxuXHRcdFx0aWYodHlwZW9mIHRoaXMuZGF0YXNldCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdGhpcy5kYXRhc2V0KVxyXG5cdFx0XHRcdFx0dGhpcy5fX2RhdGFbbmFtZV0gPSB0aGlzLmRhdGFzZXRbbmFtZV07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19kYXRhO1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2RhdGFbYXJndW1lbnRzWzBdXSA7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRkZWxldGUgdGhpcy5fX2RhdGFbYXJndW1lbnRzWzBdXTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5fX2RhdGFbYXJndW1lbnRzWzBdXSA9IGFyZ3VtZW50c1sxXTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgXCIuLi8uLi9wb2x5ZmlsbC9DdXN0b21FdmVudFwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdGNvbnN0IFdyYXBwZWRFdmVudEhhbmRsZXIgPSBmdW5jdGlvbihhQ29uZmlnLCBhQ2FsbGJhY2sgLGFFdmVudCl7XHJcblx0XHRpZih0eXBlb2YgYUNvbmZpZy5maWx0ZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgIWFFdmVudC50YXJnZXQuaXMoYUNvbmZpZy5maWx0ZXIpKVx0XHRcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0XHJcblx0XHRsZXQgYXJncyA9IFthRXZlbnRdO1xyXG5cdFx0aWYodHlwZW9mIGFDb25maWcuZGF0YSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0YXJncyA9IGFyZ3MuY29uY2F0KGFDb25maWcuZGF0YSk7XHJcblx0XHRcclxuXHRcdGxldCByZXN1bHQgPSBhQ2FsbGJhY2suYXBwbHkoYUNhbGxiYWNrLCBhcmdzKTtcclxuXHRcdGlmKGFDb25maWcuc2luZ2xlQ2FsbClcclxuXHRcdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGFDYWxsYmFjayk7XHJcblx0XHRcclxuXHRcdHJldHVybiByZXN1bHQ7XHRcdFxyXG5cdH07XHJcblx0XHJcblx0XHJcblx0Y29uc3QgYWRkRXZlbnRMaXN0ZW5lciA9IFByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xyXG5cdFByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRvbyBsZXNzIGFyZ3VtZW50cyFcIik7XHJcblxyXG5cdFx0dGhpcy5vbihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUb28gbGVzcyBhcmd1bWVudHMhXCIpO1xyXG5cdFx0XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuX19jYWxsYmFja01hcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0dGhpcy5fX2NhbGxiYWNrTWFwID0ge307XHJcblxyXG5cdFx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRsZXQgZXZlbnRzID0gYXJncy5zaGlmdCgpLnNwbGl0KC8oXFxzKyl8KFxccyosXFxzKikvKTtcclxuXHRcdGxldCBoYW5kbGVyQ29uZmlnID0ge1xyXG5cdFx0XHRmaWx0ZXIgOiAodHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBhcmdzLnNoaWZ0KCkuc3BsaXQoL1xccyosXFxzKi8pIDogdW5kZWZpbmVkKSxcclxuXHRcdFx0ZGF0YSA6ICh0eXBlb2YgYXJnc1swXSAhPT0gXCJmdW5jdGlvblwiID8gYXJncy5zaGlmdCgpIDogdW5kZWZpbmVkKVxyXG5cdFx0fTtcclxuXHQgICAgbGV0IGNhbGxiYWNrID0gYXJncy5zaGlmdCgpO1xyXG5cdCAgICBcclxuXHQgICAgaGFuZGxlckNvbmZpZy5zaW5nbGVDYWxsID0gKHR5cGVvZiBhcmdzWzBdICE9PSBcImJvb2xlYW5cIiA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlKTtcclxuXHJcblx0XHRsZXQgZXZlbnRNYXAgPSB7fTtcclxuXHRcdGV2ZW50cy5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIGNvbmZpZywgY2FsbGJhY2ssIGV2ZW50KXtcclxuXHRcdFx0bGV0IHdyYXBwZWRFdmVudEhhbmRsZXIgPSBXcmFwcGVkRXZlbnRIYW5kbGVyLmJpbmQodGhpcywgY29uZmlnLCBjYWxsYmFjayk7XHJcblx0XHRcdHJlc3VsdFtldmVudF0gPSB3cmFwcGVkRXZlbnRIYW5kbGVyO1x0XHRcdFxyXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQsIHdyYXBwZWRFdmVudEhhbmRsZXIsIHRydWUpO1xyXG5cdFx0XHRcclxuXHRcdH0pLmJpbmQodGhpcywgZXZlbnRNYXAsIGhhbmRsZXJDb25maWcsIGNhbGxiYWNrKSk7XHJcblx0XHRcclxuXHRcdHRoaXMuX19jYWxsYmFja01hcFtjYWxsYmFja10gPSBldmVudE1hcDtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcdFxyXG5cdFxyXG5cdGNvbnN0IHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcclxuXHRQcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IFByb3RvdHlwZS5yZW1vdmVPbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggIT0gMSB8fCB0eXBlb2YgdGhpcy5fX2NhbGxiYWNrTWFwID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXR1cm4gcmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdGxldCBldmVudHMgPSB1bmRlZmluZWQ7XHJcblx0XHRsZXQgY2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcblx0XHRpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRldmVudHMgPSBhcmd1bWVudHNbMF0uc3BsaXQoLyhcXHMrKXwoXFxzKixcXHMqKS8pO1xyXG5cdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdGNhbGxiYWNrID0gYXJndW1lbnRzWzBdLnNoaWZ0KCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIldyb25nIGFyZ3VtZW50ISAtPiBjYWxsIGZ1bmN0aW9uKFtldmVudHxoYW5kbGVyXSlcIik7XHJcblx0XHRcclxuXHRcdGxldCByZW1vdmFsSGFuZGxlciA9IFtdO1xyXG5cdFx0aWYodHlwZW9mIGV2ZW50cyA9PT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdGV2ZW50TWFwID0gdGhpcy5fX2NhbGxiYWNrTWFwW2NhbGxiYWNrXTtcclxuXHRcdFx0aWYodHlwZW9mIGV2ZW50TWFwICE9PSBcInVuZGVmaW5lZFwiKXtcclxuXHRcdFx0XHRldmVudE1hcC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCkuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBldmVudE1hcCwgZXZlbnQpe1xyXG5cdFx0XHRcdFx0bGV0IGhhbmRsZXIgPSBldmVudE1hcFtldmVudF07XHJcblx0XHRcdFx0XHRpZih0eXBlb2YgaGFuZGxlciAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goaGFuZGxlcik7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgcmVtb3ZhbEhhbmRsZXIsIGV2ZW50TWFwKSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuX19jYWxsYmFja01hcFtjYWxsYmFja107XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRldmVudHMuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBldmVudCl7XHJcblx0XHRcdFx0T2JqZWN0LmdldFByb3BlcnR5TmFtZXModGhpcy5fX2NhbGxiYWNrTWFwKS5mb3JFYWNoKChmdW5jdGlvbihhRXZlbnQsIENhbGxiYWNrKXtcclxuXHRcdFx0XHRcdGxldCBldmVudE1hcCA9IHRoaXMuX19jYWxsYmFja01hcFtDYWxsYmFja107XHJcblx0XHRcdFx0XHRkZWxldGUgZXZlbnRNYXBbYUV2ZW50XTtcclxuXHRcdFx0XHRcdGlmKGV2ZW50TWFwLmdldE93blByb3BlcnR5TmFtZXMoKSA9PSAwKVxyXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5fX2NhbGxiYWNrTWFwW0NhbGxiYWNrXTtcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIGV2ZW50KSk7XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0XHJcblx0UHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IGV2ZW50ID0gdW5kZWZpbmVkO1xyXG5cdFx0aWYodHlwZW9mIHRoaXNbXCJvblwiICsgYXJndW1lbnRzWzBdXSA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0ZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xyXG5cdFx0XHRldmVudC5pbml0RXZlbnQoYXJndW1lbnRzWzBdLCB0cnVlLCB0cnVlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0ZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoYXJndW1lbnRzWzBdLCAgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBkZXRhaWw6IGFyZ3VtZW50c1sxXSB9KTtcclxuXHRcdFxyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcbiIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5hZGRDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3MoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMudG9vZ2xlQ2xhc3MoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcdFxyXG5cdFByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0aWYodGhpc1tpXSA9PSBhcmd1bWVudHNbMF0pXHJcblx0XHRcdFx0cmV0dXJuIGk7XHJcblx0XHRcclxuXHRcdHJldHVybiAtMTtcclxuXHR9O1xyXG5cdFxyXG5cdGlmKHR5cGVvZiBQcm90b3R5cGUuZm9yRWFjaCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiB0aGlzWzBdO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgXCIuLi8uLi9wb2x5ZmlsbC9BcnJheVwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cclxuXHRQcm90b3R5cGUuYXR0ciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlcygpID8gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSB7fTtcclxuXHRcdFx0XHR0aGlzLmdldEF0dHJpYnV0ZU5hbWVzKCkuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHJlc3VsdCkpO1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH0pLmNhbGwodGhpcykgOiB1bmRlZmluZWQ7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhcmd1bWVudHNbMV0gPT0gbnVsbClcclxuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgbm9kZXMgPSB0aGlzLmNoaWxkTm9kZXNcclxuXHRcdHdoaWxlKG5vZGVzLmxlbmd0aCAhPSAwKVx0XHRcdFxyXG5cdFx0XHRub2Rlc1swXS5yZW1vdmUodHJ1ZSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmNvbnRlbnQgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGROb2RlcztcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0aWYoYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm91dGVySFRNTDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgXHJcblx0XHRcdEFycmF5LmZyb20oYXJndW1lbnRzKS5mb3JFYWNoKChmdW5jdGlvbihjb250ZW50KXtcclxuXHRcdFx0XHRpZih0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gY29udGVudDtcclxuXHRcdFx0XHRlbHNlIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBFbGVtZW50KXtcclxuXHRcdFx0XHRcdHRoaXMuZW1wdHkoKTtcclxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGNvbnRlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHRcdFxyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi4vLi4vcG9seWZpbGwvQXJyYXlcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRcclxuXHRQcm90b3R5cGUuaXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSl7XHJcblx0XHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubWF0Y2hlcyhhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0ubGVuZ3RoID09PSBcIm51bWJlclwiKXtcclxuXHRcdFx0XHRsZXQgZmlsdGVyID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBmaWx0ZXIubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHRpZih0aGlzLm1hdGNoZXMoZmlsdGVyW2ldKSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuaXMoQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUucGFyZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRlbHNlIGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpe1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG5cdFx0XHR3aGlsZSghcGFyZW50LmlzKGFyZ3VtZW50c1swXSkpXHJcblx0XHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudChhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnBhcmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCByZXN1bHQgPSBuZXcgQXJyYXkoKTtcclxuXHRcdGxldCBwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR3aGlsZShwYXJlbnQpe1xyXG5cdFx0XHRyZXN1bHQucHVzaChwYXJlbnQpO1xyXG5cdFx0XHRwYXJlbnQgPSBQcm90b3R5cGUucGFyZW50LmFwcGx5KHBhcmVudCwgYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20ocmVzdWx0KTtcclxuXHR9O1x0XHJcblxyXG5cdFByb3RvdHlwZS5zZWxlY3RvciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0eXBlb2YgdGhpcy5pZCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0aGlzLmlkLmxlbmd0aCA9PSAwKXtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50KCk7XHJcblx0XHRcdGlmKHBhcmVudCBpbnN0YW5jZW9mIERvY3VtZW50IHx8IHBhcmVudCBpbnN0YW5jZW9mICBEb2N1bWVudEZyYWdtZW50KVxyXG5cdFx0XHRcdHBhcmVudCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gdGhpcy5sb2NhbE5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0aWYodHlwZW9mIHBhcmVudCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdFx0bGV0IHNhbWVUYWdTaWJsaW5ncyA9IHBhcmVudC5maW5kKFwiOnNjb3BlPlwiICsgc2VsZWN0b3IpO1x0XHRcdFxyXG5cdFx0XHRcdGlmIChzYW1lVGFnU2libGluZ3MgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gc2FtZVRhZ1NpYmxpbmdzLmluZGV4T2YodGhpcykgKyAxO1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID4gMClcclxuXHRcdFx0XHRcdFx0c2VsZWN0b3IgKz0gJzpudGgtY2hpbGQoJyArIGluZGV4ICsgJyknO1xyXG5cdFx0XHRcdH1cdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBwYXJlbnQgIT09IFwidW5kZWZpbmVkXCIgPyBwYXJlbnQuc2VsZWN0b3IoKSArIFwiPlwiICsgc2VsZWN0b3IgOiBzZWxlY3RvcjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcclxuXHR9O1x0XHJcblxyXG5cdFByb3RvdHlwZS5jbG9zZXN0cyA9IGZ1bmN0aW9uKGFRdWVyeSkge1xyXG5cdFx0aWYodGhpcy5pcyhhUXVlcnkpKVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdGVsc2V7XHJcblx0XHRcdGxldCByZXN1bHQgPSB0aGlzLmZpbmQoYVF1ZXJ5LCB0cnVlKTtcclxuXHRcdFx0aWYocmVzdWx0Lmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCgpO1xyXG5cdFx0XHRpZih0eXBlb2YgcGFyZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHBhcmVudCAhPSBkb2N1bWVudClcclxuXHRcdFx0XHRyZXR1cm4gcGFyZW50LmNsb3Nlc3QoYVF1ZXJ5KTtcclxuXHRcdH1cdFx0XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uKGFRdWVyeSl7XHJcblx0XHRsZXQgcmVzdWx0ID0gdGhpcy5jbG9zZXN0cyhhUXVlcnkpO1xyXG5cdFx0aWYodHlwZW9mIHJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0cmV0dXJuIHJlc3VsdFswXTtcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHJcblx0UHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24oYUZ1bmN0aW9uLCBvbmNlKXtcdFxyXG5cdFx0dGhpcy5vbihcInJlYWR5XCIsIGFGdW5jdGlvbiwgb25jZSk7XHJcblx0XHRpZihkb2N1bWVudC5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIilcdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwicmVhZHlcIik7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cclxuXHRQcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLl9faXNoaWRlKXtcclxuXHRcdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fX2Rpc3BsYXkgfHwgXCJcIjtcclxuXHRcdFx0dGhpcy5fX2lzaGlkZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZighdGhpcy5fX2lzaGlkZSl7XHJcblx0XHRcdHRoaXMuX19kaXNwbGF5ID0gdGhpcy5zdHlsZS5kaXNwbGF5O1xyXG5cdFx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0dGhpcy5fX2lzaGlkZSA9IHRydWU7XHJcblx0XHR9XHRcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUudG9nZ2xlU2hvdyA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLl9faXNoaWRlKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLmhpZGUoKTtcclxuXHR9O1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBcIi4uLy4uL3BvbHlmaWxsL0FycmF5XCI7XHJcbmNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRjb25zdCBJbnB1dFR5cGVzID1bXHJcblx0XHR7XHJcblx0XHRcdHNlbGVjdG9yIDogXCJzZWxlY3RcIixcclxuXHRcdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gW107XHJcblx0XHRcdFx0dGhpcy5maW5kKFwib3B0aW9uOmNoZWNrZWRcIiwgdHJ1ZSkuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBvcHRpb24pe1xyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gob3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHJlc3VsdCkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiYm9vbGVhblwiICYmIGFyZ3VtZW50c1swXSlcclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XHRcdFx0XHRcclxuXHRcdFx0XHRlbHNlIGlmKHJlc3VsdC5sZW5ndGggPT0gMSlcclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHRbMF07XHJcblx0XHRcdFx0ZWxzZSBpZihyZXN1bHQubGVuZ3RoID4gMSlcclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0IDogZnVuY3Rpb24oKXtcdFx0XHRcdFxyXG5cdFx0XHRcdGxldCB2YWx1ZXMgPSBbXTtcclxuXHRcdFx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRcdHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoYXJndW1lbnRzWzBdKTtcclxuXHRcdFx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdChBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuZmluZChcIm9wdGlvblwiLCB0cnVlKS5mb3JFYWNoKChmdW5jdGlvbih2YWx1ZXMsIG9wdGlvbil7XHJcblx0XHRcdFx0XHRsZXQgY2hlY2sgPSB2YWx1ZXMuaW5kZXhPZihvcHRpb24udmFsdWUpID4gLTE7XHJcblx0XHRcdFx0XHRpZihjaGVjaylcclxuXHRcdFx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCB2YWx1ZXMpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRzZWxlY3RvciA6IFwib3B0aW9uXCIsXHJcblx0XHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0aWYodGhpcy5zZWxlY3RlZClcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBhVmFsdWUgPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZCA9IGFWYWx1ZTtcclxuXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBhVmFsdWUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gYVZhbHVlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHRcdFx0XHRcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0c2VsZWN0b3IgOiBcImlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl1cIixcclxuXHRcdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgdGhpcy52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0aGlzLnZhbHVlID09IFwib25cIilcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrZWQ7XHJcblx0XHRcdFx0ZWxzZSBpZih0aGlzLmNoZWNrZWQpXHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBhVmFsdWUgPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRcdFx0dGhpcy5jaGVja2VkID0gYVZhbHVlO1xyXG5cdFx0XHRcdGVsc2UgaWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdF07XHJcblx0XHJcblx0Y29uc3QgRGVmYXVsdElucHV0VHlwZSA9IHtcclxuXHRcdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gYVZhbHVlO1xyXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihcImlucHV0XCIpO1xyXG5cdFx0XHR9XHRcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IGdldElucHV0VHlwZSA9IGZ1bmN0aW9uKGFFbGVtZW50KXtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBJbnB1dFR5cGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRpZihhRWxlbWVudC5pcyhJbnB1dFR5cGVzW2ldLnNlbGVjdG9yKSlcclxuXHRcdFx0XHRyZXR1cm4gSW5wdXRUeXBlc1tpXTtcdFx0XHJcblx0XHRyZXR1cm4gRGVmYXVsdElucHV0VHlwZTtcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdFByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB0eXBlID0gZ2V0SW5wdXRUeXBlKHRoaXMpO1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdFx0cmV0dXJuIHR5cGUuZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHR0eXBlLnNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHRcdFxyXG5cdH07XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiXHJcbmltcG9ydCBcIi4vZG9tL05vZGUuanNcIjtcclxuaW1wb3J0IFwiLi9kb20vRG9jdW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTElucHV0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MU2VsZWN0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlTGlzdFwiO1xyXG5pbXBvcnQgXCIuL0dsb2JhbFwiO1xyXG5pbXBvcnQgXCIuL0pRdWVyeVwiO1xyXG4iLCJpZiAoIUFycmF5LmZyb20pIHtcclxuXHRBcnJheS5mcm9tID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgcmVzdWx0ID0gW107XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgYXJnLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBhcmcubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgYXJnW2pdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGFyZ1tqXSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFyZ3VtZW50c1swXSkuZm9yRWFjaChcclxuXHRcdFx0XHRcdFx0XHQoZnVuY3Rpb24oYVJlc3VsdCwgYU5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlSW50KGFOYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzW2FOYW1lXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucHVzaCh0aGlzW2FOYW1lXSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSkuYmluZChhcmd1bWVudHNbMF0sIHJlc3VsdCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG59OyIsImlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XHJcblx0XHRwYXJhbXMgPSBwYXJhbXMgfHwge1xyXG5cdFx0ICAgIGJ1YmJsZXMgOiBmYWxzZSxcclxuXHRcdCAgICBjYW5jZWxhYmxlIDogZmFsc2UsXHJcblx0XHQgICAgZGV0YWlsIDogbnVsbFxyXG5cdFx0fTtcclxuXHRcdGxldCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuXHRcdGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XHJcblx0XHRyZXR1cm4gZXZ0O1xyXG5cdH1cclxuXHRDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xyXG5cdHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xyXG59XHJcbiIsImNvbnN0IERlbGVnYXRlckJ1aWxkZXIgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgY2FsbGJhY2sgPSBhcmdzLnNoaWZ0KCk7XHJcblx0bGV0IHNvdXJjZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRhcmdzLmZvckVhY2goKGZ1bmN0aW9uKGFTb3VyY2UsIGFDYWxsYmFjaywgYVRhcmdldCl7XHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhVGFyZ2V0KS5mb3JFYWNoKFxyXG5cdFx0XHRcdChmdW5jdGlvbihhU291cmNlLCBhVGFyZ2V0LGFDYWxsYmFjaywgIGFOYW1lKSB7XHJcblx0XHRcdFx0XHRsZXQgcHJvcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYVRhcmdldCwgYU5hbWUpO1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBhU291cmNlW2FOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcHJvcC52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0XHRhU291cmNlW2FOYW1lXSA9IGZ1bmN0aW9uKCl7cmV0dXJuIGFDYWxsYmFjay5jYWxsKHRoaXMsIGFOYW1lLCBhcmd1bWVudHMpO307XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHR9KS5iaW5kKG51bGwsIGFTb3VyY2UsIGFUYXJnZXQsIGFDYWxsYmFjaykpO1xyXG5cdH0pLmJpbmQobnVsbCwgc291cmNlLCBjYWxsYmFjaykpO1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEZWxlZ2F0ZXJCdWlsZGVyOyIsImltcG9ydCBcIi4uL3BvbHlmaWxsL0FycmF5XCI7XHJcblxyXG5jb25zdCBleHRlbmRQcm90b3R5cGUgPSBmdW5jdGlvbigpe1xyXG5cdGxldCBhcmdzID0gXHRBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IHByb3RvdHlwZSA9IGFyZ3Muc2hpZnQoKTsgXHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGxldCBleHRlbmRlciA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGV4dGVuZGVyKHByb3RvdHlwZSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kUHJvdG90eXBlOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0IENvbnZlcnRlciA9IHtcclxuXHR4bWxUb0pzb24gOiBmdW5jdGlvbihhTm9kZSkge1xyXG5cdFx0Ly8gQ3JlYXRlIHRoZSByZXR1cm4gb2JqZWN0XHJcblx0XHRsZXQgb2JqID0ge307XHJcblx0XHRpZiAoYU5vZGUubm9kZVR5cGUgPT0gMSB8fCBhTm9kZS5ub2RlVHlwZSA9PSA5KSB7IC8vIGVsZW1lbnRcclxuXHRcdFx0Ly8gZG8gYXR0cmlidXRlc1xyXG5cdFx0XHRpZiAoYU5vZGUuYXR0cmlidXRlcyAhPSB1bmRlZmluZWQgJiYgYU5vZGUuYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0bGV0IGF0dHJpYnV0ZXMgPSB7fTtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFOb2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCBhdHRyaWJ1dGUgPSBhTm9kZS5hdHRyaWJ1dGVzLml0ZW0oaSk7XHJcblx0XHRcdFx0XHRhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5ub2RlTmFtZV0gPSBhdHRyaWJ1dGUubm9kZVZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRvYmpbXCJAYXR0cmlidXRlc1wiXSA9IGF0dHJpYnV0ZXM7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoYU5vZGUubm9kZVR5cGUgPT0gMyB8fCBhTm9kZS5ub2RlVHlwZSA9PSA0KSAvLyB0ZXh0XHJcblx0XHRcdHJldHVybiBhTm9kZS50ZXh0Q29udGVudC50cmltKCk7XHJcblxyXG5cdFx0Ly8gZG8gY2hpbGRyZW5cclxuXHRcdGlmIChhTm9kZS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuXHRcdFx0bGV0IHRleHRDb250ZW50ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRsZXQgaGFzQ2hpbGRyZW4gPSBmYWxzZTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhTm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IGl0ZW0gPSBhTm9kZS5jaGlsZE5vZGVzLml0ZW0oaSk7XHJcblx0XHRcdFx0aWYgKGl0ZW0ubm9kZVR5cGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0aGFzQ2hpbGRyZW4gPSB0cnVlO1xyXG5cdFx0XHRcdFx0bGV0IG5vZGVOYW1lID0gaXRlbS5ub2RlTmFtZTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2Ygb2JqW25vZGVOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdFx0XHRvYmpbbm9kZU5hbWVdID0gQ29udmVydGVyLnhtbFRvSnNvbihpdGVtKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmICh0eXBlb2Ygb2JqW25vZGVOYW1lXS5wdXNoID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IG9sZCA9IG9ialtub2RlTmFtZV07XHJcblx0XHRcdFx0XHRcdFx0b2JqW25vZGVOYW1lXSA9IFtdO1xyXG5cdFx0XHRcdFx0XHRcdG9ialtub2RlTmFtZV0ucHVzaChvbGQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdG9ialtub2RlTmFtZV0ucHVzaChDb252ZXJ0ZXIueG1sVG9Kc29uKGl0ZW0pKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKChpdGVtLm5vZGVUeXBlID09IDMgfHwgaXRlbS5ub2RlVHlwZSA9PSA0KVxyXG5cdFx0XHRcdFx0XHQmJiBpdGVtLnRleHRDb250ZW50ICE9IFwiXCIpXHJcblx0XHRcdFx0XHR0ZXh0Q29udGVudCA9ICh0ZXh0Q29udGVudCA/IHRleHRDb250ZW50ICsgaXRlbS50ZXh0Q29udGVudFxyXG5cdFx0XHRcdFx0XHRcdDogaXRlbS50ZXh0Q29udGVudCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0ZXh0Q29udGVudCkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2Ygb2JqW1wiQGF0dHJpYnV0ZXNcIl0gPT09IFwidW5kZWZpbmVkXCIgJiYgIWhhc0NoaWxkcmVuKVxyXG5cdFx0XHRcdFx0b2JqID0gdGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG9iai50ZXh0ID0gdGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb2JqO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb252ZXJ0ZXI7IiwiaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBPYmplY3RVdGlscyBmcm9tIFwiLi91dGlscy9PYmplY3RVdGlsc1wiO1xyXG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCIuL0V4cHJlc3Npb25SZXNvbHZlclwiO1xyXG5cclxuY29uc3QgZXhwcmVzc2lvblJlc29sdmVyID0gRXhwcmVzc2lvblJlc29sdmVyLkRFRkFVTFQ7XHJcblxyXG5jb25zdCBTVEFURSA9IHtcclxuXHRGSU5JU0hFRCA6IFwiJCRldmVudEJpbmQuRklOSVNIRUQkJFwiXHJcbn07XHJcbmNvbnN0IEZJTklTSEVEU1RBVEUgPSB7XHJcbiAgICBGQUlMIDogXCJmYWlsXCIsXHJcbiAgICBSRUFEWSA6IFwicmVhZHlcIlxyXG59O1xyXG5cclxuY29uc3QgRXhlY3V0ZXIgPSBmdW5jdGlvbihhbkV2ZW50KSB7XHJcblx0bGV0IGVsZW1lbnQgPSBhbkV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblx0bGV0IGRhdGEgPSBlbGVtZW50LmRhdGEoXCJkZS50aXR1cy5jb3JlLmV2ZW50QmluZFwiKTtcclxuXHRpZiAoZGF0YS5wcmV2ZW50RGVmYXVsdClcclxuXHRcdGFuRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRpZiAoZGF0YS5zdG9wUHJvcGFnYXRpb24pXHJcblx0XHRhbkV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRpZiAoYXJncy5sZW5ndGggPj0gMSAmJiB0eXBlb2YgYW5FdmVudC5kYXRhICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0YXJncy5zcGxpY2UoMSwgMCwgYW5FdmVudC5kYXRhKTtcclxuXHRcclxuXHRpZiAodHlwZW9mIGRhdGEuYWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0bGV0IGFjdGlvbiA9IGV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlRXhwcmVzc2lvbihkYXRhLmFjdGlvbiwgYW5FdmVudC5kYXRhLCB1bmRlZmluZWQpO1xyXG5cdFx0aWYgKHR5cGVvZiBhY3Rpb24gPT09IFwiZnVuY3Rpb25cIilcdFx0XHRcclxuXHRcdFx0YWN0aW9uLmFwcGx5KGFjdGlvbiwgYXJncyk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkYXRhLmRlbGVnYXRpb24gIT09ICd1bmRlZmluZWQnKVxyXG5cdFx0ZWxlbWVudC50cmlnZ2VyKGRhdGEuZGVsZWdhdGlvbiwgYXJncyk7XHJcblxyXG5cdHJldHVybiAhYW5FdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBFdmVudEJpbmQgPSBmdW5jdGlvbihhbkVsZW1lbnQsIGFDb250ZXh0KSB7XHJcblx0aWYodHlwZW9mIGFuRWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybjtcclxuXHRcclxuXHRpZihhbkVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdHJldHVybiBhbkVsZW1lbnQuZm9yRWFjaCgoZnVuY3Rpb24oYUNvbnRleHQsIGFuRWxlbWVudCl7XHJcblx0XHRcdEV2ZW50QmluZChhbkVsZW1lbnQsIGFDb250ZXh0KTtcclxuXHRcdH0pLmJpbmQobnVsbCwgYUNvbnRleHQpKTtcclxuXHRcclxuXHRsZXQgcmVzdWx0ID0ge1xyXG5cdCAgICBwcmV2ZW50RGVmYXVsdCA6ICh0eXBlb2YgYW5FbGVtZW50LmF0dHIoXCJldmVudC1wcmV2ZW50LWRlZmF1bHRcIikgIT09IFwidW5kZWZpbmVkXCIpLFxyXG5cdCAgICBzdG9wUHJvcGFnYXRpb24gOiAodHlwZW9mIGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtc3RvcC1wcm9wYWdhdGlvblwiKSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHR9O1xyXG5cdHJlc3VsdC5ldmVudFR5cGUgPSBhbkVsZW1lbnQuYXR0cihcImV2ZW50LXR5cGVcIik7XHJcblx0aWYgKHJlc3VsdC5ldmVudFR5cGUpe1xyXG5cdFx0YW5FbGVtZW50LmRhdGEoU1RBVEUuRklOSVNIRUQsIEZJTklTSEVEU1RBVEUuRkFJTCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdFxyXG5cdHJlc3VsdC5hY3Rpb24gPSBhbkVsZW1lbnQuYXR0cihcImV2ZW50LWFjdGlvblwiKTtcclxuXHRyZXN1bHQuZGVsZWdhdGlvbiA9IGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtZGVsZWdhdGlvblwiKTtcclxuXHJcblx0aWYgKCEocmVzdWx0LmFjdGlvbiB8fCByZXN1bHQuZGVsZWdhdGlvbikpIHtcclxuXHRcdGFuRWxlbWVudC5kYXRhKFNUQVRFLkZJTklTSEVELCBGSU5JU0hFRFNUQVRFLkZBSUwpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0cmVzdWx0LmV2ZW50RGF0YSA9IGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtZGF0YVwiKTtcclxuXHRpZiAoIXJlc3VsdC5ldmVudERhdGEgJiYgcmVzdWx0LmV2ZW50RGF0YS5sZW5ndGggPiAwKVxyXG5cdFx0cmVzdWx0LmV2ZW50RGF0YSA9IGV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlRXhwcmVzc2lvbihldmVudERhdGEsIGFDb250ZXh0LCB7fSk7XHJcblx0ZWxzZSBpZiAodHlwZW9mIGFDb250ZXh0ICE9PSAndW5kZWZpbmVkJylcclxuXHRcdHJlc3VsdC5ldmVudERhdGEgPSBPYmplY3RVdGlscy5leHRlbmQoe30sIGFDb250ZXh0KTtcclxuXHRcclxuXHRpZiAocmVzdWx0LmV2ZW50RGF0YSlcclxuXHRcdGFuRWxlbWVudC5vbihyZXN1bHQuZXZlbnRUeXBlLCBudWxsLCByZXN1bHQuZXZlbnREYXRhLCBFeGVjdXRlcik7XHJcblx0ZWxzZVxyXG5cdFx0YW5FbGVtZW50Lm9uKHJlc3VsdC5ldmVudFR5cGUsIEV4ZWN1dGVyKTtcclxuXHRcclxuXHRhbkVsZW1lbnQuZGF0YShTVEFURS5GSU5JU0hFRCwgRklOSVNIRURTVEFURS5SRUFEWSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XHJcblx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24obXV0YXRpb24pIHtcclxuXHRcdG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XHJcblx0XHRcdGlmIChub2RlLm5vZGVUeXBlICE9IE5vZGUuVEVYVF9OT0RFKSB7XHJcblx0XHRcdFx0aWYobm9kZS5pcyhcIltldmVudC10eXBlXVwiKSlcclxuXHRcdFx0XHRcdEV2ZW50QmluZChub2RlKTtcdFx0XHRcdFxyXG5cdFx0XHRcdEV2ZW50QmluZChub2RlLmZpbmQoXCJbZXZlbnQtdHlwZV1cIikpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxufSk7XHJcblxyXG4vLyBwYXNzIGluIHRoZSB0YXJnZXQgbm9kZSwgYXMgd2VsbCBhcyB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xyXG5PYnNlcnZlci5vYnNlcnZlKGZpbmQoXCJib2R5XCIpLmZpcnN0KCksICB7XHJcbiAgICBhdHRyaWJ1dGVzIDogdHJ1ZSxcclxuICAgIGNoaWxkTGlzdCA6IHRydWUsXHJcbiAgICBzdWJ0cmVlIDogdHJ1ZSxcclxuICAgIGNoYXJhY3RlckRhdGEgOiBmYWxzZVxyXG59KTtcclxuXHJcbnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdGNvbnNvbGUubG9nKFwiaW5pdCBldmVudCBiaW5kcyB3aXRoIGF1dG9ydW5cIik7XHJcblx0RXZlbnRCaW5kKGZpbmQoXCJbZXZlbnQtYXV0b3J1bl1cIikpO1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRCaW5kOyIsImltcG9ydCBSZWdleCBmcm9tIFwiLi9yZWdleC9SZWdleFwiO1xyXG5cclxuXHJcbmxldCBFeHByZXNzaW9uUmVzb2x2ZXIgPSBjbGFzcyB7XHRcclxuXHRjb25zdHJ1Y3Rvcih2YXJSZWdleCkge1xyXG5cdFx0dGhpcy5yZWdleCA9IG5ldyBSZWdleCh2YXJSZWdleFx0fHwgRXhwcmVzc2lvblJlc29sdmVyLlRFWFRfRVhQUkVTU0lPTl9SRUdFWCk7XHJcblx0fTtcclxuXHRcdFxyXG5cdHJlc29sdmVUZXh0KGFUZXh0LCBhRGF0YUNvbnRleHQsIGFEZWZhdWx0VmFsdWUpIHtcclxuXHRcdGxldCB0ZXh0ID0gYVRleHQ7XHJcblx0XHRsZXQgbWF0Y2hlciA9IHRoaXMucmVnZXgucGFyc2UodGV4dCk7XHJcblx0XHR3aGlsZSAobWF0Y2hlci5uZXh0KCkpIHtcclxuXHRcdFx0bGV0IGV4cHJlc3Npb24gPSBtYXRjaGVyLmdldE1hdGNoKCk7XHJcblx0XHRcdGxldCBleHByZXNzaW9uUmVzdWx0ID0gdGhpcy5pbnRlcm5hbFJlc29sdmVFeHByZXNzaW9uKG1hdGNoZXIuZ2V0R3JvdXAoMSksIGFEYXRhQ29udGV4dCwgYURlZmF1bHRWYWx1ZSk7XHJcblx0XHRcdGlmIChleHByZXNzaW9uUmVzdWx0ICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0ZXh0ID0gbWF0Y2hlci5yZXBsYWNlQWxsKGV4cHJlc3Npb25SZXN1bHQsIHRleHQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fTtcclxuXHRcclxuXHRyZXNvbHZlRXhwcmVzc2lvbihhRXhwcmVzc2lvbixcclxuXHRcdFx0YURhdGFDb250ZXh0LCBhRGVmYXVsdFZhbHVlKSB7XHJcblx0XHRsZXQgbWF0Y2hlciA9IHRoaXMucmVnZXgucGFyc2UoYUV4cHJlc3Npb24pO1xyXG5cdFx0aWYgKG1hdGNoZXIubmV4dCgpKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnRlcm5hbFJlc29sdmVFeHByZXNzaW9uKG1hdGNoZXIuZ2V0R3JvdXAoMSksIGFEYXRhQ29udGV4dCwgYURlZmF1bHRWYWx1ZSk7XHJcblx0XHJcblx0XHRyZXR1cm4gdGhpcy5pbnRlcm5hbFJlc29sdmVFeHByZXNzaW9uKGFFeHByZXNzaW9uLCBhRGF0YUNvbnRleHQsIGFEZWZhdWx0VmFsdWUpO1xyXG5cdH07XHJcblx0XHJcblx0aW50ZXJuYWxSZXNvbHZlRXhwcmVzc2lvbihhRXhwcmVzc2lvbixcclxuXHRcdFx0YURhdGFDb250ZXh0LCBhRGVmYXVsdFZhbHVlKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRyZXR1cm4gZGUudGl0dXMuY29yZS5TcGVjaWFsRnVuY3Rpb25zLmRvRXZhbFdpdGhDb250ZXh0KGFFeHByZXNzaW9uLCBhRGF0YUNvbnRleHQsIGFEZWZhdWx0VmFsdWUpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRyZXR1cm4gYURlZmF1bHRWYWx1ZTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5cclxuRXhwcmVzc2lvblJlc29sdmVyLlRFWFRfRVhQUkVTU0lPTl9SRUdFWCA9IFwiXFxcXCRcXFxceyhbXlxcXFx7XFxcXH1dKylcXFxcfVwiO1xyXG5FeHByZXNzaW9uUmVzb2x2ZXIuREVGQVVMVCA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cHJlc3Npb25SZXNvbHZlcjtcclxuIiwibGV0IGJ1aWxkID0gZnVuY3Rpb24oR29iYWwsIGFOYW1lcywgYUNhbGxiYWNrKSB7XG5cdGxldCBuYW1lID0gYU5hbWVzLnNoaWZ0KCk7XG5cdGlmICh0eXBlb2YgR29iYWxbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0R29iYWxbbmFtZV0gPSB7fTtcblxuXHRpZiAoYU5hbWVzLmxlbmd0aCA9PSAwKVxuXHRcdEdvYmFsW25hbWVdID0gYUNhbGxiYWNrKCkgfHwgR29iYWxbbmFtZV07XG5cdGVsc2Vcblx0XHRidWlsZChHb2JhbFtuYW1lXSwgYU5hbWVzLCBhQ2FsbGJhY2spO1xufTtcblxubGV0IE5hbWVzcGFjZSA9IGZ1bmN0aW9uKGFOYW1lc3BhY2UsIGFGdW5jdGlvbikge1xuXHRidWlsZCggKHdpbmRvdyB8fCBnbG9iYWwgfHwge30pLCBhTmFtZXNwYWNlLnNwbGl0KFwiLlwiKSAsYUZ1bmN0aW9uKTtcbn07XG5cbk5hbWVzcGFjZS5jcmVhdGUgPSBOYW1lc3BhY2U7IFxuZXhwb3J0IGRlZmF1bHQgTmFtZXNwYWNlO1xuIiwibGV0IFBhZ2UgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmJhc2VUYWdWYWx1ZSA9IHVuZGVmaW5lZDtcclxuXHRsZXQgYmFzZVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlW2hyZWZdXCIpO1xyXG5cdGlmICh0eXBlb2YgYmFzZVRhZyAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHRoaXMuYmFzZVRhZ1ZhbHVlID0gYmFzZVRhZy5hdHRyaWJ1dGVzW1wiaHJlZlwiXS52YWx1ZTtcclxuXHRcdHRoaXMuZmlsZXMgPSB7fTtcclxuXHRcdHRoaXMuZGF0YSA9IHt9O1xyXG59O1xyXG5cdFxyXG5QYWdlLnByb3RvdHlwZS5hZGRKc0ZpbGUgPSBmdW5jdGlvbihhVXJsLCBhRnVuY3Rpb24sIGZvcmNlRnVuY3Rpb24pIHtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShhVXJsKSlcclxuXHRcdHJldHVybiB0aGlzLmFkZEpzRmlsZXMoYVVybCwgYUZ1bmN0aW9uLCBmb3JjZUZ1bmN0aW9uKTtcclxuXHRcclxuXHRpZiAodHlwZW9mIHRoaXMuZmlsZXNbYVVybF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdHRoaXMuZmlsZXNbYVVybF0gPSB0cnVlO1xyXG5cdFx0bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9qYXZhc2NyaXB0XCIpO1xyXG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYVVybCk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChlbGVtZW50KTtcclxuXHRcclxuXHRcdGlmICh0eXBlb2YgYUZ1bmN0aW9uICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRhRnVuY3Rpb24oKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZm9yY2VGdW5jdGlvbiAmJiB0eXBlb2YgYUZ1bmN0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRhRnVuY3Rpb24oKTtcclxuXHR9XHJcbn07XHJcblxyXG5QYWdlLnByb3RvdHlwZS5hZGRKc0ZpbGVzID0gZnVuY3Rpb24oYVVybHMsIGFGdW5jdGlvbiwgZm9yY2VGdW5jdGlvbikge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGFVcmxzKSkge1xyXG5cdFx0d2hpbGUoYVVybHMubGVuZ3RoICE9IDApe1xyXG5cdFx0XHR0aGlzLmFkZEpzRmlsZShhVXJscy5zaGlmdCgpLCAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhpcy5hZGRKc0ZpbGVzKGFVcmxzLCBhRnVuY3Rpb24sIGZvcmNlRnVuY3Rpb24pXHJcblx0XHRcdH0pLmJpbmQodGhpcyksIHRydWUpO1xyXG5cdFx0fVxyXG5cdH0gZWxzZVxyXG5cdFx0dGhpcy5hZGRKc0ZpbGUoYVVybHMsIGFGdW5jdGlvbiwgZm9yY2VGdW5jdGlvbik7XHJcbn07XHJcblxyXG5QYWdlLnByb3RvdHlwZS5hZGRDc3NGaWxlID0gZnVuY3Rpb24oYVVybCkge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGFVcmwpKSB7XHJcblx0XHR0aGlzLmFkZENzc0ZpbGVzKGFVcmwpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKHRoaXMuZmlsZXNbYVVybF0gPT0gdW5kZWZpbmVkKSB7XHJcblx0XHR0aGlzLmZpbGVzW2FVcmxdID0gdHJ1ZTtcclxuXHRcdGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XHJcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcclxuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBhVXJsKTtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKGVsZW1lbnQpO1xyXG5cdH1cclxufTtcclxuXHJcblBhZ2UucHJvdG90eXBlLmFkZENzc0ZpbGVzID0gZnVuY3Rpb24oYVVybHMpIHtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShhVXJscykpIHtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCBhVXJscy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLmFkZENzc0ZpbGUoYVVybHNbaV0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcblBhZ2UucHJvdG90eXBlLmdldFVybCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBkZS50aXR1cy5jb3JlLlVSTC5nZXRDdXJyZW50VXJsKCk7XHJcbn07XHJcblxyXG5QYWdlLnByb3RvdHlwZS5idWlsZFVybCA9IGZ1bmN0aW9uKGFVcmwpIHtcclxuXHRsZXQgYnJvd3NlciA9IHRoaXMuZGV0ZWN0QnJvd3NlcigpO1xyXG5cdGlmIChicm93c2VyLmllICYmIGJyb3dzZXIuaWUgPCAxMSkge1xyXG5cdFx0bGV0IHRlbXBVcmwgPSBhVXJsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmJhc2VUYWdWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGVtcFVybC5pbmRleE9mKFwiaHR0cDpcIikgPT0gMFxyXG5cdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJodHRwczpcIikgPT0gMFxyXG5cdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJmdHA6XCIpID09IDBcclxuXHRcdFx0XHQmJiAhdGVtcFVybC5pbmRleE9mKFwiZnRwczpcIikgPT0gMFxyXG5cdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJtYWlsdG86XCIpID09IDBcclxuXHRcdFx0XHQmJiAhdGVtcFVybC5pbmRleE9mKFwibm90ZXM6XCIpID09IDBcclxuXHRcdFx0XHQmJiAhdGVtcFVybC5pbmRleE9mKFwiL1wiKSA9PSAwKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmJhc2VUYWdWYWx1ZSArIGFVcmw7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBhVXJsO1xyXG59O1xyXG5cclxuUGFnZS5wcm90b3R5cGUuZGV0ZWN0QnJvd3NlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmIChQYWdlLkJST1dTRVIpXHJcblx0XHRyZXR1cm4gUGFnZS5CUk9XU0VSO1xyXG5cclxuXHRQYWdlLkJST1dTRVIgPSB7fTtcclxuXHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRNb2RlKVxyXG5cdFx0UGFnZS5CUk9XU0VSLmllID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xyXG5cdGVsc2VcclxuXHRcdFBhZ2UuQlJPV1NFUi5vdGhlciA9IHRydWU7XHJcblxyXG5cdHJldHVybiBQYWdlLkJST1dTRVI7XHJcbn07XHJcblxyXG5QYWdlLnByb3RvdHlwZS5zZXREYXRhID0gZnVuY3Rpb24oYUtleSwgYVZhbHVlKSB7XHJcblx0dGhpcy5kYXRhW2FLZXldID0gYVZhbHVlO1xyXG59O1xyXG5cclxuUGFnZS5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uKGFLZXkpIHtcclxuXHRyZXR1cm4gdGhpcy5kYXRhW2FLZXldO1xyXG59O1xyXG5cclxuUGFnZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0eXBlb2YgSU5TVEFOQ0UgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFBhZ2UuSU5TVEFOQ0UgPSBuZXcgUGFnZSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFBhZ2UuSU5TVEFOQ0U7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsImxldCBQYWdpbmdVdGlscyA9IHtcclxuXHRwYWdlckRhdGEgOiBmdW5jdGlvbihhUGFnZSwgYVBhZ2VzLCBhU2l6ZSkge1xyXG5cdFx0bGV0IGhhbGYgPSBNYXRoLnJvdW5kKGFQYWdlcyAvIDIpO1xyXG5cdFx0bGV0IHJlc3VsdCA9IHtcclxuXHRcdFx0Zmlyc3RQYWdlIDogMSxcclxuXHRcdFx0c3RhcnRQYWdlIDogMSxcclxuXHRcdFx0ZW5kUGFnZSA6IGFTaXplLFxyXG5cdFx0XHRsYXN0UGFnZSA6IGFQYWdlcyxcclxuXHRcdFx0Y3VycmVudCA6IGFQYWdlLFxyXG5cdFx0XHRwYWdlQ291bnQgOiBhUGFnZXNcclxuXHRcdH07XHJcblx0XHRpZiAoYVNpemUgPiBhUGFnZXMpXHJcblx0XHRcdHJlc3VsdC5lbmRQYWdlID0gYVBhZ2VzO1xyXG5cdFx0ZWxzZSBpZiAoYVBhZ2UgKyBoYWxmID4gYVBhZ2VzKSB7XHJcblx0XHRcdHJlc3VsdC5lbmRQYWdlID0gYVBhZ2VzO1xyXG5cdFx0XHRyZXN1bHQuc3RhcnRQYWdlID0gKGVuZCAtIGFTaXplKSArIDE7XHJcblx0XHR9IGVsc2UgaWYgKGFQYWdlIC0gaGFsZiA+IDEpIHtcclxuXHRcdFx0cmVzdWx0LmVuZFBhZ2UgPSAoYVBhZ2UgKyBoYWxmKTtcclxuXHRcdFx0cmVzdWx0LnN0YXJ0UGFnZSA9IChlbmQgLSBhU2l6ZSkgKyAxO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0LmNvdW50ID0gcmVzdWx0LmVuZFBhZ2UgLSByZXN1bHQuc3RhcnRQYWdlO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9LFxyXG5cclxuXHRwYWdlQXJyYXkgOiBmdW5jdGlvbihhUGFnZSwgYVNpemUsIGFBcnJheSkge1xyXG5cdFx0cmV0dXJuIGFBcnJheS5zbGljZSgoYVBhZ2UgLSAxKSAqIGFTaXplLCBhU2l6ZSk7XHJcblx0fVxyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5nVXRpbHM7XHJcbiIsImNvbnN0IERFVk1PREUgPSBsb2NhdGlvbi5zZWFyY2ggPyAoLy4qZGV2bW9kZT10cnVlLiovaWcpLnRlc3QobG9jYXRpb24uc2VhcmNoKSA6IGZhbHNlO1xuY29uc3QgU1RBVEVNRU5UUyA9IHt9O1xubGV0IFNwZWNpYWxGdW5jdGlvbnMgPSB7XG5cdGRvRXZhbCA6IGZ1bmN0aW9uKGFTdGF0ZW1lbnQsIGFDb250ZXh0LCBhQ2FsbGJhY2spIHtcblx0XHRpZiAoYUNhbGxiYWNrKVxuXHRcdFx0U3BlY2lhbEZ1bmN0aW9ucy5kb0V2YWxXaXRoQ29udGV4dChhU3RhdGVtZW50LCAoYUNvbnRleHQgfHwge30pLFxuXHRcdFx0XHRcdHVuZGVmaW5lZCwgYUNhbGxiYWNrKTtcblx0XHRlbHNlIHtcblx0XHRcdGlmICh0eXBlb2YgYVN0YXRlbWVudCAhPT0gXCJzdHJpbmdcIilcblx0XHRcdFx0cmV0dXJuIGFTdGF0ZW1lbnQ7XG5cblx0XHRcdHZhciBzdGF0ZW1lbnQgPSBhU3RhdGVtZW50LnRyaW0oKTtcblx0XHRcdGlmIChzdGF0ZW1lbnQubGVuZ3RoID09IDApXG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBldmFsRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oXCJhQ29udGV4dFwiLFxuXHRcdFx0XHRcdFx0XCJ3aXRoKHRoaXMpe3JldHVybiBcIiArIGFTdGF0ZW1lbnQgKyBcIjt9XCIpO1xuXHRcdFx0XHRyZXR1cm4gZXZhbEZ1bmN0aW9uLmNhbGwoYUNvbnRleHQpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRpZiAoREVWTU9ERSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblwiLCBcImRvRXZhbCgpXFxuXCIsXG5cdFx0XHRcdFx0XHRcdFwic3RhdGVtZW50OiBcXFwiXCIsIGFTdGF0ZW1lbnQsIFwiXFxcIlxcblwiLCBcImNvbnRleHQ6IFxcXCJcIixcblx0XHRcdFx0XHRcdFx0YUNvbnRleHQsIFwiXFxcIlxcblwiLCBcImNhbGxiYWNrOiBcXFwiXCIsIGFDYWxsYmFjayxcblx0XHRcdFx0XHRcdFx0XCJcXFwiXFxuXCIsIFwiZXJyb3I6IFwiLCBlLCBcIlxcblwiLFxuXHRcdFx0XHRcdFx0XHRcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGRvRXZhbFdpdGhDb250ZXh0IDogZnVuY3Rpb24oYVN0YXRlbWVudCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhQ2FsbGJhY2spIHtcblx0XHRpZiAodHlwZW9mIGFDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IFNwZWNpYWxGdW5jdGlvbnMuZG9FdmFsV2l0aENvbnRleHQoYVN0YXRlbWVudCxcblx0XHRcdFx0XHRcdGFDb250ZXh0LCBhRGVmYXVsdCwgdW5kZWZpbmVkKTtcblx0XHRcdFx0YUNhbGxiYWNrKHJlc3VsdCwgYUNvbnRleHQpO1xuXHRcdFx0fSwgMSk7XG5cblx0XHR9IGVsc2Vcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBTcGVjaWFsRnVuY3Rpb25zLmRvRXZhbChhU3RhdGVtZW50LCBhQ29udGV4dCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiKVxuXHRcdFx0XHRcdHJldHVybiBhRGVmYXVsdDtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIGFEZWZhdWx0O1xuXHRcdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVjaWFsRnVuY3Rpb25zOyIsImltcG9ydCBPYmplY3RVdGlscyBmcm9tIFwiLi91dGlscy9PYmplY3RVdGlsc1wiO1xyXG5cclxubGV0IERFRkFVTFRTID0ge1xyXG5cdGZvcm1hdFRvSHRtbCA6IHtcclxuXHRcdFwidGFic2l6ZVwiIDogNCxcclxuXHRcdFwidGFiY2hhclwiIDogXCImbmJzcDtcIixcclxuXHRcdFwibmV3bGluZVRhZ1wiIDogXCI8YnIvPlwiXHJcblx0fSxcclxuXHJcblx0dHJpbVRleHRMZW5ndGggOiB7XHJcblx0XHRcInBvc3RmaXhcIiA6IFwiLi4uXCJcclxuXHR9XHJcbn07XHJcbmxldCBTdHJpbmdVdGlscyA9IHtcclxuXHRERUZBVUxUUyA6IERFRkFVTFRTLFxyXG5cdHRyaW1UZXh0TGVuZ3RoIDogZnVuY3Rpb24oYVRleHQsIG1heExlbmd0aCwgdGhlU2V0dGluZ3MpIHtcclxuXHRcdGlmIChhVGV4dCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIGFUZXh0ICE9PSBcInN0cmluZ1wiIHx8IGFUZXh0ID09IFwiXCIpXHJcblx0XHRcdHJldHVybiBhVGV4dDtcclxuXHJcblx0XHRsZXQgc2V0dGluZ3MgPSBPYmplY3RVdGlscy5leHRlbmQoe30sIHRoZVNldHRpbmdzLCBERUZBVUxUUy50cmltVGV4dExlbmd0aCk7XHJcblxyXG5cdFx0aWYgKGFUZXh0Lmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG5cdFx0XHRsZXQgZW5kID0gbWF4TGVuZ3RoIC0gc2V0dGluZ3MucG9zdGZpeC5sZW5ndGg7XHJcblx0XHRcdGlmICgoYVRleHQubGVuZ3RoIC0gZW5kKSA+IDApXHJcblx0XHRcdFx0cmV0dXJuIGFUZXh0LnN1YnN0cmluZygwLCBlbmQpLnRyaW0oKSArIHNldHRpbmdzLnBvc3RmaXg7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYVRleHQ7XHJcblx0fSxcclxuXHRmb3JtYXRUb0h0bWwgOiBmdW5jdGlvbihhVGV4dCwgdGhlU2V0dGluZ3MpIHtcclxuXHRcdGlmIChhVGV4dCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIGFUZXh0ICE9PSBcInN0cmluZ1wiIHx8IGFUZXh0ID09IFwiXCIpXHJcblx0XHRcdHJldHVybiBhVGV4dDtcclxuXHRcdGxldCBzZXR0aW5ncyA9IE9iamVjdFV0aWxzLmV4dGVuZCh7fSwgdGhlU2V0dGluZ3MgLERFRkFVTFRTLmZvcm1hdFRvSHRtbCk7XHJcblx0XHRsZXQgbGluZXMgPSBhVGV4dC5yZXBsYWNlKC9cXG5cXHIvZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpLnNwbGl0KFwiXFxuXCIpO1xyXG5cdFx0bGV0IHRleHQgPSBcIlwiO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoaSAhPSAwKVxyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgc2V0dGluZ3MubmV3bGluZVRhZztcclxuXHRcdFx0dGV4dCA9IHRleHRcdCsgU3RyaW5nVXRpbHMucHJldmVudFRhYnMobGluZXNbaV0sIHNldHRpbmdzLnRhYnNpemUsIHNldHRpbmdzLnRhYmNoYXIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fSxcclxuXHRnZXRUYWJTdG9wTWFwIDogZnVuY3Rpb24odGFiU2l6ZSwgdGFiU3RyaW5nKSB7XHJcblx0XHRsZXQgdGFic3RvcE1hcCA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gdGFiU2l6ZTsgaSsrKSB7XHJcblx0XHRcdGlmIChpID09IDApXHJcblx0XHRcdFx0dGFic3RvcE1hcFswXSA9IFwiXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0YWJzdG9wTWFwW2ldID0gdGFic3RvcE1hcFtpIC0gMV0gKyB0YWJTdHJpbmc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRhYnN0b3BNYXA7XHJcblx0fSxcclxuXHRwcmV2ZW50VGFicyA6IGZ1bmN0aW9uKGFUZXh0LCB0aGVUYWJTdG9wcywgdGhlVGFiU3RvcENoYXIpIHtcclxuXHRcdGxldCB0YWJzdG9wTWFwID0gU3RyaW5nVXRpbHMuZ2V0VGFiU3RvcE1hcCh0aGVUYWJTdG9wcywgdGhlVGFiU3RvcENoYXIpO1xyXG5cdFx0bGV0IHRhYlN0b3BzID0gdGhlVGFiU3RvcHM7XHJcblx0XHRsZXQgdGV4dCA9IFwiXCI7XHJcblx0XHRsZXQgdGFicyA9IGFUZXh0LnNwbGl0KFwiXFx0XCIpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICh0YWJzW2ldLmxlbmd0aCAhPSAwICYmIGkgIT0gMCkge1xyXG5cdFx0XHRcdGxldCBzaXplID0gdGV4dC5sZW5ndGg7XHJcblx0XHRcdFx0bGV0IHRhYlNpemUgPSBzaXplICUgdGFiU3RvcHM7XHJcblx0XHRcdFx0dGV4dCA9IHRleHQgKyB0YWJzdG9wTWFwW3RoZVRhYlN0b3BzIC0gdGFiU2l6ZV0gKyB0YWJzW2ldO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRhYnNbaV0ubGVuZ3RoID09IDAgJiYgaSAhPSAwKVxyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgdGFic3RvcE1hcFt0aGVUYWJTdG9wc107XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0ZXh0ID0gdGV4dCArIHRhYnNbaV07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fSxcclxuXHRmb3JtYXQgOiBmdW5jdGlvbihhVGV4dCwgYXJncykge1xyXG5cdFx0bGV0IG9iamVjdHMgPSBhcmd1bWVudHM7XHJcblx0XHRyZXR1cm4gYVRleHQucmVwbGFjZSgvey0/WzAtOV0rfS9nLCBmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdGxldCBpbmRleCA9IHBhcnNlSW50KGl0ZW0uc3Vic3RyaW5nKDEsIGl0ZW0ubGVuZ3RoIC0gMSkpICsgMTtcclxuXHRcdFx0bGV0IHJlcGxhY2U7XHJcblx0XHRcdGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBvYmplY3RzLmxlbmd0aCkge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBvYmplY3RzW2luZGV4XTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcGxhY2UgIT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHRyZXBsYWNlID0gSlNPTi5zdHJpbmdpZnkocmVwbGFjZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XHJcblx0XHRcdFx0cmVwbGFjZSA9IFwie1wiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAtMikge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBcIn1cIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXBsYWNlID0gXCJcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVwbGFjZTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nVXRpbHM7IiwibGV0IFVSTCA9IGNsYXNzIHtcclxuXHRjb25zdHJ1Y3RvcihhUHJvdG9jb2wsIGFEb21haW4sIGFQb3J0LCBhUGF0aCwgdGhlUGFyYW1ldGVyLCBhTWFya2VyKSB7XHRcclxuXHRcdHRoaXMucHJvdG9jb2wgPSBhUHJvdG9jb2wgfHwgXCJodHRwXCI7XHJcblx0XHR0aGlzLmRvbWFpbiA9IGFEb21haW47XHJcblx0XHR0aGlzLnBvcnQgPSBhUG9ydDtcclxuXHRcdHRoaXMucGF0aCA9IGFQYXRoO1xyXG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gdGhlUGFyYW1ldGVyO1xyXG5cdFx0dGhpcy5tYXJrZXIgPSBhTWFya2VyXHRcclxuXHR9O1xyXG5cdFxyXG5cdGdldFBhcmFtZXRlcihhS2V5KSB7XHJcblx0XHRsZXQgdmFsdWUgPSB0aGlzLnBhcmFtZXRlcnNbYUtleV07XHJcblx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZVswXSA6IHZhbHVlO1xyXG5cdH07XHJcblx0XHJcblx0Z2V0UGFyYW1ldGVycyhhS2V5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXJhbWV0ZXJzW2FLZXldO1xyXG5cdH07XHJcblx0XHJcblx0YWRkUGFyYW1ldGVyKGFLZXksIGFWYWx1ZSwgYXBwZW5kKSB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMucGFyYW1ldGVyc1thS2V5XSA9PT0gXCJ1bmRlZmluZWRcIikgXHJcblx0XHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IFtdO1xyXG5cdFx0aWYgKCFhcHBlbmQgJiYgdHlwZW9mIGFWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgXHJcblx0XHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IHVuZGVmaW5lZDtcclxuXHRcdCBlbHNlIGlmICghYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGFWYWx1ZS5sZW5ndGggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IGFWYWx1ZTtcclxuXHRcdCBlbHNlIGlmIChhcHBlbmQgJiYgdHlwZW9mIGFWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgYVZhbHVlLmxlbmd0aCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0JC5tZXJnZSh0aGlzLnBhcmFtZXRlcnNbYUtleV0sIGFWYWx1ZSk7Ly8gQFRPRE8gJC5tZXJnZSBlbnRmZXJuZW5cclxuXHRcdCBlbHNlIGlmICghYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IFsgYVZhbHVlIF07XHJcblx0XHQgZWxzZSBpZiAoYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIpIFxyXG5cdFx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0ucHVzaChhVmFsdWUpO1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdGdldFF1ZXJ5U3RyaW5nKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnBhcmFtZXRlcnMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IFwiP1wiO1xyXG5cdFx0XHRsZXQgaXNGaXJzdFBhcmFtZXRlciA9IHRydWU7XHJcblx0XHRcdGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiB0aGlzLnBhcmFtZXRlcnMpIHtcclxuXHRcdFx0XHRpZiAoIWlzRmlyc3RQYXJhbWV0ZXIpIHtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdCArIFwiJlwiO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpc0ZpcnN0UGFyYW1ldGVyID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBwYXJhbWV0ZXJWYWx1ZXMgPSB0aGlzLnBhcmFtZXRlcnNbcHJvcGVydHlOYW1lXTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHBhcmFtZXRlclZhbHVlcy5sZW5ndGggPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQgKyBlbmNvZGVVUklDb21wb25lbnQocHJvcGVydHlOYW1lKSArIFwiPVwiXHJcblx0XHRcdFx0XHRcdFx0KyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyVmFsdWVzKTtcclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBwYXJhbWV0ZXJWYWx1ZXMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKGogPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICsgXCImXCI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICsgZW5jb2RlVVJJQ29tcG9uZW50KHByb3BlcnR5TmFtZSkgKyBcIj1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0KyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyVmFsdWVzW2pdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0Z2V0TWFya2VyU3RyaW5nKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1hcmtlciAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0cmV0dXJuIFwiI1wiICsgdGhpcy5tYXJrZXJcdFxyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblx0fTtcclxuXHRcclxuXHRhc1N0cmluZygpIHtcclxuXHRcdGxldCByZXN1bHQgPSB0aGlzLnByb3RvY29sICsgXCI6Ly9cIiArIHRoaXMuZG9tYWluICsgXCI6XCIgKyB0aGlzLnBvcnQ7XHRcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5wYXRoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQgKyB0aGlzLnBhdGg7XHJcblx0XHJcblx0XHRyZXN1bHQgPSByZXN1bHQgKyB0aGlzLmdldFF1ZXJ5U3RyaW5nKCkgKyB0aGlzLmdldE1hcmtlclN0cmluZygpO1xyXG5cdFxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cdFxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXNTdHJpbmcoKTtcclxuXHR9O1x0XHJcbn07XHJcblxyXG5VUkwuZnJvbVN0cmluZyA9IGZ1bmN0aW9uKGFVcmxTdHJpbmcpIHtcclxuXHRsZXQgdGVtcFVybCA9IGFVcmxTdHJpbmc7XHJcblx0bGV0IHByb3RvY29sID0gXCJodHRwXCI7XHJcblx0bGV0IGhvc3QgPSB1bmRlZmluZWQ7XHJcblx0bGV0IHBvcnQgPSA4MDtcclxuXHRsZXQgcGF0aCA9IFwiL1wiO1xyXG5cdGxldCBtYXJrZXIgPSBcIlwiO1xyXG5cdGxldCBwYXJhbWV0ZXJTdHJpbmcgPSB1bmRlZmluZWQ7XHJcblx0bGV0IHNwbGl0SW5kZXggPSAtMTtcclxuXHRsZXQgcGFyYW1ldGVyID0ge307XHJcblxyXG5cdGxldCBtYXRjaCA9IG5ldyBSZWdFeHAoXCJcXFxcPyhbXiNdKilcIikuZXhlYyh0ZW1wVXJsKTtcclxuXHRpZiAodHlwZW9mIG1hdGNoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0cGFyYW1ldGVyU3RyaW5nID0gbWF0Y2hbMV07XHJcblxyXG5cdG1hdGNoID0gbmV3IFJlZ0V4cChcIiMoW15cXFxcPyNdKilcIikuZXhlYyh0ZW1wVXJsKTtcclxuXHRpZiAodHlwZW9mIG1hdGNoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0bWFya2VyID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzFdKTtcclxuXHJcblx0c3BsaXRJbmRleCA9IHRlbXBVcmwuaW5kZXhPZihcIjovL1wiKTtcclxuXHRpZiAoc3BsaXRJbmRleCA+IDApIHtcclxuXHRcdHByb3RvY29sID0gdGVtcFVybC5zdWJzdHIoMCwgc3BsaXRJbmRleCk7XHJcblx0XHR0ZW1wVXJsID0gdGVtcFVybC5zdWJzdHIoc3BsaXRJbmRleCArIDMpO1xyXG5cdH1cclxuXHJcblx0bWF0Y2ggPSBuZXcgUmVnRXhwKFwiKFteXFwvOlxcXFw/I10qKVwiKS5leGVjKHRlbXBVcmwpO1xyXG5cdGlmICh0eXBlb2YgbWF0Y2ggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRob3N0ID0gbWF0Y2hbMV07XHJcblxyXG5cdG1hdGNoID0gbmV3IFJlZ0V4cChcIjooW15cXFxcL1xcXFw/I10qKVwiKS5leGVjKHRlbXBVcmwpO1xyXG5cdGlmICh0eXBlb2YgbWF0Y2ggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRwb3J0ID0gbWF0Y2hbMV07XHJcblx0ZWxzZSBpZiAocHJvdG9jb2wudG9Mb3dlckNhc2UoKSA9PSBcImh0dHBzXCIpXHJcblx0XHRwb3J0ID0gNDQzO1xyXG5cdGVsc2UgaWYgKHByb3RvY29sLnRvTG93ZXJDYXNlKCkgPT0gXCJmdHBcIilcclxuXHRcdHBvcnQgPSAyMTtcclxuXHRlbHNlIGlmIChwcm90b2NvbC50b0xvd2VyQ2FzZSgpID09IFwiZnRwc1wiKVxyXG5cdFx0cG9ydCA9IDIxO1xyXG5cclxuXHRtYXRjaCA9IG5ldyBSZWdFeHAoXCIoL1teXFxcXD8jXSopXCIpLmV4ZWModGVtcFVybCk7XHJcblx0aWYgKHR5cGVvZiBtYXRjaCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHBhdGggPSBtYXRjaFsxXTtcclxuXHJcblx0bGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihbXiZcXFxcPyM9XSopPShbXiZcXFxcPyM9XSopXCIpO1xyXG5cdGlmICh0eXBlb2YgcGFyYW1ldGVyU3RyaW5nICE9PSBcInVuZGVmaW5lZFwiICYmIFwiXCIgIT0gcGFyYW1ldGVyU3RyaW5nKSB7XHJcblx0XHRsZXQgcGFyYW1ldGVyRW50cmllcyA9IHBhcmFtZXRlclN0cmluZy5zcGxpdChcIiZcIik7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgcGFyYW1ldGVyRW50cmllcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgbWF0Y2ggPSByZWdleC5leGVjKHBhcmFtZXRlckVudHJpZXNbaV0pO1xyXG5cdFx0XHRsZXQgcE5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMV0pO1xyXG5cdFx0XHRsZXQgcFZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzJdKTtcclxuXHRcdFx0cGFyYW1ldGVyW3BOYW1lXSA/IHBhcmFtZXRlcltwTmFtZV0ucHVzaChwVmFsdWUpXHJcblx0XHRcdFx0XHQ6IHBhcmFtZXRlcltwTmFtZV0gPSBbIHBWYWx1ZSBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ldyBVUkwocHJvdG9jb2wsIGhvc3QsIHBvcnQsIHBhdGgsIHBhcmFtZXRlciwgbWFya2VyKTtcclxufTtcclxuXHJcblVSTC5nZXRDdXJyZW50VXJsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKFVSTC5TVEFUSUNfX0NVUlJFTlRVUkwgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRVUkwuU1RBVElDX19DVVJSRU5UVVJMID0gVVJMLmZyb21TdHJpbmcobG9jYXRpb24uaHJlZik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gVVJMLlNUQVRJQ19fQ1VSUkVOVFVSTDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVSTDtcclxuIiwibGV0IFVVSUQgPSBmdW5jdGlvbigpIHtcdFxyXG5cdGxldCBzcGFjZXIgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyBhcmd1bWVudHNbMF0gOiBcIi1cIjtcclxuXHRsZXQgdGVtcGxhdGUgPSAneHh4eHh4eHgnICsgc3BhY2VyICsgJ3h4eHgnICsgc3BhY2VyICsgJzR4eHgnICsgc3BhY2VyICsgJ3l4eHgnICsgc3BhY2VyICsgJ3h4eHh4eHh4eHh4eCc7XHRcclxuXHRyZXR1cm4gdGVtcGxhdGUucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XHJcblx0XHRsZXQgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDBcclxuXHRcdGxldCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG5cdFx0cmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG5cdH0pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBVVUlEOyIsIi8vIExvYWQgYWxsIHBvbHlmaWxsc1xyXG5pbXBvcnQgXCIuL3BvbHlmaWxsXCI7XHJcblxyXG4vLyBMb2FkIHRvcCBsZXZlbCBtb2R1bGVzXHJcbmltcG9ydCBOYW1lc3BhY2UgZnJvbSBcIi4vTmFtZXNwYWNlXCI7XHJcbmltcG9ydCBVVUlEIGZyb20gXCIuL1VVSURcIjtcclxuaW1wb3J0IFNwZWNpYWxGdW5jdGlvbnMgZnJvbSBcIi4vU3BlY2lhbEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCIuL0V4cHJlc3Npb25SZXNvbHZlclwiO1xyXG5pbXBvcnQgQ29udmVydGVyIGZyb20gXCIuL0NvbnZlcnRlclwiO1xyXG5pbXBvcnQgUGFnaW5nVXRpbHMgZnJvbSBcIi4vUGFnaW5nVXRpbHNcIjtcclxuaW1wb3J0IFN0cmluZ1V0aWxzIGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCBVUkwgZnJvbSBcIi4vVVJMXCI7XHJcbmltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIjtcclxuaW1wb3J0IEV2ZW50QmluZCBmcm9tIFwiLi9FdmVudEJpbmRcIjtcclxuaW1wb3J0IEpRdWVyeSBmcm9tIFwiLi9qcXVlcnkvaW5kZXhcIjtcclxuXHJcbi8vIGxvYWQgcmVnZXggbW9kdWxlc1xyXG5pbXBvcnQgUmVnZXggZnJvbSBcIi4vcmVnZXhcIjtcclxuXHJcblxyXG5cclxuLy8gY3JlYXRlIG5hbWVzcGFjZVxyXG5OYW1lc3BhY2UoXCJkZS50aXR1cy5jb3JlXCIsIGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0XHROYW1lc3BhY2UgOiBOYW1lc3BhY2UsXHJcblx0XHRVVUlEIDogVVVJRCxcclxuXHRcdFNwZWNpYWxGdW5jdGlvbnMgOiBTcGVjaWFsRnVuY3Rpb25zLFxyXG5cdFx0RXhwcmVzc2lvblJlc29sdmVyIDogRXhwcmVzc2lvblJlc29sdmVyLFxyXG5cdFx0Q29udmVydGVyIDogQ29udmVydGVyLFxyXG5cdFx0U3RyaW5nVXRpbHMgOiBTdHJpbmdVdGlscyxcclxuXHRcdFVSTDogVVJMLFxyXG5cdFx0UGFnZTogUGFnZSxcclxuXHRcdEV2ZW50QmluZDogRXZlbnRCaW5kLFxyXG5cdFx0cmVnZXggOiBSZWdleCxcclxuXHRcdGpxdWVyeSA6IEpRdWVyeVxyXG5cdH07XHJcbn0pOyIsImNvbnN0IGJ1aWxkRnVuY3Rpb25OYW1lID0gZnVuY3Rpb24oYU5hbWUpIHtcclxuXHRyZXR1cm4gYU5hbWUucmVwbGFjZSgvXFwuL2csIFwiX1wiKTtcclxufTtcclxuY29uc3QgY3JlYXRlSW5zdGFuY2UgPSBmdW5jdGlvbihhTmFtZSwgYUZ1bmN0aW9uTmFtZSwgYUNvbnN0cnVjdG9yLCBhRGF0YSkge1xyXG5cdGlmICh0aGlzLmxlbmd0aCA9PSAwKVxyXG5cdFx0cmV0dXJuO1xyXG5cdGVsc2UgaWYgKHRoaXMubGVuZ3RoID4gMSkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xyXG5cdFx0dGhpcy5lYWNoKChmdW5jdGlvbihhRWxlbWVudCkge1xyXG5cdFx0XHR0aGlzLnB1c2goYUVsZW1lbnRbYUZ1bmN0aW9uTmFtZV0oYURhdGEpKTtcclxuXHRcdH0pLmJpbmQocmVzdWx0KSk7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRsZXQgY29tcG9uZW50ID0gdGhpcy5kYXRhKGFOYW1lKTtcclxuXHRcdGlmICghY29tcG9uZW50KSB7XHJcblx0XHRcdGNvbXBvbmVudCA9IG5ldyBhQ29uc3RydWN0b3IodGhpcywgYURhdGEpO1xyXG5cdFx0XHR0aGlzLmRhdGEoYU5hbWUsIGNvbXBvbmVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbXBvbmVudDtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBDb21wb25lbnQgPSBmdW5jdGlvbihhTmFtZSwgYUNvbnN0cnVjdG9yKSB7XHJcblx0aWYoISQpe1xyXG5cdFx0bGV0IGZ1bmN0aW9uTmFtZSA9IGJ1aWxkRnVuY3Rpb25OYW1lKGFOYW1lKTtcclxuXHRcdCQuZm5bZnVuY3Rpb25OYW1lXSA9IGNyZWF0ZUluc3RhbmNlLmJpbmQoYU5hbWUsIGZ1bmN0aW9uTmFtZSwgYUNvbnN0cnVjdG9yKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBKUXVlcnkgPSB7XHJcblx0Q29tcG9uZW50IDogQ29tcG9uZW50LFxyXG5cdENvbXBvbmVudHMgOiB7XHJcblx0XHRhc0NvbXBvbmVudCA6IENvbXBvbmVudFxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpRdWVyeTsiLCJpZiAoIUFycmF5LmZyb20pIHtcclxuXHRBcnJheS5mcm9tID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgcmVzdWx0ID0gW107XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgYXJnLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBhcmcubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgYXJnW2pdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGFyZ1tqXSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFyZ3VtZW50c1swXSkuZm9yRWFjaChcclxuXHRcdFx0XHRcdFx0XHQoZnVuY3Rpb24oYVJlc3VsdCwgYU5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlSW50KGFOYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzW2FOYW1lXSAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucHVzaCh0aGlzW2FOYW1lXSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSkuYmluZChhcmd1bWVudHNbMF0sIHJlc3VsdCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG59OyIsImlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XHJcblx0XHRwYXJhbXMgPSBwYXJhbXMgfHwge1xyXG5cdFx0ICAgIGJ1YmJsZXMgOiBmYWxzZSxcclxuXHRcdCAgICBjYW5jZWxhYmxlIDogZmFsc2UsXHJcblx0XHQgICAgZGV0YWlsIDogbnVsbFxyXG5cdFx0fTtcclxuXHRcdGxldCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuXHRcdGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XHJcblx0XHRyZXR1cm4gZXZ0O1xyXG5cdH1cclxuXHRDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xyXG5cdHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xyXG59XHJcbiIsImlmICh0eXBlb2YgU3RyaW5nLnByb3RvdHlwZS5oYXNoQ29kZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG5cdFN0cmluZy5wcm90b3R5cGUuaGFzaENvZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBoYXNoID0gMCwgaSwgY2hyO1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gaGFzaDtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNociA9IHRoaXMuY2hhckNvZGVBdChpKTtcclxuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hyO1xyXG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGhhc2g7XHJcblx0fTtcclxufTtcclxuIiwiaW1wb3J0IFwiLi9BcnJheVwiO1xyXG5pbXBvcnQgXCIuL1N0cmluZ1wiO1xyXG5pbXBvcnQgXCIuL0N1c3RvbUV2ZW50XCI7IiwibGV0IE1hdGNoZXIgPSBmdW5jdGlvbiAoYVJlZ0V4cCwgYVRleHQpIHtcclxuXHRcclxuXHR0aGlzLmludGVybmFsUmVnZXggPSB0eXBlb2YgYVJlZ0V4cDsgXHJcblx0dGhpcy5wcm9jZXNzaW5nVGV4dCA9IGFUZXh0O1xyXG5cdHRoaXMuY3VycmVudE1hdGNoID0gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuTWF0Y2hlci5wcm90b3R5cGUuaXNNYXRjaGluZyA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzLmludGVybmFsUmVnZXgudGVzdCh0aGlzLnByb2Nlc3NpbmdUZXh0KTtcclxufTtcclxuXHJcbk1hdGNoZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmN1cnJlbnRNYXRjaCA9IHRoaXMuaW50ZXJuYWxSZWdleC5leGVjKHRoaXMucHJvY2Vzc2luZ1RleHQpO1xyXG5cdGlmICh0eXBlb2YgdGhpcy5jdXJyZW50TWF0Y2ggIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdHRoaXMucHJvY2Vzc2luZ1RleHQgPSB0aGlzLnByb2Nlc3NpbmdUZXh0LnJlcGxhY2UodGhpcy5jdXJyZW50TWF0Y2hbMF0sXHRcIlwiKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5NYXRjaGVyLnByb3RvdHlwZS5nZXRNYXRjaCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0eXBlb2YgdGhpcy5jdXJyZW50TWF0Y2ggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50TWF0Y2hbMF07XHJcblx0cmV0dXJuIHVuZGVmaW5lZDtcclxufTtcclxuXHJcbk1hdGNoZXIucHJvdG90eXBlLmdldEdyb3VwID0gZnVuY3Rpb24oYUdyb3VwSWQpIHtcclxuXHRpZiAodHlwZW9mIHRoaXMuY3VycmVudE1hdGNoICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudE1hdGNoW2FHcm91cElkXTtcclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuTWF0Y2hlci5wcm90b3R5cGUucmVwbGFjZUFsbCA9IGZ1bmN0aW9uKGFSZXBsYWNlVmFsdWUsIGFUZXh0KSB7XHJcblx0aWYgKHR5cGVvZiB0aGlzLmN1cnJlbnRNYXRjaCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybiBhVGV4dC5yZXBsYWNlKHRoaXMuY3VycmVudE1hdGNoWzBdLCBhUmVwbGFjZVZhbHVlKTtcclxuXHRyZXR1cm4gYVRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRjaGVyOyIsImltcG9ydCBNYXRjaGVyIGZyb20gXCIuL01hdGNoZXJcIjtcclxuXHJcbmNvbnN0IFJlZ2V4ID0gZnVuY3Rpb24oYVJlZ2V4LCBhT3B0aW9ucykge1xyXG5cdHRoaXMuaW50ZXJuYWxSZWdleCA9IG5ldyBSZWdFeHAoYVJlZ2V4LCBhT3B0aW9ucyk7XHJcbn07XHRcclxuUmVnZXgucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oYVRleHQpIHtcclxuXHRyZXR1cm4gbmV3IE1hdGNoZXIodGhpcy5pbnRlcm5hbFJlZ2V4LCBhVGV4dCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2V4OyIsImltcG9ydCBSZWdleCBmcm9tIFwiLi9SZWdleFwiO1xyXG5pbXBvcnQgTWF0Y2hlciBmcm9tIFwiLi9NYXRjaGVyXCI7XHJcblxyXG5jb25zdCBwYWNrID0ge1xyXG5cdFJlZ2V4IDogUmVnZXgsXHJcblx0TWF0Y2hlciA6IE1hdGNoZXJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhY2s7IiwiaW1wb3J0IFwiLi4vcG9seWZpbGxcIjtcclxuXHJcbmxldCBleHRlbmQgPSBmdW5jdGlvbigpe1xyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdHJldHVybjtcdFxyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdHJldHVybiBhcmd1bWVudHNbMF07XHJcblxyXG5cdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1x0XHJcblx0bGV0IGRlZXAgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJib29sZWFuXCIgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZTtcclxuXHRsZXQgdGFyZ2V0ID0gYXJncy5zaGlmdCgpO1xyXG5cdHdoaWxlKGFyZ3MubGVuZ3RoICE9IDApe1xyXG5cdFx0bGV0IHNvdXJjZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBzb3VyY2UgIT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2goKGZ1bmN0aW9uKGFTb3VyY2UsIGFUYXJnZXQsIGlzRGVlcCwgYU5hbWUpe1xyXG5cdFx0XHRcdGxldCBzb3VyY2UgPSBhU291cmNlW2FOYW1lXTtcclxuXHRcdFx0XHRpZih0eXBlb2Ygc291cmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHNvdXJjZSAhPSBudWxsKXtcclxuXHRcdFx0XHRcdGxldCB0YXJnZXQgPSBhVGFyZ2V0W2FOYW1lXTtcclxuXHRcdFx0XHRcdGlmKHR5cGVvZiB0YXJnZXQgPT09IFwidW5kZWZpbmVkXCIgfHwgdGFyZ2V0ID09IG51bGwpXHJcblx0XHRcdFx0XHRcdGFUYXJnZXRbYU5hbWVdID0gc291cmNlO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZihkZWVwICYmIEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZSkpXHJcblx0XHRcdFx0XHRcdHZhbHVlLmNvbmNhdChhU291cmNlW2FOYW1lXSk7XHJcblx0XHRcdFx0XHRlbHNlIGlmKGRlZXAgJiYgdHlwZW9mIHRhcmdldCAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdGFyZ2V0ID09PSB0eXBlb2Ygc291cmNlKVxyXG5cdFx0XHRcdFx0XHRleHRlbmQodHJ1ZSwgdGFyZ2V0LCBzb3VyY2UpO1x0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KS5iaW5kKG51bGwsIHNvdXJjZSwgdGFyZ2V0LCBkZWVwKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB0YXJnZXQ7XHJcbn07XHJcblxyXG5jb25zdCBPYmplY3RVdGlscyA9IHtcclxuXHRcdGV4dGVuZCA6IGV4dGVuZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0VXRpbHM7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==