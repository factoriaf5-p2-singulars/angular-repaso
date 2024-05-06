import { Injectable } from '@angular/core';
import data from '../../../data/data.json';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  constructor() { }

  getAllSuperheroes(){
    return data;
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
}
