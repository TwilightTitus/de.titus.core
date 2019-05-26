import URL from "src/URL";

const TESTURL = "https://url.test.com/test?prop1=value1&prop2=value2&prop2=value3#hash-marker";
describe("url", function() {	
	it("fromString", function(){		
		let url = URL.fromString(TESTURL);
		
		expect(url.protocol).toBe("https");
		expect(url.domain).toBe("url.test.com");
		expect(url.port).toBe(443);
		expect(url.path).toBe("/test");
	});
});