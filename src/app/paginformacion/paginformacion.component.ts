import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../informacion.service';

@Component({
  selector: 'app-paginformacion',
  templateUrl: './paginformacion.component.html',
  styleUrls: ['./paginformacion.component.css']
})
export class PaginformacionComponent implements OnInit {

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

  constructor( private informacionService: InformacionService ) { }


  ngOnInit() {
    this.formulario.nombre = this.informacionService.formulario.nombre;
    this.formulario.hombremujer = this.informacionService.formulario.hombremujer;
    this.formulario.edad = this.informacionService.formulario.edad;
    this.formulario.elegirejercicio = this.informacionService.formulario.elegirejercicio;
    this.formulario.ejercicio = this.informacionService.formulario.ejercicio;
    this.formulario.elegirbebida = this.informacionService.formulario.elegirbebida;
    this.formulario.energizante = this.informacionService.formulario.energizante;
    this.formulario.ritmocardiaco = this.informacionService.formulario.ritmocardiaco;
    this.formulario.elegirenfermedad = this.informacionService.formulario.elegirenfermedad;
    this.formulario.enfermedad = this.informacionService.formulario.enfermedad;
    this.formulario.elegirpcardiaco = this.informacionService.formulario.elegirpcardiaco;
    this.formulario.problemascardiacos = this.informacionService.formulario.problemascardiacos;
    this.formulario.elegirchequeo = this.informacionService.formulario.elegirchequeo;
    this.formulario.chequeomed = this.informacionService.formulario.chequeomed;
    console.log(this.formulario);
  }

}
