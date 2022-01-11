import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input()
  nombre="";
  @Input()
  icono="";

  constructor() { }

  ngOnInit(): void {
  }

}
