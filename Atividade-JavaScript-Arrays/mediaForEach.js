//  Metodo q usa Callback
    // So funciona se o q passarmos como parametro for um function

const notas= [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
        // forEach significa para cada
            // Metodo passa por cada elemento do array
notas.forEach( nota => {
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length;

console.log(media);

// Diferença entre ele e o Map( )
    // Enquanto o método forEach não tem um retorno, o método map() pode retornar 
    // um array se a função informada tiver um return em seu escopo.