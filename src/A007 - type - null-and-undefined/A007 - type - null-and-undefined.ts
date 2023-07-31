//Estreitamento das checagens
let x;
if (typeof x === "undefined") x = 20;
console.log(x * 2);

//Função que trata undefined como resposta por um valor ser opcional
export function createPerson(
  firstName: string,
  lastName?: string,
): {
  //Especificação do retorno
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

//Função que trata o retorno de dados null
export function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);


if (squareOfTwoNumber === null) {
  console.log("Conta Invalida");
} else {
  console.log(squareOfTwoNumber * 100);
}
