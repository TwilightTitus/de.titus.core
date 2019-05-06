//modules
import Namespace from "./Namespace";
import UUID from "./UUID";
import ExpressionResolver from "./ExpressionResolver";
import Converter from "./Converter";
import URL from "./URL";
import Page from "./Page";
import EventBind from "./EventBind";
import ScreenObserver from "./ScreenObserver";


// load packages
import regex from "./regex";
import utils from "./utils";
import jquery from "./jquery";



// externalize libs for browser
Namespace("de.titus.core", function() {
	return {
		VERSION : "${version}",
		//packages
		utils : utils,
		regex : regex,
		jquery : jquery,
		
		//modules
		Namespace : Namespace,
		UUID : UUID,
		ExpressionResolver : ExpressionResolver,
		Converter : Converter,
		URL: URL,
		Page: Page,
		EventBind: EventBind,
		ScreenObserver : ScreenObserver
	};
});