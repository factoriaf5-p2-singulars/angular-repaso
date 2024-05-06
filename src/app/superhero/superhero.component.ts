import { Component, OnInit, inject } from '@angular/core';
import data from '../../data/data.json';
import { Superhero } from '../shared/models/superhero';
import { RouterLink } from '@angular/router';
import { SuperheroService } from './services/superhero.service';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-superhero',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './superhero.component.html',
  styleUrl: './superhero.component.scss'
})
export class SuperheroComponent implements OnInit {
  superheroService = inject(SuperheroService)
  superheroes: Superhero[] = this.superheroService.getAllSuperheroes();
  superheroForm!: FormGroup;

  constructor(private fb: FormBuilder) { }
  onSubmit() {
    const superhero: Partial<Superhero> = {
      id: this.superheroForm.controls['id'].value,
      name: this.superheroForm.controls['name'].value,
      images: {
        xs: this.superheroForm.controls['images'].value
      }
    }
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
