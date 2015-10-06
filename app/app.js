/// <reference path='../typings/tsd.d.ts' />
/**
 * Created by Karel on 5.10.2015.
 */
var app;
(function (app) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider.when("/", {
                templateUrl: "/app/example/init.html"
            }).otherwise({ redirectTo: '/' });
        }
        return Config;
    })();
    Config.$inject = ['$routeProvider'];
    var mainApp = angular.module('testApp', ['ngRoute']);
    mainApp.config(Config);
})(app || (app = {}));
//# sourceMappingURL=app.js.map