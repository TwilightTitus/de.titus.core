import "../node_modules/dom-api-extension";
import extend from "./utils/ObjectUtils";
import ExpressionResolver from "./ExpressionResolver";

const expressionResolver = ExpressionResolver.DEFAULT;

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
		result.eventData = extend({}, aContext);

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
export default eventBind;