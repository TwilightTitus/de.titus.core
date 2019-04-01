if (typeof $ !== "undefined")
	$.fn.Selector = function() {		
		if (this.length > 1) {
			let result = [];
			this.each(function(aElement) {
				result.push(this.selector());
			});
			return result;
		} else if (this.length == 1)
			return this[0].selector();
	};