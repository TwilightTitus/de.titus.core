// Load all polyfills
import "./polyfill/String";

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

// load regex modules
import Regex from "./regex/Regex";
import Matcher from "./regex/Matcher";



// create namespace
Namespace("de.titus.core", function() {
	return {
		Namespace : Namespace,
		UUID : UUID,
		SpecialFunctions : SpecialFunctions,
		ExpressionResolver : ExpressionResolver,
		Converter : Converter,
		StringUtils : StringUtils,
		URL: URL,
		Page: Page,
		regex : {
			Regex : Regex,
			Matcher : Matcher
		}			
	};
});