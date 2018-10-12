if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Sucessfully registered!');
	})
	.catch(function() {
		console.log('Oh no! Registration failed.');
	});
}
