let Matcher = class{
	constructor(aRegExp,	aText) {
	this.internalRegex = aRegExp;
	this.processingText = aText;
	this.currentMatch = undefined;
};

isMatching() {
	return this.internalRegex.test(this.processingText);
}

next() {
	this.currentMatch = this.internalRegex.exec(this.processingText);
	if (this.currentMatch != undefined) {
		this.processingText = this.processingText.replace(this.currentMatch[0],
				"");
		return true;
	}
	return false;
}

getMatch() {
	if (this.currentMatch != undefined)
		return this.currentMatch[0];
	return undefined;
}

getGroup(aGroupId) {
	if (this.currentMatch != undefined)
		return this.currentMatch[aGroupId];
	return undefined;
}

replaceAll (aReplaceValue, aText) {
	if (this.currentMatch != undefined)
		return aText.replace(this.currentMatch[0], aReplaceValue);
	return aText;
}
};

export default Matcher;