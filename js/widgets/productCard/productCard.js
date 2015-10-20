/* 
 * Product Widget
 */


var productCard = angular.module("w_productCard",['ngAnimate']);
var productCardTemplate = "js/widgets/productCard/template.html";

productCard.directive('productCard', function () {
    return{
        restrict: 'E',
        templateUrl: productCardTemplate,
        replace: true,
        scope: {
            displayObject:"=",
            displayType:"@",
            displaySize:"@"
        },
        controller: 'ProductCardCtrl',
        link: function (scope, elm, attrs, ngmodel) {
            
        }
    };
});

productCard.controller("ProductCardCtrl", function ($scope, $element, $attrs) {
   //Set proper render settings
   
   if($scope.displayType === "card"){
       if($scope.displaySize === undefined || $scope.displaySize === null){
           $scope.displaySize = "col-sm-6 col-md-4 col-lg-3";
       }
   }
   else if(($scope.displayType === "list")){
       //Set Parameters for list
   }
   else{
       $scope.displaySize = "col-sm-6 col-md-4 col-lg-3";
   }
});