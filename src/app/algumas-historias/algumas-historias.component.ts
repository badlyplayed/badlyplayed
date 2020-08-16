import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algumas-historias',
  templateUrl: './algumas-historias.component.html',
  styleUrls: ['./algumas-historias.component.less']
})
export class AlgumasHistoriasComponent implements OnInit {

  slides = ["a","b","c"];

  constructor() { }

  ngOnInit(): void {
  }

}
