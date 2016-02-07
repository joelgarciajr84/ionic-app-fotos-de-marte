angular.module('app.controllers', [])
     
.controller('fotosDeMarteCtrl', function($scope, $http) {

  $scope.width = '80%';
     var solsurl = 'https://crossorigin.me/https://merpublic.s3.amazonaws.com/oss/mera/images/image_manifest.json';
   
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
       var online = 'https://crossorigin.me/http://merpublic.s3.amazonaws.com/oss/mera/images/images_sol'+solrand+'.json';
     
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
$scope.share = function($title, $excerpt, $permalink, $scope) {

      window.plugins.socialsharing.share($title, $excerpt, null, $permalink);
}


})

.controller('fotosCurtidasCtrl', function($scope) {


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

.controller('sobrectrl', function($scope) {


})