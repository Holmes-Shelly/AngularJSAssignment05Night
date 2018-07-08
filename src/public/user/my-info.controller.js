(function() {
    'use strict';
    angular.module('public')
        .controller('MyInfoController', MyInfoController);
    MyInfoController.$inject = ['MenuService'];

    function MyInfoController(MenuService) {
        var myInfoCtrl = this;
        myInfoCtrl.myInfo = MenuService.getUserData();
        if (myInfoCtrl.myInfo.length > 0) {
            MenuService.getUserDish(myInfoCtrl.myInfo[0].dish)
                .then(function(result) {
                    myInfoCtrl.menuItem = result;
                });
        }
    }
})();
