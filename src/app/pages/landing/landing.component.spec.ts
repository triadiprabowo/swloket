import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LandingComponent } from './landing.component';
import { NavigationMenuModule } from '../../shared/components/navigation-menu/navigation-menu.module';
import { PipeModule } from '../../shared/pipes/pipe.module';
import { CommonModule } from '@angular/common';
import { LandingService } from './landing.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ConstantService } from '../../shared/services/constant.service';

describe('LandingComponent', () => {
	let service, fixture, component;

	const mockNextURL:string = `https://swapi.co/api/people/?page=2`;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				LandingComponent
			],
			providers: [LandingService, ConstantService],
			imports: [RouterTestingModule, NavigationMenuModule, 
				CommonModule, FormsModule, PipeModule, HttpClientModule, MatDialogModule]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(LandingComponent);
			component = fixture.componentInstance;
			service = TestBed.get(LandingService);
		})
	}));

	it('should create the app', async(() => {
		fixture.detectChanges();

		expect(component).toBeTruthy();
		expect(service).toBeTruthy();
	}));

	it('should render header tag', async(() => {
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('header').innerHTML).toBeDefined();
	}));

	it('should fetch initial list of people', async(() => {		
		fixture.detectChanges();

		// fetch people list
		component.service.fetchPeopleList();

		fixture.detectChanges();

		fixture.whenStable().then(() => {
			expect(component.$vm.people.results.length).toEqual(10);
		});		
	}));

	it('should fetch list of films', async(() => {
		fixture.detectChanges();

		// fetch movie list
		component.service.fetchMoviesList();

		fixture.whenStable().then(() => {
			expect(component.$vm.films.length).toBeGreaterThan(0);
		});		
	}));
});
