import { Component, Input, OnInit, inject } from '@angular/core';
import { Superhero } from '../../../shared/models/superhero';
import data from '../../../../data/data.json';
import {Location} from '@angular/common';
import { SuperheroService } from '../../services/superhero.service';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{
location = inject(Location)
superheroService = inject(SuperheroService);

@Input('id') id!: string;
// superheroes:Superhero[]=[...data];
superhero!:Superhero | null;

ngOnInit(): void {

  this.superhero = this.superheroService.getOneSuperhero(+this.id);

  // const superhero = this.superheroes.find(
  //   superhero => {
  //     console.log(superhero.id, this.id);

  //     return superhero.id === +this.id
  //   })
  //   if(superhero){
  //     this.superhero = superhero;
  //   }

}
back(){
  this.location.back();
}
}
