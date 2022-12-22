var request = new XMLHttpRequest();
request.open('GET', 'test.json');

request.onreadystatechange = function()
{
	if ( ( request.status === 200 ) && (request.readyState === 4) ) 
	{
 		var items = JSON.parse(request.responseText);
 		var parent = document.getElementById('parent');
 		var output = "<ul>";

 		for ( var key in items.colors ) {
 			output += "<li>" + items.colors[key].color + "</li>";
 		}

 		output += "</ul>";
 		parent.innerHTML = output;

	}
}
request.send();
