// our js
angular.module('swmadlibs', [])
    .constant('VERSION', 0.1)
    .controller('CtrlMadlibs', function(VERSION, $scope) {
	$scope.version = VERSION ;
	$scope.author = "";
    });
