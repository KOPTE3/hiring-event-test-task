import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Page {
	from: number;
	to: number;
	page: number;
	current: boolean;
}

@Component({
	selector: 'app-pagination',
	templateUrl: 'pagination.component.html',
	styleUrls: ['pagination.component.css'],
})
export class PaginationComponent {
	@Input() contentLength: number = 0;
	@Input() pageSize: number = 20;
	@Input() currentPage: number = 0;
	@Output() currentPageChange = new EventEmitter<number>();

	constructor() {}

	get pages(): Page[] {
		const pages: Page[] = [];
		for (let startIndex = 0; startIndex < this.contentLength; startIndex += this.pageSize) {
			const page = startIndex / this.pageSize;
			pages.push({
				from: startIndex + 1,
				to: Math.min(startIndex + this.pageSize, this.contentLength),
				page,
				current: page === this.currentPage,
			});
		}
		return pages;
	}

	choosePage(pageNumber: number): void {
		console.log({ pageNumber });

		this.currentPage = pageNumber;
		this.currentPageChange.emit(pageNumber);
	}
}
