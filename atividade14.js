function maiorPalavra(frase) {
  // Divide a frase em palavras
  const palavras = frase.split(" ");

  let maior = "";

  // Percorre todas as palavras
  for (let palavra of palavras) {
    // Atualiza apenas se a palavra for maior que a atual
    if (palavra.length > maior.length) {
      maior = palavra;
    }
  }

  return maior;
}

console.log(maiorPalavra("Java e Programacao")); 
// "Programacao"
