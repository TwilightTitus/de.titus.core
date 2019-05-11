import ExpressionResolver from "../../src/ExpressionResolver";

const resolver = ExpressionResolver.DEFAULT;
describe("ExpressionResolver.promiseText", function() {
	it("expression \"result: ${true}!\"", function(done){
		let expression = "result: ${true}!";
		resolver.promiseText(expression).then(function(result){
			expect(result).toBe("result: true!");
			expect(typeof result).toBe("string");
			done(); 
		});
	});
	
	it("expression to 2 ${ 1 + 1}", function(done){
		let expression = "result: ${1 + 1}!";
		resolver.promiseText(expression).then(function(result){
			expect(result).toBe("result: 2!");
			expect(typeof result).toBe("string");
			done();
		});
	});
	
	it("expression \"result: ${ a + b}!\" with context", function(done){
		let context = { a : 1, b : 2 };
		let expression = "result: ${ a + b}!";
		resolver.promiseText(expression, context).then(function(result){
			expect(result).toBe("result: 3!");
			expect(typeof result).toBe("string");
			done();
		});
	});
	
	it("expression \"result: ${a} + ${b} = ${a + b}!\" with context", function(done){
		let context = { a : 1, b : 2 };
		let expression = "result: ${a} + ${b} = ${a + b}!";
		resolver.promiseText(expression, context).then(function(result){
			expect(result).toBe("result: 1 + 2 = 3!");
			expect(typeof result).toBe("string");
			done();
		});
	});
	
	it("expression \"result: ${testFunction(text)}!\" with context", function(done){
		let context = { 
				testFunction : function(aText){
					return aText;
				},
				text : "hello world"
			};
		let expression = "result: ${testFunction(text)}!";
		resolver.promiseText(expression, context).then(function(result){
			expect(result).toBe("result: hello world!");
			expect(typeof result).toBe("string");
			done();
		});
	});
	

	it("expression \"result: ${value}!\" with no value and no default", function(done){
		let expression = "result: ${value}!";
		resolver.promiseText(expression, {}).then(function(result){
			expect(result).toBe("result: ${value}!");
			expect(typeof result).toBe("string");
			done();
		});
	});
	
	
	
	it("expression \"result: ${undefined}!\" default true", function(done){
		let expression = "result: ${undefined}!";
		resolver.promiseText(expression, {}, true).then(function(result){
			expect(result).toBe("result: true!");
			expect(typeof result).toBe("string");
			done();
		});
	});
});