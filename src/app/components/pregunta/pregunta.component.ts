import { Component, inject, OnInit } from '@angular/core';
import { BotoneraComponent } from './botonera/botonera.component';
import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta } from '../../models/pregunta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta',
  standalone: true,
  imports: [BotoneraComponent,CommonModule],
  templateUrl: './pregunta.component.html',
  styleUrl: './pregunta.component.css',
})
export class PreguntaComponent implements OnInit {
  listPreguntas: Pregunta[] = [];
  public preguntasServices = inject(PreguntaService);

  ngOnInit(): void {
    this.listPreguntas = this.preguntasServices.getPreguntas();
  }

  obtenerPregunta(){
    return this.listPreguntas[this.preguntasServices.indexPregunta].descripcionPregunta;
  }
}
