document.getElementById("simular").addEventListener("click", () => {

    const bandeira = document.getElementById("bandeira").value;
    const valor = Number(document.getElementById("valor").value);
    const parcelas = Number(document.getElementById("parcelas").value);

    let taxa = 0;

    switch (bandeira) {
        case "visa":
            taxa = valor * 0.02;
            break;

        case "master":
            taxa = valor * 0.0185;
            break;

        case "elo":
            taxa = valor * 0.03;
            break;
    }

    const juros = valor * (0.0035 * parcelas);

    const taxaMensal = parcelas * 2;

    const total = valor + taxa + juros + taxaMensal;

    const valorParcela = total / parcelas;

    document.getElementById("resultado").innerHTML = `
        Taxa: R$ ${taxa.toFixed(2)} <br>
        Juros: R$ ${juros.toFixed(2)} <br>
        Taxa Mensal: R$ ${taxaMensal.toFixed(2)} <br>
        Parcela: R$ ${valorParcela.toFixed(2)}
    `;
});