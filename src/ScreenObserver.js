import "../node_modules/dom-api-extension";
import ExpressionResolver from "./ExpressionResolver";
import UUID from "./UUID";

const RESOLVER = ExpressionResolver.DEFAULT;
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
		    aHandler.id = UUID("-");
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

export default Observer;
