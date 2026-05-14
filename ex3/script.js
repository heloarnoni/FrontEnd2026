document.getElementById("calcular").addEventListener("click", () => {

    const nome = document.getElementById("nome").value;

    const n1 = Number(document.getElementById("nota1").value);
    const n2 = Number(document.getElementById("nota2").value);
    const n3 = Number(document.getElementById("nota3").value);

    const media = (n1 + n2 + n3) / 3;

    const resultado = document.getElementById("resultado");

    if (media >= 7) {
        resultado.innerHTML = `${nome} está APROVADO(A) com média ${media.toFixed(2)}`;
        resultado.style.color = "blue";
    }
    else if (media >= 4) {

        const falta = 10 - media;

        resultado.innerHTML =
        `${nome} está em EXAME com média ${media.toFixed(2)}. Faltam ${falta.toFixed(2)} pontos para 10`;

        resultado.style.color = "green";
    }
    else {
        resultado.innerHTML = `${nome} está REPROVADO(A) com média ${media.toFixed(2)}`;
        resultado.style.color = "red";
    }
});