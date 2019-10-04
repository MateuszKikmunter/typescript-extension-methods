import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Extension Methods';
  capitalizedString = "abc".capitalizeFirstLetter();
  emptyCapitalizedString = "".capitalizeFirstLetter();
  emptyString = "".isNullOrEmpty();
  someString = "some string".isNullOrEmpty();
}