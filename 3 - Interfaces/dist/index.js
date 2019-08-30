"use strict";
var Status;
(function (Status) {
    Status["ATIVO"] = "ativo";
    Status["INATIVO"] = "inativo";
})(Status || (Status = {}));
function printName(pessoa) {
    console.log(pessoa);
}
var pessoa = {
    nome: 'luiz',
    sobrenome: 'alexandre',
    status: Status.ATIVO
};
pessoa.status = Status.ATIVO;
printName(pessoa);
