/* eslint-disable */

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Joao',
  sobrenome: 'Luiz',


  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }

}

semRetorno('Luiz', 'Otavio');
pessoa.exibirNome();

export { pessoa };


