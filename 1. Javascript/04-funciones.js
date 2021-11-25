// 04-funciones.js

function soloNumeros(a,b,c){
    return a -b + c; //valor a devolver
}
//JS permite el udo de funciones sin validaciones
soloNumeros('v',true,[1,2,3]);
soloNumeros((a)=>a,(a)=>a,(a)=>a);

function soloLetras(a,b,c){ //undefined
    console.log(a,b,c);
}

//Funciones nombradas - named functions
function funcionNombrada(){
}
//Funciones anónimas
const funcionSinNombre1 = function(){};
var funcionSinNombre2 = function(){};
let funcionSinNombre3 = function(){};
[].forEach(function(){})
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

//Funciones anónimas - Fat arrow functions
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};
[].forEach(()=>{})
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

const funcionFatArrow4 = () => {};
const funcionFatArrow5 = (x) => {
    return x + 1;
};
const funcionFatArrow6 = (x) => x + 1;  // FAT ARROW FUNCTIONS
                                        // Una sola linea
                                        // Omito return
                                        // Omito llaves
const funcionFatArrow7 = x => x+1;      // SI SOLO TENEMOS UN PARÁMETRO
                                        // Omito los paréntesis
const funcionFatArrow8 = (x,y,z) => x + y +z;

// ...= > Parametros infinitos que llegan en un arreglo
//        Solo se puede tener una de estas por función
function sumarNumeros(...otrosNumeros) {
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
    // return otrosNumeros.reduce ((a,v) => a + v, 0);
}
sumarNumeros (1,2,3,4,5,6,7,8,9,10,11,12,13)

