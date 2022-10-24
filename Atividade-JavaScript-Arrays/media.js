// uma lista ordenada de valores enumerados em que cada valor é chamado de elemento, 
//e cada elemento se localiza numa posição na lista chamada de índice.
    // Cada valor é chamado de elemento;
    // Cada elemento está localizado em uma posição na lista, chamada de índice; 
    //                  ( chamamos de índice (em inglês, index) o número que identifica a posição de um valor em um array.)


//Medias 10, 6, 5, 8, 7, 5

// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;

// let media = ( nota1 + nota2 + nota3 + nota4)/4

                                            // Agora com uma lista/ array

const notas = [10, 6.5,8,7.5];
                                        
let media = (notas[0]+ notas[1]+ notas[2]+ notas[3])/notas.length
                                                // length = Esta propriedade especifica o tamanho de um array, ou melhor dizendo, o número de elementos.
console.log(media);

