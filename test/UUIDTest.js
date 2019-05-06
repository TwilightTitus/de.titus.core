import UUID from "../src/UUID";

const buildRegex = function(spacer){
	return new RegExp("^\\w{8,8}" + spacer + "\\w{4,4}" + spacer + "\\w{4,4}" + spacer + "\\w{4,4}" + spacer + "\\w{12,12}$");
};

describe("UUID", function() {	
	it(" with \"-\" spacer", function(){		
		let uuid = UUID("-");
		expect(buildRegex("-").test(uuid)).toBe(true);		
	});
	it(" with no spacer", function(){		
		let uuid = UUID("");
		expect(buildRegex("").test(uuid)).toBe(true);		
	});
});