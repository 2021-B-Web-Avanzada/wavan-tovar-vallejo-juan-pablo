import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserJphService} from "../../services/http/user-jph.service";
import {UserJphInterface} from "../../services/http/interface/user-jph.interface";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ModalEjemploComponent} from "../../componentes/modal-ejemplo/modal-ejemplo.component";

@Component({
  selector: 'app-ruta-usuario-perfil',
  templateUrl: './ruta-usuario-perfil.component.html',
  styleUrls: ['./ruta-usuario-perfil.component.scss']
})
export class RutaUsuarioPerfilComponent implements OnInit {

  idUsuario = 0;
  usuarioActual?:UserJphInterface;
  formGroup ?: FormGroup;
  valorKnob = 30;
  items = [
    {
      label: 'Update', icon: 'pi pi-refresh', command:()=>{
        console.log('Hola')
      }
    },{
    label: 'Setup',icon: 'pi pi-cog', routerLink:['/setup']
    }
  ]

  model = {
    left:true,
    middle:false,
    right: false
  }
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly useJPHService: UserJphService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    public dialog: MatDialog
  ) {}

  abrirDialogo(){
    const referenciaDialogo = this.dialog.open(
      ModalEjemploComponent,
      {
        disableClose: true,
        data:{
          animal:'panda',
        },
      }
    );
    const despuesCerrado$ = referenciaDialogo.afterClosed();
    despuesCerrado$.subscribe((datos)=>{
      console.log(datos);
    })
  }

  guardar(){
    console.log('GUARDAR')
  }

  ngOnInit(): void {
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
            this.prepararFormulario();
          },
          error: (error) =>{
            console.log(error)
          }
        }
        )
  }



  prepararFormulario(){
    this.formGroup = this.formBuilder.group(
      {
        email: new FormControl(
          {
            value: this.usuarioActual ? this.usuarioActual.email : '',
            disabled:false
          },
          [
            Validators.required,
            Validators.minLength(3),
          ]
        ),
        esAdministrador: new FormControl(true)
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
  }

  prepararObjeto() {
    if(this.formGroup){
      const email = this.formGroup.get('email')
      if(email){
        return {
          email : email.value
        }
      }
    }
    return{
      email:'',
    }
  }

  actualizarUsuario(){
    if(this.usuarioActual){
      const valoresActualizar = this.prepararObjeto();
      const actualizar$ = this.useJPHService
        .actualizarPorId(
          this.usuarioActual.id,
          valoresActualizar
        );
      actualizar$
        .subscribe({
          next: (datos)=>{
            console.log({datos});
            const url = ['/app','usuario'];
            this.router.navigate(url);
          },
          error:(error) => {
            console.error({error})
          }
        })
    }
  }

}
