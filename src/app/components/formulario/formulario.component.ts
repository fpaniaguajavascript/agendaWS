import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';//IMPORT POR NGMODEL
import { Tarea } from '../../interfaces/tarea';
import { CommonModule } from '@angular/common';
import { GestorTareasWebService } from '../../services/gestor-tareas-web.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],//IMPORT POR NGMODEL
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public id: number = 0;
  public title: string = "";
  public completed: boolean = false;

  constructor(public gestorTareas: GestorTareasWebService) {
  }
  crearTarea() {
    const nuevaTarea: Tarea = {
      id: this.id,
      title: this.title,
      completed: this.completed
    }
    this.gestorTareas.agregar(nuevaTarea);
  }
}