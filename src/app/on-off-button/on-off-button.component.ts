import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-on-off-button',
  templateUrl: './on-off-button.component.html',
  styleUrls: ['./on-off-button.component.css']
})
export class OnOffButtonComponent implements OnInit {
  // Each button takes their location and current status from parent button-grid
  @Input() status: boolean;
  @Input() row: number;
  @Input() column: number;
  @Output() toggleEvent = new EventEmitter();

  // Two properties of button adapts themselves to changes
  private btnStyle = {true: 'btn-on', false: 'btn-off'};
  private title = {true: 'ON', false: 'OFF'};

  constructor() { }

  ngOnInit() { }

  // When button is clicked, the status info sent to button-grid
  toggle() {
    this.toggleEvent.emit({status: !this.status, row:this.row, column:this.column});
  }
}