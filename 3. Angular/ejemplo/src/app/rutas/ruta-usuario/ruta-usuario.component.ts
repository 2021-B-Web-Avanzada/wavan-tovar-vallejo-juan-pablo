import {Component, OnInit} from '@angular/core';
import {UserJphService} from "../../services/http/user-jph.service";
import {UserJphInterface} from "../../services/http/interface/user-jph.interface";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  constructor(
    private readonly userJhpService: UserJphService,
  ) {
  }

  ngOnInit(): void {
    this.userJhpService
      .buscarTodos()
      .subscribe({
        next: (datos: UserJphInterface[]) => {
          console.log({datos});
        },
        error: (error) => {
          console.error({error});
        }
      })
  }

}
