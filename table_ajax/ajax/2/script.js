
var request = new XMLHttpRequest();
request.open('GET', 'cd_catalog.xml');

request.onreadystatechange = function()
{
	if ( ( request.status === 200 ) && (request.readyState === 4) ) 
	{
		// console.log(request.responseXML);
		var parent = document.getElementById('parent');
		var cdTag  = request.responseXML.getElementsByTagName('CD');

		var output = "<ul>";

		for (var i = 0; i < cdTag.length; i++) {
			
			output += "<li>" + cdTag[i].getElementsByTagName('TITLE')[0].firstChild.nodeValue + "</li>";

		}

		output += "</ul>";
		parent.innerHTML = output;


	}
}
request.send();
 
