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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Utils */ "./node_modules/dom-api-extension/src/utils/Utils.js");


const de = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].globalVar("de", {});
de.titus = de.titus || {};
de.titus.dom = de.titus.dom || {};
de.titus.dom.api = de.titus.dom.api || {};
if(typeof de.titus.dom.api.extention === "undefined") {
	de.titus.dom.api.extention = {
		VERSION : "2.0.0-beta2",
		utils : {
			Utils: _utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
		}
	};

	const parser = new DOMParser();

	_utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.find = function() {
		return document.find.apply(document, arguments);
	};

	_utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.ready = function() {
		return document.ready.apply(document, arguments);
	};

	_utils_Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].global.create = function(aContent, aContentType) {
		if (typeof arguments[0] !== "string")
			throw new Error("The first argument must be a string!");

		let parsed = parser.parseFromString(arguments[0].trim(), arguments[1] || "text/html");
		let nodes = parsed.body.childNodes;
		let frag = document.createDocumentFragment();
		frag.append(nodes);
		return frag.childNodes;
	};
}

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/Document.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/Document.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/dom-api-extension/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./node_modules/dom-api-extension/src/dom/extentions/ReadyEventSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Document, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

document.addEventListener("DOMContentLoaded", function(){
	document.trigger("ready");
});





/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/DocumentFragment.js":
/*!********************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/DocumentFragment.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/dom-api-extension/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/dom-api-extension/src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(DocumentFragment, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);






/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/Element.js":
/*!***********************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/Element.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/dom-api-extension/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/AttributeSupport */ "./node_modules/dom-api-extension/src/dom/extentions/AttributeSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/dom-api-extension/src/dom/extentions/ManipulationSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Element,_extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
//
//Element.prototype.val = function() {
//	let result = new Map();		
//	let inputs = this.find("input", "select", "textarea");
//	if(inputs){	
//		inputs.forEach(function(node){
//			let value = node.val();
//			if(typeof value !== "undefined" && value != null)
//				result.set((node.name || node.id || node.selector()), node.val());
//		});	
//		return result;
//	}
//};

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/EventTarget.js":
/*!***************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/EventTarget.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/EventSupport */ "./node_modules/dom-api-extension/src/dom/extentions/EventSupport.js");



Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(EventTarget, _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/HTMLElement.js":
/*!***************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/HTMLElement.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./node_modules/dom-api-extension/src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./node_modules/dom-api-extension/src/dom/extentions/ShowHideSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

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




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLInputElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

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




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLSelectElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/HTMLTextAreaElement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/HTMLTextAreaElement.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/dom-api-extension/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Extender */ "./node_modules/dom-api-extension/src/utils/Extender.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(HTMLTextAreaElement,Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])("ValueSupport", function(Prototype) {	
	Prototype.val = function() {
		if(arguments.length == 0)
			return this.value;
		else
			this.value = arguments[0]
			
		return this;
	};	
}));

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




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Node,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

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




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(NodeList, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);

NodeList.prototype.applyTo = function(){
	let args = Array.from(arguments);
	let calling = args.shift();
	let isFunction = typeof calling === "function";
	let results = [];
	for(let i = 0; i < this.length; i++){
		let node = this[i];
		let	result;
		if(isFunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply(node, args);
		
		if(result)
			results.push(result);
	}
	
	return results;
};

NodeList.prototype.val = function() {
	if(arguments.length == 0){
		if(this.length > 0){
			let result = new Map();
			this.forEach(function(node){
				if(typeof node.val === "function"){
					let value = node.val();
					if(value)
						result.set((node.name || node.id || node.selector()), node.val());
				}
			});	
			return result;
		}
	}
	else
		NodeList.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));
};

NodeList.from = function(){
	let args = Array.from(arguments);
	let data = {};
	let counter = 0;
	
	while(args.length > 0){
		let arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof Node)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof NodeList || Array.isArray(arg)){
				for(let i = 0; i < arg.length; i++){
					if(arg[i] && arg[i] instanceof Node){
						data[counter++] = {value: arg[i], enumerable: true};
					}
				}
			}
		}
	}
	
	data.length = {value: counter};
	return  Object.create(NodeList.prototype, data);
};


Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function(aFunctionName, theArguments){
	let results = [];	
	this.forEach(function(node){
		if(node && typeof node[aFunctionName] === "function"){
			let result = node[aFunctionName].apply(node, theArguments);
			if(result){ 
				if(result instanceof NodeList)
					results = results.concat(Array.from(result));
				else
					results.push(result);
			}		
		}
	});
	
	if(results.length === 0)
		return undefined;
	else if(results[0] instanceof Node || results[0] instanceof NodeList)
		return NodeList.from.apply(null, results);
	else
		return results;
},NodeList.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/extentions/AttributeSupport.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/extentions/AttributeSupport.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/dom-api-extension/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("AttributeSupport", function(Prototype) {
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
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/dom-api-extension/src/utils/Extender.js");

const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("DataSupport", function(Prototype) {
	Prototype.data = function() {
		if (typeof this.__data__ === "undefined") {
			this.__data__ = {};
			if(typeof this.dataset !== "undefined")
				for (name in this.dataset)
					this.__data__[name] = this.dataset[name];
		}

		if (arguments.length == 0)
			return this.__data__;
		else if (arguments.length == 1)
			return this.__data__[arguments[0]] ;
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			delete this.__data__[arguments[0]];
		else
			this.__data__[arguments[0]] = arguments[1];
		
		return this;
	};
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/dom-api-extension/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("EventSupport", function(Prototype) {
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
			eventMap[event] = wrappedEventHandler;			
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
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/dom-api-extension/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("HtmlClassSupport", function(Prototype) {	
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
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/dom-api-extension/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ListSupport", function(Prototype) {		
	Prototype.indexOf = function() {
		for(let i = 0; i < this.length; i++)
			if(this[i] == arguments[0])
				return i;
		
		return -1;
	};

	Prototype.forEach = function(){
		return Array.prototype.forEach.apply(Array.from(this), arguments);
	};	

	Prototype.first = function(){
		if(this.length > 0)
			return this[0];
	};	
	
	Prototype.last = function(){
		if(this.length > 0)
			return this[this.length - 1];
	};
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/dom-api-extension/src/utils/Extender.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Utils */ "./node_modules/dom-api-extension/src/utils/Utils.js");



const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ManipulationSupport", function(Prototype) {	
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
				else if(content instanceof Node || content instanceof NodeList){
					this.empty();
					this.append(content);
				}
			}).bind(this));		
			
		return this;
	};
	
	Prototype.append = function(){
		let append = Prototype.appendChild.bind(this);
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(arg instanceof Node)
				this.appendChild(arg);
			else if(typeof arg === "string")
				create(arg).forEach(append);
			else if(Array.isArray(arg) || arg instanceof NodeList)
				arg.forEach(append);
		}
	};
	
	const prepend = function(aFirstElement, aElement){
		this.insertBefore(aElement, aFirstElement);
	};
	Prototype.prepend = function(){
		let first = this.childNodes.first();
		let insert = prepend.bind(this, first);
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(Array.isArray(arg) || arg instanceof NodeList)
				arg.forEach(insert);
			else if(arg instanceof Node)
				this.insertBefore(arg, first);
			else if(typeof arg === "string")
				arg.forEach(insert);
		}
	};	
});
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/dom/extentions/QuerySupport.js":
/*!***************************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/dom/extentions/QuerySupport.js ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/dom-api-extension/src/utils/Extender.js");


const parentSelector = /:parent(\(\"([^\)]*)\"\))?/i;
const queryExecuter = function(aElement, aSelector){
	let match = parentSelector.exec(aSelector);
	if(match){
		let result = aElement;
		if(match.index > 0){
			result = aElement.querySelectorAll(aSelector.substr(0, match.index));
			if(result.length == 0)
				return;
		}	
		result = result.parent(match[2]);			
		if(result){
			let nextSelector = aSelector.substr(match.index + match[0].length).trim();
			if(nextSelector.length > 0)
				result = result.find(nextSelector);
			
			return result;
		}		
	}
	else
		return aElement.querySelectorAll(aSelector);
};


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("QuerySupport",function(Prototype) {	
	Prototype.find = function() {
		let nodes = [];
		let args = Array.from(arguments);
		let arg = args.shift();
		while(arg){
			if(typeof arg === "string"){
				let result = queryExecuter(this, arg);
				if(result)
					nodes.push(result);
			}
			
			arg = args.shift();
		}
		
		let result = NodeList.from.apply(null, nodes);
		return result;
	};
	
	Prototype.is = function() {
		if(this instanceof Document)
			return false;		
		else if(arguments.length == 1){
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
		if(!this.parentNode)
			return undefined;		
		else if(typeof arguments[0] === "string"){
			let parent = this.parentNode;
			try{
				while(parent && !parent.is(arguments[0]))
					parent = parent.parent(arguments[0]);
			}catch (e) {
				console.error("this:", this, "parent:", parent, "error:", e);
			}
			return parent;
		}
		return this.parentNode;
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
		if(this instanceof Document)
			return undefined;
		else if(this.id)
			return "#" + this.id;
		else{			
			let selector = this.tagName.toLowerCase();
			let parent = this.parent();
			if(parent){
				let sameTagSiblings = parent.find(":scope>" + selector);			
				if (sameTagSiblings instanceof NodeList) {
					let index = sameTagSiblings.indexOf(this);
					if (index > 0)
						selector += ':nth-child(' + (index + 1) + ')';
				}		
				let parentSelector = parent.selector();
				return parentSelector ? parentSelector + ">" + selector : selector;
			} 
			return selector;
		}
	};	

	Prototype.closest = function(aQuery) {			
		let node = this;
		while(node){
			let closests = node.find(aQuery);
			if(closests && closests.length > 0)
				return closests;
			else if(node.is(aQuery))
				return NodeList.from(node);
			
			node = node.parent();		
		}
	};
	
	Prototype.nested = function(aQuery){
		if(this.is(aQuery))
			return NodeList.from(this);	
		
		let nested = this.find(aQuery);
		if(nested && nested.length > 0)
			return nested;
		else
			return NodeList.from(this.parent(aQuery));
	};
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/dom-api-extension/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ReadyEventSupport", function(Prototype) {
	Prototype.ready = function(aFunction, once){	
		this.on("ready", aFunction, once);
		if(document.readyState == "complete")			
			this.trigger("ready");
		
		return this;
	};
	
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/dom-api-extension/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ShowHideSupport", function(Prototype) {
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
	
});
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
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/dom-api-extension/src/utils/Extender.js");


const InputTypes =[
	{
		selector : "select",
		get : function(){
			let result = [];
			this.find("option").forEach(function(option){
				if(option.selected)
					result.push(option.value);
			});
			
			return result;
		},
		set : function(){				
			let values = [];
			let args = Array.from(arguments);
			let arg = args.shift();
			while(arg){
				if(Array.isArray(arg))
					values = values.concat(arg);
				else
					values.push(arg);
				
				arg = args.shift();
			}
			this.value = values;
			this.find("option").forEach(function(option){
				option.selected = values.indexOf(option.value) >= 0;
			});
			
			this.trigger("changed");
		}			
	},
	{
		selector : "input[type=\"checkbox\"], input[type=\"radio\"]",
		get : function(){
			if(this.value == "on" || this.value == "off")
				return this.checked;
			else if(this.checked)
				return this.value;				
		},
		set : function(aValue){
			if(typeof aValue === "boolean")
				this.checked = aValue;
			else if(typeof aValue === "string")
				this.checked = this.value == aValue;
			else if(Array.isArray(aValue))
				this.checked = aValue.indexOf(this.value) >= 0;
			
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


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("ValueSupport", function(Prototype) {	
	Prototype.val = function() {
		let type = getInputType(this);
		if(arguments.length == 0)
			return type.get.apply(this, arguments);
		else
			type.set.apply(this, arguments);
			
		return this;
	};	
});
/* harmony default export */ __webpack_exports__["a"] = (support);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-api-extension/src/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _dom_EventTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/EventTarget */ "./node_modules/dom-api-extension/src/dom/EventTarget.js");
/* harmony import */ var _dom_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Node */ "./node_modules/dom-api-extension/src/dom/Node.js");
/* harmony import */ var _dom_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/Element */ "./node_modules/dom-api-extension/src/dom/Element.js");
/* harmony import */ var _dom_Document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/Document */ "./node_modules/dom-api-extension/src/dom/Document.js");
/* harmony import */ var _dom_DocumentFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/DocumentFragment */ "./node_modules/dom-api-extension/src/dom/DocumentFragment.js");
/* harmony import */ var _dom_HTMLElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/HTMLElement */ "./node_modules/dom-api-extension/src/dom/HTMLElement.js");
/* harmony import */ var _dom_HTMLInputElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/HTMLInputElement */ "./node_modules/dom-api-extension/src/dom/HTMLInputElement.js");
/* harmony import */ var _dom_HTMLTextAreaElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/HTMLTextAreaElement */ "./node_modules/dom-api-extension/src/dom/HTMLTextAreaElement.js");
/* harmony import */ var _dom_HTMLSelectElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/HTMLSelectElement */ "./node_modules/dom-api-extension/src/dom/HTMLSelectElement.js");
/* harmony import */ var _dom_NodeList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/NodeList */ "./node_modules/dom-api-extension/src/dom/NodeList.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Global */ "./node_modules/dom-api-extension/src/Global.js");













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
	let type = args.shift();	
	while(args.length > 0){
		let extender = args.shift();
		extender(type);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (extendPrototype);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/utils/Extender.js":
/*!**************************************************************!*\
  !*** ./node_modules/dom-api-extension/src/utils/Extender.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/dom-api-extension/src/utils/Utils.js");


const EXTENSIONS_MAP = _Utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].globalVar("__DOM_API_EXTENSION_MAP__", {});
const Extender = function(aName, aExtention){
	return function(aType){	
		let extensions = EXTENSIONS_MAP[aType.name];
		if(!extensions)
			extensions = EXTENSIONS_MAP[aType.name] = {};		
		
		if(!extensions[aName]){
			extensions[aName] = true;
			aExtention(aType.prototype);
		}
		else
			console.warn("duplicated load of extension \"" + aName + "\"!");
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Extender);

/***/ }),

/***/ "./node_modules/dom-api-extension/src/utils/Utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/dom-api-extension/src/utils/Utils.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {const Utils = {
	global : (window || global || self || {}),
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof Utils.global[aName] === "undefined")
			Utils.global[aName] = aInitValue;
		
		return Utils.global[aName];		
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Utils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
/* unused harmony default export */ var _unused_webpack_default_export = (Converter);

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
			if (node.nodeType === Node.ELEMENT_NODE) {
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

ExpressionResolver.prototype.promise = function(aExpression, aContext, aDefault) {
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
				console.log(e);
			if (hasDefault)
				text = matcher.replaceAll(aDefault, text);
		}
	}
	return text;
};

ExpressionResolver.prototype.promiseText = function(aText, aContext, aDefault) {
	let action = (function(args, resolve){ 
		if(args.length === 2)
			resolve(this.text(args[0], args[1]));
		else
			resolve(this.text(args[0], args[1], args[2]));
	}).bind(this, arguments);
	
	return new Promise(function(resolve){
		window.requestAnimationFrame(function(){
			action(resolve);
		});
	});
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
/* unused harmony default export */ var _unused_webpack_default_export = (Namespace);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/Page.js":
/*!*********************!*\
  !*** ./src/Page.js ***!
  \*********************/
/*! exports provided: default */
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

/* unused harmony default export */ var _unused_webpack_default_export = (Page);

/***/ }),

/***/ "./src/ScreenObserver.js":
/*!*******************************!*\
  !*** ./src/ScreenObserver.js ***!
  \*******************************/
/*! exports provided: default */
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

/* unused harmony default export */ var _unused_webpack_default_export = (Observer);


