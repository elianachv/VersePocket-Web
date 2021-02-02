import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-seccion-funcionalidades',
  templateUrl: './seccion-funcionalidades.component.html',
  styleUrls: ['./seccion-funcionalidades.component.scss']
})
export class SeccionFuncionalidadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public funcionalidadGuardar() {
    console.log("click boton guardar");

    $("#explicacion_guardar").css("display", "block");
    $("#explicacion_clasificar").css("display", "none");
    $("#explicacion_repasar").css("display", "none");

    $(".carrusel_guardar").css("display", "block");
    $(".carrusel_clasificar").css("display", "none");
    $(".carrusel_repasar").css("display", "none");

    $("#boton_guarda").css("background-color", "#e8e8e8");
    $("#boton_guarda").css("border", "solid #222831");
    $("#boton_guarda").css("color", "#222831");

    $("#boton_clasifica").css("background-color", "#222831");
    $("#boton_clasifica").css("border", "solid #222831");
    $("#boton_clasifica").css("color", "#fff");


    $("#boton_repasa").css("background-color", "#222831");
    $("#boton_repasa").css("border", "solid #222831");
    $("#boton_repasa").css("color", "#fff");


  }

  public funcionalidadClasificar() {
    console.log("click boton clasificar");

    $("#explicacion_guardar").css("display", "none");
    $("#explicacion_clasificar").css("display", "block");
    $("#explicacion_repasar").css("display", "none");

    $(".carrusel_guardar").css("display", "none");
    $(".carrusel_clasificar").css("display", "block");
    $(".carrusel_repasar").css("display", "none");

    $("#boton_clasifica").css("background-color", "#e8e8e8");
    $("#boton_clasifica").css("border", "solid #222831");
    $("#boton_clasifica").css("color", "#222831");

    $("#boton_guarda").css("background-color", "#222831");
    $("#boton_guarda").css("border", "solid #222831");
    $("#boton_guarda").css("color", "#fff");


    $("#boton_repasa").css("background-color", "#222831");
    $("#boton_repasa").css("border", "solid #222831");
    $("#boton_repasa").css("color", "#fff");

  }

  public funcionalidadRepasar() {
    console.log("click boton repasar");

    $("#explicacion_guardar").css("display", "none");
    $("#explicacion_clasificar").css("display", "none");
    $("#explicacion_repasar").css("display", "block");

    $(".carrusel_guardar").css("display", "none");
    $(".carrusel_clasificar").css("display", "none");
    $(".carrusel_repasar").css("display", "block");

    $("#boton_repasa").css("background-color", "#e8e8e8");
    $("#boton_repasa").css("border", "solid #222831");
    $("#boton_repasa").css("color", "#222831");

    $("#boton_guarda").css("background-color", "#222831");
    $("#boton_guarda").css("border", "solid #222831");
    $("#boton_guarda").css("color", "#fff");


    $("#boton_clasifica").css("background-color", "#222831");
    $("#boton_clasifica").css("border", "solid #222831");
    $("#boton_clasifica").css("color", "#fff");

  }


}
