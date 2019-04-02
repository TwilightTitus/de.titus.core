(function($) {
	de.titus.core.ScreenObserver.addHandler({
	    "condition" : "true",
	    "activate" : function() {
		    console.log("screen handler", this)
		    $('#screen-data').text("");
		    $('#screen-data').text(JSON.stringify(this));
	    }
	});
})($);
