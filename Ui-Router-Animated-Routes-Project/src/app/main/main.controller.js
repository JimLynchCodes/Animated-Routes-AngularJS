(function () {
   'use strict';

   angular
      .module('uiRouterAnimatedRoutesProject')
      .controller('MainController', MainController);

   /** @ngInject */
   function MainController($timeout, webDevTec, toastr, $rootScope, $stateParams, $state) {
      var vm = this;

      //vm.isAboutRoute;
      console.log('$state: ' + JSON.stringify($state.current.name));
      //if (fromState.name === 'about' || toState.name === 'about') {
      if ($state.current.name === 'about') {
         vm.isAboutRoute = true;
      } else {
         vm.isAboutRoute = false;

      }

      vm.awesomeThings = [];
      vm.classAnimation = '';
      vm.creationDate = 1464418426587;
      vm.showToastr = showToastr;


      activate();

      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
         console.log("state change start, from" + fromState.name + " to " + JSON.stringify(toState));


      });


      function activate() {
         getWebDevTec();
         $timeout(function () {
            vm.classAnimation = 'rubberBand';
         }, 4000);
      }

      function showToastr() {
         toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
         vm.classAnimation = '';
      }

      function getWebDevTec() {
         vm.awesomeThings = webDevTec.getTec();

         angular.forEach(vm.awesomeThings, function (awesomeThing) {
            awesomeThing.rank = Math.random();
         });
      }
   }
})();
