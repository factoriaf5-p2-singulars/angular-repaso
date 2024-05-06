import { Injectable } from '@angular/core';
import data from '../../../data/data.json';
import { Superhero } from '../../shared/models/superhero';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  superhero;
  constructor() {
    this.superhero = [...data];
  }

  getAllSuperheroes(){
    return this.superhero;
  }
  getOneSuperhero(id:number){
    const superhero = this.getAllSuperheroes().find(
      superhero => {
        // console.log(superhero.id, id);

        return superhero.id === id
      })
      if(superhero){
        return superhero
      } else {
        return null;
      }

  }
  createSuperhero(superhero:any){
    this.superhero.push(superhero);
  }
}
