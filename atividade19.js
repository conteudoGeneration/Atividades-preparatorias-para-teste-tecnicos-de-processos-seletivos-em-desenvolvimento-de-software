function calcularSituacao(notas) {
  let soma = 0;

  // Soma todas as notas
  for (let nota of notas) {
    soma += nota;
  }

  // Calcula a média
  const media = soma / notas.length;

  // Verifica a situação com base na média
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}
// Exemplo de uso
const notas = [7.0, 8.0, 6.0];
console.log(calcularSituacao(notas)); // "Aprovado"
