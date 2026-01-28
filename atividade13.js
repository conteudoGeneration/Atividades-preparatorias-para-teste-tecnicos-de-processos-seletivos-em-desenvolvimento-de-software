function ehPrimo(numero) {
  // Números menores ou iguais a 1 não são primos
  if (numero <= 1) {
    return false;
  }

  // Verifica divisores de 2 até a raiz quadrada do número
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Encontrou divisor
    }
  }

  return true; // Nenhum divisor encontrado
}

console.log(ehPrimo(7));  // true
console.log(ehPrimo(10)); // false
