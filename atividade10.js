function somaDosDigitos(texto) {
  let soma = 0;

  // Percorre cada caractere da string
  for (let caractere of texto) {
    // Verifica se o caractere é um dígito (0 a 9)
    if (!isNaN(caractere)) {
      soma += Number(caractere);
    }
  }

  return soma;
}
// Exemplo de uso
const texto = "a1b2c3";
console.log(somaDosDigitos(texto)); // 6
