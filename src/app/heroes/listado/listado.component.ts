 import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman','Ironman','Hulk','Thor'];

  heoreBorrado: string = '';

  borrarHeroe(){
    this.heoreBorrado = this.heroes.shift() ||  '';
  }
}
