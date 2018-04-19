import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-exemplo',
  templateUrl: './segundo-exemplo.component.html',
  styleUrls: ['./segundo-exemplo.component.css']
})
export class SegundoExemploComponent implements OnInit {

  sobrenome: string = '';


  constructor() { }

  ngOnInit() {
  }

}
