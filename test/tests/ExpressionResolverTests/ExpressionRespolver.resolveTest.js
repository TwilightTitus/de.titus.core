import ExpressionResolver from "src/ExpressionResolver";

let resolver = ExpressionResolver.DEFAULT;
describe("ExpressionResolver.resolve", function() {	
	it("expression to true ${true}", function(){
		let expression = "${true}";
		let result = resolver.resolve(expression);
		expect(result).toBe(true);
		expect(typeof result).toBe("boolean");
	});	

	it("expression to 1 ${1}", function(){
		let expression = "${1}";
		let result = resolver.resolve(expression);
		expect(result).toBe(1);
		expect(typeof result).toBe("number");
	});	
	
	it("expression to 2 ${ 1 + 1}", function(){
		let expression = "${1 + 1}";
		let result = resolver.resolve(expression);
		expect(result).toBe(2);
		expect(typeof result).toBe("number");
	});
	
	it("expression ${ a + b} with context", function(){
		let context = { a : 1, b : 2 };
		let expression = "${a + b}";
		let result = resolver.resolve(expression, context);
		expect(result).toBe(3);
		expect(typeof result).toBe("number");
	});
	
	it("expression ${testFunction(text)} with context", function(){
		let context = { 
				testFunction : function(aText){
					return aText;
				},
				text : "hello world"
			};
		let expression = "${testFunction(text)}";
		let result = resolver.resolve(expression, context);
		expect(result).toBe(context.text);
		expect(typeof result).toBe("string");
	});
	
	it("expression ${undefined} default true", function(){
		let expression = "${undefined}";
		let result = resolver.resolve(expression, {}, true);
		expect(result).toBe(true);
		expect(typeof result).toBe("boolean");
	});
});