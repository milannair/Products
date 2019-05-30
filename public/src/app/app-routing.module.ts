import { RedirectComponent } from './redirect/redirect.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  { path: '', component: RedirectComponent },
  { path: 'products', component: DashboardComponent },
  { path: 'products/new', component: CreateComponent },
  { path: 'products/:id/edit', component: EditComponent },
  { path: 'products/:id', component: DetailsComponent },
  { path: 'reset/:id', component: ResetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
