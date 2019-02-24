import Matcher from "./Matcher";


let Regex = class {
		constructor(aRegex, aOptions) {
		this.internalRegex = new RegExp(aRegex, aOptions);
	}
	
	parse(aText) {
		return new Matcher(this.internalRegex, aText);
	};
};

export default Regex;