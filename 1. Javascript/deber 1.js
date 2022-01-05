// deber 1.js
const fs = require('fs');
const inquirer = require('inquirer');

async function main() {
    opcion = await menu();
    switch (opcion.menu) {
        case 'Listar categorías':
            lista = await listar();
            lista.forEach(element => {
                element.videojuegos = JSON.stringify(element.videojuegos);
            })
            console.log(lista);
            break;
        case 'Registrar categoría':
            crear(await solicitarDatos());
            break;
        case 'Actualizar categoría':
            try {
                const respuesta = await inquirer
                    .prompt([
                        {
                            type: 'number',
                            name: 'id',
                            message: 'Ingresa el id de la categoría'
                        },
                        {
                            type: 'input',
                            name: 'nombre',
                            message: 'Ingresa el nombre del género'
                        },
                        {
                            type: 'number',
                            name: 'año',
                            message: 'Ingresa el año en el que apareció el género'
                        },
                        {
                            type: 'input',
                            name: 'juego',
                            message: 'Ingresa el juego más relevante del género'
                        },
                        {
                            type: 'confirm',
                            name: 'ga',
                            message: '¿La categoria ha ganado un game award?'
                        },
                        {
                            type: 'input',
                            name: 'clasificacion',
                            message: 'Ingresa la clasificación de la categoría'
                        }
                    ]);
                actualizar(respuesta);
            } catch (e) {
                console.error(e);
            }
            break;
        case 'Eliminar categoría':
            try {
                const respuesta = await inquirer
                    .prompt([
                        {
                            type: 'number',
                            name: 'id',
                            message: 'Ingresa el id de la categoría'
                        }
                    ]);
                eliminar(respuesta);
            } catch (e) {
                console.error(e);
            }
            break;
        case 'Registrar videojuego':
            try {
                data = await listar();
                const respuesta = await inquirer
                    .prompt([
                        {
                            type: 'list',
                            name: 'menu',
                            message: 'Seleccione una categoría: ',
                            choices: data.map(a => a.id + " " + a.nombre),
                        }
                    ]);
                console.log(respuesta.menu.slice(0, 1));
                crearVideojuego(await solicitarDatosVideojuego(), respuesta.menu.slice(0, 1));
            } catch (e) {
                console.error(e)
            }
            break;
        case 'Actualizar videojuego':
            try {
                data = await listar();
                const respuesta = await inquirer
                    .prompt([
                        {
                            type: 'list',
                            name: 'menu',
                            message: 'Seleccione una categoría: ',
                            choices: data.map(a => a.id + " " + a.nombre),
                        }
                    ]);
                const datos = await inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'nombre',
                            message: 'Ingresa el nombre del videojuego'
                        },
                        {
                            type: 'number',
                            name: 'ventas',
                            message: 'Ingresa las ventas del videojuego'
                        },
                        {
                            type: 'number',
                            name: 'precio',
                            message: 'Ingresa el precio del videojuego'
                        },
                        {
                            type: 'input',
                            name: 'plataforma',
                            message: 'Ingrese la plataforma del videojuego'
                        },
                        {
                            type: 'confirm',
                            name: 'online',
                            message: '¿El videojuego posee multijugador?'
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: 'Ingrese el id del videojuego'
                        }
                    ]);
                actualizarVideojuego(datos, respuesta.menu.slice(0, 1));
            } catch (e) {
                console.error(e)
            }
            break;
        case 'Eliminar videojuego':
            try {
                data = await listar();
                const respuesta = await inquirer
                    .prompt([
                        {
                            type: 'list',
                            name: 'menu',
                            message: 'Seleccione una categoría: ',
                            choices: data.map(a => a.id + " " + a.nombre),
                        }
                    ]);
                const datos = await inquirer
                    .prompt([
                        {
                            type: 'number',
                            name: 'id',
                            message: 'Ingrese el id del videojuego'
                        }
                    ]);
                eliminarVideojuego(datos, respuesta.menu.slice(0, 1));
            } catch (e) {
                console.error(e)
            }
            break;
    }
    main();
}

async function menu() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'menu',
                    message: 'Seleccione una categoría: ',
                    choices: ['Listar categorías', 'Registrar categoría', 'Actualizar categoría', 'Eliminar categoría',
                        'Registrar videojuego', 'Actualizar videojuego', 'Eliminar videojuego'],
                }
            ]);
        return respuesta;
    } catch (e) {
        console.error(e)
    }
}

