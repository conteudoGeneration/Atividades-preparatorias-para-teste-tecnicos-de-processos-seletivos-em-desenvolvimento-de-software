function removerDuplicados(array) {
  const resultado = [];
  const vistos = new Set();

  for (let numero of array) {
    // Verifica se o número já foi visto
    if (!vistos.has(numero)) {
      vistos.add(numero);
      resultado.push(numero);
    }
  }

  return resultado;
}

const numeros = [1, 2, 2, 3, 4, 4, 5];
console.log(removerDuplicados(numeros));
// [1, 2, 3, 4, 5]
