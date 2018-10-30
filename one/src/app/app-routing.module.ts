import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',component: HomeComponent },
  {path : 'contact', component : ContactComponent },
  {path : 'about', component : AboutComponent},
 // { path: '**', component: PageNotFoundComponent },
    { path: '',component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
  //  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactComponent,AboutComponent,PageNotFoundComponent]