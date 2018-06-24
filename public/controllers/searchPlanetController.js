app.controller('searchPlanetController', ['$scope', '$http', function ($scope, $http) {

$scope.planetsList=[];
$scope.searchInput=null;
function loadPlanets(){
  $http.get('https://swapi.co/api/planets').then((response)=>{
    $scope.planetsList=response.data.results;
  })
}

loadPlanets();
$scope.clearInput=function(searchInput){
  if(searchInput==''){
    $scope.searchInput=null;
  }
}
}])
