import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.scss']
})
export class ListaCategoriasComponent implements OnInit {
  public categoria: Categoria;
  public categorias: any = [];
  
  constructor(private categoriaService: CategoriaService, private router:Router) {
    this.categoria = new Categoria('', '','','');

  }

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias() {

    this.categoriaService.listarCategorias().subscribe(
      (res: any) => {
        console.log('Estas son las tegorias: ' + JSON.stringify(res.categorias));

        if (res.categorias == null || res.categorias == undefined || res.categorias == []) {
          alert('No hay categorias');

        } else {
          //alert('Usuarios encontrados ' + res.allUser);

        }
        this.categorias = res.categorias;

      }, (error) => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log('Mensaje de angular: ' + JSON.stringify(errorMensaje));
        }

      }
    );


  }

  guardarCategoriaLocal(categoria:Categoria) {
    const categoriaString = JSON.stringify(categoria);
    localStorage.setItem('categoria', categoriaString);
    this.router.navigate(['/categorias/mostrar']);

  }
}
