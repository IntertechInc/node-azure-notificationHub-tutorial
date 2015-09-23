'use strict';

var azure = require('azure');
var config = require('config');

var notificationHubService = azure.createNotificationHubService(config.notificationHubSettings.name,
	config.notificationHubSettings.connectionString);

module.exports = notificationHubService;
