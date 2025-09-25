// Declarações
let numeroSecreto; // O número que o jogador precisa adivinhar
let contadorDeChances = 1; // Começa na primeira chance
const MAX_CHANCES = 10; // Número máximo de chances

const campoPalpite = document.querySelector('#campoPalpite');
const botaoEnviarPalpite = document.querySelector('#botaoEnviarPalpite');
const botaoReiniciar = document.querySelector('#botaoReiniciar');

const mensagemElement = document.querySelector('#mensagem');
const palpitesAnterioresElement = document.querySelector('#palpites-anteriores');
const dicaElement = document.querySelector('#dica');
const chancesRestantesElement = document.querySelector('#chancesRestantes');

let listaDePalpites = []; // Array para guardar os palpites que o jogador já deu

function iniciarJogo() {
    // Gerar um novo número secreto (entre 1 e 100)
 // Gera um número entre 0 (inclusive) e 1 (exclusive)
 // Multiplicamos por 100 para ter entre 0 e 99.99...
// Adicionamos 1 para ter entre 1 e 100.99...
 // Math.floor() arredonda para o menor inteiro, então teremos entre 1 e 100.
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log("Número Secreto (apenas para teste):", numeroSecreto); // Ajuda no debug!
}