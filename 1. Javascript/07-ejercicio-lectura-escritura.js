const fs = require('fs');

/*
Hacer una función que se acepte como parámetro una variable con el path del archivo y el contenido
a agregar al contenido del archivo, la función debe tomar estos dos parámetros y leer el archivo y
añadir el texto al final del archivo
 */

// fs.writeFile(
//     path,
//     contenido,
//     'utf-9',
//     (error)=>{
//
//     }
// )

function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
        path,
        'utf-8',
        (errorLectura, contenido) => {
            if(errorLectura){
                console.log('Error en la lectura del archivo');
            }else{
                fs.writeFile(
                    path,
                    contenido+contenidoNuevo,
                    (error) => {
                        if(error){
                            console.log('Error en la escritura del archivo');
                        }else{
                              console.log('Escritura realizada correctamente');
                        }
                    }
                );
            }
        }
    );
}

escribirArchivo('./06-ejemplo.txt',
    'Contenido agregado'
);
