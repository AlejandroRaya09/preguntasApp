import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  indexPregunta = 0;
  public preguntas: Pregunta[] = [
    new Pregunta('Cual es la capital de Mexico?',[
      new Respuesta('Buenos Aires', false),
      new Respuesta('London', false),
      new Respuesta('CDMX', true),
      new Respuesta('Santiago', false)
    ]),
    new Pregunta('Cual es la capital de Francia?',[
      new Respuesta('Roma', false),
      new Respuesta('ATenas', false),
      new Respuesta('Italia', false),
      new Respuesta('Francia', true)
    ]),
    new Pregunta('Cual es la capital de Chile?',[
      new Respuesta('Santiago', true),
      new Respuesta('Buenos Aires', false),
      new Respuesta('London', false),
      new Respuesta('CDMX', false)
    ])
  ]

  constructor() { }


  getPreguntas():Pregunta[]{
    return this.preguntas.slice();
  }
}
