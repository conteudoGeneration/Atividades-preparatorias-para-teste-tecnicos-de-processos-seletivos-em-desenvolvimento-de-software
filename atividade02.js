function parComMenorDiferenca(array, x) {
  // Ordena o array
  array.sort((a, b) => a - b);

  let esquerda = 0;
  let direita = array.length - 1;
  let melhorPar = null;
  let menorDiferenca = Infinity;

  while (esquerda < direita) {
    const soma = array[esquerda] + array[direita];

    if (soma === x) {
      const diferenca = Math.abs(array[esquerda] - array[direita]);

      if (diferenca < menorDiferenca) {
        menorDiferenca = diferenca;
        melhorPar = [array[esquerda], array[direita]];
      }

      // Move ambos para continuar buscando outros pares
      esquerda++;
      direita--;
    } else if (soma < x) {
      esquerda++;
    } else {
      direita--;
    }
  }

  return melhorPar;
}

const numeros = [1, 3, 4, 7, 10, 12];
const x = 11;

console.log(parComMenorDiferenca(numeros, x));
// Saída: [4, 7]
