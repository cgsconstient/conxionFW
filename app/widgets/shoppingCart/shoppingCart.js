
var shoppingCart = angular.module("w_shoppingCart",['ngAnimate']);
var shoppingCartTemplate = "app/widgets/shoppingCart/template.html";

shoppingCart.directive('folders', function ()
{  
    return{
        restrict: 'E',
        templateUrl: shoppingCartTemplate,
        replace: true,
        scope: {
           
        },
        controller: 'shoppingCartCtrl',
        link: function (scope, elm, attrs, ngmodel) {
            
        }
    };
});

shoppingCart.controller("shoppingCartCtrl", function ($scope, $element, $attrs, ServerComm)
{
    //Get all shoppingCart
    console.log("shoppingCart Widget");
    $scope.folderResult = {};
    var url = "http://webservice.linknetwork.dk/api/language_code/shoppingcart";
      ServerComm.getData("get", url).
        then(function (result)
        {
            $scope.folderResult = result;
            console.log("Get shoppingCart");
            console.log(result);
        });

    //Displaying no of shopping cart count based on input parameter
      $scope.shoppingCartCount = function ()
      {
          var url = "http://webservice.linknetwork.dk/api/language_code/shoppingcart/2";
          ServerComm.getData("get", url).
            then(function (result)
            {
                $scope.folderResult = result;
                console.log("shopping cart count");
                console.log(result);
            });
      };
});