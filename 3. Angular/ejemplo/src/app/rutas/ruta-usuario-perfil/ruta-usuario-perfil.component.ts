import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {UserJphService} from "../../services/http/user-jph.service";
import {UserJphInterface} from "../../services/http/interface/user-jph.interface";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-ruta-usuario-perfil',
  templateUrl: './ruta-usuario-perfil.component.html',
  styleUrls: ['./ruta-usuario-perfil.component.scss']
})
export class RutaUsuarioPerfilComponent implements OnInit {

  idUsuario = 0;
  usuarioActual?:UserJphInterface;
  formGroup ?: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly useJPHService: UserJphService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        email: new FormControl(
          {
            value: "ejemplo@ejemplo.com",
            disabled:false
          },
          [
            Validators.required,
            Validators.minLength(3),
          ]
        )
      }
    );
    const cambio$ = this.formGroup.valueChanges;
    cambio$.subscribe({
      next:(valor)=>{
        console.log(valor, this.formGroup);
        if(this.formGroup?.valid){
          console.log("YUPI")
        }else{
          console.log(":(")
        }
      }
    })
    const parametroRuta$ = this.activatedRoute.params
    parametroRuta$
    .subscribe({
      next:(parametroRuta:Params)=>{
        console.log(parametroRuta);
        this.idUsuario = +parametroRuta['idUsuario'];
        this.buscarUsuario(this.idUsuario);
      }
    }
    )
  }
  buscarUsuario(id:number){
    const buscarUsuarioPorId$ = this.useJPHService.buscarUno(id);
    buscarUsuarioPorId$
      .subscribe(
        {
          next: (data) => {
            this.usuarioActual  = data;
          },
          error: (error) =>{
            console.log(error)
          }
        }
      )
  }

}
