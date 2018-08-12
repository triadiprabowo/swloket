import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConstantService } from '../../shared/services/constant.service';

export interface DataModel {
	people: any,
	planets: any,
	films: any[],
	isFetching: boolean,
	isFetched: boolean,
	detailSpecies: any
}

@Injectable()
export class LandingService {
	public $data:Observable<DataModel>;
	private $subject:BehaviorSubject<DataModel>;
	private store:DataModel;

	constructor(private http:HttpClient, private constant:ConstantService) {
		this.store = {
			people: null,
			planets: null,
			films: [],
			isFetching: false,
			isFetched: false,
			detailSpecies: null
		}

		this.$subject = <BehaviorSubject<DataModel>>new BehaviorSubject({});
		this.$data = this.$subject.asObservable();

		// init data store value
		this.$subject.next(this.store);
	}

	public dispatch(obj:any): DataModel {
		const newStore:DataModel = (<any>Object).assign(this.store, obj);
		this.$subject.next(newStore);

		return newStore;
	}

	/**
	 ** @method fetchPeopleList()
	 ** @description get list of all people in star wars movie
	 ** @return void
	 */
	public fetchPeopleList(url?:string) {
		this.dispatch({ isFetching: true });

		this.http.get(url? url : `${this.constant.apiUrl}/api/people/`)
		.subscribe(
			(data:any) => {
				if(url) {
					const people = (<any>Object).assign(
						{}, 
						{ 
							...this.store.people, 
							next: data.next, 
							previous: data.previous, 
							results: [...this.store.people.results, ...data.results] 
						}
					);

					this.dispatch({ people: people, isFetching: false });
					return;
				}

				this.dispatch({ isFetching: false, isFetched: true, people: data });
				return;
			},
			(err:HttpErrorResponse) => {
				return this.dispatch({ isFetching: false, isFetched: true, people: [] });
			}
		);
	}

	/**
	 ** @method fetchMoviesList()
	 ** @description fetch all movies list of star wars movie
	 ** @return void
	 */
	 public fetchMoviesList(): void {
	 	this.http.get(`${this.constant.apiUrl}/api/films/`)
	 	.subscribe(
	 		(data:any) => {
	 			this.dispatch({ films: data.results });
	 		},
	 		(err:HttpErrorResponse) => {
	 			this.dispatch({ films: [] });
	 		}
	 	);
	 }

	/**
	 ** @method getAllPlanets()
	 ** @description get list of all planets in star wars movie
	 ** @return void
	 */
	public getAllPlanets(): void {
		if(!this.store.planets.length) {
			this.http.get(`${this.constant.apiUrl}/api/planets/`)
			.subscribe(
				(data:any) => {
					this.dispatch({ isFetching: false, isFetched: true, planets: data });
				},
				(err:HttpErrorResponse) => {
					this.dispatch({ isFetching: false, isFetched: true, planets: [] });
				}
			);
		}
	}

	/**
	 ** @method parseURLtoMoviesName()
	 ** @description parse url to movies name
	 ** @return <string> Movies name
	 */
	public parseURLtoMovieTitle(url:string): string {		
		for(let i=0; i < this.store.films.length; i++) {
			if(this.store.films[i].url == url) {
				return this.store.films[i].title.toString();
			}
		}
	}

	/**
	 ** @method parseSpecies()
	 ** @description parse url to movies name
	 ** @return <string> Movies name
	 */
	public parseSpecies(url:string) {
		this.http.get(`${url}`)
		.subscribe(
			(data:any) => {
				this.dispatch({ detailSpecies: data });
			},
			(err:HttpErrorResponse) => {
				this.dispatch({ detailSpecies: null });
			}
		);
	}
}
