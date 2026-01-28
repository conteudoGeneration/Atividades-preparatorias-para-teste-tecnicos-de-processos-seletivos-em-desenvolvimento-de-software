function contarPalavras(frase) {
  // Remove espaços extras no início e no fim da frase
  const fraseSemEspacos = frase.trim();

  // Divide a frase usando um ou mais espaços como separador
  const palavras = fraseSemEspacos.split(/\s+/);

  // Retorna a quantidade de palavras
  return palavras.length;
}

const frase = "Aprender Java é muito legal";
console.log(contarPalavras(frase)); // 5
// Saída: 5