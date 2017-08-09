import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{onTest()}}
    <input type="text" [value]="name" [ngClass] ="'red'"  (keyup)="onKeyup(inputElement.value)"  #inputElement> <br>
    <p>{{values}}</p>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  name = 'Kornel';
  values = '';

  onTest() {
    return 1 === 1;
  }
  onKeyup (value: String) {
    this.values += value + ' | ';
  }
}
