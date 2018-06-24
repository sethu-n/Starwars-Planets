app.directive('planentComponent', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/planetTemplate.html',
      scope:{
        planet : '=planetData',
      },
      link: function(scope, element, attrs) {
        //console.log(scope.planet)
      }
    };
  });
