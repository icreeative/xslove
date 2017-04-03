import { Component, OnInit } from '@angular/core';
import { Worker } from './worker';
import { WORKERS } from './worker-data';
import { BehaviorSubject } from 'rxjs'
import { PaginationService } from './pagination.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	workers: Worker[];

	// FOR ORDER
	order = true;
	orderProperty = '';
	lastOrder = '';

	//FILTER TERM
	term = "";
	termProp = "";

	constructor(public paginationService: PaginationService) { }

	ngOnInit() {
		this.workers = WORKERS;
	}

	changeOrder(property: string){
		if( property == this.lastOrder ) this.order = !this.order;
		this.orderProperty = property;
		this.lastOrder = property;
	}

	filterData(event) {
		this.termProp = event.target.id;
		this.term = event.target.value;
	}

	pageNext() {
		this.paginationService.pageNext();
	}

	pagePrev() {
		this.paginationService.pagePrev();
	}

	pageSet(page: number) {
		this.paginationService.pageSet(page);
	}

	getPageCount() {
		return this.paginationService.pagesCount;
	}

	getPages() {
		return new Array(this.paginationService.pagesCount);
	}

	getCurrentPage() {
		return this.paginationService.currentPage;
	}

}
