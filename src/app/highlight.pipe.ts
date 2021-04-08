import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
	transform(content: string, searchQuery: string): string {
		if (!searchQuery || !content) {
			return content;
		}

		if (!content.includes(searchQuery)) {
			return content;
		}

		return content.replace(new RegExp(searchQuery), `<mark>${searchQuery}</mark>`);
	}
}
