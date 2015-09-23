'use strict';

var notificationHubService = require('./hub');

var notification = {
	'message': 'hello from node!', // message to display in notification
	'count': 5 // set badge iOS badge to this value
};

var responseHandler = (function (n) {
	return function (e, r) {
		if (e) {
			console.log(e);
			return;
		} else {
			console.log(r.statusCode, n);
		}
	};
})(notification);

notificationHubService.send('tag', notification, responseHandler);
