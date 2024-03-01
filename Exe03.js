function verificarVelocidade(velocidade) {
    const pontoKm = 5;
    const velocidadeMaxima = 70;

    if (velocidade <= velocidadeMaxima) {
        return 'Tudo certo!';
    } else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / pontoKm);
        
        if (pontos >= 12) {
            return 'Carteira suspensa';
        } else {
            return 'Pontos: ' + pontos;
        }
    }
}

console.log(verificarVelocidade(90));