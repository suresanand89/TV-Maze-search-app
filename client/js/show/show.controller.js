angular.module('show.controller', [])
	.directive('showDetails',function () {
		return {
			restrict: 'EA',
			scope: {
				detail: '='
			},
			templateUrl: '../views/details.html'
		}
	})
	.controller('ShowController', function ($scope, showResource) {

		$scope.getShowFact = function () {
			showResource.get({
				type: 'shows',
				name: $scope.name,
			}, function (response) {
				try {
					$scope.shows = JSON.parse(response.text);
				}catch (err) {
					console.log(err);
				}	
			});	
		};

});