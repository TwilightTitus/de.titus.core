import ExpressionResolver from "src/ExpressionResolver";

let resolver = ExpressionResolver.DEFAULT;
describe("ExpressionResolver.promise", function() {	
	it("expression to true ${true}", function(done){
		let expression = "${true}";
		resolver.promise(expression).then(function(result){
			expect(result).toBe(true);
			expect(typeof result).toBe("boolean");
			done();
		});
	});	

	it("expression to 1 ${1}", function(done){
		let expression = "${1}";
		resolver.promise(expression).then(function(result){
			expect(result).toBe(1);
			expect(typeof result).toBe("number");
			done();
		});
	});	
	
	it("expression to 2 ${ 1 + 1}", function(done){
		let expression = "${1 + 1}";
		resolver.promise(expression).then(function(result){
			expect(result).toBe(2);
			expect(typeof result).toBe("number");
			done();
		});
	});
	
	it("resolve ${ a + b} with context", function(done){
		let context = { a : 1, b : 2 };
		let expression = "${a + b}";
		resolver.promise(expression, context).then(function(result){
			expect(result).toBe(3);
			expect(typeof result).toBe("number");
			done();
		});
	});
	
	it("resolve ${testFunction(text)} with context", function(done){
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
			done();
		});
	});
	
	it("resolve ${undefined} default true", function(done){
		let expression = "${undefined}";
		resolver.promise(expression, {}, true).then(function(result){
			expect(result).toBe(true);
			expect(typeof result).toBe("boolean");
			done();
		});
	});
});