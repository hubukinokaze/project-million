import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginRemember: boolean;
  public loginForm: FormGroup;
  public toggleErrorMsg: boolean;
  public errorMsg: string;
  public invalidEmailMsg: string;
  public invalidPWMsg: string;
  public title: string;
  public email: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.checkRemember();

    this.loginForm = this.formBuilder.group({
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      remember: new FormControl(this.loginRemember)
    });

    this.setupVariables();
  }

  private checkRemember() {
    this.loginRemember = localStorage.getItem('login-remember') ? true : false;

    if (this.loginRemember) {
      this.email = localStorage.getItem('login-email');
    }
  }

  private setupVariables() {
    this.errorMsg        = 'Incorrect email/password';
    this.invalidEmailMsg = 'Not a valid email';
    this.invalidPWMsg    = 'Password cannot be empty';
    this.title           = 'Login';
  }

  public login(e) {
    this.loginRemember = this.loginForm.controls['remember'].value;
    if (this.loginRemember) {
      localStorage.setItem('login-remember', `${this.loginRemember}`);
      localStorage.setItem('login-email', this.loginForm.controls['email'].value);
    }
    if (this.loginForm.valid) {
      if (this.auth.authLogin(this.loginForm.value.email, this.loginForm.value.password)) {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.toggleErrorMsg = true;
        setTimeout(() => {
          this.toggleErrorMsg = false;
        }, 3000);
      }
    }
  }

  public backToLanding() {
    this.router.navigateByUrl('/landing');
  }
}
