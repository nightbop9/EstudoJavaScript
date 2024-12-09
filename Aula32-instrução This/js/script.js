//windows herda todas as variáveis declaradas
var teste = 5; //representa o objeto window
console.log(this.teste); //visivel no objeto window do navegador
console.log(teste);

let pessoa = {
    nome: 'Matheus',
    idade: 29,
    falar: function(){ //sera interpretado como metodo do objeto
        console.log("Olá, tudo bem?")
    },
    dizerNome: function(){
        console.log("O meu nome é " + this.nome) //this se refere a propriedade nome do escopo local, sem o this buscaria no escopo global, onde nao está definida - se refere a esta instância
    },
    aniversario: function(){
        this.idade++; //atualiza a idade do objeto pessoa
        console.log("Feliz aniversário! Sua nova idade é " + this.idade) 
    },
    saudacao: function(){
        return "sr. " + this.nome;
    }
};

pessoa.dizerNome();

//this acessa ou altera a propriedade do objeto
console.log(pessoa.idade);
pessoa.aniversario();
pessoa.aniversario();
console.log(pessoa.idade);

//usando return que armazena o valor
var sdc = pessoa.saudacao();

console.log(sdc);
