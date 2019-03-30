import Matcher from "./Matcher";

const Regex = function(aRegex, aOptions) {
	this.internalRegex = new RegExp(aRegex, aOptions);
};	
Regex.prototype.parse = function(aText) {
	return new Matcher(this.internalRegex, aText);
};
export default Regex;