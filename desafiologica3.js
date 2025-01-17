//Criar classe 
class heroi { 
    constructor (nome, idade, tipo){ 
        this.nome =  nome;
        this.idade = idade;
        this.tipo = tipo;

        //criando condições para definir ataque
        //para ser válido precisa estar dentro do constructor
        if (nome === "mago"){
            this.ataque = "magia";
        } else if (nome === "guerreiro"){
            this.ataque = "espada";
        } else if (nome === "monge"){
            this.ataque = "artes marciais";
        } else if (nome === "ninja"){
            this.ataque = "shuriken";
        } else { 
            this.ataque = "ataque desconhecido"
        }
        }
    escrever () { 
        console.log( `O ${this.nome} atacou usando ${this.ataque}`);
    }        
}
// as variáveis precisam ser definidas antes de eu declarar o objeto instanciado
let conteudoNome = "monge"
let conteudoIdade = 28
let conteudoTipo = "protagonista"

//Criando a instancia do herói
let aventuraHeroi = new heroi( conteudoNome, conteudoIdade, conteudoTipo);

aventuraHeroi.escrever();

