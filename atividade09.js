function imprimirPiramide(n) {
  for (let i = 1; i <= n; i++) {
    // Espaços à esquerda
    const espacos = " ".repeat(n - i);

    // Estrelas
    const estrelas = "*".repeat(2 * i - 1);

    // Imprime a linha
    console.log(espacos + estrelas);
  }
}
imprimirPiramide(3);
// Saída:
//   *
//  ***
// *****