angular.module('show.service', [])
	.factory('showResource', function ($resource) {
		return $resource('/api/:type');
	});