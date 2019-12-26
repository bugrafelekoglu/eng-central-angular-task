import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-settings',
  templateUrl: './button-settings.component.html',
  styleUrls: ['./button-settings.component.css']
})
export class ButtonSettingsComponent implements OnInit {
  // Constant values of grid size
  readonly xSize = 4;
  readonly ySize = 4;
  // Grid and variables for dropdown menus
  private grid: boolean[][];
  private xSel: number;
  private ySel: number;
  private statSel: boolean;

  constructor() { }

  // Initializing the selections and grid
  ngOnInit() {
    this.xSel = 0;
    this.ySel = 0;
    this.statSel = true;
    this.grid = this.generateMatrix(this.xSize, this.ySize);
  }

  // Changes of each individual buttons obtained by this method
  toggleHandler(event) {
    this.grid[event.row][event.column] = event.status;
  }

  // Resetting grid status
  reset() {
    for(var i: number = 0; i < this.ySize; i++) {
      this.grid[i] = [];
      for(var j: number = 0; j < this.xSize; j++) {
          this.grid[i][j] = false;
      }
    }
  }

  // Confirming the status change on selected button
  confirm() {
    this.grid[this.ySel][this.xSel] = this.statSel;
  }

  generateMatrix(x: number, y: number): boolean[][] {
    let grid = [];

    for(var i: number = 0; i < y; i++) {
      grid[i] = [];
      for(var j: number = 0; j < x; j++) {
          grid[i][j] = false;
      }
    }

    return grid;
  }

  makeArray(n: number): any[] {
    return Array(n);
  }
}