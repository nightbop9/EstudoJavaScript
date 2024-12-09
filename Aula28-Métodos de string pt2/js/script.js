//toLowerCase e toUpperCase - converte toda a string para maiusculo ou minusculo

var frase = "Exemplo de frase.";
console.log(frase.toLowerCase());

var fraseCaixaAlta = frase.toUpperCase();
console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());

//trim - retira espaços

var nome = "     Matheus     ";
console.log(nome);

var nomeTrim = nome.trim();
console.log(nomeTrim);

//split - parametro e o separador
console.log(frase.split(" ")); //transforma a string em um array onde os elemmentos serao suas palavras

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(', '));

//lastIndexOf
var fraseDois = "Eu quero a última palavra teste desta frase de teste;";

console.log(fraseDois.indexOf("teste")); // primeiraocorrencia
console.log(fraseDois.lastIndexOf("teste")); //ultima ocorrencia