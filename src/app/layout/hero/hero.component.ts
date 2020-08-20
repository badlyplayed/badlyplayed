import { Component, OnInit } from '@angular/core';
import { RecordeService } from '../../services/recorde.service'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less']
})
export class HeroComponent implements OnInit {

  recorde:any;

  constructor(private recordeService:RecordeService) { }

  ngOnInit(): void {
    this.recordeService.getHeroes()
    .subscribe((data) => {
      this.recorde = data;
    });
  }

}