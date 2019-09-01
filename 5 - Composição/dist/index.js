"use strict";
const setName = function (nome) {
    return nome.toUpperCase();
};
const escrever = function escrever(nome) {
    return () => {
        console.log(`Meu nome é ${nome}`);
    };
};
const Pessoa = function (nome) {
    return {
        nome: setName(nome),
        escrever: escrever(nome)
    };
};
const luiz = Pessoa('luiz alexandre');
luiz.escrever();
