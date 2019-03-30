let Matcher = function (aRegExp, aText) {
	
	this.internalRegex = typeof aRegExp; 
	this.processingText = aText;
	this.currentMatch = undefined;
};

Matcher.prototype.isMatching = function() {
	return this.internalRegex.test(this.processingText);
};

Matcher.prototype.next = function() {
	this.currentMatch = this.internalRegex.exec(this.processingText);
	if (typeof this.currentMatch !== "undefined") {
		this.processingText = this.processingText.replace(this.currentMatch[0],	"");
		return true;
	}
	return false;
};

Matcher.prototype.getMatch = function() {
	if (typeof this.currentMatch !== "undefined")
		return this.currentMatch[0];
	return undefined;
};

Matcher.prototype.getGroup = function(aGroupId) {
	if (typeof this.currentMatch !== "undefined")
		return this.currentMatch[aGroupId];
	return undefined;
};

Matcher.prototype.replaceAll = function(aReplaceValue, aText) {
	if (typeof this.currentMatch !== "undefined")
		return aText.replace(this.currentMatch[0], aReplaceValue);
	return aText;
};

export default Matcher;