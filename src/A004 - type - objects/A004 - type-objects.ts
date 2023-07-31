const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  /* index signature */
  [key: string]: unknown;
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};


objetoA.chaveB = 'Outro Valor';

console.log(objetoA);
