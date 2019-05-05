import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
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

  constructor(private classesService: ClassesService, private passengersService: PassengersService, private el: ElementRef) { }

  ngOnInit() {
    this.classesService.get().subscribe(data => {
      this.travelClass = data;
    });

    this.passengersService.get().subscribe(data => {
      this.passengers = data;
    });
  }

  @HostListener('click', ['$event.target.id']) onClick(id: any) {
    this.el.nativeElement.style.getElementById('travel');
  }

  toggleDropdown() {
    this.dropdownOpened = !this.dropdownOpened;
  }



}
