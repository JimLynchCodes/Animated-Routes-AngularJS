(function() {
  'use strict';

  angular
    .module('uiRouterAnimatedRoutesProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
       .state('about', {
          url: '/about',
          templateUrl: 'app/about/about.html',
          controller: 'MainController',
          controllerAs: 'main'
       })
       .state('contact', {
          url: '/contact',
          templateUrl: 'app/contact/contact.html',
          controller: 'MainController',
          controllerAs: 'main'
       })
       .state('something-else', {
          url: '/something-else',
          templateUrl: 'app/something-else/something-else.html',
          controller: 'MainController',
          controllerAs: 'main'
       })
       .state('additional-thing', {
          url: '/additional-thing',
          templateUrl: 'app/additional-thing/additional-thing.html',
          controller: 'MainController',
          controllerAs: 'main'
       })

    ;

    $urlRouterProvider.otherwise('/');
  }

})();
