import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isOneWay: boolean;
  isTwoWays: boolean;
  isMultiCity: boolean;

  constructor() { }


  ngOnInit() {
    this.isTwoWays = true;
  }

  checkOneWay() {
    this.isOneWay = true;
    this.isTwoWays = false;
    this.isMultiCity = false;
  }

  checkTwoWays() {
    this.isOneWay = false;
    this.isTwoWays = true;
    this.isMultiCity = false;
  }

  checkMultiCity() {
    this.isOneWay = false;
    this.isTwoWays = false;
    this.isMultiCity = true;
  }

}
