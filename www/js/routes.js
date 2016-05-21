angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider


    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })




    .state('menu.fotosDeMarte', {
      url: '/fotos-de-marte',
      views: {
        'side-menu21': {
          templateUrl: 'templates/fotosDeMarte.html',
          controller: 'fotosDeMarteCtrl'
        }
      }
    })





    .state('menu.fotosCurtidas', {
      url: '/fotos-curtidas',
      views: {
        'side-menu21': {
          templateUrl: 'templates/fotosCurtidas.html',
          controller: 'fotosCurtidasCtrl'
        }
      }
    })





    .state('menu.hovers', {
      url: '/hovers',
      views: {
        'side-menu21': {
          templateUrl: 'templates/hovers.html',
          controller: 'hoversCtrl'
        }
      }
    })

    .state('menu.share', {
    url: "/share",
    views: {
      'side-menu21': {
        templateUrl: "templates/share.html",
        controller: 'shareCtrl'
      }
    }
  })

    .state('menu.sobre', {
    url: "/sobre",
    views: {
      'side-menu21': {
        templateUrl: "templates/sobre.html",
        controller: 'sobrectrl'
      }
    }
  })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu21/fotos-de-marte');

});
