const botoes = document.querySelectorAll(".botao");
for(let i=0;i <botoes.length;i++){ botoes[i].onclick = function() {

for(let j=0;j<botoes.length;j++) { botoes[j].classList.remove("ativo");
}
botoes[i].classList.add("ativo");
}
}

const textos = document.querySelectorAll(".aba-conteudo");

botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");

botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador")
contadores[0].textContent = "Contagem regressiva";
const tempoObjetivo = new Date("2024-10-05T00:00:00");

contadores[0].textContent = tempoObjetivo;

let tempoAtual = new Date ();
contadores[0].textContent = tempoObjetivo - tempoAtual;

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual; 
}

let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);

return dias + "dias"