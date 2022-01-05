import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  arregloNovedades=[
    "Juegos",
    "Música",
    "Películas",
    'Call of Duty:Warzone',
    "Computadoras",
    "Celulares",
    "Xbox",
    "Teclados",
    "Call of Duty:Black Ops Cold War",
    "Comic",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
