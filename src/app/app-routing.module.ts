import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainVitrineComponent } from './vitrine/main-vitrine/main-vitrine.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainEntrepriseComponent } from './entrepriseINFO/main-entreprise/main-entreprise.component';
import { SigninFormComponent } from './auth/signin-form/signin-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { ForgedPwdFormComponent } from './auth/forged-pwd-form/forged-pwd-form.component';
import { MainServiceComponent } from './services/main-service/main-service.component';
import { SellMainComponent } from './sell/sell-main/sell-main.component';
import { MainReFormComponent } from './partnershipForm/main-re-form/main-re-form.component';
import { meetingComponent } from './partnershipForm/meeting/meeting.component';
import { validationComponent } from './partnershipForm/validation/validation.component';
import { topicMessageComponent } from './partnershipForm/topicMessage/topicMessage.component';

import { MainAdsComponent } from './ads/main-ads/main-ads.component';
import { AdAfficheComponent } from './ads/ad-affiche/ad-affiche.component';

import { DashboardMainComponent } from './BackOffice/dashboard-main/dashboard-main.component';
import { StatisticComponent } from './BackOffice/statistic/statistic.component';
import { MainDashboardProfilComponent } from './BackOffice/Dashboard_profil/main-dashboard-profil/main-dashboard-profil.component';
import { DatatableComponent } from './BackOffice/datatable/datatable.component';
import { RealestateInfoComponent } from './BackOffice/realestate-info/realestate-info.component';
import { ContratComponent } from './BackOffice/contrat/contrat.component';
import { ForumComponent } from './BackOffice/forum/forum.component';
import { ResetFormComponent } from './auth/reset-form/reset-form.component';

import{AuthguardGuard} from'./shared/authguard.guard'
import { MainCRMComponent } from './CRM/main-crm/main-crm.component';
import { CrmClientsComponent } from './CRM/crm-clients/crm-clients.component';
import { CRMContentComponent } from './CRM/crmcontent/crmcontent.component';

const routes: Routes = [
  { path: '', redirectTo: 'vitrine', pathMatch: 'full' }
  , // redirect to `first-component`

  {
    path: 'vitrine', component: MainVitrineComponent,
    children: [
      {
        path: '', // child route path
        component: SigninFormComponent, // child route component that the router renders
      },
      {
        path: 'SignupFormComponent',
        component: SignupFormComponent, // another child route component that the router renders
      },
      {
        path: 'ForgedPwdFormComponent',
        component: ForgedPwdFormComponent, // another child route component that the router renders
      },

      {
        path: 'ResetFormComponent',
        component: ResetFormComponent, // another child route component that the router renders
      },
    ],

  },
  {
    path: 'MainServiceComponent',
    component: MainServiceComponent, 
   
  },
  {
    path: 'MainAdsComponent',
    component: MainAdsComponent, 
   
  },
  
  {
    path: 'AdAfficheComponent/:id',
    component: AdAfficheComponent, 
   
  },
  {
    path: 'SellMainComponent',
    component: SellMainComponent,
   // another child route component that the router renders
  },
  {
    path: 'MainReFormComponent',
    component: MainReFormComponent, 
    children:[{
      path: 'meetingComponent',
      component: meetingComponent, 
    },
    {
      path: 'validationComponent',
      component: validationComponent, 
    },
    {
      path: 'topicMessageComponent',
      component: topicMessageComponent, 
    },
    
    
  
  ],// another child route component that the router renders
  },
  { path: 'entreprise', component: MainEntrepriseComponent },
  { path: 'DashboardMainComponent', component: DashboardMainComponent, 
  children :[
    { path: '',
    component: StatisticComponent, },
    { path: 'MainDashboardProfilComponent/:idUser',
    component: MainDashboardProfilComponent, },
    { path: 'DatatableComponent',
    component: DatatableComponent, },
    { path: 'RealestateInfoComponent',
    component: RealestateInfoComponent, },
    { path: 'ContratComponent',
    component:ContratComponent, },
    { path: 'ForumComponent',
    component:ForumComponent, },
   
     ]
    },
    { path: 'MainCRMComponent',
    component:MainCRMComponent,  children :[
      { path: '',
      component:CRMContentComponent, },
      { path: 'CrmClientsComponent',
      component:CrmClientsComponent, },
      { path: 'CRMContentComponent',
      component:CRMContentComponent, },
      


    ]},
    
    { path: '404', component: NotFoundComponent },  // Wildcard route for a 404 page
    { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
