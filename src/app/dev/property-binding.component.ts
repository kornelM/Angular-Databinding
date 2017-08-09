import {Component, Input} from '@angular/core';


@Component({
  selector: 'my-property-binding',
  template: `
    <h2>This is the child component</h2>
    <p>Hey {{name}}! I'm {{age}} yo!</p>
  `,

  inputs: ['name:myName']

})
export class PropertyBindingComponent {
  name = '';
  @Input('myAge') age = 20;
}
