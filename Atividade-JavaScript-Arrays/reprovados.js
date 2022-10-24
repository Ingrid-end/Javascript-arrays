const nomes = ['Ana', 'Maria', 'Lucas', 'Gabriel']
const notas = [7 , 4.5 , 8, 7.5]
                    // Filter precisa retornar booleand
const reprovados = nomes.filter( (aluno, indice) => notas[indice] < 5)
console.log(reprovados);
