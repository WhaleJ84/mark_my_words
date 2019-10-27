chrome.runtime.onInstalled.addListener(function listenerTest() {
		console.log("listenerTest");
});		
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function clearIcon() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {hostEquals: 'extensions'},
			})
		],
		actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});

