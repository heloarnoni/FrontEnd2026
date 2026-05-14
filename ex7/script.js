document.getElementById("analisar").addEventListener("click", () => {

    const numero = document
        .getElementById("cartao")
        .value
        .replace(/\D/g, "");

    const resultado = document.getElementById("resultado");

    if (numero.length < 13 || numero.length > 16) {
        resultado.innerHTML = "Número inválido";
        return;
    }

    const valido = validarLuhn(numero);

    let bandeira = "Desconhecida";

    if (numero.startsWith("4")) {
        bandeira = "Visa";
    }
    else if (/^5[1-5]/.test(numero)) {
        bandeira = "MasterCard";
    }

    resultado.innerHTML = `
        Status: ${valido ? "Válido" : "Inválido"} <br>
        Bandeira: ${bandeira}
    `;
});

function validarLuhn(numero) {

    let soma = 0;

    let inverter = false;

    for (let i = numero.length - 1; i >= 0; i--) {

        let digito = parseInt(numero[i]);

        if (inverter) {

            digito *= 2;

            if (digito > 9) {
                digito -= 9;
            }
        }

        soma += digito;

        inverter = !inverter;
    }

    return soma % 10 === 0;
}