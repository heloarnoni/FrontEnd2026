<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Validador de Cartão</title>

<style>

body{
    font-family: Arial, Helvetica, sans-serif;
    background: #0f172a;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.card{
    background: #1e293b;
    width: 450px;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
}

h2{
    text-align: center;
    margin-bottom: 20px;
    color: #f8fafc;
}

input, button{
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
}

input{
    background: #334155;
    color: white;
}

input::placeholder{
    color: #cbd5e1;
}

button{
    background: #8b5cf6;
    color: white;
    cursor: pointer;
    transition: 0.3s;
}

button:hover{
    background: #7c3aed;
}

#resultado{
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    line-height: 1.8;
    font-weight: bold;
}

.valido{
    background: #14532d;
    color: #bbf7d0;
}

.invalido{
    background: #7f1d1d;
    color: #fecaca;
}

</style>
</head>
<body>

<div class="card">

    <h2>Validador de Segurança Infinity</h2>

    <input type="text" id="cartao" placeholder="Digite o número do cartão">

    <button id="analisar">Analisar Cartão</button>

    <div id="resultado"></div>

</div>

<script>

document.getElementById("analisar").addEventListener("click", () => {

    const numero = document
    .getElementById("cartao")
    .value
    .replace(/\D/g, "");

    const resultado = document.getElementById("resultado");

    if(numero.length < 13 || numero.length > 16){

        resultado.innerHTML = "Número inválido!";

        resultado.className = "invalido";

        return;
    }

    const valido = validarLuhn(numero);

    let bandeira = "Desconhecida";
    let setor = "Financeiro";
    let banco = "Não identificado";

    if(numero.startsWith("4")){

        bandeira = "Visa";
        banco = "Banco Visa";

    }
    else if(/^5[1-5]/.test(numero)){

        bandeira = "MasterCard";
        banco = "Banco Master";

    }
    else if(numero.startsWith("3")){

        bandeira = "American Express";
        banco = "Amex Bank";

    }
    else if(numero.startsWith("6")){

        bandeira = "Discover";
        banco = "Discover Bank";

    }

    resultado.innerHTML = `
    
        Status: ${valido ? "Válido" : "Inválido"} <br>

        Bandeira: ${bandeira} <br>

        Categoria de Setor: ${setor} <br>

        Banco Emissor: ${banco}

    `;

    resultado.className = valido ? "valido" : "invalido";

});

function validarLuhn(numero){

    let soma = 0;

    let dobrar = false;

    for(let i = numero.length - 1; i >= 0; i--){

        let digito = parseInt(numero[i]);

        if(dobrar){

            digito *= 2;

            if(digito > 9){

                digito -= 9;

            }

        }

        soma += digito;

        dobrar = !dobrar;

    }

    return soma % 10 === 0;

}

</script>

</body>
</html>