const resultado = fizzBuzz(16);
console.log(resultado);

function fizzBuzz(entrada){
	if(typeof entrada !== 'number'){
    	return 'Não é uma informação valida'
    }else if(entrada % 3 === 0 && entrada % 5 === 0){
    	return 'FizzBuzz';
    }else if(entrada % 3 === 0){
    	return 'Fizz';
    }else if(entrada % 5 === 0){
    	return 'Buzz';
    }else if(entrada % 3 !=0 || entrada % 5 != 0){
    	return `${entrada}`
    }
}