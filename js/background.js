var windowWidth = 600;
var windowHeight = 600;
var windowLeft = (screen.width/2)-(windowWidth/2);
var windowTop = (screen.height/2)-(windowHeight/2);

var contextList = ["selection", "link", "image", "page"];
var twitterWebIntentURL = "https://twitter.com/intent/tweet";

for(i = 0; i < contextList.length; i++) {
	var curContext = contextList[i];
	var curTitle = "Tweet Sweet: Share this " + curContext + " on your Twitter profile.";
	
	chrome.contextMenus.create({
		title: curTitle,
		contexts: [curContext],
		onclick: tweetFunction,
		id: curContext
	});
}

function tweetFunction(data, tab) {
	switch(data.menuItemId) {
		case 'selection' :
			chrome.windows.create({url: twitterWebIntentURL + "?text=" + encodeURIComponent(data.selectionText), 
			type: "panel", width: windowWidth, height: windowHeight, left: windowLeft, top: windowTop}, function(window) {});
			break;
		case 'link' :
			chrome.windows.create({url: twitterWebIntentURL + "?url=" + encodeURIComponent(data.linkUrl), 
			type: "panel", width: windowWidth, height: windowHeight, left: windowLeft, top: windowTop}, function(window) {});
			break;
		case 'image' :
			chrome.windows.create({url: twitterWebIntentURL + "?url=" + encodeURIComponent(data.srcUrl), 
			type: "panel", width: windowWidth, height: windowHeight, left: windowLeft, top: windowTop}, function(window) {});
			break;
		case 'page' :
			chrome.windows.create({url: twitterWebIntentURL + "?text=" + encodeURIComponent(tab.title) + "&url=" + encodeURIComponent(data.pageUrl), 
			type: "panel", width: windowWidth, height: windowHeight, left: windowLeft, top: windowTop}, function(window) {});
			break;
	}
}

chrome.browserAction.onClicked.addListener(function () {
	var windowWidth = 600;
	var windowHeight = 600;
	var windowLeft = (screen.width/2)-(windowWidth/2);
	var windowTop = (screen.height/2)-(windowHeight/2); 
	var twitterWebIntentURL = "https://twitter.com/intent/tweet";

	chrome.windows.create({url: twitterWebIntentURL, type: "panel", width: windowWidth, height: windowHeight, left: windowLeft, top: windowTop}, 
		function(window) {});
});