import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToTopComponent } from './to-top/to-top.component';
import { HeroComponent } from './vitrine/hero/hero.component';
import { CtaComponent } from './vitrine/cta/cta.component';
import { ServicesComponent } from './vitrine/services/services.component';
import { PortfolioComponent } from './vitrine/portfolio/portfolio.component';
import { ClientsComponent } from './vitrine/clients/clients.component';
import { MainVitrineComponent } from './vitrine/main-vitrine/main-vitrine.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainEntrepriseComponent } from './entrepriseINFO/main-entreprise/main-entreprise.component';
import { CardComponent } from './entrepriseINFO/card/card.component';

import { ModalComponent } from './modal/modal.component';
import { SigninFormComponent } from './auth/signin-form/signin-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { ForgedPwdFormComponent } from './auth/forged-pwd-form/forged-pwd-form.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MainServiceComponent } from './services/main-service/main-service.component';
import { ServiceInfoComponent } from './services/service-info/service-info.component';
import { SelltypeComponent } from './sell/selltype/selltype.component';
import { SellMainComponent } from './sell/sell-main/sell-main.component';

import { FormCardComponent } from './partnershipForm/form-card/form-card.component';
import { MainReFormComponent } from './partnershipForm/main-re-form/main-re-form.component';
import { validationComponent } from './partnershipForm/validation/validation.component';
import { topicMessageComponent } from './partnershipForm/topicMessage/topicMessage.component';
import { meetingComponent } from './partnershipForm/meeting/meeting.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainAdsComponent } from './ads/main-ads/main-ads.component';
import { AdAfficheComponent } from './ads/ad-affiche/ad-affiche.component';
import { MainDashboardProfilComponent } from './BackOffice/Dashboard_profil/main-dashboard-profil/main-dashboard-profil.component';

import { DashboardHeaderComponent } from './BackOffice/dashboard-header/dashboard-header.component';
import { DashboardSideBarComponent } from './BackOffice/dashboard-side-bar/dashboard-side-bar.component';
import { DashboardFooterComponent } from './BackOffice/dashboard-footer/dashboard-footer.component';
import { DashboardMainComponent } from './BackOffice/dashboard-main/dashboard-main.component';
import { StatisticComponent } from './BackOffice/statistic/statistic.component';
import { DatatableComponent } from './BackOffice/datatable/datatable.component';
import { RealestateInfoComponent } from './BackOffice/realestate-info/realestate-info.component';
import { ContratComponent } from './BackOffice/contrat/contrat.component';
import { ForumComponent } from './BackOffice/forum/forum.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { AuthServiceService } from './serviceBack/auth-service.service';
import {
  FacebookLoginProvider,
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { ResetFormComponent } from './auth/reset-form/reset-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecaptchaModule } from 'ng-recaptcha';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
    ToTopComponent,
    HeroComponent,
    CtaComponent,
    ServicesComponent,
    PortfolioComponent,
    ClientsComponent,
    MainVitrineComponent,
    NotFoundComponent,
    MainEntrepriseComponent,
    CardComponent,
    ModalComponent,
    SigninFormComponent,
    SignupFormComponent,
    ForgedPwdFormComponent,
  
    MainServiceComponent,
    ServiceInfoComponent,
    SelltypeComponent,
    SellMainComponent,
    MainReFormComponent,
    validationComponent,
    FormCardComponent,
    topicMessageComponent,
    meetingComponent,
    MainAdsComponent,
    AdAfficheComponent,
    MainDashboardProfilComponent,
    DashboardHeaderComponent,
    DashboardSideBarComponent,
    DashboardFooterComponent,
    DashboardMainComponent,
    StatisticComponent,
    DatatableComponent,
    RealestateInfoComponent,
    ContratComponent,
    ForumComponent,
    ResetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MdbFormsModule,
    RecaptchaModule,
    FullCalendarModule // register FullCalendar with your app

  ],
  providers: [AuthServiceService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('485696880209784'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
