const buildFunctionName = function(aName) {
	return aName.replace(/\./g, "_");
};
const createInstance = function(aName, aFunctionName, aConstructor, aData) {
	if (this.length == 0)
		return;
	else if (this.length > 1) {
		let result = [];
		this.each((function(aElement) {
			this.push(aElement[aFunctionName](aData));
		}).bind(result));
		return result;
	} else {
		let component = this.data(aName);
		if (!component) {
			component = new aConstructor(this, aData);
			this.data(aName, component);
		}

		return component;
	}
};

const Component = function(aName, aConstructor) {
	if(!$){
		let functionName = buildFunctionName(aName);
		$.fn[functionName] = createInstance.bind(aName, functionName, aConstructor);
	}
};

export default Component;
