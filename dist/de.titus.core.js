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
/******/ 	return __webpack_require__(__webpack_require__.s = "./browser-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./browser-index.js":
/*!**************************!*\
  !*** ./browser-index.js ***!
  \**************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Namespace */ "./src/Namespace.js");
/* harmony import */ var _src_UUID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/UUID */ "./src/UUID.js");
/* harmony import */ var _src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/ExpressionResolver */ "./src/ExpressionResolver.js");
/* harmony import */ var _src_Converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Converter */ "./src/Converter.js");
/* harmony import */ var _src_URL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/URL */ "./src/URL.js");
/* harmony import */ var _src_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Page */ "./src/Page.js");
/* harmony import */ var _src_EventBind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/EventBind */ "./src/EventBind.js");
/* harmony import */ var _src_ScreenObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/ScreenObserver */ "./src/ScreenObserver.js");
/* harmony import */ var _src_regex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/regex */ "./src/regex/index.js");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/utils */ "./src/utils/index.js");
/* harmony import */ var _src_jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/jquery */ "./src/jquery/index.js");
//modules










// load packages






// externalize libs for browser
Object(_src_Namespace__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("de.titus.core", function() {
	return {
		VERSION : "2.0.0-beta2",
		//packages
		utils : _src_utils__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
		regex : _src_regex__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
		jquery : _src_jquery__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
		
		//modules
		Namespace : _src_Namespace__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
		UUID : _src_UUID__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
		ExpressionResolver : _src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
		Converter : _src_Converter__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
		URL: _src_URL__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
		Page: _src_Page__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
		EventBind: _src_EventBind__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
		ScreenObserver : _src_ScreenObserver__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]
	};
});

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
		VERSION : "2.0.0-beta2"
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
	this.regex = new _regex_Regex__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](varRegex	|| EXPRESSION_REGEX);
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
		try{
			let expression = matcher.getMatch();
			let result = _utils_EvalUtils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].eval(matcher.getGroup(1).trim(), aContext, aDefault);
			if (typeof result !== "undefined" || hasDefault)
				text = matcher.replaceAll(result, text);
		}catch(e){
			if(console && console.log)
				console.error(e);
			if (hasDefault)
				text = matcher.replaceAll(aDefault, text);
		}
	}
	return text;
};

