import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  noticias: string[] = [
    "Noticia 1",
    "Noticia 2",
    "Noticia 3",
    "Noticia 4"];

  mostrarNoticia: boolean = true;

  titulo: string = 'Curso Angular';
  texto: string = 'Utilizando String Interpolation';
  caminho_imagem: string = '../../assets/gatinho.jpg';

  
  constructor() { }

  ngOnInit() {
  }

  public esconderNoticia(){
    this.mostrarNoticia = false;

  }

  public voltarNoticia(){
    this.mostrarNoticia = true;
  }
}
