function inverterPalavras(frase) {
  return frase.split(" ").reverse().join(" ");
}
const frase = "Olá Mundo";
console.log(inverterPalavras(frase));
// Saída: "Mundo Olá"
