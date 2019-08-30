interface Pessoa {
    nome: string;
    sobrenome: string;
    idade:number;
}

function getFullName(pessoa: Pessoa): Function {
    return ()=>{
        return `Hello World ${pessoa.nome} ${pessoa.sobrenome}`
    }
}

console.log(getFullName({
    nome: 'luiz',
    sobrenome: 'alexandre',
    idade: 25
})())