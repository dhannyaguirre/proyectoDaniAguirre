(function () {

     angular.module('ingedex.services', ['ngResource'])
        .factory('Ingeniero', ['$resource', function ($resource) {
        //return $resource('/api/ingenieros/:name');
        return $resource('/api/documentos/:id', {id:'@id'});
     }])

      .factory('Limites', ['$resource', function ($resource) {
        //return $resource('/api/ingenieros/:name');
        return $resource('/api/limites');
     }])

        ;

})();
