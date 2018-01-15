var buttonTask = document.getElementById('long-task');
var buttonTaskWorker = document.getElementById('long-task-worker');
var buttonMessage = document.getElementById('show-message');

function longTask(seconds) {
	seconds = seconds || 10;
	var actualTime = 0;
	var endTime = (new Date()).getTime() + seconds * 1000;
	while (actualTime < endTime ) {
		 actualTime = (new Date()).getTime();
	}
}

function runWorker() {
	if (!window.Worker ) {
		alert('Web Worker no disponible');
		return;
	}

	var worker = new Worker('worker.js');
	worker.addEventListener('message', function(e) {
		console.log('Se ha terminado la ejecución del trabajo');
	}, false);
	worker.postMessage('run');
}

function showMessage() {
	alert("Soy un mensaje y me muestro :3");
}

buttonTask.addEventListener('click', longTask.bind(null, 10));
buttonTaskWorker.addEventListener('click', runWorker);
buttonMessage.addEventListener('click', showMessage);