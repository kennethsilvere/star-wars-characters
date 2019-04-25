export class StarWarsService {

  charactersList = [
    {name: 'Luke Skywalker', side: 'light'},
    {name: 'Darth Vader', side: 'dark'}
  ];

  constructor() { }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.charactersList.slice();
    }

    return this.charactersList.filter((eachCharacter) => {
      return eachCharacter.side === chosenList;
    });
  }


  updateCharacterList(charInfo) {
    const index = this.charactersList.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.charactersList[index].side = charInfo.side;
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
  }


}
