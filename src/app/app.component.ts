import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<!-- Set router outlet for children modules -->
		<router-outlet></router-outlet>
	`
})
export class AppComponent { }
