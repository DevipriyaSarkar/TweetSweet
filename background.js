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
			chrome.windows.create({url: twitterWebIntentURL + "?text=" + encodeURIComponent(data.selectionText), type: "panel"});
			break;
		case 'link' :
			chrome.windows.create({url: twitterWebIntentURL + "?url=" + encodeURIComponent(data.linkUrl), type: "panel"});
			break;
		case 'image' :
			chrome.windows.create({url: twitterWebIntentURL + "?url=" + encodeURIComponent(data.srcUrl), type: "panel"});
			break;
		case 'page' :
			chrome.windows.create({url: twitterWebIntentURL + "?text=" + encodeURIComponent(tab.title) + "&url=" + encodeURIComponent(data.pageUrl), type: "panel"});
			break;
	}
}