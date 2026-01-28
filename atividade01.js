function cifraDeCesar(texto, deslocamento) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    let codigo = texto.charCodeAt(i);

    // Verifica se é letra minúscula (a-z)
    if (codigo >= 97 && codigo <= 122) {
      let novaLetra =
        ((codigo - 97 + deslocamento) % 26) + 97;
      resultado += String.fromCharCode(novaLetra);
    } else {
      // Mantém caracteres que não são letras
      resultado += texto[i];
    }
  }

  return resultado;
}

// Exemplo de uso
const texto = "abc";
const deslocamento = 3;

console.log(cifraDeCesar(texto, deslocamento)); // def
