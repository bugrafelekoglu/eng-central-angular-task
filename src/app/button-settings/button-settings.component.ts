import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-button-settings',
  templateUrl: './button-settings.component.html',
  styleUrls: ['./button-settings.component.css']
})
export class ButtonSettingsComponent implements OnInit {
  grid: boolean[][];
  xAxis: number;
  yAxis: number;
  selection: boolean;

  constructor() { 

  }


  ngOnInit() {
    this.xAxis = 0;
    this.yAxis = 0;
    this.selection = true;
    this.grid = [[false, false, false, false],
                 [false, false, false, false],
                 [false, false, false, false],
                 [false, false, false, false]];
  }

  reset() {
    this.grid = [[false, false, false, false],
                 [false, false, false, false],
                 [false, false, false, false],
                 [false, false, false, false]];
  }

  selectX(xVal) {
    this.xAxis = xVal-1;
  }

  selectY(yVal) {
    this.yAxis = yVal-1;
  }

  selectStatus(stat) {
    this.selection = stat;
  }

  change() {
    this.grid[this.xAxis][this.yAxis] = this.selection;
  }
}