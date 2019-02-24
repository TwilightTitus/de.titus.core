let URL = class {
	constructor(aProtocol, aDomain, aPort, aPath, theParameter, aMarker) {	
		this.protocol = aProtocol || "http";
		this.domain = aDomain;
		this.port = aPort;
		this.path = aPath;
		this.parameters = theParameter;
		this.marker = aMarker	
	};
	
	getParameter(aKey) {
		let value = this.parameters[aKey];
		if (typeof value !== "undefined")
			return Array.isArray(value) ? value[0] : value;
	};
	
	getParameters(aKey) {
		return this.parameters[aKey];
	};
	
	addParameter(aKey, aValue, append) {
		if (typeof this.parameters[aKey] === "undefined") 
			this.parameters[aKey] = [];
		if (!append && typeof aValue === "undefined") 
			this.parameters[aKey] = undefined;
		 else if (!append && typeof aValue !== "undefined" && typeof aValue.length !== "undefined")
			this.parameters[aKey] = aValue;
		 else if (append && typeof aValue !== "undefined" && typeof aValue.length !== "undefined")
			$.merge(this.parameters[aKey], aValue);// @TODO $.merge entfernen
		 else if (!append && typeof aValue !== "undefined")
			this.parameters[aKey] = [ aValue ];
		 else if (append && typeof aValue !== "undefined") 
			this.parameters[aKey].push(aValue);		
	};
	
	getQueryString() {
		if (typeof this.parameters !== "undefined") {
			let result = "?";
			let isFirstParameter = true;
			for (let propertyName in this.parameters) {
				if (!isFirstParameter) {
					result = result + "&";
				} else {
					isFirstParameter = false;
				}
				let parameterValues = this.parameters[propertyName];
				if (typeof parameterValues.length === "undefined")
					result = result + encodeURIComponent(propertyName) + "="
							+ encodeURIComponent(parameterValues);
				else {
					for (j = 0; j < parameterValues.length; j++) {
						if (j > 0) {
							result = result + "&";
						}
						result = result + encodeURIComponent(propertyName) + "="
								+ encodeURIComponent(parameterValues[j]);
					}
				}
			}
			return result;
		} else {
			return "";
		}
	};
	
	getMarkerString() {
		if (typeof this.marker !== "undefined")
			return "#" + this.marker	
		return "";
	};
	
	asString() {
		let result = this.protocol + "://" + this.domain + ":" + this.port;	
		if (typeof this.path !== "undefined")
			result = result + this.path;
	
		result = result + this.getQueryString() + this.getMarkerString();
	
		return result;
	};
	
	toString() {
		return this.asString();
	};	
};

URL.fromString = function(aUrlString) {
	let tempUrl = aUrlString;
	let protocol = "http";
	let host = undefined;
	let port = 80;
	let path = "/";
	let marker = "";
	let parameterString = undefined;
	let splitIndex = -1;
	let parameter = {};

	let match = new RegExp("\\?([^#]*)").exec(tempUrl);
	if (typeof match !== "undefined")
		parameterString = match[1];

	match = new RegExp("#([^\\?#]*)").exec(tempUrl);
	if (typeof match !== "undefined")
		marker = decodeURIComponent(match[1]);

	splitIndex = tempUrl.indexOf("://");
	if (splitIndex > 0) {
		protocol = tempUrl.substr(0, splitIndex);
		tempUrl = tempUrl.substr(splitIndex + 3);
	}

	match = new RegExp("([^\/:\\?#]*)").exec(tempUrl);
	if (typeof match !== "undefined")
		host = match[1];

	match = new RegExp(":([^\\/\\?#]*)").exec(tempUrl);
	if (typeof match !== "undefined")
		port = match[1];
	else if (protocol.toLowerCase() == "https")
		port = 443;
	else if (protocol.toLowerCase() == "ftp")
		port = 21;
	else if (protocol.toLowerCase() == "ftps")
		port = 21;

	match = new RegExp("(/[^\\?#]*)").exec(tempUrl);
	if (typeof match !== "undefined")
		path = match[1];

	let regex = new RegExp("([^&\\?#=]*)=([^&\\?#=]*)");
	if (typeof parameterString !== "undefined" && "" != parameterString) {
		let parameterEntries = parameterString.split("&");
		for (i = 0; i < parameterEntries.length; i++) {
			let match = regex.exec(parameterEntries[i]);
			let pName = decodeURIComponent(match[1]);
			let pValue = decodeURIComponent(match[2]);
			parameter[pName] ? parameter[pName].push(pValue)
					: parameter[pName] = [ pValue ];
		}
	}

	return new URL(protocol, host, port, path, parameter, marker);
};

URL.getCurrentUrl = function() {
	if (URL.STATIC__CURRENTURL == undefined) {
		URL.STATIC__CURRENTURL = URL.fromString(location.href);
	}

	return URL.STATIC__CURRENTURL;
};

export default URL;
