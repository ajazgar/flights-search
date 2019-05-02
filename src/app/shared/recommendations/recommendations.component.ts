import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  @Input() city: string;
  @Input() country: string;
  @Input() inspiration: string;

  constructor() { }

  ngOnInit() {
  }

}
