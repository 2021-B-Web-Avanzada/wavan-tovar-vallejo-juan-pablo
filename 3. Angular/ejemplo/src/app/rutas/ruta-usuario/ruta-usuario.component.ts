import {Component, OnInit} from '@angular/core';
import {UserJphService} from "../../services/http/user-jph.service";
import {UserJphInterface} from "../../services/http/interface/user-jph.interface";
import {error} from "@angular/compiler/src/util";
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  arreglo:UserJphInterface[] = [];
  buscarUsuario = '';

  constructor(
    private readonly userJhpService: UserJphService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute 
  ) {
  }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute
    .queryParams;

    parametrosConsulta$
    .subscribe(
      {
        next : (queryParams)=>{
          console.log(queryParams);
          this.buscarUsuario = queryParams['name'];
          this.buscarUsuarios();
        },
        error: ()=>{
        },
        complete: ()=>{
        }
      }
    )
  }

  actualizarParametrosDeConsulta(){
    this.router
    .navigate(
      ['/app','usuario'],
      {
        queryParams: {
          name: this.buscarUsuario
        }
      }
    );
  }

  buscarUsuarios(){
    this.userJhpService
      .buscarTodos({
        name:this.buscarUsuario
      }
      )
      .subscribe({
        next: (datos: UserJphInterface[]) => {
          this.arreglo=datos;
          this.buscarUsuario = '';
        },
        error: (error) => {
          console.error({error});
        }
      })
  }

  gestionarUsuario(idUsuario:number){}
}
function extras(commands: any, arg1: string[], extras: any, arg3: { queryParams: { name: string; }; }) {
  throw new Error('Function not implemented.');
}

