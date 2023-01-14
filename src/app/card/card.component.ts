import { Component, EventEmitter, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() course: Course;

  onStandardButtonClicked() {
    console.log('Card component - standard browser event clicked...');
  }
}
