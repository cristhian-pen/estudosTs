//Tipos never -> normalmente retorna erros

function criaErro(): void {
  throw new Error("Erro Qualquer");
}

criaErro();
