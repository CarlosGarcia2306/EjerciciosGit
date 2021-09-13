const continuar=true;
let numero1=0;
let numero2=0;
var contador=0;

const objeto1={
	"prop1":1,
	"prop2":"color",
	"prop3":null,
	"prop4":undefined
}
function sumar(){
	contador=+numero1+numero2;
	console.log(contador);
}

function restar(){
	contador=numero1-numero2;
	console.log(contador);
}
function multiplicar(){
	contador=numero1*numero2;
	console.log(contador);
}

function dividir(){
	contador=numero1/numero2;
	console.log(contador);
}

function sumav2(){
	contador=numero1+numero2;
	alert("El valor del contador es: " + contador);
}

function multiplicarv2(numero1, numero2){
	contador=numero1*numero2;
	alert("El valor del contador es:" + contador);
}

function dividirv2(numero1, numero2){
	contador=numero1/numero2;
	alert("El valor del contador es: " + contador);
}

//arrow function o funciones flecha
() => console.log("Esto es una arrow function v1");

() => alert("Esto es una arrow function v2");

(numero1,numero2) => numero1+numero2;

(numero1,numero2) => numero1-numero2;

(numero1,numero2) => numero1*numero2;

(numero1,numero2) => numero1/numero2;


while(continuar==true){
	if (contador==0){
		console.log("El valor del contador es: " + contador);
		sumar();
	}

	else if(contador == 3){
		console.log("El valor del contador es:" + contador);
		multiplicar();
	}
}


var coleccion={"Cadena1":String,"Cadena2":String,"Cadena3":String};
var coleccionObjetos=[];

for(s in coleccion){
	console.log("El valor del elemento del array es: " + s);
}

while(continuar!=true){
	switch(numero1){
		case 0:
				console.log("El valor del contador es:" + contador);
				continuar=true;
			break;
		case 2:
				console.log("El valor del contador es:" + contador);
				continuar=true;
			break;
		case 4:
				console.log("El valor del contador es: " + contador);
				continuar=true;
			break;
		default:
			alert("El valor del contador no se encuentra en el intervalo de 0 y 4");
	}
}


//Creacion de objetos mediante funciones simples y funciones arrow
function Persona(){
	this.nombre;
	this.apellidos;
	this.edad;
	this.genero;
	this.estatura;
	this.colorPelo;
}

let persona1 = new Persona();


let coche1 = () => this.color;this.marca;this.modelo;this.velMax;this.aceler;

let coche2 = () => {
	this.color;
	this.marca;
	this.modelo;
	this.velMax;
	this.aceler;
}

//Datos tipo fecha
var fecha = new Date();
console.log("La fecha actual es: " + fecha.getDate());
console.log("El dia actual es: " + fecha.getDay());
console.log("La hora actual es: " + fecha.getHours());
console.log("Los minutos actuales son:" + fecha.getMinutes());
console.log("Los segundos actuales son:" + fecha.getSeconds());


//Ejercicio11
//Hacer mediante un bucle while y concatenacion de cadenas

//Ejercicio12
//Hacer mediante un bucle while y concatenacion de cadenas

//Ejercicio13
//Hacer con un doble bucle for, semajante al dibujo de piramides 

var i=promt("Introduce un valor por teclado",1);
var y=i;
for(i;i<=6;i++){
	/*for(){
		console.log("...");
	}*/
}

//Ejercicio18
//Utilizar Objeto Date y sus metodos para resolver este ejercicio.

//Ejercicio 19
//Utilizar objeto String y sus metodos para recorrer la cadena mediante un index incrementar y comprarlos con los elementos de un array de vocales.

//Ejercicio 21
//Crea un array Bidimensional

//Buscar todos los dias 1 de enero que sean domingo del 2030 al 2050.
//Hacer un bucle while con una condicional.

//Ejercicio 25
//Ejercicio de trabajo con cadenas de caracteres.

//Ejercico 28
//Realizar las expresiones regulares


