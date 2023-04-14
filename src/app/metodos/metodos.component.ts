import { Component } from '@angular/core';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.component.html',
  styleUrls: ['./metodos.component.css']
})
export class MetodosComponent {

  // Ejemplos de cómo declarar un string
nombre: string="Daniela"
apellido=''
nm=""

// Ejemplos de cómo declarar tipo booleano
mayorDeEdad: boolean=true;
mujer=false;
// Ejemplo de cómo declarar tipo númerico
edad= 29
altura: number=0;
peso=0;


datosCliente: string=`Mi nombre es ${this.nombre} , y tengo ${this.edad}`

 activa= true

  constructor() {}
  ngOnInit() {

  }
}
