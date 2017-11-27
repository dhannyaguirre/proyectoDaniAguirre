(function (_) {
var i = 0  
var n = 0 
  angular.module('ingedex.controllers', [])
    .controller('IngedexController', ['$rootScope', '$scope', '$routeParams', 'Ingeniero', 'Limite' , function ($rootScope, $scope, $routeParams, Ingeniero, Limite) {
      
       var id = $routeParams.id;
       console.log(id)
       
       
       $scope.id= id ;

      var type = $routeParams.type;
      
      var ingenieros = [];
      var limites = [];
       var color = false
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
            var c4
            var c5
            var c6
            var c7
            var c8
            var c9
            var c10


            //$scope.colors = ['#d9230f','#d9230f','#d9230f','#d9230f','#d9230f','#d9230f','#d9230f','#d9230f','#d9230f','#d9230f']
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
          
            
              
              
              
              for(var j= 12; j>0; j--){
                

              if(limites[0].lim1 > datos[n-j].var1 || limites[0].lim2 < datos[n-j].var1 ){
                console.log('aqui estoy')
               c1= true
               console.log(c1)
              }
            }

                for(var j= 12; j>0; j--){
                  if(limites[0].lim3 > datos[n-j].var2 || limites[0].lim4 < datos[n-j].var2 ){
                   c2= true
                  
                  }
              }
                for(var j= 12; j>0; j--){
                  if(limites[0].lim5 > datos[n-j].var3 || limites[0].lim6 < datos[n-j].var3 ){
                    c3= true
                  //  console.log(c)
                  }
              }
                for(var j= 12; j>0; j--){
                  if(limites[0].lim7 > datos[n-j].var4 || limites[0].lim8 < datos[n-j].var4 ){
                    c4= true
                    //console.log(c)
                  }
              }
                for(var j= 12; j>0; j--){
                  if(limites[0].lim9 > datos[n-j].var5 || limites[0].lim10 < datos[n-j].var5 ){
                    c5= true
                    //console.log(c)
                  }
              }
                for(var j= 12; j>0; j--){
                  if(limites[0].lim11 > datos[n-j].var6 || limites[0].lim12 < datos[n-j].var6 ){
                   c6= true
                   //console.log(color)
                  }
              }
              console.log(c1)

            $scope.colors = ['#00ADF9','#DCDCDC','#46BFBD','#FDB45C','#949FB1','#4D5360','#00ADF9','#DCDCDC','#46BFBD','#FDB45C']
          
            $scope.colors2 = ['#d9230f','#d9230f','#d9230f','#d9230f','#d9230f','#d9230f','#d9230f','#d9230f','#d9230f','#d9230f']
            
           
            //console.log($scope.colors2)
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
            });

      }
           
  
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
            var c4
            var c5
            var c6
            var c7
            var c8
            var c9
            var c10

            $scope.colors = ['#00ADF9','#DCDCDC','#46BFBD','#FDB45C','#949FB1','#4D5360','#00ADF9','#DCDCDC','#46BFBD','#FDB45C']
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
              
              
              
              for(var j= 10; j>0; j--){
                
                console.log(datos[n-j].var1 )
              if(limites[0].lim1 > datos[n-j].var1 || limites[0].lim2 < datos[n-j].var1 ){
               
               c1 = '#d9230f'
                c2 = '#d9230f'
                c3 = '#d9230f'
                c4 = '#d9230f'
                c5 = '#d9230f'
                c6 = '#d9230f'
                c7= '#d9230f'
                c8= '#d9230f'
                c9='#d9230f'
                c10='#d9230f'
              }
            }
            } else if (id == 2){
                for(var j= 12; j>0; j--){
                  if(limites[0].lim3 > datos[n-j].var2 || limites[0].lim4 < datos[n-j].var2 ){
                    console.log('aqui estoy 2')
                   c1 = '#d9230f'
                c2 = '#d9230f'
                c3 = '#d9230f'
                c4 = '#d9230f'
                c5 = '#d9230f'
                c6 = '#d9230f'
                c7= '#d9230f'
                c8= '#d9230f'
                c9='#d9230f'
                c10='#d9230f'
                  }
              }
            }
            else if (id == 3){
                for(var j= 12; j>0; j--){
                  if(limites[0].lim5 > datos[n-j].var3 || limites[0].lim6 < datos[n-j].var3 ){
                    console.log('aqui estoy 3')
                    c1 = '#d9230f'
                c2 = '#d9230f'
                c3 = '#d9230f'
                c4 = '#d9230f'
                c5 = '#d9230f'
                c6 = '#d9230f'
                c7= '#d9230f'
                c8= '#d9230f'
                c9='#d9230f'
                c10='#d9230f'
                  }
              }
            } 
            else if (id == 4){
                for(var j= 12; j>0; j--){
                  if(limites[0].lim7 > datos[n-j].var4 || limites[0].lim8 < datos[n-j].var4 ){
                    console.log('aqui estoy 4')
                    c1 = '#d9230f'
                c2 = '#d9230f'
                c3 = '#d9230f'
                c4 = '#d9230f'
                c5 = '#d9230f'
                c6 = '#d9230f'
                c7= '#d9230f'
                c8= '#d9230f'
                c9='#d9230f'
                c10='#d9230f'
                  }
              }
            } 
            else if (id == 5){
                for(var j= 12; j>0; j--){
                  if(limites[0].lim9 > datos[n-j].var5 || limites[0].lim10 < datos[n-j].var5 ){
                    console.log('aqui estoy 5')
                    c1 = '#d9230f'
                c2 = '#d9230f'
                c3 = '#d9230f'
                c4 = '#d9230f'
                c5 = '#d9230f'
                c6 = '#d9230f'
                c7= '#d9230f'
                c8= '#d9230f'
                c9='#d9230f'
                c10='#d9230f'
                  }
              }
            } 
            else if (id == 6){
                for(var j= 12; j>0; j--){
                  if(limites[0].lim11 > datos[n-j].var6 || limites[0].lim12 < datos[n-j].var6 ){
                    console.log('aqui estoy 6')
                   c1 = '#d9230f'
                c2 = '#d9230f'
                c3 = '#d9230f'
                c4 = '#d9230f'
                c5 = '#d9230f'
                c6 = '#d9230f'
                c7= '#d9230f'
                c8= '#d9230f'
                c9='#d9230f'
                c10='#d9230f'
                  }
              }
            }else {
              c1 = '#00ADF9'
                c2 = '#DCDCDC'
                c3 = '#46BFBD'
                c4 = '#FDB45C'
                c5 = '#949FB1'
                c6 = '#4D5360'
                c7= '#00ADF9'
                c8= '#DCDCDC'
                c9='#46BFBD'
                c10='#FDB45C'
            }   
            
            //console.log(c1)
           
            $scope.colors[0] = c1
            $scope.colors[1] = c2
            $scope.colors[2] = c3
            $scope.colors[3] = c4
            $scope.colors[4] = c5
            $scope.colors[5] = c6
            $scope.colors[6] = c7
            $scope.colors[7] = c8
            $scope.colors[8] = c9
            $scope.colors[9] = c10
            
           
            //console.log($scope.colors)
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
