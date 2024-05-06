import { Component, inject } from '@angular/core';
import data from '../../data/data.json';
import { Superhero } from '../shared/models/superhero';
import { RouterLink } from '@angular/router';
import { SuperheroService } from './services/superhero.service';
@Component({
  selector: 'app-superhero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './superhero.component.html',
  styleUrl: './superhero.component.scss'
})
export class SuperheroComponent {
superheroService = inject(SuperheroService)
superheroes: Superhero[] = this.superheroService.getAllSuperheroes();
}
