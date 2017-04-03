import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'searchTerm'
})
export class SearchTermPipe implements PipeTransform {
	getDate(date: string) {
		let tempDate = date.split(".");
		let y = tempDate[2].split(" ")[0];
		let m = tempDate[1].length != 1 ? tempDate[1] : "0" + tempDate[1];
		let d = tempDate[0].length != 1 ? tempDate[0] : "0" + tempDate[0];
		return new Date(`${y}/${m}/${d}`);
	}

	transform(value: any, args?: any[]): any {
		let data = [];
		if (args['term'] != '') {
			if (args['termProp'] == 'dateOfBirth') {
				value.forEach(element => {
					if (this.getDate(element[args['termProp']]).toDateString() == new Date(args['term']).toDateString()) {
						data.push(element);
					}
				})
			} else {
				value.forEach(element => {
					if (element[args['termProp']].toString().toLowerCase().includes(args['term'].toLowerCase())) { // porównywanie leksykalne !!! prygotować osobne dla danych typu number aby wyświetlło przy wyszukiwaniu id pojedynczy wynik
						data.push(element);
					}
				});
			}
			return data;
		} else {
			return value;
		}
	}

}
