import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { interval } from 'rxjs';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
	animations: [
	trigger('thumbState', [
		state('inactive', style({
			opacity: 0, transform: 'scale(0.5)'
		})),
		state('active', style({ 
			opacity: 1, transform: 'scale(1)'
		})),
		// cubic-bezier from http://easings.net/
		transition('inactive => active', animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)')),
		transition('active => inactive', animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)'))
		])
	],
})
export class LandingComponent implements OnInit {
	public images: any;
	public counter: number;
	public state: string;
	private subscriptions: Array<any> = [];

	constructor() { }

	ngOnInit() {
		this.setupImages();

		this.subscriptions.push(
			interval(10000).subscribe( () => {
				this.toggle();
			})
			);

	}

	ngOnDestroy() {
		this.subscriptions.forEach( (sub) => {
			sub.unsubscribe();
		});
	}

	private setupImages() {
		this.counter = 0;
		this.images = [
		{
			id: 0,
			src: "../../../assets/stock1.jpg"
		}, {
			id: 1,
			src: "../../../assets/stock2.jpg"
		}, {
			id: 2,
			src: "../../../assets/stock3.jpg"
		}
		];
	}

	public toggle() {
		if (this.counter >= (this.images.length - 1)) {
			this.counter = 0;
		} else {
			this.counter++;
		}
	}

	public scroll(el) {
		el.scrollIntoView({behavior: "smooth"});
	}
}
