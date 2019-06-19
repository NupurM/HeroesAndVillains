import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentationComponent } from './documentation/documentation.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'heroes',
    component: CharacterListComponent,
    data: { profession: 'Hero' }
  },
  {
    path: 'villains',
    component: CharacterListComponent,
    data: { profession: 'Villain' }
  },
  {
    path: 'details/:id',
    component: CharacterDetailsComponent
  },
  {
    path: 'documentation',
    component: DocumentationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
