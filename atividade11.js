function contarVogais(texto) {
  // Define as vogais
  const vogais = "aeiou";
  let contador = 0;

  // Converte o texto para minúsculas
  texto = texto.toLowerCase();

  // Percorre cada caractere da string
  for (let letra of texto) {
    // Verifica se a letra está na lista de vogais
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}
// Exemplo de uso
const texto = "Programacao";
console.log(contarVogais(texto)); // 5
