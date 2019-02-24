let Page = class {
	constructor() {
		this.baseTagValue = undefined;
		let baseTag = document.querySelector("base[href]");
		if (typeof baseTag !== "undefined")
			this.baseTagValue = baseTag.attributes["href"].value;
		this.files = {};
		this.data = {};
	};
	
	addJsFile(aUrl, aFunction, forceFunction) {
		if (Array.isArray(aUrl))
			return this.addJsFiles(aUrl, aFunction, forceFunction);
		
		if (typeof this.files[aUrl] === "undefined") {
			this.files[aUrl] = true;
			let element = document.createElement("script");
			element.setAttribute("type", "text/javascript");
			element.setAttribute("src", aUrl);
			document.body.append(element);
	
			if (aFunction != undefined)
				aFunction();
		} else if (forceFunction && aFunction != undefined) {
			aFunction();
		}
	};
	
	addJsFiles(aUrls, aFunction, forceFunction) {
		if (Array.isArray(aUrls)) {
			while(aUrls.length != 0){
				this.addJsFile(aUrls.shift(), (function() {
					this.addJsFiles(aUrls, aFunction, forceFunction)
				}).bind(this), true);
			}
		} else
			this.addJsFile(aUrls, aFunction, forceFunction);
	};
	
	addCssFile(aUrl) {
		if (Array.isArray(aUrl)) {
			this.addCssFiles(aUrl);
			return;
		}
	
		if (this.files[aUrl] == undefined) {
			this.files[aUrl] = true;
			let element = document.createElement("link");
			element.setAttribute("rel", "stylesheet");
			element.setAttribute("type", "text/css");
			element.setAttribute("href", aUrl);
			document.head.append(element);
		}
	};
	
	addCssFiles(aUrls) {
		if (Array.isArray(aUrls)) {
			for (i = 0; i < aUrls.length; i++) {
				this.addCssFile(aUrls[i]);
			}
		}
	};
	
	getUrl() {
		return de.titus.core.URL.getCurrentUrl();
	};
	
	buildUrl(aUrl) {
		let browser = this.detectBrowser();
		if (browser.ie && browser.ie < 11) {
			let tempUrl = aUrl.toLowerCase().trim();
			if (this.hasBaseTag && !tempUrl.indexOf("http:") == 0
					&& !tempUrl.indexOf("https:") == 0
					&& !tempUrl.indexOf("ftp:") == 0
					&& !tempUrl.indexOf("ftps:") == 0
					&& !tempUrl.indexOf("mailto:") == 0
					&& !tempUrl.indexOf("notes:") == 0
					&& !tempUrl.indexOf("/") == 0) {
				return this.baseTagValue + aUrl;
			}
		}
		return aUrl;
	};
	
	detectBrowser() {
		if (Page.BROWSER)
			return Page.BROWSER;
	
		Page.BROWSER = {};
		if (document.documentMode)
			Page.BROWSER.ie = document.documentMode;
		else
			Page.BROWSER.other = true;
	
		return Page.BROWSER;
	};
	
	setData(aKey, aValue) {
		this.data[aKey] = aValue;
	};
	
	getData(aKey) {
		return this.data[aKey];
	};
};

Page.getInstance = function() {
	if (typeof INSTANCE === "undefined") {
		Page.INSTANCE = new Page();
	}

	return Page.INSTANCE;
};

export default Page;