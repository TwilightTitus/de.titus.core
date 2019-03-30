const EventBindTestContainer = find(".event-bind-test");

EventBindTestContainer.on("click", function(){
	console.log("event on EventBindTestContainer:", arguments);
});
EventBindTestContainer.on("event-bind-test:call-action:test1", function(){
	console.log("Catch event \"event-bind-test:call-action:test1\":", arguments);
})