ExpressionResolver.prototype.promiseText = function(aText, aContext, aDefault, aTimeout) {
	let action = (function(resolve, args){
		if(args.length === 2)
			resolve(this.text(args[0], args[1]));
		else
			resolve(this.text(args[0], args[1], args[2]));
	}).bind(this, arguments);
	
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
/* WEBPACK VAR INJECTION */(function(global) {const build = function(Gobal, aNames, aCallback) {
	let name = aNames.shift();
	if (typeof Gobal[name] === "undefined")
		Gobal[name] = {};

	if (aNames.length == 0)
		Gobal[name] = aCallback() || Gobal[name];
	else
		build(Gobal[name], aNames, aCallback);
};

const Namespace = function(aNamespace, aFunction) {
	build( (window || global || {}), aNamespace.split("."), aFunction);
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

/***/ "./src/URL.js":
/*!********************!*\
  !*** ./src/URL.js ***!
  \********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const URL = function(aProtocol, aDomain, aPort, aPath, theParameter, aMarker) {	
	this.protocol = aProtocol || "http";
	this.domain = aDomain;
	this.port = aPort;
	this.path = aPath;
	this.parameters = theParameter;
	this.marker = aMarker	
};

URL.prototype.getParameter = function(aKey) {
	let value = this.parameters[aKey];
	if (typeof value !== "undefined")
		return Array.isArray(value) ? value[0] : value;
};

URL.prototype.getParameters = function(aKey) {
	return this.parameters[aKey];
};

URL.prototype.addParameter = function(aKey, aValue, append) {
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

URL.prototype.getQueryString = function() {
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

URL.prototype.getMarkerString = function() {
	if (typeof this.marker !== "undefined")
		return "#" + this.marker	
	return "";
};

URL.prototype.asString = function() {
	let result = this.protocol + "://" + this.domain + ":" + this.port;	
	if (typeof this.path !== "undefined")
		result = result + this.path;

	result = result + this.getQueryString() + this.getMarkerString();

	return result;
};

URL.prototype.toString = function() {
	return this.asString();
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
	if (match)
		parameterString = match[1];

	match = new RegExp("#([^\\?#]*)").exec(tempUrl);
	if (match)
		marker = decodeURIComponent(match[1]);

	splitIndex = tempUrl.indexOf("://");
	if (splitIndex > 0) {
		protocol = tempUrl.substr(0, splitIndex);
		tempUrl = tempUrl.substr(splitIndex + 3);
	}

	match = new RegExp("([^\/:\\?#]*)").exec(tempUrl);
	if (match)
		host = match[1];

	match = new RegExp(":([^\\/\\?#]*)").exec(tempUrl);
	if (match)
		port = match[1];
	else if (protocol.toLowerCase() == "https")
		port = 443;
	else if (protocol.toLowerCase() == "ftp")
		port = 21;
	else if (protocol.toLowerCase() == "ftps")
		port = 21;

	match = new RegExp("(/[^\\?#]*)").exec(tempUrl);
	if (match)
		path = match[1];

	let regex = new RegExp("([^&\\?#=]*)=([^&\\?#=]*)");
	if (typeof parameterString === "string" && parameterString.trim().length != 0) {
		let parameterEntries = parameterString.split("&");		
		for (let i = 0; i < parameterEntries.length; i++) {
			let match = regex.exec(parameterEntries[i]);
			let pName = decodeURIComponent(match[1]);
			let pValue = decodeURIComponent(match[2]);
			parameter[pName] ? parameter[pName].push(pValue)
					: parameter[pName] = [ pValue ];
		}
	}

	return new URL(protocol, host, port, path, parameter, marker);
};


let CURRENT = undefined; 
URL.getCurrentUrl = function() {
	if (!CURRENT)
		 CURRENT = URL.fromString(window.document.location.href);

	return CURRENT;
};

URL.getCurrent = URL.getCurrentUrl;

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
const UUID = function() {	
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
			let result = (new Function("c","try{with(c){return " + statement + ";}}catch(e){throw e;}")).call(null, aContext || {});
			return result || aDefault
		} catch (e) {
			throw e;
		}	
	},
	promiseEval : function(aStatement, aContext, aDefault, aTimeout){
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
const extend = function(){
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

/***/ "./src/utils/PagingUtils.js":
/*!**********************************!*\
  !*** ./src/utils/PagingUtils.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const PagingUtils = {
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
/* harmony default export */ __webpack_exports__["a"] = (PagingUtils);


/***/ }),

/***/ "./src/utils/StringUtils.js":
/*!**********************************!*\
  !*** ./src/utils/StringUtils.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectUtils */ "./src/utils/ObjectUtils.js");


const DEFAULTS = {
	formatToHtml : {
		"tabsize" : 4,
		"tabchar" : "&nbsp;",
		"newlineTag" : "<br/>"
	},

	trimTextLength : {
		"postfix" : "..."
	}
};
const StringUtils = {
	DEFAULTS : DEFAULTS,
	trimTextLength : function(aText, maxLength, theSettings) {
		if (aText == undefined || typeof aText !== "string" || aText == "")
			return aText;

		let settings = _ObjectUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({}, theSettings, DEFAULTS.trimTextLength);

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
		let settings = _ObjectUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({}, theSettings ,DEFAULTS.formatToHtml);
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
/* harmony import */ var _PagingUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PagingUtils */ "./src/utils/PagingUtils.js");
/* harmony import */ var _StringUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StringUtils */ "./src/utils/StringUtils.js");






const utils = {
		EvalUtils : _EvalUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
		ObjectUtils : _ObjectUtils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
		PagingUtils : _PagingUtils__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
		StringUtils : _StringUtils__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
};

/* harmony default export */ __webpack_exports__["a"] = (utils);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnJvd3Nlci1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9KUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vSFRNTEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vSFRNTElucHV0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9IVE1MU2VsZWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9Ob2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL05vZGVMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvQmFzaWNRdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL0V2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9Ob2RlUXVlcnlTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy91dGlscy9FeHRlbmRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udmVydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudEJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTmFtZXNwYWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9TY3JlZW5PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVVJMLmpzIiwid2VicGFjazovLy8uL3NyYy9VVUlELmpzIiwid2VicGFjazovLy8uL3NyYy9qcXVlcnkvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcXVlcnkvRXZlbnRCaW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9qcXVlcnkvU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pxdWVyeS9UYWduYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcXVlcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZ2V4L01hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZ2V4L1JlZ2V4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRXZhbFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9PYmplY3RVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUGFnaW5nVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1N0cmluZ1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDREQUFXLFVBQVU7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNERBQVcsVUFBVTtBQUN0QztBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZ0JBQWdCO0FBQ2hCLElBQUk7QUFDSixnQkFBZ0I7QUFDaEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ2Usb0VBQVcsRTs7Ozs7Ozs7Ozs7OztBQzFGMUI7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDSTtBQUNBO0FBQ0E7OztBQUd4QztBQUNBLGNBQWMsMERBQVM7QUFDdkIsZ0JBQWdCLDREQUFXO0FBQzNCLGdCQUFnQiw0REFBVztBQUMzQixnQkFBZ0IsNERBQVc7QUFDM0I7O0FBRWUsOERBQUssRSIsImZpbGUiOiJkZS50aXR1cy5jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9icm93c2VyLWluZGV4LmpzXCIpO1xuIiwiLy9tb2R1bGVzXHJcbmltcG9ydCBOYW1lc3BhY2UgZnJvbSBcIi4vc3JjL05hbWVzcGFjZVwiO1xyXG5pbXBvcnQgVVVJRCBmcm9tIFwiLi9zcmMvVVVJRFwiO1xyXG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCIuL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXJcIjtcclxuaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi9zcmMvQ29udmVydGVyXCI7XHJcbmltcG9ydCBVUkwgZnJvbSBcIi4vc3JjL1VSTFwiO1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9zcmMvUGFnZVwiO1xyXG5pbXBvcnQgRXZlbnRCaW5kIGZyb20gXCIuL3NyYy9FdmVudEJpbmRcIjtcclxuaW1wb3J0IFNjcmVlbk9ic2VydmVyIGZyb20gXCIuL3NyYy9TY3JlZW5PYnNlcnZlclwiO1xyXG5cclxuXHJcbi8vIGxvYWQgcGFja2FnZXNcclxuaW1wb3J0IHJlZ2V4IGZyb20gXCIuL3NyYy9yZWdleFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vc3JjL3V0aWxzXCI7XHJcbmltcG9ydCBqcXVlcnkgZnJvbSBcIi4vc3JjL2pxdWVyeVwiO1xyXG5cclxuXHJcblxyXG4vLyBleHRlcm5hbGl6ZSBsaWJzIGZvciBicm93c2VyXHJcbk5hbWVzcGFjZShcImRlLnRpdHVzLmNvcmVcIiwgZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHRcdC8vcGFja2FnZXNcclxuXHRcdHV0aWxzIDogdXRpbHMsXHJcblx0XHRyZWdleCA6IHJlZ2V4LFxyXG5cdFx0anF1ZXJ5IDoganF1ZXJ5LFxyXG5cdFx0XHJcblx0XHQvL21vZHVsZXNcclxuXHRcdE5hbWVzcGFjZSA6IE5hbWVzcGFjZSxcclxuXHRcdFVVSUQgOiBVVUlELFxyXG5cdFx0RXhwcmVzc2lvblJlc29sdmVyIDogRXhwcmVzc2lvblJlc29sdmVyLFxyXG5cdFx0Q29udmVydGVyIDogQ29udmVydGVyLFxyXG5cdFx0VVJMOiBVUkwsXHJcblx0XHRQYWdlOiBQYWdlLFxyXG5cdFx0RXZlbnRCaW5kOiBFdmVudEJpbmQsXHJcblx0XHRTY3JlZW5PYnNlcnZlciA6IFNjcmVlbk9ic2VydmVyXHJcblx0fTtcclxufSk7IiwiaW1wb3J0IFwiLi9zcmMvaW5kZXhcIjsiLCIoZnVuY3Rpb24oR2xvYmFsKSB7XHJcblxyXG5cdEdsb2JhbC5kZSA9IEdsb2JhbC5kZSB8fCB7fTtcclxuXHRHbG9iYWwuZGUudGl0dXMgPSBHbG9iYWwuZGUudGl0dXMgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzLmRvbSA9IEdsb2JhbC5kZS50aXR1cy5kb20gfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzLmRvbS5hcGkgPSBHbG9iYWwuZGUudGl0dXMuZG9tLmFwaSB8fCB7fTtcclxuXHRHbG9iYWwuZGUudGl0dXMuZG9tLmFwaS5leHRlbnRpb24gPSB7XHJcblx0XHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCJcclxuXHR9O1xyXG5cclxuXHRjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcblxyXG5cdEdsb2JhbC5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuZmluZC5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cclxuXHRHbG9iYWwucmVhZHkgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5yZWFkeS5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cclxuXHRHbG9iYWwuY3JlYXRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmchXCIpO1xyXG5cclxuXHRcdGxldCBib2R5ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhhcmd1bWVudHNbMF0udHJpbSgpLCBhcmd1bWVudHNbMV0gfHwgXCJ0ZXh0L2h0bWxcIikuZmluZChcImJvZHlcIik7XHJcblx0XHRsZXQgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHRcdGxldCBub2RlcyA9IGJvZHkuY2hpbGROb2RlcztcclxuXHRcdHdoaWxlIChub2Rlcy5sZW5ndGggIT0gMClcclxuXHRcdFx0ZnJhZy5hcHBlbmQobm9kZXNbMF0pO1xyXG5cclxuXHRcdHJldHVybiBmcmFnLmNoaWxkTm9kZXM7XHJcblx0fTtcclxufSkod2luZG93IHx8IGdsb2JhbCk7XHJcbiIsImltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxFbGVtZW50XCI7XHJcbihmdW5jdGlvbihHbG9iYWwpIHtcclxuXHQvKipcclxuXHQgKiBKUXVlcnkgcHJldmVudCBqcXVlcnlcclxuXHQgKi9cclxuXHRjb25zdCAkID0gR2xvYmFsLiQgPSBHbG9iYWwuSlF1ZXJ5ID0gR2xvYmFsLmpRdWVyeSA9IEdsb2JhbC4kIHx8IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIGRvY3VtZW50O1xyXG5cdFx0ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7XHRcdFx0XHJcblx0XHRcdGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0cmV0dXJuIEdsb2JhbC5yZWFkeS5hcHBseShHbG9iYWwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRpZiAoLzxbXjxdKz4vZy50ZXN0KGFyZ3VtZW50c1swXSkpXHJcblx0XHRcdFx0XHRyZXR1cm4gR2xvYmFsLmNyZWF0ZS5hcHBseShHbG9iYWwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0cmV0dXJuIEdsb2JhbC5maW5kLmFwcGx5KEdsb2JhbCwgYXJndW1lbnRzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJldHVybiBhcmd1bWVudHNbMF07XHJcblx0XHR9XHJcblx0fTtcclxufSkod2luZG93IHx8IGdsb2JhbCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBCYXNpY1F1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0Jhc2ljUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnRcIjtcclxuaW1wb3J0IFJlYWR5RXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUmVhZHlFdmVudFN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShEb2N1bWVudC5wcm90b3R5cGUsIEJhc2ljUXVlcnlTdXBwb3J0LCBFdmVudFN1cHBvcnQsIFJlYWR5RXZlbnRTdXBwb3J0KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcblx0ZG9jdW1lbnQudHJpZ2dlcihcInJlYWR5XCIpO1xyXG59KTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBCYXNpY1F1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0Jhc2ljUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBOb2RlUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvTm9kZVF1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgSHRtbENsYXNzU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnRcIjtcclxuaW1wb3J0IEV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0V2ZW50U3VwcG9ydFwiO1xyXG5pbXBvcnQgU2hvd0hpZGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvU2hvd0hpZGVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxFbGVtZW50LnByb3RvdHlwZSxCYXNpY1F1ZXJ5U3VwcG9ydCxOb2RlUXVlcnlTdXBwb3J0LEh0bWxDbGFzc1N1cHBvcnQsRXZlbnRTdXBwb3J0LFNob3dIaWRlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsVmFsdWVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MU2VsZWN0RWxlbWVudC5wcm90b3R5cGUsVmFsdWVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IERhdGFTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRGF0YVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZS5wcm90b3R5cGUsRGF0YVN1cHBvcnQsTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBEZWxlZ2F0ZXJCdWlsZGVyIGZyb20gXCIuLi91dGlscy9EZWxlZ2F0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCBMaXN0U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0xpc3RTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoTm9kZUxpc3QucHJvdG90eXBlLCBMaXN0U3VwcG9ydCk7XHJcblxyXG5EZWxlZ2F0ZXJCdWlsZGVyKGZ1bmN0aW9uKGFGdW5jdGlvbk5hbWUsIHRoZUFyZ3VtZW50cyl7XHJcblx0bGV0IG5vZGVzID0gdGhpcy52YWx1ZXMoKTtcclxuXHRsZXQgbm9kZSA9IG5vZGVzLm5leHQoKTtcclxuXHRsZXQgcmVzdWx0cyA9IFtdO1xyXG5cdHdoaWxlKG5vZGUgJiYgbm9kZS52YWx1ZSl7XHJcblx0XHRub2RlID0gbm9kZS52YWx1ZTtcclxuXHRcdGlmKHR5cGVvZiBub2RlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBub2RlW2FGdW5jdGlvbk5hbWVdID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gbm9kZVthRnVuY3Rpb25OYW1lXS5hcHBseShub2RlLCB0aGVBcmd1bWVudHMpO1xyXG5cdFx0XHRpZih0eXBlb2YgcmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiICYmIHJlc3VsdCAhPSBudWxsKXtcclxuXHRcdFx0XHRpZihyZXN1bHQgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdFx0XHRcdHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChyZXN1bHQpO1xyXG5cdFx0XHRcdGVsc2UgaWYocmVzdWx0IGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KVxyXG5cdFx0XHR9XHRcdFxyXG5cdFx0fVxyXG5cdFx0bm9kZSA9IG5vZGVzLm5leHQoKTtcdFx0XHJcblx0fVxyXG5cdFxyXG5cdGlmKHJlc3VsdHMubGVuZ3RoID09IDApXHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdGVsc2UgaWYocmVzdWx0c1swXSBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHRzKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gcmVzdWx0cztcdFxyXG59LE5vZGVMaXN0LnByb3RvdHlwZSwgTm9kZS5wcm90b3R5cGUsIEhUTUxFbGVtZW50LnByb3RvdHlwZSwgSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsIEVsZW1lbnQucHJvdG90eXBlKTtcclxuXHJcblxyXG5Ob2RlTGlzdC5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiAgYXJndW1lbnRzWzBdIGluc3RhbmNlb2YgTm9kZUxpc3Qpe1xyXG5cdFx0cmV0dXJuIGFyZ3VtZW50c1swXTtcdFx0XHJcblx0fVxyXG5cdGVsc2V7XHJcblx0XHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGxldCBpbnRlcm5hbCA9IHtcclxuXHRcdFx0bGVuZ3RoOiB7dmFsdWU6IDB9XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRsZXQgbGlzdCA9IEFycmF5LmZyb20oYXJncy5zaGlmdCgpKTtcdFx0XHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgbGlzdFtpXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsaXN0W2ldIGluc3RhbmNlb2YgTm9kZSl7XHJcblx0XHRcdFx0XHRpbnRlcm5hbFtpXSA9IHt2YWx1ZTogbGlzdFtpXSwgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdFx0XHRpbnRlcm5hbC5sZW5ndGgudmFsdWUrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcclxuXHRcdHJldHVybiBPYmplY3QuY3JlYXRlKE5vZGVMaXN0LnByb3RvdHlwZSxpbnRlcm5hbCApO1xyXG5cdH1cclxufSIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRjb25zdCBwYXJlbnRTZWxlY3RvciA9IC86cGFyZW50KFxcKFxcXCIoW15cXCldKilcXFwiXFwpKT8vaTtcclxuXHRcclxuXHRQcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uKGFTZWxlY3Rvcikge1xyXG5cdFx0bGV0IG1hdGNoID0gcGFyZW50U2VsZWN0b3IuZXhlYyhhU2VsZWN0b3IpO1xyXG5cdFx0aWYobWF0Y2gpe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gdGhpcztcclxuXHRcdFx0aWYobWF0Y2guaW5kZXggPiAwKXtcclxuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yLnN1YnN0cigwLCBtYXRjaC5pbmRleCkpO1xyXG5cdFx0XHRcdGlmKHJlc3VsdC5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0XHRpZih0eXBlb2YgbWF0Y2hbMl0gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnBhcmVudChtYXRjaFsyXSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucGFyZW50KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZih0eXBlb2YgcmVzdWx0ID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBuZXh0U2VsZWN0b3IgPSBhU2VsZWN0b3Iuc3Vic3RyKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKS50cmltKCk7XHJcblx0XHRcdGlmKG5leHRTZWxlY3Rvci50cmltKCkubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0LmZpbmQobmV4dFNlbGVjdG9yKTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHRcdFxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvcik7XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuXHJcbiIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRQcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl9fZGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHR0aGlzLl9fZGF0YSA9IHt9O1xyXG5cdFx0XHRpZih0eXBlb2YgdGhpcy5kYXRhc2V0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdGZvciAobmFtZSBpbiB0aGlzLmRhdGFzZXQpXHJcblx0XHRcdFx0XHR0aGlzLl9fZGF0YVtuYW1lXSA9IHRoaXMuZGF0YXNldFtuYW1lXTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX2RhdGE7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLl9fZGF0YVthcmd1bWVudHNbMF1dIDtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwidW5kZWZpbmVkXCIgfHwgYXJndW1lbnRzWzFdID09IG51bGwpXHJcblx0XHRcdGRlbGV0ZSB0aGlzLl9fZGF0YVthcmd1bWVudHNbMF1dO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLl9fZGF0YVthcmd1bWVudHNbMF1dID0gYXJndW1lbnRzWzFdO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImNvbnN0IHN1cHBvcnQgPSBmdW5jdGlvbihQcm90b3R5cGUpIHtcclxuXHRjb25zdCBXcmFwcGVkRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oYUNvbmZpZywgYUNhbGxiYWNrICxhRXZlbnQpe1xyXG5cdFx0aWYodHlwZW9mIGFDb25maWcuZmlsdGVyICE9PSBcInVuZGVmaW5lZFwiICYmICFhRXZlbnQudGFyZ2V0LmlzKGFDb25maWcuZmlsdGVyKSlcdFx0XHJcblx0XHRcdHJldHVybjtcclxuXHRcdFxyXG5cdFx0bGV0IGFyZ3MgPSBbYUV2ZW50XTtcclxuXHRcdGlmKHR5cGVvZiBhQ29uZmlnLmRhdGEgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGFyZ3MgPSBhcmdzLmNvbmNhdChhQ29uZmlnLmRhdGEpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0ID0gYUNhbGxiYWNrLmFwcGx5KGFDYWxsYmFjaywgYXJncyk7XHJcblx0XHRpZihhQ29uZmlnLnNpbmdsZUNhbGwpXHJcblx0XHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihhQ2FsbGJhY2spO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gcmVzdWx0O1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdGNvbnN0IGFkZEV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcclxuXHRQcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUb28gbGVzcyBhcmd1bWVudHMhXCIpO1xyXG5cclxuXHRcdHRoaXMub24oYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUub24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHRcdFxyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLl9fY2FsbGJhY2tNYXAgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHRoaXMuX19jYWxsYmFja01hcCA9IHt9O1xyXG5cclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGV2ZW50cyA9IGFyZ3Muc2hpZnQoKS5zcGxpdCgvKFxccyspfChcXHMqLFxccyopLyk7XHJcblx0XHRsZXQgaGFuZGxlckNvbmZpZyA9IHtcclxuXHRcdFx0ZmlsdGVyIDogKHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJncy5zaGlmdCgpLnNwbGl0KC9cXHMqLFxccyovKSA6IHVuZGVmaW5lZCksXHJcblx0XHRcdGRhdGEgOiAodHlwZW9mIGFyZ3NbMF0gIT09IFwiZnVuY3Rpb25cIiA/IGFyZ3Muc2hpZnQoKSA6IHVuZGVmaW5lZClcclxuXHRcdH07XHJcblx0ICAgIGxldCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHQgICAgXHJcblx0ICAgIGhhbmRsZXJDb25maWcuc2luZ2xlQ2FsbCA9ICh0eXBlb2YgYXJnc1swXSAhPT0gXCJib29sZWFuXCIgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZSk7XHJcblxyXG5cdFx0bGV0IGV2ZW50TWFwID0ge307XHJcblx0XHRldmVudHMuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBjb25maWcsIGNhbGxiYWNrLCBldmVudCl7XHJcblx0XHRcdGxldCB3cmFwcGVkRXZlbnRIYW5kbGVyID0gV3JhcHBlZEV2ZW50SGFuZGxlci5iaW5kKHRoaXMsIGNvbmZpZywgY2FsbGJhY2spO1xyXG5cdFx0XHRyZXN1bHRbZXZlbnRdID0gd3JhcHBlZEV2ZW50SGFuZGxlcjtcdFx0XHRcclxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50LCB3cmFwcGVkRXZlbnRIYW5kbGVyLCB0cnVlKTtcclxuXHRcdFx0XHJcblx0XHR9KS5iaW5kKHRoaXMsIGV2ZW50TWFwLCBoYW5kbGVyQ29uZmlnLCBjYWxsYmFjaykpO1xyXG5cdFx0XHJcblx0XHR0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdID0gZXZlbnRNYXA7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxuXHRcclxuXHRjb25zdCByZW1vdmVFdmVudExpc3RlbmVyID0gUHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XHJcblx0UHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUucmVtb3ZlT24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDEgfHwgdHlwZW9mIHRoaXMuX19jYWxsYmFja01hcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0cmV0dXJuIHJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHJcblx0XHRsZXQgZXZlbnRzID0gdW5kZWZpbmVkO1xyXG5cdFx0bGV0IGNhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG5cdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0ZXZlbnRzID0gYXJndW1lbnRzWzBdLnNwbGl0KC8oXFxzKyl8KFxccyosXFxzKikvKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRjYWxsYmFjayA9IGFyZ3VtZW50c1swXS5zaGlmdCgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBhcmd1bWVudCEgLT4gY2FsbCBmdW5jdGlvbihbZXZlbnR8aGFuZGxlcl0pXCIpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmVtb3ZhbEhhbmRsZXIgPSBbXTtcclxuXHRcdGlmKHR5cGVvZiBldmVudHMgPT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRldmVudE1hcCA9IHRoaXMuX19jYWxsYmFja01hcFtjYWxsYmFja107XHJcblx0XHRcdGlmKHR5cGVvZiBldmVudE1hcCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdFx0ZXZlbnRNYXAuZ2V0T3duUHJvcGVydHlOYW1lcygpLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgZXZlbnRNYXAsIGV2ZW50KXtcclxuXHRcdFx0XHRcdGxldCBoYW5kbGVyID0gZXZlbnRNYXBbZXZlbnRdO1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIGhhbmRsZXIgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGhhbmRsZXIpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHJlbW92YWxIYW5kbGVyLCBldmVudE1hcCkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0ZXZlbnRzLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgZXZlbnQpe1xyXG5cdFx0XHRcdE9iamVjdC5nZXRQcm9wZXJ0eU5hbWVzKHRoaXMuX19jYWxsYmFja01hcCkuZm9yRWFjaCgoZnVuY3Rpb24oYUV2ZW50LCBDYWxsYmFjayl7XHJcblx0XHRcdFx0XHRsZXQgZXZlbnRNYXAgPSB0aGlzLl9fY2FsbGJhY2tNYXBbQ2FsbGJhY2tdO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIGV2ZW50TWFwW2FFdmVudF07XHJcblx0XHRcdFx0XHRpZihldmVudE1hcC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCkgPT0gMClcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX19jYWxsYmFja01hcFtDYWxsYmFja107XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCBldmVudCkpO1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdFxyXG5cdFByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBldmVudCA9IHVuZGVmaW5lZDtcclxuXHRcdGlmKHR5cGVvZiB0aGlzW1wib25cIiArIGFyZ3VtZW50c1swXV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuXHRcdFx0ZXZlbnQuaW5pdEV2ZW50KGFyZ3VtZW50c1swXSwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGFyZ3VtZW50c1swXSwgIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgZGV0YWlsOiBhcmd1bWVudHNbMV0gfSk7XHJcblx0XHRcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcclxuXHRcclxuXHRQcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmFkZENsYXNzKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcdFx0XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLnRvb2dsZUNsYXNzKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHRcclxuXHRQcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdGlmKHRoaXNbaV0gPT0gYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fTtcclxuXHRcclxuXHRpZih0eXBlb2YgUHJvdG90eXBlLmZvckVhY2ggPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRQcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1swXTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cclxuXHRQcm90b3R5cGUuYXR0ciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlcygpID8gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSB7fTtcclxuXHRcdFx0XHR0aGlzLmdldEF0dHJpYnV0ZU5hbWVzKCkuZm9yRWFjaCgoZnVuY3Rpb24ocmVzdWx0LCBuYW1lKSB7XHJcblx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHJlc3VsdCkpO1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH0pLmNhbGwodGhpcykgOiB1bmRlZmluZWQ7XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhcmd1bWVudHNbMV0gPT0gbnVsbClcclxuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXJndW1lbnRzWzBdKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgbm9kZXMgPSB0aGlzLmNoaWxkTm9kZXNcclxuXHRcdHdoaWxlKG5vZGVzLmxlbmd0aCAhPSAwKVx0XHRcdFxyXG5cdFx0XHRub2Rlc1swXS5yZW1vdmUodHJ1ZSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmNvbnRlbnQgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGROb2RlcztcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0aWYoYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm91dGVySFRNTDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgXHJcblx0XHRcdEFycmF5LmZyb20oYXJndW1lbnRzKS5mb3JFYWNoKChmdW5jdGlvbihjb250ZW50KXtcclxuXHRcdFx0XHRpZih0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gY29udGVudDtcclxuXHRcdFx0XHRlbHNlIGlmKGNvbnRlbnQgaW5zdGFuY2VvZiBFbGVtZW50KXtcclxuXHRcdFx0XHRcdHRoaXMuZW1wdHkoKTtcclxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGNvbnRlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHRcdFxyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdFxyXG5cdFByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKXtcclxuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYXRjaGVzKGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXS5sZW5ndGggPT09IFwibnVtYmVyXCIpe1xyXG5cdFx0XHRcdGxldCBmaWx0ZXIgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGZpbHRlci5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRcdGlmKHRoaXMubWF0Y2hlcyhmaWx0ZXJbaV0pKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIil7XHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblx0XHRcdHdoaWxlKCFwYXJlbnQuaXMoYXJndW1lbnRzWzBdKSlcclxuXHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50KGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucGFyZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xyXG5cdFx0bGV0IHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHdoaWxlKHBhcmVudCl7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHBhcmVudCk7XHJcblx0XHRcdHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHQpO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLnNlbGVjdG9yID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHR5cGVvZiB0aGlzLmlkID09PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMuaWQubGVuZ3RoID09IDApe1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcclxuXHRcdFx0aWYocGFyZW50IGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgcGFyZW50IGluc3RhbmNlb2YgIERvY3VtZW50RnJhZ21lbnQpXHJcblx0XHRcdFx0cGFyZW50ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLmxvY2FsTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRpZih0eXBlb2YgcGFyZW50ICE9PSBcInVuZGVmaW5lZFwiKXtcclxuXHRcdFx0XHRsZXQgc2FtZVRhZ1NpYmxpbmdzID0gcGFyZW50LmZpbmQoXCI6c2NvcGU+XCIgKyBzZWxlY3Rvcik7XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNhbWVUYWdTaWJsaW5ncyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBzYW1lVGFnU2libGluZ3MuaW5kZXhPZih0aGlzKSArIDE7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPiAwKVxyXG5cdFx0XHRcdFx0XHRzZWxlY3RvciArPSAnOm50aC1jaGlsZCgnICsgaW5kZXggKyAnKSc7XHJcblx0XHRcdFx0fVx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHBhcmVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IHBhcmVudC5zZWxlY3RvcigpICsgXCI+XCIgKyBzZWxlY3RvciA6IHNlbGVjdG9yO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gXCIjXCIgKyB0aGlzLmlkO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLmNsb3Nlc3RzID0gZnVuY3Rpb24oYVF1ZXJ5KSB7XHJcblx0XHRpZih0aGlzLmlzKGFRdWVyeSkpXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0ZWxzZXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IHRoaXMuZmluZChhUXVlcnksIHRydWUpO1xyXG5cdFx0XHRpZihyZXN1bHQubGVuZ3RoID4gMClcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50KCk7XHJcblx0XHRcdGlmKHR5cGVvZiBwYXJlbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgcGFyZW50ICE9IGRvY3VtZW50KVxyXG5cdFx0XHRcdHJldHVybiBwYXJlbnQuY2xvc2VzdChhUXVlcnkpO1xyXG5cdFx0fVx0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24oYVF1ZXJ5KXtcclxuXHRcdGxldCByZXN1bHQgPSB0aGlzLmNsb3Nlc3RzKGFRdWVyeSk7XHJcblx0XHRpZih0eXBlb2YgcmVzdWx0ICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0WzBdO1xyXG5cdH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cclxuXHRQcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbihhRnVuY3Rpb24sIG9uY2Upe1x0XHJcblx0XHR0aGlzLm9uKFwicmVhZHlcIiwgYUZ1bmN0aW9uLCBvbmNlKTtcclxuXHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKVx0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJyZWFkeVwiKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJjb25zdCBzdXBwb3J0ID0gZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblxyXG5cdFByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMuX19pc2hpZGUpe1xyXG5cdFx0XHR0aGlzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9fZGlzcGxheSB8fCBcIlwiO1xyXG5cdFx0XHR0aGlzLl9faXNoaWRlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKCF0aGlzLl9faXNoaWRlKXtcclxuXHRcdFx0dGhpcy5fX2Rpc3BsYXkgPSB0aGlzLnN0eWxlLmRpc3BsYXk7XHJcblx0XHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHR0aGlzLl9faXNoaWRlID0gdHJ1ZTtcclxuXHRcdH1cdFxyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS50b2dnbGVTaG93ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMuX19pc2hpZGUpXHJcblx0XHRcdHJldHVybiB0aGlzLnNob3coKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXMuaGlkZSgpO1xyXG5cdH07XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiY29uc3Qgc3VwcG9ydCA9IGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdGNvbnN0IElucHV0VHlwZXMgPVtcclxuXHRcdHtcclxuXHRcdFx0c2VsZWN0b3IgOiBcInNlbGVjdFwiLFxyXG5cdFx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBbXTtcclxuXHRcdFx0XHR0aGlzLmZpbmQoXCJvcHRpb246Y2hlY2tlZFwiLCB0cnVlKS5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIG9wdGlvbil7XHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaChvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgcmVzdWx0KSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJib29sZWFuXCIgJiYgYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcdFx0XHRcdFxyXG5cdFx0XHRcdGVsc2UgaWYocmVzdWx0Lmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdFswXTtcclxuXHRcdFx0XHRlbHNlIGlmKHJlc3VsdC5sZW5ndGggPiAxKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQgOiBmdW5jdGlvbigpe1x0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHZhbHVlcyA9IFtdO1xyXG5cdFx0XHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdFx0dmFsdWVzID0gdmFsdWVzLmNvbmNhdChhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcblx0XHRcdFx0XHR2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5maW5kKFwib3B0aW9uXCIsIHRydWUpLmZvckVhY2goKGZ1bmN0aW9uKHZhbHVlcywgb3B0aW9uKXtcclxuXHRcdFx0XHRcdGxldCBjaGVjayA9IHZhbHVlcy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPiAtMTtcclxuXHRcdFx0XHRcdGlmKGNoZWNrKVxyXG5cdFx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHZhbHVlcykpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHNlbGVjdG9yIDogXCJvcHRpb25cIixcclxuXHRcdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpZih0aGlzLnNlbGVjdGVkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkID0gYVZhbHVlO1xyXG5cdFx0XHRcdGVsc2UgaWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcdFx0XHRcdFxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRzZWxlY3RvciA6IFwiaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXVwiLFxyXG5cdFx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiB0aGlzLnZhbHVlID09PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMudmFsdWUgPT0gXCJvblwiKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY2hlY2tlZDtcclxuXHRcdFx0XHRlbHNlIGlmKHRoaXMuY2hlY2tlZClcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1x0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdFx0aWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWU7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgYVZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XTtcclxuXHRcclxuXHRjb25zdCBEZWZhdWx0SW5wdXRUeXBlID0ge1xyXG5cdFx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHRcdHRoaXMudmFsdWUgPSBhVmFsdWU7XHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyKFwiaW5wdXRcIik7XHJcblx0XHRcdH1cdFxyXG5cdH07XHJcblx0XHJcblx0Y29uc3QgZ2V0SW5wdXRUeXBlID0gZnVuY3Rpb24oYUVsZW1lbnQpe1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IElucHV0VHlwZXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdGlmKGFFbGVtZW50LmlzKElucHV0VHlwZXNbaV0uc2VsZWN0b3IpKVxyXG5cdFx0XHRcdHJldHVybiBJbnB1dFR5cGVzW2ldO1x0XHRcclxuXHRcdHJldHVybiBEZWZhdWx0SW5wdXRUeXBlO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHR5cGUgPSBnZXRJbnB1dFR5cGUodGhpcyk7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApe1xyXG5cdFx0XHRyZXR1cm4gdHlwZS5nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHR5cGUuc2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cdFx0XHJcblx0fTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJcclxuaW1wb3J0IFwiLi9kb20vTm9kZS5qc1wiO1xyXG5pbXBvcnQgXCIuL2RvbS9Eb2N1bWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MSW5wdXRFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxTZWxlY3RFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVMaXN0XCI7XHJcbmltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbmltcG9ydCBcIi4vSlF1ZXJ5XCI7XHJcbiIsImNvbnN0IERlbGVnYXRlckJ1aWxkZXIgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgY2FsbGJhY2sgPSBhcmdzLnNoaWZ0KCk7XHJcblx0bGV0IHNvdXJjZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRhcmdzLmZvckVhY2goKGZ1bmN0aW9uKGFTb3VyY2UsIGFDYWxsYmFjaywgYVRhcmdldCl7XHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhVGFyZ2V0KS5mb3JFYWNoKFxyXG5cdFx0XHRcdChmdW5jdGlvbihhU291cmNlLCBhVGFyZ2V0LGFDYWxsYmFjaywgIGFOYW1lKSB7XHJcblx0XHRcdFx0XHRsZXQgcHJvcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYVRhcmdldCwgYU5hbWUpO1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBhU291cmNlW2FOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcHJvcC52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0XHRhU291cmNlW2FOYW1lXSA9IGZ1bmN0aW9uKCl7cmV0dXJuIGFDYWxsYmFjay5jYWxsKHRoaXMsIGFOYW1lLCBhcmd1bWVudHMpO307XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHR9KS5iaW5kKG51bGwsIGFTb3VyY2UsIGFUYXJnZXQsIGFDYWxsYmFjaykpO1xyXG5cdH0pLmJpbmQobnVsbCwgc291cmNlLCBjYWxsYmFjaykpO1xyXG5cdFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEZWxlZ2F0ZXJCdWlsZGVyOyIsImNvbnN0IGV4dGVuZFByb3RvdHlwZSA9IGZ1bmN0aW9uKCl7XHJcblx0bGV0IGFyZ3MgPSBcdEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgcHJvdG90eXBlID0gYXJncy5zaGlmdCgpOyBcclxuXHR3aGlsZShhcmdzLmxlbmd0aCA+IDApe1xyXG5cdFx0bGV0IGV4dGVuZGVyID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0ZXh0ZW5kZXIocHJvdG90eXBlKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBleHRlbmRQcm90b3R5cGU7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiY29uc3QgQ29udmVydGVyID0ge1xyXG5cdHhtbFRvSnNvbiA6IGZ1bmN0aW9uKGFOb2RlKSB7XHJcblx0XHQvLyBDcmVhdGUgdGhlIHJldHVybiBvYmplY3RcclxuXHRcdGxldCBvYmogPSB7fTtcclxuXHRcdGlmIChhTm9kZS5ub2RlVHlwZSA9PSAxIHx8IGFOb2RlLm5vZGVUeXBlID09IDkpIHsgLy8gZWxlbWVudFxyXG5cdFx0XHQvLyBkbyBhdHRyaWJ1dGVzXHJcblx0XHRcdGlmIChhTm9kZS5hdHRyaWJ1dGVzICE9IHVuZGVmaW5lZCAmJiBhTm9kZS5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRsZXQgYXR0cmlidXRlcyA9IHt9O1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYU5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0bGV0IGF0dHJpYnV0ZSA9IGFOb2RlLmF0dHJpYnV0ZXMuaXRlbShpKTtcclxuXHRcdFx0XHRcdGF0dHJpYnV0ZXNbYXR0cmlidXRlLm5vZGVOYW1lXSA9IGF0dHJpYnV0ZS5ub2RlVmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG9ialtcIkBhdHRyaWJ1dGVzXCJdID0gYXR0cmlidXRlcztcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChhTm9kZS5ub2RlVHlwZSA9PSAzIHx8IGFOb2RlLm5vZGVUeXBlID09IDQpIC8vIHRleHRcclxuXHRcdFx0cmV0dXJuIGFOb2RlLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcblx0XHQvLyBkbyBjaGlsZHJlblxyXG5cdFx0aWYgKGFOb2RlLmhhc0NoaWxkTm9kZXMoKSkge1xyXG5cdFx0XHRsZXQgdGV4dENvbnRlbnQgPSB1bmRlZmluZWQ7XHJcblx0XHRcdGxldCBoYXNDaGlsZHJlbiA9IGZhbHNlO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFOb2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgaXRlbSA9IGFOb2RlLmNoaWxkTm9kZXMuaXRlbShpKTtcclxuXHRcdFx0XHRpZiAoaXRlbS5ub2RlVHlwZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRoYXNDaGlsZHJlbiA9IHRydWU7XHJcblx0XHRcdFx0XHRsZXQgbm9kZU5hbWUgPSBpdGVtLm5vZGVOYW1lO1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBvYmpbbm9kZU5hbWVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRcdG9ialtub2RlTmFtZV0gPSBDb252ZXJ0ZXIueG1sVG9Kc29uKGl0ZW0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBvYmpbbm9kZU5hbWVdLnB1c2ggPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgb2xkID0gb2JqW25vZGVOYW1lXTtcclxuXHRcdFx0XHRcdFx0XHRvYmpbbm9kZU5hbWVdID0gW107XHJcblx0XHRcdFx0XHRcdFx0b2JqW25vZGVOYW1lXS5wdXNoKG9sZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0b2JqW25vZGVOYW1lXS5wdXNoKENvbnZlcnRlci54bWxUb0pzb24oaXRlbSkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoKGl0ZW0ubm9kZVR5cGUgPT0gMyB8fCBpdGVtLm5vZGVUeXBlID09IDQpXHJcblx0XHRcdFx0XHRcdCYmIGl0ZW0udGV4dENvbnRlbnQgIT0gXCJcIilcclxuXHRcdFx0XHRcdHRleHRDb250ZW50ID0gKHRleHRDb250ZW50ID8gdGV4dENvbnRlbnQgKyBpdGVtLnRleHRDb250ZW50XHJcblx0XHRcdFx0XHRcdFx0OiBpdGVtLnRleHRDb250ZW50KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRleHRDb250ZW50KSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBvYmpbXCJAYXR0cmlidXRlc1wiXSA9PT0gXCJ1bmRlZmluZWRcIiAmJiAhaGFzQ2hpbGRyZW4pXHJcblx0XHRcdFx0XHRvYmogPSB0ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0b2JqLnRleHQgPSB0ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBvYmo7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbnZlcnRlcjsiLCJpbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb25cIjtcclxuaW1wb3J0IE9iamVjdFV0aWxzIGZyb20gXCIuL3V0aWxzL09iamVjdFV0aWxzXCI7XHJcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIi4vRXhwcmVzc2lvblJlc29sdmVyXCI7XHJcblxyXG5jb25zdCBleHByZXNzaW9uUmVzb2x2ZXIgPSBFeHByZXNzaW9uUmVzb2x2ZXIuREVGQVVMVDtcclxuXHJcbmNvbnN0IFNUQVRFID0ge1xyXG5cdEZJTklTSEVEIDogXCIkJGV2ZW50QmluZC5GSU5JU0hFRCQkXCIsXHJcblx0RkFJTF9ERVRBSUxTIDogXCIkJGV2ZW50QmluZC5GQUlMX0RFVEFJTFMkJFwiXHJcbn07XHJcbmNvbnN0IEZJTklTSEVEU1RBVEUgPSB7XHJcbiAgICBGQUlMIDogXCJmYWlsXCIsXHJcbiAgICBSRUFEWSA6IFwicmVhZHlcIlxyXG59O1xyXG5cclxuY29uc3QgRXhlY3V0ZXIgPSBmdW5jdGlvbihhbkV2ZW50KSB7XHJcblx0bGV0IGVsZW1lbnQgPSBhbkV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblx0bGV0IGRhdGEgPSBlbGVtZW50LmRhdGEoXCJkZS50aXR1cy5jb3JlLmV2ZW50QmluZFwiKTtcclxuXHRpZiAoZGF0YS5wcmV2ZW50RGVmYXVsdClcclxuXHRcdGFuRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRpZiAoZGF0YS5zdG9wUHJvcGFnYXRpb24pXHJcblx0XHRhbkV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRpZiAoYXJncy5sZW5ndGggPj0gMSAmJiB0eXBlb2YgYW5FdmVudC5kYXRhICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0YXJncy5zcGxpY2UoMSwgMCwgYW5FdmVudC5kYXRhKTtcclxuXHRcclxuXHRpZiAodHlwZW9mIGRhdGEuYWN0aW9uID09PSAnc3RyaW5nJykge1xyXG5cdFx0bGV0IGFjdGlvbiA9IGV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlRXhwcmVzc2lvbihkYXRhLmFjdGlvbiwgYW5FdmVudC5kYXRhLCB1bmRlZmluZWQpO1xyXG5cdFx0aWYgKHR5cGVvZiBhY3Rpb24gPT09IFwiZnVuY3Rpb25cIilcdFx0XHRcclxuXHRcdFx0YWN0aW9uLmFwcGx5KGFjdGlvbiwgYXJncyk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkYXRhLmRlbGVnYXRpb24gPT09ICdzdHJpbmcnKVxyXG5cdFx0ZWxlbWVudC50cmlnZ2VyKGRhdGEuZGVsZWdhdGlvbiwgYXJncyk7XHJcblxyXG5cdHJldHVybiBkYXRhLnByZXZlbnREZWZhdWx0O1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IEV2ZW50QmluZCA9IGZ1bmN0aW9uKGFuRWxlbWVudCwgYUNvbnRleHQpIHtcclxuXHRpZih0eXBlb2YgYW5FbGVtZW50ID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0cmV0dXJuO1xyXG5cdFxyXG5cdGlmKHR5cGVvZiBhbkVsZW1lbnQuZGF0YShcImRlLnRpdHVzLmNvcmUuZXZlbnRCaW5kXCIpICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0cmV0dXJuO1xyXG5cdFxyXG5cdGlmKGFuRWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0cmV0dXJuIGFuRWxlbWVudC5mb3JFYWNoKChmdW5jdGlvbihhQ29udGV4dCwgYW5FbGVtZW50KXtcclxuXHRcdFx0RXZlbnRCaW5kKGFuRWxlbWVudCwgYUNvbnRleHQpO1xyXG5cdFx0fSkuYmluZChudWxsLCBhQ29udGV4dCkpO1xyXG5cdFxyXG5cdGxldCBkYXRhID0ge1xyXG5cdCAgICBwcmV2ZW50RGVmYXVsdCA6IGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtcHJldmVudC1kZWZhdWx0XCIpICE9IG51bGwsXHJcblx0ICAgIHN0b3BQcm9wYWdhdGlvbiA6IGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtc3RvcC1wcm9wYWdhdGlvblwiKSAhPSBudWxsXHJcblx0fTtcclxuXHRhbkVsZW1lbnQuZGF0YShcImRlLnRpdHVzLmNvcmUuZXZlbnRCaW5kXCIsIGRhdGEpO1xyXG5cdFxyXG5cdGRhdGEuZXZlbnRUeXBlID0gYW5FbGVtZW50LmF0dHIoXCJldmVudC10eXBlXCIpO1xyXG5cdGlmICh0eXBlb2YgZGF0YS5ldmVudFR5cGUgIT09IFwic3RyaW5nXCIpe1xyXG5cdFx0ZGF0YS5zdGF0ZSA9IEZJTklTSEVEU1RBVEUuRkFJTDtcclxuXHRcdGRhdGEuZGV0YWlscyA9IFwiTm8gZXZlbnQgdHlwZSBkZWZpbmVkIVwiO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRcclxuXHRkYXRhLmFjdGlvbiA9IGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtYWN0aW9uXCIpO1xyXG5cdGRhdGEuZGVsZWdhdGlvbiA9IGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtZGVsZWdhdGlvblwiKTtcclxuXHJcblx0aWYgKHR5cGVvZiBkYXRhLmFjdGlvbiAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgZGF0YS5kZWxlZ2F0aW9uICE9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRkYXRhLnN0YXRlID0gRklOSVNIRURTVEFURS5GQUlMO1xyXG5cdFx0ZGF0YS5kZXRhaWxzID0gXCJObyBhY3Rpb24gb3IgZGVsZWdhdGlvbiBkZWZpbmVkIVwiO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0ZGF0YS5ldmVudERhdGEgPSBhbkVsZW1lbnQuYXR0cihcImV2ZW50LWRhdGFcIik7XHJcblx0aWYgKHR5cGVvZiBkYXRhLmV2ZW50RGF0YSA9PT0gXCJzdHJpbmdcIiAmJiBkYXRhLmV2ZW50RGF0YS5sZW5ndGggPiAwKVxyXG5cdFx0ZGF0YS5ldmVudERhdGEgPSBleHByZXNzaW9uUmVzb2x2ZXIucmVzb2x2ZUV4cHJlc3Npb24oZXZlbnREYXRhLCBhQ29udGV4dCwge30pO1xyXG5cdGVsc2UgaWYgKHR5cGVvZiBhQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRkYXRhLmV2ZW50RGF0YSA9IE9iamVjdFV0aWxzLmV4dGVuZCh7fSwgYUNvbnRleHQpO1xyXG5cdFxyXG5cdGlmIChkYXRhLmV2ZW50RGF0YSlcclxuXHRcdGFuRWxlbWVudC5vbihkYXRhLmV2ZW50VHlwZSwgbnVsbCwgZGF0YS5ldmVudERhdGEsIEV4ZWN1dGVyKTtcclxuXHRlbHNlXHJcblx0XHRhbkVsZW1lbnQub24oZGF0YS5ldmVudFR5cGUsIEV4ZWN1dGVyKTtcclxuXHRcclxuXHRyZXR1cm4gdGhpcztcclxufTtcclxuXHJcbmNvbnN0IE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XHJcblx0bXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24obXV0YXRpb24pIHtcclxuXHRcdG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XHJcblx0XHRcdGlmIChub2RlLm5vZGVUeXBlICE9IE5vZGUuVEVYVF9OT0RFKSB7XHJcblx0XHRcdFx0aWYobm9kZS5pcyhcIltldmVudC10eXBlXVwiKSlcclxuXHRcdFx0XHRcdEV2ZW50QmluZChub2RlKTtcdFx0XHRcdFxyXG5cdFx0XHRcdEV2ZW50QmluZChub2RlLmZpbmQoXCJbZXZlbnQtdHlwZV1cIikpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxufSk7XHJcblxyXG4vLyBwYXNzIGluIHRoZSB0YXJnZXQgbm9kZSwgYXMgd2VsbCBhcyB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xyXG5PYnNlcnZlci5vYnNlcnZlKGZpbmQoXCJib2R5XCIpLmZpcnN0KCksICB7XHJcbiAgICBhdHRyaWJ1dGVzIDogdHJ1ZSxcclxuICAgIGNoaWxkTGlzdCA6IHRydWUsXHJcbiAgICBzdWJ0cmVlIDogdHJ1ZSxcclxuICAgIGNoYXJhY3RlckRhdGEgOiBmYWxzZVxyXG59KTtcclxuXHJcbnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdGNvbnNvbGUubG9nKFwiaW5pdCBldmVudCBiaW5kcyB3aXRoIGF1dG9ydW5cIik7XHJcblx0RXZlbnRCaW5kKGZpbmQoXCJbZXZlbnQtYXV0b3J1bl1cIikpO1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRCaW5kOyIsImltcG9ydCBSZWdleCBmcm9tIFwiLi9yZWdleC9SZWdleFwiO1xyXG5pbXBvcnQgRXZhbFV0aWxzIGZyb20gXCIuL3V0aWxzL0V2YWxVdGlsc1wiO1xyXG5cclxuY29uc3QgRVhQUkVTU0lPTl9SRUdFWCA9IFwiXFxcXCRcXFxceyhbXlxcXFx7XFxcXH1dKylcXFxcfVwiO1xyXG5cclxuXHJcbmNvbnN0IEV4cHJlc3Npb25SZXNvbHZlciA9IGZ1bmN0aW9uKHZhclJlZ2V4KSB7XHJcblx0dGhpcy5yZWdleCA9IG5ldyBSZWdleCh2YXJSZWdleFx0fHwgRVhQUkVTU0lPTl9SRUdFWCk7XHJcbn07XHJcblxyXG5FeHByZXNzaW9uUmVzb2x2ZXIucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbihhRXhwcmVzc2lvbiwgYUNvbnRleHQsIGFEZWZhdWx0KSB7XHJcblx0bGV0IGV4cHJlc3Npb24gPSBhRXhwcmVzc2lvbi50cmltKCk7XHJcblx0bGV0IG1hdGNoZXIgPSB0aGlzLnJlZ2V4LnBhcnNlKGV4cHJlc3Npb24pO1xyXG5cdGlmIChtYXRjaGVyLm5leHQoKSlcclxuXHRcdGV4cHJlc3Npb24gPSBtYXRjaGVyLmdldEdyb3VwKDEpLnRyaW0oKTtcclxuXHRcdFxyXG5cdHJldHVybiBFdmFsVXRpbHMuZXZhbChleHByZXNzaW9uLCBhQ29udGV4dCB8fCB7fSwgYURlZmF1bHQpO1xyXG59O1xyXG5cclxuRXhwcmVzc2lvblJlc29sdmVyLnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24oYUV4cHJlc3Npb24sIGFDb250ZXh0LCBhRGVmYXVsdCwgYVRpbWVvdXQpIHtcclxuXHRsZXQgZXhwcmVzc2lvbiA9IGFFeHByZXNzaW9uLnRyaW0oKTtcclxuXHRsZXQgbWF0Y2hlciA9IHRoaXMucmVnZXgucGFyc2UoZXhwcmVzc2lvbik7XHJcblx0aWYgKG1hdGNoZXIubmV4dCgpKVxyXG5cdFx0ZXhwcmVzc2lvbiA9IG1hdGNoZXIuZ2V0R3JvdXAoMSkudHJpbSgpO1xyXG5cdFx0XHJcblx0cmV0dXJuIEV2YWxVdGlscy5wcm9taXNlRXZhbChleHByZXNzaW9uLCBhQ29udGV4dCB8fCB7fSwgYURlZmF1bHQpO1xyXG59O1xyXG5cclxuRXhwcmVzc2lvblJlc29sdmVyLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24oYVRleHQsIGFDb250ZXh0LCBhRGVmYXVsdCkge1xyXG5cdGxldCBoYXNEZWZhdWx0ID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMztcclxuXHRsZXQgdGV4dCA9IGFUZXh0O1xyXG5cdGxldCBtYXRjaGVyID0gdGhpcy5yZWdleC5wYXJzZSh0ZXh0KTtcclxuXHR3aGlsZSAobWF0Y2hlci5uZXh0KCkpIHtcclxuXHRcdHRyeXtcclxuXHRcdFx0bGV0IGV4cHJlc3Npb24gPSBtYXRjaGVyLmdldE1hdGNoKCk7XHJcblx0XHRcdGxldCByZXN1bHQgPSBFdmFsVXRpbHMuZXZhbChtYXRjaGVyLmdldEdyb3VwKDEpLnRyaW0oKSwgYUNvbnRleHQsIGFEZWZhdWx0KTtcclxuXHRcdFx0aWYgKHR5cGVvZiByZXN1bHQgIT09IFwidW5kZWZpbmVkXCIgfHwgaGFzRGVmYXVsdClcclxuXHRcdFx0XHR0ZXh0ID0gbWF0Y2hlci5yZXBsYWNlQWxsKHJlc3VsdCwgdGV4dCk7XHJcblx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdGlmKGNvbnNvbGUgJiYgY29uc29sZS5sb2cpXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdFx0aWYgKGhhc0RlZmF1bHQpXHJcblx0XHRcdFx0dGV4dCA9IG1hdGNoZXIucmVwbGFjZUFsbChhRGVmYXVsdCwgdGV4dCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB0ZXh0O1xyXG59O1xyXG5cclxuRXhwcmVzc2lvblJlc29sdmVyLnByb3RvdHlwZS5wcm9taXNlVGV4dCA9IGZ1bmN0aW9uKGFUZXh0LCBhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KSB7XHJcblx0bGV0IGFjdGlvbiA9IChmdW5jdGlvbihyZXNvbHZlLCBhcmdzKXtcclxuXHRcdGlmKGFyZ3MubGVuZ3RoID09PSAyKVxyXG5cdFx0XHRyZXNvbHZlKHRoaXMudGV4dChhcmdzWzBdLCBhcmdzWzFdKSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJlc29sdmUodGhpcy50ZXh0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pKTtcclxuXHR9KS5iaW5kKHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHJcblx0aWYoYVRpbWVvdXQgPiAwKVxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKCl7XHJcblx0XHRcdHNldFRpbWVvdXQoYWN0aW9uLCBhVGltZW91dCk7XHJcblx0XHR9KTtcclxuXHRcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoYWN0aW9uKTtcclxufTtcclxuXHJcblxyXG5FeHByZXNzaW9uUmVzb2x2ZXIucHJvdG90eXBlLnJlc29sdmVUZXh0ID0gRXhwcmVzc2lvblJlc29sdmVyLnByb3RvdHlwZS50ZXh0O1xyXG5FeHByZXNzaW9uUmVzb2x2ZXIucHJvdG90eXBlLnJlc29sdmVFeHByZXNzaW9uID0gRXhwcmVzc2lvblJlc29sdmVyLnByb3RvdHlwZS5yZXNvbHZlOyBcclxuRXhwcmVzc2lvblJlc29sdmVyLkRFRkFVTFQgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHByZXNzaW9uUmVzb2x2ZXI7XHJcbiIsImNvbnN0IGJ1aWxkID0gZnVuY3Rpb24oR29iYWwsIGFOYW1lcywgYUNhbGxiYWNrKSB7XG5cdGxldCBuYW1lID0gYU5hbWVzLnNoaWZ0KCk7XG5cdGlmICh0eXBlb2YgR29iYWxbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0R29iYWxbbmFtZV0gPSB7fTtcblxuXHRpZiAoYU5hbWVzLmxlbmd0aCA9PSAwKVxuXHRcdEdvYmFsW25hbWVdID0gYUNhbGxiYWNrKCkgfHwgR29iYWxbbmFtZV07XG5cdGVsc2Vcblx0XHRidWlsZChHb2JhbFtuYW1lXSwgYU5hbWVzLCBhQ2FsbGJhY2spO1xufTtcblxuY29uc3QgTmFtZXNwYWNlID0gZnVuY3Rpb24oYU5hbWVzcGFjZSwgYUZ1bmN0aW9uKSB7XG5cdGJ1aWxkKCAod2luZG93IHx8IGdsb2JhbCB8fCB7fSksIGFOYW1lc3BhY2Uuc3BsaXQoXCIuXCIpLCBhRnVuY3Rpb24pO1xufTtcblxuTmFtZXNwYWNlLmNyZWF0ZSA9IE5hbWVzcGFjZTsgXG5leHBvcnQgZGVmYXVsdCBOYW1lc3BhY2U7XG4iLCJsZXQgUGFnZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuYmFzZVRhZ1ZhbHVlID0gdW5kZWZpbmVkO1xyXG5cdGxldCBiYXNlVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VbaHJlZl1cIik7XHJcblx0aWYgKHR5cGVvZiBiYXNlVGFnICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0dGhpcy5iYXNlVGFnVmFsdWUgPSBiYXNlVGFnLmF0dHJpYnV0ZXNbXCJocmVmXCJdLnZhbHVlO1xyXG5cdFx0dGhpcy5maWxlcyA9IHt9O1xyXG5cdFx0dGhpcy5kYXRhID0ge307XHJcbn07XHJcblx0XHJcblBhZ2UucHJvdG90eXBlLmFkZEpzRmlsZSA9IGZ1bmN0aW9uKGFVcmwsIGFGdW5jdGlvbiwgZm9yY2VGdW5jdGlvbikge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGFVcmwpKVxyXG5cdFx0cmV0dXJuIHRoaXMuYWRkSnNGaWxlcyhhVXJsLCBhRnVuY3Rpb24sIGZvcmNlRnVuY3Rpb24pO1xyXG5cdFxyXG5cdGlmICh0eXBlb2YgdGhpcy5maWxlc1thVXJsXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0dGhpcy5maWxlc1thVXJsXSA9IHRydWU7XHJcblx0XHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2phdmFzY3JpcHRcIik7XHJcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLCBhVXJsKTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsZW1lbnQpO1xyXG5cdFxyXG5cdFx0aWYgKHR5cGVvZiBhRnVuY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGFGdW5jdGlvbigpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChmb3JjZUZ1bmN0aW9uICYmIHR5cGVvZiBhRnVuY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdGFGdW5jdGlvbigpO1xyXG5cdH1cclxufTtcclxuXHJcblBhZ2UucHJvdG90eXBlLmFkZEpzRmlsZXMgPSBmdW5jdGlvbihhVXJscywgYUZ1bmN0aW9uLCBmb3JjZUZ1bmN0aW9uKSB7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoYVVybHMpKSB7XHJcblx0XHR3aGlsZShhVXJscy5sZW5ndGggIT0gMCl7XHJcblx0XHRcdHRoaXMuYWRkSnNGaWxlKGFVcmxzLnNoaWZ0KCksIChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLmFkZEpzRmlsZXMoYVVybHMsIGFGdW5jdGlvbiwgZm9yY2VGdW5jdGlvbilcclxuXHRcdFx0fSkuYmluZCh0aGlzKSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0fSBlbHNlXHJcblx0XHR0aGlzLmFkZEpzRmlsZShhVXJscywgYUZ1bmN0aW9uLCBmb3JjZUZ1bmN0aW9uKTtcclxufTtcclxuXHJcblBhZ2UucHJvdG90eXBlLmFkZENzc0ZpbGUgPSBmdW5jdGlvbihhVXJsKSB7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoYVVybCkpIHtcclxuXHRcdHRoaXMuYWRkQ3NzRmlsZXMoYVVybCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAodGhpcy5maWxlc1thVXJsXSA9PSB1bmRlZmluZWQpIHtcclxuXHRcdHRoaXMuZmlsZXNbYVVybF0gPSB0cnVlO1xyXG5cdFx0bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcclxuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xyXG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGFVcmwpO1xyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQoZWxlbWVudCk7XHJcblx0fVxyXG59O1xyXG5cclxuUGFnZS5wcm90b3R5cGUuYWRkQ3NzRmlsZXMgPSBmdW5jdGlvbihhVXJscykge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGFVcmxzKSkge1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IGFVcmxzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoaXMuYWRkQ3NzRmlsZShhVXJsc1tpXSk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuUGFnZS5wcm90b3R5cGUuZ2V0VXJsID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRlLnRpdHVzLmNvcmUuVVJMLmdldEN1cnJlbnRVcmwoKTtcclxufTtcclxuXHJcblBhZ2UucHJvdG90eXBlLmJ1aWxkVXJsID0gZnVuY3Rpb24oYVVybCkge1xyXG5cdGxldCBicm93c2VyID0gdGhpcy5kZXRlY3RCcm93c2VyKCk7XHJcblx0aWYgKGJyb3dzZXIuaWUgJiYgYnJvd3Nlci5pZSA8IDExKSB7XHJcblx0XHRsZXQgdGVtcFVybCA9IGFVcmwudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuYmFzZVRhZ1ZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmICF0ZW1wVXJsLmluZGV4T2YoXCJodHRwOlwiKSA9PSAwXHJcblx0XHRcdFx0JiYgIXRlbXBVcmwuaW5kZXhPZihcImh0dHBzOlwiKSA9PSAwXHJcblx0XHRcdFx0JiYgIXRlbXBVcmwuaW5kZXhPZihcImZ0cDpcIikgPT0gMFxyXG5cdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJmdHBzOlwiKSA9PSAwXHJcblx0XHRcdFx0JiYgIXRlbXBVcmwuaW5kZXhPZihcIm1haWx0bzpcIikgPT0gMFxyXG5cdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJub3RlczpcIikgPT0gMFxyXG5cdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCIvXCIpID09IDApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYmFzZVRhZ1ZhbHVlICsgYVVybDtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGFVcmw7XHJcbn07XHJcblxyXG5QYWdlLnByb3RvdHlwZS5kZXRlY3RCcm93c2VyID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKFBhZ2UuQlJPV1NFUilcclxuXHRcdHJldHVybiBQYWdlLkJST1dTRVI7XHJcblxyXG5cdFBhZ2UuQlJPV1NFUiA9IHt9O1xyXG5cdGlmIChkb2N1bWVudC5kb2N1bWVudE1vZGUpXHJcblx0XHRQYWdlLkJST1dTRVIuaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XHJcblx0ZWxzZVxyXG5cdFx0UGFnZS5CUk9XU0VSLm90aGVyID0gdHJ1ZTtcclxuXHJcblx0cmV0dXJuIFBhZ2UuQlJPV1NFUjtcclxufTtcclxuXHJcblBhZ2UucHJvdG90eXBlLnNldERhdGEgPSBmdW5jdGlvbihhS2V5LCBhVmFsdWUpIHtcclxuXHR0aGlzLmRhdGFbYUtleV0gPSBhVmFsdWU7XHJcbn07XHJcblxyXG5QYWdlLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24oYUtleSkge1xyXG5cdHJldHVybiB0aGlzLmRhdGFbYUtleV07XHJcbn07XHJcblxyXG5QYWdlLmdldEluc3RhbmNlID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKHR5cGVvZiBJTlNUQU5DRSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0UGFnZS5JTlNUQU5DRSA9IG5ldyBQYWdlKCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gUGFnZS5JTlNUQU5DRTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIi4vRXhwcmVzc2lvblJlc29sdmVyXCI7XHJcbmltcG9ydCBVVUlEIGZyb20gXCIuL1VVSURcIjtcclxuXHJcbmNvbnN0IFJFU09MVkVSID0gRXhwcmVzc2lvblJlc29sdmVyLkRFRkFVTFQ7XHJcbmxldCBUSU1FT1VUSUQgPSB1bmRlZmluZWQ7XHJcblxyXG5jb25zdCBjYWxsSGFuZGxlciA9IGZ1bmN0aW9uKGFIYW5kbGVyLCBhU2NyZWVuKSB7XHJcbiAgICBzZXRUaW1lb3V0KChmdW5jdGlvbihhSGFuZGxlciwgYVNjcmVlbikge1xyXG5cdCAgICBsZXQgcmVzdWx0ID0gUkVTT0xWRVIucmVzb2x2ZUV4cHJlc3Npb24oYUhhbmRsZXIuY29uZGl0aW9uLCBhU2NyZWVuLCBmYWxzZSk7XHJcblx0ICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnYm9vbGVhbicpXHJcblx0XHQgICAgcmV0dXJuIE9ic2VydmVyLmhhbmRsZXJbYUhhbmRsZXIuaWRdID09IHVuZGVmaW5lZDtcclxuXHJcblx0ICAgIGlmIChyZXN1bHQpIHtcclxuXHRcdCAgICBhSGFuZGxlci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0ICAgIGFIYW5kbGVyLmFjdGl2YXRlLmNhbGwoYVNjcmVlbik7XHJcblx0XHQgICAgaWYgKHR5cGVvZiBhSGFuZGxlci5kZWFjdGl2YXRlICE9PSAnZnVuY3Rpb24nKVxyXG5cdFx0ICAgIFx0T2JzZXJ2ZXIuaGFuZGxlclthSGFuZGxlci5pZF0gPT0gdW5kZWZpbmVkO1xyXG5cdCAgICB9IGVsc2UgaWYgKGFIYW5kbGVyLmFjdGl2ZSAmJiB0eXBlb2YgYUhhbmRsZXIuZGVhY3RpdmF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0ICAgIGFIYW5kbGVyLmRlYWN0aXZhdGUuY2FsbChhU2NyZWVuKTtcclxuXHRcdCAgICBhSGFuZGxlci5hY3RpdmUgPSBmYWxzZTtcclxuXHQgICAgfVxyXG5cclxuICAgIH0pLmJpbmQobnVsbCwgYUhhbmRsZXIsIGFTY3JlZW4pLCA2Nik7XHJcbn07XHJcblxyXG5jb25zdCBPYnNlcnZlciA9IHtcclxuICAgIGhhbmRsZXIgOiB7fSxcclxuICAgIGFkZEhhbmRsZXIgOiBmdW5jdGlvbihhSGFuZGxlcikge1xyXG5cdCAgICBpZiAodHlwZW9mIGFIYW5kbGVyLmNvbmRpdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgYUhhbmRsZXIuY29uZGl0aW9uLmxlbmd0aCAhPSAwKSB7XHJcblx0XHQgICAgYUhhbmRsZXIuaWQgPSBVVUlEKFwiLVwiKTtcclxuXHRcdCAgICBPYnNlcnZlci5oYW5kbGVyW2FIYW5kbGVyLmlkXSA9IGFIYW5kbGVyO1xyXG5cdFx0ICAgIGNhbGxIYW5kbGVyKGFIYW5kbGVyLCBPYnNlcnZlci5zY3JlZW5EYXRhKCksIHRoaXMpO1xyXG5cdFx0ICAgIHJldHVybiBhSGFuZGxlcjtcclxuXHQgICAgfVxyXG4gICAgfSxcclxuICAgIHNjcmVlbkRhdGEgOiBmdW5jdGlvbigpIHtcclxuXHQgICAgcmV0dXJuIHtcclxuXHQgICAgICAgIHdpZHRoIDogd2luZG93LmlubmVyV2lkdGgsXHJcblx0ICAgICAgICBoZWlnaHQgOiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcblx0ICAgICAgICBwaXhlbFJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8sXHJcblx0ICAgICAgICBsYW5kc2NhcGUgOiAod2luZG93LmlubmVySGVpZ2h0IDw9IHdpbmRvdy5pbm5lcldpZHRoKSxcclxuXHQgICAgICAgIHBvcnRyYWl0IDogKHdpbmRvdy5pbm5lckhlaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoKVxyXG5cdCAgICB9O1xyXG4gICAgfSxcclxuICAgIHJlc2l6aW5nIDogZnVuY3Rpb24oKSB7XHJcbiAgICBcdFRJTUVPVVRJRCA9IHVuZGVmaW5lZDtcclxuXHQgICAgbGV0IHNjcmVlbiA9IE9ic2VydmVyLnNjcmVlbkRhdGEoKTtcclxuXHQgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoT2JzZXJ2ZXIuaGFuZGxlcikuZm9yRWFjaChmdW5jdGlvbihhSGFuZGxlcklkKSB7XHJcblx0XHQgICAgY2FsbEhhbmRsZXIoT2JzZXJ2ZXIuaGFuZGxlclthSGFuZGxlcklkXSwgc2NyZWVuKTtcclxuXHQgICAgfSk7XHJcbiAgICB9ICAgIFxyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICBmdW5jdGlvbigpIHtcclxuICAgIGlmIChUSU1FT1VUSUQpXHJcblx0ICAgIGNsZWFyVGltZW91dChUSU1FT1VUSUQpO1xyXG4gICAgVElNRU9VVElEID0gc2V0VGltZW91dChPYnNlcnZlci5yZXNpemluZywgMjUwKTtcclxufSwgZmFsc2UpO1xyXG5cclxucmVhZHkoT2JzZXJ2ZXIucmVzaXppbmcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2JzZXJ2ZXI7XHJcbiIsImNvbnN0IFVSTCA9IGZ1bmN0aW9uKGFQcm90b2NvbCwgYURvbWFpbiwgYVBvcnQsIGFQYXRoLCB0aGVQYXJhbWV0ZXIsIGFNYXJrZXIpIHtcdFxyXG5cdHRoaXMucHJvdG9jb2wgPSBhUHJvdG9jb2wgfHwgXCJodHRwXCI7XHJcblx0dGhpcy5kb21haW4gPSBhRG9tYWluO1xyXG5cdHRoaXMucG9ydCA9IGFQb3J0O1xyXG5cdHRoaXMucGF0aCA9IGFQYXRoO1xyXG5cdHRoaXMucGFyYW1ldGVycyA9IHRoZVBhcmFtZXRlcjtcclxuXHR0aGlzLm1hcmtlciA9IGFNYXJrZXJcdFxyXG59O1xyXG5cclxuVVJMLnByb3RvdHlwZS5nZXRQYXJhbWV0ZXIgPSBmdW5jdGlvbihhS2V5KSB7XHJcblx0bGV0IHZhbHVlID0gdGhpcy5wYXJhbWV0ZXJzW2FLZXldO1xyXG5cdGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZVswXSA6IHZhbHVlO1xyXG59O1xyXG5cclxuVVJMLnByb3RvdHlwZS5nZXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24oYUtleSkge1xyXG5cdHJldHVybiB0aGlzLnBhcmFtZXRlcnNbYUtleV07XHJcbn07XHJcblxyXG5VUkwucHJvdG90eXBlLmFkZFBhcmFtZXRlciA9IGZ1bmN0aW9uKGFLZXksIGFWYWx1ZSwgYXBwZW5kKSB7XHJcblx0aWYgKHR5cGVvZiB0aGlzLnBhcmFtZXRlcnNbYUtleV0gPT09IFwidW5kZWZpbmVkXCIpIFxyXG5cdFx0dGhpcy5wYXJhbWV0ZXJzW2FLZXldID0gW107XHJcblx0aWYgKCFhcHBlbmQgJiYgdHlwZW9mIGFWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgXHJcblx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0gPSB1bmRlZmluZWQ7XHJcblx0IGVsc2UgaWYgKCFhcHBlbmQgJiYgdHlwZW9mIGFWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgYVZhbHVlLmxlbmd0aCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IGFWYWx1ZTtcclxuXHQgZWxzZSBpZiAoYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGFWYWx1ZS5sZW5ndGggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHQkLm1lcmdlKHRoaXMucGFyYW1ldGVyc1thS2V5XSwgYVZhbHVlKTsvLyBAVE9ETyAkLm1lcmdlIGVudGZlcm5lblxyXG5cdCBlbHNlIGlmICghYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0gPSBbIGFWYWx1ZSBdO1xyXG5cdCBlbHNlIGlmIChhcHBlbmQgJiYgdHlwZW9mIGFWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikgXHJcblx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0ucHVzaChhVmFsdWUpO1x0XHRcclxufTtcclxuXHJcblVSTC5wcm90b3R5cGUuZ2V0UXVlcnlTdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodHlwZW9mIHRoaXMucGFyYW1ldGVycyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0bGV0IHJlc3VsdCA9IFwiP1wiO1xyXG5cdFx0bGV0IGlzRmlyc3RQYXJhbWV0ZXIgPSB0cnVlO1xyXG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHRoaXMucGFyYW1ldGVycykge1xyXG5cdFx0XHRpZiAoIWlzRmlyc3RQYXJhbWV0ZXIpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQgKyBcIiZcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpc0ZpcnN0UGFyYW1ldGVyID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHBhcmFtZXRlclZhbHVlcyA9IHRoaXMucGFyYW1ldGVyc1twcm9wZXJ0eU5hbWVdO1xyXG5cdFx0XHRpZiAodHlwZW9mIHBhcmFtZXRlclZhbHVlcy5sZW5ndGggPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICsgZW5jb2RlVVJJQ29tcG9uZW50KHByb3BlcnR5TmFtZSkgKyBcIj1cIlxyXG5cdFx0XHRcdFx0XHQrIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbWV0ZXJWYWx1ZXMpO1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgcGFyYW1ldGVyVmFsdWVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRpZiAoaiA+IDApIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICsgXCImXCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQgKyBlbmNvZGVVUklDb21wb25lbnQocHJvcGVydHlOYW1lKSArIFwiPVwiXHJcblx0XHRcdFx0XHRcdFx0KyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyVmFsdWVzW2pdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdH1cclxufTtcclxuXHJcblVSTC5wcm90b3R5cGUuZ2V0TWFya2VyU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKHR5cGVvZiB0aGlzLm1hcmtlciAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybiBcIiNcIiArIHRoaXMubWFya2VyXHRcclxuXHRyZXR1cm4gXCJcIjtcclxufTtcclxuXHJcblVSTC5wcm90b3R5cGUuYXNTdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgcmVzdWx0ID0gdGhpcy5wcm90b2NvbCArIFwiOi8vXCIgKyB0aGlzLmRvbWFpbiArIFwiOlwiICsgdGhpcy5wb3J0O1x0XHJcblx0aWYgKHR5cGVvZiB0aGlzLnBhdGggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRyZXN1bHQgPSByZXN1bHQgKyB0aGlzLnBhdGg7XHJcblxyXG5cdHJlc3VsdCA9IHJlc3VsdCArIHRoaXMuZ2V0UXVlcnlTdHJpbmcoKSArIHRoaXMuZ2V0TWFya2VyU3RyaW5nKCk7XHJcblxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5VUkwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuYXNTdHJpbmcoKTtcclxufTtcclxuXHRcclxuVVJMLmZyb21TdHJpbmcgPSBmdW5jdGlvbihhVXJsU3RyaW5nKSB7XHJcblx0bGV0IHRlbXBVcmwgPSBhVXJsU3RyaW5nO1xyXG5cdGxldCBwcm90b2NvbCA9IFwiaHR0cFwiO1xyXG5cdGxldCBob3N0ID0gdW5kZWZpbmVkO1xyXG5cdGxldCBwb3J0ID0gODA7XHJcblx0bGV0IHBhdGggPSBcIi9cIjtcclxuXHRsZXQgbWFya2VyID0gXCJcIjtcclxuXHRsZXQgcGFyYW1ldGVyU3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cdGxldCBzcGxpdEluZGV4ID0gLTE7XHJcblx0bGV0IHBhcmFtZXRlciA9IHt9O1xyXG5cclxuXHRsZXQgbWF0Y2ggPSBuZXcgUmVnRXhwKFwiXFxcXD8oW14jXSopXCIpLmV4ZWModGVtcFVybCk7XHJcblx0aWYgKG1hdGNoKVxyXG5cdFx0cGFyYW1ldGVyU3RyaW5nID0gbWF0Y2hbMV07XHJcblxyXG5cdG1hdGNoID0gbmV3IFJlZ0V4cChcIiMoW15cXFxcPyNdKilcIikuZXhlYyh0ZW1wVXJsKTtcclxuXHRpZiAobWF0Y2gpXHJcblx0XHRtYXJrZXIgPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMV0pO1xyXG5cclxuXHRzcGxpdEluZGV4ID0gdGVtcFVybC5pbmRleE9mKFwiOi8vXCIpO1xyXG5cdGlmIChzcGxpdEluZGV4ID4gMCkge1xyXG5cdFx0cHJvdG9jb2wgPSB0ZW1wVXJsLnN1YnN0cigwLCBzcGxpdEluZGV4KTtcclxuXHRcdHRlbXBVcmwgPSB0ZW1wVXJsLnN1YnN0cihzcGxpdEluZGV4ICsgMyk7XHJcblx0fVxyXG5cclxuXHRtYXRjaCA9IG5ldyBSZWdFeHAoXCIoW15cXC86XFxcXD8jXSopXCIpLmV4ZWModGVtcFVybCk7XHJcblx0aWYgKG1hdGNoKVxyXG5cdFx0aG9zdCA9IG1hdGNoWzFdO1xyXG5cclxuXHRtYXRjaCA9IG5ldyBSZWdFeHAoXCI6KFteXFxcXC9cXFxcPyNdKilcIikuZXhlYyh0ZW1wVXJsKTtcclxuXHRpZiAobWF0Y2gpXHJcblx0XHRwb3J0ID0gbWF0Y2hbMV07XHJcblx0ZWxzZSBpZiAocHJvdG9jb2wudG9Mb3dlckNhc2UoKSA9PSBcImh0dHBzXCIpXHJcblx0XHRwb3J0ID0gNDQzO1xyXG5cdGVsc2UgaWYgKHByb3RvY29sLnRvTG93ZXJDYXNlKCkgPT0gXCJmdHBcIilcclxuXHRcdHBvcnQgPSAyMTtcclxuXHRlbHNlIGlmIChwcm90b2NvbC50b0xvd2VyQ2FzZSgpID09IFwiZnRwc1wiKVxyXG5cdFx0cG9ydCA9IDIxO1xyXG5cclxuXHRtYXRjaCA9IG5ldyBSZWdFeHAoXCIoL1teXFxcXD8jXSopXCIpLmV4ZWModGVtcFVybCk7XHJcblx0aWYgKG1hdGNoKVxyXG5cdFx0cGF0aCA9IG1hdGNoWzFdO1xyXG5cclxuXHRsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFteJlxcXFw/Iz1dKik9KFteJlxcXFw/Iz1dKilcIik7XHJcblx0aWYgKHR5cGVvZiBwYXJhbWV0ZXJTdHJpbmcgPT09IFwic3RyaW5nXCIgJiYgcGFyYW1ldGVyU3RyaW5nLnRyaW0oKS5sZW5ndGggIT0gMCkge1xyXG5cdFx0bGV0IHBhcmFtZXRlckVudHJpZXMgPSBwYXJhbWV0ZXJTdHJpbmcuc3BsaXQoXCImXCIpO1x0XHRcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVyRW50cmllcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgbWF0Y2ggPSByZWdleC5leGVjKHBhcmFtZXRlckVudHJpZXNbaV0pO1xyXG5cdFx0XHRsZXQgcE5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMV0pO1xyXG5cdFx0XHRsZXQgcFZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzJdKTtcclxuXHRcdFx0cGFyYW1ldGVyW3BOYW1lXSA/IHBhcmFtZXRlcltwTmFtZV0ucHVzaChwVmFsdWUpXHJcblx0XHRcdFx0XHQ6IHBhcmFtZXRlcltwTmFtZV0gPSBbIHBWYWx1ZSBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ldyBVUkwocHJvdG9jb2wsIGhvc3QsIHBvcnQsIHBhdGgsIHBhcmFtZXRlciwgbWFya2VyKTtcclxufTtcclxuXHJcblxyXG5sZXQgQ1VSUkVOVCA9IHVuZGVmaW5lZDsgXHJcblVSTC5nZXRDdXJyZW50VXJsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKCFDVVJSRU5UKVxyXG5cdFx0IENVUlJFTlQgPSBVUkwuZnJvbVN0cmluZyh3aW5kb3cuZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcblxyXG5cdHJldHVybiBDVVJSRU5UO1xyXG59O1xyXG5cclxuVVJMLmdldEN1cnJlbnQgPSBVUkwuZ2V0Q3VycmVudFVybDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVSTDtcclxuIiwiY29uc3QgVVVJRCA9IGZ1bmN0aW9uKCkge1x0XHJcblx0bGV0IHNwYWNlciA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IGFyZ3VtZW50c1swXSA6IFwiLVwiO1xyXG5cdGxldCB0ZW1wbGF0ZSA9ICd4eHh4eHh4eCcgKyBzcGFjZXIgKyAneHh4eCcgKyBzcGFjZXIgKyAnNHh4eCcgKyBzcGFjZXIgKyAneXh4eCcgKyBzcGFjZXIgKyAneHh4eHh4eHh4eHh4JztcdFxyXG5cdHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuXHRcdGxldCByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMFxyXG5cdFx0bGV0IHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcblx0XHRyZXR1cm4gdi50b1N0cmluZygxNik7XHJcblx0fSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVVSUQ7IiwiY29uc3QgYnVpbGRGdW5jdGlvbk5hbWUgPSBmdW5jdGlvbihhTmFtZSkge1xyXG5cdHJldHVybiBhTmFtZS5yZXBsYWNlKC9cXC4vZywgXCJfXCIpO1xyXG59O1xyXG5jb25zdCBjcmVhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uKGFOYW1lLCBhRnVuY3Rpb25OYW1lLCBhQ29uc3RydWN0b3IsIGFEYXRhKSB7XHRcclxuXHRyZXR1cm4gZnVuY3Rpb24oKXtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRlbHNlIGlmICh0aGlzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdGxldCByZXN1bHQgPSBbXTtcclxuXHRcdFx0dGhpcy5lYWNoKChmdW5jdGlvbihhRWxlbWVudCkge1xyXG5cdFx0XHRcdHRoaXMucHVzaChhRWxlbWVudFthRnVuY3Rpb25OYW1lXShhRGF0YSkpO1xyXG5cdFx0XHR9KS5iaW5kKHJlc3VsdCkpO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IGNvbXBvbmVudCA9IHRoaXMuZGF0YShhTmFtZSk7XHJcblx0XHRcdGlmICghY29tcG9uZW50KSB7XHJcblx0XHRcdFx0Y29tcG9uZW50ID0gbmV3IGFDb25zdHJ1Y3Rvcih0aGlzLCBhRGF0YSk7XHJcblx0XHRcdFx0dGhpcy5kYXRhKGFOYW1lLCBjb21wb25lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHJcblx0XHRcdHJldHVybiBjb21wb25lbnQ7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcbn07XHJcblxyXG5jb25zdCBDb21wb25lbnQgPSBmdW5jdGlvbihhTmFtZSwgYUNvbnN0cnVjdG9yKSB7XHJcblx0aWYodHlwZW9mICQgIT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0bGV0IGZ1bmN0aW9uTmFtZSA9IGJ1aWxkRnVuY3Rpb25OYW1lKGFOYW1lKTtcdFx0XHJcblx0XHQkLmZuW2Z1bmN0aW9uTmFtZV0gPSBjcmVhdGVJbnN0YW5jZShhTmFtZSwgZnVuY3Rpb25OYW1lLCBhQ29uc3RydWN0b3IpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IEV2ZW50QmluZCBmcm9tIFwiLi4vRXZlbnRCaW5kXCI7XHJcblxyXG5Db21wb25lbnQoXCJkZS50aXR1cy5jb3JlLkV2ZW50QmluZFwiLCBmdW5jdGlvbihhbkVsZW1lbnQsIGFDb250ZXh0KSB7XHRcclxuXHRyZXR1cm4gRXZlbnRCaW5kKGFuRWxlbWVudFswXSwgYUNvbnRleHQpO1x0XHJcbn0pO1xyXG4iLCJpZiAodHlwZW9mICQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0JC5mbi5TZWxlY3RvciA9IGZ1bmN0aW9uKCkge1x0XHRcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHR0aGlzLmVhY2goZnVuY3Rpb24oYUVsZW1lbnQpIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaCh0aGlzLnNlbGVjdG9yKCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXNbMF0uc2VsZWN0b3IoKTtcclxuXHR9OyIsImlmICh0eXBlb2YgJCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHQkLmZuLnRhZ05hbWUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHR0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2godGhpcy50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0gZWxzZSBpZih0aGlzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gJCh0aGlzKVswXS50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0fTtcclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IEV2ZW50QmluZCBmcm9tIFwiLi9FdmVudEJpbmRcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCBUYWduYW1lIGZyb20gXCIuL1RhZ25hbWVcIjtcclxuXHJcbmNvbnN0IGpxdWVyeSA9IHtcclxuXHRDb21wb25lbnQgOiBDb21wb25lbnQsXHJcblx0Q29tcG9uZW50cyA6IHtcclxuXHRcdGFzQ29tcG9uZW50IDogQ29tcG9uZW50XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQganF1ZXJ5OyIsImxldCBNYXRjaGVyID0gZnVuY3Rpb24gKGFSZWdFeHAsIGFUZXh0KSB7XHJcblx0XHJcblx0dGhpcy5pbnRlcm5hbFJlZ2V4ID0gYVJlZ0V4cDsgXHJcblx0dGhpcy5wcm9jZXNzaW5nVGV4dCA9IGFUZXh0O1xyXG5cdHRoaXMuY3VycmVudE1hdGNoID0gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuTWF0Y2hlci5wcm90b3R5cGUuaXNNYXRjaGluZyA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzLmludGVybmFsUmVnZXgudGVzdCh0aGlzLnByb2Nlc3NpbmdUZXh0KTtcclxufTtcclxuXHJcbk1hdGNoZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmN1cnJlbnRNYXRjaCA9IHRoaXMuaW50ZXJuYWxSZWdleC5leGVjKHRoaXMucHJvY2Vzc2luZ1RleHQpO1xyXG5cdGlmICh0aGlzLmN1cnJlbnRNYXRjaCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHR0aGlzLnByb2Nlc3NpbmdUZXh0ID0gdGhpcy5wcm9jZXNzaW5nVGV4dC5yZXBsYWNlKHRoaXMuY3VycmVudE1hdGNoWzBdLFx0XCJcIik7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuTWF0Y2hlci5wcm90b3R5cGUuZ2V0TWF0Y2ggPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodGhpcy5jdXJyZW50TWF0Y2ggaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRNYXRjaFswXTtcclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuTWF0Y2hlci5wcm90b3R5cGUuZ2V0R3JvdXAgPSBmdW5jdGlvbihhR3JvdXBJZCkge1xyXG5cdGlmICh0aGlzLmN1cnJlbnRNYXRjaCBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudE1hdGNoW2FHcm91cElkXTtcclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuTWF0Y2hlci5wcm90b3R5cGUucmVwbGFjZUFsbCA9IGZ1bmN0aW9uKGFSZXBsYWNlVmFsdWUsIGFUZXh0KSB7XHJcblx0aWYgKHRoaXMuY3VycmVudE1hdGNoIGluc3RhbmNlb2YgQXJyYXkpXHJcblx0XHRyZXR1cm4gYVRleHQucmVwbGFjZSh0aGlzLmN1cnJlbnRNYXRjaFswXSwgYVJlcGxhY2VWYWx1ZSk7XHJcblx0cmV0dXJuIGFUZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hlcjsiLCJpbXBvcnQgTWF0Y2hlciBmcm9tIFwiLi9NYXRjaGVyXCI7XHJcblxyXG5jb25zdCBSZWdleCA9IGZ1bmN0aW9uKGFSZWdleCwgYU9wdGlvbnMpIHtcclxuXHR0aGlzLmludGVybmFsUmVnZXggPSBuZXcgUmVnRXhwKGFSZWdleCwgYU9wdGlvbnMpO1xyXG59O1x0XHJcblJlZ2V4LnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGFUZXh0KSB7XHJcblx0cmV0dXJuIG5ldyBNYXRjaGVyKHRoaXMuaW50ZXJuYWxSZWdleCwgYVRleHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBSZWdleDsiLCJpbXBvcnQgUmVnZXggZnJvbSBcIi4vUmVnZXhcIjtcclxuaW1wb3J0IE1hdGNoZXIgZnJvbSBcIi4vTWF0Y2hlclwiO1xyXG5cclxuY29uc3QgcmVnZXggPSB7XHJcblx0UmVnZXggOiBSZWdleCxcclxuXHRNYXRjaGVyIDogTWF0Y2hlclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnZXg7IiwiY29uc3QgRXZhbFV0aWxzID0ge1xyXG5cdGV2YWwgOiBmdW5jdGlvbihhU3RhdGVtZW50LCBhQ29udGV4dCwgYURlZmF1bHQpe1xyXG5cdFx0aWYgKHR5cGVvZiBhU3RhdGVtZW50ICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRyZXR1cm4gYVN0YXRlbWVudDtcclxuXHRcdFxyXG5cdFx0bGV0IHN0YXRlbWVudCA9IGFTdGF0ZW1lbnQudHJpbSgpOyBcclxuXHRcdGlmKHN0YXRlbWVudC5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybiBhRGVmYXVsdDtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IChuZXcgRnVuY3Rpb24oXCJjXCIsXCJ0cnl7d2l0aChjKXtyZXR1cm4gXCIgKyBzdGF0ZW1lbnQgKyBcIjt9fWNhdGNoKGUpe3Rocm93IGU7fVwiKSkuY2FsbChudWxsLCBhQ29udGV4dCB8fCB7fSk7XHJcblx0XHRcdHJldHVybiByZXN1bHQgfHwgYURlZmF1bHRcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0dGhyb3cgZTtcclxuXHRcdH1cdFxyXG5cdH0sXHJcblx0cHJvbWlzZUV2YWwgOiBmdW5jdGlvbihhU3RhdGVtZW50LCBhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KXtcclxuXHRcdGxldCBhY3Rpb24gPSBmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gRXZhbFV0aWxzLmV2YWwoYVN0YXRlbWVudCwgYUNvbnRleHQsIGFEZWZhdWx0KTtcclxuXHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpXHJcblx0XHRcdFx0cmVqZWN0KHJlc3VsdCk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXNvbHZlKHJlc3VsdCk7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRpZihhVGltZW91dCA+IDApXHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbigpe3NldFRpbWVvdXQoYWN0aW9uLGFUaW1lb3V0KTt9KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGFjdGlvbik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZhbFV0aWxzOyIsImNvbnN0IGV4dGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0cmV0dXJuO1x0XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0cmV0dXJuIGFyZ3VtZW50c1swXTtcclxuXHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHRcclxuXHRsZXQgZGVlcCA9IHR5cGVvZiBhcmdzWzBdID09PSBcImJvb2xlYW5cIiA/IGFyZ3Muc2hpZnQoKSA6IGZhbHNlO1xyXG5cdGxldCB0YXJnZXQgPSBhcmdzLnNoaWZ0KCk7XHJcblx0d2hpbGUoYXJncy5sZW5ndGggIT0gMCl7XHJcblx0XHRsZXQgc291cmNlID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0aWYodHlwZW9mIHNvdXJjZSAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaCgoZnVuY3Rpb24oYVNvdXJjZSwgYVRhcmdldCwgaXNEZWVwLCBhTmFtZSl7XHJcblx0XHRcdFx0bGV0IHNvdXJjZSA9IGFTb3VyY2VbYU5hbWVdO1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBzb3VyY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlICE9IG51bGwpe1xyXG5cdFx0XHRcdFx0bGV0IHRhcmdldCA9IGFUYXJnZXRbYU5hbWVdO1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIHRhcmdldCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0YXJnZXQgPT0gbnVsbClcclxuXHRcdFx0XHRcdFx0YVRhcmdldFthTmFtZV0gPSBzb3VyY2U7XHJcblx0XHRcdFx0XHRlbHNlIGlmKGRlZXAgJiYgQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIEFycmF5LmlzQXJyYXkoc291cmNlKSlcclxuXHRcdFx0XHRcdFx0dmFsdWUuY29uY2F0KGFTb3VyY2VbYU5hbWVdKTtcclxuXHRcdFx0XHRcdGVsc2UgaWYoZGVlcCAmJiB0eXBlb2YgdGFyZ2V0ICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB0YXJnZXQgPT09IHR5cGVvZiBzb3VyY2UpXHJcblx0XHRcdFx0XHRcdGV4dGVuZCh0cnVlLCB0YXJnZXQsIHNvdXJjZSk7XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLmJpbmQobnVsbCwgc291cmNlLCB0YXJnZXQsIGRlZXApKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcbmNvbnN0IE9iamVjdFV0aWxzID0ge1xyXG5cdGV4dGVuZCA6IGV4dGVuZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0VXRpbHM7XHJcblxyXG5cclxuIiwiY29uc3QgUGFnaW5nVXRpbHMgPSB7XHJcblx0cGFnZXJEYXRhIDogZnVuY3Rpb24oYVBhZ2UsIGFQYWdlcywgYVNpemUpIHtcclxuXHRcdGxldCBoYWxmID0gTWF0aC5yb3VuZChhUGFnZXMgLyAyKTtcclxuXHRcdGxldCByZXN1bHQgPSB7XHJcblx0XHRcdGZpcnN0UGFnZSA6IDEsXHJcblx0XHRcdHN0YXJ0UGFnZSA6IDEsXHJcblx0XHRcdGVuZFBhZ2UgOiBhU2l6ZSxcclxuXHRcdFx0bGFzdFBhZ2UgOiBhUGFnZXMsXHJcblx0XHRcdGN1cnJlbnQgOiBhUGFnZSxcclxuXHRcdFx0cGFnZUNvdW50IDogYVBhZ2VzXHJcblx0XHR9O1xyXG5cdFx0aWYgKGFTaXplID4gYVBhZ2VzKVxyXG5cdFx0XHRyZXN1bHQuZW5kUGFnZSA9IGFQYWdlcztcclxuXHRcdGVsc2UgaWYgKGFQYWdlICsgaGFsZiA+IGFQYWdlcykge1xyXG5cdFx0XHRyZXN1bHQuZW5kUGFnZSA9IGFQYWdlcztcclxuXHRcdFx0cmVzdWx0LnN0YXJ0UGFnZSA9IChlbmQgLSBhU2l6ZSkgKyAxO1xyXG5cdFx0fSBlbHNlIGlmIChhUGFnZSAtIGhhbGYgPiAxKSB7XHJcblx0XHRcdHJlc3VsdC5lbmRQYWdlID0gKGFQYWdlICsgaGFsZik7XHJcblx0XHRcdHJlc3VsdC5zdGFydFBhZ2UgPSAoZW5kIC0gYVNpemUpICsgMTtcclxuXHRcdH1cclxuXHRcdHJlc3VsdC5jb3VudCA9IHJlc3VsdC5lbmRQYWdlIC0gcmVzdWx0LnN0YXJ0UGFnZTtcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fSxcclxuXHJcblx0cGFnZUFycmF5IDogZnVuY3Rpb24oYVBhZ2UsIGFTaXplLCBhQXJyYXkpIHtcclxuXHRcdHJldHVybiBhQXJyYXkuc2xpY2UoKGFQYWdlIC0gMSkgKiBhU2l6ZSwgYVNpemUpO1xyXG5cdH1cclxuXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luZ1V0aWxzO1xyXG4iLCJpbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSBcIi4vT2JqZWN0VXRpbHNcIjtcclxuXHJcbmNvbnN0IERFRkFVTFRTID0ge1xyXG5cdGZvcm1hdFRvSHRtbCA6IHtcclxuXHRcdFwidGFic2l6ZVwiIDogNCxcclxuXHRcdFwidGFiY2hhclwiIDogXCImbmJzcDtcIixcclxuXHRcdFwibmV3bGluZVRhZ1wiIDogXCI8YnIvPlwiXHJcblx0fSxcclxuXHJcblx0dHJpbVRleHRMZW5ndGggOiB7XHJcblx0XHRcInBvc3RmaXhcIiA6IFwiLi4uXCJcclxuXHR9XHJcbn07XHJcbmNvbnN0IFN0cmluZ1V0aWxzID0ge1xyXG5cdERFRkFVTFRTIDogREVGQVVMVFMsXHJcblx0dHJpbVRleHRMZW5ndGggOiBmdW5jdGlvbihhVGV4dCwgbWF4TGVuZ3RoLCB0aGVTZXR0aW5ncykge1xyXG5cdFx0aWYgKGFUZXh0ID09IHVuZGVmaW5lZCB8fCB0eXBlb2YgYVRleHQgIT09IFwic3RyaW5nXCIgfHwgYVRleHQgPT0gXCJcIilcclxuXHRcdFx0cmV0dXJuIGFUZXh0O1xyXG5cclxuXHRcdGxldCBzZXR0aW5ncyA9IE9iamVjdFV0aWxzLmV4dGVuZCh7fSwgdGhlU2V0dGluZ3MsIERFRkFVTFRTLnRyaW1UZXh0TGVuZ3RoKTtcclxuXHJcblx0XHRpZiAoYVRleHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XHJcblx0XHRcdGxldCBlbmQgPSBtYXhMZW5ndGggLSBzZXR0aW5ncy5wb3N0Zml4Lmxlbmd0aDtcclxuXHRcdFx0aWYgKChhVGV4dC5sZW5ndGggLSBlbmQpID4gMClcclxuXHRcdFx0XHRyZXR1cm4gYVRleHQuc3Vic3RyaW5nKDAsIGVuZCkudHJpbSgpICsgc2V0dGluZ3MucG9zdGZpeDtcclxuXHRcdH1cclxuXHRcdHJldHVybiBhVGV4dDtcclxuXHR9LFxyXG5cdGZvcm1hdFRvSHRtbCA6IGZ1bmN0aW9uKGFUZXh0LCB0aGVTZXR0aW5ncykge1xyXG5cdFx0aWYgKGFUZXh0ID09IHVuZGVmaW5lZCB8fCB0eXBlb2YgYVRleHQgIT09IFwic3RyaW5nXCIgfHwgYVRleHQgPT0gXCJcIilcclxuXHRcdFx0cmV0dXJuIGFUZXh0O1xyXG5cdFx0bGV0IHNldHRpbmdzID0gT2JqZWN0VXRpbHMuZXh0ZW5kKHt9LCB0aGVTZXR0aW5ncyAsREVGQVVMVFMuZm9ybWF0VG9IdG1sKTtcclxuXHRcdGxldCBsaW5lcyA9IGFUZXh0LnJlcGxhY2UoL1xcblxcci9nLCBcIlxcblwiKS5yZXBsYWNlKC9cXHIvZywgXCJcXG5cIikuc3BsaXQoXCJcXG5cIik7XHJcblx0XHRsZXQgdGV4dCA9IFwiXCI7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChpICE9IDApXHJcblx0XHRcdFx0dGV4dCA9IHRleHQgKyBzZXR0aW5ncy5uZXdsaW5lVGFnO1xyXG5cdFx0XHR0ZXh0ID0gdGV4dFx0KyBTdHJpbmdVdGlscy5wcmV2ZW50VGFicyhsaW5lc1tpXSwgc2V0dGluZ3MudGFic2l6ZSwgc2V0dGluZ3MudGFiY2hhcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGV4dDtcclxuXHR9LFxyXG5cdGdldFRhYlN0b3BNYXAgOiBmdW5jdGlvbih0YWJTaXplLCB0YWJTdHJpbmcpIHtcclxuXHRcdGxldCB0YWJzdG9wTWFwID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSB0YWJTaXplOyBpKyspIHtcclxuXHRcdFx0aWYgKGkgPT0gMClcclxuXHRcdFx0XHR0YWJzdG9wTWFwWzBdID0gXCJcIjtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRhYnN0b3BNYXBbaV0gPSB0YWJzdG9wTWFwW2kgLSAxXSArIHRhYlN0cmluZztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGFic3RvcE1hcDtcclxuXHR9LFxyXG5cdHByZXZlbnRUYWJzIDogZnVuY3Rpb24oYVRleHQsIHRoZVRhYlN0b3BzLCB0aGVUYWJTdG9wQ2hhcikge1xyXG5cdFx0bGV0IHRhYnN0b3BNYXAgPSBTdHJpbmdVdGlscy5nZXRUYWJTdG9wTWFwKHRoZVRhYlN0b3BzLCB0aGVUYWJTdG9wQ2hhcik7XHJcblx0XHRsZXQgdGFiU3RvcHMgPSB0aGVUYWJTdG9wcztcclxuXHRcdGxldCB0ZXh0ID0gXCJcIjtcclxuXHRcdGxldCB0YWJzID0gYVRleHQuc3BsaXQoXCJcXHRcIik7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKHRhYnNbaV0ubGVuZ3RoICE9IDAgJiYgaSAhPSAwKSB7XHJcblx0XHRcdFx0bGV0IHNpemUgPSB0ZXh0Lmxlbmd0aDtcclxuXHRcdFx0XHRsZXQgdGFiU2l6ZSA9IHNpemUgJSB0YWJTdG9wcztcclxuXHRcdFx0XHR0ZXh0ID0gdGV4dCArIHRhYnN0b3BNYXBbdGhlVGFiU3RvcHMgLSB0YWJTaXplXSArIHRhYnNbaV07XHJcblx0XHRcdH0gZWxzZSBpZiAodGFic1tpXS5sZW5ndGggPT0gMCAmJiBpICE9IDApXHJcblx0XHRcdFx0dGV4dCA9IHRleHQgKyB0YWJzdG9wTWFwW3RoZVRhYlN0b3BzXTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgdGFic1tpXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGV4dDtcclxuXHR9LFxyXG5cdGZvcm1hdCA6IGZ1bmN0aW9uKGFUZXh0LCBhcmdzKSB7XHJcblx0XHRsZXQgb2JqZWN0cyA9IGFyZ3VtZW50cztcclxuXHRcdHJldHVybiBhVGV4dC5yZXBsYWNlKC97LT9bMC05XSt9L2csIGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0bGV0IGluZGV4ID0gcGFyc2VJbnQoaXRlbS5zdWJzdHJpbmcoMSwgaXRlbS5sZW5ndGggLSAxKSkgKyAxO1xyXG5cdFx0XHRsZXQgcmVwbGFjZTtcclxuXHRcdFx0aWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IG9iamVjdHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0cmVwbGFjZSA9IG9iamVjdHNbaW5kZXhdO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgcmVwbGFjZSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHJlcGxhY2UgPSBKU09OLnN0cmluZ2lmeShyZXBsYWNlKTtcclxuXHRcdFx0fSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0XHRyZXBsYWNlID0gXCJ7XCI7XHJcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IC0yKSB7XHJcblx0XHRcdFx0cmVwbGFjZSA9IFwifVwiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBcIlwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXBsYWNlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdVdGlsczsiLCJpbXBvcnQgRXZhbFV0aWxzIGZyb20gXCIuL0V2YWxVdGlsc1wiO1xyXG5pbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSBcIi4vT2JqZWN0VXRpbHNcIjtcclxuaW1wb3J0IFBhZ2luZ1V0aWxzIGZyb20gXCIuL1BhZ2luZ1V0aWxzXCI7XHJcbmltcG9ydCBTdHJpbmdVdGlscyBmcm9tIFwiLi9TdHJpbmdVdGlsc1wiO1xyXG5cclxuXHJcbmNvbnN0IHV0aWxzID0ge1xyXG5cdFx0RXZhbFV0aWxzIDogRXZhbFV0aWxzLFxyXG5cdFx0T2JqZWN0VXRpbHMgOiBPYmplY3RVdGlscyxcclxuXHRcdFBhZ2luZ1V0aWxzIDogUGFnaW5nVXRpbHMsXHJcblx0XHRTdHJpbmdVdGlscyA6IFN0cmluZ1V0aWxzXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiXSwic291cmNlUm9vdCI6IiJ9