import { Routes } from '@angular/router';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

export const routes: Routes = [
    {path: 'usuarios', component: ListarUsuariosComponent},
    {path: '', redirectTo:'/usuarios', pathMatch: 'full'},
];
