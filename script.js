// script.js - Versão adaptada às instruções da professora

const img = document.getElementById("mainImage");           // imagem principal da criatura
const avatarSmall = document.getElementById("avatarSmall");
const fundoDia = "bg.png";
const fundoNoite = "bg_noite.png";

const estados = {
    normal: "b_n.png",
    puto: "b_p.png",
    morto: "b_d.png",
    clicado: "b_c.png",
    feliz: "b_a.png",
};

let contador = 0;
let intervalo = null;
let timeoutClique = null;
let timeoutBack = null;

function controlador() {
    if(intervalo) clearInterval(intervalo);

    contador = 0;
    img.src = estados.normal;
    avatarSmall.src = estados.normal;

    intervalo = setInterval(() => {
        contador++;
        console.log("Tempo", contador);

        if(contador >= 20){
            img.src = estados.morto;
            avatarSmall.src = estados.morto;
            clearInterval(intervalo);
        } 
        else if(contador >= 10){
            img.src = estados.puto;
            avatarSmall.src = estados.puto;
        } 
        else{
            img.src = estados.normal;
            avatarSmall.src = estados.normal;
        }
    }, 1000);
}

function alimentar(){
    if(intervalo) clearInterval(intervalo);

    if(timeoutClique) clearTimeout(timeoutClique);

    if(timeoutBack) clearTimeout(timeoutBack);

    contador = 0;

    console.log("Comendo");

    img.src = estados.clicado;
    avatarSmall.src = estados.clicado;

    timeoutClique = setTimeout(() => {
        img.src = estados.feliz;
        avatarSmall.src = estados.feliz;

        timeoutBack = setTimeout(() => {
            img.src = estados.normal;
            avatarSmall.src = estados.normal;
            controlador();
        }, 2000);
    }, 1000);
}

function atualizarFundo() {
    if(cicloDiaNoite) clearInterval(cicloDiaNoite);

    horas = 0;

    cicloDiaNoite = setInterval(() => {
        horas++;

        if(horas >= 12) {
            document.body.style.backgroundImage = `url('${fundoNoite}')`;
            console.log("Modo Noite");
        } 
        else{
            document.body.style.backgroundImage = `url('${fundoDia}')`;
            console.log("Modo Dia");
        }

        if(horas >= 24) horas = 0;
    }, 100);
}

function mostrarGostosin() {
    const modal = document.getElementById("modal");
    const modalImagem = document.getElementById("modalImagem");
    
    modalImagem.src = "gostosin.png";
  modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function mostrarProfi() {
    const modal = document.getElementById("modal");
    const modalImagem = document.getElementById("modalImagem");
    
    modalImagem.src = "profi.png";
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

controlador();
atualizarFundo();

window.alimentar = alimentar;