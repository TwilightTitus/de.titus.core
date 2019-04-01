if (typeof $ !== "undefined")
	$.fn.tagName = function() {
		if (this.length > 1) {
			let result = [];
			this.each(function() {
				result.push(this.tagName.toLowerCase());
			});
			return result;
		} else if(this.length == 1)
			return $(this)[0].tagName.toLowerCase();
	};
