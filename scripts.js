//camelCase para escrita de variável, sendo que as mesmas são caseSensitive
// Tipagem no JS não é alta e é dinâmica
// Não existe diferenciação em JS, exemplo : number(int e float já está dentro desse conjunto)

/*let nome = "Eros";
let idade = 22;
let altura = 1.80;


console.log(nome);
console.log(idade);
console.log(altura);

let pessoa = {
    nome: 'Zeus',
    idade: 22,
    sobreNome: 'Ferreira'
    
};

console.log(pessoa);

// Arrays

let familia = [22, 1, 22];
console.log(familia.flatMap);



// função
let mudaId = nome + ',' + ' ' + idade; 
function mudaIdentidade(nome, idade){
    mudaId = nome + ' ' + idade;
};

console.log(mudaId);
mudaIdentidade("Victor,", " 30");
console.log(mudaId);


function MultiplicarIdade(idade){
    return idade* 10;
}

let resultado = MultiplicarIdade(22);
document.write(`Você tem ${resultado}, velho demais !!!]`);

let idade = 22;
let tipo = idade === 22 ? 'premiu' : 'comum';
document.write(tipo);

//______________________



let temDinheiro = true;
let temTempo = true;
let estabilidade = temTempo || temDinheiro;
document.write('Você tem boas condições ', estabilidade);

let hater = !estabilidade;
document.write('Você é pobre, ', hater);

// Outro código, testando IF e ELSE
let comida = 'Gostosa';

if (comida === 'Gostosa') {
    console.log('Muito boa a comida, melhor restaurante !!!');
} else {
    console.log('Comida ruim, nunca mais volto aqui!!!')
}

// switch case

let saude; // saudável, pouca saúde, grave
saude = 'grave';

switch(saude){
    case'saudável':
    console.log('Aprovado');
    break;

    case'pouca saúde':
    console.log('Em análise');
    break;

    case'grave':
    console.log('Reprovado');
    break

    default:
    console.log('Comando não reconhecido ...');
}

// Loop For
let i = 0;

for (i < 10; i++){
    console.log("Estou aprendendo !!!")
}

*/

// Mini projeto trocando os valores de varáveis

let a = 'vermelho';
let b = 'azul';
let c = a ;
let i = 0;


function trocaValores(a, b){
	a = b;
    b = c;
    
    console.log(a);
	console.log(b + ' este é o b');
    
}

trocaValores(a, b);