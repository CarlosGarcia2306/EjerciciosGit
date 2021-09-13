//Ejercicio16
const dniArray = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q',
'V', 'H', 'L', 'C', 'K', 'E'];
var dni=promt("Introduce tu dni");
console.log("El dni introdcido es: " + dni);

continuar=true;
var indexDni;
var letra;

while(continuar==true){
	indexDni=dni%23;
	letra=dniArray.indexOf(indexOf);
	alert("La letra del dni es: " + letra);
	continuar=false;
}
