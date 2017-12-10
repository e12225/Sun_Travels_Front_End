import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagePath: string;

  constructor() {
    this.imagePath = 'assets/wpid-anigif_enhanced-1407-1392406036-2-1.gif';
  }

  ngOnInit() {
  }

}
