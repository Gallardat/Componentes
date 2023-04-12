import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent{
  iniciar:boolean=true;
  constructor(){
  }
  ngOnInt(): void{
  }

  iniciarEvento(){
  this.iniciar=!this.iniciar;
  }
}
