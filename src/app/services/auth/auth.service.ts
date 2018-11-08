import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	public isLoggedIn: boolean;

	constructor(
		private router: Router
	) {
		this.isLoggedIn = false;
	}

	public authLogin(email, pw) : boolean {
		if (email == 'test@gmail.com' && pw == "testing") {
			localStorage.setItem("isLoggedIn", "true");
			this.isLoggedIn = true;
			return true;
		} else {
			this.isLoggedIn = false;
			return false;
		}
	}

	public authLogout() : void {
		localStorage.clear();
		this.isLoggedIn = false;
		this.router.navigateByUrl('/login');
	}

	public checkLoggedIn() : boolean {
		this.isLoggedIn = localStorage.getItem("isLoggedIn") == "true";
		return this.isLoggedIn;
	}
}
