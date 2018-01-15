function longTask(seconds) {
	seconds = seconds || 10;
	var actualTime = 0;
	var endTime = (new Date()).getTime() + seconds * 1000;
	while (actualTime < endTime ) {
		 actualTime = (new Date()).getTime();
	}
}

self.addEventListener('message', function() {
	longTask();
	self.postMessage('finish line');
}, false);