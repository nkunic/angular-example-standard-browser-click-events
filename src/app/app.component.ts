import { Component } from '@angular/core';
import { COURSES } from '../db-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];

  onStandardCardClicked() {
    console.log('App component - standard browser click event bubbled...');
  }

}
