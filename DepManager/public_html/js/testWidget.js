
var testWidget = angular.module("w_testWidget",[]);
var twTemplate = "testWidget.html";

testWidget.directive('testWidget', function () {
    return{
        restrict: 'E',
        templateUrl: twTemplate,
        replace: true,
        scope: {
            cxWidget:'@'
        },
        controller: 'testCtrl',
        link: function (scope, elm, attrs) {
            
        }
    };
});

testWidget.controller("testCtrl",['ServerComm','$scope',function(ServerComm,$scope){
    console.log($scope.cxWidget);    
}]);