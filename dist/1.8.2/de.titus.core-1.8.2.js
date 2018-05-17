var de = de || {};
de.titus = de.titus || {};
de.titus.core = de.titus.core || {};
if (de.titus.core.Namespace == undefined) {
	de.titus.core.Namespace = {};
	/**
	 * creates a namespace and run the function, if the Namespace new
	 * 
	 * @param aNamespace
	 *            the namespace(requiered)
	 * @param aFunction
	 *            a function that be executed, if the namespace created (optional)
	 * 
	 * @returns boolean, true if the namespace created
	 */
	de.titus.core.Namespace.create = function(aNamespace, aFunction) {
		var namespaces = aNamespace.split(".");
		var currentNamespace = window;
		var namespaceCreated = false;
		for (var i = 0; i < namespaces.length; i++) {
			if (currentNamespace[namespaces[i]] == undefined) {
				currentNamespace[namespaces[i]] = {};
				namespaceCreated = true;
			}
			currentNamespace = currentNamespace[namespaces[i]];
		}
		if (namespaceCreated && aFunction != undefined) {
			aFunction();
		}
		
		return namespaceCreated;
	};
	
	/**
	 * exist the namespace?
	 * 
	 * @param aNamespace
	 *            the namespace(requiered)
	 * 
	 * @returns boolean, true if the namespace existing
	 */
	de.titus.core.Namespace.exist = function(aNamespace) {
		var namespaces = aNamespace.split(".");
		var currentNamespace = window;
		for (var i = 0; i < namespaces.length; i++) {
			if (currentNamespace[namespaces[i]] == undefined) {
				return false;
			}
			currentNamespace = currentNamespace[namespaces[i]];
		}
		return true;
	};
};de.titus.core.Namespace.create("de.titus.core.SpecialFunctions", function() {
	
	de.titus.core.SpecialFunctions = {};
	de.titus.core.SpecialFunctions.EVALRESULTVARNAME = {};
	de.titus.core.SpecialFunctions.EVALRESULTS = {};
	
	de.titus.core.SpecialFunctions.doEval = function(aStatement, aContext, aCallback) {
		if (aCallback) {
			de.titus.core.SpecialFunctions.doEvalWithContext(aStatement, (aContext || {}), undefined, aCallback);
		} else {
			if(aStatement != undefined && typeof aStatement !== "string" )
				return aStatement;
			else if (aStatement != undefined) {
				var varname = de.titus.core.SpecialFunctions.newVarname();
				var runContext = aContext || {};
				with (runContext) {
					eval("de.titus.core.SpecialFunctions.EVALRESULTS." + varname + " = " + aStatement + ";");
				}
				
				var result = de.titus.core.SpecialFunctions.EVALRESULTS[varname];
				de.titus.core.SpecialFunctions.EVALRESULTS[varname] = undefined;
				de.titus.core.SpecialFunctions.EVALRESULTVARNAME[varname] = undefined;
				return result;
			}
			
			return undefined;
		}
	};
	
	de.titus.core.SpecialFunctions.newVarname = function() {
		var varname = "var" + (new Date().getTime());
		if (de.titus.core.SpecialFunctions.EVALRESULTVARNAME[varname] == undefined) {
			de.titus.core.SpecialFunctions.EVALRESULTVARNAME[varname] = "";
			return varname;
		} else
			return de.titus.core.SpecialFunctions.newVarname();
	};
	
	/**
	 * 
	 * @param aStatement
	 * @param aContext
	 * @param aDefault
	 * @param aCallback
	 * @returns
	 */
	de.titus.core.SpecialFunctions.doEvalWithContext = function(aStatement, aContext, aDefault, aCallback) {
		if (aCallback != undefined && typeof aCallback === "function") {
			window.setTimeout(function() {
				var result = de.titus.core.SpecialFunctions.doEvalWithContext(aStatement, aContext, aDefault, undefined);
				aCallback(result, aContext, this);
			}, 10);
			
		} else {
			var result = de.titus.core.SpecialFunctions.doEval(aStatement, aContext);
			if (result == undefined) {
				return aDefault;
			}
			return result;
		}
	};
	
});
(function($) {
	$.fn.tagName = $.fn.tagName || function() {
		if (this.length == undefined || this.length == 0)
			return undefined;
		else if (this.length > 1) {
			return this.each(function() {
				return $(this).tagName();
			});
		} else {
			var tagname = this.prop("tagName");
			if(tagname != undefined && tagname != "")
				return tagname.toLowerCase();
			
			return undefined;				
		}
	};
})(jQuery);
(function($){
	if($.fn.Selector == undefined){
		$.fn.Selector = function() {
			var pathes = [];
			
			this.each(function() {
				var element = $(this);
				if(element[0].id != undefined && element[0].id != "")
					pathes.push("#" + element[0].id);
				else {
					var path;
					while (element.length) {
						var realNode = element.get(0), name = realNode.localName;
						if (!name) {
							break;
						}
						
						name = name.toLowerCase();
						var parent = element.parent();
						var sameTagSiblings = parent.children(name);
						
						if (sameTagSiblings.length > 1) {
							allSiblings = parent.children();
							var index = allSiblings.index(realNode) + 1;
							if (index > 0) {
								name += ':nth-child(' + index + ')';
							}
						}
						
						path = name + (path ? ' > ' + path : '');
						element = parent;
					}			
					pathes.push(path);
				}
			});
			
			return pathes.join(',');
		};
	};
})($);
de.titus.core.Namespace.create("de.titus.core.regex.Matcher", function() {
	de.titus.core.regex.Matcher = function(/* RegExp */aRegExp, /* String */aText) {
		this.internalRegex = aRegExp;
		this.processingText = aText;
		this.currentMatch = undefined;
	}

	de.titus.core.regex.Matcher.prototype.isMatching = /* boolean */function() {
		return this.internalRegex.test(this.processingText);
	};
	
	de.titus.core.regex.Matcher.prototype.next = /* boolean */function() {
		this.currentMatch = this.internalRegex.exec(this.processingText);
		if (this.currentMatch != undefined) {
			this.processingText = this.processingText.replace(this.currentMatch[0], "");
			return true;
		}
		return false;
	};
	
	de.titus.core.regex.Matcher.prototype.getMatch = /* String */function() {
		if (this.currentMatch != undefined)
			return this.currentMatch[0];
		return undefined;
	};
	
	de.titus.core.regex.Matcher.prototype.getGroup = /* String */function(/* int */aGroupId) {
		if (this.currentMatch != undefined)
			return this.currentMatch[aGroupId];
		return undefined;
	};
	
	de.titus.core.regex.Matcher.prototype.replaceAll = /*String*/ function(/* String */aReplaceValue, /* String */aText) {
		if (this.currentMatch != undefined)
			return aText.replace(this.currentMatch[0], aReplaceValue);
		return aText;
	};
});

