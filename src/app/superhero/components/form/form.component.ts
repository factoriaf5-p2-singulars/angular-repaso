import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Superhero } from '../../../shared/models/superhero';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
@Input() superheroForm!: FormGroup;
@Output() formSent = new EventEmitter()
onSubmit(){
  const superhero: Partial<Superhero> = {
    id: this.superheroForm.controls['id'].value,
    name: this.superheroForm.controls['name'].value,
    images: {
      xs: this.superheroForm.controls['images'].value
    }
  }
  this.formSent.emit(superhero);
}
}
