angular.module('wechat.routes', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise("/tab/message")
        $stateProvider
        .state("tab", {
               url: "/tab",
               abstract: true,
               templateUrl: "templates/tab.html",
               })
        .state('tab.message', {
               url: '/message',
               views: {
               'message': {
               templateUrl: "templates/message.html"
               }
               }
               })
        .state('tab.contact', {
               url: '/contact',
               views: {
               'contact': {
               templateUrl: "templates/contact.html"
               
               }
               }
               })
        .state('tab.find', {
               url: '/find',
               views: {
               'find': {
               templateUrl: "templates/find.html"
               }
               }
               })
        .state('tab.setting', {
               url: '/setting',
               views: {
               'setting': {
               templateUrl: "templates/setting.html"
               }
               }
               })
        
        });