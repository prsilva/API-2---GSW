var crud = angular.module('crud', []);

crud.controller('controller', function ($scope) {
  $scope.novoCliente = {};
  $scope.clienteSelecionado = {};

  $scope.clientes = [
    { nome: 'Priscila Silva', moedas: 5, troféus: 2 },
    { nome: 'Gabriel Souza', moedas: 8, troféus: 3 },
    { nome: 'Lucas Braz', moedas: 12, troféus: 6 },
    ,
  ];

  $scope.salvar = function () {
    $scope.cadastro.push($scope.novoCadastro);
    $scope.novoCadastro = {};
  };

  $scope.selecionaCadastro = function (cadastro) {
    $scope.selecionaCadastro = cadastro;
  };

  $scope.alterarCadastro = function () {};

  $scope.excluirCadastro = function () {
    $scope.cadastro.splice(
      $scope.cadastro.indexOf($scope.cadastroSelecionado),
      1,
    );
  };
});
