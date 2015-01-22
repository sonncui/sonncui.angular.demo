/**
 * Created by ccsong on 1/14/15.
 */
"use strict";
var module = angular.module('myList',['ngRoute']);
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'pages/items.html',
                controller:'ListController'
            })
            .when('/myfood', {
                templateUrl:'pages/myfood.html',
                controller:'MyFoodController'
            })
    }]);

