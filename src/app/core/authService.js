(function () {

    'use strict';

    angular
        .module('app')
        .service('authService', authService);

    function authService($location, authManager) {
        
        var auth0 = new Auth0({
            domain: 'levi9-test.auth0.com',
            clientID: 'JyQUHwycwwUQ79Q9XuRBsBe7GefpYs06',
            connection: 'Username-Password-Authentication',
            callbackOnLocationHash: true
        });

        function login(username, password, callback) {
            auth0.login({ popup: true }, function(err, profile, id_token, access_token, state, refresh_token) {
                debugger;
                if (err) {
                    console.log(err);
                    return;
                }
                localStorage.setItem('token', JSON.stringify(id_token));
            });
            // auth0.login({
            //     // popup: true,
            //     // scope: 'openid email',
            //     connection: 'Username-Password-Authentication',
            //     responseType: 'token',
            //     email: username,
            //     password: password
            // }, callback);
        }

        function logout() {
            localStorage.removeItem('id_token');
            localStorage.removeItem('profile');
            authManager.unauthenticate();
            $location.path('/login');
        }

        function authenticateAndGetProfile() {
            var result = auth0.parseHash(window.location.hash);

            if (result && result.idToken) {
                localStorage.setItem('id_token', result.idToken);
                authManager.authenticate();
                auth0.getProfile(result.idToken, function (error, profileData) {
                    if (error) {
                        console.log(error);
                    }

                    localStorage.setItem('profile', JSON.stringify(profileData));
                    $location.path('/');
                });
            } else if (result && result.error) {
                alert('error: ' + result.error);
            }
        }

        return {
            login: login,
            logout: logout,
            authenticateAndGetProfile: authenticateAndGetProfile
        }
    }
})();