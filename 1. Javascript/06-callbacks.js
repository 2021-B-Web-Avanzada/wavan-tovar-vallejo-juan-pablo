// 06-callbacks.js
const fs = require('fs'); // FileSystem
console.log('Primero');

fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido) => {
        console.log('SEGUNDO');
    }
);
console.log('TERCERO');


fs.readFile(
    './01-variables.js',
    'utf-8',
    (error1, contenido1) => {
        if (error) {
            console.error({mensaje: 'error leyendo contenido', error: error});
        } else {
            fs.readFile(
                './06-ejemplo.txt',
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        console.error({mensaje: 'error leyendo contenido', error: error});
                    } else {
                        console.log(contenido1 + '\n' + contenido);
                    }
                }
            );
        }
    }
);
