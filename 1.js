var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var funcionarios = parseInt(lines.shift());
var horasTrabalhadas = parseInt(lines.shift());
var valorPorHora = parseFloat(lines.shift());

var valorTotal = horasTrabalhadas * valorPorHora;

console.log(`NUMBER = ${funcionarios}`);
console.log(`SALARY = U$ ${valorTotal.toFixed(2)}`);

