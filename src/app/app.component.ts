import {Component, OnInit} from '@angular/core';
import {FightersService} from './fighters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() { }

  ngOnInit() {
  }
}
