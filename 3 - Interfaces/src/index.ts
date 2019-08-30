interface person {
    nome: string,
    sobrenome?: string,
    status: Status
}

enum Status {
    ATIVO = 'ativo',
    INATIVO = 'inativo'
}

function printName(pessoa: {nome: string}): void{

    console.log(pessoa)
}

let pessoa: person = {
    nome: 'luiz',
    sobrenome: 'alexandre',
    status: Status.ATIVO
}

pessoa.status = Status.ATIVO

printName(pessoa)