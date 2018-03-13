// let numeros = [3,2,11,20,8,7];
// let numerosC = numeros.map(item => item % 2 ? item * 2 : item);
// console.log(numerosC);
// function somaDoisNumeros(numero1, numero2) {
//     return numero1 + numero2;
// }
// let numeros = [10, 30];
// console.log(somaDoisNumeros(...numeros));
class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

var avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

//Old Code
// var aprovados = avaliacoes
//     .filter(function(prova) { return prova.nota >= 7; })
//     .map(function(prova) { return prova.aluno.nome;});

var aprovados = avaliacoes
    .filter(prova => prova.nota >= 7)
    .map(prova => prova.aluno.nome);

console.log(aprovados);