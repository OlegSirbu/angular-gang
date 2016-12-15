(function () {

    'use strict';

    angular
        .module('app.login.module')
        .controller('LoginController', LoginController);

    function LoginController(authService) {
        var vm = this;
        vm.authService = authService;
        
        vm.login = function () {
            authService.login(vm.username, vm.password, function (err) {
                if (err) {
                    console.log("something went wrong: " + err.message);
                }
            });
        };

    }

})();