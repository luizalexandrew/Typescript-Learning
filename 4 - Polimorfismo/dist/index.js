"use strict";
var Status;
(function (Status) {
    Status["ATIVO"] = "ativo";
    Status["INATIVO"] = "inativo";
    Status["PAUSADO"] = "pausado";
})(Status || (Status = {}));
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.status = Status.ATIVO;
    }
    printName() {
        console.log(`${this.nome} ${this.sobrenome} - Status Pessoa ${this.status}`);
    }
    disable() {
        this.status = Status.INATIVO;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, sobrenome) {
        super(nome, sobrenome);
        this.cargo = 'Desenvolvedor';
        this.salario = 0;
        this.qtdhora = 8;
    }
    disable() {
        this.status = Status.PAUSADO;
    }
    printName() {
        console.log(`${this.nome} ${this.sobrenome} - Status Funcionario ${this.status}`);
    }
    pagar() {
        console.log('estou pagando');
    }
}
const pessoa = new Pessoa('luiz', 'alexandre');
const funcionario = new Funcionario('luiz', 'functionario');
pessoa.printName();
funcionario.printName();
console.log('-------------------');
pessoa.disable();
funcionario.disable();
pessoa.printName();
funcionario.printName();
funcionario.nome = 'Teste';
console.log(funcionario);
