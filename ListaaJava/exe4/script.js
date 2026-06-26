document.getElementById('btnCalcular').addEventListener('click', () => {
  const bandeira = document.getElementById('bandeira').value;
  const valorVenda = parseFloat(document.getElementById('valorVenda').value);
  const parcelas = parseInt(document.getElementById('parcelas').value);

  let taxaPercentual;
  switch (bandeira) {
    case 'visa':
      taxaPercentual = 0.02;
      break;
    case 'master':
      taxaPercentual = 0.0185;
      break;
    case 'elo':
      taxaPercentual = 0.03;
      break;
  }

  const valorTaxa = valorVenda * taxaPercentual;
  const valorJuros = valorVenda * (0.015 * parcelas);
  const valorTotal = valorVenda + valorTaxa + valorJuros;
  const valorParcela = valorTotal / parcelas;

  document.getElementById('resultado').innerHTML = `
    <p>Valor da Taxa: R$ ${valorTaxa.toFixed(2)}</p>
    <p>Valor dos Juros: R$ ${valorJuros.toFixed(2)}</p>
    <p>Valor de cada Parcela: R$ ${valorParcela.toFixed(2)}</p>
  `;
});
