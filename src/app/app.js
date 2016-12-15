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
                    controller: 'LoginController',
                    templateUrl: 'login.html'
                });

                // "auth0user": "cimpress.test@levi9.com",
                // "auth0password": "123456",
                // "auth0clientId": "JyQUHwycwwUQ79Q9XuRBsBe7GefpYs06",
                // "auth0domain": "levi9-test.auth0.com",
                // "auth0connection": "Username-Password-Authentication"

            lockProvider.init({
                clientID: "JyQUHwycwwUQ79Q9XuRBsBe7GefpYs06",
                domain:  "levi9-test.auth0.com",
                connection: "Username-Password-Authentication"
            });

            $urlRouterProvider.otherwise('/');
            // var url = window.location.search.match(/url=([^&]+)/);
            // if (url && url.length > 1) {
            //     url = decodeURIComponent(url[1]);
            // } else {
            //     url = "SERVER_SWAGGER_FILE_PATH";
            // }
            // var auth0 = new Auth0({
            //     domain: 'AUTH0_DOMAIN',
            //     clientID: 'AUTH0_CLIENT_ID',
            //     callbackURL:  url,
            //     connection: 'AUTH0_CONNECTION',
            //     callbackOnLocationHash: true
            // });
            // auth0.login({ popup: true,  scope: 'openid email' }, function(err, profile, id_token, access_token, state, refresh_token) {
            //     if (err) {
            //         console.log(err);
            //         return;
            //     }
            //     localStorage.setItem('token', JSON.stringify(id_token));
            // });
            // lockProvider.init({
            //     clientID: 'YOUR_CLIENT_ID',
            //     domain: 'YOUR_AUTH0_DOMAIN'
            // });
            //

            /* var auth0 = new Auth0({
                 domain: 'AUTH0_DOMAIN',
                 clientID: 'AUTH0_CLIENT_ID',
                 callbackURL:  this.url,
                 connection: 'AUTH0_CONNECTION',
                 callbackOnLocationHash: true
             });
             auth0.login({ popup: true,  scope: 'openid email' }, function(err, profile, id_token, access_token, state, refresh_token) {
                 if (err) {
                     console.log(err);
                     return;
                 }
                 localStorage.setItem('token', JSON.stringify(id_token));
             });*/
        }

    ).run([
            '$rootScope', 'authService', 'lock',
            function ($rootScope, authService, lock) {
                $rootScope.authService = authService;
                // Register the authentication listener that is
                // set up in auth.service.js
                authService.authenticateAndGetProfile();

                // Register the synchronous hash parser
                // when using UI Router
                lock.interceptHash();
            }
        ]);
})();