de.titus.core.Namespace.create("de.titus.core.regex.Regex", function() {
	
	de.titus.core.regex.Regex = function(/* String */aRegex, /* String */aOptions) {
		this.internalRegex = new RegExp(aRegex, aOptions);
	};
	
	de.titus.core.regex.Regex.prototype.parse = /* de.titus.core.regex.Matcher */function(/* String */aText) {
		return new de.titus.core.regex.Matcher(this.internalRegex, aText);
	};
});
de.titus.core.Namespace.create("de.titus.core.ExpressionResolver", function() {
	
	de.titus.core.ExpressionResolver = function(varRegex) {
		this.regex = new de.titus.core.regex.Regex(varRegex || de.titus.core.ExpressionResolver.TEXT_EXPRESSION_REGEX);
	};
	
	/**
	 * static variables
	 */
	de.titus.core.ExpressionResolver.TEXT_EXPRESSION_REGEX = "\\$\\{([^\\$\\{\\}]*)\\}";
	
	/**
	 * @param aText
	 * @param aDataContext
	 * @param aDefaultValue
	 * 
	 * @returns
	 */
	de.titus.core.ExpressionResolver.prototype.resolveText = function(aText, aDataContext, aDefaultValue) {
		var text = aText;
		var matcher = this.regex.parse(text);
		while (matcher.next()) {
			var expression = matcher.getMatch();
			var expressionResult = this.internalResolveExpression(matcher.getGroup(1), aDataContext, aDefaultValue);
			if (expressionResult != undefined)
				text = matcher.replaceAll(expressionResult, text);
		}
		return text;
	}

	/**
	 * functions
	 */
	
	/**
	 * @param aExpression
	 * @param aDataContext
	 * @param aDefaultValue
	 * 
	 * @returns
	 */
	de.titus.core.ExpressionResolver.prototype.resolveExpression = function(aExpression, aDataContext, aDefaultValue) {
		var matcher = this.regex.parse(aExpression);
		if (matcher.next()) {
			return this.internalResolveExpression(matcher.getGroup(1), aDataContext, aDefaultValue);
		}
		
		return this.internalResolveExpression(aExpression, aDataContext, aDefaultValue);
	};
	
	/**
	 * @param aExpression
	 * @param aDataContext
	 * @param aDefaultValue
	 * 
	 * @returns
	 */
	de.titus.core.ExpressionResolver.prototype.internalResolveExpression = function(aExpression, aDataContext, aDefaultValue) {
		try {
			var result = de.titus.core.SpecialFunctions.doEvalWithContext(aExpression, aDataContext, aDefaultValue);
			if (result == undefined)
				return aDefaultValue;
			
			return result;
		} catch (e) {
			return undefined;
		}
	};
	
});
(function($) {
	de.titus.core.Namespace.create("de.titus.core.URL", function() {
		de.titus.core.URL = function(aProtocol, aDomain, aPort, aPath, theParameter, aMarker) {
			
			var protocol = aProtocol;
			var domain = aDomain;
			var port = aPort;
			var path = aPath;
			var parameters = theParameter;
			var marker = aMarker

			this.getMarker = function() {
				return marker;
			}

			this.setMarker = function(aMarker) {
				marker = aMarker;
			}

			this.getProtocol = function() {
				if (protocol == undefined) {
					protocol = "http";
				}
				return protocol;
			};
			
			this.setProtocol = function(aProtocol) {
				protokoll = aProtocol;
			};
			
			this.getDomain = function() {
				return domain;
			};
			
			this.setDomain = function(aDomain) {
				domain = aDomain;
			};
			
			this.getPath = function() {
				return path;
			};
			
			this.setPath = function(aPath) {
				path = aPath;
			};
			
			this.getPort = function() {
				if (port == undefined) {
					port = 80;
				}
				return port;
			};
			
			this.setPort = function(aPort) {
				
				port = aPort;
			};
			
			this.getParameters = function() {
				return parameters;
			};
			
			this.setParameters = function(theParameter) {
				parameters = theParameter;
			};
		};
		
		de.titus.core.URL.prototype.getParameter = function(aKey) {
			var value = this.getParameters()[aKey];
			if (value == undefined)
				return undefined;
			if (value.length > 1)
				return value;
			else
				return value[0];
		};
		
		de.titus.core.URL.prototype.getParameters = function(aKey) {
			return this.getParameters()[aKey];
		};
		
		de.titus.core.URL.prototype.addParameter = function(aKey, aValue, append) {
			if (this.getParameters()[aKey] == undefined) {
				this.getParameters()[aKey] = [];
			}
			if (!append && aValue == undefined) {
				this.getParameters()[aKey] = undefined;
			} else if (!append && aValue != undefined && aValue.length != undefined) {
				this.getParameters()[aKey] = aValue;
			} else if (append && aValue != undefined && aValue.length != undefined) {
				$.merge(this.getParameters()[aKey], aValue);
			} else if (!append && aValue != undefined) {
				this.getParameters()[aKey] = [ aValue ];
			} else if (append && aValue != undefined) {
				this.getParameters()[aKey].push(aValue);
			}
		};
		
		de.titus.core.URL.prototype.getQueryString = function() {
			if (this.getParameters() != undefined) {
				var parameters = this.getParameters();
				var result = "?";
				var isFirstParameter = true;
				for ( var propertyName in parameters) {
					if (!isFirstParameter) {
						result = result + "&";
					} else {
						isFirstParameter = false;
					}
					var parameterValues = parameters[propertyName];
					if (parameterValues.length == undefined) {
						result = result + encodeURIComponent(propertyName) + "=" + encodeURIComponent(parameterValues);
					} else {
						for (j = 0; j < parameterValues.length; j++) {
							if (j > 0) {
								result = result + "&";
							}
							result = result + encodeURIComponent(propertyName) + "=" + encodeURIComponent(parameterValues[j]);
						}
					}
				}
				return result;
			} else {
				return "";
			}
		};
		
		de.titus.core.URL.prototype.asString = function() {
			var result = this.getProtocol() + "://" + this.getDomain() + ":" + this.getPort();
			
			if (this.getPath() != undefined)
				result = result + this.getPath();
			
			if (this.getMarker() != undefined)
				result = result + "#" + this.getMarker();
			
			result = result + this.getQueryString();
			
			return result;
		};
		
		de.titus.core.URL.prototype.toString = function() {
			return this.asString();
		};
		
		de.titus.core.URL.fromString = function(aUrlString) {
			var tempUrl = aUrlString;
			var protocol = "http";
			var host;
			var port = 80;
			var path = "/";
			var marker = "";
			var parameterString;
			var splitIndex = -1;
			var parameter = {};
			
			var regex = new RegExp("\\?([^#]*)");
			var match = regex.exec(tempUrl);
			if (match != undefined)
				parameterString = match[1];
			
			var regex = new RegExp("#([^\\?#]*)");
			var match = regex.exec(tempUrl);
			if (match != undefined)
				marker = decodeURIComponent(match[1]);
			
			splitIndex = tempUrl.indexOf("://");
			if (splitIndex > 0) {
				protocol = tempUrl.substr(0, splitIndex);
				tempUrl = tempUrl.substr(splitIndex + 3);
			}
			
			var regex = new RegExp("([^\/:\\?#]*)");
			var match = regex.exec(tempUrl);
			if (match != undefined)
				host = match[1];
			
			var regex = new RegExp(":([^\\/\\?#]*)");
			var match = regex.exec(tempUrl);
			if (match != undefined) {
				port = match[1];
			} else if (protocol.toLowerCase() == "https")
				port = 443;
			else if (protocol.toLowerCase() == "ftp")
				port = 21;
			else if (protocol.toLowerCase() == "ftps")
				port = 21;
			
			var regex = new RegExp("(/[^\\?#]*)");
			var match = regex.exec(tempUrl);
			if (match != undefined) {
				path = match[1];
			}
			
			var regex = new RegExp("([^&\\?#=]*)=([^&\\?#=]*)");
			if (parameterString != undefined && "" != parameterString) {
				var parameterEntries = parameterString.split("&");
				for (i = 0; i < parameterEntries.length; i++) {
					var match = regex.exec(parameterEntries[i]);
					var pName = decodeURIComponent(match[1]);
					var pValue = decodeURIComponent(match[2]);
					parameter[pName] ? parameter[pName].push(pValue) : parameter[pName] = [ pValue ];
				}
			}
			
			return new de.titus.core.URL(protocol, host, port, path, parameter, marker);
			
		};
		de.titus.core.URL.getCurrentUrl = function() {
			if (de.titus.core.URL.STATIC__CURRENTURL == undefined) {
				de.titus.core.URL.STATIC__CURRENTURL = de.titus.core.URL.fromString(location.href);
			}
			
			return de.titus.core.URL.STATIC__CURRENTURL;
		};
	});
})($);
(function($) {
	de.titus.core.Namespace.create("de.titus.core.Page", function() {
		
		de.titus.core.Page = function() {
			this.baseTagValue = undefined;
			this.hasBaseTag = false;
			var baseTag = $('base');
			if (baseTag != undefined) {
				this.baseTagValue = baseTag.attr("href");
				this.hasBaseTag = true;
			}
			this.files = {};
			this.data = {};
		};
		
		// KONSTANTEN
		de.titus.core.Page.CSSTEMPLATE = '<link rel="stylesheet" type="text/css"/>';
		de.titus.core.Page.JSTEMPLATE = '<script type="text/javascript"></script>';
		
		de.titus.core.Page.prototype.addJsFile = function(aUrl, aFunction, forceFunction) {
			if ($.isArray(aUrl)) {
				return this.addJsFiles(aUrl, aFunction, forceFunction);
			}
			if (this.files[aUrl] == undefined) {
				this.files[aUrl] = true;
				var jsScript = $(de.titus.core.Page.JSTEMPLATE).clone();
				jsScript.attr("src", aUrl);
				$("head").append(jsScript);
				
				if (aFunction != undefined)
					aFunction();
			} else if (forceFunction && aFunction != undefined) {
				aFunction();
			}
		};
		
		de.titus.core.Page.prototype.addJsFiles = function(aUrls, aFunction, forceFunction) {
			if ($.isArray(aUrls)) {
				var url = aUrls.shift();
				if (aUrls.length != 0) {
					var $__THIS__$ = this;
					this.addJsFile(url, function() {
						$__THIS__$.addJsFiles(aUrls, aFunction, forceFunction)
					}, true);
				} else
					this.addJsFile(url, aFunction, forceFunction);
			} else {
				this.addJsFile(aUrls, aFunction, forceFunction);
			}
		};
		
		de.titus.core.Page.prototype.addCssFile = function(aUrl) {
			if ($.isArray(aUrl)) {
				this.addCssFiles(aUrl);
				return;
			}
			
			if (this.files[aUrl] == undefined) {
				this.files[aUrl] = true;
				var cssScript = $(de.titus.core.Page.CSSTEMPLATE).clone();
				cssScript.attr("href", aUrl);
				$("head").append(cssScript);
			}
		};
		
		de.titus.core.Page.prototype.addCssFiles = function(aUrls) {
			if ($.isArray(aUrls)) {
				for (i = 0; i < aUrls.length; i++) {
					this.addCssFile(aUrls[i]);
				}
			}
		};
		
		de.titus.core.Page.prototype.getUrl = function() {
			return de.titus.core.URL.getCurrentUrl();
		};
		
		de.titus.core.Page.prototype.buildUrl = function(aUrl) {
			var browser = this.detectBrowser();
			if (browser.ie && browser.ie < 11) {
				var tempUrl = aUrl.toLowerCase().trim();
				if (this.hasBaseTag && !tempUrl.indexOf("http:") == 0 && !tempUrl.indexOf("https:") == 0 && !tempUrl.indexOf("ftp:") == 0 && !tempUrl.indexOf("ftps:") == 0 && !tempUrl.indexOf("mailto:") == 0 && !tempUrl.indexOf("notes:") == 0 && !tempUrl.indexOf("/") == 0) {
					return this.baseTagValue + aUrl;
				}
			}
			return aUrl;
		};
		
		de.titus.core.Page.prototype.detectBrowser = function() {
			/* http://stackoverflow.com/a/21712356/2120330 */
			var result = {
			"ie" : false,
			"edge": false,
			"other" : false
			};
			var ua = window.navigator.userAgent;			
			if (ua.indexOf('MSIE ') > 0)
				result.ie = 8;
			else if (ua.indexOf("Trident/7.0") > 0)
				result.ie = 11;
			else if (ua.indexOf("Trident/6.0") > 0)
				result.ie = 10;
			else if (ua.indexOf("Trident/5.0") > 0)
				result.ie = 9;	
			else if (ua.indexOf('Edge/') > 0)
				result.edge = 1;	
			else
				result.other = true;
			
			return result;
		};
		
		de.titus.core.Page.prototype.setData = function(aKey, aValue) {
			this.data[aKey] = aValue;
		};
		
		de.titus.core.Page.prototype.getData = function(aKey) {
			return this.data[aKey];
		};
		
		de.titus.core.Page.getInstance = function() {
			if (de.titus.core.Page.INSTANCE == undefined) {
				de.titus.core.Page.INSTANCE = new de.titus.core.Page();
			}
			
			return de.titus.core.Page.INSTANCE;
		};
		
		if ($.fn.de_titus_core_Page == undefined) {
			$.fn.de_titus_core_Page = de.titus.core.Page.getInstance;
		}
		;
	});
})($);
de.titus.core.Namespace.create("de.titus.core.UUID", function() {
	de.titus.core.UUID = function(customSpacer) {
		var spacer = customSpacer || "-";
		var template = 'xxxxxxxx' + spacer + 'xxxx' + spacer + '4xxx' + spacer + 'yxxx' + spacer + 'xxxxxxxxxxxx';
		return template.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0
			var v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	};
});(function($) {
	de.titus.core.Namespace.create("de.titus.core.StringUtils", function() {
		de.titus.core.StringUtils = {};
		de.titus.core.StringUtils.DEFAULTS = {};
		de.titus.core.StringUtils.DEFAULTS.formatToHtml = {
		"tabsize" : 4,
		"tabchar" : "&nbsp;",
		"newlineTag" : "<br/>"
		};
		
		de.titus.core.StringUtils.DEFAULTS.trimTextLength = {
			"postfix" : "..."
		};
		
		de.titus.core.StringUtils.trimTextLength = function(aText, maxLength, theSettings) {
			if (aText == undefined || typeof aText !== "string" || aText == "")
				return aText;
			
			var settings = $.extend({}, theSettings, de.titus.core.StringUtils.DEFAULTS.trimTextLength);
			
			if (aText.length > maxLength) {
				var end = maxLength - settings.postfix.length;
				if ((aText.length - end) > 0)
					return aText.substring(0, end) + settings.postfix;
			}
			return aText;
		};
		
		de.titus.core.StringUtils.formatToHtml = function(aText, theSettings) {
			if (aText == undefined || typeof aText !== "string" || aText == "")
				return aText;
			
			var settings = $.extend({}, theSettings, de.titus.core.StringUtils.DEFAULTS.formatToHtml);
			var text = aText.replace(new RegExp("\n\r", "g"), "\n");
			var text = aText.replace(new RegExp("\r", "g"), "\n");
			var lines = text.split("\n");
			var text = "";
			for (var i = 0; i < lines.length; i++) {
				if (i != 0)
					text = text + settings.newlineTag;
				text = text + de.titus.core.StringUtils.preventTabs(lines[i], settings.tabsize, settings.tabchar);
			}
			return text;
		};
		
		de.titus.core.StringUtils.getTabStopMap = function(tabSize, tabString) {
			var tabstopMap = [];
			for (var i = 0; i <= tabSize; i++) {
				if (i == 0)
					tabstopMap[0] = "";
				else
					tabstopMap[i] = tabstopMap[i - 1] + tabString;
			}
			
			return tabstopMap;
		};
		
		de.titus.core.StringUtils.preventTabs = function(aText, theTabStops, theTabStopChar) {
			var tabstopMap = de.titus.core.StringUtils.getTabStopMap(theTabStops, theTabStopChar);
			var tabStops = theTabStops;
			var text = "";
			var tabs = aText.split("\t");
			for (var i = 0; i < tabs.length; i++) {
				if (tabs[i].length != 0 && i != 0) {
					var size = text.length;
					var tabSize = size % tabStops;
					text = text + tabstopMap[theTabStops - tabSize] + tabs[i];
				} else if (tabs[i].length == 0 && i != 0)
					text = text + tabstopMap[theTabStops];
				else
					text = text + tabs[i];
			}
			
			return text;
		};
		
		// This is the function.
		de.titus.core.StringUtils.format = function(aText, args) {
			var objects = arguments;
			return aText.replace(de.titus.core.StringUtils.format.VARREGEX, function(item) {
				var index = parseInt(item.substring(1, item.length - 1)) + 1;
				var replace;
				if (index > 0 && index < objects.length ) {
					replace = objects[index];
					if(typeof replace !== "string")
						replace = JSON.stringify(replace);
				} else if (index === -1) {
					replace = "{";
				} else if (index === -2) {
					replace = "}";
				} else {
					replace = "";
				}
				return replace;
			});
		};
		de.titus.core.StringUtils.format.VARREGEX = new RegExp("{-?[0-9]+}", "g");
		
		$.fn.de_titus_core_StringUtils = de.titus.core.StringUtils;
	});
})($);
(function($) {
	de.titus.core.Namespace.create("de.titus.core.EventBind", function() {
		"use strict";
		de.titus.core.EventBind = function(anElement, aContext) {
			if (anElement.data(de.titus.core.EventBind.STATE.FINISHED) == undefined) {
				
				var eventType = anElement.attr("event-type");
				if (eventType == undefined || eventType.trim().length == 0) {
					anElement.data(de.titus.core.EventBind.STATE.FINISHED, de.titus.core.EventBind.FINISHEDSTATE.FAIL);
					return this;
				}
				
				var action = anElement.attr("event-action");
				if (action == undefined || action.trim().length == 0) {
					anElement.data(de.titus.core.EventBind.STATE.FINISHED, de.titus.core.EventBind.FINISHEDSTATE.FAIL);
					return this;
				}
				
				var data = undefined;
				var eventData = anElement.attr("event-data");
				if (eventData != undefined && eventData.trim().length > 0){
					data = de.titus.core.EventBind.EXPRESSIONRESOLVER.resolveExpression(eventData, aContext , {});
				}
				else if(aContext != undefined){
					data = $().extend({}, aContext);
				}
				else {
					data = {};
				}
				
				anElement.on(eventType, null, data, de.titus.core.EventBind.$$__execute__$$);
				anElement.data(de.titus.core.EventBind.STATE.FINISHED, de.titus.core.EventBind.FINISHEDSTATE.READY);
				return this;
			}
		};
		
		de.titus.core.EventBind.EXPRESSIONRESOLVER = new de.titus.core.ExpressionResolver();
		de.titus.core.EventBind.STATE = {
			FINISHED : "$$EventBind.FINISHED$$"
		};
		de.titus.core.EventBind.FINISHEDSTATE = {
		FAIL : "fail",
		READY : "ready"
		};
		
		de.titus.core.EventBind.$$__execute__$$ = function(anEvent) {
			var element = $(this);
			if (element.attr("event-prevent-default") != undefined)
				anEvent.preventDefault();
			if (element.attr("event-stop-propagation") != undefined)
				anEvent.stopPropagation();
			
			var action = element.attr("event-action");
			action = de.titus.core.EventBind.EXPRESSIONRESOLVER.resolveExpression(action, anEvent.data, undefined);
			if (typeof action === "function"){
				var args = Array.from(arguments);
				if(args != undefined && args.length >= 1 && anEvent.data != undefined){
					args.splice(1,0,anEvent.data);
				}
				action.apply(action, args);
			}
			
			return !anEvent.isDefaultPrevented();
		};
		
		$.fn.de_titus_core_EventBind = function(aContext) {
			if (this.length == 1)
				return de.titus.core.EventBind(this, aContext);
			else if (this.length >= 1) {
				return this.each(function() {
					return $(this).de_titus_core_EventBind(aContext);
				});
			}
		};
		
		$(document).ready(function() {
			var hasAutorun = $("[event-autorun]");
			if (hasAutorun != undefined && hasAutorun.length != 0) {
				$("[event-autorun]").de_titus_core_EventBind();
				$("[event-autorun]").find("[event-type]").de_titus_core_EventBind();
				
				var observer = new MutationObserver(function(mutations) {
					mutations.forEach(function(mutation) {
						for (var i = 0; i < mutation.addedNodes.length; i++) {
							if (mutation.addedNodes[i].nodetype != Node.TEXT_NODE) {
								$(mutation.addedNodes[i]).find("[event-type]").de_titus_core_EventBind();
							}
						}
					});
				});
				
				// configuration of the observer:
				var config = {
				attributes : false,
				childList : true,
				subtree : true,
				characterData : false
				};
				
				// pass in the target node, as well as the observer options
				observer.observe(document.querySelector("[event-autorun]"), config);
			}
		});
	});
})($, document);
(function($) {
	"use strict";
	de.titus.core.Namespace.create("de.titus.core.Converter", function() {
		de.titus.core.Converter.xmlToJson = function(aNode) {
			// Create the return object
			var obj = {};
			if (aNode.nodeType == 1 || aNode.nodeType == 9) { // element
				// do attributes
				if (aNode.attributes != undefined && aNode.attributes.length > 0) {
					var attributes = {};
					for (var j = 0; j < aNode.attributes.length; j++) {
						var attribute = aNode.attributes.item(j);
						attributes[attribute.nodeName] = attribute.nodeValue;
					}
					obj["@attributes"] = attributes;
				}
			}else if (aNode.nodeType == 3 || aNode.nodeType == 4) { // text
				return aNode.nodeValue;
			}
			
			// do children
			if (aNode.hasChildNodes()) {
				if (aNode.childNodes.length == 1){
					var item = aNode.childNodes.item(0);
					if(item.nodeType != 3 &&  item.nodeType != 4) {
						obj[item.nodeName] =  de.titus.core.Converter.xmlToJson(item);
					}
					else if ((item.nodeType == 3 || item.nodeType == 4) && obj["@attributes"] == undefined) {
						return  de.titus.core.Converter.xmlToJson(item);
					}
					else if ((item.nodeType == 3 || item.nodeType == 4) && obj["@attributes"] != undefined) {
						obj.text =  de.titus.core.Converter.xmlToJson(item);
					}
				}
				else {
					for (var i = 0; i < aNode.childNodes.length; i++) {
						var item = aNode.childNodes.item(i);
						if (item.nodeType == 1) {	
							var nodeName = item.nodeName;
							if (typeof (obj[nodeName]) == "undefined") {
								obj[nodeName] = de.titus.core.Converter.xmlToJson(item);
							} else {
								if (typeof (obj[nodeName].push) == "undefined") {
									var old = obj[nodeName];
									obj[nodeName] = [];
									obj[nodeName].push(old);
								}
								obj[nodeName].push(de.titus.core.Converter.xmlToJson(item));
							}
						}
					}
				}
			}
			return obj;
		};
		
	});
})($);