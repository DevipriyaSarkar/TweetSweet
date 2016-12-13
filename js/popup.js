var windowWidth = 600;
var windowHeight = 600;
var windowLeft = (screen.width/2)-(windowWidth/2);
var windowTop = (screen.height/2)-(windowHeight/2); 
var twitterWebIntentURL = "https://twitter.com/intent/tweet";

chrome.windows.create({url: twitterWebIntentURL, type: "panel", width: windowWidth, height: windowHeight, left: windowLeft, top: windowTop}, 
	function(window) {});
