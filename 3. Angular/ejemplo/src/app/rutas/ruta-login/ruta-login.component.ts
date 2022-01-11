import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostrarSegundoBanner = true;

  arregloUsuarios = [
    {
      id: 1,
      nombre: 'Adrian',
      color:'#00BCFF',
      link:'https://www.facebook.com',
      linkImagen:'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800'
    },
    {
      id: 2,
      nombre: 'Vicente',
      color:'#007AFF',
      link:'https://aulasvirtuales.epn.edu.ec/my/',
      linkImagen: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiarOcultarBanner(){
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner;
  }

}
