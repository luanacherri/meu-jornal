import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public mostrarAlerta(){
  alert('Estou gostando do curso!');
}
}
