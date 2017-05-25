import {Injectable} from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class RouteGuard implements CanActivate{
    constructor(private router :Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
          if (localStorage.getItem('token')) {
            return true;
        }
       // not logged in so redirect to login page with the return url
        this.router.navigate(['/Login'], { queryParams: { returnUrl: state.url }});
        return false;
    }

}