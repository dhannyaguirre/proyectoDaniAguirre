(function () {
  var app = angular.module('ingedex', []);

  app.controller('IngenieroController', function () {
    this.ingeniero = {
      id: "001",
      name: "Nombre001",
      ingenieria: "Ingenieria001",
      tipo: [ "Tipo1", "Tipo2" ],
      edad: "40",
      facultad: "facultad001",
      habilidades: [ "habilidad1", "habilidad2"]
    };
  });

})();