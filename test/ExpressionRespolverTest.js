import ExpressionResolver from "../src/ExpressionResolver";

describe("ExpressionResolver.resolve", function() {	
	it("expression to true ${true}", function(){
		let expression = "${true}";
		let resolver = ExpressionResolver.DEFAULT;
		expect(resolver.resolve(expression)).toBe(true);
		expect(typeof resolver.resolve(expression)).toBe("boolean");
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
		expect(resolver.resolve("${1 + 1}", context)).toBe(2);
		expect(typeof resolver.resolve(expression, context)).toBe("number");
	});
});