import { Routes } from '@angular/router';
import { SuperheroComponent } from './superhero/superhero.component';
import { DetailComponent } from './superhero/components/detail/detail.component';

export const routes: Routes = [
    {
        path:'superhero',
        component:SuperheroComponent
    },
    {
        path:'superhero/:id',
        component:DetailComponent
    },
    {
        path:'',
        redirectTo:'superhero',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'superhero'
    }
];
