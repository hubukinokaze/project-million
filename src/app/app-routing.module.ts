import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
	{
		path: 'landing',
		component: LandingComponent,
		data: { title: 'Project Million' }
	},{
		path: 'login',
		component: LoginComponent,
		data: { title: 'Project Million' }
	},{
		path: 'dashboard',
		component: LoginComponent,
		data: { title: 'Project Million' }
	},{
		path: '',
		redirectTo: '/landing',
		pathMatch: 'full'
	},{
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
