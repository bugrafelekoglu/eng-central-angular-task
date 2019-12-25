import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-on-off-button',
  templateUrl: './on-off-button.component.html',
  styleUrls: ['./on-off-button.component.css']
})
export class OnOffButtonComponent implements OnInit {
  @Input() status: boolean;
  @Input() x: number;
  @Input() y: number;
  @Output() toggleEvent = new EventEmitter();

  btnStyle = {true: 'btn-on', false: 'btn-off'};
  title = {true: 'ON', false: 'OFF'};

  constructor() { }

  ngOnInit() { }

  toggle() {
    this.toggleEvent.emit({status: !this.status, x:this.x, y:this.y});
  }
}