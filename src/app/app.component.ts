import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Mi contador App';

  numerito: number = 13;

  base1: number = 10;

  acumulationNum( v_lor: number){
    this.numerito += v_lor; 
  }


}


