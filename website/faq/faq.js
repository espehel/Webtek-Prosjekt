
window.addEventListener("load", function(event){

	var faqList = document.getElementById('faqList');

	if (window.XMLHttpRequest) {// for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
	else {// for IE6, IE5
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

xmlhttp.open("GET","faq.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

var x=xmlDoc.getElementsByTagName("item");
console.log(x);
for (i=0;i<x.length;i++)
  { 
	var li = document.createElement("li");
	var question = document.createElement("p");
  	question.appendChild(document.createTextNode(x[i].getElementsByTagName("question")[0].childNodes[0].nodeValue));
  	var answer = document.createElement("p");
  	answer.appendChild(document.createTextNode(x[i].getElementsByTagName("answer")[0].childNodes[0].nodeValue));
	li.appendChild(getHeader("Question:"))
  	li.appendChild(question);
	li.appendChild(getHeader("Answer:"))
  	li.appendChild(answer);
  	faqList.appendChild(li);
  }

});

function getHeader(text){
	var h = document.createElement("h3");
	h.appendChild(document.createTextNode(text));
	return h;
}
