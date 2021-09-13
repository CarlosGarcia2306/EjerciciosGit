//Ejercicio 14
var contador=0;
while(contador<=50){

	if(contador%4==0){
		console.log(contador + " (Multiplo de 4)");
	}

	if(contador%5==0){
		console.log(contador);
		console.log("_______________________________________________")
	}

	if(contador%9==0){
		console.log(contador + (" (Multiplo de 9)"));
	}

	else{
		console.log(contador);
	}

}