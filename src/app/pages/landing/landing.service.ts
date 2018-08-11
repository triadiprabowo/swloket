import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConstantService } from '../../shared/services/constant.service';

export interface DataModel {
	people: object[],
	planets: object[],
	isFetching: boolean,
	isFetched: boolean
}

@Injectable()
export class LandingService {
	public $data:Observable<DataModel>;
	private $subject:BehaviorSubject<DataModel>;
	private store:DataModel;

	constructor(private http:HttpClient, private constant:ConstantService) {
		this.store = {
			people: [],
			planets: [],
			isFetching: false,
			isFetched: false
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
	 ** @method getAllPeople()
	 ** @description get list of all people in star wars movie
	 ** @return void
	 */
	public getAllPeople(): void {
		if(!this.store.people.length) {
			this.dispatch({ isFetching: true });

			this.http.get(`${this.constant.apiUrl}/api/people/`)
			.subscribe(
				(data:any) => {
					this.dispatch({ isFetching: false, isFetched: true, people: data });
				},
				(err:HttpErrorResponse) => {
					this.dispatch({ isFetching: false, isFetched: true, people: [] });
				}
			);
		}
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
}
