let Matcher = function (aRegExp, aText) {
	
	this.internalRegex = aRegExp; 
	this.processingText = aText;
	this.currentMatch = undefined;
};

Matcher.prototype.isMatching = function() {
	return this.internalRegex.test(this.processingText);
};

Matcher.prototype.next = function() {
	this.currentMatch = this.internalRegex.exec(this.processingText);
	if (this.currentMatch instanceof Array) {
		this.processingText = this.processingText.replace(this.currentMatch[0],	"");
		return true;
	}
	return false;
};

Matcher.prototype.getMatch = function() {
	if (this.currentMatch instanceof Array)
		return this.currentMatch[0];
	return undefined;
};

Matcher.prototype.getGroup = function(aGroupId) {
	if (this.currentMatch instanceof Array)
		return this.currentMatch[aGroupId];
	return undefined;
};

Matcher.prototype.replaceAll = function(aReplaceValue, aText) {
	if (this.currentMatch instanceof Array)
		return aText.replace(this.currentMatch[0], aReplaceValue);
	return aText;
};

export default Matcher;