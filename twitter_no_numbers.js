window.onload = stripit;
window.onclick = stripit;

function stripit() {
	//Find all elements with a specific attribute
	//Modified from http://stackoverflow.com/questions/8396541/javascript-to-get-elements-by-its-attribute
	var elements = [];
	elements = document.body.getElementsByTagName("*");

	for (var i = 0; i < elements.length; i++) {
		if (elements[i].getAttribute("data-element-term") != null) {  
			elements[i].innerHTML = elements[i].innerHTML.replace(/[0-9]/g, "");
			elements[i].innerHTML = elements[i].innerHTML.replace(",", "");
		}
	}

	//Find all elements that match certain classes for New Tweets bar and metadata
	var newtweets = document.getElementsByClassName("js-new-tweets-bar");
	var metadata = document.getElementsByClassName("metadata");

	var stripNumbers = function(array) {
		for(i=0;i<array.length;i++) {
			array[i].innerHTML = array[i].innerHTML.replace(/[0-9]/g, "");
			array[i].innerHTML = array[i].innerHTML.replace(",", "");
		}
	};

	stripNumbers(newtweets);
	stripNumbers(metadata);
}

