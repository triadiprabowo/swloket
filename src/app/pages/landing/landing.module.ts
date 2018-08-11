import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// import components
import { LandingComponent } from './landing.component';
import { LandingService } from './landing.service';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule.forChild([
			{ path: '', component: LandingComponent }
		])
	],
	declarations: [LandingComponent],
	providers: [
		LandingService
	]
})
export class LandingModule { }