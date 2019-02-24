import Regex from "./regex/Regex";


let ExpressionResolver = class {	
	constructor(varRegex) {
		this.regex = new Regex(varRegex	|| ExpressionResolver.TEXT_EXPRESSION_REGEX);
	};
		
	resolveText(aText, aDataContext, aDefaultValue) {
		let text = aText;
		let matcher = this.regex.parse(text);
		while (matcher.next()) {
			let expression = matcher.getMatch();
			let expressionResult = this.internalResolveExpression(matcher
					.getGroup(1), aDataContext, aDefaultValue);
			if (expressionResult != undefined)
				text = matcher.replaceAll(expressionResult, text);
		}
		return text;
	};
	
	resolveExpression(aExpression,
			aDataContext, aDefaultValue) {
		let matcher = this.regex.parse(aExpression);
		if (matcher.next())
			return this.internalResolveExpression(matcher.getGroup(1),
					aDataContext, aDefaultValue);
	
		return this.internalResolveExpression(aExpression, aDataContext,
				aDefaultValue);
	};
	
	internalResolveExpression(aExpression,
			aDataContext, aDefaultValue) {
		try {
			return de.titus.core.SpecialFunctions.doEvalWithContext(aExpression,
					aDataContext, aDefaultValue);
		} catch (e) {
			return aDefaultValue;
		}
	};
};

ExpressionResolver.TEXT_EXPRESSION_REGEX = "\\$\\{([^\\{\\}]+)\\}";
ExpressionResolver.DEFAULT = new ExpressionResolver();

export default ExpressionResolver;
