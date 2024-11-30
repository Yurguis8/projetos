let numeros = document.getElementsByClassName("normal");
let visor = document.getElementById('pvisor');
let c = document.getElementById("c");
let igual = document.getElementById("igual");
let mais = document.getElementById("mais");
let ponto = document.getElementById("ponto");
let menos = document.getElementById('menos');
let raiz = document.getElementById('raiz');
let divisao = document.getElementById('divisao');
let multi = document.getElementById('multi');
let porcent = document.getElementById('porcent');

for (let i = 0; i < numeros.length; i++) {
        numeros[i].addEventListener('click', () => {
            numeros[i].style.backgroundColor = "rgb(100, 216, 255)";
            setTimeout(() => {
            numeros[i].style.backgroundColor = "rgb(220, 233, 241)";
        }, 300);
        let pvalue = visor.innerHTML;
        visor.innerHTML = pvalue + numeros[i].value;
        });
}
function analise() {
    let valorv = visor.textContent
    let slice = valorv.slice(-1)
    for (let i = 0; i < 9; i++) {
    if (slice == i ) {
        if (valorv.includes('.') || slice == '') {
        } else {
            let pvalue = visor.innerHTML;
        visor.innerHTML = pvalue + ponto.value;
        }
    } }};

function verificador(sinal) {
    let valorv = visor.textContent
    let slice = valorv.slice(-1)
    for (let i = 0; i < 9; i++) {
    if (slice == '' || slice != i) {
    } else {
        let pvalue = visor.innerHTML;
        visor.innerHTML = pvalue + sinal.value;
    }
}
}
function styles(nome){
    nome.style.backgroundColor = "rgb(100, 216, 255)";

    setTimeout(() => {
        nome.style.backgroundColor = "rgb(220, 233, 241)";
    }, 300);
    switch (nome) {
        case c:
            visor.innerHTML = '';
            break;
        case igual:
            visor.innerHTML = igual.value;
            break;
        case ponto:
            analise();
            break;
        default:
        verificador(nome);
            break;
    }
}
