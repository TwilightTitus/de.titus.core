import Regex from "./regex/Regex";
import EvalUtils from "./utils/EvalUtils";

const EXPRESSION_REGEX = "\\$\\{([^\\{\\}]+)\\}";


const ExpressionResolver = function(varRegex) {
	this.regex = new Regex(varRegex	|| EXPRESSION_REGEX);
};

ExpressionResolver.prototype.resolve = function(aExpression, aContext, aDefault) {
	let expression = aExpression.trim();
	let matcher = this.regex.parse(expression);
	if (matcher.next())
		expression = matcher.getGroup(1).trim();
		
	return EvalUtils.eval(expression, aContext || {}, aDefault);
};

ExpressionResolver.prototype.promise = function(aExpression, aContext, aDefault, aTimeout) {
	let expression = aExpression.trim();
	let matcher = this.regex.parse(expression);
	if (matcher.next())
		expression = matcher.getGroup(1).trim();
		
	return EvalUtils.promiseEval(expression, aContext || {}, aDefault);
};

ExpressionResolver.prototype.text = function(aText, aContext, aDefault) {
	let hasDefault = arguments.length === 3;
	let text = aText;
	let matcher = this.regex.parse(text);
	while (matcher.next()) {
		try{
			let expression = matcher.getMatch();
			let result = EvalUtils.eval(matcher.getGroup(1).trim(), aContext, aDefault);
			if (typeof result !== "undefined" || hasDefault)
				text = matcher.replaceAll(result, text);
		}catch(e){
			if(console && console.log)
				console.error(e);
			if (hasDefault)
				text = matcher.replaceAll(aDefault, text);
		}
	}
	return text;
};

ExpressionResolver.prototype.promiseText = function(aText, aContext, aDefault, aTimeout) {
	let action = (function(resolve, args){
		if(args.length === 2)
			resolve(this.text(args[0], args[1]));
		else
			resolve(this.text(args[0], args[1], args[2]));
	}).bind(this, arguments);
	
	if(aTimeout > 0)
		return new Promise(function(){
			setTimeout(action, aTimeout);
		});
	
	return new Promise(action);
};


ExpressionResolver.prototype.resolveText = ExpressionResolver.prototype.text;
ExpressionResolver.prototype.resolveExpression = ExpressionResolver.prototype.resolve; 
ExpressionResolver.DEFAULT = new ExpressionResolver();

export default ExpressionResolver;
