import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-meat',
  templateUrl: './the-meat.component.html',
  styleUrls: ['./the-meat.component.scss']
})
export class TheMeatComponent implements OnInit {
  theMeat: Meat[] = [
    {
      header: 'Angular and TypeScript',
      title1: 'Techniques Demonstrated',
      text1: 'Jumpstart code, angular-cli, multiple small reusable components, structural directives, attribute directives, services, routing, routing with id parameter, routing with character.profession data, promises, promise filtering with active status, observables, observable search stream, HTTP calls, GET, GET active, GET by ID, PUT, DELETE, mock API, mock DB service',
      title2: null,
      text2: null
    },
    {
      header: 'Bootstrap 4',
      title1: 'Features Utilized',
      text1: 'Forms, cards, flex boxes, nav bar, animations, hidden-down, conditional classes and color coding, hover, app wide color scheme, responsive UI for extra small (cell phone portrait), small (cell phone landscape to tablet) and large screens (laptop)',
      title2: null,
      text2: null
    },
    {
      header: 'Microsoft Azure',
      title1: 'DevOps',
      text1: 'App Services, Web Apps to Host the website, QA and PROD environments, Document DB to store data, Visual Studio integrated deploy, cloud based source control VSTS ',
      title2: 'Side Note',
      text2: 'Did you find Waldo?'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

class Meat {
  header: string;
  title1: string;
  text1: string;
  title2: string;
  text2: string;
}
