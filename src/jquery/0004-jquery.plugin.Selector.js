(function($){
	if(typeof $ !== "undefined")
		$.fn.Selector = function() {
			var pathes = [];
			
			this.each(function() {
				let element = $(this);
				if(element[0].id != undefined && element[0].id != "")
					pathes.push("#" + element[0].id);
				else {
					let path;
					while (element.length) {
						var realNode = element.get(0), name = realNode.localName;
						if (!name)
							break;
						
						name = name.toLowerCase();
						let parent = element.parent();
						let sameTagSiblings = parent.children(name);
						
						if (sameTagSiblings.length > 1) {
							allSiblings = parent.children();
							let index = allSiblings.index(realNode) + 1;
							if (index > 0) 
								name += ':nth-child(' + index + ')';
						}
						
						path = name + (path ? ' > ' + path : '');
						element = parent;
					}			
					pathes.push(path);
				}
			});
			
			return pathes.join(',');
		};
})($);
