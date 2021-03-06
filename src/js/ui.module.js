(function() {
    'use strict';

    angular
        .module('app.ui', [])
        .constant('ui.events', {
            SPLASH_COMPLETED: 'splash-completed',
            LOGIN_SUCCESSFUL: 'login-successful'
        });

    angular
        .module('app.ui')
        // actual values are set in the application config phase
        .constant('constants.application', {
            CLIENT_VERSION: '',
            NODE_ADDRESS: ''
        });
})();
