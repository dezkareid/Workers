var workersDetailsElement = document.getElementById('workers-details');

function addWorkerToButton(buttonId) {
	var worker, button = document.getElementById(buttonId);
	button.addEventListener('click', function (e) {
		if (!worker) { 
			worker = createWorker();
			button.textContent = 'Llamar Worker ' + button.dataset.worker;
		} else {
			worker.port.postMessage('init worker');	
		}
	});
}

function createWorker() {
	if (!window.SharedWorker)
		return null
	var worker = new SharedWorker('shared.js');
	worker.port.addEventListener('message', setCounterMessage, false);
	worker.port.start();
	return worker;
}

function setCounterMessage(e) {
	workersDetailsElement.textContent =  e.data;
}

addWorkerToButton('call-worker-1');
addWorkerToButton('call-worker-2');