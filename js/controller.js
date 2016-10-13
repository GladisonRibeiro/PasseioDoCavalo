(function(){
  angular.module("myApp").controller("myController", ["$scope","$timeout", function($scope, $timeout){
    var white = "#FFF";
    var black = "#000";
    $scope.titulo = "Passeio do cavalo";
    var m = 8;
    var m2 = 64;
    $scope.h = [2, 1, -1, -2, -2, -1,  1,  2];
    $scope.v = [1, 2,  2,  1, -1, -2, -2, -1];
    $scope.x = 0;
    $scope.y = 0;

    $scope.init = function(){
      $scope.tabuleiro = [
              [{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false}],
              [{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false}],
              [{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false}],
              [{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false}],
              [{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false}],
              [{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false}],
              [{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false}],
              [{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false},{color:black, numero:'', visitado:false},{color:white, numero:'', visitado:false}]
            ];
    }
    var eAceitavel = function(x, y){
      var result = (x >=0 && x <= 7 );
      result = result && (y >= 0 && y <= 7 );
      result = result && ($scope.tabuleiro[x][y].visitado == false);
      return result;
    }
    var tentarMover = function( i, x, y){
      var done = (i > m2);
      var k = 0;
      var u, v;
      while(!done && k < 8){
        u = x + parseInt($scope.h[k], 10);
        v = y + parseInt($scope.v[k], 10);
        if(eAceitavel(u, v)){
          $scope.tabuleiro[u][v].numero = i;
          $scope.tabuleiro[u][v].visitado = true;
          done = tentarMover(i+1, u, v);
          if(!done){
            $scope.tabuleiro[u][v].numero = "";
            $scope.tabuleiro[u][v].visitado = false;
          }
        }
        k = k + 1;
      }
      return done;
    }

    $scope.caminhar = function(){
        $scope.init();
        $scope.mensagem = ""

        if(x < 0 || x > 7 || y < 0 || y > 7 ){
            $scope.mensagem = "x e y tem que ser maior que -1 e menor que 8!";
            return;
        };
        var x = parseInt($scope.x);
        var y = parseInt($scope.y);
        $scope.tabuleiro[x][y].numero = '1';
        $scope.tabuleiro[x][y].visitado = true;
        if(!tentarMover(2,x,y)){
          $scope.mensagem = "Não foi possivel achar um caminho";
        }
    };
    $scope.limpar = function(){
      $scope.init();
      $scope.mensagem = "";
    };
    $scope.init();
  }]);

})();
