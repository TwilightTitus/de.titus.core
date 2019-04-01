import Component from "./Component";
import EventBind from "../EventBind";

Component("de.titus.core.EventBind", function(anElement, aContext) {	
	return EventBind(anElement[0], aContext);	
});
