import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()

export class EstaLogeadoGuard{

  constructor(private readonly _authService:AuthService, private readonly _router: Router) {
  }


  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean | UrlTree> |Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this._authService.estaLogeado){
      return this._router.navigate(['/forbidden']);
    }
    return this._authService.estaLogeado;
  }
}
