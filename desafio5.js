//Exercício 5
const stringQualquer = 'Leonardo'

function reverseString(string) {
    let novaString = '';
    for(let i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }
    console.log(novaString)
    return
}

reverseString(stringQualquer)