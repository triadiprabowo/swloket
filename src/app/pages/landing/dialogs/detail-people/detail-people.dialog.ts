import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LandingService } from '../../landing.service';

@Component({
	templateUrl: './detail-people.dialog.html',
	selector: 'detail-people-dialog'
})
export class DetailPeopleDialog {
	public $vmService:any;

	constructor(@Inject(MAT_DIALOG_DATA) public $dialogData:any, 
		private dialogRef:MatDialogRef<DetailPeopleDialog>, public $dialogService:LandingService) { }

	public ngOnInit(): void {
		this.$dialogService.$data.subscribe(values => {
			this.$vmService = values;
		});

		this.$dialogService.parseSpecies(this.$dialogData.people.species[0]);
	}
}