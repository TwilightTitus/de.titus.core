const EvalUtils = {
	eval : function(aStatement, aContext, aDefault){
		if (typeof aStatement !== "string")
			return aStatement;
		
		let statement = aStatement.trim(); 
		if(statement.length === 0)
			return aDefault;
		
		try {
			let result = (new Function("c","try{with(c){return " + statement + ";}}catch(e){throw e;}")).call(null, aContext || {});
			return result || aDefault
		} catch (e) {
			throw e;
		}	
	},
	promiseEval : function(aStatement, aContext, aDefault){
		return new Promise(function(resolve, reject){
			window.requestAnimationFrame(function(){
				let result = EvalUtils.eval(aStatement, aContext, aDefault);
				if(result instanceof Error)
					reject(result);
				
				resolve(result);
			});
		});
	}
};

export default EvalUtils;