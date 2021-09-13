//Ejercicio27
var sueldo = promt("Inica los años que llevas en la empresa.")
var aniosEmpresa=promt("Indica los años que llevas en la empresa.");

if(sueldo<500 && aniosEmpresa>=10){
    sueldo = sueldo + ((sueldo*20)/100);
    console.log("El nuevo suledo es: " + sueldo);
}

if(sueldo<500 && aniosEmpresa<10){
    sueldo= sueldo + ((sueldo*10)/100);
    console.log("El nuevo suledo es: " + sueldo);
}

if(sueldo>=500){
    console.log("El sueldo: " + sueldo + " no cambia.");
}