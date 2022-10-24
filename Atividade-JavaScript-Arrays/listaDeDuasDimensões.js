const alunos =['Ana', 'João', 'Rodrigo', 'Fernando']
const mediaDosAlunos = [ 10 , 5 , 6, 3 ];

// Lista de dimenções é uma lista dentro de outra lista
let listaDeNotasEAlunos = [alunos, mediaDosAlunos]
// Para acessar um elemento dentro dessas listas: [] [], onde o primeiro é a lista e o segundo é o elemento
 console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)
//  Exemplo: Ele retorna Ana, sua media é 10