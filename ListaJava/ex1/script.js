const botao = document.getElementById("validar");

botao.addEventListener("click", () => {
    const cpf = document.getElementById("cpf").value.replace(/\D/g, "");
    const resultado = document.getElementById("resultado");

    if (validarCPF(cpf)) {
        resultado.textContent = "CPF Válido";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "CPF Inválido";
        resultado.style.color = "red";
    }
});

function validarCPF(cpf) {
    if (cpf.length !== 11) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf[i - 1]) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;

    if (resto !== parseInt(cpf[9])) return false;

    soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf[i - 1]) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;

    return resto === parseInt(cpf[10]);
}