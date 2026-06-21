function alternarGrupos() {
    const fase1 = document.getElementById('fase-1');
    const fase2 = document.getElementById('fase-2');

    const fase2EstaOculta = fase2.style.display === 'none' || fase2.style.display === '';

    if (fase2EstaOculta) {
        fase1.style.display = 'none';
        fase2.style.display = 'flex';
    } else {
        fase2.style.display = 'none';
        fase1.style.display = 'flex';
    }
}
function add() {

    const novoJogador = document.createElement('div');
    novoJogador.className = 'jogador-card';

    novoJogador.innerHTML = `
        <img src="img/Lucas_Paqueta.webp" alt="Lucas Paquetá" class="jogador-foto">
        <h3 class="jogador-nome">Lucas Tolentino Coelho de Lima</h3>
        <ul class="jogador-info">
            <li>📅 <strong>Nascimento:</strong> 27/08/1997 (28 anos)</li>
            <li>📏 <strong>Altura:</strong> 1,80 m</li>
            <li>🏃 <strong>Posição:</strong> Meio-campista</li>
            <li>⭐ <strong>Rank:</strong> 8,8</li>
        </ul>
    `;
    document.getElementById('lista-jogadores').appendChild(novoJogador);
}
