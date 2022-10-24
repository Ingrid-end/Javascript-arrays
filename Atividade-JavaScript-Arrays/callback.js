

// Da para usar o forEach assim tbm:
// So funciona se o q passarmos como parametro for um function ( lembrando q '=>' simboliza uma function)

const nomes = ["Paula", "Julia", "Rogrigo", "Paulo"]

nomes.forEach(ImprimirNomes)

function ImprimirNomes(nome){
    console.log(nome);
}