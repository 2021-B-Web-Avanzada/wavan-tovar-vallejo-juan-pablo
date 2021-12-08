//04-clases.ts
class Persona{
    public nombre:string;
    public apellido:string;
    static nombreReferencial:string = 'Humano';
    protected nombreYApellido = '';// Duck Typing -> string

    constructor(
        nombreParametro:string,
        apellidoParametro: string
    ){
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' +apellidoParametro;
    }
    private mostrarNombreApellido():string{
        return this.nombreYApellido;
    }
}
class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string,
        public estadoCivil: string
    ) {
        super(nombreParametro, apellidoParametro)
    }
}
const adrian = new Usuario(
    'Adrian',
    'Eguez',
    '1718137159',
    'soltero'
);
adrian.nombre;
adrian.apellido;
adrian.cedula;
adrian.estadoCivil;