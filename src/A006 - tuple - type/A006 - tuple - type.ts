// Tuple

const dadosCliente1: readonly [number, string] = [1, "Luiz"];
const dadosCliente2: [number, string, string] = [1, "Luiz", "Vieira"];
const dadosCliente3: [number, string, string?] = [1, "Luiz"];
const dadosCliente4: [number, string, ...string[]] = [1, "Luiz", "miranda"];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array

const array1: readonly string[] = ["Luiz", "Otavio"];
const array2: ReadonlyArray<string> = ["Luiz", "Otavio"];


console.log(array1);
console.log(array2);
