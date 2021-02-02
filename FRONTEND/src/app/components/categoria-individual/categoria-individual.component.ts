import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';


@Component({
  selector: 'app-categoria-individual',
  templateUrl: './categoria-individual.component.html',
  styleUrls: ['./categoria-individual.component.scss']
})
export class CategoriaIndividualComponent implements OnInit {
  categoria: Categoria;
  categoriaLocal: any;
  constructor(private categoriaService: CategoriaService) {
    this.categoria = new Categoria('', '','','');
    this.categoriaLocal = localStorage.getItem('categoria');
    localStorage.clear();
  }

  ngOnInit(): void {
    this.mostrarCategoria();
  }

  mostrarCategoria() {
    let categoria = JSON.parse(this.categoriaLocal);
    console.log('LA categoria recuperada es '+this.categoriaLocal);
    console.log('id '+ categoria._id);

    this.categoriaService.mostrarCategoria(categoria._id).subscribe(
      (res: any) => {
        if (res.categoria) {
          this.categoria = res.categoria;
        } else {
          alert('Problema para recuperar la categoria');
        }

      }, (error) => {
        console.log('Error ' + JSON.stringify(error));
      }
    );
  }

}
