import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [],
  template: `<h1>Task Manager Plus</h1>`,
  styles: `
  h1 {
    text-align: center;
    text-transform: uppercase;
    color:blue;
  }`
})
export class CabeceraComponent {

}
