import Namespace from "src/Namespace";
import Utils from "test/helpers/Utils";

describe("Namespace", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
	
	it("namespace", function(done){
		let expected = Utils.uuid();
		Namespace("test.titus.Object", function(){
			return expected;
		});		
		expect(window.test.titus.Object).toBe(expected);
		delete window["test"];
		done();		
	});
	
	
	it("namespace", function(done){		
		let expected = {test : function(){}};
		Namespace("test.titus.Object", function(){
			return expected;
		});		
		expect(window.test.titus.Object).toEqual(expected);
		delete window["test"];
		done();		
	});
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});