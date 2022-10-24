const nome = ['João', 'Juliana','Ana', 'Caio','Lara','Mari','Guilherme', 'Aline','Fabiana','Andre','Carlos','Paulo',
'Bia','Vivian','Isabely','Vinicios','Renan','Renan'];

// O metodo Slice dividi a array. 
// ele utiliza dois parametros q são: 
// onde ele vai começar a fazer o corte, 
// e onde ele vai parar esse corte
                                //9
const sala1 = nome.slice(0, nome.length/2); 
                            // 10
const sala2 = nome.slice(nome.length/2);

console.log(nome.length);
console.log('sala 1', sala1, 'sala 2', sala2);