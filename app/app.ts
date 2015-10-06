/**
 * Created by Karel on 5.10.2015.
 */
module app {
    class Config {
        constructor($routeProvider: angular.route.IRouteProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "/app/example/init.html"
                })
                .otherwise({ redirectTo: '/' });
        }
    }
    Config.$inject = ['$routeProvider'];

    var mainApp = angular.module('testApp', ['ngRoute']);
    mainApp.config(Config);
}