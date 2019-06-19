import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { TechnologiesComponent } from './documentation/technologies/technologies.component';
import { TheMeatComponent } from './documentation/the-meat/the-meat.component';
import { WelcomeComponent } from './documentation/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    DocumentationComponent,
    TechnologiesComponent,
    TheMeatComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
