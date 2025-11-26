/* elementos do DOOM */
const tabuleiro = 
document.getElementeById('tabuleiro');
const celula =
document.querySelectorAll('[data-celula]');
const status =
document.getElementById('status');
const botaoReiniciar =
document.getElementById('reiniciar');

/*váriaveis do jogo*/
let jogadorAtual = 'X';
let jogoAtivo = true;

/* ACHO QUE TODAS AS CONBINAÇÕES */
const combinacoesVencedoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6] // Diagonais
];

/* clique */
function CliqueCelula(e) {
    const celula = e.target;
    const indiceCelula = Array.from(celulas).indexOf(celula);
}

/* adendo !jogoAtivo é uma váriavel logica(booleana) de NOT */
if (celula.textContent !== '' || !jogoAtivo) return;
