import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  characters: any = [];
  listUpdatedSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private swService: StarWarsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.characters = this.swService.getCharacters(params.side);

        this.listUpdatedSubscription = this.swService.listUpdated.subscribe( listUpdated => {
          this.characters = this.swService.getCharacters(params.side);
        });

      });
  }

  ngOnDestroy() {
    this.listUpdatedSubscription.unsubscribe();
  }

}
