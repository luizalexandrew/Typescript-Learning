const setName = function(nome: string) : string{
    return nome.toUpperCase()
}

const escrever = function(nome: string){
    return ()=>{
            console.log(`Meu nome é ${nome}`)
        }
    
}

const newName = function(numero: number): (nome: string) => pessoa{
    return (nome: string) : pessoa=>{
        return Pessoa(nome, numero + 1)
    }
}

type pessoa = {
    readonly nome: string;
    readonly numero: number;
    readonly escrever: Function;
    readonly newName: (nome: string) => pessoa;
}


const Pessoa = function(nome: string, numero?: number):pessoa {
    return {
        nome: setName(nome),
        numero: numero ? numero : 1,
        escrever: escrever(nome),
        newName: newName(numero ? numero : 1)
    }
}

const luiz = Pessoa('luiz alexandre')
console.log(luiz)
const novoLuiz = luiz.newName('LS Freitas')
console.log(novoLuiz)
novoLuiz.escrever()
