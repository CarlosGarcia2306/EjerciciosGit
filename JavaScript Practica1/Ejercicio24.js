//Ejercicio 24 cuantos dias faltan para navidad.
var navidad = new Date("25-12-2021");
var actual=new Date();
var mesesrestantes = navidad.getMonth-actual.getMonth;
var diasrestantes;
if(navidad.getDay>actual.getDay){
    diasrestantes=navidad.getDay-actual.getDay;
}else{
    diasrestantes=actual.getDay-navidad.getDay;
}
console.log("Para navidad queda: " + mesesrestantes + "meseses" + " y " + diasrestantes + " dias.");
