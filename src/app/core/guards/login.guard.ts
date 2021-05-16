import { Injectable } from "@angular/core";
import { CanActivate, Router, CanLoad, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {
    // console.log("Paso por el Login Guard");
  }
  
  canLoad() {
    return this.auth.tokenValidate().pipe(
      tap((auth: any) => {
        console.log("Auth resp", auth);
        if (!auth) {
          this.router.navigateByUrl("/login");
        }
      })
    );
  }
  canActivate() {
    console.log("Paso por el Login Guard");
    // this._router.navigate(['/login']);
    // return true;
    return this.auth.tokenValidate().pipe(
      tap((auth: any) => {
        if (!auth) {
          this.router.navigateByUrl("/login");
        }
      })
    );
  }
}