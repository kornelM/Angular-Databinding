import {Component} from '@angular/core';
import {PropertyBindingComponent} from "./property-binding.component"


@Component({
  selector: 'app-root',
  template: `
    <section class="parent">
      <h2> This is parent component</h2>
      <h4>Enter your name please</h4>
      <input type="text" [(ngModel)]="name"/>
      <br>
      <br>
      <section class="child">
        <my-property-binding  [myName]="name" [myAge]="34" (hobbiesChanged)="hobbies = $event"></my-property-binding>
      </section>
      <p>My hobbies are: {{hobbies}}</p>
    </section>
  `,
  styleUrls: ['app.component.scss'],

})
export class AppComponent {
  name: String = '';
  hobbies: String = '';

}
