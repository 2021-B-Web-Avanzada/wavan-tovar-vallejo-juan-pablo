import {Injectable} from "@angular/core";

@Injectable()

export class AuthService{
  estaLogeado = false;

  roles = [

    'supervisor',
    'usuario'
  ];


}
