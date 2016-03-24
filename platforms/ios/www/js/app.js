// Ionic Starter App
angular.module('wechat', ['ionic','wechat.routes'])

.run(function($ionicPlatform) {
     $ionicPlatform.ready(function() {
                          
          if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.disableScroll(true);
          
          }
          if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
          }
          });
     })

.config(['$ionicConfigProvider',function($ionicConfigProvider){
         $ionicConfigProvider.tabs.position('bottom');
}])
