//Ejercicio5
var numero1;
var numero2;
var valorFinal;

function suma(numero1, numero2){
	valorFinal=numero1+numero2;
}

function resta(numero1,numero2){
	valorFinal=numero1-numero2;
}

function multiplicacion(numero1, numero2){
	valorFinal=numero1*numero2;
}

function division(numero1, numero2){
	valorFinal=numero1/numero2;
}

numero1=promt("Introduce el valor del numero 1", 8);
numero2=promt("Introduce el valor del numero 2", 2);

suma(numero1,numero2);
resta(numero1,numero2);
multiplicacion(numero1,numero2);
division(numero1,numero2);