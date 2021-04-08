import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailListComponent } from './email-list/email-list.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './email-list/pagination/pagination.component';
import { PaginationPipe } from './pagination.pipe';
import { FilterPipe } from './filter.pipe';
import { HighlightPipe } from './highlight.pipe';
import { EmailsApiService } from './emails-api.service';

@NgModule({
	declarations: [
		AppComponent,
		EmailListComponent,
		PaginationComponent,
		FilterPipe,
		HighlightPipe,
		PaginationPipe,
	],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
	providers: [FilterPipe, HighlightPipe, PaginationPipe, EmailsApiService],
	bootstrap: [AppComponent],
})
export class AppModule {}
