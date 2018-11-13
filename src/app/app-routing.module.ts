import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{
		path: 'landing',
		component: LandingComponent,
		data: { title: 'Rentalil' }
	},{
		path: 'login',
		component: LoginComponent,
		data: { title: 'Rentalil - Login' }
	},{
		path: 'signup',
		component: SignupComponent,
		data: { title: 'Rentalil - Sign up' }
	},{	
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AuthGuard],
		data: { title: 'Rentalil - Dashboard' }
	},{
		path: '',
		redirectTo: '/landing',
		pathMatch: 'full'
	},{
		path: '**',
		component: PageNotFoundComponent,
		data: { title: "Page Not Found" }
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 