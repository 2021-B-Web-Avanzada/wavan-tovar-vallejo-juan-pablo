// 01-javascript/
//              / 01-variables.js
// Mutables e inmutables
// Mutables
var numeroUno = 1;
let numereoDos = 2;
numeroUno = 5;
numereoDos = 8;
numeroUno = false;
numeroDos = true;
// Inmutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";
// Vamos a preferir CONST > LET > NUNCA VAR!

// Tipos de variables
const numero = 1; // number
const sueldo = 1.2 // number
const texto = "Adrian"; // string
const apellido = "Eguez"; // string
const booleano = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);
console.log(typeof Number("asd")); // number
console.log(Number("asd")); // NoN

// Truty Falsy

if(""){
    console.log("String vacio es verdadero");
}else{
    console.log("String vacío Es Falsy");
}

if("Adrian"){
    console.log("String con datos es truty");
}else{
    console.log("String con datos Falso");
}

if(-1){
    console.log("Negativos es truty");
}
else{
    console.log("Negativos es Falso");
}
if(0){
    console.log("Cero es truty");
}
else{
    console.log("Cero es Falso");
}
if(1){
    console.log("Positivos es truty");
}else{
    console.log("Positivos es Falso");
}

if(null){
    console.log("Null es truty");
}else{
    console.log("Null es falso");
}
if(undefined){
    console.log("Undefined es truty");
}else{
    console.log("Undefined es falso");
}

// Objetos Js (JSON) - Arreglos

const adrian = {
    nombre: "Adrian",
    false: 'Eguez',
    edad: 32,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascotas: ['Cachetes','Pequitas','Panda'],
}