var formDiv = document.getElementById("update-form");
var newDiv = document.createElement("div");
formDiv.appendChild(newDiv);

var API_KEY = "829323d842a02dbe5bea3404b81b3aa9";
var LANG_VALUE = "en";
var OF_VAL = "json";

function checkSentiment(responseText) {
	var jsonObj = JSON.parse(responseText);
	if (jsonObj["status"]["msg"] === "OK") {
		switch(jsonObj["score_tag"]) {
			case "P+":	polarity = "Strong Positive";
						break;
			case "P":	polarity = "Positive";
						break;
			case "NEU":	polarity = "Neutral";
						break;
			case "N":	polarity = "Negative";
						break;
			case "N+":	polarity = "Strong Negative";
						break;
			case "NONE":	polarity = "Without Sentiment";
							break;
		}
		var resultDiv = document.getElementById("resultDiv");
		if (resultDiv) {
			resultDiv.parentNode.removeChild(resultDiv);
		}
		var resultDiv = document.createElement("div");
		resultDiv.setAttribute("id", "resultDiv");
		resultDiv.innerHTML = "Sentiment: " + polarity;
		newDiv.appendChild(resultDiv);	
	} else {
		alert("Error.");
	}
}

function addElements(){
	var emotionBtn = document.createElement("input");
	emotionBtn.type = "button";
	emotionBtn.setAttribute("id", "emotionBtn");
	emotionBtn.setAttribute("value", "Show emotion");
	emotionBtn.onclick = function() {
		var inputText = document.getElementById("status").value;
		var data = "key=" + API_KEY + "&lang=" + LANG_VALUE + "&txt=" + encodeURIComponent(inputText) +"&of=" + OF_VAL;

		var xhr = new XMLHttpRequest();

		xhr.addEventListener("readystatechange", function () {
		  if (this.readyState === this.DONE) {
			console.log(this.responseText);
			var result = checkSentiment(this.responseText);
		  }
		});

		xhr.open("POST", "https://api.meaningcloud.com/sentiment-2.1");
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.send(data);
	};
	newDiv.appendChild(emotionBtn);
}

addElements();