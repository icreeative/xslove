import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { OrderByPipe } from './order-by.pipe';
import { PaginationPipe } from './pagination.pipe';
import { SearchTermPipe } from './search-term.pipe';
import { PaginationService } from './pagination.service';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    PaginationPipe,
    SearchTermPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
