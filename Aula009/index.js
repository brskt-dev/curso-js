// não gera erro de redeclaração de variável... NÃO UTILIZAR VAR!
var nomeComVar = 'Bruno';
var nomeComVar = 'Rato';
console.log(nomeComVar);

// gera erro de redeclaração!
let nomeComLet = 'Bruno';
let nomeComLet = 'Rato';
console.log(nomeComLet);