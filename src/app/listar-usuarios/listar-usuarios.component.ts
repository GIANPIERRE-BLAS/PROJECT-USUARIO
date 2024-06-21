import { Component, inject } from '@angular/core';
import { ServiceListarUsuariosService } from '../services/service-listar-usuarios.service';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent {
  private usuarioService=inject(ServiceListarUsuariosService);
users: any[] = [];
  ngOnInit(): void{
    /*
    this.usuarioService.listarUsuarios().subscribe((usuarios) => {
      console.log(usuarios);
    });
    */
    this.usuarioService.listarUsuarios().subscribe((usuarios:any) => {
      this.users=usuarios;
      });
  }
}
