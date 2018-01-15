var worker;
var buttonTask = document.getElementById('long-task');
var buttonTaskWorker = document.getElementById('long-task-worker');
var buttonMessage = document.getElementById('show-message');

function longTask() {
	var actualTime = 0;
	var endTime = (new Date()).getTime() + 10000;
	while (actualTime < endTime ) {
		 actualTime = (new Date()).getTime();
	}
}

function runWorker() {
	if (!window.Worker ) {
		console.log('Web Worker no disponible');
		return;
	}

	if (!worker) {
		worker = new Worker('worker.js');
		worker.addEventListener('message', function(e) {
			console.log('Se ha terminado la ejecución del trabajo');
		}, false);
	}

	worker.postMessage('run');
}

function showMessage() {
	alert("Soy un mensaje y me muestro :3");
}

buttonTask.addEventListener('click', longTask);
buttonTaskWorker.addEventListener('click', runWorker);
buttonMessage.addEventListener('click', showMessage);