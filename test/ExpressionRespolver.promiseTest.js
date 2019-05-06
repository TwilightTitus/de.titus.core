import ExpressionResolver from "../src/ExpressionResolver";

describe("ExpressionResolver.resolve", function() {	
	it("expression to true ${true}", function(){
		let expression = "${true}";
		let resolver = ExpressionResolver.DEFAULT;
		resolver.promise(expression).then(function(result){
			expect(result).toBe(true);
			return result;
		}).then(function(result){		
			expect(typeof result).toBe("boolean");
		});
	});	

	it("expression to 1 ${1}", function(){
		let expression = "${1}";
		let resolver = ExpressionResolver.DEFAULT;
		expect(resolver.resolve(expression)).toBe(1);
		expect(typeof resolver.resolve(expression)).toBe("number");
	});	
	
	it("expression to 2 ${ 1 + 1}", function(){
		let expression = "${1 + 1}";
		let resolver = ExpressionResolver.DEFAULT;
		expect(resolver.resolve(expression)).toBe(2);
		expect(typeof resolver.resolve(expression)).toBe("number");
	});
	
	it("resolve ${ a + b} with context", function(){
		let context = { a : 1, b : 2 };
		let expression = "${a + b}";
		let resolver = ExpressionResolver.DEFAULT;
		let result = resolver.resolve(expression, context);
		expect(result).toBe(3);
		expect(typeof result).toBe("number");
	});
	
	it("resolve ${testFunction(text)} with context", function(){
		let context = { 
				testFunction : function(aText){
					return aText;
				},
				text : "hello world"
			};
		let expression = "${testFunction(text)}";
		let resolver = ExpressionResolver.DEFAULT;
		let result = resolver.resolve(expression, context);
		expect(result).toBe(context.text);
		expect(typeof result).toBe("string");
	});
	
	it("resolve ${undefined} default true", function(){
		let expression = "${undefined}";
		let resolver = ExpressionResolver.DEFAULT;
		let result = resolver.resolve(expression, {}, true);
		expect(result).toBe(true);
		expect(typeof result).toBe("boolean");
	});
});