//Exercício 4

const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53
const total = sp + rj + mg + es + outros
function calculoPorcentagem() {
    const porcentagemSP = sp * 100 / total;
    const porcentagemMG = mg * 100 / total;
    const porcentagemES = es * 100 / total;
    const porcentagemRJ = rj * 100 / total;
    const porcentagemOUTROS = outros * 100 / total;
    return exibicaoPorcentagem(porcentagemSP, porcentagemMG, porcentagemES, porcentagemRJ, porcentagemOUTROS);
}

function exibicaoPorcentagem(porcentagem1, porcentagem2, porcentagem3, porcentagem4, porcentagem5) {
    console.log(`A porcentagem do estado de São Paulo foi: ${porcentagem1}%`);
    console.log(`A porcentagem do estado de Minas Gerais foi:${porcentagem2}%`);
    console.log(`A porcentagem do estado do Espírito Santo foi:${porcentagem3}%`);
    console.log(`A porcentagem do estado do Rio de janeiro foi:${porcentagem4}%`);
    console.log(`A porcentagem dos outros estados foram:${porcentagem5}%`);
}

calculoPorcentagem()

