angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('getfotosService', ['$http','$rootScope',function($http, $scope, $rootScope){

  function givemePhotos(){
    
    var solsurl = 'http://cors.io/?u=https://merpublic.s3.amazonaws.com/oss/mera/images/image_manifest.json';

    $http.get(solsurl).then(function(resp){

      var sols = resp.data.sols;
      var solsids = [];

      for (var i = 0; i < sols.length; i++) {
        if (sols[i].num_images != 0) {
         solsids.push(sols[i].sol);
        };
      };


      var solrand = solsids[Math.floor(Math.random() * solsids.length)];

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
  }


   var photos = givemePhotos();

      $scope.doRefresh = function() {
        $http.get('/')
          .success(function() {

            var photos = givemePhotos();
          })
          .finally(function() {

            $scope.$broadcast('scroll.refreshComplete');
          });
     };
}]);
