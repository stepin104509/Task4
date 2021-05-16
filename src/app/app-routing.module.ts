import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouDetailsComponent } from './cou-details/cou-details.component';
import { FacDetailsComponent } from './fac-details/fac-details.component';
import { CWFDetailsComponent } from './cwfdetails/cwfdetails.component';
import { CWNFDetailsComponent } from './cwnfdetails/cwnfdetails.component';
const routes: Routes = [
  {path:'facdetails', component: FacDetailsComponent},
  {path:'coudetails', component: CouDetailsComponent},
  {path:'cwfdetails', component: CWFDetailsComponent},
  {path:'cwnfdetails', component: CWNFDetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
