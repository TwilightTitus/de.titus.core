import Component from "./Component";
import EventBind from "../EventBind";

Component("de.titus.core.EventBind", function(anElement) {	
	return EventBind(anElement[0]);	
});
