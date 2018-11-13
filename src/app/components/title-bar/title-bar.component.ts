import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
	public buttonLabel: string;
	public buttonLink: string;

  constructor(
  	private router: Router
  ) {
  	this.router.events.subscribe( (event: Event) => {
  		if (event instanceof NavigationStart) {
            // Show loading indicator
        }

        if (event instanceof NavigationEnd) {
        	if (event.url === "/login") {
        		this.buttonLabel = "Back";
        		this.buttonLink = '/landing';
        	} else if (event.url === "/signup") {
        		this.buttonLabel = "Login";
        		this.buttonLink = '/login';
        	} else if (event.url === "/dashboard") {
        		this.buttonLabel = "Logout";
        		this.buttonLink = '/login';
        	} else {
        		this.buttonLabel = "Login";
        		this.buttonLink = '/login';
        	}
        }

        if (event instanceof NavigationError) {
            // Hide loading indicator

            // Present error to user
            console.log(event.error);
        }
  	});
  }

  ngOnInit() {
  }
}
