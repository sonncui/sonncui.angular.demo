/**
 * Created by ccsong on 1/22/15.
 */
module.controller('ListController',['$scope','$rootScope','$location',function($scope,$rootScope,$location){
    $scope.items = [{text:"chicken",selected:false},{text:"beaf",selected:false},{text:"veg",selected:false}];

    $scope.addItem = function(){
        $scope.items.push({text:$scope.addText,selected:false});
        $scope.addText = '';
    };

    $scope.select = function(){
        for(var item in $scope.items){
            if($scope.items[item].selected == true){
                $rootScope.myFood = $scope.items[item].text;
            }
        }
        $location.path('/myfood');
    };
}]);