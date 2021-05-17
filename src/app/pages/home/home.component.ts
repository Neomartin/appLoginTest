import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: any;
  public date = moment().unix();
  constructor() {
   }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '');
  }

}
