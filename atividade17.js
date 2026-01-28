function inverterNumero(numero) {
  let invertido = 0;

  // Enquanto ainda houver dígitos no número
  while (numero > 0) {
    // Obtém o último dígito
    const digito = numero % 10;

    // Adiciona o dígito ao número invertido
    invertido = invertido * 10 + digito;

    // Remove o último dígito do número original
    numero = Math.floor(numero / 10);
  }

  return invertido;
}

console.log(inverterNumero(123)); // 321
console.log(inverterNumero(500)); // 5
