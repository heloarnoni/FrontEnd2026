document.getElementById("calcular").addEventListener("click", () => {

    const pacote = document.getElementById("pacote").value;
    const pessoas = Number(document.getElementById("pessoas").value);

    let valorPacote = 0;

    switch (pacote) {

        case "standard":
            valorPacote = 50;
            break;

        case "premium":
            valorPacote = 80;
            break;

        case "deluxe":
            valorPacote = 120;
            break;
    }

    const bruto = valorPacote * pessoas;

    const taxa = bruto * 0.10;

    let total = bruto + taxa;

    let desconto = 0;

    if (pessoas > 100) {
        desconto = total * 0.05;
        total -= desconto;
    }

    document.getElementById("resultado").innerHTML = `
        Valor Bruto: R$ ${bruto.toFixed(2)} <br>
        Taxa Serviço: R$ ${taxa.toFixed(2)} <br>
        Desconto: R$ ${desconto.toFixed(2)} <br>
        Total Final: R$ ${total.toFixed(2)}
    `;
});