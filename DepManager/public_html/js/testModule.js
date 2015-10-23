/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var testWidget = angular.module('testModule', []);
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

angular.module('testModule').controller("testCtrl",['ServerComm','$scope',function(ServerComm,$scope){
    console.log($scope.cxWidget);    
    alert();
}]);