import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters: any = [];

  constructor(private activatedRoute: ActivatedRoute, private swService: StarWarsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.characters = this.swService.getCharacters(params.side);

        this.swService.listUpdated.subscribe( listUpdated => {
          this.characters = this.swService.getCharacters(params.side);
        });

      });
  }

}
