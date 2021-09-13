//Ejercicio 29 Clases
function PersonaEj29(nombre,apellidos,fechaNacimiento,edad,dni,numeroSegSocial,estadoCivil){
    this.nombre=nombre,
    this.apellidos=apellidos,
    this.fechaNacimiento=fechaNacimiento,
    this.edad=edad,
    this.dni=dni,
    this.numeroSegSocial=numeroSegSocial,
    this.estadoCivil=estadoCivil//boolean(casado)
}

class PersonaEj29v2{
    constructor(nombre,apellidos,fechaNacimiento,edad,dni,numeroSegSocial,estadoCivil){
        this.nombre=nombre,
        this.apellidos=apellidos,
        this.fechaNacimiento=fechaNacimiento,
        this.edad=edad,
        this.dni=dni,
        this.numeroSegSocial=numeroSegSocial,
        this.estadoCivil=estadoCivil//boolean(casado)
    }

    get nombre(){
        return this.nombre;
    }

    get apellidos(){
        return this.apellidos;
    }

    get fechaNacimiento(){
        return this.fechaNacimiento;
    }

    get edad(){
        return this.edad;
    }

    get dni(){
        return this.dni;
    }

    get numeroSegSocial(){
        return this.numeroSegSocial;
    }

    get estadoCivil(){
        return this.estadoCivil;
    }

    set nombre(name){
        this.nombre=name;
    }

    set apellidos(surname){
        this.apellidos=surname;
    }

    set fechaNacimiento(birthday){
        this.fechaNacimiento=birthday;
    }

    set edad(x){
        this.edad=x;
    }

    set dni(newDni){
        this.dni=newDni;
    }

    set numeroSegSocial(numeroSegSocial){
        this.numeroSegSocial=numeroSegSocial;
    }

    set estadoCivil(estado){
        this.estadoCivil=estado;
    }

    casarse(){
        this.estadoCivil=true;
    }

    divorciarse(){
        this.estadoCivil=false;
    }

    cumpliranios(){
        this.edad=+1;
    }

}

var nuevaPersonaEj29v1 = new PersonaEj29v2("Carlos","Garcia Lazaro",new Date("23-06-2000"),21,"16543245J",124323435,false); 
var nuevaPersonaEj29v2 = new PersonaEj29v2("Gonzalo","Perez Merino",new Date("24-12-2001"),20,"16543212G",124323445,false); 
var nuevaPersonaEj29v3 = new PersonaEj29v2("Marcos","Pison Benito",new Date("14-05-1998"),23,"16533642H",111323435,true); 
var nuevaPersonaEj29v4 = new PersonaEj29v2("Iker","Ranero Romo",new Date("20-09-2000"),20,"16543245J",124323435,false); 
var nuevaPersonaEj29v5 = new PersonaEj29v2("Sara","Lopez Benitez",new Date("4-06-1980"),41,"16543245J",124323435,false); 

var arrayPersonas = [];
arrayPersonas.push(nuevaPersonaEj29v1);
arrayPersonas.push(nuevaPersonaEj29v2);
arrayPersonas.push(nuevaPersonaEj29v3);
arrayPersonas.push(nuevaPersonaEj29v4);
arrayPersonas.push(nuevaPersonaEj29v5);

//Indica el nombre de la persona mas joven
arrayPersonas.forEach(element => {
    //if(); Acdeder a la edad del elemento 
});
//Indicar el numero de personas casadas
//Contador con condicional que se incrementa si la comprobacion de cada uno de los elementos del array se cumple