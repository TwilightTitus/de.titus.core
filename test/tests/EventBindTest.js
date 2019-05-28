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
			expect(event.delegatedEvent.type).toBe("click");
			
			done();
		});		
		
		find("#eventbind-test-1 button").first().trigger("click");
	});
	
	
	it("action", function(done){
		let container = find("#eventbind-test-2").first();
		window.test = {
			action : function(event){
				console.log("arguments", arguments);	
				expect(event.type).toBe("click");
				done();
			}
		}; 		
		
		find("#eventbind-test-2 button").first().trigger("click");
	});
	
	afterAll(function(done){
		window.document.body.innerHTML = "";
		done();
	});
});