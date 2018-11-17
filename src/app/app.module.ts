import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthGuard } from './auth.guard';

import {
	MatButtonModule,
	MatMenuModule,
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatTabsModule,
	MatCheckboxModule
} from '@angular/material';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';


@NgModule({
	declarations: [
	AppComponent,
	LoginComponent,
	LandingComponent,
	DashboardComponent,
	PageNotFoundComponent,
	TitleBarComponent,
	SignupComponent,
	FooterComponent,
	PrivacyComponent,
	TermsComponent
	],
	imports: [
	BrowserModule,
	AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	BrowserAnimationsModule,

	MatButtonModule,
	MatMenuModule,
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatTabsModule,
	MatCheckboxModule
	],
	providers: [AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(overlayContainer: OverlayContainer) {
		overlayContainer.getContainerElement().classList.add('rentalil-dark-theme');
	}
}
