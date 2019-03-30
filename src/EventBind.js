import "../node_modules/dom-api-extension";
import ObjectUtils from "./utils/ObjectUtils";
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
		result.eventData = ObjectUtils.extend({}, aContext);
	
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
export default EventBind;