const EvalUtils = {
	eval : function(aStatement, aContext, aDefault){
		if (typeof aStatement !== "string")
			return aStatement;
		
		let statement = aStatement.trim(); 
		if(statement.length === 0)
			return aDefault;
		
		try {
			let result = (new Function("c","with(c){return " + statement + ";}")).call(null, aContext || {});
			return result || aDefault
		} catch (e) {
			throw e;
		}	
	},
	promiseEval : function(aStatement, aContext, aDefault, aTimeout){
		let action = function(resolve, reject){
			let result = EvalUtils.eval(aStatement, aContext, aDefault);
			if(result instanceof Error)
				reject(result);
			
			resolve(result);
		};
		
		if(aTimeout > 0)
			return new Promise(function(){setTimeout(action,aTimeout);});
		else
			return new Promise(action);
	}
};

export default EvalUtils;