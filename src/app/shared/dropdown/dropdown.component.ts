import { Component, OnInit } from '@angular/core';
import {ClassesService} from '../../classes.service';
import {PassengersService} from '../../passengers.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  dropdownOpened: boolean;
  personsAmount = '1 osoba';
  travelClass: any;
  passengers: any;

  constructor(private classesService: ClassesService, private passengersService: PassengersService) { }

  ngOnInit() {
    this.classesService.get().subscribe(data => {
      this.travelClass = data;
    });

    this.passengersService.get().subscribe(data => {
      this.passengers = data;
    });
  }

  toggleDropdown() {
    this.dropdownOpened = !this.dropdownOpened;
  }



}
