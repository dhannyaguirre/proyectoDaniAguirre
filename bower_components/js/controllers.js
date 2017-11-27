(function (_) {
var i = 0  
var n = 0 
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

        $scope.ingenieros = ingenieros = Ingeniero.query({ type: type.toLowerCase() }, function (datos) {
           console.log("estoy en dentro de tipo ")
          $scope.groupped = partition(datos, 4);
        });
      } else {
        $scope.ingenieros = ingenieros = Ingeniero.query(function (datos) {
          n = datos.length
          $scope.labels = ["Medicion1", "Medicion2", "Medicion3", "Medicion4", "Medicion5", "Medicion6", "Medicion7","Medicion8","Medicion9","Medicion10"];
            $scope.series = ['Temperatura'];
            $scope.data = [
              [datos[n-12].var1, datos[n-11].var1,datos[n-10].var1,datos[n-9].var1,datos[n-8].var1,datos[n-7].var1, datos[n-6].var1,datos[n-5].var1,datos[n-4].var1,datos[n-3].var1,datos[n-2].var1,,datos[n-1].var1],
              [datos[n-12].var2, datos[n-11].var2,datos[n-10].var2,datos[n-9].var2,datos[n-8].var2,datos[n-7].var2, datos[n-6].var2,datos[n-5].var2,datos[n-4].var2,datos[n-3].var2,datos[n-2].var2,,datos[n-1].var2],
              [datos[n-12].var3, datos[n-11].var3,datos[n-10].var3,datos[n-9].var3,datos[n-8].var3,datos[n-7].var3, datos[n-6].var3,datos[n-5].var3,datos[n-4].var3,datos[n-3].var3,datos[n-2].var3,,datos[n-1].var3],
              [datos[n-12].var4, datos[n-11].var4,datos[n-10].var4,datos[n-9].var4,datos[n-8].var4,datos[n-7].var4, datos[n-6].var4,datos[n-5].var4,datos[n-4].var4,datos[n-3].var4,datos[n-2].var4,,datos[n-1].var4],
              [datos[n-12].var5, datos[n-11].var5,datos[n-10].var5,datos[n-9].var5,datos[n-8].var5,datos[n-7].var5, datos[n-6].var5,datos[n-5].var5,datos[n-4].var5,datos[n-3].var5,datos[n-2].var5,,datos[n-1].var5],
              [datos[n-12].var6, datos[n-11].var6,datos[n-10].var6,datos[n-9].var6,datos[n-8].var6,datos[n-7].var6, datos[n-6].var6,datos[n-5].var6,datos[n-4].var6,datos[n-3].var6,datos[n-2].var6,,datos[n-1].var6]
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
          $scope.groupped = partition(datos, 4);
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
      function partition(datos, n) {
        return _.chain(datos).groupBy(function (element, index) {
          return Math.floor(index / n);
        }).toArray().value();
      }
     

    
 



    }])
    .controller('IngenieroController', ['$rootScope', '$scope', '$routeParams', 'Ingeniero', 'Limite' , function ($rootScope, $scope, $routeParams, Ingeniero, Limite) {
       var id = $routeParams.id;
       console.log(id)
       
       
       $scope.id= id ;

      var type = $routeParams.type;
      
      var ingenieros = [];
      var limites = [];

      $rootScope.title = "";

    /*  $scope.ingenieros = ingenieros = Ingeniero.query(function (data) {
          console.log(data)
         
          $scope.groupped = partition(data, 4);
        });
          var c1 = '#ff6384'
            var c2 = '#ff6384'
            var c3 = '#ff6384'
*/
            var c1 
            var c2 
            var c3 

      if (type) {
        $scope.type = type;

        $scope.ingenieros = ingenieros = Ingeniero.query({ type: type.toLowerCase() }, function (datos) {
           console.log("estoy en dentro de tipo ")
          $scope.groupped = partition(datos, 4);
        });
      } else {

        $scope.ingenieros = ingenieros = Ingeniero.query(function (datos) {
       
           n = datos.length
           $scope.limites = limites = Limite.query(function (limites) {
          
            if(id == 1){
              
              
              
              for(var j= 12; j>0; j--){
                

              if(limites[0].lim1 > datos[n-j].var1 || limites[0].lim2 < datos[n-j].var1 ){
                c1 = '#ff6384'
                c2 = '#ff6384'
                c3 = '#ff6384'
                
              }
            }
            } else if (id == 2){
                for(var j= 12; j>0; j--){
                  if(limites[0].var3 > datos[n-j].var2 || limites[0].var4 < datos[n-j].var2 ){
                    $scope.colors = ['#ff6384', '#ff8e72'];
                  }
              }
            }
            else if (id == 3){
                for(var j= 12; j>0; j--){
                  if(limites[0].var5 > datos[n-j].var3 || limites[0].var6 < datos[n-j].var3 ){
                    $scope.colors = ['#ff6384', '#ff8e72'];
                  }
              }
            } 
            else if (id == 4){
                for(var j= 12; j>0; j--){
                  if(limites[0].var7 > datos[n-j].var4 || limites[0].var8 < datos[n-j].var4 ){
                    $scope.colors = ['#ff6384', '#ff8e72'];
                  }
              }
            } 
            else if (id == 5){
                for(var j= 12; j>0; j--){
                  if(limites[0].var9 > datos[n-j].var5 || limites[0].lim10 < datos[n-j].var5 ){
                    $scope.colors = ['#ff6384', '#ff8e72'];
                  }
              }
            } 
            else if (id == 6){
                for(var j= 12; j>0; j--){
                  if(limites[0].lim11 > datos[n-j].var6 || limites[0].lim12 < datos[n-j].var6 ){
                    $scope.colors = ['#ff6384', '#ff8e72'];
                  }
              }
            }else {
              c1 = '#ff8e72'
                c2 = '#ff8e72'
                c3 = '#ff8e72x'
            }   
            });
            
          
            
            $scope.colors = [  '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
            $scope.labels = ["Medicion1", "Medicion2", "Medicion3", "Medicion4", "Medicion5", "Medicion6", "Medicion7","Medicion8","Medicion9","Medicion10"];
            $scope.series = ['Temperatura'];
            $scope.data = [
              [datos[n-12].var1, datos[n-11].var1,datos[n-10].var1,datos[n-9].var1,datos[n-8].var1,datos[n-7].var1, datos[n-6].var1,datos[n-5].var1,datos[n-4].var1,datos[n-3].var1,datos[n-2].var1,,datos[n-1].var1],
              [datos[n-12].var2, datos[n-11].var2,datos[n-10].var2,datos[n-9].var2,datos[n-8].var2,datos[n-7].var2, datos[n-6].var2,datos[n-5].var2,datos[n-4].var2,datos[n-3].var2,datos[n-2].var2,,datos[n-1].var2],
              [datos[n-12].var3, datos[n-11].var3,datos[n-10].var3,datos[n-9].var3,datos[n-8].var3,datos[n-7].var3, datos[n-6].var3,datos[n-5].var3,datos[n-4].var3,datos[n-3].var3,datos[n-2].var3,,datos[n-1].var3],
              [datos[n-12].var4, datos[n-11].var4,datos[n-10].var4,datos[n-9].var4,datos[n-8].var4,datos[n-7].var4, datos[n-6].var4,datos[n-5].var4,datos[n-4].var4,datos[n-3].var4,datos[n-2].var4,,datos[n-1].var4],
              [datos[n-12].var5, datos[n-11].var5,datos[n-10].var5,datos[n-9].var5,datos[n-8].var5,datos[n-7].var5, datos[n-6].var5,datos[n-5].var5,datos[n-4].var5,datos[n-3].var5,datos[n-2].var5,,datos[n-1].var5],
              [datos[n-12].var6, datos[n-11].var6,datos[n-10].var6,datos[n-9].var6,datos[n-8].var6,datos[n-7].var6, datos[n-6].var6,datos[n-5].var6,datos[n-4].var6,datos[n-3].var6,datos[n-2].var6,,datos[n-1].var6]
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
              $scope.groupped = partition(datos, 4);
              i++ 
            });

      }
           
  
       function partition(datos, n) {
        return _.chain(datos).groupBy(function (element, index) {
          return Math.floor(index / n);
        }).toArray().value();
      }
     

    
 



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
