var request = new XMLHttpRequest ;
request.open('GET' , 'https:/randomuser.me/api' );

request.onreadystatechange = function(){
	
	if ( ( request.status === 200 ) && ( request.readyState === 4 ) ) {
		document.writeln(request.responseText);
		console.log(request);
	}
	
}


request.send();
