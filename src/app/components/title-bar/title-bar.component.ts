import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  public title: string;
  public coursesLabel: string;
  public buttonLabel: string;
  public buttonLink: string;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {

  }

  ngOnInit() {
    this.initialSetup();
    this.setupBackBtn();
  }

  ngOnDestroy() {
  }

  private initialSetup() {
    this.title        = 'Rentalil';
    this.coursesLabel = 'Courses';
  }

  private setupBackBtn() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        if (event.url.startsWith('/login')) {
          this.buttonLabel = 'Back';
          this.buttonLink  = '/landing';
        } else if (event.url.startsWith('/signup')) {
          this.buttonLabel = 'Login';
          this.buttonLink  = '/login';
        } else if (event.url.startsWith('/dashboard')) {
          this.buttonLabel = 'Logout';
          this.buttonLink  = '/login';
        } else {
          this.buttonLabel = 'Login';
          this.buttonLink  = '/login';
        }
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }

  public goHome() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    isLoggedIn === 'true' ? this.router.navigateByUrl('/dashboard') : this.router.navigateByUrl('/landing');
  }

  public onBackBtn(link) {
    if (this.buttonLabel === 'Logout') {
      this.auth.authLogout();
    }
    this.router.navigateByUrl(link);
  }
}
