import { Component, Input } from '@angular/core';
import { RoverFormComponent } from '../rover-form/rover-form.component';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
  providers: [ ]
})

export class PhotosListComponent {
  @Input() childPhotos;
  constructor() { }

}
