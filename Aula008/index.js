/* 
Brunin Rato Pelado tem 22 anos, pesa 70kg
tem 1.72 de altura e seu IMC é de 23.66
Brunin Rato Pelado nasceu em 1980
*/

const nome = 'Brunin'
const sobrenome = 'Rato Pelado'
const idade = 22;
const peso = 70;
const altura = 1.72;
const date = new Date();
const anoAtual = date.getFullYear();
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = anoAtual - idade;
nomeCompleto = nome + ' ' + sobrenome;

// primeiro método... meio ilegível
console.log(nomeCompleto, 'tem ', idade, 'anos, pesa ', peso, ', tem ', altura, 'e seu IMC é de ', imc);
console.log(nomeCompleto, 'nasceu em ', anoNascimento);

// segundo método... isso aqui é a ELITE ta?
console.log(`${nomeCompleto} tem ${idade} anos, pesa ${peso} kg, tem ${altura}, e seu IMC é de ${imc}`);
console.log(`${nomeCompleto} nasceu em ${anoNascimento}.`);