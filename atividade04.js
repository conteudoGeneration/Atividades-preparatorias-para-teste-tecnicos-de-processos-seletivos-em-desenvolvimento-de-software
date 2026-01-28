function ehPalindromo(numero) {
  const numeroTexto = numero.toString();
  const invertido = numeroTexto.split("").reverse().join("");

  return numeroTexto === invertido;
}
console.log(ehPalindromo(121));   // true
console.log(ehPalindromo(1234)); // false
