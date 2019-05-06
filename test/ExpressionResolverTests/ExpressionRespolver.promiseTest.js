import ExpressionResolver from "../../src/ExpressionResolver";

let resolver = ExpressionResolver.DEFAULT;
describe("ExpressionResolver.promise", function() {	
	it("expression to true ${true}", function(){
		let expression = "${true}";
		resolver.promise(expression).then(function(result){
			expect(result).toBe(true);
			expect(typeof result).toBe("boolean");
		});
	});	

	it("expression to 1 ${1}", function(){
		let expression = "${1}";
		resolver.promise(expression).then(function(result){
			expect(result).toBe(1);
			expect(typeof result).toBe("number");
		});
	});	
	
	it("expression to 2 ${ 1 + 1}", function(){
		let expression = "${1 + 1}";
		resolver.promise(expression).then(function(result){
			expect(result).toBe(2);
			expect(typeof result).toBe("number");
		});
	});
	
	it("resolve ${ a + b} with context", function(){
		let context = { a : 1, b : 2 };
		let expression = "${a + b}";
		resolver.promise(expression, context).then(function(result){
			expect(result).toBe(3);
			expect(typeof result).toBe("number");
		});
	});
	
	it("resolve ${testFunction(text)} with context", function(){
		let context = { 
				testFunction : function(aText){
					return aText;
				},
				text : "hello world"
			};
		let expression = "${testFunction(text)}";
		resolver.promise(expression, context).then(function(result){
			expect(result).toBe(context.text);
			expect(typeof result).toBe("string");
		});
	});
	
	it("resolve ${undefined} default true", function(){
		let expression = "${undefined}";
		resolver.promise(expression, {}, true).then(function(result){
			expect(result).toBe(true);
			expect(typeof result).toBe("boolean");
		});
	});
});