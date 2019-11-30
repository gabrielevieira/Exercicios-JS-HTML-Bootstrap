
// Para um jogo, precisamos saber se um personagem morreu ou não depois de
// sofrer um ataque. Faça uma função que receba 2 parâmetros, DANO e SAÚDE.
// A função deve retornar verdadeiro se o dano for matar o personagem (ou seja,
// deixar sua saúde menor ou igual a zero); falso caso contrário.

function ataque(dano, saude) {
    return dano > saude  ? 'Morreu!!' : 'Vivo!!'
}

console.log(ataque(100, 50));
console.log(ataque(50, 100));