angular.module('app.controllers', [])

.controller('fotosDeMarteCtrl', function($scope, $http,  $cordovaSocialSharing) {

  $scope.FacebookShare=function($urlfoto, $datafoto, $horariofoto, $solmarte){
    var message = "Foto de Marte #AppFotosDeMarte Data: "+$datafoto+" Horário: "+$horariofoto+" Sol de Marte: "+ $solmarte;


    $cordovaSocialSharing
     .shareViaFacebook(message, $urlfoto, $urlfoto)
     .then(function(result) {
       // Success!
     }, function(err) {
       // An error occurred. Show a message to the user
     });
 }

 $scope.TwitterShare=function($urlfoto, $datafoto, $horariofoto, $solmarte){
   var message = "Foto de Marte #AppFotosDeMarte Data: "+$datafoto+" Horário: "+$horariofoto+" Sol de Marte: "+ $solmarte;


   $cordovaSocialSharing
     .shareViaTwitter(message, $urlfoto, $urlfoto)
     .then(function(result) {
       // Success!
     }, function(err) {
       // An error occurred. Show a message to the user
     });
}

$scope.WhatsAppShare=function($urlfoto, $datafoto, $horariofoto, $solmarte){
  var message = "Foto de Marte #AppFotosDeMarte Data: "+$datafoto+" Horário: "+$horariofoto+" Sol de Marte: "+ $solmarte;


  $cordovaSocialSharing
   .shareViaWhatsApp(message, $urlfoto, $urlfoto)
   .then(function(result) {
     // Success!
   }, function(err) {
     // An error occurred. Show a message to the user
   });
}

$scope.InstaShare=function($urlfoto, $datafoto, $horariofoto, $solmarte){
  var message = "Foto de Marte #AppFotosDeMarte Data: "+$datafoto+" Horário: "+$horariofoto+" Sol de Marte: "+ $solmarte;


  $cordovaSocialSharing
    .shareVia('instagram', message, $urlfoto, $urlfoto)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });
}

  $scope.width = '80%';
     var solsurl = 'http://cors.io/?u=https://merpublic.s3.amazonaws.com/oss/mera/images/image_manifest.json';

     $http.get(solsurl).then(function(resp){

       var sols = resp.data.sols;
       var solsids = [];
       //console.log(sols);
       for (var i = 0; i < sols.length; i++) {
         if (sols[i].num_images != 0) {
          solsids.push(sols[i].sol);
         };
       };


       var solrand = solsids[Math.floor(Math.random() * solsids.length)];
      // console.log(solrand);
       var online = 'http://cors.io/?u=http://merpublic.s3.amazonaws.com/oss/mera/images/images_sol'+solrand+'.json';

       $http.get(online).then(function(resp) {
         $scope.solrand = solrand;
         //cameras
          var pcam_images = resp.data.pcam_images;
          var ncam_images = resp.data.ncam_images;
          var rcam_images = resp.data.rcam_images;
          var fcam_images = resp.data.fcam_images;
          var imgs = '';



           if (fcam_images.length > 0) {

              imgs = fcam_images;

           }else if (rcam_images.length > 0) {

             imgs = rcam_images;

           }else if(ncam_images.length > 0){

              imgs = ncam_images;

           }else if(pcam_images.length > 0){

              imgs = pcam_images;
          }

         var marsimages =[];
         for (var i = 0; i < imgs.length; i++) {
          marsimages.push(imgs[i].images)
         };

         $scope.fcamimages = marsimages;

       })
     });
     $scope.doRefresh = function() {
       $http.get('/')
       .success(function(newItems) {
       location.reload();
       })
       .finally(function() {

       $scope.$broadcast('scroll.refreshComplete');
       });
     };
})

.controller('sobrectrl', function($scope){

})

.controller('hoversCtrl', function($scope) {
  $scope.width = '80%';

})

.controller('shareCtrl',['$scope',function($scope) {
   $scope.whatsappShare=function(){
    window.plugins.socialsharing.shareViaWhatsApp('APP das fotos de Marte', null /* img */, "https://github.com/joelgarciajr84/ionic-app-fotos-de-marte" /* url */, null, function(errormsg){alert("Error: Cannot Share")});
  }
   $scope.twitterShare=function(){
    window.plugins.socialsharing.shareViaTwitter('APP das fotos de Marte', null /* img */, 'https://github.com/joelgarciajr84/ionic-app-fotos-de-marte', null, function(errormsg){alert("Error: Cannot Share")});
  }
   $scope.OtherShare=function(){
     window.plugins.socialsharing.share('APP das fotos de Marte', null, null, 'https://github.com/joelgarciajr84/ionic-app-fotos-de-marte');
  }

}])
