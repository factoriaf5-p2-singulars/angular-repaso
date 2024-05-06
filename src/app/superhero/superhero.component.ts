import { Component, OnInit, inject } from '@angular/core';
import data from '../../data/data.json';
import { Superhero } from '../shared/models/superhero';
import { RouterLink } from '@angular/router';
import { SuperheroService } from './services/superhero.service';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from "./components/form/form.component";
@Component({
    selector: 'app-superhero',
    standalone: true,
    templateUrl: './superhero.component.html',
    styleUrl: './superhero.component.scss',
    imports: [RouterLink, ReactiveFormsModule, FormComponent]
})
export class SuperheroComponent implements OnInit {
  superheroService = inject(SuperheroService)
  superheroes: Superhero[] = this.superheroService.getAllSuperheroes();
  superheroForm!: FormGroup;

  constructor(private fb: FormBuilder) { }
  onSubmit(superhero:Partial<Superhero>) {

    this.superheroService.createSuperhero(superhero);
    console.log(this.superheroes);

  }

  ngOnInit(): void {
    this.superheroForm = this.fb.group({
      id: [999],
      name: [''],
      images: [''],
    })
  }
}
