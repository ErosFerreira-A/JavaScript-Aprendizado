function maiorNum(num0, num1){
	if(num0 > num1){
    	return `O maior número é o ${num0}, o que fora o primeiro número a ser digitado` 
    }else if(num1 > num0){
    	return `O maior número é o ${num1}, o que fora o segundo número a ser digitado` 
    }else if(num0 === num1){
    	return 'Os números são iguais'
    }else{
    	return '404 not fount'
    }
}


console.log(maiorNum(1,2));