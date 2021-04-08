import { Component } from '@angular/core';
import { Email, EmailsApiService } from '../emails-api.service';

@Component({
	selector: 'app-email-list',
	templateUrl: 'email-list.component.html',
	styleUrls: ['email-list.component.css'],
})
export class EmailListComponent {
	currentPage: number = 0;
	allEmails: Email[] = [];
	searchQuery: string = '';

	constructor(private emailsApiService: EmailsApiService) {
		this.emailsApiService.loadEmailsArchive().subscribe(emails => (this.allEmails = emails));
	}

	private _pageSize: number = 20;

	get pageSize(): number {
		return this._pageSize;
	}

	set pageSize(value: number) {
		this._pageSize = parseInt(String(value), 10);
	}
}
