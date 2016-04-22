angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('menu.tV', {
    url: '/tv-index',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tV.html',
        controller: 'tVCtrl'
      }
    }
  })

  .state('menu.digitalTV', {
    url: '/digital-tv-index',
    views: {
      'side-menu21': {
        templateUrl: 'templates/digitalTV.html',
        controller: 'digitalTVCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.vDO', {
    url: '/vdo-index',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vDO.html',
        controller: 'vDOCtrl'
      }
    }
  })

  .state('menu.audio', {
    url: '/audio-index',
    views: {
      'side-menu21': {
        templateUrl: 'templates/audio.html',
        controller: 'audioCtrl'
      }
    }
  })

  .state('menu.xtremer', {
    url: '/xtremer-index',
    views: {
      'side-menu21': {
        templateUrl: 'templates/xtremer.html',
        controller: 'xtremerCtrl'
      }
    }
  })

  .state('menu2', {
    url: '/index',
    templateUrl: 'templates/menu2.html',
    controller: 'menu2Ctrl'
  })

  .state('menu.addAudio', {
    url: '/audio-add',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addAudio.html',
        controller: 'addAudioCtrl'
      }
    }
  })

  .state('menu.addDigitalTV', {
    url: '/digital-tv-add',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addDigitalTV.html',
        controller: 'addDigitalTVCtrl'
      }
    }
  })

  .state('menu.addTV', {
    url: '/tv-add',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addTV.html',
        controller: 'addTVCtrl'
      }
    }
  })

  .state('menu.addVDO', {
    url: '/vdo-add',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addVDO.html',
        controller: 'addVDOCtrl'
      }
    }
  })

  .state('menu.addXtremer', {
    url: '/xtremer-add',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addXtremer.html',
        controller: 'addXtremerCtrl'
      }
    }
  })

  .state('menu.audioController', {
    url: '/audio-controller',
    views: {
      'side-menu21': {
        templateUrl: 'templates/audioController.html',
        controller: 'audioControllerCtrl'
      }
    }
  })

  .state('menu.tVController', {
    url: '/tv-controller',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tVController.html',
        controller: 'tVControllerCtrl'
      }
    }
  })

  .state('menu.digitalTVController', {
    url: '/digital-tv-controller',
    views: {
      'side-menu21': {
        templateUrl: 'templates/digitalTVController.html',
        controller: 'digitalTVControllerCtrl'
      }
    }
  })

  .state('menu.vDOController', {
    url: '/vdo-controller',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vDOController.html',
        controller: 'vDOControllerCtrl'
      }
    }
  })

  .state('menu.xtremerController', {
    url: '/xtremer-controller',
    views: {
      'side-menu21': {
        templateUrl: 'templates/xtremerController.html',
        controller: 'xtremerControllerCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/home')

  

});