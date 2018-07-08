(function() {
    'use strict';
    angular.module('common', [])
        .constant('APIBasePath', 'https://angularjs-course05-learning.herokuapp.com')
        .config(config);
    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }
})();
