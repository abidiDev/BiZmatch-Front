import { RouterModule, Routes } from '@angular/router';
import { MainVitrineComponent } from './vitrine/main-vitrine/main-vitrine.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainEntrepriseComponent } from './entrepriseINFO/main-entreprise/main-entreprise.component';
import { SigninFormComponent } from './auth/signin-form/signin-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { ForgedPwdFormComponent } from './auth/forged-pwd-form/forged-pwd-form.component';
import { MainServiceComponent } from './services/main-service/main-service.component';
import { PartnershipTypeMainComponent} from './partnership/main-partnershipType/partnershipType-main.component';
import { MainReFormComponent } from './partnershipForm/main-re-form/main-re-form.component';
import { meetingComponent } from './partnershipForm/meeting/meeting.component';
import { validationComponent } from './partnershipForm/validation/validation.component';
import { topicMessageComponent } from './partnershipForm/topicMessage/topicMessage.component';

import { MainEntrepriseListComponent } from './EntrepriseList/main-entrepriseList/main-entrepriseList.component';
import { EntrepriseListComponent } from './EntrepriseList/entreprise-List/entreprise-list.component';

import { DashboardMainComponent } from './BackOffice/dashboard-main/dashboard-main.component';
import { StatisticComponent } from './BackOffice/statistic/statistic.component';
import { MainDashboardProfilComponent } from './BackOffice/Dashboard_profil/main-dashboard-profil/main-dashboard-profil.component';
import { DatatableComponent } from './BackOffice/datatable/datatable.component';
import { RealestateInfoComponent } from './BackOffice/realestate-info/realestate-info.component';
import { ContratComponent } from './BackOffice/contrat/contrat.component';
import { ForumComponent } from './BackOffice/forum/forum.component';
import { ResetFormComponent } from './auth/reset-form/reset-form.component';

import{AuthguardGuard} from'./shared/authguard.guard'
import { NgModule } from '@angular/core';

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
    path: 'MainEntrepriseListComponent',
    component: MainEntrepriseListComponent, 
   
  },
  
  {
    path: 'EntrepriseListComponent/:id',
    component: EntrepriseListComponent, 
   
  },
  {
    path: 'PartnershipTypeMainComponent',
    component: PartnershipTypeMainComponent,
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
  { path: 'DashboardMainComponent', component: DashboardMainComponent, canActivate:[AuthguardGuard],
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

    
    { path: '404', component: NotFoundComponent },  // Wildcard route for a 404 page
    { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
