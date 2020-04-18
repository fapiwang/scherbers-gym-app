import { Component, OnInit } from '@angular/core';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gymbuddies',
  templateUrl: './gymbuddies.component.html',
  styleUrls: ['./gymbuddies.component.scss']
})
export class GymbuddiesComponent implements OnInit {
  faPlusCircle = faPlusCircle;


  constructor() { }

  ngOnInit() {
  }

}
