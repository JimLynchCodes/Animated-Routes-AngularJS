(function() {
  'use strict';

  angular
    .module('uiRouterAnimatedRoutesProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
