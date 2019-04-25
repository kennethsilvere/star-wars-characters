import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [];

  chosenList = 'all';

  constructor(private swService: StarWarsService) { }

  ngOnInit() {
  }

  chooseList(side) {
    this.chosenList = side;
  }

  getCharacters() {
    return this.swService.getCharacters(this.chosenList);
  }

}
