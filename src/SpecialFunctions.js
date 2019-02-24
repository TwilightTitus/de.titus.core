const DEVMODE = location.search ? (/.*devmode=true.*/ig).test(location.search) : false;
const STATEMENTS = {};
let SpecialFunctions = {
	doEval : function(aStatement, aContext, aCallback) {
		if (aCallback)
			SpecialFunctions.doEvalWithContext(aStatement, (aContext || {}),
					undefined, aCallback);
		else {
			if (typeof aStatement !== "string")
				return aStatement;

			var statement = aStatement.trim();
			if (statement.length == 0)
				return undefined;

			try {
				var evalFunction = new Function("aContext",
						"with(this){return " + aStatement + ";}");
				return evalFunction.call(aContext);
			} catch (e) {
				if (DEVMODE) {
					console.log("----------------------\n", "doEval()\n",
							"statement: \"", aStatement, "\"\n", "context: \"",
							aContext, "\"\n", "callback: \"", aCallback,
							"\"\n", "error: ", e, "\n",
							"----------------------");
				}
				throw e;
			}
		}
	},
	doEvalWithContext : function(aStatement, aContext, aDefault, aCallback) {
		if (typeof aCallback === "function") {
			window.setTimeout(function() {
				var result = SpecialFunctions.doEvalWithContext(aStatement,
						aContext, aDefault, undefined);
				aCallback(result, aContext);
			}, 1);

		} else
			try {
				var result = SpecialFunctions.doEval(aStatement, aContext);
				if (typeof result === "undefined")
					return aDefault;
				return result;
			} catch (e) {
				return aDefault;
			}
	}
};

export default SpecialFunctions;