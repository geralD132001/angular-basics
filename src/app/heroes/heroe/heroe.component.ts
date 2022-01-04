import { Component } from '@angular/core';



@Component({
    selector: 'app-heore',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre : string =  'Spider Man';
    edad   : number = 20;

    get nombreCapitalizado (){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return  `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Ironman';
    }

    cambiarEdad(): void{
        console.log('hey...');
        this.edad =  21;
    }

}