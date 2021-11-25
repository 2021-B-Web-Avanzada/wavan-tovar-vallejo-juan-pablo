const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//FUNCIONES COMO PARÁMETROS
//FIND
//enviamos una expresión ->TRUTY FALSY
//devuelve el primero que cumpla con una condición
const respuestaFind = arreglo.find(function (valorActual, indiceActual, arregloCompleto) {
    console.log('valor actual', valorActual);
    console.log('indice actual', indiceActual);
    console.log('arregloCompleto', arregloCompleto);
    return valorActual.nombre === "Cristian"; // EXPRESION
});
console.log('respuestaFind', respuestaFind); // Cristian // Si no encuentra devuelve undefined

//FUNCIONES COMO PARÁMETROS
//FIND
//enviamos una expresión ->TRUTY FALSY
//devuelve el primero que cumpla con una condición
const respuestaFindIndex = arreglo.findIndex(function (valorActual, indiceActual, arregloCompleto) {
    return valorActual.nombre === "Cristian"; // EXPRESION
});
console.log('indice actual', respuestaFindIndex); // Cristian // Si no encuentra devuelve -1

//FOR EACH
const respuestaForeach = arreglo.forEach(function (valorActual, indiceActual, arregloCompleto) {
    console.log('valor actual', valorActual);
});
console.log('respuestaForEach: ', respuestaForeach);

//MAP (Modificar o MUTAR el arreglo y devuelve un nuevo arreglo)
//enviamos los datos del nuevo arreglo
const respuestaMap = arreglo.map((valorActual, indiceActual, arregloCompleto) => {
    const nuevoElemento = {
        id: valorActual.id,
        nombre: valorActual.nombre,
        nota: valorActual.nota + 1,
    };
    return nuevoElemento;
});
console.log('respuestaMap', respuestaMap);

//FILTER (filtrar el arreglo)
//enviamos expresión TRUTY FALSY
// devuelve los elementos que cumplen esa condición

const respuestaFilter = arreglo.filter((valorActual, indiceActual, arregloCompleto) => {
    return valorActual.nota >= 14;
});
console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);

//SOME -> expresion
//Devuelve el booleano
//Todas las notas son mayores a 14? SI o NO
const respuestaSame = arreglo.some((valorActual, indiceActual, arregloCompleto) => {
    return valorActual.nota < 9;
})
console.log('respuesta some: ', respuestaSame);

//EVERY -> expresion
//DEVUELVE BOOLEANO
//TODAS las notas son mayores a 14? Si No
//AND
const respuestaEvery = arreglo.every((valorActual, indiceActual, arregloCompleto) => {
    return valorActual.nota >= 14;
})
console.log('respuesta every: ', respuestaEvery);

//[1,2,3,4,5,6,5,4,3,1]
//REDUCE        izq->der
//REDUCE RIGHT  der->izq
//100 Puntos de vida
//100 -1 -2 -3 -4 -5 -6 -4 -3 -1

const respuestaReduce = arreglo.reduce(function (valorAcumulado, valorActual, indice, arreglo) {
    return valorAcumulado + valorActual.nota;
}, 100);
console.log('respuesta reduce: ', respuestaReduce);