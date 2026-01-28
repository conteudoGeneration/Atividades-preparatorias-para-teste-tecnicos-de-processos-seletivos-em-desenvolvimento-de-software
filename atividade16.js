function somaNumerosPares(numeros) {
  let soma = 0;

  // Percorre o array
  for (let numero of numeros) {
    // Verifica se o número é par
    if (numero % 2 === 0) {
      soma += numero;
    }
  }

  return soma;
}
const numeros = [1, 2, 3, 4, 6];
console.log(somaNumerosPares(numeros)); // 12
// Output: 12 (2 + 4 + 6)