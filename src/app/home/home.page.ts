import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  progress = 0.50;
  constructor() {
      setInterval( () => {
        this.progress += .1;
      }, 1000 );
  }

  ngOnInit() {
  }

}
