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
		if (email && pw) {
			const account = localStorage.getItem('acount');
			if (account) {
				const tempAccount = JSON.parse(account);

				if (email == tempAccount.email && pw == tempAccount.pw) {
					localStorage.setItem("isLoggedIn", "true");
					this.isLoggedIn = true;
					return true;
				}
			}

		}
		this.isLoggedIn = false;
		return false;
	}	

	public authSignup(email, pw) : boolean {
		if (email && pw) {
			const account = {email: email, pw: pw};
			localStorage.setItem("isLoggedIn", "true");
			localStorage.setItem("account", JSON.stringify(account));
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
