import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';
import { MatDialog } from '@angular/material/dialog';

// import dialogs
import { DetailPeopleDialog } from './dialogs/detail-people/detail-people.dialog';

@Component({
	templateUrl: 'landing.component.html',
	styleUrls: ['landing.component.styl'],
	selector: 'app-landing-view'
})
export class LandingComponent implements OnInit {
	public $vm:any;
	private searchFilterModel:string = '';

	constructor(public service:LandingService, private dialog:MatDialog) { }

	public ngOnInit(): void {
		this.service.$data.subscribe(models => {
			this.$vm = models;
		});

		// get: films list
		this.service.fetchMoviesList();

		// get: init people
		this.service.fetchPeopleList();
	}

	/**
	 ** @method showDetailPeople(data:any): void
	 ** @description show detail data of people
	 ** @return void
	 */
	public showDetailPeople(data:any): void {
		if(!data) return;

		let dialogRef = this.dialog.open(DetailPeopleDialog, {
			minWidth: '640px',
			disableClose: true,
			data: {
				people: data
			}
		});

		dialogRef.afterClosed().subscribe(d => {
			this.service.dispatch({ detailSpecies: null });
		});
	}
}