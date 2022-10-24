const alunos =['Ana', 'João', 'Rodrigo', 'Fernando']
const mediaDosAlunos = [ 10 , 5 , 6, 3 ];

// Lista de duas dimensões
let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibiNomeNota = (nomeAluno) => {
        //Metodo includes verifica se o parametro passado esta dentro do array(como se fosse um booleand, true || false), o valor é passado no console.log
    if (listaDeNotasEAlunos[0].includes(nomeAluno)){
        //Metodo indexOf (index de)tras qual o numero do indice pedido
    let indice = listaDeNotasEAlunos[0].indexOf(nomeAluno)
    return listaDeNotasEAlunos[0][indice] + ', sua media é' + listaDeNotasEAlunos[1][indice]
    }else{
        return 'Aluno não esta cadastrado'
    }
    
}
                        // Passamos o valor do parametro nomeAluno como Ana e ai ele devolve as informações pedidas
console.log(exibiNomeNota("Rodrigo"));