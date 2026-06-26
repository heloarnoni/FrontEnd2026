document.getElementById('btnCalcular').addEventListener('click', () => {
  const valorPacote = parseFloat(document.getElementById('pacote').value);
  const pessoas = parseInt(document.getElementById('pessoas').value);

  const custoBruto = valorPacote * pessoas;
  const taxaServico = custoBruto * 0.10;
  const totalComTaxa = custoBruto + taxaServico;

  let desconto = 0;
  if (pessoas > 100) {
    desconto = totalComTaxa * 0.05;
  }

  const totalFinal = totalComTaxa - desconto;

  document.getElementById('resultado').innerHTML = `
    <p>Custo Bruto: R$ ${custoBruto.toFixed(2)}</p>
    <p>Taxa de Serviço: R$ ${taxaServico.toFixed(2)}</p>
    <p>Desconto Aplicado: R$ ${desconto.toFixed(2)}</p>
    <p>Total Final: R$ ${totalFinal.toFixed(2)}</p>
  `;
});
