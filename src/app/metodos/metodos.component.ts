import { Component } from '@angular/core';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.component.html',
  styleUrls: ['./metodos.component.css']
})
export class MetodosComponent {
 nombre="Daniela"
 edad= 29
 activa= true

  constructor() {}
  ngOnInit() {
    console.log(this.nombre);
  }
}
