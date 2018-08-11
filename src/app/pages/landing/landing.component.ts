import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';

@Component({
	templateUrl: 'landing.component.html',
	styleUrls: ['landing.component.styl'],
	selector: 'app-landing-view'
})
export class LandingComponent implements OnInit {
	public $vm:any;

	constructor(public service:LandingService) { }

	public ngOnInit(): void {
		this.service.$data.subscribe(models => {
			this.$vm = models;
		});

		// get: init people
		this.service.getAllPeople();
	}
}