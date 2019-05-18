import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InformacionService } from '../informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.component.html',
  styleUrls: ['./pag-principal.component.css']
})
export class PagPrincipalComponent implements OnInit {

  constructor( private informacionService: InformacionService, private router: Router ) { }

  ngOnInit() {
  }

  Sending(form: NgForm){
    // console.log(form.value);
    // this.informacionService.Informacion(
    //   form.value.nombre,
    //   form.value.hombremujer,
    //   form.value.edad,
    //   form.value.elegirejercicio,
    //   form.value.ejercicio,
    //   form.value.elegirbebida,
    //   form.value.energizante,
    //   form.value.ritmocardiaco,
    //   form.value.elegirenfermedad,
    //   form.value.enfermedad,
    //   form.value.elegirpcardiaco,
    //   form.value.problemascardiacos,
    //   form.value.elegirchequeo,
    //   form.value.chequeomed
    //   )
    this.informacionService.newInformacion(
      form.value.nombre,
      form.value.hombremujer,
      form.value.edad,
      form.value.elegirejercicio,
      form.value.ejercicio,
      form.value.elegirbebida,
      form.value.energizante,
      form.value.ritmocardiaco,
      form.value.elegirenfermedad,
      form.value.enfermedad,
      form.value.elegirpcardiaco,
      form.value.problemascardiacos,
      form.value.elegirchequeo,
      form.value.chequeomed
      );
      this.router.navigate(['paginformacion']);
  }

}
