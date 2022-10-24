//Mais um metodo callback 

const notas = [ 10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(nota => nota === 10 ? nota : ++nota);

console.log(notasAtualizadas);

// Diferença entre ele e o forEach()
    // Tudo q ele faz é retornada a uma nova array (joga uma array atualizada)
        // Enquanto o método forEach não tem um retorno, o método map() pode retornar 
    // um array se a função informada tiver um return em seu escopo.