angular.module('app.controllers', [])

.controller('fotosDeMarteCtrl', function($scope,  $cordovaSocialSharing, ionicMaterialInk, ionicMaterialMotion, $http, getfotosService) {


  $scope.FacebookShare=function($urlfoto, $datafoto, $horariofoto, $solmarte){

    var message = "Foto de Marte #AppFotosDeMarte Data: "+$datafoto+" Horário: "+$horariofoto+" Sol de Marte: "+ $solmarte;


    $cordovaSocialSharing
     .shareViaFacebook(message, $urlfoto, $urlfoto)
     .then(function(result) {

     }, function(err) {

     });
 }

 $scope.TwitterShare=function($urlfoto, $datafoto, $horariofoto, $solmarte){
   var message = "Foto de Marte #AppFotosDeMarte Data: "+$datafoto+" Horário: "+$horariofoto+" Sol de Marte: "+ $solmarte;


   $cordovaSocialSharing
     .shareViaTwitter(message, $urlfoto, $urlfoto)
     .then(function(result) {

     }, function(err) {

     });
}

$scope.WhatsAppShare=function($urlfoto, $datafoto, $horariofoto, $solmarte){
  var message = "Foto de Marte #AppFotosDeMarte Data: "+$datafoto+" Horário: "+$horariofoto+" Sol de Marte: "+ $solmarte;


  $cordovaSocialSharing
   .shareViaWhatsApp(message, $urlfoto, $urlfoto)
   .then(function(result) {

   }, function(err) {

   });
}

$scope.InstaShare=function($urlfoto, $datafoto, $horariofoto, $solmarte){
  var message = "Foto de Marte #AppFotosDeMarte Data: "+$datafoto+" Horário: "+$horariofoto+" Sol de Marte: "+ $solmarte;


  $cordovaSocialSharing
    .shareVia('instagram', message, $urlfoto, $urlfoto)
    .then(function(result) {

    }, function(err) {

    });
}
// Set Motion
ionicMaterialMotion.fadeSlideInRight();

// Set Ink
ionicMaterialInk.displayEffect();


})

.controller('sobrectrl', function($scope){

})

.controller('hoversCtrl', function($scope) {
  $scope.width = '80%';

})

.controller('shareCtrl',['$scope',function($scope) {
   $scope.whatsappShare=function(){
    window.plugins.socialsharing.shareViaWhatsApp('APP Fotos de Marte', null /* img */, "http://migre.me/tWvVx" /* url */, null, function(errormsg){alert("Error: Cannot Share")});
  }
   $scope.twitterShare=function(){
    window.plugins.socialsharing.shareViaTwitter('APP Fotos de Marte', null /* img */, 'http://migre.me/tWvVx', null, function(errormsg){alert("Error: Cannot Share")});
  }
   $scope.OtherShare=function(){
     window.plugins.socialsharing.share('APP Fotos de Marte', null, null, 'http://migre.me/tWvVx');
  }

}])
