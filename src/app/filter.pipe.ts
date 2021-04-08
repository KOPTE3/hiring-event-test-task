import { Pipe, PipeTransform } from '@angular/core';
import { Email } from './emails-api.service';

@Pipe({
	name: 'filter',
})
export class FilterPipe implements PipeTransform {
	transform(emailsCollection: Email[], searchQuery: string): Email[] {
		if (!searchQuery) {
			return emailsCollection;
		}

		return emailsCollection.filter(
			email => email.body.includes(searchQuery) || email.subject.includes(searchQuery),
		);
	}
}
