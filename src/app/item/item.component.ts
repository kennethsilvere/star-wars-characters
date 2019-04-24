import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  // @Output() sideChanged = new EventEmitter<{name: string, side: string}>();

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit() {
  }

  onSelectSide(side) {
    // this.sideChanged.emit({name: this.character.name, side});
    this.starWarsService.updateCharacterList({name: this.character.name, side});
  }

}
