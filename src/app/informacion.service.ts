import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  formulario: any = {
    nombre: "",
    hombremujer: "",
    edad: "",
    elegirejercicio: "",
    ejercicio: "",
    elegirbebida: "",
    energizante: "",
    ritmocardiaco: "",
    elegirenfermedad: "",
    enfermedad: "",
    elegirpcardiaco: "",
    problemascardiacos: "",
    elegirchequeo: "",
    chequeomed: ""
  };

  newInformacion(
    nombre: string,
    hombremujer: string,
    edad: number,
    elegirejercicio: string,
    ejercicio: string,
    elegirbebida: string,
    energizante: string,
    ritmocardiaco: string,
    elegirenfermedad: string,
    enfermedad: string,
    elegirpcardiaco: string,
    problemascardiacos: string,
    elegirchequeo: string,
    chequeomed: string
  ) {
    console.log(nombre, hombremujer, edad, elegirejercicio, ejercicio, elegirbebida, energizante, ritmocardiaco,
      elegirenfermedad, enfermedad, elegirpcardiaco, problemascardiacos, elegirchequeo, chequeomed);
    this.formulario.nombre = nombre;
    this.formulario.hombremujer = hombremujer;
    this.formulario.edad = edad;
    this.formulario.elegirejercicio = elegirejercicio;
    this.formulario.ejercicio = ejercicio;
    this.formulario.elegirbebida = elegirbebida;
    this.formulario.energizante = energizante;
    this.formulario.ritmocardiaco = ritmocardiaco;
    this.formulario.elegirenfermedad = elegirenfermedad;
    this.formulario.enfermedad = enfermedad;
    this.formulario.elegirpcardiaco = elegirpcardiaco;
    this.formulario.problemascardiacos = problemascardiacos;
    this.formulario.elegirchequeo = elegirchequeo;
    this.formulario.chequeomed = chequeomed;
  }

  constructor() {}
}
