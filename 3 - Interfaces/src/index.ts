interface person {
    nome: string,
    sobrenome?: string
}

function printName(pessoa: {nome: string}): void{

    console.log(pessoa.nome)
}


let pessoa: person = {
    nome: 'luiz',
    sobrenome: 'alexandre'
}

printName(pessoa)