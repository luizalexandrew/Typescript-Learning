"use strict";
function printName(pessoa) {
    if (pessoa.sobrenome && pessoa.sobrenome.length) {
        console.log('Tenho Sobrenome');
    }
    console.log(pessoa.nome + " " + (pessoa.sobrenome ? pessoa.sobrenome.toString() : ''));
    return 1;
}
printName({
    nome: 'luiz',
    sobrenome: 'teste'
});
