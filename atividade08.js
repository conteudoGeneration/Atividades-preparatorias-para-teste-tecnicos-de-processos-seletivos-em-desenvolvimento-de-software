function saoAnagramas(palavra1, palavra2) {
  // Converte para minúsculas para evitar problemas com maiúsculas
  const p1 = palavra1.toLowerCase();
  const p2 = palavra2.toLowerCase();

  // Se os tamanhos forem diferentes, não são anagramas
  if (p1.length !== p2.length) {
    return false;
  }

  // Ordena as letras das duas palavras e compara
  const ordenada1 = p1.split("").sort().join("");
  const ordenada2 = p2.split("").sort().join("");

  return ordenada1 === ordenada2;
}

console.log(saoAnagramas("amor", "roma")); // true
console.log(saoAnagramas("amor", "casa")); // false
