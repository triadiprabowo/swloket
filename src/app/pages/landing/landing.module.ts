import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

// import components
import { LandingComponent } from './landing.component';
import { LandingService } from './landing.service';

// import dialog components
import { DetailPeopleDialog } from './dialogs/detail-people/detail-people.dialog';

// import dependencies
import { NavigationMenuModule } from '../../shared/components/navigation-menu/navigation-menu.module';
import { PipeModule } from '../../shared/pipes/pipe.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatDialogModule,
		HttpClientModule,
		NavigationMenuModule,
		RouterModule.forChild([
			{ path: '', component: LandingComponent }
		]),
		PipeModule
	],
	declarations: [LandingComponent, DetailPeopleDialog],
	entryComponents: [DetailPeopleDialog],
	providers: [
		LandingService
	]
})
export class LandingModule { }