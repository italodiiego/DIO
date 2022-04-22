var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('x');

function escolherJogada(id) {
    if (vencedor !== null) {
        return;
    }

    var tabuleiro = document.getElementById(id)
    if (tabuleiro.innerHTML !== '-') {
        return;
    }

    tabuleiro.innerHTML = jogador;
    tabuleiro.style.color = '#000';

    if (jogador === 'x') {
        jogador = 'o';
    } else {
        jogador = 'x';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var tabuleiro1 = document.getElementById(1) 
    var tabuleiro2 = document.getElementById(2) 
    var tabuleiro3 = document.getElementById(3) 
    var tabuleiro4 = document.getElementById(4) 
    var tabuleiro5 = document.getElementById(5) 
    var tabuleiro6 = document.getElementById(6) 
    var tabuleiro7 = document.getElementById(7) 
    var tabuleiro8 = document.getElementById(8) 
    var tabuleiro9 = document.getElementById(9) 

    if (checaSequencia(tabuleiro1, tabuleiro2, tabuleiro3)) {
        mudarCor(tabuleiro1, tabuleiro2, tabuleiro3)
        mudarVencedor(tabuleiro1)
        return
    }

    if (checaSequencia(tabuleiro4, tabuleiro5, tabuleiro6)) {
        mudarCor(tabuleiro4, tabuleiro5, tabuleiro6)
        mudarVencedor(tabuleiro4)
        return
    }

    if (checaSequencia(tabuleiro7, tabuleiro8, tabuleiro9)) {
        mudarCor(tabuleiro7, tabuleiro8, tabuleiro9)
        mudarVencedor(tabuleiro7)
        return
    }

    if (checaSequencia(tabuleiro1, tabuleiro4, tabuleiro7)) {
        mudarCor(tabuleiro1, tabuleiro4, tabuleiro7)
        mudarVencedor(tabuleiro1)
        return
    }

    if (checaSequencia(tabuleiro2, tabuleiro5, tabuleiro8)) {
        mudarCor(tabuleiro2, tabuleiro5, tabuleiro8)
        mudarVencedor(tabuleiro2)
        return
    }

    if (checaSequencia(tabuleiro3, tabuleiro6, tabuleiro9)) {
        mudarCor(tabuleiro3, tabuleiro6, tabuleiro9)
        mudarVencedor(tabuleiro3)
        return
    }

    if (checaSequencia(tabuleiro1, tabuleiro5, tabuleiro9)) {
        mudarCor(tabuleiro1, tabuleiro5, tabuleiro9)
        mudarVencedor(tabuleiro1)
        return
    }

    if (checaSequencia(tabuleiro3, tabuleiro5, tabuleiro7)) {
        mudarCor(tabuleiro3, tabuleiro5, tabuleiro7)
        mudarVencedor(tabuleiro3)
    }
}

function mudarVencedor(tabuleiro) {
    vencedor = tabuleiro.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarCor(tabuleiro1, tabuleiro2, tabuleiro3){
    tabuleiro1.style.background = '#0f0'
    tabuleiro3.style.background = '#0f0'
    tabuleiro2.style.background = '#0f0'
}

function checaSequencia(tabuleiro1, tabuleiro2, tabuleiro3) {
    var eigual = false

    if(tabuleiro1.innerHTML !== '-' && tabuleiro1.innerHTML === tabuleiro2.innerHTML && tabuleiro2.innerHTML === tabuleiro3.innerHTML) {
        eigual = true
    }

    return eigual
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var tabuleiro = document.getElementById(i);
        tabuleiro.style.background = '#eee';
        tabuleiro.style.color = '#eee';
        tabuleiro.innerHTML = '-';
    }

    mudarJogador('x')
}