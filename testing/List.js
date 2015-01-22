/**
 * Created by ccsong on 1/14/15.
 */
"use strict";
angular.module('myList',['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'pages/firstPage.html',
                controller:'ListController'
            })
            .when('/myfood', {
                templateUrl:'pages/myfood.html',
                controller:'MyFoodController'
            })
    }])
    .controller('ListController',['$scope','$location',function($scope,$location){
        $scope.items = [{text:"chicken",selected:false},{text:"beaf",selected:false},{text:"veg",selected:false}];

        $scope.addItem = function(){
            $scope.items.push({text:$scope.addText,selected:false});
            $scope.addText = '';
        };

        $scope.select = function(){
            for(var item in $scope.items){
                if($scope.items[item].selected == true){
                    $scope.myFood = $scope.items[item].text;
                }
            }
            $location.path('/myfood');
        };
    }]);
