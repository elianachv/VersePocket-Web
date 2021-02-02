import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {
  nuevoUsuario: Usuario;
  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.nuevoUsuario = new Usuario('', '', '', '');
  }

  ngOnInit(): void {
  }

  registrarUsuario() {
    this.usuarioService.registrarUsuario(this.nuevoUsuario).subscribe(

      (res: any) => {
        if (res.statusCode !== 200) {
          if (res.errores) {
            alert('Errores al llenar el formulario');
            console.log(res.errores);
          }else{
            alert(res.mensaje);
            console.log(res.mensaje);
          }
          
        } else {
          alert('Registro exitoso');
          //this.router.navigate(['/listado'])
        }

      }, (error) => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(errorMensaje);
        }
      }
    );
  }


}
