import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;

  constructor(private swService: StarWarsService) { }

  ngOnInit() {
  }

  onSelectSide(side) {
    this.swService.updateCharacterList({name: this.character.name, side});
  }

}
