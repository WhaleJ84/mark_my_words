chrome.runtime.onInstalled.addListener(function listenertst() {
	console.log("listenertst");
});
chrome.declarativeContent.onPageChanged.removeRules(undefined, function clricon() {
	chrome.declarativeContent.onPageChanged.addRules([{
		conditions: [new chrome.declarativeContent.PageStateMatcher({
			pageUrl: {hostEquals: 'mail.google.com'},
		})],
		actions: [new chrome.declarativeContent.ShowPageAction()]
	}]);
});
