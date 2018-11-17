import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	public passwordFormGroup: FormGroup;
	public signupForm: FormGroup;
	public toggleErrorMsg: boolean;
	public errorMsg: string;
	public invalidEmailMsg: string;
	public invalidPWMsg: string;
	public invalidPWMsg2: string;
	public title: string;

	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private auth: AuthService
		) { }

	ngOnInit() {
		this.passwordFormGroup = this.formBuilder.group({
			password: ['', Validators.required],
			verifyPassword: ['', Validators.required]
		}, {
			validator: this.validate.bind(this)
		});
		this.signupForm = this.formBuilder.group({
			email: new FormControl('', [Validators.required, Validators.email]),
			passwordFormGroup: this.passwordFormGroup
		});

		this.setupVariables();
	}

	private setupVariables() {
		this.errorMsg = "Something went wrong";
		this.invalidEmailMsg = "Not a valid email";
		this.invalidPWMsg = "Password cannot be empty";
		this.invalidPWMsg2 = "Passwords do not match";
		this.title = "Create your account";
	}

	public signup(e) : boolean {
		if (this.signupForm.valid) {
			if (this.auth.authSignup(this.signupForm.value.email, this.passwordFormGroup.value.password)) {
				this.router.navigateByUrl('/dashboard');
				return true;
			}
		}

		this.toggleErrorMsg = true;
		setTimeout(() => {
			this.toggleErrorMsg = false;
		}, 3000);
		return false;
	}

	public backToLanding() {
		this.router.navigateByUrl('/landing');
	}

	public validate(registrationFormGroup: FormGroup) {
		let password = registrationFormGroup.controls.password.value;
		let verifyPassword = registrationFormGroup.controls.verifyPassword.value;

		if (verifyPassword.length <= 0) {
			return null;
		}

		if (verifyPassword !== password) {
			return {
				doesMatchPassword: true
			};
		}

		return null;

	}
}
