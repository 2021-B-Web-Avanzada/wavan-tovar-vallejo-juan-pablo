import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserJphInterface} from "./interface/user-jph.interface";
import {map} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'any'
})
export class UserJphService {

  constructor(
    private readonly httpClient : HttpClient
  ) { }

  buscarTodos(parametrosConsulta?:any){
    const url =environment.urlJPC + "/users";
    Object.keys(parametrosConsulta).forEach(k=>{
      if(!parametrosConsulta[k]){
        delete parametrosConsulta[k]
      }
    })
    return this.httpClient
      .get(url,{
        params: parametrosConsulta,
      })
      .pipe(
        map(
          (resultadoEnData:Object) => resultadoEnData as UserJphInterface[]
        )
      )

  }
  buscarUno(idUsuario:number){
    const url =environment.urlJPC + "/users/" + idUsuario;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData:Object) => resultadoEnData as UserJphInterface[]
        )
      )
  }
}
