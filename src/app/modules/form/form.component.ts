import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Form } from 'src/app/clases/form';
import { FormService } from 'src/app/servicios/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() juego!: string;
  @Output() closeHandler = new EventEmitter()

  formData = new Form();
  formGroup!: FormGroup;

  constructor(private formService : FormService) { }

  handleSubmit(){
    this.formService.SubmitForm(this.formData, this.juego);
    this.handleClose();
  }

  handleClose(){
    this.closeHandler.emit(false)
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      // satisfaccion: new FormControl( this.formData.satisfaccion, [ Validators.required ]),
      // comentario: new FormControl( this.formData.comentario, [ Validators.required ]),
      edad: new FormControl( this.formData.edad, [ Validators.required, Validators.min(18) ]),
      nombre: new FormControl( this.formData.nombre, [ Validators.required ]),
      telefono: new FormControl( this.formData.telefono, [ Validators.required, Validators.pattern('[- +()0-9]+') ]),
    });
  }
}
