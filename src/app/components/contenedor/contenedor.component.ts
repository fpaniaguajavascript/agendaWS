import { Component } from '@angular/core';
import { TareaComponent } from "../tarea/tarea.component";
import { CommonModule } from '@angular/common';
import { GestorTareasWebService } from '../../services/gestor-tareas-web.service';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [TareaComponent, CommonModule],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {
  constructor(public gestorTareasWeb: GestorTareasWebService) {

  }
}
