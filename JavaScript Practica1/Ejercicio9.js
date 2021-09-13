//Ejercicio9
var letra=promt("Introduce un caracter");
var vocales={'a':String,'e':String,'i':String,'o':String,'u':String};

for(s in vocales){
	if(letra.like(s)){
		console.log("El valor introducido es vocal");
	}else{
		console.log("El valor introducido no es vocal");
	}
}