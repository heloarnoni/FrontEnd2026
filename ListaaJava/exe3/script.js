document.getElementById('btnCalcular').addEventListener('click', () => {
  const nome = document.getElementById('nome').value;
  const n1 = Number(document.getElementById('nota1').value);
  const n2 = Number(document.getElementById('nota2').value);
  const n3 = Number(document.getElementById('nota3').value);

  const media = (n1 + n2 + n3) / 3;
  const resultado = document.getElementById('resultado');

  if (media >= 7) {
    resultado.innerHTML = `<p style="color:blue">${nome} - Aprovado. Média: ${media.toFixed(2)}</p>`;
  } else if (media >= 4) {
    const faltaPara10 = (10 - media).toFixed(2);
    resultado.innerHTML = `<p style="color:green">${nome} - Exame. Média: ${media.toFixed(2)}. Faltam ${faltaPara10} pontos para 10.</p>`;
  } else {
    resultado.innerHTML = `<p style="color:red">${nome} - Reprovado. Média: ${media.toFixed(2)}</p>`;
  }
});
