"use strict";
const setName = function (nome) {
    return nome.toUpperCase();
};
const escrever = function (nome) {
    return () => {
        console.log(`Meu nome é ${nome}`);
    };
};
const newName = function (numero) {
    return (nome) => {
        return Pessoa(nome, numero + 1);
    };
};
const Pessoa = function (nome, numero) {
    return {
        nome: setName(nome),
        numero: numero ? numero : 1,
        escrever: escrever(nome),
        newName: newName(numero ? numero : 1)
    };
};
const luiz = Pessoa('luiz alexandre');
console.log(luiz);
const novoLuiz = luiz.newName('LS Freitas');
console.log(novoLuiz);
novoLuiz.escrever();
