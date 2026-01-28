function segundoMaiorNumero(numeros) {
  // Verifica se o array tem pelo menos dois elementos
  if (numeros.length < 2) {
    return null; // Não é possível encontrar o segundo maior
  }

  // Cria uma cópia do array para não modificar o original
  const copia = [...numeros];

  // Ordena a cópia em ordem decrescente
  copia.sort((a, b) => b - a);

  // Retorna o segundo maior elemento
  return copia[1];
}

const numeros = [10, 5, 20, 8];

console.log(segundoMaiorNumero(numeros)); // 10
console.log(numeros); // Array original permanece o mesmo
