function longTask() {
	var actualTime = 0;
	var endTime = (new Date()).getTime() + 10000;
	while (actualTime < endTime ) {
		actualTime = (new Date()).getTime();
	}
}

self.addEventListener('message', function() {
	longTask();
	self.postMessage('finish line');
}, false);