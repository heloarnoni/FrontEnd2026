document.getElementById('btnAnalisar').addEventListener('click', () => {
  const numero = document.getElementById('numeroCartao').value.replace(/[\s.]/g, '');
  const painel = document.getElementById('painelInfo');

  if (!/^\d+$/.test(numero) || numero.length < 13 || numero.length > 16) {
    painel.innerHTML = '<p>Número inválido. Digite entre 13 e 16 dígitos.</p>';
    return;
  }

  // Algoritmo de Luhn
  const digitos = numero.split('').reverse().map(Number);
  let soma = 0;
  for (let i = 0; i < digitos.length; i++) {
    let valor = digitos[i];
    if (i % 2 === 1) {
      valor *= 2;
      if (valor > 9) valor -= 9;
    }
    soma += valor;
  }
  const valido = soma % 10 === 0;

  // Bandeira (detecção simplificada por prefixo)
  let bandeira = 'Não identificada';
  if (/^4/.test(numero)) {
    bandeira = 'Visa';
  } else if (/^5[1-5]/.test(numero) || /^2(2[2-9]|[3-6]\d|7[01])/.test(numero)) {
    bandeira = 'Mastercard';
  } else if (/^3[47]/.test(numero)) {
    bandeira = 'American Express';
  } else if (/^6(?:011|5)/.test(numero)) {
    bandeira = 'Discover';
  } else if (/^(636368|636297|504175|451416|509048)/.test(numero)) {
    bandeira = 'Elo';
  }

  // Categoria de Setor (1º dígito do IIN/BIN)
  const setores = {
    '0': 'Outros Setores',
    '1': 'Companhias Aéreas',
    '2': 'Companhias Aéreas / Bancário',
    '3': 'Viagens e Entretenimento',
    '4': 'Bancário e Financeiro',
    '5': 'Bancário e Financeiro',
    '6': 'Comércio / Bancário',
    '7': 'Petrolífero',
    '8': 'Telecomunicações e Saúde',
    '9': 'Atribuição Nacional'
  };
  const setor = setores[numero[0]];

  // Banco Emissor (tabela de exemplo ilustrativa, baseada nos dígitos 2 a 5/IIN)
  const bancos = {
    '400000': 'Banco Exemplo Visa',
    '510000': 'Banco Exemplo Master',
    '636368': 'Banco Exemplo Elo 1',
    '504175': 'Banco Exemplo Elo 2'
  };
  const bin = numero.substring(0, 6);
  const banco = bancos[bin] || 'Banco não identificado';

  painel.innerHTML = `
    <p>Status: <strong style="background-color:${valido ? 'yellow' : 'red'}; color:${valido ? 'black' : 'white'}; padding:2px 6px;">${valido ? 'Válido' : 'Inválido'}</strong></p>
    <p>Bandeira: ${bandeira}</p>
    <p>Categoria de Setor: ${setor}</p>
    <p>Banco Emissor: ${banco}</p>
  `;
});
