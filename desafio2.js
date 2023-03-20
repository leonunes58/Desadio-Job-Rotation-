//Exercício 2
const numUser = 9;
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

function sequenciaFibonacci() {
    for(let i = 2; i < 1000; i++) {
        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    }
    return filtroFibonacci() 
}

function filtroFibonacci() {
    const filtraElemento = fibonacci.filter((e) => {
        return numUser == e
    })
    return verificacao(filtraElemento)
}

function verificacao(valorEncontrado) {
    if(valorEncontrado == numUser) {
        console.log(`O número ${numUser} pertence a uma sequencia fibonacci!`)
    } else {
        console.log(`O número ${numUser} não pertence a uma sequencia fibonacci!`)
    }
}

sequenciaFibonacci()






