angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.choiceTabDefaultPage', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/choiceTabDefaultPage.html',
        controller: 'choiceTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.randomTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/randomTabDefaultPage.html',
        controller: 'randomTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page4')


});