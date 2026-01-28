function palavraMaisFrequente(frase) {
  const palavras = frase.toLowerCase().split(" ");
  const contador = {};

  let palavraMaisUsada = "";
  let maiorFrequencia = 0;

  for (let palavra of palavras) {
    if (contador[palavra]) {
      contador[palavra]++;
    } else {
      contador[palavra] = 1;
    }

    if (contador[palavra] > maiorFrequencia) {
      maiorFrequencia = contador[palavra];
      palavraMaisUsada = palavra;
    }
  }

  return palavraMaisUsada;
}

const frase = "JavaScript é incrível e JavaScript é poderoso";

console.log(palavraMaisFrequente(frase));
// Saída: "javascript"
