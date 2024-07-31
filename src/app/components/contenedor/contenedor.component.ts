import { Component } from '@angular/core';
import { TareaComponent } from "../tarea/tarea.component";
import { CommonModule } from '@angular/common';
import { GestorTareasWebService } from '../../services/gestor-tareas-web.service';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../interfaces/tarea';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [TareaComponent, CommonModule, FormsModule],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {
  public filtro: string = "";
  public tareasFiltradas: Tarea[] = [];
  constructor(public gestorTareasWeb: GestorTareasWebService) {
    this.tareasFiltradas = gestorTareasWeb.tareas;
  }
  buscar(): void {
    this.tareasFiltradas = this.gestorTareasWeb.tareas.filter(tarea => {
      return tarea.title.includes(this.filtro);
    });
  }
}
