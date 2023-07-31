"use strict";
/* eslint-disable */
//Tipos de dados basicos ( inferencia de tipos )
var nome = 'Teste';
var idade = 10;
var adulto = true;
var simbol = Symbol('Teste de simbolo');
//let big: bigint = 10n;
// Aarrays
var arrayDeNumeros = [1, 2, 3];
var arrayDeStrings = ['a', 'b'];
//Objetos
var pessoa = {
    idade: 30,
    nome: 'Joao'
};
//Funções
function soma(x, y) {
    return x + y;
}
var soma2 = function (x, y) { return x + y; };
