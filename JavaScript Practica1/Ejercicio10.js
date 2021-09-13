//Ejercicio 10
var numeroEj10=promt("Introduce un numero por teclado");

if(numeroEj10.between(0,2)){
	console.log("La nota es muy deficiente");
}

if(numeroEj10.between(3,4)){
	console.log("La nota es insuficiente");
}

if(numeroEj10.between(5,6)){
	console.log("La nota es Suficiente");
}

if(numeroEj10.between(6,7)){
	console.log("La nota es 'Bien'");
}

if(numeroEj10.between(7,9)){
	console.log("La nota final es Notable");
}

if(numeroEj10.between(9,10)){
	console.log("La nota es Sobresaliente");
}
