import { Pipe, PipeTransform } from '@angular/core';
import { Email } from './emails-api.service';

export interface PaginationOptions {
	pageSize: number;
	currentPage: number;
}

@Pipe({
	name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
	transform(emails: Email[], paginationOptions: PaginationOptions): Email[] {
		const { pageSize, currentPage } = paginationOptions;

		const startIndex = pageSize * currentPage;
		const endIndex = pageSize * (currentPage + 1);
		return emails.slice(startIndex, endIndex);
	}
}
