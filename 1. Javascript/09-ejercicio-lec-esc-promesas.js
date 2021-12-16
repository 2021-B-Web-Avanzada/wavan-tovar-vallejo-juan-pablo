// 09-ejercicio-lec-esc-promesas.js

const fs = require('fs');

/*
Hacer una función que me acepte como parámetro una variable con el path del archivo y el contenido
del archivo. La función debe tomar estos dos parámetros y leer el archivo y añadir el texto al final
del archivo, Al final vamos a leer el archivo nuevamente e imprimirlo en consola.
Todoo esto debe ser realizado con promesas
-Promesa de lectura
-Promesa de escritura
 */

function promesaLeerArchivo(path) {
    const leerArchivoPromesa = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        console.log('Error en la lectura del archivo');
                    } else {
                        resolve(contenido);
                    }
                }
            );
        }
    )
    return leerArchivoPromesa;
}

function promesaEscribirArchivo(path, contenidoActual, nuevoContenido) {
    const escribirArchivoPromesa = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoActual + nuevoContenido,
                (error) => {
                    if (error) {
                        console.log('Error en la escritura del archivo');
                    } else {
                        console.log('Escritura realizada correctamente');
                        resolve ();
                    }
                }
            );
        }
    )
    return escribirArchivoPromesa;
}

function ejercicio(path, nuevoContenido) {
    promesaLeerArchivo(path)
        .then((contenido) =>{
            return promesaEscribirArchivo(path, contenido, nuevoContenido);
        })
        .then(() => {
            return promesaLeerArchivo(path);
        })
        .then((contenido2) => {
            console.log(contenido2);
        })
        .catch((error) => {
            console.log(error);
        })
}

ejercicio('./06-ejemplo.txt','Buenas mañanas');