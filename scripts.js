//camelCase para escrita de variável, sendo que as mesmas são caseSensitive
// Tipagem no JS não é alta e é dinâmica
// Não existe diferenciação em JS, exemplo : number(int e float já está dentro desse conjunto)

let nome = "Eros";
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