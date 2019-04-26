import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ];

  constructor(private swService: StarWarsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(submittedForm: NgForm) {
    if (submittedForm.valid) {
      const returnedVal = this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
      if (returnedVal !== 0) {
        submittedForm.resetForm();
        this.router.navigate(['/']);
      }
    }
  }

}
