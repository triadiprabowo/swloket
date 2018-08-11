import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import root components
import { AppComponent } from './app.component';

// import root services
import { ConstantService } from './shared/services/constant.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot([
			{ path: '', loadChildren: './pages/landing/landing.module#LandingModule' }
		])
	],
	providers: [ConstantService],
	bootstrap: [AppComponent]
})
export class AppModule { }
