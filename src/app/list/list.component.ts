import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() characters;
  // @Output() sideChanged = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit() {
  }

  // onSideChanged(charInfo) {
  //   this.sideChanged.emit(charInfo);
  // }

}
