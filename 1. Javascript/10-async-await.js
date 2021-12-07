// 10-async-await.js
const promesaLeerArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('CONTENIDO LEER ARCHIVO');
            //rej('ERROR=(');
        }
    );
}

const promesaEscribirArchivo = () => {
    return new Promise(
        (res,rej) => {
            res('CONTENIDO ESCRIBIR ARCHIVO');
            //rej('ERROR=(');
        }
    )
}

//ASYNC AWAIT
// 1) Métodos de clases
// 2) Funcion

//ESTO NO ES POSIBLE
//PORQUE NO ESTÁ DENTRO DE UNA FUNCION
//const respuesta = await promesaEscribirArchivo;
//Al momento de usar la palabra ASYNC, esa funcion se convierte
//En una promesa

const ejemplo1 = async function(){}
const ejemplo2 = async () => {}
async function ejercicio(){
    console.log('1');
    let nuevoContenido = '';
    try{
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    }catch (error){
        console.error(error);
    }
}
ejercicio().then().catch().finally();
