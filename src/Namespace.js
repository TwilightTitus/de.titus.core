let build = function(Gobal, aNames, aCallback) {
	let name = aNames.shift();
	if (typeof Gobal[name] === "undefined")
		Gobal[name] = {};

	if (aNames.length == 0)
		Gobal[name] = aCallback() || Gobal[name];
	else
		build(Gobal[name], aNames, aCallback);
};

let Namespace = function(aNamespace, aFunction) {
	build( (window || global || {}), aNamespace.split(".") ,aFunction);
};

Namespace.create = Namespace; 
export default Namespace;
