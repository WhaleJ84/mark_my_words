chrome.runtime.onInstalled.addListener(function listenerTest() {
	console.log("listenerTest");
});		
chrome.declarativeContent.onPageChanged.removeRules(undefined, function clearIcon() {
	chrome.declarativeContent.onPageChanged.addRules([{
		conditions: [new chrome.declarativeContent.PageStateMatcher()
			//pageUrl: {hostEquals: ''},hrome.runtime.onInstalled.addListener(function listenerTest() {
		],
		actions: [new chrome.declarativeContent.ShowPageAction()]
	}]);
});

