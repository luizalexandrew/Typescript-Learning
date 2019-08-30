"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Status;
(function (Status) {
    Status["ATIVO"] = "ativo";
    Status["INATIVO"] = "inativo";
    Status["PAUSADO"] = "pausado";
})(Status || (Status = {}));
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.status = Status.ATIVO;
    }
    Pessoa.prototype.printName = function () {
        console.log(this.nome + " " + this.sobrenome + " - Status Pessoa " + this.status);
    };
    Pessoa.prototype.disable = function () {
        this.status = Status.INATIVO;
    };
    return Pessoa;
}());
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, sobrenome) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this.cargo = 'Desenvolvedor';
        _this.salario = 0;
        _this.qtdhora = 8;
        return _this;
    }
    Funcionario.prototype.disable = function () {
        this.status = Status.PAUSADO;
    };
    Funcionario.prototype.printName = function () {
        console.log(this.nome + " " + this.sobrenome + " - Status Funcionario " + this.status);
    };
    Funcionario.prototype.pagar = function () {
        console.log('estou pagando');
    };
    return Funcionario;
}(Pessoa));
var pessoa = new Pessoa('luiz', 'alexandre');
var funcionario = new Funcionario('luiz', 'functionario');
pessoa.printName();
funcionario.printName();
console.log('-------------------');
pessoa.disable();
funcionario.disable();
pessoa.printName();
funcionario.printName();
funcionario.nome = 'Teste';
console.log(funcionario);
