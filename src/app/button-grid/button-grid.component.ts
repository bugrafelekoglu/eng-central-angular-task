import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-button-grid',
  templateUrl: './button-grid.component.html',
  styleUrls: ['./button-grid.component.css']
})
export class ButtonGridComponent implements OnInit {
  // Boolean grid which represents button states passed from parent button-settings
  @Input() grid: boolean[][];

  constructor() { }

  ngOnInit() { }

  // Changes of each individual buttons obtained by this method
  receiveToggle($event) {
    this.grid[$event.y][$event.x]=$event.status;
  }
}