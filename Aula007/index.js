
// não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// não podem começar o nome de uma constante com um número
// não podem conter espaços ou traços
// utilizamos camelCase
// Case-sensitive
// não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

const nome = 'Brunin';
console.log(nome);

const primeiroNumero = '11';
const segundoNumero = 11;
const resultado = primeiroNumero + segundoNumero; // se for string, concatena... se for number, faz operação aritmética...
console.log(resultado);

// Exibir o tipo de uma const ou var...
console.log(typeof primeiroNumero);