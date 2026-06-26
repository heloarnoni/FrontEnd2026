document.getElementById('btnValidar').addEventListener('click', () => {
  const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
  const resultado = document.getElementById('resultado');

  if (cpf.length !== 11) {
    resultado.textContent = 'Inválido';
    resultado.style.color = 'red';
    return;
  }

  const digitos = cpf.split('').map(Number);

  // 1º dígito verificador: 9 primeiros números, peso de 10 a 2
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += digitos[i] * (10 - i);
  }
  let resto = (soma * 10) % 11;
  const digito1 = resto === 10 ? 0 : resto;

  // 2º dígito verificador: 10 primeiros números, peso de 11 a 2
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += digitos[i] * (11 - i);
  }
  resto = (soma * 10) % 11;
  const digito2 = resto === 10 ? 0 : resto;

  if (digito1 === digitos[9] && digito2 === digitos[10]) {
    resultado.textContent = 'Válido';
    resultado.style.color = 'green';
  } else {
    resultado.textContent = 'Inválido';
    resultado.style.color = 'red';
  }
});
