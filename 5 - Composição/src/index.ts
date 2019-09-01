const setName = function(nome: string) : string{
    return nome.toUpperCase()
}

const escrever = function escrever(nome: string){
    return ()=>{
            console.log(`Meu nome é ${nome}`)
        }
    
}

type pessoa = {
    nome: string;
    escrever: Function;
}

const Pessoa = function(nome: string):pessoa {
    return {
        nome: setName(nome),
        escrever: escrever(nome)
    }
}

const luiz = Pessoa('luiz alexandre')
luiz.escrever()
