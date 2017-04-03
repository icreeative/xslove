import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { PaginationService } from './pagination.service';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  constructor(public paginationService: PaginationService){}

  transform(value: any, args?: any): any {
    this.paginationService.pagesCount = Math.ceil(value.length / this.paginationService.perPage); // Nadpisywanie ilości stron pod każde filtrowanie bezpośrednio przez service
    let page = args - 1;
      return value.slice( page * 5, ( page + 1 ) * 5);
  }

}
