/*
================================================================
*/

/*let numeros = [3,2,11,20,8,7];
let numerosC = numeros.map(item => item % 2 ? item * 2 : item);
console.log(numerosC);
function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2;
}
let numeros = [10, 30];
console.log(somaDoisNumeros(...numeros));*/

/*
================================================================
*/

/*
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

console.log(aprovados);*/

/*
================================================================
*/

   /* function validaCodigo(codigo) {

        // cria a expressão regular. Poderíamos ter usado
        // a sintaxe new RegExp(/\D{3}-\D{2}-\d{2}/)
        // \D é qualquer coisa não dígito, \D{3} é qualquer coisa não dígito que forme um grupo de 3 caracteres. E \d é qualquer dígito.
        let expressao = /\D{3}-\D{2}-\d{2}/;

        // toda expressão regular possui o método test
        // que recebe o alvo do teste, retornando true
        // se passou, e false se falhou
        if(expressao.test(codigo)) {
            alert('Código válido!');
        } else {
            alert('Código inválido');
        }

    }

    validaCodigo('GWZ-JJ-12'); // válido
    validaCodigo('1X1-JJ-12'); // inválido

class Codigo{

    constructor(texto) {
        if(!this._valida(texto)) throw new Error(`O texto ${texto} não é um código válido`);
        this._texto = texto;
    }

    _valida(texto) {
        return /\D{3}-\D{2}-\d{2}/.test(texto);
    }
    get texto() {
        return this._texto;
    }
}


let codigo1 = new Codigo('GWZ-JJ-12'); // válido
console.log(codigo1.texto);
let codigo2 = new Codigo('1X1-JJ-12'); // inválido
console.log(codigo2.texto);

class Codigo{

    constructor(expressao){
        this._expressao = expressao;
    }
    validaCodigo(codigo){
        let code = this._expressao.test(codigo) ? 'codigo valido' : 'codigo invalido';
        return code;
    }
}


let code1 = new Codigo(/\D{3}-\D{2}-\d{2}/);
console.log(code1.validaCodigo('GWZ-JJ-12'));
console.log(code1.validaCodigo('1X1-JJ-12'));
*/


/*
================================================================
*/

/*function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
// exibeNoConsole(listaDeNomes1);
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
// exibeNoConsole(listaDeNomes2);
exibeNoConsole([].concat(listaDeNomes1,listaDeNomes2));
*/

/*
================================================================
*/

/*
class ConversorXML {

    static converte(objeto) {
        // converte um objeto em XML
    }
}

let conversor = new ConversorXML();
conversor.converte({nome: 'Guaraci', idade: 40});
*/

/*
================================================================
*/

/*
numeros.reduce(function(total,num) {
    return total * num;
}, 1);

numeros.reduce((total,num) => total * num, 1);
*/

/*
================================================================
*/


/*let dobro = numeros.map(function(num) {
    return num * 2;
});
let metade = numeros.map(function(num) {
    return num/2;
});
let raiz = numeros.map(function(num) {
    return Math.sqrt(num);
});*/
/*
let dobro = numeros.map(num => num * 2);

let metade = numeros.map(num => num / 2);

let raiz = numeros.map(num => Math.sqrt(num));*/

/*
================================================================
*/
