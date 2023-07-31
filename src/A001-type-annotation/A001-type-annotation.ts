/* eslint-disable */
//Tipos de dados basicos ( inferencia de tipos )
let nome: string = 'Teste';
let idade: number = 10;
let adulto: boolean = true;
let simbol: symbol = Symbol('Teste de simbolo');
//let big: bigint = 10n;


// Aarrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];


//Objetos

let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 30,
  nome: 'Joao'
};


//Funções
function soma(x: number, y: number): number {
  return x + y;
}


const soma2: (x: number, y: number) => number = (x, y) => x + y;
