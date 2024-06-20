import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyectoCamila';
  
  estados = ["Molesto","Alegre",'Cansado',"Triste", 'Selecciona un estado de animo']
  estadoSeleccionado:any = 'Selecciona un estado de animo';

  colores:any = {
    'Selecciona un estado de animo': 'white'
    'Molesto': "red",
    'Alegre': 'yellow',
    'Cansado':  "gray ",
    'Triste' : 'blue',
  }

  cambiarColor(){
    document.body.style.backgroundColor = this.colores[this.estadoSeleccionado]
  }
}
