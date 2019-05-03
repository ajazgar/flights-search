import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isWayClicked: boolean;


  constructor(private el: ElementRef) { }


  @HostListener('click', ['$event.target.id']) onClick(id: any) {
    this.el.nativeElement.style.addClass(id, 'checked');
  }

  ngOnInit() {
  }

}
