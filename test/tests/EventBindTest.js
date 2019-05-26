import Namespace from "src/EventBind";
import Utils from "test/helpers/Utils";

describe("EventBind", function() {
	beforeAll(function(done){
		window.document.body.innerHTML = window.__html__["test/sites/EventBindTest.html"];
		done();
	});
		
	it("delegation", function(done){
		let container = find("#eventbind-test-1").first();		
		container.on("eventbind-test-1", function(event){
			console.log("arguments", arguments);
			
			expect(event.delegatedEvent).toBeDefined();
			
			done();
		});		
		
		find("#eventbind-test-1 button").first().trigger("click");
	});
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});