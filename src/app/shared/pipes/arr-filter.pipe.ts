import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter',
	pure: false
})
export class ArrFilterPipe implements PipeTransform {
	transform(items: any[], filter: string, val:string): any {
		if (!items || !filter || !val) {
			return items;
		}

		// filter items array, items which match and return true will be
		// kept, false will be filtered out
		return items.filter(item => item[filter].indexOf(val) !== -1);
	}
}