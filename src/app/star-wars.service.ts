import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StarWarsService {

  charactersList: any = [
    {name: 'Luke Skywalker', side: 'light'},
    {name: 'Darth Vader', side: 'dark'}
  ];

  listUpdated = new Subject();

  constructor(private http: HttpClient) { }

  getCharacters(side) {
    if (side === 'all') {
      return this.charactersList.slice();
    }

    return this.charactersList.filter((eachCharacter) => {
      return eachCharacter.side === side;
    });
  }


  updateCharacterList(charInfo) {
    const index = this.charactersList.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.charactersList[index].side = charInfo.side;
    this.listUpdated.next(true);
  }

  addCharacter(name, side) {
    const index = this.charactersList.findIndex((char) => {
      return char.name === name;
    });

    if (index !== -1) {
      return 0;
    }

    const newCharacter = {name, side};
    this.charactersList.push(newCharacter);
    this.listUpdated.next(true);
  }

  fetchCharacters() {
    return this.http.get('https://swapi.co/api/people/')
    .pipe(map((response: any) => {
      const charArray = response.results;
      const characters = charArray.map((char) => {
        return {name: char.name, side: ''};
      });
      return characters;
    }))
    .subscribe(
      (data) => {
        this.charactersList = data;
        this.listUpdated.next(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
