import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/animations/fade.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeAnimation]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
