import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    {{onTest()}}
    <input type="text" [value]="name" [ngClass] ="'red'"  (keyup)="onKeyup(inputElement.value)"  #inputElement/> 
    <br>
    <p>{{values}}</p>
    <br>
    <br>
    <input text="text" [(ngModel)]="name"/>
    <p>Your name: {{name}}</p>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  name: String = '';
  values = '';

  onTest() {
    return 1 === 1;
  }
  onKeyup (value: String) {
    this.values += value + ' | ';
  }
}
