import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-explorar',
  templateUrl: './video-explorar.component.html',
  styleUrls: ['./video-explorar.component.css']
})
export class VideoExplorarComponent implements OnInit {

  @Input()
  video={
    nombre: "",
    creador: "",
    cantidadVistas: "",
    fecha: "",
    linkMiniatura: "",
    linkFotoPerfil: "",
    descripcion:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