/***/ }),

/***/ "./src/URL.js":
/*!********************!*\
  !*** ./src/URL.js ***!
  \********************/
/*! exports provided: default */
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

/* unused harmony default export */ var _unused_webpack_default_export = (URL);


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
/* harmony import */ var _URL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./URL */ "./src/URL.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page */ "./src/Page.js");
/* harmony import */ var _EventBind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventBind */ "./src/EventBind.js");
/* harmony import */ var _ScreenObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ScreenObserver */ "./src/ScreenObserver.js");
/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./regex */ "./src/regex/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony import */ var _jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jquery */ "./src/jquery/index.js");
//modules










// load packages




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

/* unused harmony default export */ var _unused_webpack_default_export = (jquery);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Regex */ "./src/regex/Regex.js");
/* harmony import */ var _Matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matcher */ "./src/regex/Matcher.js");



const regex = {
	Regex : _Regex__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
	Matcher : _Matcher__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
};

/* unused harmony default export */ var _unused_webpack_default_export = (regex);

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
	promiseEval : function(aStatement, aContext, aDefault){
		return new Promise(function(resolve, reject){
			window.requestAnimationFrame(function(){
				let result = EvalUtils.eval(aStatement, aContext, aDefault);
				if(result instanceof Error)
					reject(result);
				
				resolve(result);
			});
		});
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

/* unused harmony default export */ var _unused_webpack_default_export = (utils);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0RvY3VtZW50RnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9FdmVudFRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9IVE1MRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9IVE1MSW5wdXRFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0hUTUxTZWxlY3RFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvZG9tL0hUTUxUZXh0QXJlYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9Ob2RlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL0F0dHJpYnV0ZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL0V2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uL3NyYy9kb20vZXh0ZW50aW9ucy9SZWFkeUV2ZW50U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2RvbS9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvdXRpbHMvRGVsZWdhdGVyQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL3V0aWxzL0V4dGVuZFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFwaS1leHRlbnNpb24vc3JjL3V0aWxzL0V4dGVuZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvbi9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udmVydGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudEJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTmFtZXNwYWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9TY3JlZW5PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVVJMLmpzIiwid2VicGFjazovLy8uL3NyYy9VVUlELmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5L0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5L0V2ZW50QmluZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5L1NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcXVlcnkvVGFnbmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWdleC9NYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWdleC9SZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVnZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0V2YWxVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvT2JqZWN0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL1BhZ2luZ1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9TdHJpbmdVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBa0M7O0FBRWxDLFdBQVcsNERBQUssbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQSxVQUFVLDREQUFLO0FBQ2Y7QUFDQTs7QUFFQTs7QUFFQSxDQUFDLDREQUFLO0FBQ047QUFDQTs7QUFFQSxDQUFDLDREQUFLO0FBQ047QUFDQTs7QUFF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QUNBO0FBQ0EsSUFBSTtBQUNKLGdCQUFnQjtBQUNoQixJQUFJO0FBQ0osZ0JBQWdCO0FBQ2hCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNlLG9FQUFXLEU7Ozs7Ozs7Ozs7OztBQzFGMUI7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDSTtBQUNBO0FBQ0E7OztBQUd4QztBQUNBLGNBQWMsMERBQVM7QUFDdkIsZ0JBQWdCLDREQUFXO0FBQzNCLGdCQUFnQiw0REFBVztBQUMzQixnQkFBZ0IsNERBQVc7QUFDM0I7O0FBRWUsK0VBQUssRSIsImZpbGUiOiJkZS50aXR1cy5jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwiaW1wb3J0IFwiLi9zcmMvaW5kZXhcIjsiLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IGRlID0gVXRpbHMuZ2xvYmFsVmFyKFwiZGVcIiwge30pO1xyXG5kZS50aXR1cyA9IGRlLnRpdHVzIHx8IHt9O1xyXG5kZS50aXR1cy5kb20gPSBkZS50aXR1cy5kb20gfHwge307XHJcbmRlLnRpdHVzLmRvbS5hcGkgPSBkZS50aXR1cy5kb20uYXBpIHx8IHt9O1xyXG5pZih0eXBlb2YgZGUudGl0dXMuZG9tLmFwaS5leHRlbnRpb24gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRkZS50aXR1cy5kb20uYXBpLmV4dGVudGlvbiA9IHtcclxuXHRcdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHRcdHV0aWxzIDoge1xyXG5cdFx0XHRVdGlsczogVXRpbHNcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcblxyXG5cdFV0aWxzLmdsb2JhbC5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuZmluZC5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cclxuXHRVdGlscy5nbG9iYWwucmVhZHkgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5yZWFkeS5hcHBseShkb2N1bWVudCwgYXJndW1lbnRzKTtcclxuXHR9O1xyXG5cclxuXHRVdGlscy5nbG9iYWwuY3JlYXRlID0gZnVuY3Rpb24oYUNvbnRlbnQsIGFDb250ZW50VHlwZSkge1xyXG5cdFx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcclxuXHJcblx0XHRsZXQgcGFyc2VkID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhhcmd1bWVudHNbMF0udHJpbSgpLCBhcmd1bWVudHNbMV0gfHwgXCJ0ZXh0L2h0bWxcIik7XHJcblx0XHRsZXQgbm9kZXMgPSBwYXJzZWQuYm9keS5jaGlsZE5vZGVzO1xyXG5cdFx0bGV0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHRmcmFnLmFwcGVuZChub2Rlcyk7XHJcblx0XHRyZXR1cm4gZnJhZy5jaGlsZE5vZGVzO1xyXG5cdH07XHJcbn0iLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFF1ZXJ5U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1F1ZXJ5U3VwcG9ydFwiO1xyXG5pbXBvcnQgUmVhZHlFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9SZWFkeUV2ZW50U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKERvY3VtZW50LCBRdWVyeVN1cHBvcnQsIFJlYWR5RXZlbnRTdXBwb3J0KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcblx0ZG9jdW1lbnQudHJpZ2dlcihcInJlYWR5XCIpO1xyXG59KTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnRGcmFnbWVudCwgUXVlcnlTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTtcclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBBdHRyaWJ1dGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShFbGVtZW50LFF1ZXJ5U3VwcG9ydCwgQXR0cmlidXRlU3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7XHJcbi8vXHJcbi8vRWxlbWVudC5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcbi8vXHRsZXQgcmVzdWx0ID0gbmV3IE1hcCgpO1x0XHRcclxuLy9cdGxldCBpbnB1dHMgPSB0aGlzLmZpbmQoXCJpbnB1dFwiLCBcInNlbGVjdFwiLCBcInRleHRhcmVhXCIpO1xyXG4vL1x0aWYoaW5wdXRzKXtcdFxyXG4vL1x0XHRpbnB1dHMuZm9yRWFjaChmdW5jdGlvbihub2RlKXtcclxuLy9cdFx0XHRsZXQgdmFsdWUgPSBub2RlLnZhbCgpO1xyXG4vL1x0XHRcdGlmKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB2YWx1ZSAhPSBudWxsKVxyXG4vL1x0XHRcdFx0cmVzdWx0LnNldCgobm9kZS5uYW1lIHx8IG5vZGUuaWQgfHwgbm9kZS5zZWxlY3RvcigpKSwgbm9kZS52YWwoKSk7XHJcbi8vXHRcdH0pO1x0XHJcbi8vXHRcdHJldHVybiByZXN1bHQ7XHJcbi8vXHR9XHJcbi8vfTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcbmltcG9ydCBFdmVudFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnRcIjtcblxuZXh0ZW5kUHJvdG90eXBlKEV2ZW50VGFyZ2V0LCBFdmVudFN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgSHRtbENsYXNzU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnRcIjtcclxuaW1wb3J0IFNob3dIaWRlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1Nob3dIaWRlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MRWxlbWVudCwgSHRtbENsYXNzU3VwcG9ydCwgU2hvd0hpZGVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IFZhbHVlU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydFwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MSW5wdXRFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFNlbGVjdEVsZW1lbnQsVmFsdWVTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuXHJcbmV4dGVuZFByb3RvdHlwZShIVE1MVGV4dEFyZWFFbGVtZW50LEV4dGVuZGVyKFwiVmFsdWVTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFyZ3VtZW50c1swXVxyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSkpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGF0YVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlLERhdGFTdXBwb3J0LE1hbmlwdWxhdGlvblN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGVMaXN0LCBMaXN0U3VwcG9ydCk7XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uKCl7XHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IGNhbGxpbmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0bGV0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdGxldCByZXN1bHRzID0gW107XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspe1xyXG5cdFx0bGV0IG5vZGUgPSB0aGlzW2ldO1xyXG5cdFx0bGV0XHRyZXN1bHQ7XHJcblx0XHRpZihpc0Z1bmN0aW9uKVxyXG5cdFx0XHRyZXN1bHQgPSBjYWxsaW5nLmFwcGx5KFtub2RlXS5jb25jYXQoYXJncykpO1xyXG5cdFx0ZWxzZSBpZih0eXBlb2Ygbm9kZVtjYWxsaW5nXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRyZXN1bHQgPSBub2RlW2NhbGxpbmddLmFwcGx5KG5vZGUsIGFyZ3MpO1xyXG5cdFx0XHJcblx0XHRpZihyZXN1bHQpXHJcblx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gcmVzdWx0cztcclxufTtcclxuXHJcbk5vZGVMaXN0LnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApe1xyXG5cdFx0aWYodGhpcy5sZW5ndGggPiAwKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IG5ldyBNYXAoKTtcclxuXHRcdFx0dGhpcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0XHRcdGxldCB2YWx1ZSA9IG5vZGUudmFsKCk7XHJcblx0XHRcdFx0XHRpZih2YWx1ZSlcclxuXHRcdFx0XHRcdFx0cmVzdWx0LnNldCgobm9kZS5uYW1lIHx8IG5vZGUuaWQgfHwgbm9kZS5zZWxlY3RvcigpKSwgbm9kZS52YWwoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0XHROb2RlTGlzdC5wcm90b3R5cGUuYXBwbHlUby5hcHBseSh0aGlzLCBbXCJ2YWxcIl0uY29uY2F0KEFycmF5LmZyb20oYXJndW1lbnRzKSkpO1xyXG59O1xyXG5cclxuTm9kZUxpc3QuZnJvbSA9IGZ1bmN0aW9uKCl7XHJcblx0bGV0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0bGV0IGRhdGEgPSB7fTtcclxuXHRsZXQgY291bnRlciA9IDA7XHJcblx0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRpZih0eXBlb2YgYXJnICE9PSBcInVuZGVmaW5lZFwiICYmIGFyZyAhPSBudWxsKXtcclxuXHRcdFx0aWYoYXJnIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZywgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdGVsc2UgaWYoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShhcmcpKXtcclxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJnLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdGlmKGFyZ1tpXSAmJiBhcmdbaV0gaW5zdGFuY2VvZiBOb2RlKXtcclxuXHRcdFx0XHRcdFx0ZGF0YVtjb3VudGVyKytdID0ge3ZhbHVlOiBhcmdbaV0sIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRkYXRhLmxlbmd0aCA9IHt2YWx1ZTogY291bnRlcn07XHJcblx0cmV0dXJuICBPYmplY3QuY3JlYXRlKE5vZGVMaXN0LnByb3RvdHlwZSwgZGF0YSk7XHJcbn07XHJcblxyXG5cclxuRGVsZWdhdGVyQnVpbGRlcihmdW5jdGlvbihhRnVuY3Rpb25OYW1lLCB0aGVBcmd1bWVudHMpe1xyXG5cdGxldCByZXN1bHRzID0gW107XHRcclxuXHR0aGlzLmZvckVhY2goZnVuY3Rpb24obm9kZSl7XHJcblx0XHRpZihub2RlICYmIHR5cGVvZiBub2RlW2FGdW5jdGlvbk5hbWVdID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gbm9kZVthRnVuY3Rpb25OYW1lXS5hcHBseShub2RlLCB0aGVBcmd1bWVudHMpO1xyXG5cdFx0XHRpZihyZXN1bHQpeyBcclxuXHRcdFx0XHRpZihyZXN1bHQgaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdFx0XHRcdHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChBcnJheS5mcm9tKHJlc3VsdCkpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG5cdFx0XHR9XHRcdFxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdGlmKHJlc3VsdHMubGVuZ3RoID09PSAwKVxyXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRlbHNlIGlmKHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBOb2RlIHx8IHJlc3VsdHNbMF0gaW5zdGFuY2VvZiBOb2RlTGlzdClcclxuXHRcdHJldHVybiBOb2RlTGlzdC5mcm9tLmFwcGx5KG51bGwsIHJlc3VsdHMpO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiByZXN1bHRzO1xyXG59LE5vZGVMaXN0LnByb3RvdHlwZSwgTm9kZS5wcm90b3R5cGUsIEhUTUxFbGVtZW50LnByb3RvdHlwZSwgSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsIEVsZW1lbnQucHJvdG90eXBlLCBFdmVudFRhcmdldC5wcm90b3R5cGUpO1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJBdHRyaWJ1dGVTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdFByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGVzKCkgPyAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IHt9O1xyXG5cdFx0XHRcdHRoaXMuZ2V0QXR0cmlidXRlTmFtZXMoKS5mb3JFYWNoKChmdW5jdGlvbihyZXN1bHQsIG5hbWUpIHtcclxuXHRcdFx0XHRcdHJlc3VsdFtuYW1lXSA9IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpO1xyXG5cdFx0XHRcdH0pLmJpbmQodGhpcywgcmVzdWx0KSk7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSkuY2FsbCh0aGlzKSA6IHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRGF0YVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0UHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5fX2RhdGFfXyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHR0aGlzLl9fZGF0YV9fID0ge307XHJcblx0XHRcdGlmKHR5cGVvZiB0aGlzLmRhdGFzZXQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0Zm9yIChuYW1lIGluIHRoaXMuZGF0YXNldClcclxuXHRcdFx0XHRcdHRoaXMuX19kYXRhX19bbmFtZV0gPSB0aGlzLmRhdGFzZXRbbmFtZV07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19kYXRhX187XHJcblx0XHRlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiB0aGlzLl9fZGF0YV9fW2FyZ3VtZW50c1swXV0gO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhcmd1bWVudHNbMV0gPT0gbnVsbClcclxuXHRcdFx0ZGVsZXRlIHRoaXMuX19kYXRhX19bYXJndW1lbnRzWzBdXTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5fX2RhdGFfX1thcmd1bWVudHNbMF1dID0gYXJndW1lbnRzWzFdO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJFdmVudFN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0Y29uc3QgV3JhcHBlZEV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uKGFDb25maWcsIGFDYWxsYmFjayAsYUV2ZW50KXtcclxuXHRcdGlmKHR5cGVvZiBhQ29uZmlnLmZpbHRlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhYUV2ZW50LnRhcmdldC5pcyhhQ29uZmlnLmZpbHRlcikpXHRcdFxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRcclxuXHRcdGxldCBhcmdzID0gW2FFdmVudF07XHJcblx0XHRpZih0eXBlb2YgYUNvbmZpZy5kYXRhICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRhcmdzID0gYXJncy5jb25jYXQoYUNvbmZpZy5kYXRhKTtcclxuXHRcdFxyXG5cdFx0bGV0IHJlc3VsdCA9IGFDYWxsYmFjay5hcHBseShhQ2FsbGJhY2ssIGFyZ3MpO1xyXG5cdFx0aWYoYUNvbmZpZy5zaW5nbGVDYWxsKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoYUNhbGxiYWNrKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcdFx0XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRjb25zdCBhZGRFdmVudExpc3RlbmVyID0gUHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XHJcblx0UHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHJcblx0XHR0aGlzLm9uKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLm9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRvbyBsZXNzIGFyZ3VtZW50cyFcIik7XHJcblx0XHRcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5fX2NhbGxiYWNrTWFwID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHR0aGlzLl9fY2FsbGJhY2tNYXAgPSB7fTtcclxuXHJcblx0XHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGxldCBldmVudHMgPSBhcmdzLnNoaWZ0KCkuc3BsaXQoLyhcXHMrKXwoXFxzKixcXHMqKS8pO1xyXG5cdFx0bGV0IGhhbmRsZXJDb25maWcgPSB7XHJcblx0XHRcdGZpbHRlciA6ICh0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IGFyZ3Muc2hpZnQoKS5zcGxpdCgvXFxzKixcXHMqLykgOiB1bmRlZmluZWQpLFxyXG5cdFx0XHRkYXRhIDogKHR5cGVvZiBhcmdzWzBdICE9PSBcImZ1bmN0aW9uXCIgPyBhcmdzLnNoaWZ0KCkgOiB1bmRlZmluZWQpXHJcblx0XHR9O1xyXG5cdCAgICBsZXQgY2FsbGJhY2sgPSBhcmdzLnNoaWZ0KCk7XHJcblx0ICAgIFxyXG5cdCAgICBoYW5kbGVyQ29uZmlnLnNpbmdsZUNhbGwgPSAodHlwZW9mIGFyZ3NbMF0gIT09IFwiYm9vbGVhblwiID8gYXJncy5zaGlmdCgpIDogZmFsc2UpO1xyXG5cclxuXHRcdGxldCBldmVudE1hcCA9IHt9O1xyXG5cdFx0ZXZlbnRzLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgY29uZmlnLCBjYWxsYmFjaywgZXZlbnQpe1xyXG5cdFx0XHRsZXQgd3JhcHBlZEV2ZW50SGFuZGxlciA9IFdyYXBwZWRFdmVudEhhbmRsZXIuYmluZCh0aGlzLCBjb25maWcsIGNhbGxiYWNrKTtcclxuXHRcdFx0ZXZlbnRNYXBbZXZlbnRdID0gd3JhcHBlZEV2ZW50SGFuZGxlcjtcdFx0XHRcclxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50LCB3cmFwcGVkRXZlbnRIYW5kbGVyLCB0cnVlKTtcclxuXHRcdFx0XHJcblx0XHR9KS5iaW5kKHRoaXMsIGV2ZW50TWFwLCBoYW5kbGVyQ29uZmlnLCBjYWxsYmFjaykpO1xyXG5cdFx0XHJcblx0XHR0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdID0gZXZlbnRNYXA7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxuXHRcclxuXHRjb25zdCByZW1vdmVFdmVudExpc3RlbmVyID0gUHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XHJcblx0UHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBQcm90b3R5cGUucmVtb3ZlT24gPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDEgfHwgdHlwZW9mIHRoaXMuX19jYWxsYmFja01hcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0cmV0dXJuIHJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHJcblx0XHRsZXQgZXZlbnRzID0gdW5kZWZpbmVkO1xyXG5cdFx0bGV0IGNhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG5cdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0ZXZlbnRzID0gYXJndW1lbnRzWzBdLnNwbGl0KC8oXFxzKyl8KFxccyosXFxzKikvKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRjYWxsYmFjayA9IGFyZ3VtZW50c1swXS5zaGlmdCgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBhcmd1bWVudCEgLT4gY2FsbCBmdW5jdGlvbihbZXZlbnR8aGFuZGxlcl0pXCIpO1xyXG5cdFx0XHJcblx0XHRsZXQgcmVtb3ZhbEhhbmRsZXIgPSBbXTtcclxuXHRcdGlmKHR5cGVvZiBldmVudHMgPT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRldmVudE1hcCA9IHRoaXMuX19jYWxsYmFja01hcFtjYWxsYmFja107XHJcblx0XHRcdGlmKHR5cGVvZiBldmVudE1hcCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdFx0ZXZlbnRNYXAuZ2V0T3duUHJvcGVydHlOYW1lcygpLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgZXZlbnRNYXAsIGV2ZW50KXtcclxuXHRcdFx0XHRcdGxldCBoYW5kbGVyID0gZXZlbnRNYXBbZXZlbnRdO1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIGhhbmRsZXIgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGhhbmRsZXIpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9KS5iaW5kKHRoaXMsIHJlbW92YWxIYW5kbGVyLCBldmVudE1hcCkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9fY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0ZXZlbnRzLmZvckVhY2goKGZ1bmN0aW9uKHJlc3VsdCwgZXZlbnQpe1xyXG5cdFx0XHRcdE9iamVjdC5nZXRQcm9wZXJ0eU5hbWVzKHRoaXMuX19jYWxsYmFja01hcCkuZm9yRWFjaCgoZnVuY3Rpb24oYUV2ZW50LCBDYWxsYmFjayl7XHJcblx0XHRcdFx0XHRsZXQgZXZlbnRNYXAgPSB0aGlzLl9fY2FsbGJhY2tNYXBbQ2FsbGJhY2tdO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIGV2ZW50TWFwW2FFdmVudF07XHJcblx0XHRcdFx0XHRpZihldmVudE1hcC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCkgPT0gMClcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX19jYWxsYmFja01hcFtDYWxsYmFja107XHJcblx0XHRcdFx0fSkuYmluZCh0aGlzLCBldmVudCkpO1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdFxyXG5cdFByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBldmVudCA9IHVuZGVmaW5lZDtcclxuXHRcdGlmKHR5cGVvZiB0aGlzW1wib25cIiArIGFyZ3VtZW50c1swXV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuXHRcdFx0ZXZlbnQuaW5pdEV2ZW50KGFyZ3VtZW50c1swXSwgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGFyZ3VtZW50c1swXSwgIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgZGV0YWlsOiBhcmd1bWVudHNbMV0gfSk7XHJcblx0XHRcclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiSHRtbENsYXNzU3VwcG9ydFwiLCBmdW5jdGlvbihQcm90b3R5cGUpIHtcdFxyXG5cdFByb3RvdHlwZS5hZGRDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuYWRkQ2xhc3MoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0YXJndW1lbnRzWzBdLnNwbGl0KC9cXHMrLykuZm9yRWFjaCgoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGF6eik7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsKGZ1bmN0aW9uKGNsYXp6KXtcclxuXHRcdFx0XHR0aGlzLnJlbW92ZUNsYXNzKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKChmdW5jdGlvbihjbGF6eil7XHJcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKGNsYXp6KTtcclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywoZnVuY3Rpb24oY2xhenope1xyXG5cdFx0XHRcdHRoaXMudG9vZ2xlQ2xhc3MoY2xhenopO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiTGlzdFN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHRcdFxyXG5cdFByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0aWYodGhpc1tpXSA9PSBhcmd1bWVudHNbMF0pXHJcblx0XHRcdFx0cmV0dXJuIGk7XHJcblx0XHRcclxuXHRcdHJldHVybiAtMTtcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZvckVhY2guYXBwbHkoQXJyYXkuZnJvbSh0aGlzKSwgYXJndW1lbnRzKTtcclxuXHR9O1x0XHJcblxyXG5cdFByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiB0aGlzWzBdO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmxlbmd0aCA+IDApXHJcblx0XHRcdHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJNYW5pcHVsYXRpb25TdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHJcblx0UHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBub2RlcyA9IHRoaXMuY2hpbGROb2Rlc1xyXG5cdFx0d2hpbGUobm9kZXMubGVuZ3RoICE9IDApXHRcdFx0XHJcblx0XHRcdG5vZGVzWzBdLnJlbW92ZSh0cnVlKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuY29udGVudCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xyXG5cdH07XHRcclxuXHRcclxuXHRQcm90b3R5cGUuaHRtbCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHRcdFx0XHJcblx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRpZihhcmd1bWVudHNbMF0pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMub3V0ZXJIVE1MO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG5cdFx0ZWxzZSBcclxuXHRcdFx0QXJyYXkuZnJvbShhcmd1bWVudHMpLmZvckVhY2goKGZ1bmN0aW9uKGNvbnRlbnQpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0dGhpcy5pbm5lckhUTUwgPSBjb250ZW50O1xyXG5cdFx0XHRcdGVsc2UgaWYoY29udGVudCBpbnN0YW5jZW9mIE5vZGUgfHwgY29udGVudCBpbnN0YW5jZW9mIE5vZGVMaXN0KXtcclxuXHRcdFx0XHRcdHRoaXMuZW1wdHkoKTtcclxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGNvbnRlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkuYmluZCh0aGlzKSk7XHRcdFxyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgYXBwZW5kID0gUHJvdG90eXBlLmFwcGVuZENoaWxkLmJpbmQodGhpcyk7XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0aWYoYXJnIGluc3RhbmNlb2YgTm9kZSlcclxuXHRcdFx0XHR0aGlzLmFwcGVuZENoaWxkKGFyZyk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRjcmVhdGUoYXJnKS5mb3JFYWNoKGFwcGVuZCk7XHJcblx0XHRcdGVsc2UgaWYoQXJyYXkuaXNBcnJheShhcmcpIHx8IGFyZyBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG5cdFx0XHRcdGFyZy5mb3JFYWNoKGFwcGVuZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBwcmVwZW5kID0gZnVuY3Rpb24oYUZpcnN0RWxlbWVudCwgYUVsZW1lbnQpe1xyXG5cdFx0dGhpcy5pbnNlcnRCZWZvcmUoYUVsZW1lbnQsIGFGaXJzdEVsZW1lbnQpO1xyXG5cdH07XHJcblx0UHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IGZpcnN0ID0gdGhpcy5jaGlsZE5vZGVzLmZpcnN0KCk7XHJcblx0XHRsZXQgaW5zZXJ0ID0gcHJlcGVuZC5iaW5kKHRoaXMsIGZpcnN0KTtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRpZihBcnJheS5pc0FycmF5KGFyZykgfHwgYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0KTtcclxuXHRcdFx0ZWxzZSBpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdHRoaXMuaW5zZXJ0QmVmb3JlKGFyZywgZmlyc3QpO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0KTtcclxuXHRcdH1cclxuXHR9O1x0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHBhcmVudFNlbGVjdG9yID0gLzpwYXJlbnQoXFwoXFxcIihbXlxcKV0qKVxcXCJcXCkpPy9pO1xyXG5jb25zdCBxdWVyeUV4ZWN1dGVyID0gZnVuY3Rpb24oYUVsZW1lbnQsIGFTZWxlY3Rvcil7XHJcblx0bGV0IG1hdGNoID0gcGFyZW50U2VsZWN0b3IuZXhlYyhhU2VsZWN0b3IpO1xyXG5cdGlmKG1hdGNoKXtcclxuXHRcdGxldCByZXN1bHQgPSBhRWxlbWVudDtcclxuXHRcdGlmKG1hdGNoLmluZGV4ID4gMCl7XHJcblx0XHRcdHJlc3VsdCA9IGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yLnN1YnN0cigwLCBtYXRjaC5pbmRleCkpO1xyXG5cdFx0XHRpZihyZXN1bHQubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVx0XHJcblx0XHRyZXN1bHQgPSByZXN1bHQucGFyZW50KG1hdGNoWzJdKTtcdFx0XHRcclxuXHRcdGlmKHJlc3VsdCl7XHJcblx0XHRcdGxldCBuZXh0U2VsZWN0b3IgPSBhU2VsZWN0b3Iuc3Vic3RyKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKS50cmltKCk7XHJcblx0XHRcdGlmKG5leHRTZWxlY3Rvci5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5maW5kKG5leHRTZWxlY3Rvcik7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVx0XHRcclxuXHR9XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIGFFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYVNlbGVjdG9yKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJRdWVyeVN1cHBvcnRcIixmdW5jdGlvbihQcm90b3R5cGUpIHtcdFxyXG5cdFByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgbm9kZXMgPSBbXTtcclxuXHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdHdoaWxlKGFyZyl7XHJcblx0XHRcdGlmKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpe1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBxdWVyeUV4ZWN1dGVyKHRoaXMsIGFyZyk7XHJcblx0XHRcdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRcdFx0bm9kZXMucHVzaChyZXN1bHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCByZXN1bHQgPSBOb2RlTGlzdC5mcm9tLmFwcGx5KG51bGwsIG5vZGVzKTtcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuaXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1x0XHRcclxuXHRcdGVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKXtcclxuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tYXRjaGVzKGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXS5sZW5ndGggPT09IFwibnVtYmVyXCIpe1xyXG5cdFx0XHRcdGxldCBmaWx0ZXIgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGZpbHRlci5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRcdGlmKHRoaXMubWF0Y2hlcyhmaWx0ZXJbaV0pKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVx0XHRcdFx0XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pcyhBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKCF0aGlzLnBhcmVudE5vZGUpXHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHRcdFxyXG5cdFx0ZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdFx0dHJ5e1xyXG5cdFx0XHRcdHdoaWxlKHBhcmVudCAmJiAhcGFyZW50LmlzKGFyZ3VtZW50c1swXSkpXHJcblx0XHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50KGFyZ3VtZW50c1swXSk7XHJcblx0XHRcdH1jYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJ0aGlzOlwiLCB0aGlzLCBcInBhcmVudDpcIiwgcGFyZW50LCBcImVycm9yOlwiLCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24oKSB7XHRcdFxyXG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xyXG5cdFx0bGV0IHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHdoaWxlKHBhcmVudCl7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHBhcmVudCk7XHJcblx0XHRcdHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHQpO1xyXG5cdH07XHRcclxuXHJcblx0UHJvdG90eXBlLnNlbGVjdG9yID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudClcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYodGhpcy5pZClcclxuXHRcdFx0cmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcclxuXHRcdGVsc2V7XHRcdFx0XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcclxuXHRcdFx0aWYocGFyZW50KXtcclxuXHRcdFx0XHRsZXQgc2FtZVRhZ1NpYmxpbmdzID0gcGFyZW50LmZpbmQoXCI6c2NvcGU+XCIgKyBzZWxlY3Rvcik7XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNhbWVUYWdTaWJsaW5ncyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBzYW1lVGFnU2libGluZ3MuaW5kZXhPZih0aGlzKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApXHJcblx0XHRcdFx0XHRcdHNlbGVjdG9yICs9ICc6bnRoLWNoaWxkKCcgKyAoaW5kZXggKyAxKSArICcpJztcclxuXHRcdFx0XHR9XHRcdFxyXG5cdFx0XHRcdGxldCBwYXJlbnRTZWxlY3RvciA9IHBhcmVudC5zZWxlY3RvcigpO1xyXG5cdFx0XHRcdHJldHVybiBwYXJlbnRTZWxlY3RvciA/IHBhcmVudFNlbGVjdG9yICsgXCI+XCIgKyBzZWxlY3RvciA6IHNlbGVjdG9yO1xyXG5cdFx0XHR9IFxyXG5cdFx0XHRyZXR1cm4gc2VsZWN0b3I7XHJcblx0XHR9XHJcblx0fTtcdFxyXG5cclxuXHRQcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uKGFRdWVyeSkge1x0XHRcdFxyXG5cdFx0bGV0IG5vZGUgPSB0aGlzO1xyXG5cdFx0d2hpbGUobm9kZSl7XHJcblx0XHRcdGxldCBjbG9zZXN0cyA9IG5vZGUuZmluZChhUXVlcnkpO1xyXG5cdFx0XHRpZihjbG9zZXN0cyAmJiBjbG9zZXN0cy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHJldHVybiBjbG9zZXN0cztcclxuXHRcdFx0ZWxzZSBpZihub2RlLmlzKGFRdWVyeSkpXHJcblx0XHRcdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20obm9kZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQoKTtcdFx0XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUubmVzdGVkID0gZnVuY3Rpb24oYVF1ZXJ5KXtcclxuXHRcdGlmKHRoaXMuaXMoYVF1ZXJ5KSlcclxuXHRcdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20odGhpcyk7XHRcclxuXHRcdFxyXG5cdFx0bGV0IG5lc3RlZCA9IHRoaXMuZmluZChhUXVlcnkpO1xyXG5cdFx0aWYobmVzdGVkICYmIG5lc3RlZC5sZW5ndGggPiAwKVxyXG5cdFx0XHRyZXR1cm4gbmVzdGVkO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbSh0aGlzLnBhcmVudChhUXVlcnkpKTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDtcclxuXHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIlJlYWR5RXZlbnRTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1xyXG5cdFByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uKGFGdW5jdGlvbiwgb25jZSl7XHRcclxuXHRcdHRoaXMub24oXCJyZWFkeVwiLCBhRnVuY3Rpb24sIG9uY2UpO1xyXG5cdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcInJlYWR5XCIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJTaG93SGlkZVN1cHBvcnRcIiwgZnVuY3Rpb24oUHJvdG90eXBlKSB7XHJcblx0UHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5fX2lzaGlkZSl7XHJcblx0XHRcdHRoaXMuc3R5bGUuZGlzcGxheSA9IHRoaXMuX19kaXNwbGF5IHx8IFwiXCI7XHJcblx0XHRcdHRoaXMuX19pc2hpZGUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoIXRoaXMuX19pc2hpZGUpe1xyXG5cdFx0XHR0aGlzLl9fZGlzcGxheSA9IHRoaXMuc3R5bGUuZGlzcGxheTtcclxuXHRcdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdHRoaXMuX19pc2hpZGUgPSB0cnVlO1xyXG5cdFx0fVx0XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnRvZ2dsZVNob3cgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5fX2lzaGlkZSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdygpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5oaWRlKCk7XHJcblx0fTtcclxuXHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgSW5wdXRUeXBlcyA9W1xyXG5cdHtcclxuXHRcdHNlbGVjdG9yIDogXCJzZWxlY3RcIixcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGxldCByZXN1bHQgPSBbXTtcclxuXHRcdFx0dGhpcy5maW5kKFwib3B0aW9uXCIpLmZvckVhY2goZnVuY3Rpb24ob3B0aW9uKXtcclxuXHRcdFx0XHRpZihvcHRpb24uc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaChvcHRpb24udmFsdWUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oKXtcdFx0XHRcdFxyXG5cdFx0XHRsZXQgdmFsdWVzID0gW107XHJcblx0XHRcdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0XHRsZXQgYXJnID0gYXJncy5zaGlmdCgpO1xyXG5cdFx0XHR3aGlsZShhcmcpe1xyXG5cdFx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYXJnKSlcclxuXHRcdFx0XHRcdHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoYXJnKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR2YWx1ZXMucHVzaChhcmcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWVzO1xyXG5cdFx0XHR0aGlzLmZpbmQoXCJvcHRpb25cIikuZm9yRWFjaChmdW5jdGlvbihvcHRpb24pe1xyXG5cdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlcy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPj0gMDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0fVx0XHRcdFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0c2VsZWN0b3IgOiBcImlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl1cIixcclxuXHRcdGdldCA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmKHRoaXMudmFsdWUgPT0gXCJvblwiIHx8IHRoaXMudmFsdWUgPT0gXCJvZmZcIilcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jaGVja2VkO1xyXG5cdFx0XHRlbHNlIGlmKHRoaXMuY2hlY2tlZClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcdFx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKGFWYWx1ZSl7XHJcblx0XHRcdGlmKHR5cGVvZiBhVmFsdWUgPT09IFwiYm9vbGVhblwiKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYVZhbHVlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMudmFsdWUgPT0gYVZhbHVlO1xyXG5cdFx0XHRlbHNlIGlmKEFycmF5LmlzQXJyYXkoYVZhbHVlKSlcclxuXHRcdFx0XHR0aGlzLmNoZWNrZWQgPSBhVmFsdWUuaW5kZXhPZih0aGlzLnZhbHVlKSA+PSAwO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiY2hhbmdlZFwiKTtcclxuXHRcdH1cclxuXHR9XHJcbl07XHJcblxyXG5jb25zdCBEZWZhdWx0SW5wdXRUeXBlID0ge1xyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFWYWx1ZTtcclxuXHRcdFx0dGhpcy50cmlnZ2VyKFwiaW5wdXRcIik7XHJcblx0XHR9XHRcclxufTtcclxuXHJcbmNvbnN0IGdldElucHV0VHlwZSA9IGZ1bmN0aW9uKGFFbGVtZW50KXtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgSW5wdXRUeXBlcy5sZW5ndGg7IGkrKylcclxuXHRcdGlmKGFFbGVtZW50LmlzKElucHV0VHlwZXNbaV0uc2VsZWN0b3IpKVxyXG5cdFx0XHRyZXR1cm4gSW5wdXRUeXBlc1tpXTtcdFx0XHJcblx0cmV0dXJuIERlZmF1bHRJbnB1dFR5cGU7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiVmFsdWVTdXBwb3J0XCIsIGZ1bmN0aW9uKFByb3RvdHlwZSkge1x0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHR5cGUgPSBnZXRJbnB1dFR5cGUodGhpcyk7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0eXBlLmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0eXBlLnNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IFwiLi9kb20vRXZlbnRUYXJnZXRcIjtcclxuaW1wb3J0IFwiLi9kb20vTm9kZVwiO1xyXG5pbXBvcnQgXCIuL2RvbS9FbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0RvY3VtZW50RnJhZ21lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTElucHV0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MVGV4dEFyZWFFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxTZWxlY3RFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVMaXN0XCI7XHJcbmltcG9ydCBcIi4vR2xvYmFsXCI7XHJcbiIsImNvbnN0IERlbGVnYXRlckJ1aWxkZXIgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRsZXQgY2FsbGJhY2sgPSBhcmdzLnNoaWZ0KCk7XHJcblx0bGV0IHNvdXJjZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRhcmdzLmZvckVhY2goKGZ1bmN0aW9uKGFTb3VyY2UsIGFDYWxsYmFjaywgYVRhcmdldCl7XHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhVGFyZ2V0KS5mb3JFYWNoKFxyXG5cdFx0XHQoZnVuY3Rpb24oYVNvdXJjZSwgYVRhcmdldCxhQ2FsbGJhY2ssICBhTmFtZSkge1xyXG5cdFx0XHRcdGxldCBwcm9wID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhVGFyZ2V0LCBhTmFtZSk7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBhU291cmNlW2FOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgcHJvcC52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0YVNvdXJjZVthTmFtZV0gPSBmdW5jdGlvbigpe3JldHVybiBhQ2FsbGJhY2suY2FsbCh0aGlzLCBhTmFtZSwgYXJndW1lbnRzKTt9O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdH0pLmJpbmQobnVsbCwgYVNvdXJjZSwgYVRhcmdldCwgYUNhbGxiYWNrKSk7XHJcblx0fSkuYmluZChudWxsLCBzb3VyY2UsIGNhbGxiYWNrKSk7XHJcblx0XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERlbGVnYXRlckJ1aWxkZXI7IiwiY29uc3QgZXh0ZW5kUHJvdG90eXBlID0gZnVuY3Rpb24oKXtcclxuXHRsZXQgYXJncyA9IFx0QXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGxldCB0eXBlID0gYXJncy5zaGlmdCgpO1x0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGxldCBleHRlbmRlciA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGV4dGVuZGVyKHR5cGUpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4dGVuZFByb3RvdHlwZTsiLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbmNvbnN0IEVYVEVOU0lPTlNfTUFQID0gVXRpbHMuZ2xvYmFsVmFyKFwiX19ET01fQVBJX0VYVEVOU0lPTl9NQVBfX1wiLCB7fSk7XHJcbmNvbnN0IEV4dGVuZGVyID0gZnVuY3Rpb24oYU5hbWUsIGFFeHRlbnRpb24pe1xyXG5cdHJldHVybiBmdW5jdGlvbihhVHlwZSl7XHRcclxuXHRcdGxldCBleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbYVR5cGUubmFtZV07XHJcblx0XHRpZighZXh0ZW5zaW9ucylcclxuXHRcdFx0ZXh0ZW5zaW9ucyA9IEVYVEVOU0lPTlNfTUFQW2FUeXBlLm5hbWVdID0ge307XHRcdFxyXG5cdFx0XHJcblx0XHRpZighZXh0ZW5zaW9uc1thTmFtZV0pe1xyXG5cdFx0XHRleHRlbnNpb25zW2FOYW1lXSA9IHRydWU7XHJcblx0XHRcdGFFeHRlbnRpb24oYVR5cGUucHJvdG90eXBlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0Y29uc29sZS53YXJuKFwiZHVwbGljYXRlZCBsb2FkIG9mIGV4dGVuc2lvbiBcXFwiXCIgKyBhTmFtZSArIFwiXFxcIiFcIik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kZXI7IiwiY29uc3QgVXRpbHMgPSB7XHJcblx0Z2xvYmFsIDogKHdpbmRvdyB8fCBnbG9iYWwgfHwgc2VsZiB8fCB7fSksXHJcblx0Z2xvYmFsVmFyIDogZnVuY3Rpb24oYU5hbWUsIGFJbml0VmFsdWUpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgVXRpbHMuZ2xvYmFsW2FOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0VXRpbHMuZ2xvYmFsW2FOYW1lXSA9IGFJbml0VmFsdWU7XHJcblx0XHRcclxuXHRcdHJldHVybiBVdGlscy5nbG9iYWxbYU5hbWVdO1x0XHRcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVdGlsczsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJjb25zdCBDb252ZXJ0ZXIgPSB7XHJcblx0eG1sVG9Kc29uIDogZnVuY3Rpb24oYU5vZGUpIHtcclxuXHRcdC8vIENyZWF0ZSB0aGUgcmV0dXJuIG9iamVjdFxyXG5cdFx0bGV0IG9iaiA9IHt9O1xyXG5cdFx0aWYgKGFOb2RlLm5vZGVUeXBlID09IDEgfHwgYU5vZGUubm9kZVR5cGUgPT0gOSkgeyAvLyBlbGVtZW50XHJcblx0XHRcdC8vIGRvIGF0dHJpYnV0ZXNcclxuXHRcdFx0aWYgKGFOb2RlLmF0dHJpYnV0ZXMgIT0gdW5kZWZpbmVkICYmIGFOb2RlLmF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdGxldCBhdHRyaWJ1dGVzID0ge307XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhTm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRsZXQgYXR0cmlidXRlID0gYU5vZGUuYXR0cmlidXRlcy5pdGVtKGkpO1xyXG5cdFx0XHRcdFx0YXR0cmlidXRlc1thdHRyaWJ1dGUubm9kZU5hbWVdID0gYXR0cmlidXRlLm5vZGVWYWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0b2JqW1wiQGF0dHJpYnV0ZXNcIl0gPSBhdHRyaWJ1dGVzO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGFOb2RlLm5vZGVUeXBlID09IDMgfHwgYU5vZGUubm9kZVR5cGUgPT0gNCkgLy8gdGV4dFxyXG5cdFx0XHRyZXR1cm4gYU5vZGUudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cclxuXHRcdC8vIGRvIGNoaWxkcmVuXHJcblx0XHRpZiAoYU5vZGUuaGFzQ2hpbGROb2RlcygpKSB7XHJcblx0XHRcdGxldCB0ZXh0Q29udGVudCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0bGV0IGhhc0NoaWxkcmVuID0gZmFsc2U7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYU5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGxldCBpdGVtID0gYU5vZGUuY2hpbGROb2Rlcy5pdGVtKGkpO1xyXG5cdFx0XHRcdGlmIChpdGVtLm5vZGVUeXBlID09IDEpIHtcclxuXHRcdFx0XHRcdGhhc0NoaWxkcmVuID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGxldCBub2RlTmFtZSA9IGl0ZW0ubm9kZU5hbWU7XHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIG9ialtub2RlTmFtZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHRcdFx0b2JqW25vZGVOYW1lXSA9IENvbnZlcnRlci54bWxUb0pzb24oaXRlbSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIG9ialtub2RlTmFtZV0ucHVzaCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBvbGQgPSBvYmpbbm9kZU5hbWVdO1xyXG5cdFx0XHRcdFx0XHRcdG9ialtub2RlTmFtZV0gPSBbXTtcclxuXHRcdFx0XHRcdFx0XHRvYmpbbm9kZU5hbWVdLnB1c2gob2xkKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRvYmpbbm9kZU5hbWVdLnB1c2goQ29udmVydGVyLnhtbFRvSnNvbihpdGVtKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmICgoaXRlbS5ub2RlVHlwZSA9PSAzIHx8IGl0ZW0ubm9kZVR5cGUgPT0gNClcclxuXHRcdFx0XHRcdFx0JiYgaXRlbS50ZXh0Q29udGVudCAhPSBcIlwiKVxyXG5cdFx0XHRcdFx0dGV4dENvbnRlbnQgPSAodGV4dENvbnRlbnQgPyB0ZXh0Q29udGVudCArIGl0ZW0udGV4dENvbnRlbnRcclxuXHRcdFx0XHRcdFx0XHQ6IGl0ZW0udGV4dENvbnRlbnQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGV4dENvbnRlbnQpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIG9ialtcIkBhdHRyaWJ1dGVzXCJdID09PSBcInVuZGVmaW5lZFwiICYmICFoYXNDaGlsZHJlbilcclxuXHRcdFx0XHRcdG9iaiA9IHRleHRDb250ZW50LnRyaW0oKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRvYmoudGV4dCA9IHRleHRDb250ZW50LnRyaW0oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG9iajtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29udmVydGVyOyIsImltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy9kb20tYXBpLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgT2JqZWN0VXRpbHMgZnJvbSBcIi4vdXRpbHMvT2JqZWN0VXRpbHNcIjtcclxuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiLi9FeHByZXNzaW9uUmVzb2x2ZXJcIjtcclxuXHJcbmNvbnN0IGV4cHJlc3Npb25SZXNvbHZlciA9IEV4cHJlc3Npb25SZXNvbHZlci5ERUZBVUxUO1xyXG5cclxuY29uc3QgU1RBVEUgPSB7XHJcblx0RklOSVNIRUQgOiBcIiQkZXZlbnRCaW5kLkZJTklTSEVEJCRcIixcclxuXHRGQUlMX0RFVEFJTFMgOiBcIiQkZXZlbnRCaW5kLkZBSUxfREVUQUlMUyQkXCJcclxufTtcclxuY29uc3QgRklOSVNIRURTVEFURSA9IHtcclxuICAgIEZBSUwgOiBcImZhaWxcIixcclxuICAgIFJFQURZIDogXCJyZWFkeVwiXHJcbn07XHJcblxyXG5jb25zdCBFeGVjdXRlciA9IGZ1bmN0aW9uKGFuRXZlbnQpIHtcclxuXHRsZXQgZWxlbWVudCA9IGFuRXZlbnQuY3VycmVudFRhcmdldDtcclxuXHRsZXQgZGF0YSA9IGVsZW1lbnQuZGF0YShcImRlLnRpdHVzLmNvcmUuZXZlbnRCaW5kXCIpO1xyXG5cdGlmIChkYXRhLnByZXZlbnREZWZhdWx0KVxyXG5cdFx0YW5FdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGlmIChkYXRhLnN0b3BQcm9wYWdhdGlvbilcclxuXHRcdGFuRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGlmIChhcmdzLmxlbmd0aCA+PSAxICYmIHR5cGVvZiBhbkV2ZW50LmRhdGEgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRhcmdzLnNwbGljZSgxLCAwLCBhbkV2ZW50LmRhdGEpO1xyXG5cdFxyXG5cdGlmICh0eXBlb2YgZGF0YS5hY3Rpb24gPT09ICdzdHJpbmcnKSB7XHJcblx0XHRsZXQgYWN0aW9uID0gZXhwcmVzc2lvblJlc29sdmVyLnJlc29sdmVFeHByZXNzaW9uKGRhdGEuYWN0aW9uLCBhbkV2ZW50LmRhdGEsIHVuZGVmaW5lZCk7XHJcblx0XHRpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJmdW5jdGlvblwiKVx0XHRcdFxyXG5cdFx0XHRhY3Rpb24uYXBwbHkoYWN0aW9uLCBhcmdzKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRhdGEuZGVsZWdhdGlvbiA9PT0gJ3N0cmluZycpXHJcblx0XHRlbGVtZW50LnRyaWdnZXIoZGF0YS5kZWxlZ2F0aW9uLCBhcmdzKTtcclxuXHJcblx0cmV0dXJuIGRhdGEucHJldmVudERlZmF1bHQ7XHJcbn07XHJcblxyXG5cclxuY29uc3QgRXZlbnRCaW5kID0gZnVuY3Rpb24oYW5FbGVtZW50LCBhQ29udGV4dCkge1xyXG5cdGlmKHR5cGVvZiBhbkVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRyZXR1cm47XHJcblx0XHJcblx0aWYodHlwZW9mIGFuRWxlbWVudC5kYXRhKFwiZGUudGl0dXMuY29yZS5ldmVudEJpbmRcIikgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRyZXR1cm47XHJcblx0XHJcblx0aWYoYW5FbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRyZXR1cm4gYW5FbGVtZW50LmZvckVhY2goKGZ1bmN0aW9uKGFDb250ZXh0LCBhbkVsZW1lbnQpe1xyXG5cdFx0XHRFdmVudEJpbmQoYW5FbGVtZW50LCBhQ29udGV4dCk7XHJcblx0XHR9KS5iaW5kKG51bGwsIGFDb250ZXh0KSk7XHJcblx0XHJcblx0bGV0IGRhdGEgPSB7XHJcblx0ICAgIHByZXZlbnREZWZhdWx0IDogYW5FbGVtZW50LmF0dHIoXCJldmVudC1wcmV2ZW50LWRlZmF1bHRcIikgIT0gbnVsbCxcclxuXHQgICAgc3RvcFByb3BhZ2F0aW9uIDogYW5FbGVtZW50LmF0dHIoXCJldmVudC1zdG9wLXByb3BhZ2F0aW9uXCIpICE9IG51bGxcclxuXHR9O1xyXG5cdGFuRWxlbWVudC5kYXRhKFwiZGUudGl0dXMuY29yZS5ldmVudEJpbmRcIiwgZGF0YSk7XHJcblx0XHJcblx0ZGF0YS5ldmVudFR5cGUgPSBhbkVsZW1lbnQuYXR0cihcImV2ZW50LXR5cGVcIik7XHJcblx0aWYgKHR5cGVvZiBkYXRhLmV2ZW50VHlwZSAhPT0gXCJzdHJpbmdcIil7XHJcblx0XHRkYXRhLnN0YXRlID0gRklOSVNIRURTVEFURS5GQUlMO1xyXG5cdFx0ZGF0YS5kZXRhaWxzID0gXCJObyBldmVudCB0eXBlIGRlZmluZWQhXCI7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdFxyXG5cdGRhdGEuYWN0aW9uID0gYW5FbGVtZW50LmF0dHIoXCJldmVudC1hY3Rpb25cIik7XHJcblx0ZGF0YS5kZWxlZ2F0aW9uID0gYW5FbGVtZW50LmF0dHIoXCJldmVudC1kZWxlZ2F0aW9uXCIpO1xyXG5cclxuXHRpZiAodHlwZW9mIGRhdGEuYWN0aW9uICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBkYXRhLmRlbGVnYXRpb24gIT09IFwic3RyaW5nXCIpIHtcclxuXHRcdGRhdGEuc3RhdGUgPSBGSU5JU0hFRFNUQVRFLkZBSUw7XHJcblx0XHRkYXRhLmRldGFpbHMgPSBcIk5vIGFjdGlvbiBvciBkZWxlZ2F0aW9uIGRlZmluZWQhXCI7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRkYXRhLmV2ZW50RGF0YSA9IGFuRWxlbWVudC5hdHRyKFwiZXZlbnQtZGF0YVwiKTtcclxuXHRpZiAodHlwZW9mIGRhdGEuZXZlbnREYXRhID09PSBcInN0cmluZ1wiICYmIGRhdGEuZXZlbnREYXRhLmxlbmd0aCA+IDApXHJcblx0XHRkYXRhLmV2ZW50RGF0YSA9IGV4cHJlc3Npb25SZXNvbHZlci5yZXNvbHZlRXhwcmVzc2lvbihldmVudERhdGEsIGFDb250ZXh0LCB7fSk7XHJcblx0ZWxzZSBpZiAodHlwZW9mIGFDb250ZXh0ICE9PSAndW5kZWZpbmVkJylcclxuXHRcdGRhdGEuZXZlbnREYXRhID0gT2JqZWN0VXRpbHMuZXh0ZW5kKHt9LCBhQ29udGV4dCk7XHJcblx0XHJcblx0aWYgKGRhdGEuZXZlbnREYXRhKVxyXG5cdFx0YW5FbGVtZW50Lm9uKGRhdGEuZXZlbnRUeXBlLCBudWxsLCBkYXRhLmV2ZW50RGF0YSwgRXhlY3V0ZXIpO1xyXG5cdGVsc2VcclxuXHRcdGFuRWxlbWVudC5vbihkYXRhLmV2ZW50VHlwZSwgRXhlY3V0ZXIpO1xyXG5cdFxyXG5cdHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuY29uc3QgT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcclxuXHRtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtdXRhdGlvbikge1xyXG5cdFx0bXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcclxuXHRcdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XHJcblx0XHRcdFx0aWYobm9kZS5pcyhcIltldmVudC10eXBlXVwiKSkgXHJcblx0XHRcdFx0XHRFdmVudEJpbmQobm9kZSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0RXZlbnRCaW5kKG5vZGUuZmluZChcIltldmVudC10eXBlXVwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8vIHBhc3MgaW4gdGhlIHRhcmdldCBub2RlLCBhcyB3ZWxsIGFzIHRoZSBvYnNlcnZlciBvcHRpb25zXHJcbk9ic2VydmVyLm9ic2VydmUoZmluZChcImJvZHlcIikuZmlyc3QoKSwgIHtcclxuICAgIGF0dHJpYnV0ZXMgOiB0cnVlLFxyXG4gICAgY2hpbGRMaXN0IDogdHJ1ZSxcclxuICAgIHN1YnRyZWUgOiB0cnVlLFxyXG4gICAgY2hhcmFjdGVyRGF0YSA6IGZhbHNlXHJcbn0pO1xyXG5cclxucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0RXZlbnRCaW5kKGZpbmQoXCJbZXZlbnQtYXV0b3J1bl1cIikpO1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRCaW5kOyIsImltcG9ydCBSZWdleCBmcm9tIFwiLi9yZWdleC9SZWdleFwiO1xyXG5pbXBvcnQgRXZhbFV0aWxzIGZyb20gXCIuL3V0aWxzL0V2YWxVdGlsc1wiO1xyXG5cclxuY29uc3QgRVhQUkVTU0lPTl9SRUdFWCA9IFwiXFxcXCRcXFxceyhbXlxcXFx7XFxcXH1dKylcXFxcfVwiO1xyXG5cclxuXHJcbmNvbnN0IEV4cHJlc3Npb25SZXNvbHZlciA9IGZ1bmN0aW9uKHZhclJlZ2V4KSB7XHJcblx0dGhpcy5yZWdleCA9IG5ldyBSZWdleCh2YXJSZWdleFx0fHwgRVhQUkVTU0lPTl9SRUdFWCk7XHJcbn07XHJcblxyXG5FeHByZXNzaW9uUmVzb2x2ZXIucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbihhRXhwcmVzc2lvbiwgYUNvbnRleHQsIGFEZWZhdWx0KSB7XHJcblx0bGV0IGV4cHJlc3Npb24gPSBhRXhwcmVzc2lvbi50cmltKCk7XHJcblx0bGV0IG1hdGNoZXIgPSB0aGlzLnJlZ2V4LnBhcnNlKGV4cHJlc3Npb24pO1xyXG5cdGlmIChtYXRjaGVyLm5leHQoKSlcclxuXHRcdGV4cHJlc3Npb24gPSBtYXRjaGVyLmdldEdyb3VwKDEpLnRyaW0oKTtcclxuXHRcdFxyXG5cdHJldHVybiBFdmFsVXRpbHMuZXZhbChleHByZXNzaW9uLCBhQ29udGV4dCB8fCB7fSwgYURlZmF1bHQpO1xyXG59O1xyXG5cclxuRXhwcmVzc2lvblJlc29sdmVyLnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24oYUV4cHJlc3Npb24sIGFDb250ZXh0LCBhRGVmYXVsdCkge1xyXG5cdGxldCBleHByZXNzaW9uID0gYUV4cHJlc3Npb24udHJpbSgpO1xyXG5cdGxldCBtYXRjaGVyID0gdGhpcy5yZWdleC5wYXJzZShleHByZXNzaW9uKTtcclxuXHRpZiAobWF0Y2hlci5uZXh0KCkpXHJcblx0XHRleHByZXNzaW9uID0gbWF0Y2hlci5nZXRHcm91cCgxKS50cmltKCk7XHJcblx0XHRcclxuXHRyZXR1cm4gRXZhbFV0aWxzLnByb21pc2VFdmFsKGV4cHJlc3Npb24sIGFDb250ZXh0IHx8IHt9LCBhRGVmYXVsdCk7XHJcbn07XHJcblxyXG5FeHByZXNzaW9uUmVzb2x2ZXIucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbihhVGV4dCwgYUNvbnRleHQsIGFEZWZhdWx0KSB7XHJcblx0bGV0IGhhc0RlZmF1bHQgPSBhcmd1bWVudHMubGVuZ3RoID09PSAzO1xyXG5cdGxldCB0ZXh0ID0gYVRleHQ7XHJcblx0bGV0IG1hdGNoZXIgPSB0aGlzLnJlZ2V4LnBhcnNlKHRleHQpO1xyXG5cdHdoaWxlIChtYXRjaGVyLm5leHQoKSkge1xyXG5cdFx0dHJ5e1xyXG5cdFx0XHRsZXQgZXhwcmVzc2lvbiA9IG1hdGNoZXIuZ2V0TWF0Y2goKTtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IEV2YWxVdGlscy5ldmFsKG1hdGNoZXIuZ2V0R3JvdXAoMSkudHJpbSgpLCBhQ29udGV4dCwgYURlZmF1bHQpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIiB8fCBoYXNEZWZhdWx0KVxyXG5cdFx0XHRcdHRleHQgPSBtYXRjaGVyLnJlcGxhY2VBbGwocmVzdWx0LCB0ZXh0KTtcclxuXHRcdH1jYXRjaChlKXtcclxuXHRcdFx0aWYoY29uc29sZSAmJiBjb25zb2xlLmxvZylcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0aWYgKGhhc0RlZmF1bHQpXHJcblx0XHRcdFx0dGV4dCA9IG1hdGNoZXIucmVwbGFjZUFsbChhRGVmYXVsdCwgdGV4dCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB0ZXh0O1xyXG59O1xyXG5cclxuRXhwcmVzc2lvblJlc29sdmVyLnByb3RvdHlwZS5wcm9taXNlVGV4dCA9IGZ1bmN0aW9uKGFUZXh0LCBhQ29udGV4dCwgYURlZmF1bHQpIHtcclxuXHRsZXQgYWN0aW9uID0gKGZ1bmN0aW9uKGFyZ3MsIHJlc29sdmUpeyBcclxuXHRcdGlmKGFyZ3MubGVuZ3RoID09PSAyKVxyXG5cdFx0XHRyZXNvbHZlKHRoaXMudGV4dChhcmdzWzBdLCBhcmdzWzFdKSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJlc29sdmUodGhpcy50ZXh0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pKTtcclxuXHR9KS5iaW5kKHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpe1xyXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe1xyXG5cdFx0XHRhY3Rpb24ocmVzb2x2ZSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufTtcclxuXHJcblxyXG5FeHByZXNzaW9uUmVzb2x2ZXIucHJvdG90eXBlLnJlc29sdmVUZXh0ID0gRXhwcmVzc2lvblJlc29sdmVyLnByb3RvdHlwZS50ZXh0O1xyXG5FeHByZXNzaW9uUmVzb2x2ZXIucHJvdG90eXBlLnJlc29sdmVFeHByZXNzaW9uID0gRXhwcmVzc2lvblJlc29sdmVyLnByb3RvdHlwZS5yZXNvbHZlOyBcclxuRXhwcmVzc2lvblJlc29sdmVyLkRFRkFVTFQgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHByZXNzaW9uUmVzb2x2ZXI7XHJcbiIsImNvbnN0IGJ1aWxkID0gZnVuY3Rpb24oR29iYWwsIGFOYW1lcywgYUNhbGxiYWNrKSB7XG5cdGxldCBuYW1lID0gYU5hbWVzLnNoaWZ0KCk7XG5cdGlmICh0eXBlb2YgR29iYWxbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0R29iYWxbbmFtZV0gPSB7fTtcblxuXHRpZiAoYU5hbWVzLmxlbmd0aCA9PSAwKVxuXHRcdEdvYmFsW25hbWVdID0gYUNhbGxiYWNrKCkgfHwgR29iYWxbbmFtZV07XG5cdGVsc2Vcblx0XHRidWlsZChHb2JhbFtuYW1lXSwgYU5hbWVzLCBhQ2FsbGJhY2spO1xufTtcblxuY29uc3QgTmFtZXNwYWNlID0gZnVuY3Rpb24oYU5hbWVzcGFjZSwgYUZ1bmN0aW9uKSB7XG5cdGJ1aWxkKCAod2luZG93IHx8IGdsb2JhbCB8fCB7fSksIGFOYW1lc3BhY2Uuc3BsaXQoXCIuXCIpLCBhRnVuY3Rpb24pO1xufTtcblxuTmFtZXNwYWNlLmNyZWF0ZSA9IE5hbWVzcGFjZTsgXG5leHBvcnQgZGVmYXVsdCBOYW1lc3BhY2U7XG4iLCJsZXQgUGFnZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuYmFzZVRhZ1ZhbHVlID0gdW5kZWZpbmVkO1xyXG5cdGxldCBiYXNlVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VbaHJlZl1cIik7XHJcblx0aWYgKHR5cGVvZiBiYXNlVGFnICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0dGhpcy5iYXNlVGFnVmFsdWUgPSBiYXNlVGFnLmF0dHJpYnV0ZXNbXCJocmVmXCJdLnZhbHVlO1xyXG5cdFx0dGhpcy5maWxlcyA9IHt9O1xyXG5cdFx0dGhpcy5kYXRhID0ge307XHJcbn07XHJcblx0XHJcblBhZ2UucHJvdG90eXBlLmFkZEpzRmlsZSA9IGZ1bmN0aW9uKGFVcmwsIGFGdW5jdGlvbiwgZm9yY2VGdW5jdGlvbikge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGFVcmwpKVxyXG5cdFx0cmV0dXJuIHRoaXMuYWRkSnNGaWxlcyhhVXJsLCBhRnVuY3Rpb24sIGZvcmNlRnVuY3Rpb24pO1xyXG5cdFxyXG5cdGlmICh0eXBlb2YgdGhpcy5maWxlc1thVXJsXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0dGhpcy5maWxlc1thVXJsXSA9IHRydWU7XHJcblx0XHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2phdmFzY3JpcHRcIik7XHJcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLCBhVXJsKTtcclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsZW1lbnQpO1xyXG5cdFxyXG5cdFx0aWYgKHR5cGVvZiBhRnVuY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGFGdW5jdGlvbigpO1xyXG5cdH1cclxuXHRlbHNlIGlmIChmb3JjZUZ1bmN0aW9uICYmIHR5cGVvZiBhRnVuY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdGFGdW5jdGlvbigpO1xyXG5cdH1cclxufTtcclxuXHJcblBhZ2UucHJvdG90eXBlLmFkZEpzRmlsZXMgPSBmdW5jdGlvbihhVXJscywgYUZ1bmN0aW9uLCBmb3JjZUZ1bmN0aW9uKSB7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoYVVybHMpKSB7XHJcblx0XHR3aGlsZShhVXJscy5sZW5ndGggIT0gMCl7XHJcblx0XHRcdHRoaXMuYWRkSnNGaWxlKGFVcmxzLnNoaWZ0KCksIChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLmFkZEpzRmlsZXMoYVVybHMsIGFGdW5jdGlvbiwgZm9yY2VGdW5jdGlvbilcclxuXHRcdFx0fSkuYmluZCh0aGlzKSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0fSBlbHNlXHJcblx0XHR0aGlzLmFkZEpzRmlsZShhVXJscywgYUZ1bmN0aW9uLCBmb3JjZUZ1bmN0aW9uKTtcclxufTtcclxuXHJcblBhZ2UucHJvdG90eXBlLmFkZENzc0ZpbGUgPSBmdW5jdGlvbihhVXJsKSB7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoYVVybCkpIHtcclxuXHRcdHRoaXMuYWRkQ3NzRmlsZXMoYVVybCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAodGhpcy5maWxlc1thVXJsXSA9PSB1bmRlZmluZWQpIHtcclxuXHRcdHRoaXMuZmlsZXNbYVVybF0gPSB0cnVlO1xyXG5cdFx0bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcclxuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xyXG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGFVcmwpO1xyXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQoZWxlbWVudCk7XHJcblx0fVxyXG59O1xyXG5cclxuUGFnZS5wcm90b3R5cGUuYWRkQ3NzRmlsZXMgPSBmdW5jdGlvbihhVXJscykge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGFVcmxzKSkge1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IGFVcmxzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoaXMuYWRkQ3NzRmlsZShhVXJsc1tpXSk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuUGFnZS5wcm90b3R5cGUuZ2V0VXJsID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRlLnRpdHVzLmNvcmUuVVJMLmdldEN1cnJlbnRVcmwoKTtcclxufTtcclxuXHJcblBhZ2UucHJvdG90eXBlLmJ1aWxkVXJsID0gZnVuY3Rpb24oYVVybCkge1xyXG5cdGxldCBicm93c2VyID0gdGhpcy5kZXRlY3RCcm93c2VyKCk7XHJcblx0aWYgKGJyb3dzZXIuaWUgJiYgYnJvd3Nlci5pZSA8IDExKSB7XHJcblx0XHRsZXQgdGVtcFVybCA9IGFVcmwudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuYmFzZVRhZ1ZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmICF0ZW1wVXJsLmluZGV4T2YoXCJodHRwOlwiKSA9PSAwXHJcblx0XHRcdFx0JiYgIXRlbXBVcmwuaW5kZXhPZihcImh0dHBzOlwiKSA9PSAwXHJcblx0XHRcdFx0JiYgIXRlbXBVcmwuaW5kZXhPZihcImZ0cDpcIikgPT0gMFxyXG5cdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJmdHBzOlwiKSA9PSAwXHJcblx0XHRcdFx0JiYgIXRlbXBVcmwuaW5kZXhPZihcIm1haWx0bzpcIikgPT0gMFxyXG5cdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCJub3RlczpcIikgPT0gMFxyXG5cdFx0XHRcdCYmICF0ZW1wVXJsLmluZGV4T2YoXCIvXCIpID09IDApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYmFzZVRhZ1ZhbHVlICsgYVVybDtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGFVcmw7XHJcbn07XHJcblxyXG5QYWdlLnByb3RvdHlwZS5kZXRlY3RCcm93c2VyID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKFBhZ2UuQlJPV1NFUilcclxuXHRcdHJldHVybiBQYWdlLkJST1dTRVI7XHJcblxyXG5cdFBhZ2UuQlJPV1NFUiA9IHt9O1xyXG5cdGlmIChkb2N1bWVudC5kb2N1bWVudE1vZGUpXHJcblx0XHRQYWdlLkJST1dTRVIuaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XHJcblx0ZWxzZVxyXG5cdFx0UGFnZS5CUk9XU0VSLm90aGVyID0gdHJ1ZTtcclxuXHJcblx0cmV0dXJuIFBhZ2UuQlJPV1NFUjtcclxufTtcclxuXHJcblBhZ2UucHJvdG90eXBlLnNldERhdGEgPSBmdW5jdGlvbihhS2V5LCBhVmFsdWUpIHtcclxuXHR0aGlzLmRhdGFbYUtleV0gPSBhVmFsdWU7XHJcbn07XHJcblxyXG5QYWdlLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24oYUtleSkge1xyXG5cdHJldHVybiB0aGlzLmRhdGFbYUtleV07XHJcbn07XHJcblxyXG5QYWdlLmdldEluc3RhbmNlID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKHR5cGVvZiBJTlNUQU5DRSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0UGFnZS5JTlNUQU5DRSA9IG5ldyBQYWdlKCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gUGFnZS5JTlNUQU5DRTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7IiwiaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2RvbS1hcGktZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIi4vRXhwcmVzc2lvblJlc29sdmVyXCI7XHJcbmltcG9ydCBVVUlEIGZyb20gXCIuL1VVSURcIjtcclxuXHJcbmNvbnN0IFJFU09MVkVSID0gRXhwcmVzc2lvblJlc29sdmVyLkRFRkFVTFQ7XHJcbmxldCBUSU1FT1VUSUQgPSB1bmRlZmluZWQ7XHJcblxyXG5jb25zdCBjYWxsSGFuZGxlciA9IGZ1bmN0aW9uKGFIYW5kbGVyLCBhU2NyZWVuKSB7XHJcbiAgICBzZXRUaW1lb3V0KChmdW5jdGlvbihhSGFuZGxlciwgYVNjcmVlbikge1xyXG5cdCAgICBsZXQgcmVzdWx0ID0gUkVTT0xWRVIucmVzb2x2ZUV4cHJlc3Npb24oYUhhbmRsZXIuY29uZGl0aW9uLCBhU2NyZWVuLCBmYWxzZSk7XHJcblx0ICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnYm9vbGVhbicpXHJcblx0XHQgICAgcmV0dXJuIE9ic2VydmVyLmhhbmRsZXJbYUhhbmRsZXIuaWRdID09IHVuZGVmaW5lZDtcclxuXHJcblx0ICAgIGlmIChyZXN1bHQpIHtcclxuXHRcdCAgICBhSGFuZGxlci5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0ICAgIGFIYW5kbGVyLmFjdGl2YXRlLmNhbGwoYVNjcmVlbik7XHJcblx0XHQgICAgaWYgKHR5cGVvZiBhSGFuZGxlci5kZWFjdGl2YXRlICE9PSAnZnVuY3Rpb24nKVxyXG5cdFx0ICAgIFx0T2JzZXJ2ZXIuaGFuZGxlclthSGFuZGxlci5pZF0gPT0gdW5kZWZpbmVkO1xyXG5cdCAgICB9IGVsc2UgaWYgKGFIYW5kbGVyLmFjdGl2ZSAmJiB0eXBlb2YgYUhhbmRsZXIuZGVhY3RpdmF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0ICAgIGFIYW5kbGVyLmRlYWN0aXZhdGUuY2FsbChhU2NyZWVuKTtcclxuXHRcdCAgICBhSGFuZGxlci5hY3RpdmUgPSBmYWxzZTtcclxuXHQgICAgfVxyXG5cclxuICAgIH0pLmJpbmQobnVsbCwgYUhhbmRsZXIsIGFTY3JlZW4pLCA2Nik7XHJcbn07XHJcblxyXG5jb25zdCBPYnNlcnZlciA9IHtcclxuICAgIGhhbmRsZXIgOiB7fSxcclxuICAgIGFkZEhhbmRsZXIgOiBmdW5jdGlvbihhSGFuZGxlcikge1xyXG5cdCAgICBpZiAodHlwZW9mIGFIYW5kbGVyLmNvbmRpdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgYUhhbmRsZXIuY29uZGl0aW9uLmxlbmd0aCAhPSAwKSB7XHJcblx0XHQgICAgYUhhbmRsZXIuaWQgPSBVVUlEKFwiLVwiKTtcclxuXHRcdCAgICBPYnNlcnZlci5oYW5kbGVyW2FIYW5kbGVyLmlkXSA9IGFIYW5kbGVyO1xyXG5cdFx0ICAgIGNhbGxIYW5kbGVyKGFIYW5kbGVyLCBPYnNlcnZlci5zY3JlZW5EYXRhKCksIHRoaXMpO1xyXG5cdFx0ICAgIHJldHVybiBhSGFuZGxlcjtcclxuXHQgICAgfVxyXG4gICAgfSxcclxuICAgIHNjcmVlbkRhdGEgOiBmdW5jdGlvbigpIHtcclxuXHQgICAgcmV0dXJuIHtcclxuXHQgICAgICAgIHdpZHRoIDogd2luZG93LmlubmVyV2lkdGgsXHJcblx0ICAgICAgICBoZWlnaHQgOiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcblx0ICAgICAgICBwaXhlbFJhdGlvIDogd2luZG93LmRldmljZVBpeGVsUmF0aW8sXHJcblx0ICAgICAgICBsYW5kc2NhcGUgOiAod2luZG93LmlubmVySGVpZ2h0IDw9IHdpbmRvdy5pbm5lcldpZHRoKSxcclxuXHQgICAgICAgIHBvcnRyYWl0IDogKHdpbmRvdy5pbm5lckhlaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoKVxyXG5cdCAgICB9O1xyXG4gICAgfSxcclxuICAgIHJlc2l6aW5nIDogZnVuY3Rpb24oKSB7XHJcbiAgICBcdFRJTUVPVVRJRCA9IHVuZGVmaW5lZDtcclxuXHQgICAgbGV0IHNjcmVlbiA9IE9ic2VydmVyLnNjcmVlbkRhdGEoKTtcclxuXHQgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoT2JzZXJ2ZXIuaGFuZGxlcikuZm9yRWFjaChmdW5jdGlvbihhSGFuZGxlcklkKSB7XHJcblx0XHQgICAgY2FsbEhhbmRsZXIoT2JzZXJ2ZXIuaGFuZGxlclthSGFuZGxlcklkXSwgc2NyZWVuKTtcclxuXHQgICAgfSk7XHJcbiAgICB9ICAgIFxyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICBmdW5jdGlvbigpIHtcclxuICAgIGlmIChUSU1FT1VUSUQpXHJcblx0ICAgIGNsZWFyVGltZW91dChUSU1FT1VUSUQpO1xyXG4gICAgVElNRU9VVElEID0gc2V0VGltZW91dChPYnNlcnZlci5yZXNpemluZywgMjUwKTtcclxufSwgZmFsc2UpO1xyXG5cclxucmVhZHkoT2JzZXJ2ZXIucmVzaXppbmcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2JzZXJ2ZXI7XHJcbiIsImNvbnN0IFVSTCA9IGZ1bmN0aW9uKGFQcm90b2NvbCwgYURvbWFpbiwgYVBvcnQsIGFQYXRoLCB0aGVQYXJhbWV0ZXIsIGFNYXJrZXIpIHtcdFxyXG5cdHRoaXMucHJvdG9jb2wgPSBhUHJvdG9jb2wgfHwgXCJodHRwXCI7XHJcblx0dGhpcy5kb21haW4gPSBhRG9tYWluO1xyXG5cdHRoaXMucG9ydCA9IGFQb3J0O1xyXG5cdHRoaXMucGF0aCA9IGFQYXRoO1xyXG5cdHRoaXMucGFyYW1ldGVycyA9IHRoZVBhcmFtZXRlcjtcclxuXHR0aGlzLm1hcmtlciA9IGFNYXJrZXJcdFxyXG59O1xyXG5cclxuVVJMLnByb3RvdHlwZS5nZXRQYXJhbWV0ZXIgPSBmdW5jdGlvbihhS2V5KSB7XHJcblx0bGV0IHZhbHVlID0gdGhpcy5wYXJhbWV0ZXJzW2FLZXldO1xyXG5cdGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZVswXSA6IHZhbHVlO1xyXG59O1xyXG5cclxuVVJMLnByb3RvdHlwZS5nZXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24oYUtleSkge1xyXG5cdHJldHVybiB0aGlzLnBhcmFtZXRlcnNbYUtleV07XHJcbn07XHJcblxyXG5VUkwucHJvdG90eXBlLmFkZFBhcmFtZXRlciA9IGZ1bmN0aW9uKGFLZXksIGFWYWx1ZSwgYXBwZW5kKSB7XHJcblx0aWYgKHR5cGVvZiB0aGlzLnBhcmFtZXRlcnNbYUtleV0gPT09IFwidW5kZWZpbmVkXCIpIFxyXG5cdFx0dGhpcy5wYXJhbWV0ZXJzW2FLZXldID0gW107XHJcblx0aWYgKCFhcHBlbmQgJiYgdHlwZW9mIGFWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgXHJcblx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0gPSB1bmRlZmluZWQ7XHJcblx0IGVsc2UgaWYgKCFhcHBlbmQgJiYgdHlwZW9mIGFWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgYVZhbHVlLmxlbmd0aCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHRoaXMucGFyYW1ldGVyc1thS2V5XSA9IGFWYWx1ZTtcclxuXHQgZWxzZSBpZiAoYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGFWYWx1ZS5sZW5ndGggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHQkLm1lcmdlKHRoaXMucGFyYW1ldGVyc1thS2V5XSwgYVZhbHVlKTsvLyBAVE9ETyAkLm1lcmdlIGVudGZlcm5lblxyXG5cdCBlbHNlIGlmICghYXBwZW5kICYmIHR5cGVvZiBhVmFsdWUgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0gPSBbIGFWYWx1ZSBdO1xyXG5cdCBlbHNlIGlmIChhcHBlbmQgJiYgdHlwZW9mIGFWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikgXHJcblx0XHR0aGlzLnBhcmFtZXRlcnNbYUtleV0ucHVzaChhVmFsdWUpO1x0XHRcclxufTtcclxuXHJcblVSTC5wcm90b3R5cGUuZ2V0UXVlcnlTdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodHlwZW9mIHRoaXMucGFyYW1ldGVycyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0bGV0IHJlc3VsdCA9IFwiP1wiO1xyXG5cdFx0bGV0IGlzRmlyc3RQYXJhbWV0ZXIgPSB0cnVlO1xyXG5cdFx0Zm9yIChsZXQgcHJvcGVydHlOYW1lIGluIHRoaXMucGFyYW1ldGVycykge1xyXG5cdFx0XHRpZiAoIWlzRmlyc3RQYXJhbWV0ZXIpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQgKyBcIiZcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpc0ZpcnN0UGFyYW1ldGVyID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHBhcmFtZXRlclZhbHVlcyA9IHRoaXMucGFyYW1ldGVyc1twcm9wZXJ0eU5hbWVdO1xyXG5cdFx0XHRpZiAodHlwZW9mIHBhcmFtZXRlclZhbHVlcy5sZW5ndGggPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICsgZW5jb2RlVVJJQ29tcG9uZW50KHByb3BlcnR5TmFtZSkgKyBcIj1cIlxyXG5cdFx0XHRcdFx0XHQrIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbWV0ZXJWYWx1ZXMpO1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgcGFyYW1ldGVyVmFsdWVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRpZiAoaiA+IDApIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICsgXCImXCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQgKyBlbmNvZGVVUklDb21wb25lbnQocHJvcGVydHlOYW1lKSArIFwiPVwiXHJcblx0XHRcdFx0XHRcdFx0KyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyVmFsdWVzW2pdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdH1cclxufTtcclxuXHJcblVSTC5wcm90b3R5cGUuZ2V0TWFya2VyU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKHR5cGVvZiB0aGlzLm1hcmtlciAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybiBcIiNcIiArIHRoaXMubWFya2VyXHRcclxuXHRyZXR1cm4gXCJcIjtcclxufTtcclxuXHJcblVSTC5wcm90b3R5cGUuYXNTdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuXHRsZXQgcmVzdWx0ID0gdGhpcy5wcm90b2NvbCArIFwiOi8vXCIgKyB0aGlzLmRvbWFpbiArIFwiOlwiICsgdGhpcy5wb3J0O1x0XHJcblx0aWYgKHR5cGVvZiB0aGlzLnBhdGggIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRyZXN1bHQgPSByZXN1bHQgKyB0aGlzLnBhdGg7XHJcblxyXG5cdHJlc3VsdCA9IHJlc3VsdCArIHRoaXMuZ2V0UXVlcnlTdHJpbmcoKSArIHRoaXMuZ2V0TWFya2VyU3RyaW5nKCk7XHJcblxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5VUkwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuYXNTdHJpbmcoKTtcclxufTtcclxuXHRcclxuVVJMLmZyb21TdHJpbmcgPSBmdW5jdGlvbihhVXJsU3RyaW5nKSB7XHJcblx0bGV0IHRlbXBVcmwgPSBhVXJsU3RyaW5nO1xyXG5cdGxldCBwcm90b2NvbCA9IFwiaHR0cFwiO1xyXG5cdGxldCBob3N0ID0gdW5kZWZpbmVkO1xyXG5cdGxldCBwb3J0ID0gODA7XHJcblx0bGV0IHBhdGggPSBcIi9cIjtcclxuXHRsZXQgbWFya2VyID0gXCJcIjtcclxuXHRsZXQgcGFyYW1ldGVyU3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cdGxldCBzcGxpdEluZGV4ID0gLTE7XHJcblx0bGV0IHBhcmFtZXRlciA9IHt9O1xyXG5cclxuXHRsZXQgbWF0Y2ggPSBuZXcgUmVnRXhwKFwiXFxcXD8oW14jXSopXCIpLmV4ZWModGVtcFVybCk7XHJcblx0aWYgKG1hdGNoKVxyXG5cdFx0cGFyYW1ldGVyU3RyaW5nID0gbWF0Y2hbMV07XHJcblxyXG5cdG1hdGNoID0gbmV3IFJlZ0V4cChcIiMoW15cXFxcPyNdKilcIikuZXhlYyh0ZW1wVXJsKTtcclxuXHRpZiAobWF0Y2gpXHJcblx0XHRtYXJrZXIgPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMV0pO1xyXG5cclxuXHRzcGxpdEluZGV4ID0gdGVtcFVybC5pbmRleE9mKFwiOi8vXCIpO1xyXG5cdGlmIChzcGxpdEluZGV4ID4gMCkge1xyXG5cdFx0cHJvdG9jb2wgPSB0ZW1wVXJsLnN1YnN0cigwLCBzcGxpdEluZGV4KTtcclxuXHRcdHRlbXBVcmwgPSB0ZW1wVXJsLnN1YnN0cihzcGxpdEluZGV4ICsgMyk7XHJcblx0fVxyXG5cclxuXHRtYXRjaCA9IG5ldyBSZWdFeHAoXCIoW15cXC86XFxcXD8jXSopXCIpLmV4ZWModGVtcFVybCk7XHJcblx0aWYgKG1hdGNoKVxyXG5cdFx0aG9zdCA9IG1hdGNoWzFdO1xyXG5cclxuXHRtYXRjaCA9IG5ldyBSZWdFeHAoXCI6KFteXFxcXC9cXFxcPyNdKilcIikuZXhlYyh0ZW1wVXJsKTtcclxuXHRpZiAobWF0Y2gpXHJcblx0XHRwb3J0ID0gbWF0Y2hbMV07XHJcblx0ZWxzZSBpZiAocHJvdG9jb2wudG9Mb3dlckNhc2UoKSA9PSBcImh0dHBzXCIpXHJcblx0XHRwb3J0ID0gNDQzO1xyXG5cdGVsc2UgaWYgKHByb3RvY29sLnRvTG93ZXJDYXNlKCkgPT0gXCJmdHBcIilcclxuXHRcdHBvcnQgPSAyMTtcclxuXHRlbHNlIGlmIChwcm90b2NvbC50b0xvd2VyQ2FzZSgpID09IFwiZnRwc1wiKVxyXG5cdFx0cG9ydCA9IDIxO1xyXG5cclxuXHRtYXRjaCA9IG5ldyBSZWdFeHAoXCIoL1teXFxcXD8jXSopXCIpLmV4ZWModGVtcFVybCk7XHJcblx0aWYgKG1hdGNoKVxyXG5cdFx0cGF0aCA9IG1hdGNoWzFdO1xyXG5cclxuXHRsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFteJlxcXFw/Iz1dKik9KFteJlxcXFw/Iz1dKilcIik7XHJcblx0aWYgKHR5cGVvZiBwYXJhbWV0ZXJTdHJpbmcgPT09IFwic3RyaW5nXCIgJiYgcGFyYW1ldGVyU3RyaW5nLnRyaW0oKS5sZW5ndGggIT0gMCkge1xyXG5cdFx0bGV0IHBhcmFtZXRlckVudHJpZXMgPSBwYXJhbWV0ZXJTdHJpbmcuc3BsaXQoXCImXCIpO1x0XHRcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVyRW50cmllcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgbWF0Y2ggPSByZWdleC5leGVjKHBhcmFtZXRlckVudHJpZXNbaV0pO1xyXG5cdFx0XHRsZXQgcE5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMV0pO1xyXG5cdFx0XHRsZXQgcFZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzJdKTtcclxuXHRcdFx0cGFyYW1ldGVyW3BOYW1lXSA/IHBhcmFtZXRlcltwTmFtZV0ucHVzaChwVmFsdWUpXHJcblx0XHRcdFx0XHQ6IHBhcmFtZXRlcltwTmFtZV0gPSBbIHBWYWx1ZSBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ldyBVUkwocHJvdG9jb2wsIGhvc3QsIHBvcnQsIHBhdGgsIHBhcmFtZXRlciwgbWFya2VyKTtcclxufTtcclxuXHJcblxyXG5sZXQgQ1VSUkVOVCA9IHVuZGVmaW5lZDsgXHJcblVSTC5nZXRDdXJyZW50VXJsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKCFDVVJSRU5UKVxyXG5cdFx0IENVUlJFTlQgPSBVUkwuZnJvbVN0cmluZyh3aW5kb3cuZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XHJcblxyXG5cdHJldHVybiBDVVJSRU5UO1xyXG59O1xyXG5cclxuVVJMLmdldEN1cnJlbnQgPSBVUkwuZ2V0Q3VycmVudFVybDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVSTDtcclxuIiwiY29uc3QgVVVJRCA9IGZ1bmN0aW9uKCkge1x0XHJcblx0bGV0IHNwYWNlciA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IGFyZ3VtZW50c1swXSA6IFwiLVwiO1xyXG5cdGxldCB0ZW1wbGF0ZSA9ICd4eHh4eHh4eCcgKyBzcGFjZXIgKyAneHh4eCcgKyBzcGFjZXIgKyAnNHh4eCcgKyBzcGFjZXIgKyAneXh4eCcgKyBzcGFjZXIgKyAneHh4eHh4eHh4eHh4JztcdFxyXG5cdHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuXHRcdGxldCByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMFxyXG5cdFx0bGV0IHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcblx0XHRyZXR1cm4gdi50b1N0cmluZygxNik7XHJcblx0fSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVVSUQ7IiwiLy9tb2R1bGVzXHJcbmltcG9ydCBOYW1lc3BhY2UgZnJvbSBcIi4vTmFtZXNwYWNlXCI7XHJcbmltcG9ydCBVVUlEIGZyb20gXCIuL1VVSURcIjtcclxuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiLi9FeHByZXNzaW9uUmVzb2x2ZXJcIjtcclxuaW1wb3J0IENvbnZlcnRlciBmcm9tIFwiLi9Db252ZXJ0ZXJcIjtcclxuaW1wb3J0IFVSTCBmcm9tIFwiLi9VUkxcIjtcclxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xyXG5pbXBvcnQgRXZlbnRCaW5kIGZyb20gXCIuL0V2ZW50QmluZFwiO1xyXG5pbXBvcnQgU2NyZWVuT2JzZXJ2ZXIgZnJvbSBcIi4vU2NyZWVuT2JzZXJ2ZXJcIjtcclxuXHJcblxyXG4vLyBsb2FkIHBhY2thZ2VzXHJcbmltcG9ydCByZWdleCBmcm9tIFwiLi9yZWdleFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IGpxdWVyeSBmcm9tIFwiLi9qcXVlcnlcIjsiLCJjb25zdCBidWlsZEZ1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uKGFOYW1lKSB7XHJcblx0cmV0dXJuIGFOYW1lLnJlcGxhY2UoL1xcLi9nLCBcIl9cIik7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUluc3RhbmNlID0gZnVuY3Rpb24oYU5hbWUsIGFGdW5jdGlvbk5hbWUsIGFDb25zdHJ1Y3RvciwgYURhdGEpIHtcdFxyXG5cdHJldHVybiBmdW5jdGlvbigpe1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGVsc2UgaWYgKHRoaXMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IFtdO1xyXG5cdFx0XHR0aGlzLmVhY2goKGZ1bmN0aW9uKGFFbGVtZW50KSB7XHJcblx0XHRcdFx0dGhpcy5wdXNoKGFFbGVtZW50W2FGdW5jdGlvbk5hbWVdKGFEYXRhKSk7XHJcblx0XHRcdH0pLmJpbmQocmVzdWx0KSk7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgY29tcG9uZW50ID0gdGhpcy5kYXRhKGFOYW1lKTtcclxuXHRcdFx0aWYgKCFjb21wb25lbnQpIHtcclxuXHRcdFx0XHRjb21wb25lbnQgPSBuZXcgYUNvbnN0cnVjdG9yKHRoaXMsIGFEYXRhKTtcclxuXHRcdFx0XHR0aGlzLmRhdGEoYU5hbWUsIGNvbXBvbmVudCk7XHJcblx0XHRcdH1cclxuXHRcclxuXHRcdFx0cmV0dXJuIGNvbXBvbmVudDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxufTtcclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IGZ1bmN0aW9uKGFOYW1lLCBhQ29uc3RydWN0b3IpIHtcclxuXHRpZih0eXBlb2YgJCAhPT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRsZXQgZnVuY3Rpb25OYW1lID0gYnVpbGRGdW5jdGlvbk5hbWUoYU5hbWUpO1x0XHRcclxuXHRcdCQuZm5bZnVuY3Rpb25OYW1lXSA9IGNyZWF0ZUluc3RhbmNlKGFOYW1lLCBmdW5jdGlvbk5hbWUsIGFDb25zdHJ1Y3Rvcik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgRXZlbnRCaW5kIGZyb20gXCIuLi9FdmVudEJpbmRcIjtcclxuXHJcbkNvbXBvbmVudChcImRlLnRpdHVzLmNvcmUuRXZlbnRCaW5kXCIsIGZ1bmN0aW9uKGFuRWxlbWVudCwgYUNvbnRleHQpIHtcdFxyXG5cdHJldHVybiBFdmVudEJpbmQoYW5FbGVtZW50WzBdLCBhQ29udGV4dCk7XHRcclxufSk7XHJcbiIsImlmICh0eXBlb2YgJCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHQkLmZuLlNlbGVjdG9yID0gZnVuY3Rpb24oKSB7XHRcdFxyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gW107XHJcblx0XHRcdHRoaXMuZWFjaChmdW5jdGlvbihhRWxlbWVudCkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKHRoaXMuc2VsZWN0b3IoKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRyZXR1cm4gdGhpc1swXS5zZWxlY3RvcigpO1xyXG5cdH07IiwiaWYgKHR5cGVvZiAkICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdCQuZm4udGFnTmFtZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gW107XHJcblx0XHRcdHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaCh0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSBlbHNlIGlmKHRoaXMubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiAkKHRoaXMpWzBdLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHR9O1xyXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgRXZlbnRCaW5kIGZyb20gXCIuL0V2ZW50QmluZFwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IFRhZ25hbWUgZnJvbSBcIi4vVGFnbmFtZVwiO1xyXG5cclxuY29uc3QganF1ZXJ5ID0ge1xyXG5cdENvbXBvbmVudCA6IENvbXBvbmVudCxcclxuXHRDb21wb25lbnRzIDoge1xyXG5cdFx0YXNDb21wb25lbnQgOiBDb21wb25lbnRcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBqcXVlcnk7IiwibGV0IE1hdGNoZXIgPSBmdW5jdGlvbiAoYVJlZ0V4cCwgYVRleHQpIHtcclxuXHRcclxuXHR0aGlzLmludGVybmFsUmVnZXggPSBhUmVnRXhwOyBcclxuXHR0aGlzLnByb2Nlc3NpbmdUZXh0ID0gYVRleHQ7XHJcblx0dGhpcy5jdXJyZW50TWF0Y2ggPSB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5NYXRjaGVyLnByb3RvdHlwZS5pc01hdGNoaW5nID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuaW50ZXJuYWxSZWdleC50ZXN0KHRoaXMucHJvY2Vzc2luZ1RleHQpO1xyXG59O1xyXG5cclxuTWF0Y2hlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuY3VycmVudE1hdGNoID0gdGhpcy5pbnRlcm5hbFJlZ2V4LmV4ZWModGhpcy5wcm9jZXNzaW5nVGV4dCk7XHJcblx0aWYgKHRoaXMuY3VycmVudE1hdGNoIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdHRoaXMucHJvY2Vzc2luZ1RleHQgPSB0aGlzLnByb2Nlc3NpbmdUZXh0LnJlcGxhY2UodGhpcy5jdXJyZW50TWF0Y2hbMF0sXHRcIlwiKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5NYXRjaGVyLnByb3RvdHlwZS5nZXRNYXRjaCA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0aGlzLmN1cnJlbnRNYXRjaCBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudE1hdGNoWzBdO1xyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5NYXRjaGVyLnByb3RvdHlwZS5nZXRHcm91cCA9IGZ1bmN0aW9uKGFHcm91cElkKSB7XHJcblx0aWYgKHRoaXMuY3VycmVudE1hdGNoIGluc3RhbmNlb2YgQXJyYXkpXHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50TWF0Y2hbYUdyb3VwSWRdO1xyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5NYXRjaGVyLnByb3RvdHlwZS5yZXBsYWNlQWxsID0gZnVuY3Rpb24oYVJlcGxhY2VWYWx1ZSwgYVRleHQpIHtcclxuXHRpZiAodGhpcy5jdXJyZW50TWF0Y2ggaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdHJldHVybiBhVGV4dC5yZXBsYWNlKHRoaXMuY3VycmVudE1hdGNoWzBdLCBhUmVwbGFjZVZhbHVlKTtcclxuXHRyZXR1cm4gYVRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRjaGVyOyIsImltcG9ydCBNYXRjaGVyIGZyb20gXCIuL01hdGNoZXJcIjtcclxuXHJcbmNvbnN0IFJlZ2V4ID0gZnVuY3Rpb24oYVJlZ2V4LCBhT3B0aW9ucykge1xyXG5cdHRoaXMuaW50ZXJuYWxSZWdleCA9IG5ldyBSZWdFeHAoYVJlZ2V4LCBhT3B0aW9ucyk7XHJcbn07XHRcclxuUmVnZXgucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oYVRleHQpIHtcclxuXHRyZXR1cm4gbmV3IE1hdGNoZXIodGhpcy5pbnRlcm5hbFJlZ2V4LCBhVGV4dCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2V4OyIsImltcG9ydCBSZWdleCBmcm9tIFwiLi9SZWdleFwiO1xyXG5pbXBvcnQgTWF0Y2hlciBmcm9tIFwiLi9NYXRjaGVyXCI7XHJcblxyXG5jb25zdCByZWdleCA9IHtcclxuXHRSZWdleCA6IFJlZ2V4LFxyXG5cdE1hdGNoZXIgOiBNYXRjaGVyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdleDsiLCJjb25zdCBFdmFsVXRpbHMgPSB7XHJcblx0ZXZhbCA6IGZ1bmN0aW9uKGFTdGF0ZW1lbnQsIGFDb250ZXh0LCBhRGVmYXVsdCl7XHJcblx0XHRpZiAodHlwZW9mIGFTdGF0ZW1lbnQgIT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHJldHVybiBhU3RhdGVtZW50O1xyXG5cdFx0XHJcblx0XHRsZXQgc3RhdGVtZW50ID0gYVN0YXRlbWVudC50cmltKCk7IFxyXG5cdFx0aWYoc3RhdGVtZW50Lmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIGFEZWZhdWx0O1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gKG5ldyBGdW5jdGlvbihcImNcIixcInRyeXt3aXRoKGMpe3JldHVybiBcIiArIHN0YXRlbWVudCArIFwiO319Y2F0Y2goZSl7dGhyb3cgZTt9XCIpKS5jYWxsKG51bGwsIGFDb250ZXh0IHx8IHt9KTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdCB8fCBhRGVmYXVsdFxyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHR0aHJvdyBlO1xyXG5cdFx0fVx0XHJcblx0fSxcclxuXHRwcm9taXNlRXZhbCA6IGZ1bmN0aW9uKGFTdGF0ZW1lbnQsIGFDb250ZXh0LCBhRGVmYXVsdCl7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBFdmFsVXRpbHMuZXZhbChhU3RhdGVtZW50LCBhQ29udGV4dCwgYURlZmF1bHQpO1xyXG5cdFx0XHRcdGlmKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKVxyXG5cdFx0XHRcdFx0cmVqZWN0KHJlc3VsdCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2YWxVdGlsczsiLCJjb25zdCBleHRlbmQgPSBmdW5jdGlvbigpe1xyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdHJldHVybjtcdFxyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdHJldHVybiBhcmd1bWVudHNbMF07XHJcblxyXG5cdGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1x0XHJcblx0bGV0IGRlZXAgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJib29sZWFuXCIgPyBhcmdzLnNoaWZ0KCkgOiBmYWxzZTtcclxuXHRsZXQgdGFyZ2V0ID0gYXJncy5zaGlmdCgpO1xyXG5cdHdoaWxlKGFyZ3MubGVuZ3RoICE9IDApe1xyXG5cdFx0bGV0IHNvdXJjZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBzb3VyY2UgIT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2goKGZ1bmN0aW9uKGFTb3VyY2UsIGFUYXJnZXQsIGlzRGVlcCwgYU5hbWUpe1xyXG5cdFx0XHRcdGxldCBzb3VyY2UgPSBhU291cmNlW2FOYW1lXTtcclxuXHRcdFx0XHRpZih0eXBlb2Ygc291cmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHNvdXJjZSAhPSBudWxsKXtcclxuXHRcdFx0XHRcdGxldCB0YXJnZXQgPSBhVGFyZ2V0W2FOYW1lXTtcclxuXHRcdFx0XHRcdGlmKHR5cGVvZiB0YXJnZXQgPT09IFwidW5kZWZpbmVkXCIgfHwgdGFyZ2V0ID09IG51bGwpXHJcblx0XHRcdFx0XHRcdGFUYXJnZXRbYU5hbWVdID0gc291cmNlO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZihkZWVwICYmIEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZSkpXHJcblx0XHRcdFx0XHRcdHZhbHVlLmNvbmNhdChhU291cmNlW2FOYW1lXSk7XHJcblx0XHRcdFx0XHRlbHNlIGlmKGRlZXAgJiYgdHlwZW9mIHRhcmdldCAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdGFyZ2V0ID09PSB0eXBlb2Ygc291cmNlKVxyXG5cdFx0XHRcdFx0XHRleHRlbmQodHJ1ZSwgdGFyZ2V0LCBzb3VyY2UpO1x0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KS5iaW5kKG51bGwsIHNvdXJjZSwgdGFyZ2V0LCBkZWVwKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB0YXJnZXQ7XHJcbn07XHJcblxyXG5jb25zdCBPYmplY3RVdGlscyA9IHtcclxuXHRleHRlbmQgOiBleHRlbmRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9iamVjdFV0aWxzO1xyXG5cclxuXHJcbiIsImNvbnN0IFBhZ2luZ1V0aWxzID0ge1xyXG5cdHBhZ2VyRGF0YSA6IGZ1bmN0aW9uKGFQYWdlLCBhUGFnZXMsIGFTaXplKSB7XHJcblx0XHRsZXQgaGFsZiA9IE1hdGgucm91bmQoYVBhZ2VzIC8gMik7XHJcblx0XHRsZXQgcmVzdWx0ID0ge1xyXG5cdFx0XHRmaXJzdFBhZ2UgOiAxLFxyXG5cdFx0XHRzdGFydFBhZ2UgOiAxLFxyXG5cdFx0XHRlbmRQYWdlIDogYVNpemUsXHJcblx0XHRcdGxhc3RQYWdlIDogYVBhZ2VzLFxyXG5cdFx0XHRjdXJyZW50IDogYVBhZ2UsXHJcblx0XHRcdHBhZ2VDb3VudCA6IGFQYWdlc1xyXG5cdFx0fTtcclxuXHRcdGlmIChhU2l6ZSA+IGFQYWdlcylcclxuXHRcdFx0cmVzdWx0LmVuZFBhZ2UgPSBhUGFnZXM7XHJcblx0XHRlbHNlIGlmIChhUGFnZSArIGhhbGYgPiBhUGFnZXMpIHtcclxuXHRcdFx0cmVzdWx0LmVuZFBhZ2UgPSBhUGFnZXM7XHJcblx0XHRcdHJlc3VsdC5zdGFydFBhZ2UgPSAoZW5kIC0gYVNpemUpICsgMTtcclxuXHRcdH0gZWxzZSBpZiAoYVBhZ2UgLSBoYWxmID4gMSkge1xyXG5cdFx0XHRyZXN1bHQuZW5kUGFnZSA9IChhUGFnZSArIGhhbGYpO1xyXG5cdFx0XHRyZXN1bHQuc3RhcnRQYWdlID0gKGVuZCAtIGFTaXplKSArIDE7XHJcblx0XHR9XHJcblx0XHRyZXN1bHQuY291bnQgPSByZXN1bHQuZW5kUGFnZSAtIHJlc3VsdC5zdGFydFBhZ2U7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH0sXHJcblxyXG5cdHBhZ2VBcnJheSA6IGZ1bmN0aW9uKGFQYWdlLCBhU2l6ZSwgYUFycmF5KSB7XHJcblx0XHRyZXR1cm4gYUFycmF5LnNsaWNlKChhUGFnZSAtIDEpICogYVNpemUsIGFTaXplKTtcclxuXHR9XHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmdVdGlscztcclxuIiwiaW1wb3J0IE9iamVjdFV0aWxzIGZyb20gXCIuL09iamVjdFV0aWxzXCI7XHJcblxyXG5jb25zdCBERUZBVUxUUyA9IHtcclxuXHRmb3JtYXRUb0h0bWwgOiB7XHJcblx0XHRcInRhYnNpemVcIiA6IDQsXHJcblx0XHRcInRhYmNoYXJcIiA6IFwiJm5ic3A7XCIsXHJcblx0XHRcIm5ld2xpbmVUYWdcIiA6IFwiPGJyLz5cIlxyXG5cdH0sXHJcblxyXG5cdHRyaW1UZXh0TGVuZ3RoIDoge1xyXG5cdFx0XCJwb3N0Zml4XCIgOiBcIi4uLlwiXHJcblx0fVxyXG59O1xyXG5jb25zdCBTdHJpbmdVdGlscyA9IHtcclxuXHRERUZBVUxUUyA6IERFRkFVTFRTLFxyXG5cdHRyaW1UZXh0TGVuZ3RoIDogZnVuY3Rpb24oYVRleHQsIG1heExlbmd0aCwgdGhlU2V0dGluZ3MpIHtcclxuXHRcdGlmIChhVGV4dCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIGFUZXh0ICE9PSBcInN0cmluZ1wiIHx8IGFUZXh0ID09IFwiXCIpXHJcblx0XHRcdHJldHVybiBhVGV4dDtcclxuXHJcblx0XHRsZXQgc2V0dGluZ3MgPSBPYmplY3RVdGlscy5leHRlbmQoe30sIHRoZVNldHRpbmdzLCBERUZBVUxUUy50cmltVGV4dExlbmd0aCk7XHJcblxyXG5cdFx0aWYgKGFUZXh0Lmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG5cdFx0XHRsZXQgZW5kID0gbWF4TGVuZ3RoIC0gc2V0dGluZ3MucG9zdGZpeC5sZW5ndGg7XHJcblx0XHRcdGlmICgoYVRleHQubGVuZ3RoIC0gZW5kKSA+IDApXHJcblx0XHRcdFx0cmV0dXJuIGFUZXh0LnN1YnN0cmluZygwLCBlbmQpLnRyaW0oKSArIHNldHRpbmdzLnBvc3RmaXg7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYVRleHQ7XHJcblx0fSxcclxuXHRmb3JtYXRUb0h0bWwgOiBmdW5jdGlvbihhVGV4dCwgdGhlU2V0dGluZ3MpIHtcclxuXHRcdGlmIChhVGV4dCA9PSB1bmRlZmluZWQgfHwgdHlwZW9mIGFUZXh0ICE9PSBcInN0cmluZ1wiIHx8IGFUZXh0ID09IFwiXCIpXHJcblx0XHRcdHJldHVybiBhVGV4dDtcclxuXHRcdGxldCBzZXR0aW5ncyA9IE9iamVjdFV0aWxzLmV4dGVuZCh7fSwgdGhlU2V0dGluZ3MgLERFRkFVTFRTLmZvcm1hdFRvSHRtbCk7XHJcblx0XHRsZXQgbGluZXMgPSBhVGV4dC5yZXBsYWNlKC9cXG5cXHIvZywgXCJcXG5cIikucmVwbGFjZSgvXFxyL2csIFwiXFxuXCIpLnNwbGl0KFwiXFxuXCIpO1xyXG5cdFx0bGV0IHRleHQgPSBcIlwiO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoaSAhPSAwKVxyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgc2V0dGluZ3MubmV3bGluZVRhZztcclxuXHRcdFx0dGV4dCA9IHRleHRcdCsgU3RyaW5nVXRpbHMucHJldmVudFRhYnMobGluZXNbaV0sIHNldHRpbmdzLnRhYnNpemUsIHNldHRpbmdzLnRhYmNoYXIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fSxcclxuXHRnZXRUYWJTdG9wTWFwIDogZnVuY3Rpb24odGFiU2l6ZSwgdGFiU3RyaW5nKSB7XHJcblx0XHRsZXQgdGFic3RvcE1hcCA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gdGFiU2l6ZTsgaSsrKSB7XHJcblx0XHRcdGlmIChpID09IDApXHJcblx0XHRcdFx0dGFic3RvcE1hcFswXSA9IFwiXCI7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0YWJzdG9wTWFwW2ldID0gdGFic3RvcE1hcFtpIC0gMV0gKyB0YWJTdHJpbmc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRhYnN0b3BNYXA7XHJcblx0fSxcclxuXHRwcmV2ZW50VGFicyA6IGZ1bmN0aW9uKGFUZXh0LCB0aGVUYWJTdG9wcywgdGhlVGFiU3RvcENoYXIpIHtcclxuXHRcdGxldCB0YWJzdG9wTWFwID0gU3RyaW5nVXRpbHMuZ2V0VGFiU3RvcE1hcCh0aGVUYWJTdG9wcywgdGhlVGFiU3RvcENoYXIpO1xyXG5cdFx0bGV0IHRhYlN0b3BzID0gdGhlVGFiU3RvcHM7XHJcblx0XHRsZXQgdGV4dCA9IFwiXCI7XHJcblx0XHRsZXQgdGFicyA9IGFUZXh0LnNwbGl0KFwiXFx0XCIpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICh0YWJzW2ldLmxlbmd0aCAhPSAwICYmIGkgIT0gMCkge1xyXG5cdFx0XHRcdGxldCBzaXplID0gdGV4dC5sZW5ndGg7XHJcblx0XHRcdFx0bGV0IHRhYlNpemUgPSBzaXplICUgdGFiU3RvcHM7XHJcblx0XHRcdFx0dGV4dCA9IHRleHQgKyB0YWJzdG9wTWFwW3RoZVRhYlN0b3BzIC0gdGFiU2l6ZV0gKyB0YWJzW2ldO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRhYnNbaV0ubGVuZ3RoID09IDAgJiYgaSAhPSAwKVxyXG5cdFx0XHRcdHRleHQgPSB0ZXh0ICsgdGFic3RvcE1hcFt0aGVUYWJTdG9wc107XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0ZXh0ID0gdGV4dCArIHRhYnNbaV07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fSxcclxuXHRmb3JtYXQgOiBmdW5jdGlvbihhVGV4dCwgYXJncykge1xyXG5cdFx0bGV0IG9iamVjdHMgPSBhcmd1bWVudHM7XHJcblx0XHRyZXR1cm4gYVRleHQucmVwbGFjZSgvey0/WzAtOV0rfS9nLCBmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdGxldCBpbmRleCA9IHBhcnNlSW50KGl0ZW0uc3Vic3RyaW5nKDEsIGl0ZW0ubGVuZ3RoIC0gMSkpICsgMTtcclxuXHRcdFx0bGV0IHJlcGxhY2U7XHJcblx0XHRcdGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBvYmplY3RzLmxlbmd0aCkge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBvYmplY3RzW2luZGV4XTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcGxhY2UgIT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0XHRyZXBsYWNlID0gSlNPTi5zdHJpbmdpZnkocmVwbGFjZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XHJcblx0XHRcdFx0cmVwbGFjZSA9IFwie1wiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGluZGV4ID09PSAtMikge1xyXG5cdFx0XHRcdHJlcGxhY2UgPSBcIn1cIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXBsYWNlID0gXCJcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVwbGFjZTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nVXRpbHM7IiwiaW1wb3J0IEV2YWxVdGlscyBmcm9tIFwiLi9FdmFsVXRpbHNcIjtcclxuaW1wb3J0IE9iamVjdFV0aWxzIGZyb20gXCIuL09iamVjdFV0aWxzXCI7XHJcbmltcG9ydCBQYWdpbmdVdGlscyBmcm9tIFwiLi9QYWdpbmdVdGlsc1wiO1xyXG5pbXBvcnQgU3RyaW5nVXRpbHMgZnJvbSBcIi4vU3RyaW5nVXRpbHNcIjtcclxuXHJcblxyXG5jb25zdCB1dGlscyA9IHtcclxuXHRcdEV2YWxVdGlscyA6IEV2YWxVdGlscyxcclxuXHRcdE9iamVjdFV0aWxzIDogT2JqZWN0VXRpbHMsXHJcblx0XHRQYWdpbmdVdGlscyA6IFBhZ2luZ1V0aWxzLFxyXG5cdFx0U3RyaW5nVXRpbHMgOiBTdHJpbmdVdGlsc1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==