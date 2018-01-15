var connectedTimes = 0;
var quantityMessages = 0;

self.addEventListener('connect', function(event) {
	connectedTimes++;
	initPort(event.ports[0]);
}, false);

function initPort(port) {
	port.addEventListener('message', function (event) {
		quantityMessages++;
		var message = 'Workers conectados -> ' + connectedTimes + ' mensajes -> ' + quantityMessages;
		port.postMessage(message);
	})
	port.start();
}