"use strict";
function printName(pessoa) {
    console.log(pessoa.nome + " " + pessoa.sobrenome.toString());
}
printName({
    nome: 'luiz'
});
