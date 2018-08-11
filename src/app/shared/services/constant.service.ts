import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
	public apiUrl:string = 'https://swapi.co';
	public baseUrl:string = 'http://localhost:4200';
}