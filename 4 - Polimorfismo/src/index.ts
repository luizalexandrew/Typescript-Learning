interface IPessoa {
    nome: string,
    sobrenome?: string,
    status: Status,
    printName: Function
}

interface IFuncionario {
    salario: number
}

interface IFuncionarioTeste {
    qtdhora: number
}

enum Status {
    ATIVO = 'ativo',
    INATIVO = 'inativo',
    PAUSADO = 'pausado'
}

class Pessoa implements IPessoa{

    nome: string;
    sobrenome:string;
    status: Status;


    constructor(nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.status = Status.ATIVO
    }

    printName(){
        console.log(`${this.nome} ${this.sobrenome} - Status Pessoa ${this.status}`)
    }

    disable(){
        this.status = Status.INATIVO
    }
    
}

class Funcionario extends Pessoa implements IFuncionario, IFuncionarioTeste{

    cargo: string
    salario: number
    qtdhora: number

    constructor(nome: string, sobrenome: string){
        super(nome, sobrenome)
        this.cargo = 'Desenvolvedor'
        this.salario = 0
        this.qtdhora = 8
    }

    disable(){
        this.status = Status.PAUSADO
    }

    printName(){
        console.log(`${this.nome} ${this.sobrenome} - Status Funcionario ${this.status}`)
    }

    pagar(){
        console.log('estou pagando')
    }
    
}


const pessoa:Pessoa = new Pessoa('luiz',  'alexandre')
const funcionario:Pessoa = new Funcionario('luiz', 'functionario')

pessoa.printName()
funcionario.printName()

console.log('-------------------')


pessoa.disable()
funcionario.disable()

pessoa.printName()
funcionario.printName()


funcionario.nome = 'Teste'

console.log(funcionario)
