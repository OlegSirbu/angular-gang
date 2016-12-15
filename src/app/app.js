(function () {
    angular.module('app',
        [
            'app.core',
            'app.login.module',
            'app.items.module'
        ]).config(
        /* @ngInject */
        function ($stateProvider, lockProvider,  $urlRouterProvider) {
            $stateProvider
                .state('items', {
                    url: "/",
                    controller: "ItemsController as vm",
                    templateUrl: "items.html"
                })
                .state('login', {
                    url: '/login',
                    controller: 'LoginController as vm',
                    templateUrl: 'login.html'
                });

            lockProvider.init({
                clientID: "JyQUHwycwwUQ79Q9XuRBsBe7GefpYs06",
                domain:  "levi9-test.auth0.com",
                connection: "Username-Password-Authentication"
            });

            $urlRouterProvider.otherwise('/');
           
        }

    ).run([
            '$rootScope', 'authService', 'lock',
            function ($rootScope, authService, lock) {
                $rootScope.authService = authService;
            
                authService.authenticateAndGetProfile();
                lock.interceptHash();
            }
        ]);
})();