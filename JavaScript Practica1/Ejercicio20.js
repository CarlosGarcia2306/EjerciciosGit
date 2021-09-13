//Ejercicio 20
var arrayEjercicio20=[];

arrayEjercicio20.push(21);
arrayEjercicio20.push(5);
arrayEjercicio20.push(222);
arrayEjercicio20.push(421);
arrayEjercicio20.push(345);

var continuar=true;
var contador=0;
var array2=[];
var valorIntroducidoEj20;


//Creo un menu que no se cierra a menos que lo fuerce a ello.
while(continuar==true){
	//El usuario añade elementos al array mediante el teclado.
	while(contador<6){
		valorIntroducidoEj20 = promt("Introduce un valor");
		array2.push(valorIntroducidoEj20);
	}
	console.log("Mostrando los elementos pares del array 1... /n");

	for(n in arrayEjercicio20){
		if(n%2==0){
			console.log(n);
		}
	}

	valorIntroducidoEj20=promt("Teclea un valor que deseas buscar dentro del segundo array");

	/*if(valorIntroducidoEj20 in array2){
		//Si coincide devolver el indice del valor introducido
		console.log(array2.indexOf(valorIntroducidoEj20));
	}*/

	for(n in arrayEjercicio20){
		if(valorIntroducidoEj20==n) {
			console.log(array2.indexOf(n));
		}
	}

	for(n in arrayEjercicio20){
		if(n>10){
			console.log(n);
		}
	}

    //Crear un string a partir de todos los elementos del primer array.
    var cadenaArray1Ej20="";

    for(n in arrayEjercicio20){
        cadenaArray1Ej20=+n;
    }

	//Borrar primer elemento y el ultimo
	array2.shift();
	array2.pop();
    //Elminar el elemento del medio.

    //Unir los dos arrays en uno nuevi
    var contadorEj20;
    var array3Ej20=[];
  
    for(contadorEj20;contadorEj20<arrayEjercicio20.length;contadorEj20++){
        array3Ej20.add(arrayEjercicio20.indexOf(contadorEj20));
        arrayEjercicio20.add(array2.indexOf(contadorEj20));
    }

    for(e in array3Ej20){
        console.log(e);
    }
    
    //Crear un nuevo array con los elementos impares del array 1.
    var array4=[];
    for(e in arrayEjercicio20){
        if((e%2)==0){
            array4.add(e);
        }
    }

    //Sumar un dos a cada uno de los elementos del array2.
    for(e in array2){
        e=+2;
    }

    //Duplicar los dos primeros elementos del primer array a partir de la posicion 4
    var longArray2Ej20=array2.length;
    for(i=3;i<longArray2Ej20;i++){
        arrayEjercicio20.push(array2.indexOf(i));
    }

    //Guardar un 6 en cada una de las posiciones del array2
    for(e in array2){
        array2.indexOf(e)=+6;
    }

    //Mostrar el contenido del array2 empezando desde el final hasta el principio.
    var contador=array2.length;
    for(contador;contador>0;contador--){
        console.log("Elemento " + contador + " : " + array2.indexOf(contador));
    }

    //Ordenar de mayor a menor los elementos de un array
    //Para cada elemento del array si es mayor que la primera posicion lo pongo el primero en el array. Utilizar unshift
    var i=1;
    for(i;i<arrayEjercicio20.length;i++){
        if(arrayEjercicio20.indexOf(i)>arrayEjercicio20.indexOf(i-1)){
            arrayEjercicio20.unshift(arrayEjercicio20.indexOf(i));
        }
    }

}