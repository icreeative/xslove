import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'orderBy',
	pure: false
})
export class OrderByPipe implements PipeTransform {
	getDate(date: string) {
			let tempDate = date.split(".");
			let y = tempDate[2].split(" ")[0];
			let m = tempDate[1].length != 1 ? tempDate[1] : "0" + tempDate[1];
			let d = tempDate[0].length != 1 ? tempDate[0] : "0" + tempDate[0];
			return new Date(`${y}/${m}/${d}`);
		}

	transform(value: any, orderBy?: any): any {
		let propertyName = orderBy['orderProperty'];
		let order = orderBy['order']; 
		if (propertyName != "dateOfBirth") {
			let change = 0, temp: any;
			do {
				change = 0;
				for (var i = 0; i < value.length - 1; i++) {
					if (order ? value[i][propertyName] > value[i + 1][propertyName] : value[i][propertyName] < value[i + 1][propertyName]) {
						change++;
						temp = value[i];
						value[i] = value[i + 1];
						value[i + 1] = temp;
					}
				}
			} while (change != 0)
			return value.slice();
		} else {
			let change = 0, temp: any;
			do {
				change = 0;
				for (var i = 0; i < value.length - 1; i++) {
					if (order ? this.getDate(value[i][propertyName]).valueOf() > this.getDate(value[i + 1][propertyName]).valueOf() : this.getDate(value[i][propertyName]).valueOf() <this.getDate( value[i + 1][propertyName]).valueOf()) {
						change++;
						temp = value[i];
						value[i] = value[i + 1];
						value[i + 1] = temp;
					}
				}
			} while (change != 0)
			return value.slice();
		}
	}
}
