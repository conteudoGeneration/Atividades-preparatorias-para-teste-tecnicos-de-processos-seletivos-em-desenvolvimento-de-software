function contarOcorrencias(texto, caractere) {
  let contador = 0;

  // Percorre cada caractere da string
  for (let letra of texto) {
    // Compara o caractere atual com o caractere procurado
    if (letra === caractere) {
      contador++;
    }
  }

  return contador;
}
const texto = "banana";
const caractere = "a";

console.log(contarOcorrencias(texto, caractere)); // 3
