import { Subject } from 'rxjs';

export class StarWarsService {

  charactersList: any = [
    {name: 'Luke Skywalker', side: 'light'},
    {name: 'Darth Vader', side: 'dark'}
  ];

  listUpdated = new Subject();

  constructor() { }

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
      return;
    }

    const newCharacter = {name, side};
    this.charactersList.push(newCharacter);
    this.listUpdated.next(true);
  }


}
