const listaDeChamadas = ['João', 'Juliana','Ana', 'Caio','Lara','Mari'];
// Esse metodo permite remover qualquer elemento de qualquer lugar do array e adicionar em qualquer lugar do array
// Ele utiliza tres parametros q são (O ultimo não é obrigatorio):
// Onde q o indice vai começar
// Quantos elementos q quero remover
// E o elemento q eu quero substituir/colocar no lugar 
listaDeChamadas.splice(1,2, 'Rodrigo');

                                // Outro Jeito de Utilizar o Metodo
// Adicionando sem deletar - Usando o indice para adicionar no lugar pretendido
// listaDeChamadas.splice(2,0,'Rodrigo');
console.log(listaDeChamadas);

const animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)