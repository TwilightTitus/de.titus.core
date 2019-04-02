// Load all polyfills
import "./polyfill";

// Load top level modules
import Namespace from "./Namespace";
import UUID from "./UUID";
import SpecialFunctions from "./SpecialFunctions";
import ExpressionResolver from "./ExpressionResolver";
import Converter from "./Converter";
import PagingUtils from "./PagingUtils";
import StringUtils from "./StringUtils";
import URL from "./URL";
import Page from "./Page";
import EventBind from "./EventBind";
import ScreenObserver from "./ScreenObserver";
import JQuery from "./jquery/index";

// load regex modules
import Regex from "./regex";



// create namespace
Namespace("de.titus.core", function() {
	return {
		VERSION : "${version}",
		Namespace : Namespace,
		UUID : UUID,
		SpecialFunctions : SpecialFunctions,
		ExpressionResolver : ExpressionResolver,
		Converter : Converter,
		StringUtils : StringUtils,
		URL: URL,
		Page: Page,
		EventBind: EventBind,
		ScreenObserver : ScreenObserver,
		regex : Regex,
		jquery : JQuery
	};
});