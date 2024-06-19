import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  games = [
    {
      title: 'Juego 1',
      description: 'Descripción del Juego 1',
      image: '../../../assets/J1.webp'
    },
    {
      title: 'Juego 2',
      description: 'Descripción del Juego 2',
      image: 'assets/juego2.jpg'
    },
    {
      title: 'Juego 3',
      description: 'Descripción del Juego 3',
      image: 'assets/juego3.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}