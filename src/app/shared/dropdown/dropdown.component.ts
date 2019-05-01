import { Component, OnInit } from '@angular/core';
import {FightersService} from '../../fighters.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  dropdownOpened: boolean;
  personsAmount = 1;
  travelClass = 'business';

  fighters: any;

  constructor(private fightersService: FightersService) { }

  ngOnInit() {
    this.fightersService.get().subscribe(data => {
      this.fighters = data;
    });
  }

  toggleDropdown() {
    this.dropdownOpened = !this.dropdownOpened;
  }



}
