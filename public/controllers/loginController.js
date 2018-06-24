app.controller('loginController', ['$scope', '$http', function ($scope, $http) {

$scope.charactersList=[];

function loadCharacters(){
  $http.get('https://swapi.co/api/people').then((response)=>{
    $scope.charactersList=response.data.results;
  })
}

loadCharacters();

$scope.validateUser=function(){
    var userIndex;
    userIndex=$scope.charactersList.findIndex((each)=>{
        return each.name == $scope.userDetails.userName && each.birth_year == $scope.userDetails.password 
     }) 
     if(userIndex>=0){
      window.location.hash='#!/search'
     }
     else{
      $scope.userDetails.invalidCredentials=true;
     }
}

}])
