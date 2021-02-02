import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-creacion-categoria',
  templateUrl: './creacion-categoria.component.html',
  styleUrls: ['./creacion-categoria.component.scss']
})
export class CreacionCategoriaComponent implements OnInit {

  nuevaCategoria: Categoria;
  constructor(private categoriaService: CategoriaService, private router: Router) {
    this.nuevaCategoria = new Categoria('', '','','');
  }

  ngOnInit(): void {
  }

  crearCategoria() {
    this.categoriaService.crearCategoria(this.nuevaCategoria).subscribe(
      (res: any) => {
        if (!res.creacionExitosa) {

          alert('Errores al llenar el formulario');
          console.log(res.errores);

        } else {
          //alert(res.mensaje);
          this.router.navigate(['/categorias/listar']);
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
