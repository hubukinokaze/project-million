import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private auth: AuthService,
		private router: Router
		) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		this.auth.checkLoggedIn();
		if (!this.auth.isLoggedIn) {
			this.router.navigateByUrl('/login');
	    }
		return this.auth.isLoggedIn;
	}
}
