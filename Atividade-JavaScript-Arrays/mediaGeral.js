// Mais um callback - precisa de uma function

const salaJs = [7, 8, 8, 7 , 10, 6.5, 4, 10, 7];
const salaJava = [6, 5,  8, 9, 5, 6];
const salaPy = [ 7, 3.5 , 8 , 9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual)=> atual + acum,0)
    return somaDasNotas/notasDaSala.length;
}
console.log('Js', mediaSala(salaJs), 'Java', mediaSala(salaJava), 'Py', mediaSala(salaPy));

const nota = [10, 6.5, 8,7]

const media = nota.reduce((acum, atual)=> atual + acum, 0)/ nota.length

console.log( media);