async function solicitarDatos() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingresa el nombre del género'
                },
                {
                    type: 'number',
                    name: 'año',
                    message: 'Ingresa el año en el que apareció el género'
                },
                {
                    type: 'input',
                    name: 'juego',
                    message: 'Ingresa el juego más relevante del género'
                },
                {
                    type: 'confirm',
                    name: 'ga',
                    message: '¿La categoria ha ganado un game award?'
                },
                {
                    type: 'input',
                    name: 'clasificacion',
                    message: 'Ingresa la clasificación de la categoría'
                },

            ]);
        return respuesta;
    } catch (e) {
        console.error(e);
    }
}

async function solicitarDatosVideojuego() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingresa el nombre del videojuego'
                },
                {
                    type: 'number',
                    name: 'ventas',
                    message: 'Ingresa las ventas del videojuego'
                },
                {
                    type: 'number',
                    name: 'precio',
                    message: 'Ingresa el precio del videojuego'
                },
                {
                    type: 'input',
                    name: 'plataforma',
                    message: 'Ingrese la plataforma del videojuego'
                },
                {
                    type: 'confirm',
                    name: 'online',
                    message: '¿El videojuego posee multijugador?'
                }
            ]);
        return respuesta;
    } catch (e) {
        console.error(e);
    }
}


function escribirArchivo(contenido) {
    const escribirArchivoPromesa = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'deber1.txt',
                contenido,
                (error) => {
                    if (error) {
                        console.log('Error en la escritura del archivo');
                    } else {
                        console.log('Escritura realizada correctamente');
                        resolve();
                    }
                }
            );
        }
    )
    return escribirArchivoPromesa;
}

function listar() {
    const leerArchivoPromesa = new Promise(
        (resolve, reject) => {
            fs.readFile('deber1.txt', 'utf-8',
                (error, contenido) => {
                    if (error) {
                        console.log('Error en la lectura del archivo');
                    } else {
                        if (contenido) {
                            resolve(JSON.parse(contenido));
                        } else {
                            resolve([]);
                        }

                    }
                }
            );
        }
    )
    return leerArchivoPromesa;
}

function crear(nuevoContenido) {
    listar().then((contenido) => {
        if (contenido.at(-1)) {
            nuevoContenido['id'] = contenido.at(-1)['id'] + 1;
        } else {
            nuevoContenido['id'] = 1;
        }
        nuevoContenido['videojuegos'] = [];
        contenido.push(nuevoContenido);
        return escribirArchivo(JSON.stringify(contenido));
    })
}

function actualizar(contenido) {
    listar().then((contenidoactual) => {
        contenidoactual.forEach((element) => {
            if (element['id'] === contenido['id']) {
                element['nombre'] = contenido['nombre'];
                element['año'] = contenido['año'];
                element['juego'] = contenido['juego'];
                element['ga'] = contenido['ga'];
                element['clasificacion'] = element['clasificacion'];
            }
        })
        return escribirArchivo(JSON.stringify(contenidoactual));
    })
}

function eliminar(contenido) {
    listar().then((contenidoactual) => {
        contenidoactual.forEach((element) => {
            if (element['id'] === contenido['id']) {
                contenidoactual.splice(contenidoactual.indexOf(element), 1);
            }
        })
        return escribirArchivo(JSON.stringify(contenidoactual));
    })
}

function crearVideojuego(nuevoContenido, id) {
    listar().then((contenido) => {
        elementos = contenido.find((juego) => juego.id == id).videojuegos;
        if (elementos.at(-1)) {
            nuevoContenido['id'] = elementos.at(-1)['id'] + 1;
        } else {
            nuevoContenido['id'] = 1;
        }
        elementos.push(nuevoContenido);
        contenido.find((juego) => juego.id == id).videojuegos = elementos;
        return escribirArchivo(JSON.stringify(contenido));
    })
}

function actualizarVideojuego(contenido, id) {
    listar().then((contenidoactual) => {
        elementos = contenidoactual.find((juego) => juego.id == id).videojuegos;
        elementos.forEach((element) => {
            if (element['id'] === contenido['id']) {
                element['nombre'] = contenido['nombre'];
                element['ventas'] = contenido['ventas'];
                element['precio'] = contenido['precio'];
                element['plataforma'] = contenido['plataforma'];
                element['online'] = contenido['online'];
            }

        })
        contenidoactual.find((juego) => juego.id == id).videojuegos = elementos
        return escribirArchivo(JSON.stringify(contenidoactual));
    })
}

function eliminarVideojuego(contenido, id) {
    listar().then((contenidoactual) => {
        elementos = contenidoactual.find((juego) => juego.id == id).videojuegos;
        elementos.forEach((element) => {
            if (element['id'] === contenido['id']) {
                elementos.splice(elementos.indexOf(element), 1);
            }
        })
        contenidoactual.find((juego) => juego.id == id).videojuegos = elementos
        return escribirArchivo(JSON.stringify(contenidoactual));
    })
}

main();