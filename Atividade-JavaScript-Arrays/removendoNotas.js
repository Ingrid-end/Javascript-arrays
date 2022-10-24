const notas = [10, 7, 8, 5, 10];
// Metodo pop removo o ultimo elemento da nossa lista
notas.pop()
// Ele não aceita nenhum parametro/elemento
console.log(notas);

let medias = (notas[0] +notas[1] +notas[2] +notas[3])/notas.length;
console.log(medias);