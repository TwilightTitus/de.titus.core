import "../node_modules/dom-api-extension";
import ObjectUtils from "./utils/ObjectUtils";
import ExpressionResolver from "./ExpressionResolver";

const expressionResolver = ExpressionResolver.DEFAULT;

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
		data.eventData = ObjectUtils.extend({}, aContext);
	
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
export default EventBind;