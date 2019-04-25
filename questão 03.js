

let contarVogais = function(palavra) {
    let totalVogal = 0;
    let vogais = ['a', 'e', 'i', 'o', 'u','í'];
    let i;

    for (i = 0; i < palavra.length; i++ ) {
        if(vogais.indexOf(palavra[i]) != -1) {
            totalVogal++;
        }
    }

    return totalVogal;
}
console.log(contarVogais('paralelepípedo'))