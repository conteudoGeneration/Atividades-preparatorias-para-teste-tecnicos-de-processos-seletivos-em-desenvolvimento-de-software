function ehPalindromo(texto) {
  // Remove espaços e converte para minúsculas
  const textoTratado = texto
    .toLowerCase()
    .replace(/\s+/g, "");

  // Inverte o texto tratado
  const textoInvertido = textoTratado
    .split("")
    .reverse()
    .join("");

  // Compara o texto original tratado com o invertido
  return textoTratado === textoInvertido;
}
// Exemplo de uso
console.log(ehPalindromo("Ame a ema")); // true
console.log(ehPalindromo("Java Script")); // false
