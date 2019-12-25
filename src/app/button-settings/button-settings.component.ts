import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-settings',
  templateUrl: './button-settings.component.html',
  styleUrls: ['./button-settings.component.css']
})
export class ButtonSettingsComponent implements OnInit {
  // Grid and variables for dropdown menus
  grid: boolean[][];
  xSel: number;
  ySel: number;
  statSel: boolean;

  constructor() { }

  // Initializing the selections and grid
  ngOnInit() {
    this.xSel = 0;
    this.ySel = 0;
    this.statSel = true;
    this.grid = [[false, false, false, false],
                 [false, false, false, false],
                 [false, false, false, false],
                 [false, false, false, false]];
  }

  // Changes of each individual buttons obtained by this method
  toggleHandler(event) {
    this.grid[event.y][event.x] = event.status;
  }

  // Resetting grid status
  reset() {
    this.grid = [[false, false, false, false],
                 [false, false, false, false],
                 [false, false, false, false],
                 [false, false, false, false]];
  }

  // Confirming the status change on selected button
  confirm() {
    this.grid[this.ySel][this.xSel] = this.statSel;
  }
}