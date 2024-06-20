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
    'Molesto': "red",
    'Alegre': 'yellow',
    'Cansado':  "gray ",
    'Triste' : 'blue',
    'Selecciona un estado de animo': 'white'
  }

  cambiarColor(){
    document.body.style.backgroundColor = this.colores[this.estadoSeleccionado]
  }
}
