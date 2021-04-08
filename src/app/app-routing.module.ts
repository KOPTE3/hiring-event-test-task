import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailListComponent } from './email-list/email-list.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/emails' },
	{ path: 'emails', pathMatch: 'full', component: EmailListComponent },
	{ path: '**', redirectTo: '/emails' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
