import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import component
import { NavigationMenuComponent } from './navigation-menu.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [NavigationMenuComponent],
	exports: [NavigationMenuComponent]
})
export class NavigationMenuModule { }