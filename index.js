var modulename = module.exports = 'ng-address';

angular
  .module(modulename, [

  ])

  .directive('addressForm', function($countries){
    
    return {
      restrict:'EA',
      scope:{
        address:'='
      },
      template: require('./template'),
      replace: true,
      link:function($scope){
        $scope.countries = $countries;

        $scope.country = null;

        $scope.$watch('address.country', function(c){
          if(!c){
            return;
          }
          if(!$scope.country || $scope.country.name!=c.name){
            $scope.country = $countries.filter(function(c){
              if(!$scope.address){
                return false;
              }
              return c.name==$scope.address.country;
            })[0]
          }
        }, true)
        $scope.$watch('country', function(c){
          if(!c){
            return;
          }
          $scope.$emit('address:country', c);
          $scope.address.country = c.name;
        }, true);
      }
    };
  })
