(function (_) {
var i = 0  
  angular.module('ingedex.controllers', [])
    .controller('IngedexController', ['$rootScope', '$scope', '$routeParams', 'Ingeniero', function ($rootScope, $scope, $routeParams, Ingeniero) {
      
      var type = $routeParams.type;
      var ingenieros = [];

      $rootScope.title = "";

    /*  $scope.ingenieros = ingenieros = Ingeniero.query(function (data) {
          console.log(data)
         
          $scope.groupped = partition(data, 4);
        });
*/

      if (type) {
        $scope.type = type;

        $scope.ingenieros = ingenieros = Ingeniero.query({ type: type.toLowerCase() }, function (data) {
           
          $scope.groupped = partition(data, 4);
        });
      } else {
        $scope.ingenieros = ingenieros = Ingeniero.query(function (data) {
          
          $scope.labels = ["Medicion1", "Medicion2", "Medicion3", "Medicion4", "Medicion5", "Medicion6", "Medicion7","Medicion8","Medicion9","Medicion10"];
            $scope.series = ['Temperatura'];
            $scope.data = [
              [data[i+1].var1, data[i].var2, data[i].var3, data[i].var4, data[i].var5, data[i].var6, data[i].var7, data[i].var8, data[i].var9, data[i].var10]
            ];
            console.log(data[i].var1)
              $scope.onClick = function (points, evt) {
                console.log(points, evt);
              };
              $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
              $scope.options = {
                scales: {
                  yAxes: [
                    {
                      id: 'y-axis-1',
                      type: 'linear',
                      display: true,
                      position: 'left'
                    },
                    {
                      id: 'y-axis-2',
                      type: 'linear',
                      display: true,
                      position: 'right'
                    }
                  ]
                }
              };
          $scope.groupped = partition(data, 4);
             i++
        });
      }

      
           //$rootScope.title = "hola";
          //$scope.ingeniero = ingeniero;
          //console.log(ingeniero.var1)
  
  /*
   $scope.ingenieros = ingenieros = Ingeniero.query(function (data) {
          
/*
        $scope.labels = ["Medicion1", "Medicion2", "Medicion3", "Medicion4", "Medicion5", "Medicion6", "Medicion7","Medicion8","Medicion9","Medicion10"];
        $scope.series = ['Temperatura'];
        $scope.data = [
          [datos[i].var1, datos[i].var2, datos[i].var3, datos[i].var4, datos[i].var5, datos[i].var6, datos[i].var7, datos[i].var8, datos[i].var9, datos[i].var10]
        ];
          $scope.groupped = partition(datos, 4);
          i++
  
     });

   console.log($scope.data)
    //console.log(ingenieros[0])
*/      
/*

      $scope.search = function () {
        var result = ingenieros;

        if ($scope.searchTerm) {
          result = ingenieros.filter(function (ingeniero) {
            var name = ingeniero && ingeniero.name || "";

            return name.toLowerCase().indexOf($scope.searchTerm.toLowerCase()) !== -1;
          });
        }

        $scope.ingenieros = result;
        $scope.groupped = partition(result, 4);
      };


*/
      function partition(data, n) {
        return _.chain(data).groupBy(function (element, index) {
          return Math.floor(index / n);
        }).toArray().value();
      }
     

     
 



    }])
    .controller('IngenieroController', ['$rootScope', '$scope', '$routeParams', 'Ingeniero', function ($rootScope, $scope, $routeParams, Ingeniero) {
       var id = $routeParams.id;
       //console.log(id)
      //$scope.ingeniero = {};
        Ingeniero.get({ id: id }, function (ingeniero) {

           $scope.labels = ["Medicion1", "Medicion2", "Medicion3", "Medicion4", "Medicion5", "Medicion6", "Medicion7","Medicion8","Medicion9","Medicion10"];
            $scope.series = ['Temperatura'];
            $scope.data = [
              [ingeniero.var1, ingeniero.var2, ingeniero.var3, ingeniero.var4, ingeniero.var5, ingeniero.var6, ingeniero.var7, ingeniero.var8, ingeniero.var9, ingeniero.var10]
            ];
           
              $scope.onClick = function (points, evt) {
                console.log(points, evt);
              };
              $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
              $scope.options = {
                scales: {
                  yAxes: [
                    {
                      id: 'y-axis-1',
                      type: 'linear',
                      display: true,
                      position: 'left'
                    },
                    {
                      id: 'y-axis-2',
                      type: 'linear',
                      display: true,
                      position: 'right'
                    }
                  ]
                }
              };
           $rootScope.title = ingeniero._id;
          $scope.ingeniero = ingeniero;
          console.log(ingeniero.var1)
      
          });
    }])

    .controller('TabsController', ['$scope', function ($scope) {
      $scope.tab = 1;

      $scope.selectTab = function (tab) {
        $scope.tab = tab;
      };

      $scope.isActive = function (tab) {
        return tab === $scope.tab;
      };
    }])


    
   .controller('MapCtrl', ['MarkerCreatorService', '$routeParams', '$scope', function (MarkerCreatorService, $routeParams, $scope) {
        var name2 = $routeParams.name;
         $scope.address = name2;
         console.log($scope.address);


          
        $scope.map = {
            center: {
                latitude: -0.2006319,
                longitude: -78.5040844
            },
            zoom:4,
            markers: [],
            control: {},
            options: {
                scrollwheel: false
            }
        };

        //$scope.map.markers.push($scope.ecuadorMarker);

        MarkerCreatorService.createByAddress($scope.address, function(marker) {
                    $scope.map.markers.push(marker);
                    refresh(marker);
                });
        $scope.addAddress = function() {
            var address = $scope.address;
            if (address !== '') {
                MarkerCreatorService.createByAddress(address, function(marker) {
                    $scope.map.markers.push(marker);
                    refresh(marker);
                });
            }
        };

        function refresh(marker) {
            $scope.map.control.refresh({latitude: marker.latitude,
                longitude: marker.longitude});
        }

    }]);

})(_);
