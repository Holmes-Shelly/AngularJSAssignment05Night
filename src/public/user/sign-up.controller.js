(function() {
    'use strict';
    angular.module('public')
        .controller('SignUpController', SignUpController);
    SignUpController.$inject = ['MenuService'];

    function SignUpController(MenuService) {
        var signUpCtrl = this;
        signUpCtrl.checkDish = function(completed) {
            if (!signUpCtrl.user) {
                signUpCtrl.user = {};
            }
            MenuService.getUserDish(signUpCtrl.user.dish)
                .then(function(result) {
                    signUpCtrl.error = false;
                    if (completed) {
                        MenuService.setUserData(signUpCtrl.user);
                        signUpCtrl.completed = true;
                    } else {
                        signUpCtrl.valid = true;
                    }
                }).catch(function(e) {
                    signUpCtrl.valid = false;
                    signUpCtrl.error = true;
                    signUpCtrl.completed = false;
                });
        };
    }
})();
