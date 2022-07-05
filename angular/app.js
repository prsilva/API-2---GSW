var crud = angular.module('crud', []);

crud.controller('controller', function ($scope) {
  $scope.novoCadastro = {};
  $scope.cadastroSelecionado = {};

  $scope.cadastros = [
    { nome: 'Priscila Silva', moedas: 5, trofeus: 2, medalhas: 1 },
    { nome: 'Gabriel Souza', moedas: 8, trofeus: 3, medalhas: 2 },
    { nome: 'Lucas Braz', moedas: 12, trofeus: 6, medalhas: 4 },
  ];

  $scope.salvar = function () {
    $scope.cadastros.push($scope.novoCadastro);
    $scope.novoCadastro = {};
  };

  $scope.selecionaCadastro = function (cadastro) {
    $scope.cadastroSelecionado = cadastro;
  };

  $scope.alterarCadastro = function () {};

  $scope.excluirCadastro = function () {
    $scope.cadastros.splice(
      $scope.cadastros.indexOf($scope.cadastroSelecionado),
      1,
    );
  };
});
