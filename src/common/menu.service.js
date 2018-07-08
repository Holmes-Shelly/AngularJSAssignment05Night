(function() {
    'use strict';
    angular.module('common')
        .service('MenuService', MenuService);
    MenuService.$inject = ['$http', 'APIBasePath'];

    function MenuService($http, APIBasePath) {
        var service = this;
        service.getCategories = function() {
            return $http.get(APIBasePath + '/categories.json').then(function(response) {
                return response.data;
            });
        };
        service.getMenuItems = function(category) {
            var config = {};
            if (category) {
                config.params = {
                    'category': category
                };
            }
            return $http.get(APIBasePath + '/menu_items.json', config).then(function(response) {
                return response.data;
            })
        };
		var userData = new Array();
        service.getUserDish = function(dish) {
            return $http.get(APIBasePath + '/menu_items/' + dish + '.json')
                .then(function success(response) {
                    return response.data;
                }, function error(response) {
                    throw new Error("Failed to fetch the desired result!");
                });
        };
        service.setUserData = function(userDetails) {
            userData = [];
            userData.push(userDetails);
        };
        service.getUserData = function() {
            return userData;
        };
    }
})();
