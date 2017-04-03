import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {
	currentPage: number;
	perPage: number;
	pagesCount: number;
	constructor() { 
		this.currentPage = 1;
		this.perPage = 5;
		this.pagesCount = 1;
	}

	pageNext() {
		if (this.currentPage < this.pagesCount) this.currentPage++;
	}

	pagePrev() {
		if (this.currentPage > 1) this.currentPage--;
	}

	pageSet(page: number) {
		if (page > 0 && page <= this.pagesCount) this.currentPage = page;
	}

	getPageCount() {
		return this.pagesCount;
	}

	getCurrentPage() {
		return this.currentPage;
	}

}
