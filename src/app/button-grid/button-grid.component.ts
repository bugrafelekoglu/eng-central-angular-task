import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-grid',
  templateUrl: './button-grid.component.html',
  styleUrls: ['./button-grid.component.css']
})
export class ButtonGridComponent implements OnInit {
  // Boolean grid comes from button-settings to create button grid
  @Input() grid: boolean[][];
  @Output() forwardToggle = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  // Receives status info and forwards it to button-settings
  receiveToggle(event) {
    this.forwardToggle.emit(event);
  }
}