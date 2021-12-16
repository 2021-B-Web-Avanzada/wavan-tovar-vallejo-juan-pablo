import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()

export class EstaLogeadoGuard{

  constructor(private readonly _authService:AuthService) {
  }



  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean | UrlTree> |Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authService.estaLogeado;
  }
}
