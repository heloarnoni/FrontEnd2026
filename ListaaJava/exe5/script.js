const input = document.getElementById('nomeConvidado');
const btnAdicionar = document.getElementById('btnAdicionar');
const lista = document.getElementById('listaConvidados');

btnAdicionar.addEventListener('click', () => {
  const nome = input.value.trim();
  if (nome === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = nome;

  const btnConcluir = document.createElement('button');
  btnConcluir.textContent = 'Concluir';
  btnConcluir.addEventListener('click', () => {
    span.classList.toggle('classe-riscado');
  });

  const btnEditar = document.createElement('button');
  btnEditar.textContent = 'Editar';
  btnEditar.addEventListener('click', () => {
    const novoNome = prompt('Novo nome:', span.textContent);
    if (novoNome !== null && novoNome.trim() !== '') {
      span.textContent = novoNome.trim();
    }
  });

  const btnExcluir = document.createElement('button');
  btnExcluir.textContent = 'Excluir';
  btnExcluir.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btnConcluir);
  li.appendChild(btnEditar);
  li.appendChild(btnExcluir);
  lista.appendChild(li);

  input.value = '';
});
