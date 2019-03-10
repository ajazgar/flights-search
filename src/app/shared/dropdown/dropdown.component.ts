import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  dropdownOpened: boolean;
  personsAmount = 1;
  travelClass = 'business';

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.dropdownOpened = !this.dropdownOpened;
  }



}
