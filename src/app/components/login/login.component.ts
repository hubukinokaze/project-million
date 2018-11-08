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
  public loginForm: FormGroup;
  public toggleErrorMsg: boolean;
  public errorMsg: string;
  public invalidEmailMsg: string;
  public invalidPWMsg: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

    this.setupVariables();
  }

  private setupVariables() {
    this.errorMsg = "Incorrect email/password";
    this.invalidEmailMsg = "Not a valid email";
    this.invalidPWMsg = "Password cannot be empty";
  }

  public login(e) {
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
