

//Must Have CONFIG
var config = {
    name: "aSearch",
    type: "search",
    element:"advancedSearch",
    params:{
        searchType:"advanced"
    },
    url: "js/widgets/advancedSearch/template.html"
};

WIDGETS.createWidget(config);


//Core Functions
WIDGETS.aSearch.widget.controller("aSearchCtrl", function ($scope, $element, $attrs, ServerComm) {
    $scope.searchProducts = function () {
        console.log("Connecting to API...");
        $scope.url = "http://webservice.linknetwork.dk/api/en/search";
        $scope.sendData = {};
        $scope.ngModel = {};
        $scope.ngModel.loading = false;

        if ($scope.productName !== null || $scope.productName !== 0) {
            $scope.sendData.ProductName = $scope.productName;
        }

        if ($scope.categoryId !== null || $scope.categoryId !== 0) {
            $scope.sendData.CategoryId = $scope.categoryId;
        }

        console.log($scope.sendData);
        if ($scope.sendData.ProductName || $scope.sendData.CategoryId) {
            $scope.ngModel.loading = true;
            ServerComm.getData("post", $scope.url, $scope.sendData).
                    then(function (result) {
                        $scope.ngModel = result;
                        $scope.ngModel.loading = false;
                        console.log($scope.ngModel);
                    });
        }
        else {
            console.log("Product Name Required");
        }
    };
});