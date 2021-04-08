import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Email {
	from: string;
	to: string[];
	cc: string[];
	bcc: string[];
	subject: string;
	body: string;
	date: string;
}

@Injectable()
export class EmailsApiService {
	emailsUrl = 'assets/emails.json';

	constructor(private http: HttpClient) {}

	loadEmailsArchive(): Observable<Email[]> {
		return this.http.get<Email[]>(this.emailsUrl);
	}
}
