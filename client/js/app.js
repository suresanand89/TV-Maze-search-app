angular.module('app', 
	['ngRoute', 'ngResource', 'show.controller', 'show.service'])
	.filter('trustHTML',function ($sce) {
		return function (text) {
			return $sce.trustAsHtml(text);
		};
	})
	.config(['$routeProvider', '$locationProvider', 
		function ($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/search.html',
					controller: 'ShowController'
				})
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);

	