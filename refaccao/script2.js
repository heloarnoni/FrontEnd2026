function add() {
    const container = document.getElementById("Cards");

    const novoCard = document.createElement("div");
    novoCard.className = "card";
    novoCard.style.width = "22rem";

    novoCard.innerHTML = `
        <img src="img/Lucas_Paqueta.webp" class="card-img-top">

        <div class="card-body">
            <h5 class="card-title">
                Lucas Paquetá
                <span class="badge text-bg-secondary">8,8</span>
            </h5>
            <p class="card-text">
                <strong>Nascimento:</strong> 27/08/1997 <br>
                <strong>Altura:</strong> 1,80 <br>
                <strong>Posição:</strong> Meio-campista
            </p>
        </div>
    `;

    container.appendChild(novoCard);
}

function trocarGrupos() {       
    alert("funcionou");
    document.querySelector("#grupoA").innerHTML = `
        <h2>GRUPO D</h2>
        <h3>Seleções</h3>
        <ul>
            <li>Estados Unidos</li>
            <li>Paraguai</li>
            <li>Austrália</li>
            <li>Turquia</li>
        </ul>
        <details>
            <summary>Saiba Mais</summary>
            <p>Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas.</p>
        </details>
    `;

    document.querySelector("#grupoB").innerHTML = `
        <h2>GRUPO E</h2>
        <h3>Seleções</h3>
        <ul>
            <li>Alemanha</li>
            <li>Equador</li>
            <li>Costa do Marfim</li>
            <li>Curaçao</li>
        </ul>
        <details>
            <summary>Saiba Mais</summary>
            <p>Alemanha costuma dominar grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.</p>
        </details>
    `;

    document.querySelector("#grupoC").innerHTML = `
        <h2>GRUPO F</h2>
        <h3>Seleções</h3>
        <ul>
            <li>Holanda</li>
            <li>Japão</li>
            <li>Tunísia</li>
            <li>Suécia</li>
        </ul>
        <details>
            <summary>Saiba Mais</summary>
            <p>Grupo bem equilibrado com estilos variados de jogo.</p>
        </details>
  
    `;
}