//modules
import Namespace from "./src/Namespace";
import UUID from "./src/UUID";
import ExpressionResolver from "./src/ExpressionResolver";
import Converter from "./src/Converter";
import URL from "./src/URL";
import Page from "./src/Page";
import EventBind from "./src/EventBind";
import ScreenObserver from "./src/ScreenObserver";


// load packages
import regex from "./src/regex";
import utils from "./src/utils";
import jquery from "./src/jquery";



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